# 重庆补全星科技官网改造 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 基于现有 Astro 模板，交付一个中文优先、科技企业风、可咨询转化的标准版公司官网，覆盖首页、产品与服务、解决方案、客户案例、关于我们、联系我们，并尽量保留已有动效。

**Architecture:** 保留现有 Astro + Tailwind 页面骨架、滚动效果、GSAP 动效与主要 section 组件，统一把品牌信息和页面文案收拢到数据文件中，再逐页替换模板内容。案例页继续复用现有 `projects` 路由与 `products` 内容集合机制，但将其语义重写为客户案例，避免一次性重构整个内容系统。

**Tech Stack:** Astro 5、Tailwind CSS 4、Astro Content Collections、GSAP、Lenis、Preline、Vercel 静态部署

---

## File Structure

### New files
- `src/data_files/company.ts` — 公司品牌、首页文案、服务矩阵、解决方案、优势、联系表单选项等集中配置
- `src/components/sections/landing/VideoShowcase.astro` — 首页/关于页可复用的视频展示模块
- `src/components/sections/misc/InquiryForm.astro` — 首页与联系页共用的咨询表单组件
- `src/pages/contact.astro` — 正式启用的联系我们页面
- `src/pages/solutions.astro` — 解决方案页面
- `src/pages/about.astro` — 关于我们页面
- `src/pages/api/contact.ts` — 轻量联系表单 API，校验后转发到 `CONTACT_WEBHOOK_URL`
- `public/videos/company-intro.mp4` — 项目内可直接访问的公司视频素材

### Modified files
- `src/data_files/constants.ts` — 全站 SITE / SEO / OG 信息切到补全星科技
- `src/utils/navigation.ts` — 默认导航与页脚切到中文官网结构
- `src/components/sections/navbar&footer/Navbar.astro` — 导航文案中文化，增加“立即咨询”主 CTA，暂时隐藏语言切换
- `src/components/sections/navbar&footer/FooterSection.astro` — 移除模板作者署名，改为公司版权与联系说明
- `src/components/Meta.astro` — 去掉 `fr` 特化假设，保留中文优先的 canonical / alternate 逻辑
- `src/layouts/MainLayout.astro` — 默认 `lang` 改为 `zh-CN`，保留 Lenis 与主题脚本
- `src/components/sections/landing/HeroSection.astro` — 改为 props 驱动，保留现有动效视觉骨架
- `src/components/sections/landing/HeroSectionAlt.astro` — 改成中文 CTA，移除 GitHub 语义
- `src/components/sections/features/FeaturesGeneral.astro` — 顶部四张能力卡改为数据驱动并修正 `Maintainance` 残留
- `src/pages/index.astro` — 首页重构
- `src/pages/services.astro` — 改成“产品与服务”页
- `src/pages/projects/index.astro` — 改成“客户案例”总览页
- `src/pages/projects/[id].astro` — 改成案例详情页并保留 GSAP 动效
- `src/components/ui/cards/CardSmall.astro` — 修正跳转到 `/projects/...`
- `src/components/ui/cards/CardWide.astro` — 修正跳转到 `/projects/...`
- `src/components/sections/misc/ContactSection.astro` — 用共用表单组件替换模板内容
- `src/pages/manifest.json.ts` — 去掉 ScrewFast 品牌名
- `src/env.d.ts` — 增加 `CONTACT_WEBHOOK_URL` 类型声明
- `src/data_files/features.json` — 首页核心优势改成公司真实业务
- `src/data_files/faqs.json` — FAQ 改成咨询前常见问题
- `src/content/products/en/*.md` — 4 个案例内容改成补全星科技业务案例

### Existing files left intact for now
- `src/pages/blog/*`、`src/pages/insights/*`、`src/content/docs/*` 暂不删除，只从导航与首页流量中移除；等官网主站稳定后再决定是否整体下线
- `astro.config.mjs` 的 `site` 暂不改动，等待用户提供正式生产域名后再替换，避免猜测 URL

---

### Task 1: 本地化站点外壳与品牌配置

