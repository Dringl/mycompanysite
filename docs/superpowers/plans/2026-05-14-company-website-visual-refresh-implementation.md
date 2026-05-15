# Company Website Visual Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the visual refresh and conversion-closure upgrade for the company website: replace homepage/service imagery, fix the homepage video, correct the navbar brand icon, remove repeated content images, add Google-Workspace-oriented contact notification plumbing, and show a QR-code modal after successful inquiry submission.

**Architecture:** Keep the existing Astro page/component structure, but concentrate this change set around three boundaries: shared content/image mapping in `src/data_files/company.ts`, page/component presentation in homepage/solutions/contact/navbar modules, and the contact API flow in `src/pages/api/contact.ts`. Prefer imported Astro image assets for maintainable image uniqueness, keep the inquiry success modal inside the existing form flow, and preserve the current `/api/contact` endpoint while extending its response contract for email/QR success handling.

**Tech Stack:** Astro 5, `@astrojs/vercel`, TypeScript, Astro assets, Tailwind CSS v4, existing contact API, static image/video assets, browser-based Playwright smoke checks.

---

## File Structure

### Existing files to modify
- `src/data_files/company.ts` — replace homepage card/case imagery with unique imported assets and add QR/modal copy if needed.
- `src/pages/index.astro` — use the refreshed homepage image/video data and keep homepage case CTA behavior aligned with new assets.
- `src/pages/solutions.astro` — replace the final left-side image with the black icon artwork and de-duplicate solution imagery.
- `src/components/sections/features/FeaturesGeneral.astro` — switch homepage business cards from CSS background strings to real Astro images so imported assets can be used safely.
- `src/components/sections/landing/VideoShowcase.astro` — make the homepage video block more robust for browser playback feedback and poster/loading behavior if needed.
- `src/components/sections/navbar&footer/Navbar.astro` — swap to the corrected brand icon asset and theme-safe rendering.
- `src/components/sections/misc/InquiryForm.astro` — add success modal state, QR code display, and response handling for the contact API.
- `src/pages/api/contact.ts` — extend the endpoint from pure webhook forwarding to email-oriented notification plumbing while preserving validation.
- `src/env.d.ts` — add any new environment variable typings needed by the upgraded contact flow.
- `src/components/Meta.astro`, `src/pages/manifest.json.ts`, `src/data_files/constants.ts`, `src/components/sections/navbar&footer/FooterSection.astro` — keep site identity assets consistent with the corrected icon set.

### Existing assets to replace or copy from source material
- `src/images/logo_trans.png`
- `src/images/logo.png`
- `src/images/icon.png`
- `src/images/icon-maskable.png`
- `src/images/social.png`
- `public/videos/company-intro.mp4`
- `public/contact/qr-contact.jpg` (copied from `/data/work/web/QR_code/联系二维码.jpg`)

### Test strategy
- `npm run build` for Astro/vercel output validation.
- Local deployment smoke test against the Vercel output server.
- Browser click-and-visual verification for homepage, solutions page, contact form modal, and contact API success flow.

---

## Task 1: Refresh shared visual assets and homepage imagery

**Files:**
- Modify: `src/data_files/company.ts`
- Modify: `src/components/sections/features/FeaturesGeneral.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/components/sections/navbar&footer/Navbar.astro`
- Modify: `src/components/sections/navbar&footer/FooterSection.astro`
- Modify: `src/components/Meta.astro`
- Modify: `src/pages/manifest.json.ts`
- Modify: `src/data_files/constants.ts`
- Replace: `src/images/logo_trans.png`
- Replace: `src/images/logo.png`
- Replace: `src/images/icon.png`
- Replace: `src/images/icon-maskable.png`
- Replace: `src/images/social.png`

- [ ] **Step 1: Write the failing asset checks**

Run:

```bash
grep -n 'image: "/home/' src/data_files/company.ts
grep -n 'background-image:url' src/components/sections/features/FeaturesGeneral.astro src/pages/index.astro
grep -n 'logo_trans.png' src/components/sections/navbar\&footer/Navbar.astro src/components/sections/navbar\&footer/FooterSection.astro
```

Expected: PASS showing the current homepage still uses string-path backgrounds and the old navbar logo file.

- [ ] **Step 2: Replace homepage image mapping with imported unique assets**

Import explicit image modules in `src/data_files/company.ts` and assign unique assets to:
- four homepage business cards,
- three homepage solution tabs,
- three homepage case highlights,
- homepage advantage visual,
- about-page strength visual if needed to avoid duplication.

Keep each content zone on a unique image and avoid reusing the same asset between homepage cards, homepage cases, and solution sections.

- [ ] **Step 3: Convert homepage business cards to Astro `Image` rendering**

Update `src/components/sections/features/FeaturesGeneral.astro` so each business card renders a positioned `<Image />` plus overlay instead of relying on `background-image:url(...)`. This allows imported image metadata and safer future maintenance.

- [ ] **Step 4: Replace brand icon assets and wiring**

Use the provided black/white icon source files to regenerate the local site identity assets, then update navbar/footer/meta/manifest/OG wiring so the corrected brand icon appears consistently.

