import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, r as renderComponent } from './astro/server_Bnb6Ye4e.mjs';
import 'kleur/colors';
import { $ as $$PrimaryCTA } from './PrimaryCTA_CjPQ7Udp.mjs';

const $$Astro = createAstro("https://bq-star.com/");
const $$VideoShowcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VideoShowcase;
  const {
    title,
    subTitle,
    videoUrl,
    highlights = [],
    ctaTitle,
    ctaUrl
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid items-center gap-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-10"> <div class="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/70 shadow-2xl shadow-black/30"> <video class="aspect-video h-full w-full object-cover"${addAttribute(videoUrl, "src")} controls muted loop playsinline preload="metadata">
您的浏览器暂不支持视频播放。
</video> </div> <div> <h2 class="text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-100 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="mt-4 text-pretty leading-8 text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} ${highlights.length > 0 && renderTemplate`<ul class="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300"> ${highlights.map((item) => renderTemplate`<li class="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3"> <span class="mt-1 h-2 w-2 flex-none rounded-full bg-primary-blue"></span> <span>${item}</span> </li>`)} </ul>`} ${ctaTitle && ctaUrl && renderTemplate`<div class="mt-6"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": ctaTitle, "url": ctaUrl })} </div>`} </div> </div> </section>`;
}, "/data/work/web/mycompanysite/src/components/sections/landing/VideoShowcase.astro", void 0);

export { $$VideoShowcase as $ };
