# Company Website Phase 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the second-phase brand refresh for the company website: dual light/dark themes with automatic day/night defaulting and manual override, improved readability, replaced brand icons, rewritten company content, and more relevant industry imagery.

**Architecture:** Keep the existing Astro page/component structure, but centralize the second-phase changes around four boundaries: theme system and shell components, brand asset pipeline, company data/content sources, and page-level presentation. Reuse the existing `COMPANY_INFO` / page content data model where possible, extend it only where the new PPT/Word material requires it, and keep presentation concerns in page/components rather than mixing them into utility scripts.

**Tech Stack:** Astro 5, `@astrojs/vercel`, Tailwind CSS v4, Astro assets, existing Preline navbar/theme behavior, TypeScript data modules, static image assets.

---

## File Structure

### Existing files to modify

- `src/layouts/MainLayout.astro`
  - Update the initial theme bootstrap logic so first visit defaults by local hour and stored manual choice takes precedence.
- `src/components/ThemeIcon.astro`
  - Keep the navbar icon location but refine button semantics and styling for the new dual-theme UX.
- `src/components/sections/navbar&footer/Navbar.astro`
  - Update shell styling, use the existing moon/sun switch, and replace theme logic that currently assumes only `default` vs `dark`.
- `src/components/sections/navbar&footer/FooterSection.astro`
  - Replace logo behavior, improve contrast, and align CTA styling with the new theme tokens.
- `src/components/Meta.astro`
  - Replace favicon/apple icon usage to match new icon assets and ensure OG/share assets are updated.
- `src/pages/manifest.json.ts`
  - Replace manifest icons and theme/background colors.
- `src/assets/styles/global.css`
  - Define the second-phase semantic theme variables and shared contrast rules.
- `src/data_files/company.ts`
  - Rewrite company-facing content using `公司手册.docx` and the business-plan PPT.
- `src/data_files/constants.ts`
  - Update OG image metadata and site description if needed after icon/brand refresh.
- `src/pages/index.astro`
  - Reframe homepage flow, copy, CTA wording, and section contrast.
- `src/pages/about.astro`
  - Replace content with mission/vision/differentiation/development path from the handbook and PPT.
- `src/pages/services.astro`
  - Replace service structure and copy around the three business pillars.
- `src/pages/solutions.astro`
  - Reframe by hillside agriculture / scale agriculture / public-service scenarios.
- `src/pages/projects/index.astro`
  - Rewrite list content as representative scenario cases if named public customer cases are not available.
- `src/pages/contact.astro`
  - Update business inquiry framing and contact-oriented copy.

### Existing assets to replace

- `src/images/icon.png`
- `src/images/icon-maskable.png`
- `src/images/icon.svg`
- `src/images/logo.png`
- `src/images/logo_trans.png`
- `src/images/social.png`

### New files to create

- `src/assets/scripts/themePreference.ts`
  - Small focused helper for theme preference resolution (`auto by hour`, `manual override`, `apply theme`).
- `src/data_files/company-content-phase2.ts`
  - Optional extracted second-phase content module if `company.ts` becomes unwieldy; use only if the file grows too large during implementation.

### Test strategy

This repo does not currently expose a formal unit-test harness for Astro UI behavior. For this phase, use executable regression checks built from:

- targeted shell commands that assert repository state and asset references,
- `npm run build` for Astro/vercel output correctness,
- visual/manual verification in the browser for theme toggling, contrast, and core page readability.

---

## Task 1: Build the dual-theme system and contrast foundation

**Files:**
- Create: `src/assets/scripts/themePreference.ts`
- Modify: `src/layouts/MainLayout.astro`
- Modify: `src/components/ThemeIcon.astro`
- Modify: `src/components/sections/navbar&footer/Navbar.astro`
- Modify: `src/components/sections/navbar&footer/FooterSection.astro`
- Modify: `src/assets/styles/global.css`
- Test: visual verification on `/`, `/about`, `/services`, `/solutions`, `/projects`, `/contact`

- [ ] **Step 1: Write the failing regression check**

Use shell assertions to document the current broken theme assumptions before changing code:

