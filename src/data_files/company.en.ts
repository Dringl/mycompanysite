import type {
  AboutStatsItem,
  CompanyLeftSection,
  CompanyRightSection,
  HomeCaseHighlight,
  HomePillar,
  HomeSolutionTab,
  NavigationLink,
  NavigationSection,
} from "./company";

import sharedCompanyAerialView from "@/images/shared/shared-company-aerial-view.avif";
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
import homeAdvantageVisualImage from "@/images/shared/shared-company-intro-poster.jpeg";

export const EN_COMPANY_INFO = {
  name: "Chongqing Buquanxing Technology Co., Ltd.",
  shortName: "Buquanxing Tech",
  tagline: "Unmanned equipment components, chassis, and solution services",
  description:
    "Buquanxing Technology positions itself as an unmanned equipment company, providing component supply, core systems, modular chassis, and scenario solution services for real-world deployment.",
  descriptionShort:
    "Buquanxing Tech focuses on unmanned equipment parts, systems, modular chassis, and solution services.",
  ctaLabel: "Contact Us",
  contactIntro:
    "Get in touch to discuss unmanned equipment parts supply, system integration support, modular chassis cooperation, and scenario solution services.",
  footerNote:
    "Centered on core unmanned equipment capabilities, we deliver parts, systems, modular chassis, and scenario solution services.",
  hero: {
    tagline: "Unmanned Equipment × Modular Platforms × Scenario Solutions",
    title:
      "Accelerate the adoption of unmanned equipment and unlock labor across every part of life and production",
    brandTitle: "Buquanxing Tech",
    subTitle:
      "We focus on unmanned equipment parts supply, core systems, modular chassis, and scenario solution services to connect R&D with deployment end to end. Products are not our final goal — liberating labor is.",
    primaryText: "Contact Us",
    primaryUrl: "/en/contact",
    secondaryText: "View Solutions",
    secondaryUrl: "/en/solutions",
  },
} as const;

export const EN_PRIMARY_NAVIGATION: NavigationLink[] = [
  { name: "Home", url: "/en" },
  { name: "Services", url: "/en/services" },
  { name: "Solutions", url: "/en/solutions" },
  { name: "Projects", url: "/en/projects" },
  { name: "About", url: "/en/about" },
];

export const EN_FOOTER_NAVIGATION: NavigationSection[] = [
  {
    section: "Navigation",
    links: EN_PRIMARY_NAVIGATION,
  },
  {
    section: "What We Deliver",
    links: [
      { name: "Equipment Parts", url: "/en/services#products" },
      { name: "Core Systems", url: "/en/services#products" },
      { name: "Modular Chassis", url: "/en/services#products" },
    ],
  },
  {
    section: "Explore",
    links: [
      { name: "Contact", url: "/en/contact" },
      { name: "Projects", url: "/en/projects" },
      { name: "About Us", url: "/en/about" },
    ],
  },
];

export const EN_HOME_PILLARS: HomePillar[] = [
  {
    title: "Unmanned Equipment Parts",
    summary:
      "Centered on power and control, we supply the key parts required for unmanned equipment system integration.",
    image: homePillars01,
  },
  {
    title: "Unmanned Equipment Systems",
    summary:
      "We provide three automation systems that can be extended through secondary development.",
    image: homePillars02,
  },
  {
    title: "Modular General-Purpose Chassis",
    summary:
      "We offer several standard chassis platforms that customers can build on for their own scenario solutions.",
    image: homePillars03,
  },
  {
    title: "Scenario Solutions",
    summary:
      "From requirement mapping and capability assembly to deployment validation and iterative optimization, we help customers land unmanned capabilities in real operations.",
    image: homePillars04,
  },
];

