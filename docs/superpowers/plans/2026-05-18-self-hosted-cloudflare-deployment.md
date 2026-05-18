# Self-Hosted Cloudflare Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将当前 Astro 站点从 `@astrojs/vercel` 迁移到 Ubuntu/Debian 云服务器可长期运行的 `@astrojs/node` 自托管方案，并接入 Nginx、systemd、Cloudflare 与正式联系表单通知链路。

**Architecture:** 保留现有 Astro SSR 与 `/api/contact` 结构，不拆前后端；把 adapter 切换到 `@astrojs/node`，由 Nginx 将公网请求反向代理到本机回环地址上的 Node 端口 `127.0.0.1:18743`，并把原 `vercel.json` 中的安全头迁移到 Nginx。联系表单在生产环境以 systemd 加载的环境变量作为正式配置来源，Hermes token 回退仅保留给本地开发与测试。

**Tech Stack:** Astro 5, `@astrojs/node`, TypeScript, Node.js LTS, Nginx, systemd, Cloudflare DNS/Proxy, Gmail API, `node:test`

---

## File Map

- Modify: `astro.config.mjs`
  - 切换 adapter，保留 SSR 站点配置
- Modify: `package.json`
  - 调整依赖和生产启动脚本
- Modify: `process-html.mjs`
  - 改掉对 `.vercel/output/static` 的硬编码，转为处理 Node 构建输出
- Modify: `src/pages/api/contact.ts`
  - 区分正式生产 env 与 Hermes 本地回退的使用边界
- Modify: `contact-regression.test.mjs`
  - 增加生产 env 成功路径与联系页第二卡片对齐回归测试
- Modify: `src/components/sections/misc/ContactSection.astro`
  - 明确第二项图标与对齐约束
- Modify: `src/components/ui/icons/icons.ts`
  - 补齐或统一第二项卡片所需图标定义
- Modify: `README.md`
  - 增加 Ubuntu/Debian + Node + Nginx + Cloudflare 的部署说明
- Create: `docs/deployment/nginx/bq-star.conf.example`
  - 提供 Nginx 站点配置示例
- Create: `docs/deployment/systemd/bq-star.service.example`
  - 提供 systemd 服务示例
- Create: `docs/deployment/env/bq-star.env.example`
  - 提供环境变量模板
- Create: `docs/deployment/cloudflare/cloudflare-cutover-checklist.md`
  - 提供 Cloudflare 迁移与切流清单
- Create: `docs/superpowers/plans/2026-05-18-self-hosted-cloudflare-deployment.md`
  - 当前实现计划文档

## Task 1: Add failing regression tests for production contact config and contact card alignment

**Files:**
- Modify: `contact-regression.test.mjs:1-220`
- Test: `contact-regression.test.mjs`

- [ ] **Step 1: Write the failing test for production env-based contact delivery**

Add a new test below the Hermes fallback test in `contact-regression.test.mjs`:

```js
test("contact API succeeds with controlled production env config without Hermes fallback", async () => {
  const tempHome = await fs.mkdtemp(path.join(os.tmpdir(), "bq-no-hermes-home-"));
  const originalHome = process.env.HOME;
  const originalFetch = globalThis.fetch;
  const sentRequests = [];

  process.env.HOME = tempHome;
  process.env.CONTACT_NOTIFICATION_EMAIL = "prod-contact@example.com";
  process.env.GOOGLE_WORKSPACE_CLIENT_ID = "prod-client-id";
  process.env.GOOGLE_WORKSPACE_CLIENT_SECRET = "prod-client-secret";
  process.env.GOOGLE_WORKSPACE_REFRESH_TOKEN = "prod-refresh-token";
  process.env.GOOGLE_WORKSPACE_SENDER_EMAIL = "sender@example.com";
  delete process.env.CONTACT_WEBHOOK_URL;

  globalThis.fetch = async (input, init) => {
    const url = String(input);

    if (url === "https://oauth2.googleapis.com/token") {
      return new Response(JSON.stringify({ access_token: "prod-access-token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url === "https://gmail.googleapis.com/gmail/v1/users/me/messages/send") {
      sentRequests.push({ input, init });
      return new Response(JSON.stringify({ id: "prod-message-id" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    throw new Error(`Unexpected fetch URL: ${url}`);
  };

  try {
    const contactApiUrl = new URL(pathToFileURL(path.join(root, "src/pages/api/contact.ts")).href);
    contactApiUrl.searchParams.set("t", `${Date.now()}-prod-env`);
    const { POST } = await import(contactApiUrl.href);

    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "生产联系人",
        company: "补全星正式站",
        contact: "prod@example.com",
        inquiryType: "场景方案服务",
        details: "验证受控 env 可以独立完成正式邮件通知。",
      }),
    });

    const response = await POST({ request });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.ok, true);
    assert.equal(sentRequests.length, 1);

    const payload = JSON.parse(String(sentRequests[0].init?.body ?? "{}"));
    const rawMessage = decodeBase64Url(payload.raw);

    assert.match(rawMessage, /^To: prod-contact@example.com$/m);
    assert.match(rawMessage, /^From: =\?UTF-8\?B\?6KGl5YWo5pif5Yqp5omL\?= <sender@example.com>$/m);
    assert.match(rawMessage, /生产联系人/);
  } finally {
    globalThis.fetch = originalFetch;
    process.env.HOME = originalHome;
    delete process.env.CONTACT_NOTIFICATION_EMAIL;
    delete process.env.GOOGLE_WORKSPACE_CLIENT_ID;
    delete process.env.GOOGLE_WORKSPACE_CLIENT_SECRET;
    delete process.env.GOOGLE_WORKSPACE_REFRESH_TOKEN;
    delete process.env.GOOGLE_WORKSPACE_SENDER_EMAIL;
  }
});
```

- [ ] **Step 2: Write the failing test for the second contact card icon alignment contract**

Add a second new test in `contact-regression.test.mjs`:

```js
test("contact case-study card uses a dedicated aligned icon instead of a missing or inconsistent briefcase icon", async () => {
  const contactSectionSource = await read("src/components/sections/misc/ContactSection.astro");
  const iconsSource = await read("src/components/ui/icons/icons.ts");

  assert.match(contactSectionSource, /name=\{index === 0 \? "chatBubble" : index === 1 \? "caseStudy" : index === 2 \? "openInNew" : "question"\}/);
  assert.match(
    iconsSource,
    /caseStudy:\s*\{[\s\S]*class:\s*\"mt-1\.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400\"/,
  );
});
```

- [ ] **Step 3: Run the regression test file to verify the new tests fail**

Run:

```bash
node --test contact-regression.test.mjs
```

Expected:
- Existing tests may pass
- The new production env test or the new icon-alignment test must fail
- The failure should specifically mention the missing env-backed behavior contract or missing `caseStudy` icon contract, not a syntax error

- [ ] **Step 4: Commit the failing-test checkpoint if your workflow requires it, otherwise proceed directly**

If you want a red-phase commit:

```bash
git add contact-regression.test.mjs
git commit -m "test: cover self-hosted contact delivery and card icon alignment"
```

Otherwise skip the commit and continue to Task 2.

## Task 2: Implement production-safe contact configuration behavior and fix contact card icon alignment

**Files:**
- Modify: `src/pages/api/contact.ts:1-270`
- Modify: `src/components/sections/misc/ContactSection.astro:1-60`
- Modify: `src/components/ui/icons/icons.ts:340-430`
- Test: `contact-regression.test.mjs`

- [ ] **Step 1: Implement minimal contact configuration split in `src/pages/api/contact.ts`**

Refactor the environment handling so production-facing logic is explicit. Add a helper above `sendViaGoogleWorkspace`:

```ts
const hasGoogleWorkspaceEnv = (env: EnvLookup) =>
  Boolean(
    env.GOOGLE_WORKSPACE_CLIENT_ID &&
      env.GOOGLE_WORKSPACE_CLIENT_SECRET &&
      env.GOOGLE_WORKSPACE_REFRESH_TOKEN,
  );
```

Then update `sendViaGoogleWorkspace` to prefer complete env credentials before falling back to Hermes:

```ts
const sendViaGoogleWorkspace = async (payload: ContactPayload) => {
  const env = getEnv();
  const hermesToken = await readHermesGoogleToken();
  const useHermesFallback = !hasGoogleWorkspaceEnv(env);

  const clientId = useHermesFallback
    ? env.GOOGLE_WORKSPACE_CLIENT_ID ?? hermesToken?.client_id
    : env.GOOGLE_WORKSPACE_CLIENT_ID;
  const clientSecret = useHermesFallback
    ? env.GOOGLE_WORKSPACE_CLIENT_SECRET ?? hermesToken?.client_secret
    : env.GOOGLE_WORKSPACE_CLIENT_SECRET;
  const refreshToken = useHermesFallback
    ? env.GOOGLE_WORKSPACE_REFRESH_TOKEN ?? hermesToken?.refresh_token
    : env.GOOGLE_WORKSPACE_REFRESH_TOKEN;
  const configuredSender = useHermesFallback
    ? env.GOOGLE_WORKSPACE_SENDER_EMAIL ?? hermesToken?.account
    : env.GOOGLE_WORKSPACE_SENDER_EMAIL;
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
```

- [ ] **Step 2: Replace the unstable second-card icon contract in `src/components/sections/misc/ContactSection.astro`**

Update the icon selection expression:

```astro
<Icon
  name={index === 0 ? "chatBubble" : index === 1 ? "caseStudy" : index === 2 ? "openInNew" : "question"}
/>
```

- [ ] **Step 3: Add the aligned `caseStudy` icon definition in `src/components/ui/icons/icons.ts`**

Add a new icon entry next to `question`, `chatBubble`, or `mapPin` with matching sizing and alignment classes:

```ts
caseStudy: {
  paths: [
    {
      d: "M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Zm3 1.5v7.5h10.5v-7.5H6.75Zm1.5 1.5h4.5v1.5h-4.5v-1.5Zm0 3h6v1.5h-6v-1.5Z",
    },
  ],
  class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "currentColor",
},
```

- [ ] **Step 4: Run the regression tests to verify the new behavior passes**

Run:

```bash
node --test contact-regression.test.mjs
```

Expected:
- All tests pass
- The env-based contact delivery test proves production can work without Hermes fallback
- The contact card alignment contract test proves the second card now uses a dedicated icon definition with matching alignment classes

- [ ] **Step 5: Commit the minimal bug-fix implementation**

```bash
git add contact-regression.test.mjs src/pages/api/contact.ts src/components/sections/misc/ContactSection.astro src/components/ui/icons/icons.ts
git commit -m "fix: stabilize self-hosted contact delivery setup"
```

## Task 3: Migrate Astro from Vercel adapter to Node adapter and fix build output processing

**Files:**
- Modify: `astro.config.mjs:1-40`
- Modify: `package.json:1-40`
- Modify: `process-html.mjs:1-30`
- Test: `package.json` scripts via `npm run build`

- [ ] **Step 1: Write the failing build-path test by capturing the current incompatibility**

Before editing code, run the production build once after temporarily removing any stale Vercel assumptions from your mental model. The failure you are looking for is the mismatch between the Node output shape and `process-html.mjs` expecting `.vercel/output/static`.

Run:

```bash
npm run build
```

Expected before the adapter migration is complete:
- The project still builds under Vercel assumptions, or
- After changing the adapter in Step 3, `process-html.mjs` will fail because `.vercel/output/static` is no longer the right output directory

This step is the red-phase evidence you will compare against after the implementation.

- [ ] **Step 2: Update `astro.config.mjs` to use `@astrojs/node`**

Replace the adapter import and config:

```js
import node from "@astrojs/node";
```

And update the adapter block to:

```js
adapter: node({
  mode: "standalone",
}),
```

Keep the rest of the config intact, including:
- `site: "https://bq-star.com/"`
- `output: "server"`
- `image.domains`
- `sitemap()`
- `compressor(...)`

- [ ] **Step 3: Update `package.json` for Node production startup**

Change dependencies and scripts so production startup no longer uses `astro dev`:

```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "HOST=127.0.0.1 PORT=18743 node ./dist/server/entry.mjs",
    "build": "astro check && astro build && node process-html.mjs",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/node": "^9.1.0",
    "@astrojs/sitemap": "^3.5.1",
    "@tailwindcss/vite": "^4.1.12",
    "astro": "^5.13.5",
    "astro-compressor": "^1.1.2",
    "clipboard": "^2.0.11",
    "globby": "^14.1.0",
    "gsap": "^3.12.7",
    "html-minifier-terser": "^7.2.0",
    "lenis": "^1.3.11",
    "preline": "^3.2.3",
    "rimraf": "^6.0.1",
    "sharp": "^0.34.3",
    "@img/sharp-linux-x64": "^0.34.3",
    "tailwindcss": "^4.1.12"
  }
}
```