```bash
grep -n "localStorage.getItem(\"hs_theme\") === \"dark\"" src/layouts/MainLayout.astro
grep -n "defaultTheme = \"default\"" src/components/sections/navbar\&footer/Navbar.astro
grep -n "background: radial-gradient(ellipse at top, #26282b 0%, #1d1e22 60%, #16171b 100%)" src/layouts/MainLayout.astro
```

Expected: PASS showing the old implementation still hard-codes `dark/default` and a fixed dark background, which does not yet support local-hour auto selection plus full contrast tokenization.

- [ ] **Step 2: Run the check and verify the current limitation exists**

Run:

```bash
grep -n "localStorage.getItem(\"hs_theme\") === \"dark\"" src/layouts/MainLayout.astro && grep -n "defaultTheme = \"default\"" src/components/sections/navbar\&footer/Navbar.astro && grep -n "background: radial-gradient(ellipse at top, #26282b 0%, #1d1e22 60%, #16171b 100%)" src/layouts/MainLayout.astro
```

Expected: PASS with matches proving the old logic exists. This is the RED check for the theme-system refactor.

- [ ] **Step 3: Write minimal implementation for theme preference handling**

Create `src/assets/scripts/themePreference.ts` with a small API that does exactly three things: resolve first-visit theme by local hour, store manual choice, and apply the `dark` class.

```ts
const STORAGE_KEY = "hs_theme";
export type ThemePreference = "light" | "dark" | "auto";

export function resolveAutoThemeByHour(date = new Date()): "light" | "dark" {
  const hour = date.getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
}

export function getStoredThemePreference(): ThemePreference | null {
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "light" || value === "dark" || value === "auto"
    ? value
    : null;
}

export function getEffectiveTheme(preference: ThemePreference | null): "light" | "dark" {
  if (preference === "light" || preference === "dark") return preference;
  return resolveAutoThemeByHour();
}

export function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function saveManualTheme(theme: "light" | "dark") {
  localStorage.setItem(STORAGE_KEY, theme);
}
```

Then refactor `MainLayout.astro` and `Navbar.astro` to use `light`/`dark` naming consistently rather than `default`, and have first boot fall back to `auto by hour` only when no manual choice exists.

- [ ] **Step 4: Write minimal implementation for contrast tokens and shell styling**

Replace hard-coded dark background styling in `src/layouts/MainLayout.astro` with semantic classes backed by variables in `src/assets/styles/global.css`.

Add semantic theme tokens in `global.css` like:

```css
:root {
  --page-bg: oklch(0.985 0.002 250);
  --page-bg-accent: oklch(0.965 0.004 250);
  --surface-1: oklch(0.995 0.001 250);
  --surface-2: oklch(0.955 0.006 250);
  --border-soft: oklch(0.84 0.01 250 / 40%);
  --text-strong: oklch(0.22 0.01 250);
  --text-body: oklch(0.42 0.01 250);
  --text-muted: oklch(0.55 0.01 250);
}

html.dark {
  --page-bg: oklch(0.19 0.01 260);
  --page-bg-accent: oklch(0.24 0.015 258);
  --surface-1: oklch(0.24 0.012 258);
  --surface-2: oklch(0.29 0.014 258);
  --border-soft: oklch(0.68 0.01 260 / 18%);
  --text-strong: oklch(0.96 0.003 260);
  --text-body: oklch(0.83 0.008 260);
  --text-muted: oklch(0.7 0.01 260);
}
```

And consume them with utility-compatible custom classes or inline CSS on shell regions instead of the current fixed gradient and low-contrast dark text.

- [ ] **Step 5: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS. If build fails, fix only the theme-related issue that caused the failure before proceeding.

- [ ] **Step 6: Run browser verification**

Start the dev server and verify these behaviors manually:

```bash
npm run dev
```

Check in the browser:
- first load in a fresh profile uses local hour to pick light/dark,
- clicking the existing navbar icon switches theme,
- refresh preserves the manual selection,
- homepage video block, CTA, navbar, footer, and case cards are readable in both themes.

- [ ] **Step 7: Commit**

