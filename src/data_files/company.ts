
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
  image: string;
}

export interface HomeSolutionTab {
  heading: string;
  content: string;
  svg: string;
  src: string;
  alt: string;
  first?: boolean;
  second?: boolean;
}

export interface HomeCaseHighlight {
  title: string;
  summary: string;
  tag: string;
  image: string;
  href: string;
}

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
  tagline: "智慧无人化装备研发与社会化服务提供商",
  description:
    "重庆补全星科技有限公司聚焦农业社会化服务、无人机核心产品研发、无人车平台研发，以及智慧无人化装备研发与社会化服务，持续推进农业科技与智能装备应用落地。",
  descriptionShort:
    "补全星科技专注农业科技、无人机核心产品、无人车平台与智慧无人化装备服务。",
  ctaLabel: "立即咨询",
  contactIntro:
    "欢迎联系我们，获取农业科技、无人机核心产品、无人车平台与智慧无人化装备相关咨询。",
  footerNote:
    "聚焦农业科技场景，提供无人机核心产品、无人车平台与智慧无人化装备研发及社会化服务。",
  hero: {
    tagline: "农业科技 × 无人化装备 × 场景交付",
    title: "让无人化装备真正走进农业现场",
    brandTitle: "补全星科技",
    subTitle:
      "围绕农业社会化服务、无人机核心产品、无人车平台与智慧无人化装备，提供从方案设计、产品研发到落地交付的一体化能力。",
    primaryText: "立即咨询",
    primaryUrl: "/contact",
    secondaryText: "查看客户案例",
    secondaryUrl: "/projects",
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
    section: "产品与服务",
    links: [
      { name: "农业社会化服务", url: "/services" },
      { name: "无人机核心产品研发", url: "/services#products" },
      { name: "无人车平台与场景方案", url: "/solutions" },
    ],
  },
  {
    section: "联系与合作",
    links: [
      { name: "立即咨询", url: "/contact" },
      { name: "客户案例", url: "/projects" },
      { name: "了解我们", url: "/about" },
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
    title: "农业社会化服务",
    summary: "围绕植保、巡检、作业组织与执行交付，提升农业场景服务效率。",
    image: "/home/aimage1.jpg",
  },
  {
    title: "无人机核心产品研发",
    summary: "面向复杂作业环境打磨核心硬件、控制模块与任务载荷集成能力。",
    image: "/home/aimage2.jpg",
  },
  {
    title: "无人车平台研发",
    summary: "构建模块化底盘与协同平台，为运输、巡检与联合作业提供基础能力。",
    image: "/home/aimage3.jpg",
  },
  {
    title: "智慧无人化装备交付",
    summary: "从方案适配、设备部署到运维服务，支撑真实业务场景持续运行。",
    image: "/home/aimage4.jpg",
  },
];

export const homeSolutionTabs: HomeSolutionTab[] = [
  {
    heading: "智慧农业作业协同",
    content:
      "面向大田、果园与丘陵等场景，整合作业流程、装备调度与交付服务，帮助客户更快完成无人化作业体系搭建。",
    svg: "tools",
    src: "/home/simg1.jpg",
    alt: "农业作业场景示意图",
    first: true,
  },
  {
    heading: "低空巡检与数据采集",
    content:
      "结合无人机载荷与飞行作业能力，为巡检、测绘与数据采集需求提供稳定可落地的场景解决方案。",
    svg: "dashboard",
    src: "/home/simg2.jpg",
    alt: "无人机巡检与数据采集示意图",
  },
  {
    heading: "无人车平台联动作业",
    content:
      "以模块化无人车平台为基础，支持运输、巡检与多装备联动，满足园区与农业场景的持续化无人作业需求。",
    svg: "house",
    src: "/home/simg3.jpg",
    alt: "无人车平台联动作业示意图",
  },
];