Remove `@astrojs/vercel` from dependencies.

- [ ] **Step 4: Update `process-html.mjs` to process the Node output HTML directory**

Replace the whole file with:

```js
import fs from "node:fs/promises";
import { globby } from "globby";
import { minify } from "html-minifier-terser";

const outputPath = "./dist/client";
const files = await globby(`${outputPath}/**/*.html`);

await Promise.all(
  files.map(async (file) => {
    console.log("Processing file:", file);
    let html = await fs.readFile(file, "utf-8");

    html = await minify(html, {
      removeComments: true,
      preserveLineBreaks: true,
      collapseWhitespace: true,
      minifyJS: true,
    });

    await fs.writeFile(file, html);
  }),
);
```

- [ ] **Step 5: Install the updated dependencies**

Run:

```bash
npm install
```

Expected:
- `@astrojs/node` added
- `@astrojs/vercel` removed from lockfile
- install exits successfully

- [ ] **Step 6: Run the build to verify the Node adapter path is now correct**

Run:

```bash
npm run build
```

Expected:
- `astro check` passes
- `astro build` passes using the Node adapter
- `node process-html.mjs` completes without complaining about `.vercel/output/static`

- [ ] **Step 7: Commit the deployment runtime migration**

```bash
git add astro.config.mjs package.json package-lock.json process-html.mjs
git commit -m "refactor: migrate astro runtime to self-hosted node"
```

## Task 4: Document production deployment assets for Nginx, systemd, env, and Cloudflare cutover

**Files:**
- Create: `docs/deployment/nginx/bq-star.conf.example`
- Create: `docs/deployment/systemd/bq-star.service.example`
- Create: `docs/deployment/env/bq-star.env.example`
- Create: `docs/deployment/cloudflare/cloudflare-cutover-checklist.md`
- Modify: `README.md:149-220`

- [ ] **Step 1: Create the environment file template**

Create `docs/deployment/env/bq-star.env.example` with:

```dotenv
HOST=127.0.0.1
PORT=18743
CONTACT_NOTIFICATION_EMAIL=replace-with-your-target-mailbox@example.com
GOOGLE_WORKSPACE_CLIENT_ID=replace-with-google-client-id
GOOGLE_WORKSPACE_CLIENT_SECRET=replace-with-google-client-secret
GOOGLE_WORKSPACE_REFRESH_TOKEN=replace-with-google-refresh-token
GOOGLE_WORKSPACE_SENDER_EMAIL=replace-with-sender@example.com
# Optional fallback channel
CONTACT_WEBHOOK_URL=
```

- [ ] **Step 2: Create the systemd service example**

Create `docs/deployment/systemd/bq-star.service.example` with:

```ini
[Unit]
Description=BQ Star Astro site
After=network.target

[Service]
Type=simple
WorkingDirectory=/var/www/bq-star/current
EnvironmentFile=/etc/bq-star.env
ExecStart=/usr/bin/env node ./dist/server/entry.mjs
Restart=always
RestartSec=5
User=www-data
Group=www-data

[Install]
WantedBy=multi-user.target
```

- [ ] **Step 3: Create the Nginx site config example**

