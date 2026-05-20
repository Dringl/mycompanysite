import {
  FOOTER_NAVIGATION,
  PRIMARY_NAVIGATION,
} from "@data/company";
import {
  EN_FOOTER_NAVIGATION,
  EN_PRIMARY_NAVIGATION,
} from "@data/company.en";

const NAVIGATION_BY_LOCALE = {
  zh: {
    navBarLinks: PRIMARY_NAVIGATION,
    footerLinks: FOOTER_NAVIGATION,
  },
  en: {
    navBarLinks: EN_PRIMARY_NAVIGATION,
    footerLinks: EN_FOOTER_NAVIGATION,
  },
} as const;

export const getNavigation = (isEnglish: boolean) => {
  return isEnglish ? NAVIGATION_BY_LOCALE.en : NAVIGATION_BY_LOCALE.zh;
};

const navigation = getNavigation(false);

export default navigation;