- [ ] **Step 5: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS with no new build errors after the shared image and icon refresh.

---

## Task 2: Rebuild solutions imagery and fix homepage video playback

**Files:**
- Modify: `src/pages/solutions.astro`
- Modify: `src/components/sections/landing/VideoShowcase.astro`
- Modify: `src/pages/index.astro`
- Replace: `public/videos/company-intro.mp4`

- [ ] **Step 1: Write the failing visual-logic checks**

Run:

```bash
grep -n 'img: agriculturalMountainImage' src/pages/solutions.astro
grep -n 'videoUrl="/videos/company-intro.mp4"' src/pages/index.astro
grep -n '<video' src/components/sections/landing/VideoShowcase.astro
```

Expected: PASS showing the final solutions section still reuses a scene photo and the video block has only the current minimal setup.

- [ ] **Step 2: Replace the final solutions image with the black icon artwork**

Import the black icon asset into `src/pages/solutions.astro`, assign it to the final left-side section, and de-duplicate the other solution images so the section set no longer repeats the same content picture.

- [ ] **Step 3: Refresh the homepage video asset and playback markup**

Replace `public/videos/company-intro.mp4` with the provided stable company video source and refine `VideoShowcase.astro` with poster/playsinline/preload-safe behavior or explanatory fallback text as needed so browser playback can be validated.

- [ ] **Step 4: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS with the new video and updated solutions image imports.

---

## Task 3: Upgrade the contact flow with email notification plumbing and QR success modal

**Files:**
- Modify: `src/components/sections/misc/InquiryForm.astro`
- Modify: `src/pages/api/contact.ts`
- Modify: `src/env.d.ts`
- Create or copy: `public/contact/qr-contact.jpg`

- [ ] **Step 1: Write the failing contact-flow checks**

Run:

```bash
grep -n 'CONTACT_WEBHOOK_URL' src/pages/api/contact.ts src/env.d.ts
grep -n 'data-inquiry-status' src/components/sections/misc/InquiryForm.astro
grep -n 'fetch("/api/contact"' src/components/sections/misc/InquiryForm.astro
```

Expected: PASS showing the current API only supports webhook forwarding and the form has no QR modal success flow.

- [ ] **Step 2: Extend the contact API contract**

Keep existing validation, but change the endpoint so it can:
- still forward to `CONTACT_WEBHOOK_URL` when configured,
- optionally call an email-sending integration path when the required environment variables are present,
- return structured JSON describing whether the inquiry was accepted and whether notification succeeded.

If live Google Workspace credentials are unavailable in the local environment, the implementation must still clearly expose the required configuration path instead of faking success.

- [ ] **Step 3: Add the QR-code success modal to the existing form**

Copy the provided QR image into `public/contact/qr-contact.jpg`, then update `InquiryForm.astro` so a successful API response resets the form, updates the status text, and opens a centered modal containing:
- success heading,
- short business-style confirmation text,
- QR image,
- close button.

The modal must open only after a successful backend response.

- [ ] **Step 4: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS with the contact API and success-modal upgrade.

---

## Task 4: Run local deployment smoke checks and browser-based visual testing

**Files:**
- Modify if needed during fixes: any files from Tasks 1–3
- Test artifacts: temporary local verification scripts under `/tmp`

- [ ] **Step 1: Build fresh deployment output**

Run:

```bash
npm run build
```

Expected: PASS and refreshed `.vercel/output` artifacts.

- [ ] **Step 2: Start a local Vercel-output server**

Use the existing local deployment approach to serve `.vercel/output` on a local port so the site is tested in deployment mode rather than only `astro dev` mode.

- [ ] **Step 3: Run automated browser smoke checks**

Verify at minimum:
- homepage loads,
- homepage video request succeeds,
- homepage business cards render,
- homepage case cards render,
- solutions page loads and shows the black icon artwork section,
- contact page form submits through a test path,
- QR modal appears after success,
- navbar icon renders correctly.

- [ ] **Step 4: Capture browser screenshots for visual inspection**

Take screenshots of:
- homepage business-card section,
- homepage video section,
- homepage case section,
- solutions page final section,
- contact-page success modal.

- [ ] **Step 5: Fix any regression exposed by the deployment-mode test**

If smoke checks reveal issues, fix only the exposed regression, rerun `npm run build`, rerun the deployment smoke checks, and keep iterating until the refreshed flow passes.

---

## Self-Review Notes

- **Spec coverage:** Task 1 covers homepage card images, repeated-image cleanup, and brand icon correction. Task 2 covers the solutions black-icon replacement and homepage video repair. Task 3 covers contact notification plumbing plus QR modal. Task 4 covers local deployment and browser-based visual testing.
- **Placeholder scan:** No TBD/TODO placeholders remain; where live Google Workspace credentials may be unavailable, the plan explicitly requires a real configuration path rather than pretending the integration is complete.
- **Type consistency:** Shared image work is centralized in `company.ts`; the contact flow remains on `/api/contact` across both frontend and backend tasks.
