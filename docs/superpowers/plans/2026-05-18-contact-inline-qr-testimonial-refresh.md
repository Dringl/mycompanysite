# Contact Inline QR and Testimonial Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将联系页提交成功态从全屏遮罩改成表单原位二维码卡片，替换客户反馈区三张头像，并完成重新部署与 Cloudflare 收尾验证。

**Architecture:** 保持 `/api/contact` 协议不变，只在 `InquiryForm.astro` 内用组件局部状态切换“表单态/成功态”，删除 `HSOverlay` 依赖。客户反馈头像继续由 `src/pages/projects/index.astro` 提供数据，只替换图片资源与引用，不重构 testimonials 组件。部署沿用当前已上线的 Node + systemd + Nginx 方案，改动完成后同步到 `/var/www/bq-star/current` 并验证 HTTPS 与联系表单。

**Tech Stack:** Astro 5, TypeScript, Astro components, `node:test`, Nginx, systemd, Cloudflare DNS/SSL

---

## File Structure

- Modify: `src/components/sections/misc/InquiryForm.astro`
  - 负责联系表单交互。移除全屏成功模态，改为表单原位成功卡片。
- Modify: `contact-regression.test.mjs`
  - 增加对 `InquiryForm.astro` 成功态实现的源码回归测试，确保不再依赖 `HSOverlay.open`，且存在内联二维码成功卡片。
- Modify: `src/pages/projects/index.astro`
  - 继续使用同一 testimonials 数据结构，只更新头像 import。
- Update assets: `src/images/pages/projects/projects-testimonial-avatar-01.jpeg`
- Update assets: `src/images/pages/projects/projects-testimonial-avatar-02.jpeg`
- Update assets: `src/images/pages/projects/projects-testimonial-avatar-03.jpeg`
  - 用新的外部头像素材替换现有三张头像文件，避免与站内其他图重复。

### Task 1: 联系页成功态改为原位二维码卡片

**Files:**
- Modify: `contact-regression.test.mjs`
- Modify: `src/components/sections/misc/InquiryForm.astro`

- [ ] **Step 1: 写失败测试，锁定不再使用 HSOverlay 的成功态实现**

在 `contact-regression.test.mjs` 末尾新增测试：

```js
test("contact inquiry form uses inline success qr card instead of HSOverlay modal", async () => {
  const inquiryFormSource = await read("src/components/sections/misc/InquiryForm.astro");

  assert.match(inquiryFormSource, /data-inquiry-success-card/);
  assert.match(inquiryFormSource, /data-inquiry-form-body/);
  assert.match(inquiryFormSource, /data-inquiry-reset/);
  assert.match(inquiryFormSource, /提交成功，欢迎微信继续沟通/);
  assert.doesNotMatch(inquiryFormSource, /window\.HSOverlay\.open/);
  assert.doesNotMatch(inquiryFormSource, /hs-overlay/);
});
```

- [ ] **Step 2: 运行测试，确认先失败**

Run:
```bash
node --test "/data/work/web/mycompanysite/.claude/worktrees/website-visual-refresh/contact-regression.test.mjs"
```

Expected: FAIL，且失败点来自 `InquiryForm.astro` 仍包含 `window.HSOverlay.open` 或 `hs-overlay`。

- [ ] **Step 3: 以最小实现改写 `InquiryForm.astro`**

把成功模态替换成原位卡片，保留现有表单提交逻辑与二维码资源：

