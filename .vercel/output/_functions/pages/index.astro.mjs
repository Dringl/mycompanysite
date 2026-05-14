import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, r as renderComponent, f as renderSlot, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_Bnb6Ye4e.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout, h as homeCaseSection, f as homeCaseHighlights, c as COMPANY_INFO, g as homePillars, j as homeSolutionTabs, k as homeAdvantageVisual, l as companyAdvantages, m as homeClosingCta } from '../chunks/Icon_DT7D7-Ea.mjs';
import 'clsx';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_BIzi_tZR.mjs';
import { $ as $$FeaturesStatsAlt } from '../chunks/FeaturesStatsAlt_B5k7ftnJ.mjs';
import { $ as $$VideoShowcase } from '../chunks/VideoShowcase_BuqkUu7L.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$a = createAstro("https://bq-star.com/");
const $$LogoIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$LogoIcon;
  const { className, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="100%"${addAttribute(h ? h : 1e3, "height")} viewBox="0 0 1024 1024"${addAttribute(className, "class")}${addAttribute("currentColor", "fill")}> <path d=" M777.285278,484.050232   C773.177551,461.404053 758.423828,447.811615 739.213562,436.956299   C674.705261,400.504181 610.525879,363.470093 546.222778,326.654907   C545.211121,326.075714 544.209351,325.475250 543.234070,324.837250   C538.507080,321.745178 538.392578,319.279510 543.335144,316.401184   C557.433899,308.190552 571.638611,300.161041 585.835510,292.119934   C597.136475,285.719055 608.449524,279.337341 619.831055,273.081512   C625.947571,269.719574 632.306702,269.728455 638.357239,273.173920   C667.441345,289.735901 696.468750,306.397369 725.509033,323.036163   C742.513062,332.778748 759.503418,342.545135 776.572876,352.342651   C779.723328,328.728210 769.869263,315.197845 752.875244,305.439545   C713.742432,282.968872 674.642883,260.440155 635.496460,237.993240   C604.299194,220.104431 573.146851,202.133804 541.792175,184.524109   C523.206787,174.086044 504.511749,174.189957 485.780884,184.995300   C416.263184,225.098114 346.587189,264.926636 277.094818,305.073090   C257.391663,316.455811 247.046371,333.755798 247.048431,356.809998   C247.056778,450.805878 246.807526,544.803162 247.310333,638.796509   C247.413467,658.075500 257.334595,673.593140 273.445465,684.116516   C286.946686,692.935181 301.235016,700.556580 315.238831,708.596619   C359.859344,734.214783 404.512390,759.776184 449.146606,785.370422   C460.845795,792.078979 472.455536,798.946533 484.223724,805.531250   C508.406067,819.062256 532.355591,818.470581 556.293823,804.507202   C603.180725,777.157837 650.210876,750.054199 697.139099,722.775513   C703.186523,719.260254 709.050964,719.030396 715.092163,722.478943   C738.806396,736.015808 762.546509,749.507690 786.212036,763.129150   C791.636780,766.251587 791.333740,770.207092 785.522461,773.577515   C763.342224,786.441589 741.101807,799.201843 718.918823,812.061218   C685.066467,831.685303 651.233582,851.343201 617.411011,871.018677   C598.558960,881.985535 580.116272,893.724915 560.825989,903.853088   C532.251953,918.855530 503.592773,917.476318 475.717651,901.161316   C423.555176,870.631165 371.496552,839.922180 319.216736,809.594421   C277.740143,785.533752 235.839905,762.201355 194.439087,738.012817   C173.168243,725.585327 161.998199,706.667175 162.007523,681.570251   C162.054474,555.075684 161.853989,428.580536 162.264359,302.087311   C162.320541,284.768494 171.045624,270.142456 185.139999,260.189819   C198.698013,250.615906 213.311752,242.491577 227.713882,234.166763   C277.591248,205.336365 327.554291,176.653793 377.532715,147.998688   C409.309967,129.779236 441.009613,111.414528 473.047455,93.662506   C499.051239,79.253922 526.101318,79.250450 552.548584,92.016830   C570.054932,100.467323 586.671814,110.779762 603.581665,120.442886   C646.228210,144.813232 688.815735,169.287018 731.425964,193.720917   C766.093323,213.600189 800.860352,233.308685 835.388611,253.426819   C856.288818,265.604462 867.109863,283.632629 867.070862,308.439819   C866.857849,444.100372 866.976990,579.761475 866.868225,715.422302   C866.866272,717.818298 866.107483,721.098145 864.473145,722.313782   C863.278015,723.202759 859.802795,721.835022 857.788269,720.690735   C833.174072,706.709778 808.613098,692.633850 784.135864,678.414734   C781.818359,677.068420 780.159607,674.588135 778.416626,671.996948   C778.752258,670.878418 778.965759,670.397217 778.965942,669.915955   C778.986938,609.157532 779.002014,548.399109 778.926880,487.640778   C778.925415,486.443268 777.856323,485.247040 777.285278,484.050232  z" id="path2"></path> <path d=" M280.928833,383.000000   C280.928253,376.333862 280.980225,370.167145 280.916199,364.001678   C280.767548,349.687469 287.225433,338.946686 299.332916,331.939117   C336.366272,310.505096 373.599213,289.416199 410.685272,268.072754   C417.789124,263.984375 424.214233,264.294586 431.309601,268.411560   C453.918671,281.530121 476.787079,294.201111 499.452911,307.223236   C501.664520,308.493835 504.266968,310.821503 504.611359,312.988525   C504.837616,314.412537 501.593201,316.886139 499.457092,318.113556   C462.211517,339.513184 424.845917,360.704224 387.622162,382.141541   C372.600830,390.792358 364.772308,403.660950 364.849854,421.471283   C365.076202,473.466248 365.069519,525.463379 364.858459,577.458496   C364.788086,594.793884 372.638977,606.874451 387.322144,615.184631   C413.985138,630.274963 440.605225,645.441345 467.287933,660.496643   C479.782013,667.546082 492.574707,674.449768 506.842407,676.580994   C521.817627,678.817932 536.337646,675.642700 549.629578,668.073425   C568.438293,657.362549 587.158936,646.497253 605.942017,635.741394   C616.921753,629.454041 628.025635,623.379822 638.928772,616.963745   C645.828003,612.903809 652.292603,613.132690 659.154785,617.095154   C681.936218,630.249878 704.835022,643.201294 727.671082,656.261719   C734.351501,660.082458 734.350525,662.878723 727.717712,666.708862   C689.218872,688.940369 650.716248,711.165466 612.207336,733.379578   C592.015869,745.027222 571.894470,756.799927 551.586609,768.241150   C528.728455,781.119080 505.721924,780.399719 483.237305,767.407104   C423.987732,733.170288 364.933289,698.595459 305.646362,664.423889   C293.337128,657.329041 283.844574,648.579651 281.568115,633.919556   C281.035431,630.489258 280.953583,626.962646 280.952179,623.480225   C280.920258,543.486816 280.928223,463.493408 280.928833,383.000000  z" id="path3"></path> <path d=" M431.533203,512.272522   C428.094269,494.038055 430.086243,476.760223 438.089844,460.504974   C450.886566,434.515015 471.282867,417.821442 500.183380,413.028534   C529.591492,408.151428 555.326355,416.174255 576.041687,437.871552   C588.630920,451.057587 595.598450,466.861084 598.322754,485.296783   C604.677551,528.301514 575.082336,569.317688 534.345764,578.942749   C487.806366,589.938782 441.688263,560.170898 431.533203,512.272522  M502.694611,450.948425   C502.059265,451.145355 501.420685,451.332458 500.789032,451.540680   C479.226807,458.650146 466.345062,477.764038 468.045044,500.123016   C469.618378,520.816467 487.026581,540.154968 508.132416,542.719360   C536.216614,546.131592 561.823975,525.232544 561.816223,495.549591   C561.808899,467.483398 536.298096,444.328003 502.694611,450.948425  z" id="path4"></path> </svg>`;
}, "/data/work/web/mycompanysite/src/components/ui/icons/LogoIcon.astro", void 0);

const $$Astro$9 = createAstro("https://bq-star.com/");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-xs outline-hidden ring-zinc-500 focus-visible:ring-3 transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-hidden";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "/data/work/web/mycompanysite/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Astro$8 = createAstro("https://bq-star.com/");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    tagline,
    title,
    brandTitle,
    subTitle,
    primaryBtnText,
    primaryBtnUrl,
    secondaryBtnText,
    secondaryBtnUrl
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto grid min-h-[88vh] max-w-screen place-items-center overflow-hidden px-4 sm:px-6 lg:px-8"> <div class="absolute inset-x-0 top-0 -z-10 h-72 bg-radial-[circle_at_top] from-primary-blue/20 via-transparent to-transparent blur-2xl"></div> <div class="absolute top-0 -z-10 w-full opacity-80"> ${renderComponent($$result, "LogoIcon", $$LogoIcon, { "h": "1000", "className": "text-less-pure-dark/40" })} </div> <div class="z-10 mx-auto max-w-6xl text-center"> ${tagline && renderTemplate`<span class="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.24em] text-neutral-300 uppercase backdrop-blur-sm"> ${tagline} </span>`} <h1 class="mt-6 font-bebas text-[3.6rem] leading-none font-bold tracking-[-0.08em] text-neutral-200 uppercase sm:text-[5rem] lg:text-[6.8rem]"> ${title} </h1> ${brandTitle && renderTemplate`<h2 class="font-bebas from-neutral-200 via-primary-blue/80 to-transparent bg-gradient-to-b bg-clip-text text-[3rem] leading-none font-bold tracking-[-0.08em] text-transparent uppercase sm:text-[5rem] lg:text-[6.4rem]"> ${brandTitle} </h2>`} ${subTitle && renderTemplate`<p class="mx-auto mt-6 max-w-3xl text-pretty text-base leading-8 text-neutral-300 md:text-lg"> ${subTitle} </p>`} <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row"> ${primaryBtnText && primaryBtnUrl && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtnText, "url": primaryBtnUrl })}`} ${secondaryBtnText && secondaryBtnUrl && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtnText, "url": secondaryBtnUrl })}`} </div> </div> </section>`;
}, "/data/work/web/mycompanysite/src/components/sections/landing/HeroSection.astro", void 0);