export const homeCaseHighlights: HomeCaseHighlight[] = [
  {
    title: "丘陵果园无人化植保方案",
    summary:
      "围绕地形复杂、作业半径大的人工作业痛点，提供飞防组织、设备适配与服务交付能力。",
    tag: "农业社会化服务",
    image: "/home/simg1.jpg",
    href: "/projects",
  },
  {
    title: "园区巡检与采集协同方案",
    summary:
      "通过无人机平台与任务载荷能力，支撑巡检、记录与多节点数据采集的高效执行。",
    tag: "无人机核心产品",
    image: "/home/simg2.jpg",
    href: "/projects",
  },
  {
    title: "无人车运输与联动平台方案",
    summary:
      "针对运输与联合作业需求，构建平台化无人车底座与场景适配能力，便于后续规模化扩展。",
    tag: "无人车平台",
    image: "/home/simg3.jpg",
    href: "/projects",
  },
];

export const companyAdvantages = [
  "围绕农业科技与无人化装备场景做一体化研发与交付，不做脱离现场的纸面方案。",
  "覆盖无人机核心产品、无人车平台与配套服务，便于客户统一推进设备与业务协同。",
  "注重场景适配与持续服务，帮助客户从试点验证逐步过渡到稳定运行。",
  "保留开放合作空间，可根据项目阶段提供咨询、研发、集成与交付支持。",
];

export const aboutPageContent = {
  hero: {
    title: "关于补全星科技",
    subTitle:
      "重庆补全星科技有限公司立足农业一线，围绕农业社会化服务、无人机核心产品、无人车平台与场景化交付，持续把无人化装备能力转化为可执行、可复制的业务成果。",
    btnExists: true,
    btnTitle: "联系合作",
    btnURL: "/contact",
  },
  overview: {
    title: "把研发能力放进真实农业场景",
    subTitle:
      "补全星科技不是单一设备供应方，而是面向农业现场提供研发、适配、实施与持续支持的综合服务团队。我们关注作业流程是否顺畅、设备能力是否稳定、交付结果是否真正服务于客户业务，而不是停留在概念展示与参数堆叠。",
  },
  mission: {
    title: "核心使命",
    subTitle:
      "让农业社会化服务与无人化装备形成稳定协同，让无人机、无人车和场景系统真正落地到日常作业、巡检采集与持续运营之中。",
    highlights: [
      "围绕农业社会化服务组织方式，梳理作业目标、流程与交付标准。",
      "持续打磨无人机核心产品与任务载荷，提升复杂环境下的可靠执行能力。",
      "以模块化无人车平台衔接运输、巡检、补给与多装备联动。",
      "通过场景化部署、培训与运维支持，帮助客户从试点验证走向稳定运行。",
    ],
    videoUrl: "/videos/company-intro.mp4",
    ctaTitle: "咨询合作方案",
    ctaUrl: "/contact",
  },
  strengths: {
    title: "业务结构与核心优势",
    subTitle:
      "围绕农业无人化项目落地，补全星科技形成了从产品到交付、从试点到复制的连续能力链路。",
    benefits: [
      "农业社会化服务导向：从作业组织、任务调度到执行回传，帮助客户提升现场服务效率。",
      "无人机核心产品能力：聚焦飞行平台、控制模块与任务载荷集成，支撑稳定作业与数据采集。",
      "无人车平台研发能力：以模块化底盘和协同接口承接运输、巡检与空地联动需求。",
      "场景化交付方法：根据地形、作物、园区流程与运营目标完成方案适配、部署培训和运维支持。",
      "一体化合作方式：兼顾咨询、研发、集成与交付，便于项目分阶段推进与持续扩展。",
    ],
    src: "/home/aerial-view.avif",
    alt: "农业场景与无人化装备协同示意图",
  },
  stats: {
    title: "关于我们的四个关键词",
    subTitle:
      "我们始终围绕真实场景开展工作，用更务实的方式推进农业无人化项目从构想到执行。",
    mainStatTitle: "4个",
    mainStatSubTitle: "关键方向共同支撑补全星科技的产品与服务体系",
    primaryCtaTitle: "联系补全星科技",
    secondaryCtaTitle: "查看产品与服务",
    items: [
      {
        stat: "农业服务",
        description: "围绕农业社会化服务组织作业与交付流程",
      },
      {
        stat: "无人机产品",
        description: "聚焦核心产品研发与复杂任务执行能力",
      },
      {
        stat: "无人车平台",
        description: "承接地面运输、巡检与多装备协同基础",
      },
      {
        stat: "场景交付",
        description: "推动部署培训、运维支持与规模化复制",
      },
    ] satisfies AboutStatsItem[],
  },
  footer: {
    copyright: "聚焦农业社会化服务与无人化装备场景应用。",
    ctaTitle: "联系补全星科技，推进场景合作",
  },
} as const;

