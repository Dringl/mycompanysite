import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const jsonHeaders = {
  "Content-Type": "application/json",
};

const requiredFields = [
  "name",
  "company",
  "contact",
  "inquiryType",
  "details",
] as const;

const defaultNotificationEmail = "15340530127@163.com";
const googleTokenEndpoint = "https://oauth2.googleapis.com/token";
const gmailProfileEndpoint = "https://gmail.googleapis.com/gmail/v1/users/me/profile";
const gmailSendEndpoint = "https://gmail.googleapis.com/gmail/v1/users/me/messages/send";

type ContactPayload = Record<(typeof requiredFields)[number], string>;

type EnvLookup = Record<string, string | undefined>;

type HermesGoogleToken = {
  refresh_token?: string;
  client_id?: string;
  client_secret?: string;
  account?: string;
};

const getEnv = (): EnvLookup => {
  const importMetaEnv = typeof import.meta !== "undefined" ? import.meta.env : undefined;

  return {
    CONTACT_WEBHOOK_URL: importMetaEnv?.CONTACT_WEBHOOK_URL ?? process.env.CONTACT_WEBHOOK_URL,
    CONTACT_NOTIFICATION_EMAIL:
      importMetaEnv?.CONTACT_NOTIFICATION_EMAIL ?? process.env.CONTACT_NOTIFICATION_EMAIL,
    GOOGLE_WORKSPACE_CLIENT_ID:
      importMetaEnv?.GOOGLE_WORKSPACE_CLIENT_ID ?? process.env.GOOGLE_WORKSPACE_CLIENT_ID,
    GOOGLE_WORKSPACE_CLIENT_SECRET:
      importMetaEnv?.GOOGLE_WORKSPACE_CLIENT_SECRET ?? process.env.GOOGLE_WORKSPACE_CLIENT_SECRET,
    GOOGLE_WORKSPACE_REFRESH_TOKEN:
      importMetaEnv?.GOOGLE_WORKSPACE_REFRESH_TOKEN ?? process.env.GOOGLE_WORKSPACE_REFRESH_TOKEN,
    GOOGLE_WORKSPACE_SENDER_EMAIL:
      importMetaEnv?.GOOGLE_WORKSPACE_SENDER_EMAIL ?? process.env.GOOGLE_WORKSPACE_SENDER_EMAIL,
  };
};

const encodeMimeHeader = (value: string) => `=?UTF-8?B?${Buffer.from(value).toString("base64")}?=`;
const senderDisplayName = encodeMimeHeader("补全星助手");

const readHermesGoogleToken = async (): Promise<HermesGoogleToken | null> => {
  try {
    const tokenFile = path.join(os.homedir(), ".hermes", "google_token.json");
    const raw = await readFile(tokenFile, "utf8");
    const token = JSON.parse(raw) as HermesGoogleToken;

    if (!token.refresh_token || !token.client_id || !token.client_secret) {
      return null;
    }

    return token;
  } catch {
    return null;
  }
};

const encodeBase64Url = (value: string) =>
  Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

const normalizePayload = (payload: Record<string, unknown>): ContactPayload => {
  const normalized = {} as ContactPayload;

  for (const key of requiredFields) {
    normalized[key] = String(payload[key]).trim();
  }

  return normalized;
};

const createMessage = (payload: ContactPayload, recipient: string, sender: string) => {
  const subject = encodeMimeHeader(`官网咨询线索 | ${payload.company} | ${payload.name}`);
  const body = [
    "官网收到新的咨询线索。",
    "",
    `姓名：${payload.name}`,
    `公司名称：${payload.company}`,
    `联系方式：${payload.contact}`,
    `需求类型：${payload.inquiryType}`,
    "需求描述：",
    payload.details,
  ].join("\n");

  return [
    `From: ${senderDisplayName} <${sender}>`,
    `To: ${recipient}`,
    `Subject: ${subject}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "MIME-Version: 1.0",
    "",
    body,
  ].join("\r\n");
};


const getGoogleAccessToken = async (clientId: string, clientSecret: string, refreshToken: string) => {
  const response = await fetch(googleTokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    throw new Error("Google Workspace 访问令牌获取失败。");
  }

  const result = (await response.json()) as { access_token?: string };

  if (!result.access_token) {
    throw new Error("Google Workspace 未返回 access token。");
  }

  return result.access_token;
};

const getGoogleWorkspaceSender = async (accessToken: string, sender?: string) => {
  if (sender) {
    return sender;
  }

  const response = await fetch(gmailProfileEndpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Google Workspace 发件邮箱获取失败。");
  }

  const result = (await response.json()) as { emailAddress?: string };

  if (!result.emailAddress) {
    throw new Error("Google Workspace 未返回发件邮箱。");
  }

  return result.emailAddress;
};

const sendViaGoogleWorkspace = async (payload: ContactPayload) => {
  const env = getEnv();
  const hermesToken = await readHermesGoogleToken();
  const clientId = env.GOOGLE_WORKSPACE_CLIENT_ID ?? hermesToken?.client_id;
  const clientSecret = env.GOOGLE_WORKSPACE_CLIENT_SECRET ?? hermesToken?.client_secret;
  const refreshToken = env.GOOGLE_WORKSPACE_REFRESH_TOKEN ?? hermesToken?.refresh_token;
  const configuredSender = env.GOOGLE_WORKSPACE_SENDER_EMAIL ?? hermesToken?.account;
  const recipient = env.CONTACT_NOTIFICATION_EMAIL ?? defaultNotificationEmail;

  if (!clientId || !clientSecret || !refreshToken) {
    return false;
  }

  const accessToken = await getGoogleAccessToken(clientId, clientSecret, refreshToken);
  const sender = await getGoogleWorkspaceSender(accessToken, configuredSender);
  const raw = encodeBase64Url(createMessage(payload, recipient, sender));
  const response = await fetch(gmailSendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw }),
  });

  if (!response.ok) {
    throw new Error("Google Workspace 邮件发送失败。");
  }

  return true;
};

const forwardViaWebhook = async (payload: ContactPayload) => {
  const webhookUrl = getEnv().CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const upstream = await fetch(webhookUrl, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(payload),
  });

  if (!upstream.ok) {
    throw new Error("咨询转发失败，请稍后重试。");
  }

  return true;
};

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ ok: false, message: "请求体必须为 JSON。" }),
      { status: 400, headers: jsonHeaders },
    );
  }

  for (const key of requiredFields) {
    const value = payload[key];
    if (!value || String(value).trim().length === 0) {
      return new Response(
        JSON.stringify({ ok: false, message: `缺少字段：${key}` }),
        { status: 400, headers: jsonHeaders },
      );
    }
  }

  const normalizedPayload = normalizePayload(payload);

  try {
    const notifiedByMail = await sendViaGoogleWorkspace(normalizedPayload);
    const forwardedByWebhook = await forwardViaWebhook(normalizedPayload);

    if (!notifiedByMail && !forwardedByWebhook) {
      return new Response(
        JSON.stringify({ ok: false, message: "未配置邮件通知或 webhook 链路。" }),
        { status: 503, headers: jsonHeaders },
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: error instanceof Error ? error.message : "提交失败，请稍后重试。",
      }),
      { status: 502, headers: jsonHeaders },
    );
  }

  return new Response(
    JSON.stringify({
      ok: true,
      message: "提交成功，我们会尽快与您联系。",
    }),
    { status: 200, headers: jsonHeaders },
  );
};
