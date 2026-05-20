import vcuImage from "@images/pages/services/services-catalog-vcu.jpg";
import brushlessControllerImage from "@images/pages/services/services-catalog-brushless-controller.jpg";
import brushedControllerImage from "@images/pages/services/services-catalog-brushed-controller.jpg";
import highSideSwitchImage from "@images/pages/services/services-catalog-high-side-switch.jpg";
import autoNavigationImage from "@images/pages/services/services-catalog-auto-navigation.jpg";
import autoFollowImage from "@images/pages/services/services-catalog-auto-follow.jpg";
import trackChassisImage from "@images/pages/services/services-catalog-track-chassis.jpg";
import wheelChassisImage from "@images/pages/services/services-catalog-wheel-chassis.jpg";
import flightControllerImage from "@images/pages/services/services-catalog-flight-controller.jpg";
import droneEscImage from "@images/pages/services/services-catalog-drone-esc.jpg";

export interface ProductCatalogItem {
  name: string;
  summary: string;
  image: any;
  useCases: string[];
}

export interface ProductCatalogCategory {
  id: string;
  name: string;
  description: string;
  items: ProductCatalogItem[];
}

export const PRODUCT_CATALOG: ProductCatalogCategory[] = [
  {
    id: "ugv-parts",
    name: "无人车零部件",
    description: "覆盖无人车动力控制链路里的关键基础件，适合样机集成、平台升级与批量配套。",
    items: [
      {
        name: "VCU",
        summary: "面向无人车整车控制的核心控制单元，适合动力、执行与通信链路统一接入。",
        image: vcuImage,
        useCases: ["整车控制", "状态管理", "多模块协同"],
      },
      {
        name: "无刷电调",
        summary: "适用于高效率电机驱动场景，帮助无人车平台提升动力输出稳定性。",
        image: brushlessControllerImage,
        useCases: ["驱动控制", "高效输出", "平台升级"],
      },
      {
        name: "有刷电调",
        summary: "适合更常见的执行与驱动控制需求，可用于多类型移动底盘改造。",
        image: brushedControllerImage,
        useCases: ["执行控制", "驱动适配", "样机验证"],
      },
      {
        name: "高边电子开关",
        summary: "提供 MOS 与继电器方案，适合电源管理、负载切换与任务执行链路。",
        image: highSideSwitchImage,
        useCases: ["电源管理", "负载切换", "安全控制"],
      },
    ],
  },
  {
    id: "ugv-core-systems",
    name: "无人车核心系统",
    description: "围绕遥控、自动导航与自动跟随能力，帮助平台更快形成可演示、可部署系统。",
    items: [
      {
        name: "遥控控制系统",
        summary: "适用于人工接管、调试验证与混合控制场景，提升现场操作安全性。",
        image: vcuImage,
        useCases: ["远程控制", "调试验证", "手自动切换"],
      },
      {
        name: "自动导航系统",
        summary: "面向巡检、运输与重复路径作业，帮助项目更快建立自主导航能力。",
        image: autoNavigationImage,
        useCases: ["路径导航", "园区巡检", "重复作业"],
      },
      {
        name: "自动跟随系统",
        summary: "适合人员伴随、移动工具车与辅助运输等作业形态，降低现场操作负担。",
        image: autoFollowImage,
        useCases: ["自动跟随", "伴随运输", "辅助作业"],
      },
    ],
  },
  {
    id: "ugv-chassis",
    name: "无人车通用底盘",
    description: "提供适配复杂地形与多任务需求的标准底盘平台，便于二次开发与快速交付。",
    items: [
      {
        name: "双履带通用底盘",
        summary: "更适合复杂地形、山地坡地与高通过性场景，兼顾稳定与载荷能力。",
        image: trackChassisImage,
        useCases: ["丘陵山地", "复杂路面", "高通过性"],
      },
      {
        name: "四驱轮式通用底盘",
        summary: "适合园区、工厂与公共服务场景，具备更灵活的移动效率与扩展便利性。",
        image: wheelChassisImage,
        useCases: ["园区巡检", "物流运输", "公共服务"],
      },
    ],
  },
  {
    id: "uav-parts",
    name: "无人机零部件",
    description: "面向无人机平台研发与改装，提供飞控和电调等关键部件支持。",
    items: [
      {
        name: "飞控",
        summary: "适合多旋翼与任务型无人机控制系统集成，支撑姿态、任务与通信控制。",
        image: flightControllerImage,
        useCases: ["飞行控制", "姿态管理", "任务平台"],
      },
      {
        name: "电调",
        summary: "适用于无人机动力执行链路，帮助平台获得稳定的动力响应与飞行控制基础。",
        image: droneEscImage,
        useCases: ["动力输出", "响应控制", "飞行执行"],
      },
    ],
  },
  {
    id: "solutions",
    name: "场景解决方案",
    description: "从农业、养老到工业现场，把部件、系统与底盘能力组合成可落地的业务方案。",
    items: [
      {
        name: "农业场景导入",
        summary: "围绕耕、种、管、收等环节，推进丘陵山地农业的无人化能力导入。",
        image: trackChassisImage,
        useCases: ["农业生产", "山地作业", "运输协同"],
      },
      {
        name: "养老服务场景",
        summary: "结合高通过底盘与感知交互能力，探索陪护、监测与辅助移动服务。",
        image: wheelChassisImage,
        useCases: ["陪护辅助", "健康监测", "社区服务"],
      },
      {
        name: "工业园区场景",
        summary: "面向封闭园区、厂区巡检与物料周转，提升重复作业自动化能力。",
        image: autoNavigationImage,
        useCases: ["厂区巡检", "物料转运", "协同运输"],
      },
    ],
  },
] as const;

