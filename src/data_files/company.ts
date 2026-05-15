
export interface NavigationLink {
  name: string;
  url: string;
}

export interface NavigationSection {
  section: string;
  links: NavigationLink[];
}

export interface HomePillar {
  title: string;
  summary: string;
  image: any;
}

export interface HomeSolutionTab {
  heading: string;
  content: string;
  svg: string;
  src: any;
  alt: string;
  first?: boolean;
  second?: boolean;
}

export interface HomeCaseHighlight {
  title: string;
  summary: string;
  tag: string;
  image: any;
  href: string;
}

import sharedCompanyAerialView from "@/images/shared/shared-company-aerial-view.avif";
import homeAdvantageVisualImage from "@/images/shared/shared-company-intro-poster.jpeg";
import homePillars01 from "@/images/pages/home/home-pillars-01.jpeg";
import homePillars02 from "@/images/pages/home/home-pillars-02.png";
import homePillars03 from "@/images/pages/home/home-pillars-03.jpeg";
import homePillars04 from "@/images/pages/home/home-pillars-04.jpeg";
import homeSolutionTabs01 from "@/images/pages/home/home-solution-tabs-01.jpeg";
import homeSolutionTabs02 from "@/images/pages/home/home-solution-tabs-02.jpeg";
import homeSolutionTabs03 from "@/images/pages/home/home-solution-tabs-03.jpeg";
import homeCaseHighlights01 from "@/images/pages/home/home-case-highlights-01.jpeg";
import homeCaseHighlights02 from "@/images/pages/home/home-case-highlights-02.jpeg";
import homeCaseHighlights03 from "@/images/pages/home/home-case-highlights-03.jpeg";

export interface CompanyContentSection {
  title: string;
  subTitle: string;
  btnExists?: boolean;
  btnTitle?: string;
  btnURL?: string;
}

export interface CompanyRightSection extends CompanyContentSection {
  single?: boolean;
  imgOneAlt: string;
  imgTwoAlt?: string;
}

export interface CompanyLeftSection extends CompanyContentSection {
  imgAlt: string;
}

export interface AboutStatsItem {
  stat: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "重庆补全星科技有限公司",
  shortName: "补全星科技",
  tagline: "无人化装备零部件、通用底盘与方案服务提供商",
  description:
    "重庆补全星科技有限公司以无人化装备公司定位对外展开业务，重点提供无人化零件供应、部件供应、通用底盘供应与方案服务，并围绕丘陵山地农业、园区巡检、公共服务等场景推进装备能力落地。",
  descriptionShort:
    "补全星科技聚焦无人化零件、部件、通用底盘与场景方案服务。",
  ctaLabel: "咨询方案",
  contactIntro:
    "欢迎联系我们，沟通无人化零件供应、部件供应、通用底盘配套与场景方案服务需求。",
  footerNote:
    "以无人化装备底层能力为核心，提供零件、部件、通用底盘与场景方案服务。",
  hero: {
    tagline: "无人化装备 × 模块化平台 × 场景方案服务",
    title: "让无人化装备更快进入真实业务现场",
    brandTitle: "补全星科技",
    subTitle:
      "围绕无人化零件供应、核心部件供应、模块化通用底盘供应与方案服务，补全从能力拼装到场景落地的关键一环；农业是重点应用方向之一，但不是我们的唯一边界。",
    primaryText: "发起咨询",
    primaryUrl: "/contact",
    secondaryText: "查看解决方案",
    secondaryUrl: "/solutions",
  },
} as const;

export const PRIMARY_NAVIGATION: NavigationLink[] = [
  { name: "首页", url: "/" },
  { name: "产品与服务", url: "/services" },
  { name: "解决方案", url: "/solutions" },
  { name: "客户案例", url: "/projects" },
  { name: "关于我们", url: "/about" },
  { name: "联系我们", url: "/contact" },
];

export const FOOTER_NAVIGATION: NavigationSection[] = [
  {
    section: "栏目导航",
    links: PRIMARY_NAVIGATION,
  },
  {
    section: "主营业务",
    links: [
      { name: "无人化零件供应", url: "/services" },
      { name: "核心部件供应", url: "/services#products" },
      { name: "通用底盘与平台", url: "/solutions" },
    ],
  },
  {
    section: "合作入口",
    links: [
      { name: "方案咨询", url: "/contact" },
      { name: "场景案例", url: "/projects" },
      { name: "了解公司", url: "/about" },
    ],
  },
];

export const COMPANY_LINKS = {
  home: "/",
  services: "/services",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
} as const;