const $$Astro$7 = createAstro("https://bq-star.com/");
const $$HeroSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url, buttonTitle = "\u7ACB\u5373\u54A8\u8BE2" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#ea580c" viewBox="0 0 24 24"> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path> </svg> </div> <div class="absolute left-[85%] top-0 scale-75"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#fbbf24" viewBox="0 0 24 24"> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div> <div class="mx-auto mt-5 max-w-3xl text-center"> <h2 class="block text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h2> </div> ${subTitle && renderTemplate`<div class="mx-auto mt-5 max-w-3xl text-center"> <p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div>`} ${url && renderTemplate`<div class="mt-8 flex justify-center gap-3"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": buttonTitle, "url": url })} </div>`} </section>`;
}, "/data/work/web/mycompanysite/src/components/sections/landing/HeroSectionAlt.astro", void 0);

const $$Astro$6 = createAstro("https://bq-star.com/");
const $$IconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$IconBlock;
  const { heading, content } = Astro2.props;
  const headingClasses = "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
  const contentClasses = "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
  return renderTemplate`<!-- The root container that arranges your slot and the heading/content -->${maybeRenderHead()}<div class="flex gap-x-5"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3${addAttribute(headingClasses, "class")}> ${heading} </h3> <!-- Content text of the section --> <p${addAttribute(contentClasses, "class")}>${content}</p> </div> </div>`;
}, "/data/work/web/mycompanysite/src/components/ui/blocks/IconBlock.astro", void 0);