```astro
---
import { Image } from "astro:assets";
import TextInput from "@components/ui/forms/input/TextInput.astro";
import TextAreaInput from "@components/ui/forms/input/TextAreaInput.astro";
import { inquiryTypes } from "@data/company";
import contactWechatQr from "@images/contact-wechat-qr.jpg";

const { submitLabel = "提交咨询", compact = false } = Astro.props;

interface Props {
  submitLabel?: string;
  compact?: boolean;
}

const formClass = compact ? "grid gap-4" : "grid gap-4";
---

<div class="grid gap-4" data-inquiry-root>
  <form class={formClass} data-inquiry-form>
    <div data-inquiry-form-body class="grid gap-4">
      <TextInput id="contact-name" label="姓名" name="name" />
      <TextInput id="contact-company" label="公司名称" name="company" />
      <TextInput id="contact-channel" label="联系方式" name="contact" />
      <div>
        <label for="contact-inquiry-type" class="sr-only">需求类型</label>
        <select
          id="contact-inquiry-type"
          name="inquiryType"
          class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1"
        >
          {inquiryTypes.map((item) => <option value={item}>{item}</option>)}
        </select>
      </div>
      <TextAreaInput id="contact-details" label="需求描述" name="details" />
      <button
        type="submit"
        class="inline-flex items-center justify-center rounded-lg bg-zinc-600 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:bg-zinc-500"
      >
        {submitLabel}
      </button>
    </div>
    <p class="text-sm text-neutral-600 dark:text-neutral-400" data-inquiry-status>
      填写后我们会尽快与你联系。
    </p>
  </form>

  <div
    class="hidden rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm dark:border-neutral-700 dark:bg-neutral-950"
    data-inquiry-success-card
  >
    <div class="mx-auto flex max-w-sm flex-col items-center gap-4">
      <div>
        <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-100">
          提交成功，欢迎微信继续沟通
        </h3>
        <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          我们已收到你的需求，也可以直接扫码添加微信继续沟通。
        </p>
      </div>
      <div class="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm dark:border-neutral-700 dark:bg-neutral-950">
        <Image
          src={contactWechatQr}
          alt="补全星科技联系微信二维码"
          class="mx-auto h-auto w-64 max-w-full rounded-xl"
          widths={[256, 384]}
          sizes="(max-width: 640px) 80vw, 256px"
        />
      </div>
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-sm font-bold text-neutral-700 transition duration-300 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
        data-inquiry-reset
      >
        继续填写其他需求
      </button>
    </div>
  </div>
</div>

<script is:inline>
  const forms = Array.from(document.querySelectorAll("[data-inquiry-form]"));

  forms.forEach((form) => {
    if (!(form instanceof HTMLFormElement)) return;

    const root = form.closest("[data-inquiry-root]");
    const formBody = form.querySelector("[data-inquiry-form-body]");
    const status = form.querySelector("[data-inquiry-status]");
    const submitButton = form.querySelector('button[type="submit"]');
    const successCard = root?.querySelector("[data-inquiry-success-card]");
    const resetButton = root?.querySelector("[data-inquiry-reset]");

    const showForm = () => {
      if (form instanceof HTMLElement) form.classList.remove("hidden");
      if (successCard instanceof HTMLElement) successCard.classList.add("hidden");
      if (status instanceof HTMLElement) {
        status.textContent = "填写后我们会尽快与你联系。";
      }
    };

    resetButton?.addEventListener("click", () => {
      showForm();
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      if (status instanceof HTMLElement) {
        status.textContent = "正在提交，请稍候…";
      }

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = true;
      }

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok || !result.ok) {
          throw new Error(result.message || "提交失败，请稍后重试。");
        }

        form.reset();

        if (status instanceof HTMLElement) {
          status.textContent = result.message || "提交成功，我们会尽快与你联系。";
        }

        if (form instanceof HTMLElement) {
          form.classList.add("hidden");
        }

        if (successCard instanceof HTMLElement) {
          successCard.classList.remove("hidden");
        }
      } catch (error) {
        if (status instanceof HTMLElement) {
          status.textContent = error instanceof Error ? error.message : "提交失败，请稍后重试。";
        }
      } finally {
        if (submitButton instanceof HTMLButtonElement) {
          submitButton.disabled = false;
        }
      }
    });
  });
</script>
```

- [ ] **Step 4: 运行测试，确认成功态回归通过**

Run:
```bash
node --test "/data/work/web/mycompanysite/.claude/worktrees/website-visual-refresh/contact-regression.test.mjs"
```

Expected: PASS，新增测试与既有 contact 回归测试全部通过。

- [ ] **Step 5: 提交这一任务**

```bash
git add contact-regression.test.mjs src/components/sections/misc/InquiryForm.astro
git commit -m "fix: show contact qr inline after submit"
```

### Task 2: 替换客户反馈区三张头像

**Files:**
- Modify: `src/pages/projects/index.astro`
- Update: `src/images/pages/projects/projects-testimonial-avatar-01.jpeg`
- Update: `src/images/pages/projects/projects-testimonial-avatar-02.jpeg`
- Update: `src/images/pages/projects/projects-testimonial-avatar-03.jpeg`

- [ ] **Step 1: 准备三张新的头像素材文件**

选择三张新的职业头像并覆盖当前三张文件名，保持引用路径不变：

```bash
curl -L "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" -o "/data/work/web/mycompanysite/.claude/worktrees/website-visual-refresh/src/images/pages/projects/projects-testimonial-avatar-01.jpeg"
curl -L "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" -o "/data/work/web/mycompanysite/.claude/worktrees/website-visual-refresh/src/images/pages/projects/projects-testimonial-avatar-02.jpeg"
curl -L "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" -o "/data/work/web/mycompanysite/.claude/worktrees/website-visual-refresh/src/images/pages/projects/projects-testimonial-avatar-03.jpeg"
```