export const homePillars: HomePillar[] = [
  {
    title: "无人化零件供应",
    summary: "提供适配无人化装备系统集成所需的关键零件，帮助客户缩短从选型到装配的推进周期。",
    image: homePillars01,
  },
  {
    title: "核心部件供应",
    summary: "围绕动力、控制、执行与协同链路提供核心部件支撑，强化整机与平台的稳定性与可扩展性。",
    image: homePillars02,
  },
  {
    title: "模块化通用底盘",
    summary: "以通用底盘为基础承接运输、巡检、作业与二次开发需求，为多类无人化装备提供统一底座。",
    image: homePillars03,
  },
  {
    title: "方案服务",
    summary: "从需求梳理、部件组合到场景适配和交付验证，帮助客户把无人化能力真正导入业务现场。",
    image: homePillars04,
  },
];


export const homeSolutionTabs: HomeSolutionTab[] = [
  {
    heading: "通用底盘能力平台",
    content:
      "围绕运输、巡检、作业挂载与二次开发需求，构建可复用的通用底盘平台，让客户能够更快完成无人化装备系统集成。",
    svg: "tools",
    src: homeSolutionTabs01,
    alt: "丘陵山地农田中的无人化通用底盘平台场景图",
    first: true,
  },
  {
    heading: "零件与部件组合供应",
    content:
      "从关键零件到核心部件，帮助客户建立更清晰的装备搭建链路，降低定制化无人化项目中的采购与协同成本。",
    svg: "dashboard",
    src: homeSolutionTabs02,
    alt: "无人化装备核心控制部件与配套零件图",
  },
  {
    heading: "行业方案导入服务",
    content:
      "针对丘陵山地农业、园区巡检、公共服务等场景，结合底盘、部件与任务目标输出更可落地的方案服务。",
    svg: "house",
    src: homeSolutionTabs03,
    alt: "山地农业无人机喷洒作业场景图",
  },
];


export const homeCaseHighlights: HomeCaseHighlight[] = [
  {
    title: "丘陵山地作业装备组合方案",
    summary:
      "面向复杂地形与高通过性要求，组合底盘、执行部件与场景服务能力，支撑丘陵山地场景中的无人化作业验证。",
    tag: "通用底盘 + 方案服务",
    image: homeCaseHighlights01,
    href: "/projects",
  },
  {
    title: "园区巡检平台快速集成",
    summary:
      "围绕巡检、采集与移动执行需求，输出零件、部件与控制链路的组合方案，帮助项目更快进入交付阶段。",
    tag: "零件 + 部件供应",
    image: homeCaseHighlights02,
    href: "/projects",
  },
  {
    title: "多场景底盘适配与扩展",
    summary:
      "通过模块化底盘平台承接运输、巡逻、公共服务等不同任务，保留后续功能扩展与二次开发空间。",
    tag: "模块化底盘",
    image: homeCaseHighlights03,
    href: "/projects",
  },
];


export const companyAdvantages = [
  "以无人化装备底层能力切入，优先解决零件、部件、通用底盘与集成协同这些真正影响项目落地的问题。",
  "不是只卖单点设备，而是围绕部件组合、底盘平台与方案导入形成连续交付链路。",
  "农业、园区、巡检与公共服务都可以承接，但官网第一认知始终保持在无人化装备与平台能力上。",
  "可根据客户阶段提供从选型咨询、部件配套到场景验证与方案落地的分层合作方式。",
];

