import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from './astro/server_Bnb6Ye4e.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_DaPNQlo-.mjs';

const $$Astro = createAstro("https://bq-star.com/");
const $$PrimaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrimaryCTA;
  const { title, url, noArrow } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-zinc-600 hover:bg-zinc-500 active:bg-primary-blue dark:focus:outline-hidden";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`<!-- Link styled as a button, with dynamic title, URL, and optional arrow -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")}> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight" })}`} </a>`;
}, "/data/work/web/mycompanysite/src/components/ui/buttons/PrimaryCTA.astro", void 0);

export { $$PrimaryCTA as $ };
