import { siteConfig, whatsappUrl, whatsappTemplates } from '../config/site.config';

/** Shared contact & external links */
export const links = {
  phone: siteConfig.phone,
  phoneDisplay: siteConfig.phoneDisplay,
  email: siteConfig.email,
  whatsapp: whatsappUrl(whatsappTemplates.germany),
  formApi: siteConfig.formApi,
} as const;

export const sections = {
  vorteile: '/#vorteile',
  standorte: '/#standorte',
  objekte: '/#objekte',
  rechner: '/#rechner',
  faq: '/#faq',
  kontakt: '/#kontakt',
} as const;

/** Same-page anchor (e.g. on /projekte/west-wind) */
export const anchors = {
  kontakt: '#kontakt',
  rechner: '#rechner',
} as const;