export const aboutPageContent = {
  hero: {
    title: "关于补全星科技",
    subTitle:
      "重庆补全星科技有限公司以无人化装备公司身份展开业务，围绕零件供应、部件供应、通用底盘供应与方案服务，帮助客户更快完成从底层能力拼装到场景落地的闭环。",
    btnExists: true,
    btnTitle: "联系合作",
    btnURL: "/contact",
  },
  overview: {
    title: "把无人化装备能力补全到可交付状态",
    subTitle:
      "补全星科技关注的不只是单一设备，而是无人化项目里真正决定能否落地的基础能力：零件是否适配、部件是否稳定、通用底盘是否可复用、方案是否能够进入真实业务现场。我们从重庆起步，面向西南复杂地形和多样场景积累经验，再逐步向更广范围复制。",
  },
  mission: {
    title: "核心使命",
    subTitle:
      "用科技补全生产的每一环，让无人化装备从底层能力、平台能力到方案能力形成可组合、可部署、可持续扩展的交付体系。",
    highlights: [
      "围绕无人化装备供应链提供更贴近项目落地的零件与部件支持。",
      "以模块化通用底盘承接运输、巡检、作业挂载与多类型任务扩展。",
      "在丘陵山地农业、园区巡检与公共服务等场景中沉淀更可执行的导入路径。",
      "通过方案服务把装备能力、场景约束与交付节奏真正衔接起来。",
    ],
    videoUrl: "/videos/company-intro-h264.mp4",
    ctaTitle: "咨询合作方案",
    ctaUrl: "/contact",
  },
  strengths: {
    title: "业务结构与核心优势",
    subTitle:
      "我们不是把自己定义成单一农业装备公司，而是把农业作为重点场景之一，从无人化装备底层能力切入，形成更稳定的交付结构。",
    benefits: [
      "零件与部件供应能力：帮助客户降低无人化装备搭建过程中的适配与协同成本。",
      "通用底盘平台能力：让运输、巡检、挂载与扩展开发建立在统一底座之上。",
      "场景化方案服务：把复杂需求拆解为可执行的选型、配置、验证和导入步骤。",
      "重庆起步、西南深耕：更熟悉丘陵山地与复杂业务环境下的真实约束。",
      "多行业延展空间：农业是重点方向，但平台能力同样适用于园区、巡检和公共服务。",
    ],
    src: sharedCompanyAerialView,
    alt: "无人化装备平台与场景协同示意图",
  },
  stats: {
    title: "关于我们的四个关键词",
    subTitle:
      "我们围绕更接近交付本质的四类能力组织业务，让客户第一眼就能理解补全星科技的价值落点。",
    mainStatTitle: "4类",
    mainStatSubTitle: "主营业务共同支撑无人化装备项目从拼装走向落地",
    primaryCtaTitle: "联系补全星科技",
    secondaryCtaTitle: "查看产品与服务",
    items: [
      {
        stat: "零件供应",
        description: "补足无人化系统搭建中的关键基础件",
      },
      {
        stat: "部件供应",
        description: "围绕动力、控制与执行链路形成稳定配套",
      },
      {
        stat: "通用底盘",
        description: "承接多场景任务并保留后续扩展能力",
      },
      {
        stat: "方案服务",
        description: "把装备能力真正导入业务现场与项目流程",
      },
    ] satisfies AboutStatsItem[],
  },
  footer: {
    copyright: "聚焦无人化装备底层能力与场景方案导入。",
    ctaTitle: "联系补全星科技，推进场景合作",
  },
} as const;

export const homeCaseSection = {
  title: "典型场景案例",
  subTitle:
    "围绕通用底盘、部件组合与方案服务，持续沉淀可复用的无人化装备落地方向。",
  ctaText: "查看案例专区",
  ctaUrl: "/projects",
} as const;

export const homeClosingCta = {
  title: "把无人化装备需求更快落到执行层",
  subTitle:
    "如果你正在寻找零件供应、部件供应、模块化通用底盘或行业方案服务，欢迎把场景和目标告诉我们。",
  buttonText: "提交咨询需求",
  url: "/contact",
} as const;

export const inquiryTypes = [
  "无人化零件供应",
  "核心部件供应",
  "通用底盘合作",
  "场景方案服务",
] as const;

export const contactHighlights = [
  {
    heading: "查看服务方向",
    content: "如果你还在梳理需求，可以先了解我们的核心业务与适配场景。",
    isLinkVisible: true,
    linkTitle: "查看产品与服务",
    linkURL: "/services",
    isArrowVisible: true,
  },
  {
    heading: "了解典型案例",
    content: "通过客户案例了解补全星科技在农业与无人化装备方向的落地思路。",
    isLinkVisible: true,
    linkTitle: "查看客户案例",
    linkURL: "/projects",
    isArrowVisible: true,
  },
  {
    heading: "进一步了解公司",
    content: "如果你想先了解公司定位、能力边界与合作方式，也可以查看关于我们页面。",
    isLinkVisible: true,
    linkTitle: "了解我们",
    linkURL: "/about",
    isArrowVisible: true,
  },
] as const;

export const homeAdvantageVisual = {
  src: homeAdvantageVisualImage,
  alt: "无人化装备平台与部件生态展示图",
} as const;

