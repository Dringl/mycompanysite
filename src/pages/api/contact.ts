import type { APIRoute } from "astro";

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

  const webhookUrl = import.meta.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return new Response(
      JSON.stringify({ ok: false, message: "未配置 CONTACT_WEBHOOK_URL。" }),
      { status: 503, headers: jsonHeaders },
    );
  }

  const upstream = await fetch(webhookUrl, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(payload),
  });

  if (!upstream.ok) {
    return new Response(
      JSON.stringify({ ok: false, message: "咨询转发失败，请稍后重试。" }),
      { status: 502, headers: jsonHeaders },
    );
  }

  return new Response(
    JSON.stringify({ ok: true, message: "提交成功，我们会尽快与您联系。" }),
    { status: 200, headers: jsonHeaders },
  );
};