**Files:**
- Create: `src/data_files/company.ts`
- Modify: `src/data_files/constants.ts`
- Modify: `src/utils/navigation.ts`
- Modify: `src/components/sections/navbar&footer/Navbar.astro`
- Modify: `src/components/sections/navbar&footer/FooterSection.astro`
- Modify: `src/components/Meta.astro`
- Modify: `src/layouts/MainLayout.astro`
- Modify: `src/pages/manifest.json.ts`

- [ ] **Step 1: 新建公司数据文件**

```ts
// src/data_files/company.ts
export const companyProfile = {
  name: "重庆补全星科技有限公司",
  shortName: "补全星科技",
  tagline: "智慧无人化装备研发与社会化服务提供商",
  summary:
    "扎根重庆、面向全国，围绕农业服务、无人机核心产品与无人车平台，提供从硬件研发到落地服务的全链条无人化解决方案。",
  hero: {
    title: "让无人化装备真正走进农业与公共服务现场",
    subTitle:
      "围绕农业社会化服务、无人机核心硬件与模块化无人车平台，提供从研发、场景适配到交付落地的一体化解决方案。",
    primaryText: "立即咨询",
    primaryUrl: "/contact",
    secondaryText: "查看客户案例",
    secondaryUrl: "/projects",
  },
};

export const navItems = [
  { name: "首页", url: "/" },
  { name: "产品与服务", url: "/services" },
  { name: "解决方案", url: "/solutions" },
  { name: "客户案例", url: "/projects" },
  { name: "关于我们", url: "/about" },
  { name: "联系我们", url: "/contact" },
];
```

- [ ] **Step 2: 用公司数据替换全站常量**

```ts
// src/data_files/constants.ts
import ogImageSrc from "@images/social.png";
import { companyProfile } from "@data/company";

export const SITE = {
  title: companyProfile.name,
  tagline: companyProfile.tagline,
  description: companyProfile.summary,
  description_short: companyProfile.summary,
  url: "https://cybercraftlabs.org",
  author: companyProfile.name,
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    inLanguage: "zh-CN",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
  },
};
```

- [ ] **Step 3: 更新导航、页脚和默认语言**

```astro
---
// src/components/sections/navbar&footer/Navbar.astro
import PrimaryCTA from "@components/ui/buttons/PrimaryCTA.astro";
import strings from "@utils/navigation";
const homeUrl = "/";
---
<div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7">
  {strings.navBarLinks.map((link) => <NavLink url={link.url} name={link.name} />)}
  <PrimaryCTA title="立即咨询" url="/contact" noArrow={true} />
  <span class="hidden md:inline-block">
    <ThemeIcon />
  </span>
</div>
```

```astro
---
// src/layouts/MainLayout.astro
const { lang = "zh-CN" } = Astro.props;
---
<html lang={lang} class="scrollbar-hide lenis lenis-smooth scroll-pt-16">
```

- [ ] **Step 4: 运行构建验证外壳改造没有破坏站点**

Run: `npm run build`

Expected: 构建成功，输出包含 `dist/index.html`，没有新的 TypeScript 或 Astro 错误。

- [ ] **Step 5: Commit**

```bash
git add src/data_files/company.ts src/data_files/constants.ts src/utils/navigation.ts src/components/sections/navbar\&footer/Navbar.astro src/components/sections/navbar\&footer/FooterSection.astro src/components/Meta.astro src/layouts/MainLayout.astro src/pages/manifest.json.ts
git commit -m "feat: localize site shell for bqx company website"
```

### Task 2: 重构首页并保留关键动效

**Files:**
- Create: `src/components/sections/landing/VideoShowcase.astro`
- Create: `public/videos/company-intro.mp4`
- Modify: `src/components/sections/landing/HeroSection.astro`
- Modify: `src/components/sections/landing/HeroSectionAlt.astro`
- Modify: `src/components/sections/features/FeaturesGeneral.astro`
- Modify: `src/data_files/features.json`
- Modify: `src/data_files/faqs.json`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: 把公司视频放入站点静态资源目录**

```bash
cp /data/work/web/video/1bb7b2f447d070e7e3125e77eda3d0d7.mp4 /data/work/web/mycompanysite/public/videos/company-intro.mp4
```

Expected: `public/videos/company-intro.mp4` 存在。

- [ ] **Step 2: 把 HeroSection 改成 props 驱动并保留当前大字视觉风格**

