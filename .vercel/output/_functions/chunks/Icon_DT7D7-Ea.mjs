import { a as createComponent, s as spreadAttributes, u as unescapeHTML, d as renderTemplate, c as createAstro, b as addAttribute, m as maybeRenderHead, e as renderScript, r as renderComponent, f as renderSlot, j as renderHead } from './astro/server_Bnb6Ye4e.mjs';
import 'kleur/colors';
import 'clsx';
import { b as getImage, $ as $$Image } from './_astro_assets_CbAMe3DI.mjs';
import { i as icon } from './icon_CzHbM_ST.mjs';
import './index_BS0v8091.mjs';
/* empty css                         */

const ogImageSrc = new Proxy({"src":"/_astro/social.CWnIx2-K.png","width":1200,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/data/work/web/mycompanysite/src/images/social.png";
							}
							
							return target[name];
						}
					});

const COMPANY_INFO = {
  name: "重庆补全星科技有限公司",
  shortName: "补全星科技",
  tagline: "智慧无人化装备研发与社会化服务提供商",
  description: "重庆补全星科技有限公司聚焦农业社会化服务、无人机核心产品研发、无人车平台研发，以及智慧无人化装备研发与社会化服务，持续推进农业科技与智能装备应用落地。",
  ctaLabel: "立即咨询",
  contactIntro: "欢迎联系我们，获取农业科技、无人机核心产品、无人车平台与智慧无人化装备相关咨询。",
  footerNote: "聚焦农业科技场景，提供无人机核心产品、无人车平台与智慧无人化装备研发及社会化服务。",
  hero: {
    tagline: "农业科技 × 无人化装备 × 场景交付",
    title: "让无人化装备真正走进农业现场",
    brandTitle: "补全星科技",
    subTitle: "围绕农业社会化服务、无人机核心产品、无人车平台与智慧无人化装备，提供从方案设计、产品研发到落地交付的一体化能力。",
    primaryText: "立即咨询",
    primaryUrl: "/contact",
    secondaryText: "查看客户案例",
    secondaryUrl: "/projects"
  }
};
const PRIMARY_NAVIGATION = [
  { name: "首页", url: "/" },
  { name: "产品与服务", url: "/services" },
  { name: "解决方案", url: "/solutions" },
  { name: "客户案例", url: "/projects" },
  { name: "关于我们", url: "/about" },
  { name: "联系我们", url: "/contact" }
];
const FOOTER_NAVIGATION = [
  {
    section: "栏目导航",
    links: PRIMARY_NAVIGATION
  },
  {
    section: "产品与服务",
    links: [
      { name: "农业社会化服务", url: "/services" },
      { name: "无人机核心产品研发", url: "/services#products" },
      { name: "无人车平台与场景方案", url: "/solutions" }
    ]
  },
  {
    section: "联系与合作",
    links: [
      { name: "立即咨询", url: "/contact" },
      { name: "客户案例", url: "/projects" },
      { name: "了解我们", url: "/about" }
    ]
  }
];
const COMPANY_LINKS = {
  home: "/",
  services: "/services",
  contact: "/contact"
};
const homePillars = [
  {
    title: "农业社会化服务",
    summary: "围绕植保、巡检、作业组织与执行交付，提升农业场景服务效率。",
    image: "/home/aimage1.jpg"
  },
  {
    title: "无人机核心产品研发",
    summary: "面向复杂作业环境打磨核心硬件、控制模块与任务载荷集成能力。",
    image: "/home/aimage2.jpg"
  },
  {
    title: "无人车平台研发",
    summary: "构建模块化底盘与协同平台，为运输、巡检与联合作业提供基础能力。",
    image: "/home/aimage3.jpg"
  },
  {
    title: "智慧无人化装备交付",
    summary: "从方案适配、设备部署到运维服务，支撑真实业务场景持续运行。",
    image: "/home/aimage4.jpg"
  }
];
const homeSolutionTabs = [
  {
    heading: "智慧农业作业协同",
    content: "面向大田、果园与丘陵等场景，整合作业流程、装备调度与交付服务，帮助客户更快完成无人化作业体系搭建。",
    svg: "tools",
    src: "/home/simg1.jpg",
    alt: "农业作业场景示意图",
    first: true
  },
  {
    heading: "低空巡检与数据采集",
    content: "结合无人机载荷与飞行作业能力，为巡检、测绘与数据采集需求提供稳定可落地的场景解决方案。",
    svg: "dashboard",
    src: "/home/simg2.jpg",
    alt: "无人机巡检与数据采集示意图"
  },
  {
    heading: "无人车平台联动作业",
    content: "以模块化无人车平台为基础，支持运输、巡检与多装备联动，满足园区与农业场景的持续化无人作业需求。",
    svg: "house",
    src: "/home/simg3.jpg",
    alt: "无人车平台联动作业示意图"
  }
];
const homeCaseHighlights = [
  {
    title: "丘陵果园无人化植保方案",
    summary: "围绕地形复杂、作业半径大的人工作业痛点，提供飞防组织、设备适配与服务交付能力。",
    tag: "农业社会化服务",
    image: "/home/simg1.jpg",
    href: "/projects"
  },
  {
    title: "园区巡检与采集协同方案",
    summary: "通过无人机平台与任务载荷能力，支撑巡检、记录与多节点数据采集的高效执行。",
    tag: "无人机核心产品",
    image: "/home/simg2.jpg",
    href: "/projects"
  },
  {
    title: "无人车运输与联动平台方案",
    summary: "针对运输与联合作业需求，构建平台化无人车底座与场景适配能力，便于后续规模化扩展。",
    tag: "无人车平台",
    image: "/home/simg3.jpg",
    href: "/projects"
  }
];
const companyAdvantages = [
  "围绕农业科技与无人化装备场景做一体化研发与交付，不做脱离现场的纸面方案。",
  "覆盖无人机核心产品、无人车平台与配套服务，便于客户统一推进设备与业务协同。",
  "注重场景适配与持续服务，帮助客户从试点验证逐步过渡到稳定运行。",
  "保留开放合作空间，可根据项目阶段提供咨询、研发、集成与交付支持。"
];
const aboutPageContent = {
  hero: {
    title: "关于补全星科技",
    subTitle: "重庆补全星科技有限公司立足农业一线，围绕农业社会化服务、无人机核心产品、无人车平台与场景化交付，持续把无人化装备能力转化为可执行、可复制的业务成果。",
    btnExists: true,
    btnTitle: "联系合作",
    btnURL: "/contact"
  },
  overview: {
    title: "把研发能力放进真实农业场景",
    subTitle: "补全星科技不是单一设备供应方，而是面向农业现场提供研发、适配、实施与持续支持的综合服务团队。我们关注作业流程是否顺畅、设备能力是否稳定、交付结果是否真正服务于客户业务，而不是停留在概念展示与参数堆叠。"
  },
  mission: {
    title: "核心使命",
    subTitle: "让农业社会化服务与无人化装备形成稳定协同，让无人机、无人车和场景系统真正落地到日常作业、巡检采集与持续运营之中。",
    highlights: [
      "围绕农业社会化服务组织方式，梳理作业目标、流程与交付标准。",
      "持续打磨无人机核心产品与任务载荷，提升复杂环境下的可靠执行能力。",
      "以模块化无人车平台衔接运输、巡检、补给与多装备联动。",
      "通过场景化部署、培训与运维支持，帮助客户从试点验证走向稳定运行。"
    ],
    videoUrl: "/videos/company-intro.mp4",
    ctaTitle: "咨询合作方案",
    ctaUrl: "/contact"
  },
  strengths: {
    title: "业务结构与核心优势",
    subTitle: "围绕农业无人化项目落地，补全星科技形成了从产品到交付、从试点到复制的连续能力链路。",
    benefits: [
      "农业社会化服务导向：从作业组织、任务调度到执行回传，帮助客户提升现场服务效率。",
      "无人机核心产品能力：聚焦飞行平台、控制模块与任务载荷集成，支撑稳定作业与数据采集。",
      "无人车平台研发能力：以模块化底盘和协同接口承接运输、巡检与空地联动需求。",
      "场景化交付方法：根据地形、作物、园区流程与运营目标完成方案适配、部署培训和运维支持。",
      "一体化合作方式：兼顾咨询、研发、集成与交付，便于项目分阶段推进与持续扩展。"
    ],
    src: "/home/aerial-view.avif",
    alt: "农业场景与无人化装备协同示意图"
  },
  stats: {
    title: "关于我们的四个关键词",
    subTitle: "我们始终围绕真实场景开展工作，用更务实的方式推进农业无人化项目从构想到执行。",
    mainStatTitle: "4个",
    mainStatSubTitle: "关键方向共同支撑补全星科技的产品与服务体系",
    primaryCtaTitle: "联系补全星科技",
    secondaryCtaTitle: "查看产品与服务",
    items: [
      {
        stat: "农业服务",
        description: "围绕农业社会化服务组织作业与交付流程"
      },
      {
        stat: "无人机产品",
        description: "聚焦核心产品研发与复杂任务执行能力"
      },
      {
        stat: "无人车平台",
        description: "承接地面运输、巡检与多装备协同基础"
      },
      {
        stat: "场景交付",
        description: "推动部署培训、运维支持与规模化复制"
      }
    ]
  },
  footer: {
    copyright: "聚焦农业社会化服务与无人化装备场景应用。",
    ctaTitle: "联系补全星科技，推进场景合作"
  }
};
const homeCaseSection = {
  title: "典型落地场景",
  subTitle: "围绕农业服务、低空作业与平台化装备交付，持续沉淀可复制的应用方向。",
  ctaText: "查看案例专区",
  ctaUrl: "/projects"
};
const homeClosingCta = {
  title: "让需求更快进入真实场景",
  subTitle: "如果你正在评估农业社会化服务、无人机核心产品或无人车平台合作，欢迎把场景和目标告诉我们。",
  buttonText: "提交咨询需求",
  url: "/contact"
};
const inquiryTypes = [
  "农业社会化服务",
  "无人机核心产品",
  "无人车平台",
  "场景化定制合作"
];
const contactHighlights = [
  {
    heading: "需求沟通",
    content: "欢迎通过表单提交应用场景、目标与合作方向，我们会尽快回访。",
    isLinkVisible: false,
    linkTitle: void 0,
    linkURL: void 0,
    isArrowVisible: void 0
  },
  {
    heading: "查看服务方向",
    content: "如果你还在梳理需求，可以先了解我们的核心业务与适配场景。",
    isLinkVisible: true,
    linkTitle: "查看产品与服务",
    linkURL: "/services",
    isArrowVisible: true
  },
  {
    heading: "了解典型案例",
    content: "通过客户案例了解补全星科技在农业与无人化装备方向的落地思路。",
    isLinkVisible: true,
    linkTitle: "查看客户案例",
    linkURL: "/projects",
    isArrowVisible: true
  },
  {
    heading: "进一步了解公司",
    content: "如果你想先了解公司定位、能力边界与合作方式，也可以查看关于我们页面。",
    isLinkVisible: true,
    linkTitle: "了解我们",
    linkURL: "/about",
    isArrowVisible: true
  }
];
const homeAdvantageVisual = {
  src: "/home/aerial-view.avif",
  alt: "农业与园区场景航拍示意图"
};
const servicesPageContent = {
  hero: {
    title: "面向农业现场的产品与服务体系",
    subTitle: "补全星科技围绕农业社会化服务、无人机核心产品研发、无人车平台研发与场景化交付，提供从需求梳理、技术适配到持续运营支持的一体化能力。",
    btnExists: true,
    btnTitle: "咨询合作方案",
    btnURL: "/contact"
  },
  sections: [
    {
      type: "right",
      title: "农业社会化服务贯穿作业全流程",
      subTitle: "我们结合地块条件、作物周期与组织方式，提供植保飞防、巡田巡检、任务调度与作业执行支持，帮助合作方更快形成标准化、可复制的农业社会化服务能力。",
      single: false,
      imgOneAlt: "农业地块航拍与作业规划示意图",
      imgTwoAlt: "团队进行作业支持与数据研判示意图",
      btnExists: true,
      btnTitle: "了解服务流程",
      btnURL: "/contact"
    },
    {
      type: "left",
      title: "无人机核心产品研发聚焦可靠执行",
      subTitle: "围绕飞行控制、任务载荷、结构集成与复杂环境适配，我们持续打磨无人机核心产品能力，让设备在农业作业、巡检采集与多任务协同中保持稳定、高效与可维护。",
      imgAlt: "无人机核心部件与产品研发过程示意图",
      btnExists: true,
      btnTitle: "咨询产品合作",
      btnURL: "/contact"
    },
    {
      type: "right",
      title: "无人车平台研发支撑持续化联动作业",
      subTitle: "我们以模块化平台思路推进无人车底盘、控制系统与协同接口研发，支持运输、巡检、补给与多装备联动，为农业园区和复合场景提供更稳固的地面无人化基础。",
      single: false,
      imgOneAlt: "无人车平台结构与协同调度示意图",
      imgTwoAlt: "地面无人装备在园区作业中的应用示意图"
    },
    {
      type: "left",
      title: "场景化交付让装备能力真正落地",
      subTitle: "从前期需求梳理、方案设计到部署培训与持续运维，补全星科技坚持按真实场景进行适配与验证，帮助客户把技术能力转化为可执行、可迭代、可扩展的业务成果。",
      imgAlt: "现场部署与作业执行成果对比示意图",
      btnExists: true,
      btnTitle: "查看解决方案",
      btnURL: "/solutions"
    }
  ],
  stats: {
    title: "从研发到交付的一体化能力",
    subTitle: "我们的服务不是单一设备售卖，而是围绕农业现场构建研发、验证、实施与持续支持并行推进的交付链路。",
    mainStatTitle: "4大",
    mainStatSubTitle: "核心业务方向协同支撑农业无人化项目落地",
    items: [
      {
        stat: "需求调研",
        description: "围绕作物、地形与任务目标进行场景建模"
      },
      {
        stat: "研发适配",
        description: "按设备形态与作业流程推进产品能力整合"
      },
      {
        stat: "部署交付",
        description: "覆盖培训、试运行与执行标准落地"
      },
      {
        stat: "持续运营",
        description: "支持升级优化与多场景复制扩展"
      }
    ]
  }
};
const solutionsPageContent = {
  hero: {
    title: "围绕真实场景打造解决方案",
    subTitle: "补全星科技从农业服务组织、低空作业能力到地面平台协同出发，为客户提供可落地、可复制、可持续迭代的场景化解决方案。",
    btnExists: true,
    btnTitle: "发起方案咨询",
    btnURL: "/contact"
  },
  sections: [
    {
      type: "right",
      title: "农业社会化服务解决方案",
      subTitle: "针对大田、果园、丘陵等不同作业环境，我们提供涵盖任务规划、装备组织、作业执行与结果回传的服务方案，帮助客户建立更高效率的农业社会化服务体系。",
      single: false,
      imgOneAlt: "农业社会化服务场景航拍示意图",
      imgTwoAlt: "服务团队在现场协同执行任务示意图",
      btnExists: true,
      btnTitle: "咨询合作方式",
      btnURL: "/contact"
    },
    {
      type: "left",
      title: "低空作业与无人机产品应用方案",
      subTitle: "依托无人机核心产品研发能力，我们可面向植保、巡检、测绘、数据采集等任务提供载荷组合、飞行执行与业务流程适配方案，提升低空场景应用的稳定性与实用性。",
      imgAlt: "无人机在低空作业场景中的应用示意图"
    },
    {
      type: "right",
      title: "无人车平台联动方案",
      subTitle: "通过模块化无人车平台与无人机、传感器和任务系统协同，我们帮助客户构建运输、巡检、补给与联合作业能力，让地面平台成为场景化无人体系的重要支点。",
      single: false,
      imgOneAlt: "无人车平台结构与部署示意图",
      imgTwoAlt: "无人车在复合场景执行运输与巡检示意图"
    },
    {
      type: "left",
      title: "定制化场景方案与持续运营支持",
      subTitle: "面向试点验证、规模复制与长期运营阶段，我们提供从场景诊断、路线设计到运维优化的持续支持，确保方案不仅能够启动，更能持续产生业务价值。",
      imgAlt: "项目阶段推进与持续运营支持示意图",
      btnExists: true,
      btnTitle: "联系补全星科技",
      btnURL: "/contact"
    }
  ],
  stats: {
    title: "解决方案聚焦四类落地结果",
    subTitle: "我们更关注方案是否真正服务于现场执行、效率提升与后续复制，而不是停留在概念展示层面。",
    mainStatTitle: "1套",
    mainStatSubTitle: "从需求诊断到持续运营的闭环交付方法",
    items: [
      {
        stat: "作业效率",
        description: "提升任务组织与执行协同水平"
      },
      {
        stat: "产品适配",
        description: "让装备配置与场景目标保持一致"
      },
      {
        stat: "协同联动",
        description: "支撑空地一体与多节点任务协作"
      },
      {
        stat: "复制扩展",
        description: "为更多区域与项目快速复用提供基础"
      }
    ]
  }
};

