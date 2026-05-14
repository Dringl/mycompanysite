import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate, e as renderScript } from '../chunks/astro/server_Bnb6Ye4e.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout, S as SITE } from '../chunks/Icon_DaPNQlo-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bq-star.com/");
const $$Btn404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Btn404;
  const { title, id, noArrow } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-zinc-600 hover:bg-primary-blue/70 active:bg-primary-blue/90 dark:focus:outline-hidden";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`<!-- Button with dynamic title, id, and optional arrow -->${maybeRenderHead()}<button${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(id, "id")}> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight" })}`} </button>`;
}, "/data/work/web/mycompanysite/src/components/ui/buttons/Btn404.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `\u9875\u9762\u672A\u627E\u5230 | ${SITE.title}`;
  const subTitle = "\u62B1\u6B49\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u6216\u5DF2\u79FB\u52A8\u3002";
  const content = "\u8BF7\u8FD4\u56DE\u4E0A\u4E00\u9875\u7EE7\u7EED\u6D4F\u89C8\uFF0C\u6216\u4ECE\u9996\u9875\u91CD\u65B0\u8FDB\u5165\u60A8\u9700\u8981\u7684\u5185\u5BB9\u3002";
  const btnTitle = "\u8FD4\u56DE\u4E0A\u4E00\u9875";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid h-svh place-content-center"> <div class="mx-auto max-w-(--breakpoint-xl) px-4 py-8 lg:px-6 lg:py-16"> <div class="mx-auto max-w-(--breakpoint-sm) text-center"> <h1 class="text-dark mb-4 text-7xl font-extrabold text-primary-blue dark:text-primary-blue lg:text-9xl">
404
</h1> <p id="subtitle" class="mb-4 text-balance text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 md:text-4xl"> ${subTitle} </p> <p id="content" class="mb-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${content} </p> ${renderComponent($$result2, "Btn404", $$Btn404, { "title": btnTitle, "id": "go-back" })} </div> </div> </section> ` })} ${renderScript($$result, "/data/work/web/mycompanysite/src/pages/404.astro?astro&type=script&index=0&lang.ts")}`;
}, "/data/work/web/mycompanysite/src/pages/404.astro", void 0);

const $$file = "/data/work/web/mycompanysite/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