```astro
---
// src/components/sections/landing/HeroSection.astro
import LogoIcon from "@/components/ui/icons/LogoIcon.astro";
const { title, subTitle, primaryBtnText, primaryBtnUrl, secondaryBtnText, secondaryBtnUrl } = Astro.props;
---
<section class="relative mx-auto grid min-h-[88vh] max-w-screen place-items-center overflow-hidden px-6">
  <div class="absolute top-0 -z-10 w-full">
    <LogoIcon h="1000" className="text-less-pure-dark/40" />
  </div>
  <div class="z-10 mx-auto max-w-5xl text-center">
    <h1 class="font-bebas block text-[3.4rem] font-bold tracking-[-0.08em] text-neutral-200 md:text-[5rem] lg:text-[6.5rem]">
      {title}
    </h1>
    <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
      {subTitle}
    </p>
    <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
      <PrimaryCTA title={primaryBtnText} url={primaryBtnUrl} />
      <SecondaryCTA title={secondaryBtnText} url={secondaryBtnUrl} />
    </div>
  </div>
</section>
```

- [ ] **Step 3: 让 FeaturesGeneral 顶部四张卡片改为业务数据驱动**

```astro
---
const { title, subTitle, features, pillars = [] } = Astro.props;
---
<div class="mt-8 mb-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  {pillars.map((pillar, index) => (
    <div class={`relative h-[420px] overflow-hidden border border-white/10 bg-cover bg-center ${index % 2 ? "xl:mt-10" : ""}`} style={`background-image:url(${pillar.image})`}>
      <div class="absolute inset-0 bg-black/45"></div>
      <h3 class="absolute inset-x-6 bottom-10 z-10 text-2xl font-bold text-white">{pillar.title}</h3>
      <p class="absolute inset-x-6 bottom-4 z-10 text-sm text-white/75">{pillar.summary}</p>
    </div>
  ))}
</div>
```

- [ ] **Step 4: 重写首页组装，顺序固定为 Hero → 核心能力 → 解决方案 → 视频 → 案例 → 优势 → FAQ → CTA**

```astro
---
// src/pages/index.astro
import MainLayout from "@/layouts/MainLayout.astro";
import HeroSection from "@components/sections/landing/HeroSection.astro";
import ClientsSection from "@components/sections/landing/ClientsSection.astro";
import FeaturesGeneral from "@components/sections/features/FeaturesGeneral.astro";
import FeaturesNavs from "@components/sections/features/FeaturesNavs.astro";
import FeaturesStatsAlt from "@components/sections/features/FeaturesStatsAlt.astro";
import FAQ from "@components/sections/misc/FAQ.astro";
import HeroSectionAlt from "@components/sections/landing/HeroSectionAlt.astro";
import VideoShowcase from "@components/sections/landing/VideoShowcase.astro";
import { companyProfile, homePillars, homeSolutionTabs, companyAdvantages } from "@data/company";
import faqs from "@data/faqs.json";
---
<MainLayout title={`${companyProfile.shortName} | ${companyProfile.tagline}`}>
  <HeroSection
    title={companyProfile.hero.title}
    subTitle={companyProfile.hero.subTitle}
    primaryBtnText={companyProfile.hero.primaryText}
    primaryBtnUrl={companyProfile.hero.primaryUrl}
    secondaryBtnText={companyProfile.hero.secondaryText}
    secondaryBtnUrl={companyProfile.hero.secondaryUrl}
  />
  <FeaturesGeneral title="核心业务能力" subTitle="围绕农业服务、无人机核心产品与无人车平台构建三位一体能力。" pillars={homePillars} features={features} />
  <FeaturesNavs title="重点解决方案" tabs={homeSolutionTabs} />
  <VideoShowcase title="通过一段短片快速了解补全星科技" videoUrl="/videos/company-intro.mp4" />
  <FeaturesStatsAlt title="为什么选择补全星科技" subTitle="以自研核心硬件、模块化平台与场景化交付能力，推动无人化装备从样机走向规模化应用。" benefits={companyAdvantages} />
  <FAQ title="常见问题" faqs={faqs} />
  <HeroSectionAlt title="提交需求，我们尽快与您联系" subTitle="欢迎咨询农业服务托管、无人机核心硬件、无人车平台合作与场景定制。" url="/contact" />
</MainLayout>
```