const SITE = {
  title: COMPANY_INFO.name,
  tagline: COMPANY_INFO.tagline,
  description: COMPANY_INFO.description,
  url: "https://bq-star.com",
  author: COMPANY_INFO.name
};
const SEO = {
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
      inLanguage: "zh-CN"
    }
  }
};
const OG = {
  title: `${SITE.title}｜${SITE.tagline}`,
  description: "重庆补全星科技有限公司聚焦农业社会化服务、无人机核心产品研发、无人车平台研发，以及智慧无人化装备研发与社会化服务。",
  image: ogImageSrc
};

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const faviconSvgSrc = createSvgComponent({"meta":{"src":"/_astro/icon.B7KHh505.svg","width":512,"height":512,"format":"svg"},"attributes":{"width":"512","height":"512","viewBox":"0 0 512 512","fill":"none"},"children":"\n<rect x=\"-0.00585938\" y=\"-0.000488281\" width=\"512\" height=\"512\" rx=\"100\" fill=\"#262626\" />\n<rect x=\"20.9297\" y=\"109.01\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 20.9297 109.01)\" fill=\"#FACC15\" />\n<rect x=\"100.982\" y=\"183.969\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 100.982 183.969)\" fill=\"#FACC15\" />\n<rect x=\"181.491\" y=\"259.354\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 181.491 259.354)\" fill=\"#FACC15\" />\n<rect x=\"261.998\" y=\"334.739\" width=\"62.4311\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 261.998 334.739)\" fill=\"#FACC15\" />\n<path d=\"M442.513 435.922C445.843 442.651 438.906 449.847 432.059 446.766L355.339 412.235C350.291 409.962 349.021 403.373 352.863 399.387L392.264 358.515C396.106 354.53 402.737 355.557 405.193 360.519L442.513 435.922Z\" fill=\"#FACC15\" />\n"});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://bq-star.com/");
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Meta;
  const defaultProps = {
    meta: SITE.description,
    structuredData: SEO.structuredData,
    customDescription: null,
    customOgTitle: null
  };
  const {
    meta = defaultProps.meta,
    structuredData = defaultProps.structuredData,
    customDescription = defaultProps.customDescription,
    customOgTitle = defaultProps.customOgTitle
  } = Astro2.props;
  const description = customDescription || meta;
  const ogTitle = customOgTitle || OG.title;
  const ogDescription = customDescription || OG.description;
  const siteUrl = Astro2.site?.toString() ?? SITE.url;
  const author = SITE.author;
  const canonical = Astro2.url.href;
  const socialImageRes = await getImage({
    src: OG.image,
    width: 1200,
    height: 600
  });
  const socialImage = Astro2.url.origin + socialImageRes.src;
  const faviconSvg = await getImage({
    src: faviconSvgSrc,
    format: "svg"
  });
  const appleTouchIcon = await getImage({
    src: icon,
    width: 180,
    height: 180,
    format: "png"
  });
  return renderTemplate`${structuredData && renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}<meta charset="utf-8"><meta${addAttribute(description, "content")} name="description"><meta name="web_author"${addAttribute(author, "content")}><meta name="language" content="zh-CN"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="canonical"${addAttribute(canonical, "href")}><meta property="og:locale" content="zh_CN"><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta content="1200" property="og:image:width"><meta content="600" property="og:image:height"><meta content="image/png" property="og:image:type"><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(siteUrl, "content")}><meta property="twitter:url"${addAttribute(canonical, "content")}><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(ogDescription, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><link rel="manifest" href="/manifest.json"><link rel="sitemap" href="/sitemap-index.xml"><link href="/favicon.ico" rel="icon" sizes="any" type="image/x-icon"><link${addAttribute(faviconSvg.src, "href")} rel="icon" type="image/svg+xml" sizes="any"><meta name="mobile-web-app-capable" content="yes"><link${addAttribute(appleTouchIcon.src, "href")} rel="apple-touch-icon"><link${addAttribute(appleTouchIcon.src, "href")} rel="shortcut icon"><meta name="theme-color" content="#181c31">`;
}, "/data/work/web/mycompanysite/src/components/Meta.astro", void 0);