export const EN_HOME_SOLUTION_TABS: HomeSolutionTab[] = [
  {
    heading: "General-Purpose Chassis Capability Platform",
    content:
      "Built for transport, inspection, payload operations, and secondary development, our reusable chassis platform helps customers integrate unmanned equipment faster.",
    svg: "tools",
    src: homeSolutionTabs01,
    alt: "General-purpose unmanned chassis platform in a hillside agricultural field",
    first: true,
  },
  {
    heading: "Combined Supply of Parts and Core Systems",
    content:
      "From key parts to core systems, we help customers build a clearer equipment integration path and reduce procurement and coordination costs in customized unmanned projects.",
    svg: "dashboard",
    src: homeSolutionTabs02,
    alt: "Core control systems and supporting parts for unmanned equipment",
  },
  {
    heading: "Industry Solution Deployment Services",
    content:
      "For hillside agriculture, campus inspection, public services, and other scenarios, we combine chassis, systems, and mission goals into solutions that are easier to deploy.",
    svg: "house",
    src: homeSolutionTabs03,
    alt: "Agricultural unmanned operation scenario in mountainous terrain",
  },
];

export const EN_HOME_CASE_HIGHLIGHTS: HomeCaseHighlight[] = [
  {
    title: "Agriculture Scenario Solution",
    summary:
      "For hillside farms, scaled planting, and multi-step field operations, we work with customers to define requirements, combine chassis and control capabilities, validate workflows, and keep optimizing until unmanned equipment can operate in frontline agricultural production.",
    tag: "Agriculture",
    image: homeCaseHighlights01,
    href: "/en/projects",
  },
  {
    title: "Eldercare Scenario Solution",
    summary:
      "For eldercare institutions and community care environments, we combine mobile platforms with sensing and interaction capabilities to explore inspection, delivery, and assistance use cases, helping customers introduce unmanned services in a steady and practical way.",
    tag: "Eldercare",
    image: homeCaseHighlights02,
    href: "/en/projects",
  },
  {
    title: "Industrial Scenario Solution",
    summary:
      "For inspections, transport, and collaborative tasks in factories, parks, and warehousing environments, we build industrial unmanned solutions on modular chassis and core systems with both deployment efficiency and long-term expansion in mind.",
    tag: "Industrial",
    image: homeCaseHighlights03,
    href: "/en/projects",
  },
];

export const EN_HOME_FEATURES = [
  {
    heading: "Unmanned Equipment Parts",
    content: "Supply key parts that help unmanned platforms move from concept to system integration faster.",
    svg: "groups",
  },
  {
    heading: "Core Systems",
    content: "Build stable power, control, and execution chains for deployable unmanned equipment projects.",
    svg: "verified",
  },
  {
    heading: "Modular Chassis",
    content: "Use reusable chassis platforms as a shared base for transport, inspection, and mounted operations.",
    svg: "books",
  },
  {
    heading: "Solution Services",
    content: "Turn capability combinations into deliverable scenario workflows through deployment-oriented services.",
    svg: "frame",
  },
] as const;

export const EN_FAQS = {
  subTitle:
    "A quick set of frequently asked questions about consultation, delivery models, and collaboration rhythm.",
  faqs: [
    {
      question: "What does Buquanxing Tech mainly provide?",
      answer:
        "We focus on unmanned equipment parts supply, core systems, modular general-purpose chassis, and scenario solution services across agriculture, inspection, and public service directions.",
    },
    {
      question: "Do you support project-specific customization?",
      answer:
        "Yes. We first understand the scenario, goals, and constraints, then decide whether standard capability combinations, partial customization, or joint development is the best fit.",
    },
    {
      question: "What information should we prepare before reaching out?",
      answer:
        "It helps to share your application scenario, current pain points, target outcome, timeline, and contact details. Even if the information is incomplete, you can still start the conversation.",
    },
    {
      question: "What is the typical collaboration process?",
      answer:
        "We usually begin with requirement alignment and scenario assessment, then move into solution suggestions, capability matching, implementation planning, and delivery coordination.",
    },
    {
      question: "Can we start with a small pilot first?",
      answer:
        "Yes. For projects still in validation, a smaller pilot is a practical way to confirm scenario fit before scaling to a broader deployment.",
    },
  ],
} as const;

export const EN_COMPANY_ADVANTAGES = [
  "Start from foundational unmanned equipment capability and solve the parts, systems, chassis, and integration issues that actually determine whether a project can ship.",
  "Go beyond selling a single machine by forming a continuous delivery chain around components, chassis platforms, and deployment-oriented solution services.",
  "Keep the website's first impression centered on unmanned equipment and platform capability, while still serving agriculture, campuses, inspection, and public services.",
  "Support layered collaboration, from selection and component matching to scenario validation and delivery rollout, based on each customer's current stage.",
] as const;

