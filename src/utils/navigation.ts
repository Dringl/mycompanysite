import {
  FOOTER_NAVIGATION,
  PRIMARY_NAVIGATION,
} from "@data/company";
import {
  EN_FOOTER_NAVIGATION,
  EN_PRIMARY_NAVIGATION,
} from "@data/company.en";

export const getNavigation = (isEnglish: boolean) => {
  const navBarLinks = isEnglish ? EN_PRIMARY_NAVIGATION : PRIMARY_NAVIGATION;
  const footerLinks = isEnglish ? EN_FOOTER_NAVIGATION : FOOTER_NAVIGATION;

  return {
    navBarLinks,
    footerLinks,
    socialLinks: {},
  };
};

const navigation = getNavigation(false);

export default navigation;