const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dark Theme Toggle Button --><!-- This button is shown when the light theme is active, and when clicked, it switches the theme to dark -->${maybeRenderHead()}<button type="button" aria-label="Dark Theme Toggle" class="hs-dark-mode group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 hs-dark-mode-active:hidden dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-orange-300 dark:focus:outline-hidden" data-hs-theme-click-value="dark"> <!-- The SVG displayed shows an abstract icon that represents the moon (dark theme) --> <svg class="h-4 w-4 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> <!-- Light Theme Toggle Button --> <!-- This button is hidden by default and only appears when the dark theme is active, when clicked, it switches to the light theme --> </button> <button type="button" aria-label="Light Theme Toggle" class="hs-dark-mode group hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:text-orange-400 hs-dark-mode-active:flex dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-hidden" data-hs-theme-click-value="light"> <!-- The SVG displayed shows a standard sun icon that stands for the light theme --> <svg class="h-4 w-4 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 8a2 2 0 1 0 4 4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> </button>`;
}, "/data/work/web/mycompanysite/src/components/ThemeIcon.astro", void 0);

const $$Astro$2 = createAstro("https://bq-star.com/");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { url, name } = Astro2.props;
  return renderTemplate`<!--
Re-usable link component for navigation bar. Highlights the active link
by comparing the current URL with the href of each link.
We assign an ID matching the URL for easy reference in our script.
If URL is '/' (home page), assign ID as 'home' 
-->${maybeRenderHead()}<a${addAttribute(url === "/" ? "home" : url.replace("/", ""), "id")}${addAttribute(url, "href")} data-astro-prefetch class="rounded-lg text-base font-medium text-neutral-600 outline-hidden ring-zinc-500 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-hidden md:py-3 md:text-sm 2xl:text-base"> ${name} </a> ${renderScript($$result, "/data/work/web/mycompanysite/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "/data/work/web/mycompanysite/src/components/ui/links/NavLink.astro", void 0);

const navBarLinks = PRIMARY_NAVIGATION;
const footerLinks = FOOTER_NAVIGATION;
const navigation = {
  navBarLinks,
  footerLinks};

const brandIcon$1 = new Proxy({"src":"/_astro/logo.70zpgqEZ.png","width":588,"height":550,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/data/work/web/mycompanysite/src/images/logo.png";
							}
							
							return target[name];
						}
					});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const strings = navigation;
  const homeUrl = COMPANY_LINKS.home;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex flex-wrap text-sm md:flex-nowrap md:justify-start w-full mx-auto max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-8"> <!-- Navigation container --> <!-- <nav\n    class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"\n    aria-label="Global"\n  > --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-less-pure-dark/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between md:my-3 lg:my-3 xl:my-3"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"', ' aria-label="Brand"> <!-- <BrandLogo class="h-auto w-24" /> --> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-hidden" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', " <a", ' class="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-neutral-50 transition duration-300 hover:bg-neutral-700 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-zinc-500 dark:bg-primary-blue dark:text-neutral-50 dark:hover:bg-primary-blue/80 dark:focus-visible:ring-zinc-200"> ', ' </a> <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = `*{transition: unset !important;}`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script>'], ["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex flex-wrap text-sm md:flex-nowrap md:justify-start w-full mx-auto max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-8"> <!-- Navigation container --> <!-- <nav\n    class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"\n    aria-label="Global"\n  > --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-less-pure-dark/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between md:my-3 lg:my-3 xl:my-3"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"', ' aria-label="Brand"> <!-- <BrandLogo class="h-auto w-24" /> --> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-hidden" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', " <a", ' class="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-neutral-50 transition duration-300 hover:bg-neutral-700 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-zinc-500 dark:bg-primary-blue dark:text-neutral-50 dark:hover:bg-primary-blue/80 dark:focus-visible:ring-zinc-200"> ', ' </a> <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = \\`*{transition: unset !important;}\\`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(homeUrl, "href"), renderComponent($$result, "Image", $$Image, { "src": brandIcon$1, "alt": `${COMPANY_INFO.shortName} Logo`, "class": "h-auto w-13", "loading": "lazy" }), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), strings.navBarLinks.map((link) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "url": link.url, "name": link.name })}`), addAttribute(COMPANY_LINKS.contact, "href"), COMPANY_INFO.ctaLabel, renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}));
}, "/data/work/web/mycompanysite/src/components/sections/navbar&footer/Navbar.astro", void 0);