Create `docs/deployment/nginx/bq-star.conf.example` with:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name www.bq-star.com bq-star.com;
    return 301 https://bq-star.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.bq-star.com;

    ssl_certificate /etc/letsencrypt/live/bq-star.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bq-star.com/privkey.pem;

    return 301 https://bq-star.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name bq-star.com;

    ssl_certificate /etc/letsencrypt/live/bq-star.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bq-star.com/privkey.pem;

    add_header Content-Security-Policy "default-src 'self'; base-uri 'self'; form-action 'self'; frame-src 'self'; frame-ancestors 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; connect-src 'self'; object-src 'none'; upgrade-insecure-requests; block-all-mixed-content" always;
    add_header Permissions-Policy "interest-cohort=()" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

    location / {
        proxy_pass http://127.0.0.1:18743;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

- [ ] **Step 4: Create the Cloudflare cutover checklist**

Create `docs/deployment/cloudflare/cloudflare-cutover-checklist.md` with:

```md
# Cloudflare Cutover Checklist

- [ ] Add `bq-star.com` in Cloudflare
- [ ] Copy the assigned Cloudflare nameservers
- [ ] Replace registrar nameservers with the Cloudflare nameservers
- [ ] Wait for Cloudflare zone activation
- [ ] Create proxied A record for `@` to the server public IP
- [ ] Create proxied A record for `www` to the server public IP
- [ ] Set SSL/TLS mode to `Full (strict)`
- [ ] Confirm Nginx serves a valid source certificate
- [ ] Confirm `www.bq-star.com` redirects to `bq-star.com`
- [ ] Confirm the contact form still submits successfully after cutover
```

- [ ] **Step 5: Update `README.md` deployment section**

Replace the deployment section around the existing Vercel/Netlify instructions with a self-hosted sequence:

```md
## Deployment

### Building the site

```bash
npm install
npm run build
```

### Running in production

```bash
HOST=127.0.0.1 PORT=18743 node ./dist/server/entry.mjs
```

### Recommended production stack

- Ubuntu/Debian
- Node.js LTS
- Nginx reverse proxy
- systemd service management
- Cloudflare DNS and proxy

See:
- `docs/deployment/env/bq-star.env.example`
- `docs/deployment/systemd/bq-star.service.example`
- `docs/deployment/nginx/bq-star.conf.example`
- `docs/deployment/cloudflare/cloudflare-cutover-checklist.md`
```

- [ ] **Step 6: Commit the deployment documentation pack**

```bash
git add README.md docs/deployment
git commit -m "docs: add self-hosted deployment runbook"
```

## Task 5: Verify the full self-hosted deployment path locally before server rollout

**Files:**
- Verify: `astro.config.mjs`
- Verify: `package.json`
- Verify: `process-html.mjs`
- Verify: `src/pages/api/contact.ts`
- Verify: `contact-regression.test.mjs`

- [ ] **Step 1: Run the focused regression suite**

Run:

```bash
node --test contact-regression.test.mjs
```

Expected:
- all tests pass
- no failing contact delivery regression
- no failing contact icon alignment regression

- [ ] **Step 2: Run the production build again**

Run:

```bash
npm run build
```

Expected:
- successful Astro check
- successful Node-adapter build
- successful HTML post-processing

- [ ] **Step 3: Start the production server locally on the final loopback port**

Run:

```bash
HOST=127.0.0.1 PORT=18743 node ./dist/server/entry.mjs
```

Expected:
- server starts successfully
- no port-binding errors
- no runtime crash on boot

- [ ] **Step 4: Verify the key self-hosted pages and resources**

In a separate terminal, run:

```bash
curl -I http://127.0.0.1:18743/
curl -I http://127.0.0.1:18743/contact
curl -I http://127.0.0.1:18743/favicon.ico
curl -I http://127.0.0.1:18743/manifest.json
curl -I http://127.0.0.1:18743/videos/company-intro-h264.mp4
```

Expected:
- all endpoints return success responses
- video asset is reachable
- favicon and manifest are reachable

- [ ] **Step 5: Verify the contact API on the locally running production server**

Run:

```bash
curl -s -X POST http://127.0.0.1:18743/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"部署验收","company":"补全星科技","contact":"acceptance@example.com","inquiryType":"场景方案服务","details":"验证 Node 自托管联系表单链路。"}'
```

Expected:
- if env is configured, response is `{"ok":true,...}`
- if env is intentionally not configured in the local shell, the failure message matches the expected configuration gap
- no unexpected runtime exception

- [ ] **Step 6: Stop the local production process cleanly after verification**

Stop the foreground server or terminate the background task explicitly so no stray local process remains.

- [ ] **Step 7: Commit only if verification required code or doc adjustments**

If verification forced changes:

```bash
git add <adjusted-files>
git commit -m "fix: polish self-hosted deployment verification path"
```

If no changes were needed, do not create an empty commit.

## Task 6: Execute the server rollout and Cloudflare cutover with a deterministic checklist

**Files:**
- Use: `docs/deployment/env/bq-star.env.example`
- Use: `docs/deployment/systemd/bq-star.service.example`
- Use: `docs/deployment/nginx/bq-star.conf.example`
- Use: `docs/deployment/cloudflare/cloudflare-cutover-checklist.md`

- [ ] **Step 1: Install runtime packages on the Ubuntu/Debian server**

Run on the server:

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

Install Node.js LTS using your preferred approved source, then verify:

```bash
node -v
npm -v
```

Expected:
- Node.js LTS installed
- Nginx installed
- certbot installed

- [ ] **Step 2: Deploy the application code and build it on the server**

Run on the server:

```bash
sudo mkdir -p /var/www/bq-star
sudo chown -R "$USER":"$USER" /var/www/bq-star
git clone https://github.com/Dringl/mycompanysite.git /var/www/bq-star/current
cd /var/www/bq-star/current
npm install
npm run build
```

Expected:
- repository cloned
- dependencies installed
- production build created successfully

- [ ] **Step 3: Install the environment file and systemd service**

Run on the server after copying the example values into real files:

```bash
sudo cp docs/deployment/env/bq-star.env.example /etc/bq-star.env
sudoedit /etc/bq-star.env
sudo cp docs/deployment/systemd/bq-star.service.example /etc/systemd/system/bq-star.service
sudo systemctl daemon-reload
sudo systemctl enable --now bq-star.service
sudo systemctl status bq-star.service
```

Expected:
- service starts successfully
- Astro app listens on `127.0.0.1:18743`

- [ ] **Step 4: Install and validate the Nginx site config**

Run on the server:

```bash
sudo cp docs/deployment/nginx/bq-star.conf.example /etc/nginx/sites-available/bq-star.conf
sudo ln -sf /etc/nginx/sites-available/bq-star.conf /etc/nginx/sites-enabled/bq-star.conf
sudo nginx -t
sudo systemctl reload nginx
```

Expected:
- Nginx config test succeeds
- reverse proxy is live on port 80 before TLS finalization

- [ ] **Step 5: Issue the source certificate and enable HTTPS**

Run on the server after DNS points at the box:

```bash
sudo certbot --nginx -d bq-star.com -d www.bq-star.com
```

Expected:
- certificate issued
- Nginx updated for TLS
- HTTPS works directly on the origin

- [ ] **Step 6: Cut DNS to Cloudflare and enable the final proxy settings**

Follow `docs/deployment/cloudflare/cloudflare-cutover-checklist.md`, then verify:

```bash
curl -I https://bq-star.com
curl -I https://www.bq-star.com
```

Expected:
- `https://bq-star.com` returns success
- `https://www.bq-star.com` redirects to `https://bq-star.com`
- Cloudflare SSL mode is `Full (strict)`

- [ ] **Step 7: Verify the final contact-form production behavior after cutover**

Submit a real form entry from the live site and verify:
- email arrives at `CONTACT_NOTIFICATION_EMAIL`
- sender shows as `补全星助手`
- no `未配置邮件通知或 webhook 链路` message appears
- service logs are clean:

```bash
sudo journalctl -u bq-star.service -n 100 --no-pager
sudo tail -n 100 /var/log/nginx/access.log
sudo tail -n 100 /var/log/nginx/error.log
```

- [ ] **Step 8: Create the release commit for any final deployment-document or code tweaks**

If final rollout required tracked file changes:

```bash
git add <deployment-or-doc-files>
git commit -m "chore: finalize self-hosted deployment rollout"
```

If rollout did not require repository changes, skip this step.

## Self-Review Checklist

- Spec coverage:
  - Adapter migration → Task 3
  - Nginx/systemd/Cloudflare rollout → Tasks 4 and 6
  - Production contact env chain → Tasks 1, 2, 4, 5, 6
  - Online contact regressions → Tasks 1 and 2
  - Node loopback port `18743` → Tasks 3, 4, 5, 6
  - Validation and rollout order → Tasks 5 and 6
- Placeholder scan:
  - No `TBD`, `TODO`, or vague “later” instructions remain in executable tasks
- Type consistency:
  - `caseStudy` icon name is used consistently in tests and implementation
  - `127.0.0.1:18743` is used consistently in scripts and server docs
  - `@astrojs/node` and `dist/server/entry.mjs` are used consistently as the production runtime target