export const homeCaseSection = {
  title: "典型落地场景",
  subTitle:
    "围绕农业服务、低空作业与平台化装备交付，持续沉淀可复制的应用方向。",
  ctaText: "查看案例专区",
  ctaUrl: "/projects",
} as const;

export const homeClosingCta = {
  title: "让需求更快进入真实场景",
  subTitle:
    "如果你正在评估农业社会化服务、无人机核心产品或无人车平台合作，欢迎把场景和目标告诉我们。",
  buttonText: "提交咨询需求",
  url: "/contact",
} as const;

export const inquiryTypes = [
  "农业社会化服务",
  "无人机核心产品",
  "无人车平台",
  "场景化定制合作",
] as const;

export const contactHighlights = [
  {
    heading: "需求沟通",
    content: "欢迎通过表单提交应用场景、目标与合作方向，我们会尽快回访。",
    isLinkVisible: false,
    linkTitle: undefined,
    linkURL: undefined,
    isArrowVisible: undefined,
  },
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
  src: "/home/aerial-view.avif",
  alt: "农业与园区场景航拍示意图",
} as const;

export const servicesPageContent = {
  hero: {
    title: "面向农业现场的产品与服务体系",
    subTitle:
      "补全星科技围绕农业社会化服务、无人机核心产品研发、无人车平台研发与场景化交付，提供从需求梳理、技术适配到持续运营支持的一体化能力。",
    btnExists: true,
    btnTitle: "咨询合作方案",
    btnURL: "/contact",
  },
  sections: [
    {
      type: "right",
      title: "农业社会化服务贯穿作业全流程",
      subTitle:
        "我们结合地块条件、作物周期与组织方式，提供植保飞防、巡田巡检、任务调度与作业执行支持，帮助合作方更快形成标准化、可复制的农业社会化服务能力。",
      single: false,
      imgOneAlt: "农业地块航拍与作业规划示意图",
      imgTwoAlt: "团队进行作业支持与数据研判示意图",
      btnExists: true,
      btnTitle: "了解服务流程",
      btnURL: "/contact",
    },
    {
      type: "left",
      title: "无人机核心产品研发聚焦可靠执行",
      subTitle:
        "围绕飞行控制、任务载荷、结构集成与复杂环境适配，我们持续打磨无人机核心产品能力，让设备在农业作业、巡检采集与多任务协同中保持稳定、高效与可维护。",
      imgAlt: "无人机核心部件与产品研发过程示意图",
      btnExists: true,
      btnTitle: "咨询产品合作",
      btnURL: "/contact",
    },
    {
      type: "right",
      title: "无人车平台研发支撑持续化联动作业",
      subTitle:
        "我们以模块化平台思路推进无人车底盘、控制系统与协同接口研发，支持运输、巡检、补给与多装备联动，为农业园区和复合场景提供更稳固的地面无人化基础。",
      single: false,
      imgOneAlt: "无人车平台结构与协同调度示意图",
      imgTwoAlt: "地面无人装备在园区作业中的应用示意图",
    },
    {
      type: "left",
      title: "场景化交付让装备能力真正落地",
      subTitle:
        "从前期需求梳理、方案设计到部署培训与持续运维，补全星科技坚持按真实场景进行适配与验证，帮助客户把技术能力转化为可执行、可迭代、可扩展的业务成果。",
      imgAlt: "现场部署与作业执行成果对比示意图",
      btnExists: true,
      btnTitle: "查看解决方案",
      btnURL: "/solutions",
    },
  ],
  stats: {
    title: "从研发到交付的一体化能力",
    subTitle:
      "我们的服务不是单一设备售卖，而是围绕农业现场构建研发、验证、实施与持续支持并行推进的交付链路。",
    mainStatTitle: "4大",
    mainStatSubTitle: "核心业务方向协同支撑农业无人化项目落地",
    items: [
      {
        stat: "需求调研",
        description: "围绕作物、地形与任务目标进行场景建模",
      },
      {
        stat: "研发适配",
        description: "按设备形态与作业流程推进产品能力整合",
      },
      {
        stat: "部署交付",
        description: "覆盖培训、试运行与执行标准落地",
      },
      {
        stat: "持续运营",
        description: "支持升级优化与多场景复制扩展",
      },
    ],
  },
} as const;

