import ogImageSrc from "@images/social.png";
import { COMPANY_INFO } from "./company";

export const SITE = {
  title: COMPANY_INFO.name,
  tagline: COMPANY_INFO.tagline,
  description: COMPANY_INFO.description,
  description_short: COMPANY_INFO.descriptionShort,
  url: "https://bq-star.com",
  author: COMPANY_INFO.name,
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "zh-CN",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
      inLanguage: "zh-CN",
    },
  },
};

export const OG = {
  locale: "zh_CN",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}｜${SITE.tagline}`,
  description:
    "重庆补全星科技有限公司聚焦农业社会化服务、无人机核心产品研发、无人车平台研发，以及智慧无人化装备研发与社会化服务。",
  image: ogImageSrc,
};