const brandIcon = new Proxy({"src":"/_astro/logo_trans.BLxyBLoJ.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/data/work/web/mycompanysite/src/images/logo_trans.png";
							}
							
							return target[name];
						}
					});

const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  const strings = navigation;
  const brandDescription = COMPANY_INFO.footerNote;
  const contactIntro = COMPANY_INFO.contactIntro;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-neutral-300 dark:bg-neutral-900"> <div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-(--breakpoint-2xl)"> <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"> <div class="col-span-full lg:col-span-2"> ${renderComponent($$result, "Image", $$Image, { "src": brandIcon, "alt": `${COMPANY_INFO.shortName} Logo`, "class": "mt-[-2rem] h-auto w-40 invert" })} <div class="mt-2 max-w-md space-y-3"> <h3 class="text-lg font-bold text-neutral-800 dark:text-neutral-100"> ${COMPANY_INFO.name} </h3> <p class="text-sm leading-6 text-neutral-600 dark:text-neutral-400"> ${brandDescription} </p> </div> </div> ${strings.footerLinks.map((section) => renderTemplate`<div class="col-span-1"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${section.section} </h3> <ul class="mt-3 grid space-y-3"> ${section.links.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-hidden"> ${link.name} </a> </li>`)} </ul> </div>`)} <div class="col-span-2"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200">
