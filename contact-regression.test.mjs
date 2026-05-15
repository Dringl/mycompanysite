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

test("contact right column uses top-aligned card layout instead of vertically centered stack", async () => {
  const contactSectionSource = await read("src/components/sections/misc/ContactSection.astro");
  const contactBlockSource = await read("src/components/ui/blocks/ContactIconBlock.astro");

  assert.doesNotMatch(contactSectionSource, /justify-center/);
  assert.match(contactSectionSource, /items-start/);
  assert.match(contactBlockSource, /shrink-0/);
});
