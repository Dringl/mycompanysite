import { c as createAstro, a as createComponent, m as maybeRenderHead, f as renderSlot, d as renderTemplate, b as addAttribute, r as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_Bnb6Ye4e.mjs';
import 'kleur/colors';
import { i as inquiryTypes, c as COMPANY_INFO, d as contactHighlights, $ as $$Icon, a as $$MainLayout, S as SITE } from '../chunks/Icon_DT7D7-Ea.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://bq-star.com/");
const $$ContactIconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContactIconBlock;
  const {
    heading,
    content,
    isAddressVisible,
    addressContent,
    isLinkVisible,
    linkTitle,
    linkURL,
    isArrowVisible
  } = Astro2.props;
  const arrowSVG = `<svg
class="h-4 w-4 shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`<!-- Root container, which arranges the heading and content -->${maybeRenderHead()}<div class="flex gap-x-7 py-6"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3 class="font-bold text-neutral-700 dark:text-neutral-300"> ${heading} </h3> <!-- Content of the section --> <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">${content}</p> <!-- Conditional rendering of address content if isAddressVisible is true --> ${isAddressVisible ? renderTemplate`<p class="mt-1 text-sm italic text-neutral-500">${addressContent}</p>` : null} <!-- Conditional rendering of a link if isLinkVisible is true.
         The link also conditionally includes an arrow SVG if isArrowVisible is true --> ${isLinkVisible ? renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-hidden ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring-3 dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-hidden dark:focus:ring-1 "${addAttribute(linkURL, "href")}> ${linkTitle} ${isArrowVisible ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(arrowSVG)}` })}` : null} </a>` : null} </div> </div>`;
}, "/data/work/web/mycompanysite/src/components/ui/blocks/ContactIconBlock.astro", void 0);

const $$Astro$2 = createAstro("https://bq-star.com/");
const $$TextInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TextInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(name, "name")}${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "/data/work/web/mycompanysite/src/components/ui/forms/input/TextInput.astro", void 0);

const $$Astro$1 = createAstro("https://bq-star.com/");
const $$TextAreaInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TextAreaInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <textarea${addAttribute(id, "id")}${addAttribute(name, "name")} rows="4" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}></textarea> </div>`;
}, "/data/work/web/mycompanysite/src/components/ui/forms/input/TextAreaInput.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bq-star.com/");
const $$InquiryForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InquiryForm;
  const { submitLabel = "\u63D0\u4EA4\u54A8\u8BE2", compact = false } = Astro2.props;
  const formClass = compact ? "grid gap-4" : "grid gap-4";
  return renderTemplate(_a || (_a = __template(["", "<form", " data-inquiry-form> ", " ", " ", ' <div> <label for="contact-inquiry-type" class="sr-only">\u9700\u6C42\u7C7B\u578B</label> <select id="contact-inquiry-type" name="inquiryType" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1"> ', " </select> </div> ", ' <button type="submit" class="inline-flex items-center justify-center rounded-lg bg-zinc-600 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:bg-zinc-500"> ', ` </button> <p class="text-sm text-neutral-600 dark:text-neutral-400" data-inquiry-status>
\u63D0\u4EA4\u540E\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u4E0E\u60A8\u8054\u7CFB\u3002
</p> </form> <script>
  const forms = Array.from(document.querySelectorAll("[data-inquiry-form]"));

  forms.forEach((form) => {
    if (!(form instanceof HTMLFormElement)) return;

    const status = form.querySelector("[data-inquiry-status]");
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      if (status instanceof HTMLElement) {
        status.textContent = "\u6B63\u5728\u63D0\u4EA4\uFF0C\u8BF7\u7A0D\u5019\u2026";
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
          throw new Error(result.message || "\u63D0\u4EA4\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002");
        }

        form.reset();

        if (status instanceof HTMLElement) {
          status.textContent = result.message || "\u63D0\u4EA4\u6210\u529F\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u4E0E\u60A8\u8054\u7CFB\u3002";
        }
      } catch (error) {
        if (status instanceof HTMLElement) {
          status.textContent =
            error instanceof Error ? error.message : "\u63D0\u4EA4\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002";
        }
      } finally {
        if (submitButton instanceof HTMLButtonElement) {
          submitButton.disabled = false;
        }
      }
    });
  });
<\/script>`])), maybeRenderHead(), addAttribute(formClass, "class"), renderComponent($$result, "TextInput", $$TextInput, { "id": "contact-name", "label": "\u59D3\u540D", "name": "name" }), renderComponent($$result, "TextInput", $$TextInput, { "id": "contact-company", "label": "\u516C\u53F8\u540D\u79F0", "name": "company" }), renderComponent($$result, "TextInput", $$TextInput, { "id": "contact-channel", "label": "\u8054\u7CFB\u65B9\u5F0F", "name": "contact" }), inquiryTypes.map((item) => renderTemplate`<option${addAttribute(item, "value")}>${item}</option>`), renderComponent($$result, "TextAreaInput", $$TextAreaInput, { "id": "contact-details", "label": "\u9700\u6C42\u63CF\u8FF0", "name": "details" }), submitLabel);
}, "/data/work/web/mycompanysite/src/components/sections/misc/InquiryForm.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const title = "\u8054\u7CFB\u6211\u4EEC";
  const subTitle = COMPANY_INFO.contactIntro;
  const formTitle = "\u63D0\u4EA4\u54A8\u8BE2\u9700\u6C42";
  const formSubTitle = "\u586B\u5199\u57FA\u7840\u4FE1\u606F\u540E\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u4E0E\u60A8\u8054\u7CFB\u3002";
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="mt-12 grid items-start gap-6 lg:grid-cols-2 lg:gap-16"> <div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-6 lg:p-8"> <h2 class="mb-2 text-xl font-bold text-neutral-700 dark:text-neutral-300"> ${formTitle} </h2> <p class="mb-8 text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> ${renderComponent($$result, "InquiryForm", $$InquiryForm, { "submitLabel": COMPANY_INFO.ctaLabel })} </div> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${contactHighlights.map((item, index) => renderTemplate`${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": item.heading, "content": item.content, "isLinkVisible": item.isLinkVisible, "linkTitle": item.linkTitle, "linkURL": item.linkURL, "isArrowVisible": item.isArrowVisible }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": index === 0 ? "chatBubble" : index === 1 ? "briefcase" : index === 2 ? "openInNew" : "question" })} ` })}`)} </div> </div> </div> </section>`;
}, "/data/work/web/mycompanysite/src/components/sections/misc/ContactSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `\u8054\u7CFB\u6211\u4EEC\uFF5C${COMPANY_INFO.shortName}`;
  const metaDescription = COMPANY_INFO.contactIntro;
  const canonicalUrl = `${SITE.url}/contact`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": canonicalUrl,
    url: canonicalUrl,
    name: `${COMPANY_INFO.shortName} \u8054\u7CFB\u6211\u4EEC`,
    description: metaDescription,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    },
    inLanguage: "zh-CN"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "/data/work/web/mycompanysite/src/pages/contact.astro", void 0);

const $$file = "/data/work/web/mycompanysite/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