- [ ] **Step 5: 验证首页内容替换结果**

Run: `npm run build && grep -R "重庆补全星科技有限公司" dist/index.html`

Expected: 构建成功，`grep` 能在首页静态产物中找到公司名称。

- [ ] **Step 6: Commit**

```bash
git add public/videos/company-intro.mp4 src/components/sections/landing/HeroSection.astro src/components/sections/landing/HeroSectionAlt.astro src/components/sections/landing/VideoShowcase.astro src/components/sections/features/FeaturesGeneral.astro src/data_files/features.json src/data_files/faqs.json src/pages/index.astro
git commit -m "feat: rebuild homepage for bqx company site"
```

### Task 3: 实现可用的咨询表单与联系我们页面

**Files:**
- Create: `src/components/sections/misc/InquiryForm.astro`
- Create: `src/pages/contact.astro`
- Create: `src/pages/api/contact.ts`
- Modify: `src/components/sections/misc/ContactSection.astro`
- Modify: `src/env.d.ts`

- [ ] **Step 1: 为服务端 webhook 环境变量补上类型声明**

```ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTACT_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

- [ ] **Step 2: 创建共用咨询表单组件，字段固定为姓名、公司名称、联系方式、需求类型、需求描述**

```astro
---
// src/components/sections/misc/InquiryForm.astro
const { submitLabel = "提交咨询", compact = false } = Astro.props;
---
<form class="grid gap-4" data-inquiry-form>
  <TextInput id="contact-name" label="姓名" name="name" />
  <TextInput id="contact-company" label="公司名称" name="company" />
  <TextInput id="contact-channel" label="联系方式" name="contact" />
  <select name="inquiryType" class="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-neutral-200">
    <option value="农业社会化服务">农业社会化服务</option>
    <option value="无人机核心产品">无人机核心产品</option>
    <option value="无人车平台">无人车平台</option>
    <option value="场景化定制合作">场景化定制合作</option>
  </select>
  <TextAreaInput id="contact-details" label="需求描述" name="details" />
  <button type="submit" class="rounded-lg bg-zinc-600 px-4 py-3 font-bold text-white hover:bg-zinc-500">{submitLabel}</button>
  <p class="text-sm text-neutral-400">提交后我们会尽快与您联系。</p>
