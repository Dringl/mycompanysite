import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bnb6Ye4e.mjs';
import 'kleur/colors';
import { S as SITE, a as $$MainLayout, s as servicesPageContent } from '../chunks/Icon_DT7D7-Ea.mjs';
import { $ as $$MainSection } from '../chunks/MainSection_Dqv6q4rX.mjs';
import { p as personWorking, a as aerialView, c as constructionWorkers, b as blueprints, u as usingTools, $ as $$RightSection, d as $$LeftSection, e as $$FeaturesStats } from '../chunks/using-tools_hoF_GsYy.mjs';
export { renderers } from '../renderers.mjs';

const beforeAfter = new Proxy({"src":"/_astro/before-after.BntBToq6.avif","width":2048,"height":1366,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/data/work/web/mycompanysite/src/images/before-after.avif";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const serviceSections = servicesPageContent.sections;
  const sectionImages = [
    {
      type: "right",
      title: serviceSections[0].title,
      subTitle: serviceSections[0].subTitle,
      single: serviceSections[0].single,
      imgOneAlt: serviceSections[0].imgOneAlt,
      imgTwoAlt: serviceSections[0].imgTwoAlt,
      btnExists: serviceSections[0].btnExists,
      btnTitle: serviceSections[0].btnTitle,
      btnURL: serviceSections[0].btnURL,
      imgOne: aerialView,
      imgTwo: personWorking
    },
    {
      type: "left",
      title: serviceSections[1].title,
      subTitle: serviceSections[1].subTitle,
      imgAlt: serviceSections[1].imgAlt,
      btnExists: serviceSections[1].btnExists,
      btnTitle: serviceSections[1].btnTitle,
      btnURL: serviceSections[1].btnURL,
      img: beforeAfter
    },
    {
      type: "right",
      title: serviceSections[2].title,
      subTitle: serviceSections[2].subTitle,
      single: serviceSections[2].single,
      imgOneAlt: serviceSections[2].imgOneAlt,
      imgTwoAlt: serviceSections[2].imgTwoAlt,
      imgOne: blueprints,
      imgTwo: constructionWorkers
    },
    {
      type: "left",
      title: serviceSections[3].title,
      subTitle: serviceSections[3].subTitle,
      imgAlt: serviceSections[3].imgAlt,
      btnExists: serviceSections[3].btnExists,
      btnTitle: serviceSections[3].btnTitle,
      btnURL: serviceSections[3].btnURL,
      img: usingTools
    }
  ];
  const pageTitle = `\u4EA7\u54C1\u4E0E\u670D\u52A1 | ${SITE.title}`;
  const metaDescription = "\u8865\u5168\u661F\u79D1\u6280\u56F4\u7ED5\u519C\u4E1A\u793E\u4F1A\u5316\u670D\u52A1\u3001\u65E0\u4EBA\u673A\u6838\u5FC3\u4EA7\u54C1\u7814\u53D1\u3001\u65E0\u4EBA\u8F66\u5E73\u53F0\u7814\u53D1\u4E0E\u573A\u666F\u5316\u4EA4\u4ED8\uFF0C\u63D0\u4F9B\u9762\u5411\u771F\u5B9E\u519C\u4E1A\u73B0\u573A\u7684\u4E00\u4F53\u5316\u4EA7\u54C1\u4E0E\u670D\u52A1\u80FD\u529B\u3002";
  const ogTitle = "\u4EA7\u54C1\u4E0E\u670D\u52A1 | \u8865\u5168\u661F\u79D1\u6280";
  const servicesUrl = new URL("/services", SITE.url).toString();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": servicesUrl,
    url: servicesUrl,
    name: "\u8865\u5168\u661F\u79D1\u6280\u4EA7\u54C1\u4E0E\u670D\u52A1",
    description: metaDescription,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    },
    inLanguage: "zh-CN"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto w-full max-w-(--breakpoint-2xl) flex-grow px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "MainSection", $$MainSection, { "title": servicesPageContent.hero.title, "subTitle": servicesPageContent.hero.subTitle, "btnExists": servicesPageContent.hero.btnExists, "btnTitle": servicesPageContent.hero.btnTitle, "btnURL": servicesPageContent.hero.btnURL })} ${sectionImages.map((article) => {
    return article.type === "right" ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })} ${renderComponent($$result2, "FeaturesStats", $$FeaturesStats, { "title": servicesPageContent.stats.title, "subTitle": servicesPageContent.stats.subTitle, "mainStatTitle": servicesPageContent.stats.mainStatTitle, "mainStatSubTitle": servicesPageContent.stats.mainStatSubTitle, "stats": [...servicesPageContent.stats.items] })} </div> ` })}`;
}, "/data/work/web/mycompanysite/src/pages/services.astro", void 0);

const $$file = "/data/work/web/mycompanysite/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