const $$Astro$5 = createAstro("https://bq-star.com/");
const $$FeaturesGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle, features, pillars = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> ${pillars.length > 0 && renderTemplate`<div class="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"> ${pillars.map((pillar, index) => renderTemplate`<div${addAttribute(`group relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-cover bg-center ${index % 2 === 1 ? "xl:mt-10" : ""}`, "class")}${addAttribute(`background-image:url(${pillar.image})`, "style")}> <div class="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/10 transition duration-300 group-hover:from-neutral-900"></div> <div class="absolute inset-x-0 bottom-0 z-10 p-6"> <h3 class="text-2xl font-bold text-white">${pillar.title}</h3> <p class="mt-3 text-sm leading-7 text-white/75">${pillar.summary}</p> </div> </div>`)} </div>`} <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12"> <div class="lg:col-span-1"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 md:mt-4"> ${subTitle} </p>`} </div> <div class="lg:col-span-2"> <div class="grid gap-8 sm:grid-cols-2 md:gap-12"> ${features && features.map((feature) => renderTemplate`${renderComponent($$result, "IconBlock", $$IconBlock, { "heading": feature.heading, "content": feature.content }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.svg })} ` })}`)} </div> </div> </div> </section>`;
}, "/data/work/web/mycompanysite/src/components/sections/features/FeaturesGeneral.astro", void 0);

const $$Astro$4 = createAstro("https://bq-star.com/");
const $$TabNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TabNav;
  const { aria, dataTab, id, heading, content, first } = Astro2.props;
  const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-hidden ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring-3 hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-hidden  dark:hs-tab-active:bg-less-pure-dark/70 md:p-5";
  return renderTemplate`<!-- Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls  -->${maybeRenderHead()}<button type="button"${addAttribute(`${first ? "active " : ""}${BUTTON_CLASS}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-hs-tab")}${addAttribute(aria, "aria-controls")} role="tab"> <!-- Slot for additional content --> <span class="flex"> ${renderSlot($$result, $$slots["default"])} <!-- Container for the heading and content of the tab --> <span class="ms-6 grow"> <!-- Heading of the tab, changes color when active --> <span class="block text-lg font-bold text-neutral-800 hs-tab-active:text-primary-blue dark:text-neutral-200 dark:hs-tab-active:text-neutral-200">${heading}</span> <!-- Content of the tab, changes color when active --> <span class="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200">${content}</span> </span> </span> </button>`;
}, "/data/work/web/mycompanysite/src/components/ui/blocks/TabNav.astro", void 0);