</form>
```

- [ ] **Step 3: 新建 API 路由，校验字段后转发到 webhook；未配置时返回明确错误**

```ts
// src/pages/api/contact.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const payload = await request.json();
  const required = ["name", "company", "contact", "inquiryType", "details"];

  for (const key of required) {
    if (!payload[key] || String(payload[key]).trim().length === 0) {
      return new Response(JSON.stringify({ ok: false, message: `缺少字段：${key}` }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  if (!import.meta.env.CONTACT_WEBHOOK_URL) {
    return new Response(JSON.stringify({ ok: false, message: "未配置 CONTACT_WEBHOOK_URL" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  const upstream = await fetch(import.meta.env.CONTACT_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return new Response(JSON.stringify({ ok: upstream.ok }), {
    status: upstream.ok ? 200 : 502,
    headers: { "Content-Type": "application/json" },
  });
};
```

- [ ] **Step 4: 恢复正式联系页并替换模板式 Knowledgebase/FAQ/英国地址内容**

```astro
---
// src/pages/contact.astro
import MainLayout from "@/layouts/MainLayout.astro";
import ContactSection from "@components/sections/misc/ContactSection.astro";
import { companyProfile } from "@data/company";
---
<MainLayout title={`联系我们 | ${companyProfile.shortName}`}>
  <ContactSection />
</MainLayout>
```

- [ ] **Step 5: 验证联系页和接口都被构建出来**

Run: `npm run build && test -f dist/contact/index.html`

Expected: 构建成功，`dist/contact/index.html` 存在。

- [ ] **Step 6: Commit**

```bash
git add src/env.d.ts src/components/sections/misc/InquiryForm.astro src/components/sections/misc/ContactSection.astro src/pages/contact.astro src/pages/api/contact.ts
git commit -m "feat: add inquiry form and contact page"
```

### Task 4: 改造产品与服务页和解决方案页

**Files:**
- Create: `src/pages/solutions.astro`
- Modify: `src/pages/services.astro`
- Modify: `src/data_files/company.ts`

- [ ] **Step 1: 在 `company.ts` 中定义服务板块和解决方案数据**

```ts
export const serviceArticles = [
  {
    title: "农业社会化服务",
    subTitle:
      "围绕耕、种、管、收、运提供机械化一站式托管服务，帮助规模化种植主体降低人工负担、抓住农时窗口。",
    btnTitle: "咨询农业服务",
    btnURL: "/contact",
  },
  {
    title: "无人机核心产品研发",
    subTitle:
      "自研飞控、电调等关键硬件，覆盖 6S-18S 多电压等级，为植保、巡检与复杂场景作业提供稳定核心能力。",
  },
  {
    title: "无人车平台研发",
    subTitle:
      "以模块化底盘、VCU 控制器与多传感器导航系统支撑农业运输、消杀巡检、园区服务等多场景落地。",
  },
];

export const solutionCards = [
  { title: "规模化农业作业托管", subTitle: "服务高标准农田、家庭农场和农业公司。" },
  { title: "植保无人机关键硬件方案", subTitle: "提供飞控、电调和场景化适配支持。" },
  { title: "多场景无人车平台方案", subTitle: "覆盖农业运输、消杀巡检、养老服务等应用。" },
];
```

- [ ] **Step 2: 重写 `services.astro`，标题、段落、按钮与统计全部换成真实业务**

```astro
const pageTitle = `产品与服务 | ${SITE.title}`;
const metaDescription = "围绕农业社会化服务、无人机核心产品与无人车平台，提供从研发到落地的综合能力。";

<MainSection
  title="以三大核心业务支撑无人化场景落地"
  subTitle="补全星科技围绕农业服务、自研核心硬件和模块化平台，形成短期服务变现与长期技术沉淀协同发展的业务结构。"
  btnExists={true}
  btnTitle="立即咨询"
  btnURL="/contact"
/>
```

- [ ] **Step 3: 新建 `solutions.astro`，使用现有 `MainSection`、`LeftSection`、`RightSection` 组合场景方案页**

```astro
---
// src/pages/solutions.astro
import MainLayout from "@/layouts/MainLayout.astro";
import MainSection from "@components/ui/blocks/MainSection.astro";
import LeftSection from "@components/ui/blocks/LeftSection.astro";
import RightSection from "@components/ui/blocks/RightSection.astro";
import { solutionCards } from "@data/company";
---
<MainLayout title="解决方案 | 重庆补全星科技有限公司">
  <MainSection title="面向农业与公共服务场景的无人化解决方案" subTitle="从设备到交付，从路径规划到作业执行，围绕客户真实场景组织解决方案内容。" btnExists={true} btnTitle="提交需求" btnURL="/contact" />
  {solutionCards.map((item, index) => index % 2 === 0 ? <RightSection title={item.title} subTitle={item.subTitle} single={true} /> : <LeftSection title={item.title} subTitle={item.subTitle} />)}
</MainLayout>
```

- [ ] **Step 4: 验证两个核心内页已生成**

Run: `npm run build && test -f dist/services/index.html && test -f dist/solutions/index.html`

Expected: 三条命令全部成功退出。

- [ ] **Step 5: Commit**

```bash
git add src/data_files/company.ts src/pages/services.astro src/pages/solutions.astro
git commit -m "feat: add services and solutions pages"
```

### Task 5: 把项目系统改造成客户案例系统

**Files:**
- Modify: `src/components/ui/cards/CardSmall.astro`
- Modify: `src/components/ui/cards/CardWide.astro`
- Modify: `src/pages/projects/index.astro`
- Modify: `src/pages/projects/[id].astro`
- Modify: `src/content/products/en/item-a765.md`
- Modify: `src/content/products/en/item-b203.md`
- Modify: `src/content/products/en/item-f303.md`
- Modify: `src/content/products/en/item-t845.md`

- [ ] **Step 1: 先修复列表卡片跳转到错误 `/products/...` 的问题**

```astro
<a
  href={productLocale && productLocale !== "en"
    ? `/${productLocale}/projects/${product.id.replace(/^fr\//, "")}/`
    : `/projects/${product.id.replace(/^en\//, "")}/`}
  data-astro-prefetch
>
```

- [ ] **Step 2: 把 4 个英文产品内容文件重写成 4 个案例/能力样板**

```md
---
title: "规模化农业全流程托管服务"
description: "围绕耕、种、管、收、运的一站式农业社会化服务案例。"
main:
  id: 1
  content: |
    面向家庭农场、农业公司和高标准农田经营主体，补全星科技以标准化机械作业流程提供农业全周期服务。
  imgCard: "@/images/product-image-1.avif"
  imgMain: "@/images/product-image-main-1.avif"
  imgAlt: "农业服务案例主图"
tabs:
  - id: "tabs-with-card-item-1"
    dataTab: "#tabs-with-card-1"
    title: "案例概览"
  - id: "tabs-with-card-item-2"
    dataTab: "#tabs-with-card-2"
    title: "方案能力"
  - id: "tabs-with-card-item-3"
    dataTab: "#tabs-with-card-3"
    title: "现场画面"
---
```

- [ ] **Step 3: 重写案例列表页文案、SEO 与底部优势说明**

```astro
const title = "客户案例";
const subTitle = "从农业服务到自研核心硬件，再到多场景无人车平台，查看补全星科技如何把无人化能力落到真实场景。";
const pageTitle = `客户案例 | ${SITE.title}`;
const metaDescription = "浏览补全星科技在农业服务、无人机核心硬件和无人车平台方向的代表性案例。";
```

- [ ] **Step 4: 把案例详情页的 `Product` schema 和标签语义改成案例页**

```astro
<MainLayout
  title={pageTitle}
  customDescription={metaDescription}
  customOgTitle={ogTitle}
  structuredData={{
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://cybercraftlabs.org/projects/${product.id.replace(/^en\//, "")}`,
    name: product.data.title,
    description: product.data.description,
    publisher: {
      "@type": "Organization",
      name: "重庆补全星科技有限公司",
    },
  }}
>
```

同时修掉现有脚本里的错误 class：

```ts
button.classList.add(
  "active",
  "bg-neutral-100",
  "hover:border-transparent",
  "dark:bg-white/[.05]"
);
```

- [ ] **Step 5: 验证案例页列表和详情路由都存在**

Run: `npm run build && test -f dist/projects/index.html && find dist/projects -mindepth 2 -maxdepth 2 -name index.html | head -n 1`

Expected: 构建成功，并至少能看到一个案例详情页的 `index.html`。

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/cards/CardSmall.astro src/components/ui/cards/CardWide.astro src/pages/projects/index.astro src/pages/projects/[id].astro src/content/products/en/item-a765.md src/content/products/en/item-b203.md src/content/products/en/item-f303.md src/content/products/en/item-t845.md
git commit -m "feat: turn project pages into customer case studies"
```

### Task 6: 完成关于我们页面与联系信息承接

**Files:**
- Create: `src/pages/about.astro`
- Modify: `src/data_files/company.ts`
- Modify: `src/components/sections/navbar&footer/FooterSection.astro`

- [ ] **Step 1: 在公司数据文件中补齐公司简介、三位一体业务结构与优势摘要**

```ts
export const aboutSections = {
  overview:
    "重庆补全星科技有限公司是一家扎根重庆、面向全国，专注于智慧无人化装备研发与社会化服务的创新型科技企业。",
  mission:
    "以“用科技补全生产的每一环”为核心理念，推动农业现代化与公共服务场景的无人化升级。",
  pillars: [
    "农业服务 + 无人机核心产品 + 无人车平台三位一体业务结构",
    "硬件自研 - 场景适配 - 服务落地的闭环能力",
    "模块化平台与核心分部件自主可控",
  ],
};
```

- [ ] **Step 2: 创建 About 页面，复用现有 block 组件承接手册内容**

```astro
---
// src/pages/about.astro
import MainLayout from "@/layouts/MainLayout.astro";
import MainSection from "@components/ui/blocks/MainSection.astro";
import FeaturesStatsAlt from "@components/sections/features/FeaturesStatsAlt.astro";
import VideoShowcase from "@components/sections/landing/VideoShowcase.astro";
import { aboutSections } from "@data/company";
---
<MainLayout title="关于我们 | 重庆补全星科技有限公司">
  <MainSection title="关于补全星科技" subTitle={aboutSections.overview} btnExists={true} btnTitle="联系我们" btnURL="/contact" />
  <FeaturesStatsAlt title="我们的核心优势" subTitle={aboutSections.mission} benefits={aboutSections.pillars} />
  <VideoShowcase title="了解我们的业务方向与场景实践" videoUrl="/videos/company-intro.mp4" />
</MainLayout>
```

- [ ] **Step 3: 调整页脚文案，让它承接公司官网而不是模板作者**

```astro
<p class="text-sm text-neutral-600 dark:text-neutral-400">
  © <span id="current-year"></span> 重庆补全星科技有限公司。聚焦智慧无人化装备研发与社会化服务。
</p>
```

- [ ] **Step 4: 验证关于我们页面生成成功**

Run: `npm run build && test -f dist/about/index.html`

Expected: `dist/about/index.html` 存在。

- [ ] **Step 5: Commit**

```bash
git add src/data_files/company.ts src/pages/about.astro src/components/sections/navbar\&footer/FooterSection.astro
git commit -m "feat: add about page and company footer"
```

### Task 7: 收尾清理、SEO 残留排查与整站验收

**Files:**
- Modify: `src/components/Meta.astro`
- Modify: `src/pages/manifest.json.ts`
- Modify: `src/pages/services.astro`
- Modify: `src/pages/projects/index.astro`
- Modify: `src/pages/projects/[id].astro`
- Modify: `src/components/sections/misc/ContactSection.astro`
- Optional cleanup notes in: `README.md` (only if deployment notes become necessary)

- [ ] **Step 1: 全局搜索模板残留品牌和错误文案**

Run: `grep -R "ScrewFast\|Cybercraft Labs\|hardware\ tools\|construction" -n src`

Expected: 只剩下故意保留的技术注释或待后续英语版本使用的极少数文本；若 grep 仍命中页面文案文件，继续清理。

- [ ] **Step 2: 修正 manifest 与社交元信息中的模板名**

```ts
const manifest = {
  short_name: "补全星科技",
  name: "重庆补全星科技有限公司",
  icons,
  display: "minimal-ui",
  id: "/",
  start_url: "/",
  theme_color: "#181c31",
  background_color: "#16171b",
};
```

- [ ] **Step 3: 跑最终构建检查**

Run: `npm run build`

Expected: 构建成功，没有新增错误；`dist/` 中至少存在 `index.html`、`services/index.html`、`solutions/index.html`、`projects/index.html`、`about/index.html`、`contact/index.html`。

- [ ] **Step 4: 本地启动并做人工冒烟检查**

Run: `npm run dev`

Expected:
- 首页首屏按钮分别跳到 `/contact` 与 `/projects`
- 导航可访问首页、产品与服务、解决方案、客户案例、关于我们、联系我们
- 首页视频可播放
- 联系页表单字段完整
- 案例列表点击后进入 `/projects/<slug>/`

- [ ] **Step 5: Commit**

```bash
git add src/components/Meta.astro src/pages/manifest.json.ts src/pages/services.astro src/pages/projects/index.astro src/pages/projects/[id].astro src/components/sections/misc/ContactSection.astro
git commit -m "chore: clean template remnants and verify company website build"
```

## Self-Review Checklist

- **Spec coverage:** 首页、产品与服务、解决方案、客户案例、关于我们、联系我们都有对应任务；视频、动效保留、表单转化、中文优先、模板残留清理都有落点。
- **No placeholders:** 计划未使用 TBD/TODO；缺少正式域名时明确保持 `astro.config.mjs` 不改，避免猜测 URL；缺少表单后端时用 `CONTACT_WEBHOOK_URL` 作为明确配置项。
- **Type consistency:** 所有新增共享内容集中在 `src/data_files/company.ts`；案例仍复用 `products` collection，但页面语义统一为案例。

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-13-company-website-implementation.md`.

Two execution options:

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration
2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

用户已选择 **Subagent-Driven**，下一步直接用 `superpowers:subagent-driven-development` 按任务推进。