联系我们
</h3> <div class="mt-3 space-y-4"> <p class="text-sm leading-6 text-neutral-600 dark:text-neutral-400"> ${contactIntro} </p> <a${addAttribute(COMPANY_LINKS.contact, "href")} class="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-neutral-50 transition duration-300 hover:bg-neutral-700 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-zinc-500 dark:bg-primary-blue dark:hover:bg-primary-blue/80 dark:focus-visible:ring-zinc-200"> ${COMPANY_INFO.ctaLabel} </a> </div> </div> </div> <div class="mt-9 grid gap-y-2 border-t border-neutral-400/40 pt-6 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0 dark:border-neutral-700/40"> <div class="flex items-center justify-between"> <p class="text-sm text-neutral-600 dark:text-neutral-400">
© ${currentYear} ${COMPANY_INFO.name}。${aboutPageContent.footer.copyright} </p> </div> <div> <a${addAttribute(COMPANY_LINKS.contact, "href")} class="rounded-lg text-sm font-medium text-neutral-700 underline underline-offset-2 outline-hidden ring-zinc-500 transition duration-300 hover:text-neutral-900 hover:decoration-dashed focus-visible:ring-3 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:text-neutral-100"> ${aboutPageContent.footer.ctaTitle} </a> </div> </div> </div> </footer>`;
}, "/data/work/web/mycompanysite/src/components/sections/navbar&footer/FooterSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://bq-star.com/");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = SITE.title,
    meta,
    structuredData,
    lang = "zh-CN",
    customDescription = null,
    customOgTitle = null
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16" data-astro-cid-ouamjn2i> <head>', "<title>", '</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem("hs_theme") === "dark" ||\n        (!("hs_theme" in localStorage) &&\n          window.matchMedia("(prefers-color-scheme: dark)").matches)\n      ) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script>', "", '</head> <!-- <body\n    class="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 flex flex-col min-h-screen"\n  > --> <!-- <body\n    class="bg-neutral-200 selection:bg-primary-blue/80 selection:text-neutral-300 dark:bg-background-dark flex flex-col min-h-screen"\n  > --> <body class="flex flex-col min-h-screen" style="background: radial-gradient(ellipse at top, #26282b 0%, #1d1e22 60%, #16171b 100%); background-attachment: fixed; background-size: 100vw 100vh;" data-astro-cid-ouamjn2i>  <!-- <div class="w-full mx-auto max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-8 flex-grow"> --> <div class="w-full mx-auto max-w-full flex-grow" data-astro-cid-ouamjn2i> ', " <main data-astro-cid-ouamjn2i> ", " </main> </div> ", " ", "  </body> </html>"])), addAttribute(lang, "lang"), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "customDescription": customDescription, "customOgTitle": customOgTitle, "data-astro-cid-ouamjn2i": true }), title, renderScript($$result, "/data/work/web/mycompanysite/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-ouamjn2i": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "data-astro-cid-ouamjn2i": true }), renderScript($$result, "/data/work/web/mycompanysite/src/layouts/MainLayout.astro?astro&type=script&index=1&lang.ts"));
}, "/data/work/web/mycompanysite/src/layouts/MainLayout.astro", void 0);

const Icons = {
  groups: {
    paths: [
      {
        d: "m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723Zm-243-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-180Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17ZM480-600ZM0-240v-53q0-39.464 42-63.232T150.398-380q12.158 0 23.38.5T196-377.273q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960-293v53H780v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400-390 350-366q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-primary-blue",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  books: {
    paths: [
      {
        d: "M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-primary-blue",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  verified: {
    paths: [
      {
        d: "m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-primary-blue",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  frame: {
    paths: [
      {
        d: "M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-primary-blue",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  tools: {
    paths: [
      {
        d: "M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z"
      }
    ],
    class: "mt-2 h-6 w-6 shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-primary-blue md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  dashboard: {
    paths: [
      {
        d: "M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"
      }
    ],
    class: "mt-2 h-6 w-6 shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-primary-blue md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  house: {
    paths: [
      {
        d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
      }
    ],
    class: "h-6 w-6 shrink-0 text-neutral-700 hs-tab-active:text-orange-400 dark:text-neutral-300 dark:hs-tab-active:text-primary-blue md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowUp: {
    paths: [
      {
        d: "m5 12 7-7 7 7"
      },
      {
        d: "M12 19V5"
      }
    ],
    class: "h-5 w-5 shrink-0 text-orange-400 dark:text-primary-blue",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  checkCircle: {
    paths: [
      {
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM13.707 8.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      }
    ],
    class: "h-5 w-5 shrink-0",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  bookmark: {
    paths: [
      {
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        class: "fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 dark:group-hover:text-red-400"
      }
    ],
    class: "h-6 w-6 fill-none transition duration-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "size-4 shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  x: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "size-4 shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  linkedIn: {
    paths: [
      {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      }
    ],
    class: "size-4 shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  share: {
    paths: [
      {
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      }
    ],
    class: "h-4 w-4 group-hover:text-neutral-700",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  github: {
    paths: [
      {
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      }
    ],
    class: "w-4.5 h-4.5 transition shrink-0 text-neutral-700 duration-300 group-hover:-translate-y-1",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  arrowRightStatic: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "size-4 shrink-0",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      }
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6"
      }
    ],
    class: "block h-5 w-5 shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6"
      }
    ],
    class: "hidden h-5 w-5 shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  xFooter: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Twitter"
  },
  facebookFooter: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook"
  },
  githubFooter: {
    paths: [
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "GitHub"
  },
  googleFooter: {
    paths: [
      {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Google"
  },
  slackFooter: {
    paths: [
      {
        d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Slack"
  },
  quotation: {
    paths: [
      {
        d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
      }
    ],
    class: "absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-neutral-300 dark:text-neutral-700",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  question: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chatBubble: {
    paths: [
      {
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  envelopeOpen: {
    paths: [
      {
        d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  earth: {
    paths: [
      {
        d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
      }
    ],
    class: "w-4 h-4 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  guides: {
    paths: [
      {
        d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  puzzle: {
    paths: [
      {
        d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  rocket: {
    paths: [
      {
        d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  hammer: {
    paths: [
      {
        d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  sparks: {
    paths: [
      {
        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  community: {
    paths: [
      {
        d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chevronDown: {
    paths: [
      {
        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
      }
    ],
    class: "ms-2 size-4 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  }
};

const $$Astro = createAstro("https://bq-star.com/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name } = Astro2.props;
  let icon = Icons[name] || {};
  let paths = icon.paths || [];
  return renderTemplate`${icon ? renderTemplate`${maybeRenderHead()}<svg${addAttribute(icon.class, "class")}${addAttribute(icon.height, "height")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(icon.width, "width")}${addAttribute(icon.fill, "fill")}${addAttribute(icon.clipRule, "clip-rule")}${addAttribute(icon.fillRule, "fill-rule")}${addAttribute(icon.stroke, "stroke")}${addAttribute(icon.strokeWidth, "stroke-width")}${addAttribute(icon.strokeLinecap, "stroke-linecap")}${addAttribute(icon.strokeLinejoin, "stroke-linejoin")}><title>${icon.title}</title>${paths.map((path) => renderTemplate`<path${addAttribute(path.d, "d")}${addAttribute(path.class || "", "class")}></path>`)}</svg>` : "Icon not found"}`;
}, "/data/work/web/mycompanysite/src/components/ui/icons/Icon.astro", void 0);

export { $$Icon as $, COMPANY_LINKS as C, SITE as S, $$MainLayout as a, aboutPageContent as b, COMPANY_INFO as c, contactHighlights as d, solutionsPageContent as e, homeCaseHighlights as f, homePillars as g, homeCaseSection as h, inquiryTypes as i, homeSolutionTabs as j, homeAdvantageVisual as k, companyAdvantages as l, homeClosingCta as m, servicesPageContent as s };
