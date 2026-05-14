import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_Bnb6Ye4e.mjs';
import 'kleur/colors';
import { $ as $$Icon, S as SITE, a as $$MainLayout } from '../chunks/Icon_DT7D7-Ea.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_BIzi_tZR.mjs';
import '../chunks/index_BS0v8091.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CbAMe3DI.mjs';
import { $ as $$FeaturesStatsAlt } from '../chunks/FeaturesStatsAlt_B5k7ftnJ.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_C75xCDgI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://bq-star.com/");
const $$CardSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardSmall;
  const { product, productLocale = "" } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  const localizedId = productLocale && productLocale !== "en" ? product.id.replace(new RegExp(`^${productLocale}/`), "") : product.id.replace(/^en\//, "");
  return renderTemplate`<!-- A clickable card that leads to the details of the project -->${maybeRenderHead()}<a${addAttribute(productLocale && productLocale !== "en" ? `/${productLocale}/projects/${localizedId}/` : `/projects/${localizedId}/`, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:h-80"> <!-- The product's main image --> ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })} <!-- An overlay gradient that sits on top of the product image--> <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- The product's subtitle and the anchor SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })} </span> </a>`;
}, "/data/work/web/mycompanysite/src/components/ui/cards/CardSmall.astro", void 0);

const $$Astro$3 = createAstro("https://bq-star.com/");
const $$CardWide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardWide;
  const { product, productLocale = "" } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  const localizedId = productLocale && productLocale !== "en" ? product.id.replace(new RegExp(`^${productLocale}/`), "") : product.id.replace(/^en\//, "");
  return renderTemplate`<!-- The anchor tag is the main container for the project card. When clicked, this leads to the project details. -->${maybeRenderHead()}<a${addAttribute(productLocale && productLocale !== "en" ? `/${productLocale}/projects/${localizedId}/` : `/projects/${localizedId}/`, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:col-span-2 md:h-80"> <!-- The product's main image --> ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })} <!-- This container includes a gradient overlay over the product's image --> <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- This container includes product's subtitle and an SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })}</span> </a>`;
}, "/data/work/web/mycompanysite/src/components/ui/cards/CardWide.astro", void 0);

const $$Astro$2 = createAstro("https://bq-star.com/");
const $$AvatarTestimonialSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AvatarTestimonialSection;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0"> <img class="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy"> </div>`;
}, "/data/work/web/mycompanysite/src/components/ui/avatars/AvatarTestimonialSection.astro", void 0);

