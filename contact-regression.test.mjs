import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = "/data/work/web/mycompanysite/.claude/worktrees/website-visual-refresh";

const read = async (relativePath) =>
  fs.readFile(path.join(root, relativePath), "utf8");

const decodeBase64Url = (value) => {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4 || 4)) % 4);
  return Buffer.from(padded, "base64").toString("utf8");
};


test("contact API succeeds with Hermes local Google token fallback and uses clean mail headers", async () => {
  const tempHome = await fs.mkdtemp(path.join(os.tmpdir(), "bq-hermes-home-"));
  await fs.mkdir(path.join(tempHome, ".hermes"), { recursive: true });
  await fs.writeFile(
    path.join(tempHome, ".hermes", "google_token.json"),
    JSON.stringify({
      refresh_token: "refresh-token",
      client_id: "client-id",
      client_secret: "client-secret",
      token_uri: "https://oauth2.googleapis.com/token",
      account: "sender@example.com",
    }),
    "utf8",
  );

  const originalHome = process.env.HOME;
  const originalFetch = globalThis.fetch;
  const sentRequests = [];

  process.env.HOME = tempHome;
  delete process.env.GOOGLE_WORKSPACE_CLIENT_ID;
  delete process.env.GOOGLE_WORKSPACE_CLIENT_SECRET;
  delete process.env.GOOGLE_WORKSPACE_REFRESH_TOKEN;
  delete process.env.GOOGLE_WORKSPACE_SENDER_EMAIL;
  delete process.env.CONTACT_WEBHOOK_URL;
  delete process.env.CONTACT_NOTIFICATION_EMAIL;

  globalThis.fetch = async (input, init) => {
    const url = String(input);

    if (url === "https://oauth2.googleapis.com/token") {
      return new Response(JSON.stringify({ access_token: "access-token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url === "https://gmail.googleapis.com/gmail/v1/users/me/messages/send") {
      sentRequests.push({ input, init });
      return new Response(JSON.stringify({ id: "message-id" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    throw new Error(`Unexpected fetch URL: ${url}`);
  };

  try {
    const contactApiUrl = new URL(
      pathToFileURL(path.join(root, "src/pages/api/contact.ts")).href,
    );
    contactApiUrl.searchParams.set("t", Date.now().toString());
    const { POST } = await import(contactApiUrl.href);

    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "测试联系人",
        company: "补全星测试",
        contact: "13800000000",
        inquiryType: "通用底盘合作",
        details: "用于验证 Hermes 邮件通知桥接。",
      }),
    });

    const response = await POST({ request });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.ok, true);
    assert.equal(sentRequests.length, 1);

    const payload = JSON.parse(String(sentRequests[0].init?.body ?? "{}"));
    const rawMessage = decodeBase64Url(payload.raw);

    assert.match(rawMessage, /^From: =\?UTF-8\?B\?6KGl5YWo5pif5Yqp5omL\?= <sender@example.com>$/m);
    assert.match(rawMessage, /^To: 15340530127@163.com$/m);
    assert.match(rawMessage, /^Subject: =\?UTF-8\?B\?.+\?=$/m);
    assert.match(rawMessage, /官网收到新的咨询线索。/);
  } finally {
    globalThis.fetch = originalFetch;
    process.env.HOME = originalHome;
  }
});

test("contact API succeeds without Hermes file when Google Workspace env is complete", async () => {
  const tempHome = await fs.mkdtemp(path.join(os.tmpdir(), "bq-no-hermes-home-"));
  const originalHome = process.env.HOME;
  const originalFetch = globalThis.fetch;
  const sentRequests = [];

  process.env.HOME = tempHome;
  process.env.GOOGLE_WORKSPACE_CLIENT_ID = "env-client-id";
  process.env.GOOGLE_WORKSPACE_CLIENT_SECRET = "env-client-secret";
  process.env.GOOGLE_WORKSPACE_REFRESH_TOKEN = "env-refresh-token";
  process.env.GOOGLE_WORKSPACE_SENDER_EMAIL = "env-sender@example.com";
  process.env.CONTACT_NOTIFICATION_EMAIL = "ops@example.com";
  delete process.env.CONTACT_WEBHOOK_URL;

  globalThis.fetch = async (input, init) => {
    const url = String(input);

    if (url === "https://oauth2.googleapis.com/token") {
      return new Response(JSON.stringify({ access_token: "env-access-token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url === "https://gmail.googleapis.com/gmail/v1/users/me/messages/send") {
      sentRequests.push({ input, init });
      return new Response(JSON.stringify({ id: "env-message-id" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    throw new Error(`Unexpected fetch URL: ${url}`);
  };

  try {
    const contactApiUrl = new URL(
      pathToFileURL(path.join(root, "src/pages/api/contact.ts")).href,
    );
    contactApiUrl.searchParams.set("t", `${Date.now()}-env`);
    const { POST } = await import(contactApiUrl.href);

    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "环境变量联系人",
        company: "补全星环境测试",
        contact: "test@example.com",
        inquiryType: "部件配套咨询",
        details: "用于验证无 Hermes 文件时也能使用受控环境变量发送邮件。",
      }),
    });

    const response = await POST({ request });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.ok, true);
    assert.equal(sentRequests.length, 1);

    const payload = JSON.parse(String(sentRequests[0].init?.body ?? "{}"));
    const rawMessage = decodeBase64Url(payload.raw);

    assert.match(rawMessage, /^From: =\?UTF-8\?B\?6KGl5YWo5pif5Yqp5omL\?= <env-sender@example.com>$/m);
    assert.match(rawMessage, /^To: ops@example.com$/m);
    assert.doesNotMatch(rawMessage, /^From: =\?UTF-8\?B\?6KGl5YWo5pif5Yqp5omL\?= <sender@example.com>$/m);
  } finally {
    globalThis.fetch = originalFetch;
    process.env.HOME = originalHome;
    delete process.env.GOOGLE_WORKSPACE_CLIENT_ID;
    delete process.env.GOOGLE_WORKSPACE_CLIENT_SECRET;
    delete process.env.GOOGLE_WORKSPACE_REFRESH_TOKEN;
    delete process.env.GOOGLE_WORKSPACE_SENDER_EMAIL;
    delete process.env.CONTACT_NOTIFICATION_EMAIL;
  }
});

test("contact API falls back to Hermes as a full credential set when Google Workspace env is incomplete", async () => {
  const tempHome = await fs.mkdtemp(path.join(os.tmpdir(), "bq-partial-env-home-"));
  await fs.mkdir(path.join(tempHome, ".hermes"), { recursive: true });
  await fs.writeFile(
    path.join(tempHome, ".hermes", "google_token.json"),
    JSON.stringify({
      refresh_token: "hermes-refresh-token",
      client_id: "hermes-client-id",
      client_secret: "hermes-client-secret",
      token_uri: "https://oauth2.googleapis.com/token",
      account: "hermes-sender@example.com",
    }),
    "utf8",
  );

  const originalHome = process.env.HOME;
  const originalFetch = globalThis.fetch;
  const sentRequests = [];
  const tokenRequests = [];

  process.env.HOME = tempHome;
  process.env.GOOGLE_WORKSPACE_CLIENT_ID = "partial-env-client-id";
  delete process.env.GOOGLE_WORKSPACE_CLIENT_SECRET;
  delete process.env.GOOGLE_WORKSPACE_REFRESH_TOKEN;
  delete process.env.GOOGLE_WORKSPACE_SENDER_EMAIL;
  process.env.CONTACT_NOTIFICATION_EMAIL = "fallback@example.com";
  delete process.env.CONTACT_WEBHOOK_URL;

  globalThis.fetch = async (input, init) => {
    const url = String(input);

    if (url === "https://oauth2.googleapis.com/token") {
      tokenRequests.push({ input, init });
      return new Response(JSON.stringify({ access_token: "fallback-access-token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url === "https://gmail.googleapis.com/gmail/v1/users/me/messages/send") {
      sentRequests.push({ input, init });
      return new Response(JSON.stringify({ id: "fallback-message-id" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    throw new Error(`Unexpected fetch URL: ${url}`);
  };

  try {
    const contactApiUrl = new URL(
      pathToFileURL(path.join(root, "src/pages/api/contact.ts")).href,
    );
    contactApiUrl.searchParams.set("t", `${Date.now()}-partial-env`);
    const { POST } = await import(contactApiUrl.href);

    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "回退联系人",
        company: "补全星回退测试",
        contact: "fallback@example.com",
        inquiryType: "场景方案服务",
        details: "用于验证不完整 env 时应整体回退 Hermes 凭据。",
      }),
    });

    const response = await POST({ request });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.ok, true);
    assert.equal(tokenRequests.length, 1);
    assert.equal(sentRequests.length, 1);

    const tokenBody = String(tokenRequests[0].init?.body ?? "");
    assert.match(tokenBody, /(^|&)client_id=hermes-client-id(&|$)/);
    assert.match(tokenBody, /(^|&)client_secret=hermes-client-secret(&|$)/);
    assert.match(tokenBody, /(^|&)refresh_token=hermes-refresh-token(&|$)/);
    assert.doesNotMatch(tokenBody, /partial-env-client-id/);

    const payload = JSON.parse(String(sentRequests[0].init?.body ?? "{}"));
    const rawMessage = decodeBase64Url(payload.raw);

    assert.match(rawMessage, /^From: =\?UTF-8\?B\?6KGl5YWo5pif5Yqp5omL\?= <hermes-sender@example.com>$/m);
    assert.match(rawMessage, /^To: fallback@example.com$/m);
  } finally {
    globalThis.fetch = originalFetch;
    process.env.HOME = originalHome;
    delete process.env.GOOGLE_WORKSPACE_CLIENT_ID;
    delete process.env.GOOGLE_WORKSPACE_CLIENT_SECRET;
    delete process.env.GOOGLE_WORKSPACE_REFRESH_TOKEN;
    delete process.env.GOOGLE_WORKSPACE_SENDER_EMAIL;
    delete process.env.CONTACT_NOTIFICATION_EMAIL;
  }
});

test("homepage advantage area uses platform poster image instead of aerial-view asset", async () => {
  const companySource = await read("src/data_files/company.ts");

  assert.match(companySource, /import homeAdvantageVisualImage from "@\/images\/shared\/shared-company-intro-poster\.jpeg"/);
  assert.match(
    companySource,
    /homeAdvantageVisual\s*=\s*\{[\s\S]*src:\s*homeAdvantageVisualImage/,
  );
});

test("video showcase poster uses the blue chassis image asset", async () => {
  const videoShowcaseSource = await read("src/components/sections/landing/VideoShowcase.astro");

  assert.match(
    videoShowcaseSource,
    /import videoPoster from "@images\/shared\/shared-company-aerial-view\.avif"/,
  );
});

test("contact page card data uses importable semantic icon source", async () => {
  const { contactHighlightCards } = await import(
    pathToFileURL(path.join(root, "src/data_files/contact-highlights.mjs")).href,
  );
  const { Icons } = await import(
    pathToFileURL(path.join(root, "src/components/ui/icons/icons.ts")).href,
  );
  const contactSectionSource = await read("src/components/sections/misc/ContactSection.astro");

  const showcaseItem = contactHighlightCards.find((item) => item.heading === "了解典型案例");

  assert.equal(showcaseItem?.icon, "contactChannel");
  assert.ok(contactHighlightCards.every((item) => typeof item.icon === "string" && item.icon in Icons));
  assert.match(contactSectionSource, /contactHighlightCards\.map\(\(item\) => \(/);
  assert.match(contactSectionSource, /<Icon name=\{item\.icon\} \/>/);
  assert.doesNotMatch(contactSectionSource, /contactHighlightCards\[[^\]]+\]/);
  assert.doesNotMatch(contactSectionSource, /contactHighlights\[[^\]]+\]/);
});

test("contact inquiry form uses inline success qr card instead of HSOverlay modal", async () => {
  const inquiryFormSource = await read("src/components/sections/misc/InquiryForm.astro");

  assert.match(inquiryFormSource, /data-inquiry-success-card/);
  assert.match(inquiryFormSource, /data-inquiry-form-body/);
  assert.match(inquiryFormSource, /data-inquiry-reset/);
  assert.match(inquiryFormSource, /提交成功，欢迎微信继续沟通/);
  assert.doesNotMatch(inquiryFormSource, /window\.HSOverlay\.open/);
  assert.doesNotMatch(inquiryFormSource, /hs-overlay/);
});

