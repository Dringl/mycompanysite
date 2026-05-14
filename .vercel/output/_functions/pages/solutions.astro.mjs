import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bnb6Ye4e.mjs';
import 'kleur/colors';
import { S as SITE, a as $$MainLayout, e as solutionsPageContent } from '../chunks/Icon_DT7D7-Ea.mjs';
import { $ as $$MainSection } from '../chunks/MainSection_Dqv6q4rX.mjs';
import { p as personWorking, a as aerialView, u as usingTools, b as blueprints, c as constructionWorkers, $ as $$RightSection, d as $$LeftSection, e as $$FeaturesStats } from '../chunks/using-tools_hoF_GsYy.mjs';
export { renderers } from '../renderers.mjs';

const progressBuilding = new Proxy({"src":"/_astro/progress-building.Cjca0suI.avif","width":1920,"height":2560,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/data/work/web/mycompanysite/src/images/progress-building.avif";
							}
							
							return target[name];
						}
					});

const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  const solutionSections = solutionsPageContent.sections;
  const sectionImages = [
    {
      type: "right",
      title: solutionSections[0].title,
      subTitle: solutionSections[0].subTitle,
      single: solutionSections[0].single,
      imgOneAlt: solutionSections[0].imgOneAlt,
      imgTwoAlt: solutionSections[0].imgTwoAlt,
      btnExists: solutionSections[0].btnExists,
      btnTitle: solutionSections[0].btnTitle,
      btnURL: solutionSections[0].btnURL,
      imgOne: aerialView,
      imgTwo: personWorking
    },
    {
      type: "left",
      title: solutionSections[1].title,
      subTitle: solutionSections[1].subTitle,
      imgAlt: solutionSections[1].imgAlt,
      img: usingTools
    },
    {
      type: "right",
      title: solutionSections[2].title,
      subTitle: solutionSections[2].subTitle,
      single: solutionSections[2].single,
      imgOneAlt: solutionSections[2].imgOneAlt,
      imgTwoAlt: solutionSections[2].imgTwoAlt,
      imgOne: blueprints,
      imgTwo: progressBuilding
    },
    {
      type: "left",
      title: solutionSections[3].title,
      subTitle: solutionSections[3].subTitle,
      imgAlt: solutionSections[3].imgAlt,
      btnExists: solutionSections[3].btnExists,
      btnTitle: solutionSections[3].btnTitle,
      btnURL: solutionSections[3].btnURL,
      img: constructionWorkers
    }
  ];
  const pageTitle = `\u89E3\u51B3\u65B9\u6848 | ${SITE.title}`;
  const metaDescription = "\u8865\u5168\u661F\u79D1\u6280\u63D0\u4F9B\u519C\u4E1A\u793E\u4F1A\u5316\u670D\u52A1\u3001\u4F4E\u7A7A\u4F5C\u4E1A\u3001\u65E0\u4EBA\u8F66\u5E73\u53F0\u8054\u52A8\u4E0E\u5B9A\u5236\u5316\u573A\u666F\u8FD0\u8425\u652F\u6301\u7B49\u89E3\u51B3\u65B9\u6848\uFF0C\u5E2E\u52A9\u5BA2\u6237\u628A\u65E0\u4EBA\u5316\u80FD\u529B\u843D\u5230\u771F\u5B9E\u4E1A\u52A1\u73B0\u573A\u3002";
  const ogTitle = "\u89E3\u51B3\u65B9\u6848 | \u8865\u5168\u661F\u79D1\u6280";
  const solutionsUrl = new URL("/solutions", SITE.url).toString();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": solutionsUrl,
    url: solutionsUrl,
    name: "\u8865\u5168\u661F\u79D1\u6280\u89E3\u51B3\u65B9\u6848",
    description: metaDescription,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    },
    inLanguage: "zh-CN"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto w-full max-w-(--breakpoint-2xl) flex-grow px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "MainSection", $$MainSection, { "title": solutionsPageContent.hero.title, "subTitle": solutionsPageContent.hero.subTitle, "btnExists": solutionsPageContent.hero.btnExists, "btnTitle": solutionsPageContent.hero.btnTitle, "btnURL": solutionsPageContent.hero.btnURL })} ${sectionImages.map((article) => {
    return article.type === "right" ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })} ${renderComponent($$result2, "FeaturesStats", $$FeaturesStats, { "title": solutionsPageContent.stats.title, "subTitle": solutionsPageContent.stats.subTitle, "mainStatTitle": solutionsPageContent.stats.mainStatTitle, "mainStatSubTitle": solutionsPageContent.stats.mainStatSubTitle, "stats": [...solutionsPageContent.stats.items] })} </div> ` })}`;
}, "/data/work/web/mycompanysite/src/pages/solutions.astro", void 0);

const $$file = "/data/work/web/mycompanysite/src/pages/solutions.astro";
const $$url = "/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Solutions,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