const $$Astro$3 = createAstro("https://bq-star.com/");
const $$TabContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { id, aria, src, alt, first, second } = Astro2.props;
  const firstClass = first ? "" : "hidden";
  const secondClass = second ? "shadow-xl aspect-5/4 bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" : "shadow-xl aspect-3/2 object-cover w-full object-center h-[800px] lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} role="tabpanel"${addAttribute(firstClass, "class")}${addAttribute(aria, "aria-labelledby")}> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(secondClass, "class")} draggable="false" loading="eager"> </div>`;
}, "/data/work/web/mycompanysite/src/components/ui/blocks/TabContent.astro", void 0);

const $$Astro$2 = createAstro("https://bq-star.com/");
const $$FeaturesNavs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturesNavs;
  const { title, tabs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="relative p-6 md:p-16"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <!-- Section's heading and tab navigation --> <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <!-- Tab navigation - use the attribute 'first' in the first TabNav for the component to work --> <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist"> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabNav", $$TabNav, { "id": `tabs-with-card-item-${index + 1}`, "dataTab": `#tabs-with-card-${index + 1}`, "aria": `tabs-with-card-${index + 1}`, "heading": tab.heading, "content": tab.content, "first": tab.first }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": tab.svg })} ` })}`)} </nav> </div> <!-- Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles --> <div class="lg:col-span-6"> <div class="relative"> <div> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabContent", $$TabContent, { "id": `tabs-with-card-${index + 1}`, "aria": `tabs-with-card-item-${index + 1}`, "src": tab.src, "alt": tab.alt, "first": tab.first, "second": tab.second })}`)} </div> </div> </div> </div> <div class="absolute inset-0 grid h-full w-full grid-cols-12"> <!-- Decorative background and sizing --> <!-- <div
        class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"
      > --> <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-least-pure-dark/[.675] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div> </div> </div> </section>`;
}, "/data/work/web/mycompanysite/src/components/sections/features/FeaturesNavs.astro", void 0);

const $$Astro$1 = createAstro("https://bq-star.com/");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, collapseId, question, answer, first } = Astro2.props;
  const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
  const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
  const ACCORDION_CONTENT_CLASS = "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
  function getAccordionClass(first2 = false) {
    return first2 ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
  }
  return renderTemplate`<!-- The main container for the accordion item -->${maybeRenderHead()}<div${addAttribute(getAccordionClass(first), "class")}${addAttribute(id, "id")}> <!-- The accordion button, which toggles the expanded/collapsed state --> <button class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-hidden ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-hidden md:text-lg"${addAttribute(collapseId, "aria-controls")}> ${question} <!-- SVG Icon that is shown when the accordion is NOT active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionNotActive" })} <!-- SVG Icon that is shown when the accordion is active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionActive" })} </button> <!-- The collapsible content of the accordion --> <div${addAttribute(id, "aria-labelledby")}${addAttribute(`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`, "class")}${addAttribute(collapseId, "id")}> <!-- The content paragraph --> <p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${answer} </p> </div> </div>`;
}, "/data/work/web/mycompanysite/src/components/ui/blocks/AccordionItem.astro", void 0);