- [ ] **Step 2: 调整头像 alt 文案，避免过泛描述**

把 `src/pages/projects/index.astro` 中三条 testimonial 的 `avatarAlt` 改为：

```ts
avatarAlt: "无人化项目集成负责人头像"
avatarAlt: "平台产品经理头像"
avatarAlt: "场景项目负责人头像"
```

- [ ] **Step 3: 运行构建验证头像替换无误**

Run:
```bash
npm run build
```

Expected: PASS，Astro 图片处理成功，无 import 报错。

- [ ] **Step 4: 提交这一任务**

```bash
git add src/pages/projects/index.astro src/images/pages/projects/projects-testimonial-avatar-01.jpeg src/images/pages/projects/projects-testimonial-avatar-02.jpeg src/images/pages/projects/projects-testimonial-avatar-03.jpeg
git commit -m "feat: refresh testimonial avatars"
```

### Task 3: 重新部署并完成 Cloudflare 收尾验证

**Files:**
- Reuse deployed server path: `/var/www/bq-star/current`
- Verify server config: `/etc/nginx/sites-available/bq-star.conf`
- Verify service: `/etc/systemd/system/bq-star.service`

- [ ] **Step 1: 同步工作区改动到服务器部署目录**

Run:
```bash
rsync -av --delete \
  --exclude ".git" \
  --exclude "node_modules" \
  --exclude "dist" \
  --exclude ".astro" \
  "/data/work/web/mycompanysite/.claude/worktrees/website-visual-refresh/" \
  "/var/www/bq-star/current/"
```

- [ ] **Step 2: 在服务器部署目录重新安装并构建**

Run:
```bash
env PATH="/usr/bin:/bin" npm --prefix /var/www/bq-star/current install
env PATH="/usr/bin:/bin" npm --prefix /var/www/bq-star/current run build
```

Expected: PASS，构建输出使用 `@astrojs/node`。

- [ ] **Step 3: 重启站点服务**

Run:
```bash
sudo systemctl restart bq-star.service
sudo systemctl status bq-star.service --no-pager
```

Expected: `active (running)`。

- [ ] **Step 4: 验证线上 HTTPS、www 跳转与 contact API**

Run:
```bash
curl -I --max-time 20 https://bq-star.com
curl -I --max-time 20 https://www.bq-star.com
curl -sS --max-time 20 https://bq-star.com/contact | grep -o '<title>[^<]*</title>' | head -n 1
curl -sS -X POST https://bq-star.com/api/contact \
  -H 'Content-Type: application/json' \
  --data '{"name":"线上验收","company":"补全星科技","contact":"15340530127@163.com","inquiryType":"通用底盘合作","details":"用于验证二维码原位成功态与 HTTPS 联系表单链路。"}'
```

Expected:
- apex 返回 200
- `www` 返回 301 到 `https://bq-star.com/`
- contact 页面标题正确
- contact API 返回 `{"ok":true,...}`

- [ ] **Step 5: 检查 Cloudflare 是否已切成橙云与 Full (strict)**

Run:
```bash
curl -I --max-time 20 https://bq-star.com | grep -i '^server:\|^cf-cache-status:\|^cf-ray:\|^alt-svc:' || true
```

Expected:
- 如果已走 Cloudflare，响应头里通常会出现 `cf-ray` / `cf-cache-status`
- 如果还没走 Cloudflare，则明确告诉用户只需在 Cloudflare DNS 控制台把 `@` 与 `www` 记录切成橙云，并在 SSL/TLS 页面确认 `Full (strict)`

- [ ] **Step 6: 提交这一任务**

```bash
git add src/components/sections/misc/InquiryForm.astro contact-regression.test.mjs src/pages/projects/index.astro src/images/pages/projects/projects-testimonial-avatar-01.jpeg src/images/pages/projects/projects-testimonial-avatar-02.jpeg src/images/pages/projects/projects-testimonial-avatar-03.jpeg
git commit -m "fix: inline contact qr and refresh testimonials"
```

## Self-Review
- Spec coverage：
  - 联系页成功态原位二维码 → Task 1
  - 客户反馈头像替换 → Task 2
  - 重新部署与 Cloudflare 收尾验证 → Task 3
- Placeholder scan：未使用 TBD/TODO/“自行处理”等占位描述，命令与文件路径已具体化。
- Type consistency：成功态标记统一为 `data-inquiry-success-card` / `data-inquiry-form-body` / `data-inquiry-reset`，后续测试与实现一致。