const $$Astro$1 = createAstro("https://bq-star.com/");
const $$TestimonialsSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialsSectionAlt;
  const { title, testimonials } = Astro2.props;
  return renderTemplate`<!-- Main div that wraps the testimonials section -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full" id="testimonials"> <!-- Title of the testimonials section --> <div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl"> ${title} </h2> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Looping through each testimonial data and rendering it --> ${testimonials.map((testimonial) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col rounded-xl bg-neutral-50 dark:bg-least-pure-dark"> <div class="flex-auto p-4 md:p-6"> <!-- Testimonial content --> <p class="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg"> ${testimonial.content} </p> </div> <div class="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7"> <div class="flex items-center"> ${renderComponent($$result, "AvatarTestimonialSection", $$AvatarTestimonialSection, { "src": testimonial.avatarSrc, "alt": testimonial.avatarAlt })} <div class="ms-3 grow"> <p class="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base"> ${testimonial.author} </p> <p class="text-xs text-neutral-600 dark:text-neutral-400"> ${testimonial.role} </p> </div> </div> </div> </div> </div>`)} </div> </section>`;
}, "/data/work/web/mycompanysite/src/components/sections/testimonials/TestimonialsSectionAlt.astro", void 0);

const $$Astro = createAstro("https://bq-star.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const product = (await getCollection("products", ({ id }) => {
    return id.startsWith("en/");
  })).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "\u5BA2\u6237\u6848\u4F8B";
  const subTitle = "\u805A\u7126\u8865\u5168\u661F\u79D1\u6280\u5728\u519C\u4E1A\u793E\u4F1A\u5316\u670D\u52A1\u3001\u65E0\u4EBA\u673A\u6838\u5FC3\u4EA7\u54C1\u3001\u65E0\u4EBA\u8F66\u5E73\u53F0\u4E0E\u573A\u666F\u5316\u4EA4\u4ED8\u4E2D\u7684\u771F\u5B9E\u843D\u5730\u5B9E\u8DF5\u3002";
  const testimonials = [
    {
      content: "\u201C\u8865\u5168\u661F\u79D1\u6280\u5E2E\u52A9\u6211\u4EEC\u628A\u519C\u4E8B\u670D\u52A1\u8C03\u5EA6\u3001\u8BBE\u5907\u7BA1\u7406\u548C\u8FC7\u7A0B\u7559\u75D5\u771F\u6B63\u4E32\u4E86\u8D77\u6765\uFF0C\u9879\u76EE\u4E0A\u7EBF\u540E\u8DE8\u4E61\u9547\u534F\u540C\u660E\u663E\u987A\u7545\uFF0C\u5BA2\u6237\u5BF9\u670D\u52A1\u900F\u660E\u5EA6\u4E5F\u66F4\u8BA4\u53EF\u3002\u201D",
      author: "\u5468\u6D77\u6797",
      role: "\u533A\u57DF\u519C\u4E1A\u670D\u52A1\u4E2D\u5FC3\u8D1F\u8D23\u4EBA",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "\u519C\u4E1A\u670D\u52A1\u4E2D\u5FC3\u5BA2\u6237\u5934\u50CF"
    },
    {
      content: "\u201C\u6211\u4EEC\u539F\u672C\u62C5\u5FC3\u65E0\u4EBA\u673A\u4E0E\u73B0\u573A\u6D41\u7A0B\u8131\u8282\uFF0C\u8865\u5168\u661F\u79D1\u6280\u5728\u8BBE\u5907\u3001\u5E73\u53F0\u548C\u57F9\u8BAD\u4EA4\u4ED8\u4E0A\u505A\u5F97\u5F88\u624E\u5B9E\uFF0C\u9996\u6279\u8BD5\u70B9\u5F88\u5FEB\u5C31\u5F62\u6210\u4E86\u53EF\u590D\u5236\u7684\u4F5C\u4E1A\u6807\u51C6\u3002\u201D",
      author: "\u5218\u654F",
      role: "\u667A\u6167\u519C\u4E1A\u9879\u76EE\u7ECF\u7406",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "\u667A\u6167\u519C\u4E1A\u5BA2\u6237\u5934\u50CF"
    },
    {
      content: "\u201C\u4ECE\u65E0\u4EBA\u8F66\u8BD5\u70B9\u5230\u591A\u573A\u666F\u6269\u5C55\uFF0C\u8865\u5168\u661F\u79D1\u6280\u4E0D\u4EC5\u4EA4\u4ED8\u4E86\u5E73\u53F0\uFF0C\u8FD8\u628A\u540E\u7EED\u8FD0\u8425\u65B9\u5F0F\u4E00\u8D77\u68B3\u7406\u6E05\u695A\uFF0C\u56E2\u961F\u5BF9\u957F\u671F\u63A8\u8FDB\u66F4\u6709\u4FE1\u5FC3\u3002\u201D",
      author: "\u9648\u81F4\u8FDC",
      role: "\u56ED\u533A\u667A\u80FD\u5316\u8FD0\u8425\u8D1F\u8D23\u4EBA",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "\u56ED\u533A\u5BA2\u6237\u5934\u50CF"
    }
  ];
  const pageTitle = `\u5BA2\u6237\u6848\u4F8B | ${SITE.title}`;
  const metaDescription = "\u67E5\u770B\u8865\u5168\u661F\u79D1\u6280\u5728\u519C\u4E1A\u793E\u4F1A\u5316\u670D\u52A1\u3001\u65E0\u4EBA\u673A\u3001\u65E0\u4EBA\u8F66\u4E0E\u534F\u540C\u4EA4\u4ED8\u65B9\u5411\u7684\u5BA2\u6237\u6848\u4F8B\u4E0E\u843D\u5730\u7ECF\u9A8C\u3002";
  const ogTitle = `\u5BA2\u6237\u6848\u4F8B | ${SITE.title}`;
  const projectsUrl = new URL("/projects", SITE.url).toString();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": projectsUrl,
    url: projectsUrl,
    name: `\u5BA2\u6237\u6848\u4F8B | ${SITE.title}`,
    description: "\u67E5\u770B\u8865\u5168\u661F\u79D1\u6280\u5728\u519C\u4E1A\u793E\u4F1A\u5316\u670D\u52A1\u3001\u65E0\u4EBA\u673A\u6838\u5FC3\u4EA7\u54C1\u3001\u65E0\u4EBA\u8F66\u5E73\u53F0\u4E0E\u573A\u666F\u5316\u4EA4\u4ED8\u65B9\u5411\u7684\u5BA2\u6237\u6848\u4F8B\u3002",
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    },
    inLanguage: "zh-CN"
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto w-full max-w-(--breakpoint-2xl) flex-grow px-4 sm:px-6 lg:px-8"> <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-2xl font-bold tracking-tight text-balance text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-(--breakpoint-sm) text-pretty text-neutral-600 md:block dark:text-neutral-400"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "\u67E5\u770B\u5BA2\u6237\u53CD\u9988", "url": "#testimonials", "noArrow": true })} </div>  <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "\u4E3A\u4EC0\u4E48\u9009\u62E9\u8865\u5168\u661F\u79D1\u6280", "subTitle": "\u6211\u4EEC\u5C06\u519C\u4E1A\u793E\u4F1A\u5316\u670D\u52A1\u7ECF\u9A8C\u3001\u667A\u80FD\u88C5\u5907\u7814\u53D1\u80FD\u529B\u4E0E\u573A\u666F\u4EA4\u4ED8\u65B9\u6CD5\u7ED3\u5408\u8D77\u6765\uFF0C\u5E2E\u52A9\u5BA2\u6237\u4ECE\u8BD5\u70B9\u9A8C\u8BC1\u8D70\u5411\u89C4\u6A21\u843D\u5730\uFF0C\u5728\u771F\u5B9E\u4E1A\u52A1\u73AF\u5883\u4E2D\u6301\u7EED\u521B\u9020\u53EF\u8861\u91CF\u7684\u6210\u679C\u3002", "benefits": [
    "\u805A\u7126\u519C\u4E1A\u4E0E\u65E0\u4EBA\u5316\u573A\u666F\uFF0C\u65B9\u6848\u66F4\u8D34\u8FD1\u771F\u5B9E\u4E1A\u52A1\u6D41\u7A0B\u4E0E\u73B0\u573A\u7EA6\u675F\u3002",
    "\u8986\u76D6\u5E73\u53F0\u3001\u8BBE\u5907\u3001\u5B9E\u65BD\u4E0E\u57F9\u8BAD\u534F\u540C\uFF0C\u51CF\u5C11\u4ECE\u65B9\u6848\u5230\u843D\u5730\u7684\u65AD\u5C42\u3002",
    "\u575A\u6301\u957F\u671F\u966A\u8DD1\u4E0E\u8FED\u4EE3\u4F18\u5316\uFF0C\u5E2E\u52A9\u5BA2\u6237\u6C89\u6DC0\u53EF\u590D\u5236\u7684\u8FD0\u8425\u80FD\u529B\u3002"
  ] })}  ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "\u5BA2\u6237\u53CD\u9988", "testimonials": testimonials })} </div> ` })}`;
}, "/data/work/web/mycompanysite/src/pages/projects/index.astro", void 0);

const $$file = "/data/work/web/mycompanysite/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