export const EN_ABOUT_PAGE_CONTENT = {
  hero: {
    title: "About Buquanxing Tech",
    subTitle:
      "Buquanxing Technology operates as an unmanned equipment company, combining parts supply, system supply, modular chassis, and scenario services to help customers move from capability assembly to real deployment.",
    btnExists: true,
    btnTitle: "Talk to Us",
    btnURL: "/en/contact",
  },
  overview: {
    title: "Complete unmanned equipment capabilities until they are deployable",
    subTitle:
      "We care not only about a single machine, but about the foundational capabilities that determine whether an unmanned project can actually land: compatible parts, stable systems, reusable chassis, and solutions that work in real operations.",
  },
  mission: {
    title: "Core Mission",
    subTitle:
      "Use technology to complete every link of production, so unmanned equipment can be combined, deployed, and sustainably expanded from foundational capabilities to platform and solution capabilities.",
    highlights: [
      "Provide parts and systems support that stays close to real project deployment.",
      "Use modular chassis to support transport, inspection, mounted operations, and task expansion.",
      "Refine practical deployment paths across agriculture, inspection, public service, and other scenarios.",
      "Connect equipment capability, scenario constraints, and delivery rhythm through solution services.",
    ],
    videoUrl: "/videos/company-intro-h264.mp4",
    ctaTitle: "Discuss Cooperation",
    ctaUrl: "/en/contact",
  },
  strengths: {
    title: "Business Structure and Core Strengths",
    subTitle:
      "Rather than defining ourselves as only an agricultural equipment company, we treat agriculture as one key scenario and build a more stable delivery structure from foundational unmanned equipment capabilities outward.",
    benefits: [
      "Parts and systems supply: reduce adaptation and coordination costs during unmanned equipment integration.",
      "General-purpose chassis platform: create a shared base for transport, inspection, payloads, and expansion development.",
      "Scenario solution services: turn complex needs into executable selection, configuration, validation, and deployment steps.",
      "Chongqing roots, Southwest experience: stronger familiarity with hilly terrain and demanding operating environments.",
      "Cross-industry extension: agriculture is a focus, but the platform also serves campuses, inspection, and public services.",
    ],
    src: sharedCompanyAerialView,
    alt: "Illustration of unmanned equipment platforms working with real scenarios",
  },
  stats: {
    title: "Four Keywords That Define Us",
    subTitle:
      "We organize our business around four capability groups that let customers immediately understand where our value lands.",
    mainStatTitle: "4",
    mainStatSubTitle:
      "Core business areas that together support unmanned equipment projects from assembly to deployment",
    primaryCtaTitle: "Contact Buquanxing Tech",
    secondaryCtaTitle: "View Products & Services",
    items: [
      {
        stat: "Parts Supply",
        description: "Cover the critical foundational pieces in unmanned system integration",
      },
      {
        stat: "System Supply",
        description: "Provide stable support around power, control, and execution chains",
      },
      {
        stat: "Modular Chassis",
        description: "Support multi-scenario missions while preserving expansion room",
      },
      {
        stat: "Solution Services",
        description: "Bring equipment capability into real operational workflows",
      },
    ] satisfies AboutStatsItem[],
  },
  footer: {
    copyright: "Focused on foundational unmanned equipment capabilities and scenario deployment.",
    ctaTitle: "Contact Buquanxing Tech to start a scenario collaboration",
  },
} as const;

export const EN_HOME_CASE_SECTION = {
  title: "Representative Scenario Projects",
  subTitle:
    "Continue accumulating reusable deployment directions around chassis platforms, component combinations, and scenario solution services.",
  ctaText: "Browse Projects",
  ctaUrl: "/en/projects",
} as const;

export const EN_HOME_CLOSING_CTA = {
  title: "Move unmanned equipment needs into execution faster",
  subTitle:
    "If you are looking for parts supply, core systems, modular chassis, or industry solution services, tell us about your scenario and goals.",
  buttonText: "Send an Inquiry",
  url: "/en/contact",
} as const;