export const servicesPageContent = {
  hero: {
    title: "面向无人化装备项目的产品与服务体系",
    subTitle:
      "补全星科技围绕无人化零件供应、核心部件供应、模块化通用底盘与方案服务，提供从底层能力补齐到场景导入的一体化支持。",
    btnExists: true,
    btnTitle: "咨询合作方案",
    btnURL: "/contact",
  },
  sections: [
    {
      type: "right",
      title: "无人化零件供应帮助项目更快起步",
      subTitle:
        "面对无人化装备落地过程中的多样化搭建需求，我们提供更贴近应用场景的零件配套支持，帮助客户缩短从方案确认到首轮集成验证之间的距离。",
      single: false,
      imgOneAlt: "无人化装备零件选型与组合示意图",
      imgTwoAlt: "技术团队进行零件适配与方案沟通示意图",
      btnExists: true,
      btnTitle: "了解合作方式",
      btnURL: "/contact",
    },
    {
      type: "left",
      title: "核心部件供应强化整机稳定性",
      subTitle:
        "围绕动力、控制、执行、挂载等链路，我们提供核心部件供应与适配建议，让客户在关键能力环节获得更稳定的组合基础，而不是在后期不断返工。",
      imgAlt: "无人化装备核心部件供应示意图",
      btnExists: true,
      btnTitle: "咨询部件合作",
      btnURL: "/contact",
    },
    {
      type: "right",
      title: "模块化通用底盘支撑多场景延展",
      subTitle:
        "我们以通用底盘平台承接运输、巡检、挂载作业与二次开发需求，让不同类型的无人化装备拥有统一底座，也为后续扩展留出空间。",
      single: false,
      imgOneAlt: "模块化通用底盘结构示意图",
      imgTwoAlt: "通用底盘在多场景中适配使用示意图",
    },
    {
      type: "left",
      title: "方案服务把装备能力导入真实场景",
      subTitle:
        "从需求澄清、能力组合到场景导入和试运行验证，补全星科技通过方案服务帮助客户把零件、部件和底盘能力真正落进业务现场，避免停留在纸面层面。",
      imgAlt: "无人化装备方案服务与现场导入示意图",
      btnExists: true,
      btnTitle: "查看解决方案",
      btnURL: "/solutions",
    },
  ],
  stats: {
    title: "从底层能力到业务现场的一体化支撑",
    subTitle:
      "我们的服务重点不是单纯售卖某一台设备，而是围绕无人化装备项目的搭建逻辑与交付逻辑提供连续支持。",
    mainStatTitle: "4大",
    mainStatSubTitle: "主营业务协同支撑无人化装备项目落地",
    items: [
      {
        stat: "选型沟通",
        description: "围绕任务目标与应用边界明确所需能力组合",
      },
      {
        stat: "部件配套",
        description: "补足关键零件与核心部件的适配链路",
      },
      {
        stat: "平台导入",
        description: "以通用底盘承接多类型任务落地基础",
      },
      {
        stat: "场景验证",
        description: "通过方案服务推动首轮部署与持续优化",
      },
    ],
  },
} as const;

export const solutionsPageContent = {
  hero: {
    title: "围绕无人化装备导入打造解决方案",
    subTitle:
      "补全星科技从零件、部件、通用底盘到方案服务四个层面出发，帮助客户更快把无人化能力导入农业、园区巡检与公共服务等真实场景。",
    btnExists: true,
    btnTitle: "发起方案咨询",
    btnURL: "/contact",
  },
  sections: [
    {
      type: "right",
      title: "丘陵山地农业场景导入方案",
      subTitle:
        "针对丘陵山地农业对通过性、稳定性和作业组织的更高要求，我们通过部件组合、底盘适配与方案验证，帮助客户更稳地推进无人化能力落地。",
      single: false,
      imgOneAlt: "丘陵山地农业与无人化装备协同示意图",
      imgTwoAlt: "复杂地形下进行方案验证与作业组织示意图",
      btnExists: true,
      btnTitle: "咨询合作方式",
      btnURL: "/contact",
    },
    {
      type: "left",
      title: "规模化园区与巡检场景方案",
      subTitle:
        "围绕巡检、运输、移动执行与数据采集需求，我们通过通用底盘与核心部件能力构建更具扩展性的场景方案，降低多阶段建设中的重复投入。",
      imgAlt: "园区巡检与无人化执行平台示意图",
    },
    {
      type: "right",
      title: "公共服务与复合任务平台方案",
      subTitle:
        "当任务需要兼顾机动性、挂载能力与持续运行稳定性时，我们以模块化通用底盘为核心，结合所需部件与控制链路，输出更适合公共服务和复合任务的平台方案。",
      single: false,
      imgOneAlt: "公共服务无人化平台结构示意图",
      imgTwoAlt: "复合任务场景中的无人化底盘应用示意图",
    },
    {
      type: "left",
      title: "从需求诊断到交付验证的方案服务",
      subTitle:
        "补全星科技不仅提供部件和平台，更通过方案服务把业务目标、装备能力与部署节奏连起来，帮助项目更快完成首轮落地并持续优化。",
      imgAlt: "方案服务推进与场景交付流程示意图",
      btnExists: true,
      btnTitle: "联系补全星科技",
      btnURL: "/contact",
    },
  ],
  stats: {
    title: "解决方案聚焦四类落地结果",
    subTitle:
      "我们更关注方案是否能够降低集成门槛、缩短导入周期并支撑长期扩展，而不是只展示概念化能力。",
    mainStatTitle: "1套",
    mainStatSubTitle: "从底层配套到场景导入的闭环方案方法",
    items: [
      {
        stat: "能力补齐",
        description: "补足零件、部件与底盘环节的关键缺口",
      },
      {
        stat: "场景适配",
        description: "让平台能力与业务约束真正对齐",
      },
      {
        stat: "导入效率",
        description: "减少从方案到验证阶段的反复消耗",
      },
      {
        stat: "持续扩展",
        description: "为更多任务和区域复制预留空间",
      },
    ],
  },
} as const;