export const solutionsPageContent = {
  hero: {
    title: "围绕真实场景打造解决方案",
    subTitle:
      "补全星科技从农业服务组织、低空作业能力到地面平台协同出发，为客户提供可落地、可复制、可持续迭代的场景化解决方案。",
    btnExists: true,
    btnTitle: "发起方案咨询",
    btnURL: "/contact",
  },
  sections: [
    {
      type: "right",
      title: "农业社会化服务解决方案",
      subTitle:
        "针对大田、果园、丘陵等不同作业环境，我们提供涵盖任务规划、装备组织、作业执行与结果回传的服务方案，帮助客户建立更高效率的农业社会化服务体系。",
      single: false,
      imgOneAlt: "农业社会化服务场景航拍示意图",
      imgTwoAlt: "服务团队在现场协同执行任务示意图",
      btnExists: true,
      btnTitle: "咨询合作方式",
      btnURL: "/contact",
    },
    {
      type: "left",
      title: "低空作业与无人机产品应用方案",
      subTitle:
        "依托无人机核心产品研发能力，我们可面向植保、巡检、测绘、数据采集等任务提供载荷组合、飞行执行与业务流程适配方案，提升低空场景应用的稳定性与实用性。",
      imgAlt: "无人机在低空作业场景中的应用示意图",
    },
    {
      type: "right",
      title: "无人车平台联动方案",
      subTitle:
        "通过模块化无人车平台与无人机、传感器和任务系统协同，我们帮助客户构建运输、巡检、补给与联合作业能力，让地面平台成为场景化无人体系的重要支点。",
      single: false,
      imgOneAlt: "无人车平台结构与部署示意图",
      imgTwoAlt: "无人车在复合场景执行运输与巡检示意图",
    },
    {
      type: "left",
      title: "定制化场景方案与持续运营支持",
      subTitle:
        "面向试点验证、规模复制与长期运营阶段，我们提供从场景诊断、路线设计到运维优化的持续支持，确保方案不仅能够启动，更能持续产生业务价值。",
      imgAlt: "项目阶段推进与持续运营支持示意图",
      btnExists: true,
      btnTitle: "联系补全星科技",
      btnURL: "/contact",
    },
  ],
  stats: {
    title: "解决方案聚焦四类落地结果",
    subTitle:
      "我们更关注方案是否真正服务于现场执行、效率提升与后续复制，而不是停留在概念展示层面。",
    mainStatTitle: "1套",
    mainStatSubTitle: "从需求诊断到持续运营的闭环交付方法",
    items: [
      {
        stat: "作业效率",
        description: "提升任务组织与执行协同水平",
      },
      {
        stat: "产品适配",
        description: "让装备配置与场景目标保持一致",
      },
      {
        stat: "协同联动",
        description: "支撑空地一体与多节点任务协作",
      },
      {
        stat: "复制扩展",
        description: "为更多区域与项目快速复用提供基础",
      },
    ],
  },
} as const;
