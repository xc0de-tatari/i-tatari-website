/** Canonical SEO asset URLs — always www, always absolute for crawlers */
export const SEO_SITE = 'https://www.i-tatari.com' as const;
export const SEO_SITE_NAME = 'Tatari Investment' as const;

export const SEO_LOGO = {
  url: `${SEO_SITE}/logo-square.png`,
  width: 310,
  height: 310,
} as const;

export const SEO_OG_IMAGE = {
  url: `${SEO_SITE}/og-image.png`,
  width: 648,
  height: 310,
  alt: 'Tatari Investment — Immobilien Ägypten, Dubai & Saudi-Arabien',
} as const;

export function organizationLogoSchema() {
  return {
    '@type': 'ImageObject',
    '@id': `${SEO_SITE}/#logo`,
    url: SEO_LOGO.url,
    contentUrl: SEO_LOGO.url,
    width: SEO_LOGO.width,
    height: SEO_LOGO.height,
    caption: SEO_SITE_NAME,
  };
}

export function publisherSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SEO_SITE}/#organization`,
    name: SEO_SITE_NAME,
    url: SEO_SITE,
    logo: organizationLogoSchema(),
  };
}