export const EN_INQUIRY_TYPES = [
  "Unmanned equipment parts",
  "Core systems",
  "Modular chassis",
  "Scenario solutions",
] as const;

export const EN_SERVICES_PAGE_CONTENT = {
  hero: {
    title: "Products and Services for Unmanned Equipment Projects",
    subTitle:
      "Buquanxing Tech supports unmanned equipment deployment through parts supply, core systems, modular chassis, and solution services — from foundational capability completion to scenario adoption.",
    btnExists: true,
    btnTitle: "Discuss a Solution",
    btnURL: "/en/contact",
  },
  sections: [
    {
      type: "right",
      title: "Equipment parts supply helps projects start faster",
      subTitle:
        "We provide parts support aligned with real application scenarios so customers can shorten the distance between plan confirmation and first-round integration validation.",
      single: false,
      imgOneAlt: "Selection and combination of unmanned equipment parts",
      imgTwoAlt: "Technical team discussing parts adaptation and solution details",
      btnExists: true,
      btnTitle: "See Cooperation Options",
      btnURL: "/en/contact",
    } satisfies CompanyRightSection & { type: "right" },
    {
      type: "left",
      title: "Core systems strengthen whole-machine stability",
      subTitle:
        "Across power, control, execution, and payload chains, we provide core systems and adaptation guidance so customers can build on a more stable technical foundation instead of reworking late in the project.",
      imgAlt: "Core systems supply for unmanned equipment",
      btnExists: true,
      btnTitle: "Talk About System Supply",
      btnURL: "/en/contact",
    } satisfies CompanyLeftSection & { type: "left" },
    {
      type: "right",
      title: "Modular chassis support multi-scenario expansion",
      subTitle:
        "Our chassis platforms support transport, inspection, mounted operations, and secondary development, giving different types of unmanned equipment a unified base and room for future expansion.",
      single: false,
      imgOneAlt: "Modular general-purpose chassis structure",
      imgTwoAlt: "General-purpose chassis adapted to multiple scenarios",
    } satisfies CompanyRightSection & { type: "right" },
    {
      type: "left",
      title: "Solution services connect equipment to real operations",
      subTitle:
        "From requirement clarification and capability assembly to scenario onboarding and pilot validation, we help customers bring parts, systems, and chassis capabilities into real business environments.",
      imgAlt: "Scenario solution service and on-site deployment illustration",
      btnExists: true,
      btnTitle: "View Solutions",
      btnURL: "/en/solutions",
    } satisfies CompanyLeftSection & { type: "left" },
  ],
  stats: {
    title: "Integrated support from foundational capability to field deployment",
    subTitle:
      "Our focus is not simply selling a machine, but continuously supporting the build logic and delivery logic behind unmanned equipment projects.",
    mainStatTitle: "4",
    mainStatSubTitle: "Core business areas working together to support project delivery",
    items: [
      {
        stat: "Requirement Alignment",
        description: "Clarify the capability combination needed for mission goals and operating boundaries",
      },
      {
        stat: "System Matching",
        description: "Complete the adaptation chain for key parts and core systems",
      },
      {
        stat: "Platform Deployment",
        description: "Use modular chassis as the base for multi-type task delivery",
      },
      {
        stat: "Scenario Validation",
        description: "Drive pilot deployment and iterative optimization through solution services",
      },
    ],
  },
} as const;