```bash
git add src/assets/scripts/themePreference.ts src/layouts/MainLayout.astro src/components/ThemeIcon.astro src/components/sections/navbar\&footer/Navbar.astro src/components/sections/navbar\&footer/FooterSection.astro src/assets/styles/global.css
git commit -m "feat: add dual theme system for company site"
```

---

## Task 2: Replace brand icons and site identity assets

**Files:**
- Modify: `src/components/Meta.astro`
- Modify: `src/pages/manifest.json.ts`
- Modify: `src/components/sections/navbar&footer/Navbar.astro`
- Modify: `src/components/sections/navbar&footer/FooterSection.astro`
- Modify: `src/data_files/constants.ts`
- Replace: `src/images/icon.png`
- Replace: `src/images/icon-maskable.png`
- Replace: `src/images/icon.svg`
- Replace: `src/images/logo.png`
- Replace: `src/images/logo_trans.png`
- Replace: `src/images/social.png`
- Test: manifest/meta/icon asset references

- [ ] **Step 1: Write the failing asset-reference check**

Document the current template-brand asset references:

```bash
grep -n "@images/icon" src/components/Meta.astro src/pages/manifest.json.ts
grep -n "logo.png\|logo_trans.png\|social.png" src/components/sections/navbar\&footer/Navbar.astro src/components/sections/navbar\&footer/FooterSection.astro src/data_files/constants.ts
```

Expected: PASS showing current asset wiring still points at the existing placeholder brand set.

- [ ] **Step 2: Run the check and verify the old references exist**

Run:

```bash
grep -n "@images/icon" src/components/Meta.astro src/pages/manifest.json.ts && grep -n "logo.png\|logo_trans.png\|social.png" src/components/sections/navbar\&footer/Navbar.astro src/components/sections/navbar\&footer/FooterSection.astro src/data_files/constants.ts
```

Expected: PASS with matches for the current icon/logo/share-image files.

- [ ] **Step 3: Replace source image files from `/data/work/web/ICON`**

Use the supplied icons as the new canonical brand assets:
- derive light-theme logo/icon assets from `/data/work/web/ICON/黑色图标.png`
- derive dark-theme logo/icon assets from `/data/work/web/ICON/白色图标.png`

Keep filenames stable where possible (`icon.png`, `logo.png`, etc.) so downstream code changes stay minimal. If SVG is still needed, generate a simple wrapper only if necessary; otherwise remove the SVG dependency from `Meta.astro` and use PNG-based favicon handling consistently.

- [ ] **Step 4: Update metadata and manifest wiring**

Adjust `Meta.astro` and `manifest.json.ts` so the new icons are used consistently, and revise colors to match the new themes, for example:

```ts
theme_color: "#f4f3ec",
background_color: "#1f2329",
```

Use one brand-safe fallback color for manifest metadata instead of the old `#181c31` / `#16171b` pair.

- [ ] **Step 5: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS with manifest generation and Astro image processing succeeding.

- [ ] **Step 6: Run spot checks on generated assets**

Run:

```bash
grep -n 'theme_color\|background_color\|short_name\|name' src/pages/manifest.json.ts && ls public/favicon.ico src/images/icon.png src/images/logo.png src/images/logo_trans.png
```

Expected: PASS confirming the new asset pipeline exists and manifest values reflect the refreshed brand.

- [ ] **Step 7: Commit**

```bash
git add src/components/Meta.astro src/pages/manifest.json.ts src/components/sections/navbar\&footer/Navbar.astro src/components/sections/navbar\&footer/FooterSection.astro src/data_files/constants.ts src/images/icon.png src/images/icon-maskable.png src/images/icon.svg src/images/logo.png src/images/logo_trans.png src/images/social.png public/favicon.ico
git commit -m "feat: refresh company brand icons and metadata"
```

---

## Task 3: Rewrite core company data from the handbook and business plan

**Files:**
- Modify: `src/data_files/company.ts`
- Create: `src/data_files/company-content-phase2.ts` (only if needed to keep modules focused)
- Test: content grep checks against key phrases from source materials

- [ ] **Step 1: Write the failing content-alignment check**

The new content must incorporate the confirmed company language from the handbook and PPT. Write a grep-based RED check around phrases that are not yet fully represented in the data model:

```bash
grep -n "丘陵山地\|用科技补全生产的每一环\|重庆起步\|西南\|全国布局\|一条农\|星巡\|星耕" src/data_files/company.ts src/pages/index.astro src/pages/about.astro src/pages/services.astro src/pages/solutions.astro
```

Expected: partial or missing matches, proving the second-phase content is not yet fully wired.

- [ ] **Step 2: Run the check and verify the missing content**

Run:

```bash
grep -n "丘陵山地\|用科技补全生产的每一环\|重庆起步\|西南\|全国布局\|一条农\|星巡\|星耕" src/data_files/company.ts src/pages/index.astro src/pages/about.astro src/pages/services.astro src/pages/solutions.astro
```

Expected: FAIL by omission (missing some of the required phrases or concepts).

- [ ] **Step 3: Rewrite `COMPANY_INFO` and shared page content**

Update the shared content source to incorporate only website-appropriate material from the handbook and PPT:

Required additions:
- company mission/value line around “用科技补全生产的每一环”
- differentiation around丘陵山地 / 重庆起步 / 西南拓展 / 全国布局
- clearer three-pillar structure:
  - 农业社会化服务
  - 无人机核心产品研发
  - 无人车平台研发
- scenario language for public-service uses where appropriate

Do **not** include:
- fundraising amount,
- share percentage,
- detailed financial projections,
- placeholder executive names.

- [ ] **Step 4: Keep the content module maintainable**

If `src/data_files/company.ts` becomes too large to reason about, extract second-phase prose structures into `src/data_files/company-content-phase2.ts` and import them back into `company.ts`.

Example extraction shape:

```ts
export const phaseTwoNarrative = {
  mission: "用科技补全生产的每一环",
  positioning: "扎根重庆、面向全国，专注智慧无人化装备研发与社会化服务",
  regionalStrategy: "重庆起步，深耕西南，逐步走向全国",
};
```

- [ ] **Step 5: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS with all pages compiling against the new content structures.

- [ ] **Step 6: Re-run content grep verification**

Run:

```bash
grep -n "丘陵山地\|用科技补全生产的每一环\|重庆起步\|西南\|全国布局\|星巡\|星耕" src/data_files/company.ts src/data_files/company-content-phase2.ts src/pages/index.astro src/pages/about.astro src/pages/services.astro src/pages/solutions.astro
```

Expected: PASS. If `company-content-phase2.ts` was not created, omit it from the command.

- [ ] **Step 7: Commit**

```bash
git add src/data_files/company.ts src/data_files/company-content-phase2.ts
git commit -m "feat: rewrite company site content sources"
```

If `src/data_files/company-content-phase2.ts` does not exist, commit without it.

---

## Task 4: Rebuild the homepage around the new brand and messaging

**Files:**
- Modify: `src/pages/index.astro`
- Modify: components used directly by homepage only if copy/contrast cannot be fixed at the page level
- Test: homepage visual/manual verification

- [ ] **Step 1: Write the failing homepage check**

Document the current homepage text that still reflects the first-phase stopgap wording:

```bash
grep -n "通过一段短片快速了解补全星科技\|尽量保留现有模板的科技感与动效节奏\|典型落地场景" src/pages/index.astro
```

Expected: PASS showing transitional copy still exists.

- [ ] **Step 2: Run the check to verify current homepage wording is transitional**

Run:

```bash
grep -n "通过一段短片快速了解补全星科技\|尽量保留现有模板的科技感与动效节奏\|典型落地场景" src/pages/index.astro
```

Expected: PASS with matches proving the homepage still contains temporary first-phase language.

- [ ] **Step 3: Rewrite homepage sections**

Update the homepage so it clearly communicates:
- who the company is,
- the three business pillars,
- why hillside/hilly agriculture is a key focus,
- why the company is differentiated,
- what action the visitor should take next.

Required changes:
- replace temporary video highlights,
- rewrite hero copy from the handbook/PPT language,
- rewrite solution summaries to reflect actual company positioning,
- upgrade section contrast using the new theme tokens,
- keep motion and layout rhythm where it still serves the content.

- [ ] **Step 4: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 5: Run browser verification for homepage**

Run:

