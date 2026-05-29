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

const HAN_RE = /[\p{Script=Han}]/u;

const readStrict = async (relativePath) => {
  try {
    return await read(relativePath);
  } catch (error) {
    throw new Error(`${relativePath}: ${error.message}`);
  }
};

const assertNoHanCharacters = (source, relativePath) => {
  assert.doesNotMatch(source, HAN_RE, `${relativePath} still contains Han characters`);
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

test("navbar renders contact CTA before the language toggle", async () => {
  const navbarSource = await read("src/components/sections/navbar&footer/Navbar.astro");

  assert.match(navbarSource, /Contact Us/);
  assert.match(navbarSource, /EN/);
  assert.ok(
    navbarSource.indexOf("href={contactUrl}") < navbarSource.indexOf("href={languageToggleUrl}"),
    "contact CTA should render before the language toggle",
  );
});

test("primary navigation uses product and service naming in both languages", async () => {
  const companySource = await read("src/data_files/company.ts");
  const companyEnSource = await read("src/data_files/company.en.ts");

  assert.match(companySource, /name:\s*"产品与服务"/);
  assert.match(companyEnSource, /name:\s*"Products & Services"/);
});

test("footer brand uses the standard logo asset without inversion", async () => {
  const footerSource = await read("src/components/sections/navbar&footer/FooterSection.astro");

  assert.match(footerSource, /import brandIcon from "@images\/logo\.png"/);
  assert.doesNotMatch(footerSource, /logo_trans\.png/);
  assert.doesNotMatch(footerSource, /invert/);
});

test("homepage hero copy rolls back to the previously approved version", async () => {
  const companySource = await read("src/data_files/company.ts");

  assert.match(companySource, /title:\s*"加速无人化装备普及补全生活生产每一环从源头解放劳动力"/);
  assert.match(companySource, /brandTitle:\s*"补全星科技"/);
  assert.match(
    companySource,
    /subTitle:\s*"围绕无人化装备零件供应、核心系统供应、通用底盘供应与场景解决方案服务，补全科研到落地全链条；产品不是我们的目的，解放劳动力是我们的终极目标。"/,
  );
});

test("homepage first pillar uses a parts-focused replacement image", async () => {
  const companySource = await read("src/data_files/company.ts");

  assert.match(companySource, /import homePillars01 from "@\/images\/pages\/home\/home-pillars-01\.(png|jpe?g|jpg|avif)"/);
  assert.match(
    companySource,
    /\{\s*title:\s*"无人化装备零件",\s*summary:\s*"围绕动力和控制，供应无人化装备系统集成所需的关键零件。",\s*image:\s*homePillars01,\s*\}/,
  );
  assert.doesNotMatch(
    companySource,
    /\{\s*title:\s*"无人化装备零件",\s*summary:\s*"围绕动力和控制，供应无人化装备系统集成所需的关键零件。",\s*image:\s*homePillars02,\s*\}/,
  );
});

test("homepage video showcase copy matches the refresh plan", async () => {
  const indexSource = await read("src/pages/index.astro");
  const videoShowcaseSource = await read("src/components/sections/landing/VideoShowcase.astro");

  assert.match(indexSource, /title="通过一段短片快速了解补全星科技"/);
  assert.match(indexSource, /subTitle="通过一段简短介绍，快速理解补全星科技如何围绕平台能力、交付链路与场景延展来推进无人化装备落地。"/);
  assert.match(indexSource, /以无人化装备平台能力为起点，建立面对多行业任务的通用基础。/);
  assert.match(indexSource, /从关键零部件、核心系统到通用底盘与方案服务，形成更完整的能力链路。/);
  assert.match(indexSource, /农业是重要落地方向之一，同时面向巡检、公共服务与复合型任务场景持续延展。/);
  assert.doesNotMatch(videoShowcaseSource, /text-balance/);
  assert.match(videoShowcaseSource, /xl:whitespace-nowrap/);
});


test("contact page exposes consulting phone in the contact info area", async () => {
  const contactSectionSource = await read("src/components/sections/misc/ContactSection.astro");

  assert.match(contactSectionSource, /18622472119/);
  assert.match(contactSectionSource, /刘先生/);
});

test("services page includes a product catalog module backed by product materials", async () => {
  const servicesSource = await read("src/pages/services.astro");
  const enServicesSource = await read("src/pages/en/services.astro");
  const productsSource = await read("src/data_files/products.ts");

  assert.match(servicesSource, /ProductCatalog/);
  assert.match(productsSource, /无人车零部件/);
  assert.match(productsSource, /无人车核心系统/);
  assert.match(productsSource, /无人车通用底盘/);
  assert.match(productsSource, /无人机零部件/);
  assert.match(productsSource, /场景解决方案/);
  assert.ok(
    servicesSource.indexOf("<ProductCatalog") < servicesSource.indexOf("sectionImages.map"),
    "Chinese services page should render ProductCatalog before service sections",
  );
  assert.ok(
    enServicesSource.indexOf("<ProductCatalog") < enServicesSource.indexOf("sectionImages.map"),
    "English services page should render ProductCatalog before service sections",
  );
});

test("solutions pages replace all four scene images with curated page assets", async () => {
  const solutionsSource = await read("src/pages/solutions.astro");
  const enSolutionsSource = await read("src/pages/en/solutions.astro");

  assert.match(solutionsSource, /solutions-section-01-image-01/);
  assert.match(solutionsSource, /solutions-section-01-image-02/);
  assert.match(solutionsSource, /solutions-section-02-image/);
  assert.match(solutionsSource, /solutions-section-03-image-01/);
  assert.match(solutionsSource, /solutions-section-03-image-02/);
  assert.match(solutionsSource, /solutions-section-04-image/);
  assert.match(enSolutionsSource, /solutions-section-01-image-01/);
  assert.match(enSolutionsSource, /solutions-section-01-image-02/);
  assert.match(enSolutionsSource, /solutions-section-02-image/);
  assert.match(enSolutionsSource, /solutions-section-03-image-01/);
  assert.match(enSolutionsSource, /solutions-section-03-image-02/);
  assert.match(enSolutionsSource, /solutions-section-04-image/);
  assert.doesNotMatch(solutionsSource, /solutions-service-icon-black/);
  assert.doesNotMatch(enSolutionsSource, /solutions-service-icon-black/);
});

test("about keyword summary uses the light business module style", async () => {
  const aboutSource = await read("src/pages/about.astro");
  const enAboutSource = await read("src/pages/en/about.astro");

  assert.match(aboutSource, /bg-\[color:var\(--surface-1\)\]/);
  assert.match(enAboutSource, /bg-\[color:var\(--surface-1\)\]/);
  assert.doesNotMatch(aboutSource, /bg-neutral-950\/40/);
  assert.doesNotMatch(enAboutSource, /bg-neutral-950\/40/);
});
test("image targets stay locked to the approved filenames", async () => {
  const solutionsSource = await readStrict("src/pages/solutions.astro");
  const enSolutionsSource = await readStrict("src/pages/en/solutions.astro");
  const caseSource = await readStrict("src/content/products/en/item-a765.md");
  const aboutSource = await readStrict("src/pages/about.astro");
  const enAboutSource = await readStrict("src/pages/en/about.astro");

  assert.match(solutionsSource, /solutions-section-04-image\.jpeg/);
  assert.match(enSolutionsSource, /solutions-section-04-image\.jpeg/);
  assert.match(caseSource, /projects-case-02-main\.jpeg/);
  assert.match(aboutSource, /about-overview-image\.jpeg/);
  assert.match(enAboutSource, /about-overview-image\.jpeg/);
});

test("english site content no longer contains Han characters", async () => {
  const files = [
    "src/content/products/en/item-a765.md",
    "src/content/products/en/item-b203.md",
    "src/content/products/en/item-f303.md",
    "src/content/products/en/item-t845.md",
    "src/data_files/company.en.ts",
    "src/pages/en/projects/index.astro",
    "src/pages/en/projects/[id].astro",
    "src/pages/en/contact.astro",
    "src/pages/en/about.astro",
  ];

  for (const file of files) {
    const source = await readStrict(file);
    assertNoHanCharacters(source, file);
  }
});

test("contact pages use the internationalized phone number", async () => {
  const contactSource = await readStrict("src/pages/contact.astro");
  const enContactSource = await readStrict("src/pages/en/contact.astro");

  assert.match(contactSource, /phoneNumber="86-18622472119"/);
  assert.match(enContactSource, /phoneNumber="86-18622472119"/);
  assert.doesNotMatch(contactSource, /phoneNumber="18622472119"/);
  assert.doesNotMatch(enContactSource, /phoneNumber="18622472119"/);
});