export const EN_PRODUCT_CATALOG: ProductCatalogCategory[] = [
  {
    id: "ugv-parts",
    name: "UGV Parts",
    description: "Key foundational parts for unmanned ground vehicle power and control integration.",
    items: [
      {
        name: "VCU",
        summary: "Vehicle control unit for unified control of drive, execution, and communication chains.",
        image: vcuImage,
        useCases: ["vehicle control", "state management", "module coordination"],
      },
      {
        name: "Brushless Controller",
        summary: "Built for efficient motor drive scenarios with stable power output for UGV platforms.",
        image: brushlessControllerImage,
        useCases: ["drive control", "efficient output", "platform upgrade"],
      },
      {
        name: "Brushed Controller",
        summary: "Suitable for common actuation and drive needs in a wide range of mobile platforms.",
        image: brushedControllerImage,
        useCases: ["actuation control", "drive adaptation", "prototype validation"],
      },
      {
        name: "High-Side Electronic Switch",
        summary: "MOS and relay-based switching options for power management and load control chains.",
        image: highSideSwitchImage,
        useCases: ["power management", "load switching", "safety control"],
      },
    ],
  },
  {
    id: "ugv-core-systems",
    name: "UGV Core Systems",
    description: "Remote control, auto-navigation, and follow systems for deployable unmanned vehicle platforms.",
    items: [
      {
        name: "Remote Control System",
        summary: "Supports manual takeover, debugging, and hybrid-control scenarios in field deployment.",
        image: vcuImage,
        useCases: ["remote control", "debugging", "manual-auto switch"],
      },
      {
        name: "Auto Navigation System",
        summary: "A practical base for inspection, transport, and repeat-path autonomous operations.",
        image: autoNavigationImage,
        useCases: ["path navigation", "campus inspection", "repeat tasks"],
      },
      {
        name: "Auto Follow System",
        summary: "Well suited to escort, mobile tool carts, and assisted transport use cases.",
        image: autoFollowImage,
        useCases: ["auto follow", "escort transport", "assisted operations"],
      },
    ],
  },
  {
    id: "ugv-chassis",
    name: "UGV General-Purpose Chassis",
    description: "Standard chassis platforms for complex terrain, multi-mission delivery, and secondary development.",
    items: [
      {
        name: "Dual-Track Chassis",
        summary: "Designed for rugged terrain, slopes, and higher passability requirements.",
        image: trackChassisImage,
        useCases: ["hilly terrain", "rugged roads", "high passability"],
      },
      {
        name: "4WD Wheeled Chassis",
        summary: "A flexible base for campuses, factories, and public-service mobility scenarios.",
        image: wheelChassisImage,
        useCases: ["campus inspection", "logistics", "public services"],
      },
    ],
  },
  {
    id: "uav-parts",
    name: "UAV Parts",
    description: "Flight controllers and ESCs for UAV development, integration, and upgrade work.",
    items: [
      {
        name: "Flight Controller",
        summary: "Supports mission-oriented UAV platforms with control over attitude, tasks, and communications.",
        image: flightControllerImage,
        useCases: ["flight control", "attitude control", "mission platforms"],
      },
      {
        name: "ESC",
        summary: "Provides stable power-response behavior for the propulsion chain of UAV platforms.",
        image: droneEscImage,
        useCases: ["power output", "response control", "flight execution"],
      },
    ],
  },
  {
    id: "solutions",
    name: "Scenario Solutions",
    description: "Deployment-oriented combinations of parts, systems, and chassis across agriculture, eldercare, and industry.",
    items: [
      {
        name: "Agriculture Deployment",
        summary: "Introduce unmanned capability across cultivation, planting, field management, and transport tasks.",
        image: trackChassisImage,
        useCases: ["agriculture", "hillside tasks", "transport coordination"],
      },
      {
        name: "Eldercare Services",
        summary: "Combine mobility platforms and sensing capabilities for care, assistance, and monitoring scenarios.",
        image: wheelChassisImage,
        useCases: ["care support", "health monitoring", "community services"],
      },
      {
        name: "Industrial Parks",
        summary: "Support inspection and material movement in factories and closed industrial environments.",
        image: autoNavigationImage,
        useCases: ["factory inspection", "material transfer", "collaborative transport"],
      },
    ],
  },
] as const;