const $$Astro = createAstro("https://bq-star.com/");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { title, faqs } = Astro2.props;
  const makeId = (base, index) => `${base}${index + 1}`;
  return renderTemplate`<!-- Main container that holds all content. Customized for different viewport sizes. -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid gap-10 md:grid-cols-5"> <div class="md:col-span-2"> <div class="max-w-xs"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block"> ${faqs.subTitle} </p> </div> </div> <!-- FAQ accordion items --> <div class="md:col-span-3"> <div class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"> ${faqs.faqs.map((question, i) => {
    let id = makeId(
      "hs-basic-with-title-and-arrow-stretched-heading-",
      i
    );
    let collapseId = makeId(
      "hs-basic-with-title-and-arrow-stretched-collapse",
      i
    );
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { ...question, "id": id, "collapseId": collapseId, "first": i === 0 })}`;
  })} </div> </div> </div> </section>`;
}, "/data/work/web/mycompanysite/src/components/sections/misc/FAQ.astro", void 0);

const subTitle = "围绕咨询、交付方式与合作节奏，整理了首页阶段最常见的几个问题。";
const faqs = [{"question":"补全星科技主要提供哪些方向的服务？","answer":"目前重点聚焦农业社会化服务、无人机核心产品研发、无人车平台研发，以及智慧无人化装备相关的场景化交付与服务支持。"},{"question":"是否支持按具体项目场景进行定制？","answer":"支持。我们会先了解项目场景、目标与约束，再评估采用标准能力组合、局部定制，或联合推进研发交付的方式。"},{"question":"咨询前需要准备哪些信息？","answer":"建议准备应用场景、当前痛点、预期目标、计划周期和联系方式。即使信息还不完整，也可以先沟通需求方向。"},{"question":"合作流程通常是怎样的？","answer":"通常会先进行需求沟通与场景判断，再根据项目情况推进方案建议、能力匹配、实施安排与后续交付协同。"},{"question":"是否可以先从小范围试点开始？","answer":"可以。对于仍在验证阶段的项目，先做小范围试点有助于确认场景适配性，再逐步扩展到更完整的部署与服务。"}];
const faqs$1 = {
  subTitle,
  faqs,
};

const features = [
	{
		heading: "一体化研发交付",
		content: "覆盖方案梳理、核心产品研发、场景适配与交付实施，让项目推进链路更顺畅。",
		svg: "groups"
	},
	{
		heading: "聚焦真实农业场景",
		content: "围绕农业社会化服务与作业现场需求设计能力边界，强调可执行、可落地、可持续。",
		svg: "verified"
	},
	{
		heading: "平台化装备能力",
		content: "兼顾无人机核心产品与无人车平台方向，便于后续按业务需求持续扩展应用能力。",
		svg: "books"
	},
	{
		heading: "持续服务支持",
		content: "从前期沟通到项目交付，再到后续优化配合，保持长期协作视角而非一次性交付。",
		svg: "frame"
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `${COMPANY_INFO.shortName}\uFF5C${COMPANY_INFO.tagline}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": COMPANY_INFO.description, "customOgTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "tagline": COMPANY_INFO.hero.tagline, "title": COMPANY_INFO.hero.title, "brandTitle": COMPANY_INFO.hero.brandTitle, "subTitle": COMPANY_INFO.hero.subTitle, "primaryBtnText": COMPANY_INFO.hero.primaryText, "primaryBtnUrl": COMPANY_INFO.hero.primaryUrl, "secondaryBtnText": COMPANY_INFO.hero.secondaryText, "secondaryBtnUrl": COMPANY_INFO.hero.secondaryUrl })} ${maybeRenderHead()}<div class="mx-auto w-full max-w-(--breakpoint-2xl) flex-grow px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "\u6838\u5FC3\u4E1A\u52A1\u80FD\u529B", "subTitle": "\u56F4\u7ED5\u519C\u4E1A\u670D\u52A1\u3001\u65E0\u4EBA\u673A\u6838\u5FC3\u4EA7\u54C1\u4E0E\u65E0\u4EBA\u8F66\u5E73\u53F0\uFF0C\u6784\u5EFA\u4ECE\u7814\u53D1\u5230\u4EA4\u4ED8\u7684\u4E09\u4F4D\u4E00\u4F53\u80FD\u529B\u3002", "pillars": homePillars, "features": features })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": "\u91CD\u70B9\u89E3\u51B3\u65B9\u6848", "tabs": homeSolutionTabs })} ${renderComponent($$result2, "VideoShowcase", $$VideoShowcase, { "title": "\u901A\u8FC7\u4E00\u6BB5\u77ED\u7247\u5FEB\u901F\u4E86\u89E3\u8865\u5168\u661F\u79D1\u6280", "subTitle": "\u6211\u4EEC\u5173\u6CE8\u7684\u4E0D\u53EA\u662F\u8BBE\u5907\u672C\u8EAB\uFF0C\u66F4\u5173\u6CE8\u8BBE\u5907\u5982\u4F55\u771F\u6B63\u878D\u5165\u519C\u4E1A\u4E0E\u65E0\u4EBA\u5316\u4F5C\u4E1A\u573A\u666F\uFF0C\u5F62\u6210\u6301\u7EED\u8FD0\u884C\u7684\u670D\u52A1\u80FD\u529B\u3002", "videoUrl": "/videos/company-intro.mp4", "highlights": [
    "\u805A\u7126\u519C\u4E1A\u793E\u4F1A\u5316\u670D\u52A1\u3001\u65E0\u4EBA\u673A\u6838\u5FC3\u4EA7\u54C1\u4E0E\u65E0\u4EBA\u8F66\u5E73\u53F0\u65B9\u5411\u3002",
    "\u5F3A\u8C03\u65B9\u6848\u9002\u914D\u3001\u8BBE\u5907\u4EA4\u4ED8\u4E0E\u540E\u7EED\u534F\u540C\u7684\u4E00\u4F53\u5316\u63A8\u8FDB\u3002",
    "\u5C3D\u91CF\u4FDD\u7559\u73B0\u6709\u6A21\u677F\u7684\u79D1\u6280\u611F\u4E0E\u52A8\u6548\u8282\u594F\uFF0C\u540C\u65F6\u66FF\u6362\u6210\u771F\u5B9E\u516C\u53F8\u8BED\u4E49\u3002"
  ], "ctaTitle": "\u4E86\u89E3\u516C\u53F8\u80CC\u666F", "ctaUrl": "/about" })} <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"> <div class="max-w-2xl"> <h2 class="text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${homeCaseSection.title} </h2> <p class="mt-3 text-pretty leading-8 text-neutral-600 dark:text-neutral-400"> ${homeCaseSection.subTitle} </p> </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": homeCaseSection.ctaText, "url": homeCaseSection.ctaUrl })} </div> <div class="grid gap-6 lg:grid-cols-3"> ${homeCaseHighlights.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group relative overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center p-6 shadow-xl outline-hidden ring-zinc-500 transition duration-300 hover:-translate-y-1 focus-visible:ring-3 dark:ring-zinc-200"${addAttribute(`background-image:url(${item.image})`, "style")}> <div class="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/15 transition duration-300 group-hover:from-neutral-900"></div> <div class="relative z-10 flex min-h-[320px] flex-col justify-between"> <span class="inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-white/80 uppercase"> ${item.tag} </span> <div> <h3 class="text-2xl font-bold text-white">${item.title}</h3> <p class="mt-3 text-sm leading-7 text-white/75"> ${item.summary} </p> <div class="mt-6"> ${renderComponent($$result2, "SecondaryCTA", $$SecondaryCTA, { "title": "\u67E5\u770B\u8BE6\u60C5", "url": item.href })} </div> </div> </div> </a>`)} </div> </section> ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "\u4E3A\u4EC0\u4E48\u9009\u62E9\u8865\u5168\u661F\u79D1\u6280", "subTitle": "\u4EE5\u573A\u666F\u7406\u89E3\u3001\u5E73\u53F0\u80FD\u529B\u4E0E\u6301\u7EED\u670D\u52A1\u534F\u540C\u63A8\u8FDB\u65E0\u4EBA\u5316\u88C5\u5907\u843D\u5730\uFF0C\u5E2E\u52A9\u9879\u76EE\u4ECE\u6982\u5FF5\u9A8C\u8BC1\u8D70\u5411\u771F\u5B9E\u5E94\u7528\u3002", "benefits": companyAdvantages, "src": homeAdvantageVisual.src, "alt": homeAdvantageVisual.alt })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "\u54A8\u8BE2\u524D\u5E38\u89C1\u95EE\u9898", "faqs": faqs$1 })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": homeClosingCta.title, "subTitle": homeClosingCta.subTitle, "buttonTitle": homeClosingCta.buttonText, "url": homeClosingCta.url })} </div> ` })}`;
}, "/data/work/web/mycompanysite/src/pages/index.astro", void 0);

const $$file = "/data/work/web/mycompanysite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