export const EN_SOLUTIONS_PAGE_CONTENT = {
  hero: {
    title: "Solutions Built Around Unmanned Equipment Deployment",
    subTitle:
      "From parts and systems to modular chassis and solution services, Buquanxing Tech helps customers introduce unmanned capability into agriculture, inspection, public service, and other real-world scenarios.",
    btnExists: true,
    btnTitle: "Start a Consultation",
    btnURL: "/en/contact",
  },
  sections: [
    {
      type: "right",
      title: "Hilly and mountainous agriculture deployment",
      subTitle:
        "For agricultural scenarios that demand stronger passability, stability, and task organization, we combine systems, chassis adaptation, and validation workflows to help customers move more steadily toward unmanned deployment.",
      single: false,
      imgOneAlt: "Unmanned equipment operating in hilly agricultural terrain",
      imgTwoAlt: "Validation and task organization in complex terrain",
      btnExists: true,
      btnTitle: "Discuss Cooperation",
      btnURL: "/en/contact",
    } satisfies CompanyRightSection & { type: "right" },
    {
      type: "left",
      title: "Large-campus and inspection solutions",
      subTitle:
        "For inspection, transport, mobile execution, and data collection, we use modular chassis and core systems to build extensible scenario solutions that reduce repeated investment across multiple build phases.",
      imgAlt: "Campus inspection and unmanned execution platform",
    } satisfies CompanyLeftSection & { type: "left" },
    {
      type: "right",
      title: "Public service and multi-mission platform solutions",
      subTitle:
        "When tasks require mobility, payload support, and stable continuous operation, we center the solution on modular chassis and pair it with the needed systems and control links.",
      single: false,
      imgOneAlt: "Public service unmanned platform structure",
      imgTwoAlt: "Modular chassis used in a multi-mission scenario",
    } satisfies CompanyRightSection & { type: "right" },
    {
      type: "left",
      title: "Solution services from diagnosis to delivery validation",
      subTitle:
        "We do more than provide hardware platforms. Our solution services connect business goals, equipment capability, and deployment rhythm so projects can complete their first rollout faster and keep improving afterward.",
      imgAlt: "Scenario delivery and validation workflow illustration",
      btnExists: true,
      btnTitle: "Contact Buquanxing Tech",
      btnURL: "/en/contact",
    } satisfies CompanyLeftSection & { type: "left" },
  ],
  stats: {
    title: "Solutions focused on four deployment outcomes",
    subTitle:
      "We care more about lowering integration thresholds, shortening onboarding cycles, and supporting long-term expansion than simply presenting conceptual capabilities.",
    mainStatTitle: "1",
    mainStatSubTitle: "Closed-loop method from foundational supply to scenario deployment",
    items: [
      {
        stat: "Capability Completion",
        description: "Fill critical gaps across parts, systems, and chassis",
      },
      {
        stat: "Scenario Fit",
        description: "Align platform capability with business constraints",
      },
      {
        stat: "Deployment Efficiency",
        description: "Reduce rework between planning and validation",
      },
      {
        stat: "Scalable Expansion",
        description: "Leave room for more missions and wider rollout",
      },
    ],
  },
} as const;

export const EN_CONTACT_PAGE_CONTENT = {
  hero: {
    title: "Contact Buquanxing Tech",
    subTitle:
      "Tell us about your scenario, expected capability, and project stage. We can discuss parts supply, core systems, modular chassis, and scenario solution services.",
    btnExists: false,
  },
} as const;

export const EN_PROJECTS_PAGE_CONTENT = {
  title: "Projects",
  subTitle:
    "Representative deployments across parts supply, core systems, modular chassis, and scenario services.",
  testimonials: [
    {
      content:
        '"Buquanxing helped us remove a lot of friction in parts and systems coordination before it became a schedule problem."',
      author: "Li",
      role: "Integration Lead",
    },
    {
      content:
        '"The modular chassis route saved us from rebuilding the same foundation for each new scenario."',
      author: "Wang",
      role: "Platform Product Manager",
    },
    {
      content:
        '"Their solution service was not just a document deliverable — they stayed with us through deployment."',
      author: "Chen",
      role: "Scenario Project Lead",
    },
  ],
} as const;

export const EN_HOME_ADVANTAGE_VISUAL = {
  src: homeAdvantageVisualImage,
  alt: "Unmanned equipment platform and component ecosystem visual",
} as const;

export const homePillars = EN_HOME_PILLARS;
export const homeCaseHighlights = EN_HOME_CASE_HIGHLIGHTS;
export const homeSolutionTabs = EN_HOME_SOLUTION_TABS;
export const aboutPageContent = EN_ABOUT_PAGE_CONTENT;
export const servicesPageContent = EN_SERVICES_PAGE_CONTENT;
export const solutionsPageContent = EN_SOLUTIONS_PAGE_CONTENT;
export const contactPageContent = EN_CONTACT_PAGE_CONTENT;
export const projectsPageContent = EN_PROJECTS_PAGE_CONTENT;
