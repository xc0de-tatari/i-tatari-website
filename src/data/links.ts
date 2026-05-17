import { siteConfig, whatsappUrl, whatsappTemplates } from '../config/site.config';

/** Shared contact & external links */
export const links = {
  phone: siteConfig.phone,
  phoneDisplay: siteConfig.phoneDisplay,
  email: siteConfig.email,
  whatsapp: whatsappUrl(whatsappTemplates.germany),
  formApi: siteConfig.formApi,
} as const;

/** Official social profiles (clean URLs, no tracking params) */
export const socialLinks = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/tatari.eg',
    handle: 'Tatari Investment',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/tatari_inv/',
    handle: '@tatari_inv',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/tatari-agency',
    handle: 'Tatari Agency',
  },
] as const;

export const sections = {
  vorteile: '/#vorteile',
  standorte: '/#standorte',
  objekte: '/#objekte',
  rechner: '/#rechner',
  faq: '/#faq',
  kontakt: '/#kontakt',
} as const;

export const legalPaths = {
  impressum: '/impressum',
  datenschutz: '/datenschutz',
  agb: '/agb',
} as const;

/** Same-page anchor (e.g. on /projekte/west-wind) */
export const anchors = {
  kontakt: '#kontakt',
  rechner: '#rechner',
} as const;