```bash
npm run dev
```

Check manually:
- hero reads clearly in both themes,
- video panel text is readable in both themes,
- cards and CTA hierarchy are obvious,
- copied material from the handbook/PPT feels like a real company homepage rather than a template.

- [ ] **Step 6: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rebuild homepage for phase two brand refresh"
```

---

## Task 5: Rewrite About, Services, Solutions, Projects, and Contact pages

**Files:**
- Modify: `src/pages/about.astro`
- Modify: `src/pages/services.astro`
- Modify: `src/pages/solutions.astro`
- Modify: `src/pages/projects/index.astro`
- Modify: `src/pages/contact.astro`
- Test: page-by-page visual/manual verification

- [ ] **Step 1: Write the failing inner-page alignment check**

Use a grep command to prove the second-phase concepts are not yet fully represented across the core inner pages:

```bash
grep -n "丘陵山地\|公共服务\|重庆\|西南\|一条农\|模块化通用底盘\|产品销售\|运营服务\|数据服务" src/pages/about.astro src/pages/services.astro src/pages/solutions.astro src/pages/projects/index.astro src/pages/contact.astro
```

Expected: incomplete coverage or missing matches.

- [ ] **Step 2: Run the check and verify the gaps**

Run:

```bash
grep -n "丘陵山地\|公共服务\|重庆\|西南\|一条农\|模块化通用底盘\|产品销售\|运营服务\|数据服务" src/pages/about.astro src/pages/services.astro src/pages/solutions.astro src/pages/projects/index.astro src/pages/contact.astro
```

Expected: FAIL by omission, showing the inner pages still underrepresent the updated content model.

- [ ] **Step 3: Rewrite About page**

Ensure About focuses on:
- company introduction,
- mission/vision,
- why the company focuses on hillside/hilly scenarios,
- 重庆 → 西南 → 全国的发展路径,
- a realistic capability story without placeholder executives.

- [ ] **Step 4: Rewrite Services page**

Ensure Services clearly explains:
- agricultural socialized services,
- UAV core products,
- UGV platform R&D,
- how these relate to actual customer value.

- [ ] **Step 5: Rewrite Solutions page**

Organize by scenario instead of abstract capability, covering:
- hillside agriculture,
- larger-scale agriculture,
- public-service or campus/park scenarios,
- implementation flow from assessment to deployment.

- [ ] **Step 6: Rewrite Projects page**

If public named clients are unavailable, present “典型场景案例” rather than fabricated customer proof.

Each scenario card should clearly state:
- 场景,
- 问题,
- 方案,
- 成效.

- [ ] **Step 7: Rewrite Contact page**

Frame contact around real enterprise intents:
- 产品采购,
- 场景合作,
- 渠道合作,
- 商务咨询.

- [ ] **Step 8: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 9: Run browser verification for all inner pages**

Run:

```bash
npm run dev
```

Check manually on `/about`, `/services`, `/solutions`, `/projects`, `/contact`:
- deep theme and light theme both remain readable,
- page hierarchy is clear,
- the rewritten content reads like a cohesive brand system rather than isolated edits.

- [ ] **Step 10: Commit**

```bash
git add src/pages/about.astro src/pages/services.astro src/pages/solutions.astro src/pages/projects/index.astro src/pages/contact.astro
git commit -m "feat: rewrite core inner pages for company site phase two"
```

---

## Task 6: Replace mismatched template imagery with relevant industry visuals

**Files:**
- Modify: `src/data_files/company.ts`
- Modify: `src/pages/services.astro`
- Modify: `src/pages/solutions.astro`
- Modify: `src/pages/index.astro`
- Replace/Add: relevant files under `src/images/`
- Test: asset existence and build output

- [ ] **Step 1: Write the failing asset-fit check**

Document the current dependency on generic template images:

```bash
grep -n "aerial-view\|blueprints-image\|construction-workers\|person-working\|using-tools\|before-after\|progress-building" src/data_files/company.ts src/pages/services.astro src/pages/solutions.astro src/pages/index.astro
```

Expected: PASS with many matches proving generic/template imagery is still wired in.

- [ ] **Step 2: Run the check and verify template image dependence**

Run:

```bash
grep -n "aerial-view\|blueprints-image\|construction-workers\|person-working\|using-tools\|before-after\|progress-building" src/data_files/company.ts src/pages/services.astro src/pages/solutions.astro src/pages/index.astro
```

Expected: PASS with matches.

- [ ] **Step 3: Replace images with industry-aligned assets**

Select or create replacement image files that align with:
- agricultural machinery / crop service,
- UAV operations,
- UGV / patrol / park-service scenarios,
- Chongqing hilly/hillside agricultural context where possible.

If a source document does not contain usable images, choose realistic industry imagery that matches the approved “实景行业图” direction rather than abstract tech stock art.

Keep filenames stable where that reduces code churn; otherwise update references explicitly in the same task.

- [ ] **Step 4: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS with Astro image optimization succeeding.

- [ ] **Step 5: Run asset-reference verification**

Run:

```bash
grep -n "aerial-view\|blueprints-image\|construction-workers\|person-working\|using-tools\|before-after\|progress-building" src/data_files/company.ts src/pages/services.astro src/pages/solutions.astro src/pages/index.astro
```

Expected: either no matches or only justified matches that still represent real approved imagery.

- [ ] **Step 6: Commit**

```bash
git add src/data_files/company.ts src/pages/index.astro src/pages/services.astro src/pages/solutions.astro src/images
git commit -m "feat: replace template imagery with industry visuals"
```

---

## Task 7: Final verification and residual template cleanup

**Files:**
- Modify: any touched file from earlier tasks only if verification reveals a specific issue
- Test: build, grep-based residue checks, and browser verification

- [ ] **Step 1: Write the failing residual-content check**

Before cleanup, assert that template residue and low-value transitional language are discoverable:

```bash
grep -R "模板\|科技感与动效节奏\|示意图\|ScrewFast\|Cybercraft\|construction\|blueprint" /data/work/web/mycompanysite/src -n | sed -n '1,120p'
```

Expected: at least some matches before final polish is complete.

- [ ] **Step 2: Run the check and inspect actual residue**

Run:

```bash
grep -R "模板\|科技感与动效节奏\|示意图\|ScrewFast\|Cybercraft\|construction\|blueprint" src -n | sed -n '1,120p'
```

Expected: matches that identify the exact final residue to remove or rewrite.

- [ ] **Step 3: Implement the final cleanup**

Remove only the specific remaining template residue, placeholder wording, or contrast regressions discovered in Step 2. Do not bundle unrelated refactors.

- [ ] **Step 4: Run full build verification**

Run:

```bash
npm run build
```

Expected: PASS with zero build errors.

- [ ] **Step 5: Run final browser verification**

Run:

```bash
npm run dev
```

Manually verify:
- homepage and all five inner pages,
- both light and dark themes,
- first-visit auto theme behavior in a fresh browser profile,
- manual theme override persistence,
- nav/footer/logo switching,
- no obvious dark-on-dark or light-on-light text failures,
- no obvious dead links, placeholder images, or template branding.

- [ ] **Step 6: Commit**

```bash
git add src
git commit -m "fix: finish phase two company website polish"
```

---

## Self-Review

### Spec coverage

This plan covers:
- dual theme system with auto day/night default and manual override (Task 1),
- contrast/readability overhaul (Tasks 1, 4, 5, 7),
- icon/brand replacement from `/data/work/web/ICON` (Task 2),
- content rewrite from the handbook and PPT (Tasks 3, 4, 5),
- replacement of missing/misaligned imagery with real industry visuals (Task 6),
- homepage + core inner page rebuild (Tasks 4 and 5),
- final residual cleanup and verification (Task 7).

No spec gaps remain.

### Placeholder scan

No `TODO`, `TBD`, or “similar to Task N” placeholders remain. All tasks include explicit files, commands, and expected verification behavior.

### Type consistency

The plan consistently uses `light` / `dark` theme names, not `default` / `dark`, and keeps the new theme helper isolated in `src/assets/scripts/themePreference.ts`. Content remains centered around `COMPANY_INFO` and page content structures in `src/data_files/company.ts`.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-14-company-website-phase-2-implementation.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?