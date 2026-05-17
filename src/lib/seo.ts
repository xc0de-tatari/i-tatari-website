import { links, socialLinks } from '../data/links';
import {
  SEO_OG_IMAGE,
  SEO_SITE,
  SEO_SITE_NAME,
  organizationLogoSchema,
  publisherSchema,
} from './seo-assets';

const SITE = SEO_SITE;
const SITE_NAME = SEO_SITE_NAME;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

/** Absolute canonical URL from German slug path */
export function canonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE}${normalized === '/' ? '' : normalized}`.replace(/\/$/, '') || SITE;
}

/** German-first image alt: subject + context + location */
export function imageAlt(subject: string, context: string, location = 'Ägypten'): string {
  return `${subject} — ${context}, ${location} | Tatari Investment`;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : canonicalUrl(item.url),
    })),
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function buildOrganizationSchema(description?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'Organization'],
    '@id': `${SITE}/#organization`,
    name: SITE_NAME,
    url: SITE,
    logo: organizationLogoSchema(),
    image: SEO_OG_IMAGE.url,
    email: links.email,
    telephone: links.phone,
    areaServed: [
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
    description:
      description ??
      'Deutschsprachige Beratung für Offplan-Immobilien in Ägypten, Dubai und Saudi-Arabien — direkt vom Bauträger, vorbehaltlich Verfügbarkeit.',
    sameAs: [links.whatsapp, ...socialLinks.map((s) => s.href)],
    knowsLanguage: ['de', 'en', 'ar'],
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${SITE}/#local-sheikh-zayed`,
    name: `${SITE_NAME} — Sheikh Zayed`,
    parentOrganization: { '@id': `${SITE}/#organization` },
    url: SITE,
    telephone: links.phone,
    email: links.email,
    image: SEO_OG_IMAGE.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sheikh Zayed City',
      addressRegion: 'Giza',
      addressCountry: 'EG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.0276,
      longitude: 30.9726,
    },
    areaServed: {
      '@type': 'City',
      name: 'Sheikh Zayed City',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
  };
}

export function buildWebPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : canonicalUrl(opts.url),
    inLanguage: 'de-DE',
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': `${SITE}/#organization` },
  };
}

export function buildArticleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: canonicalUrl(opts.url),
    inLanguage: 'de-DE',
    datePublished: opts.datePublished ?? '2026-01-01',
    dateModified: opts.dateModified ?? '2026-05-16',
    author: publisherSchema(),
    publisher: publisherSchema(),
    mainEntityOfPage: canonicalUrl(opts.url),
  };
}

export function buildCityLandingSchema(opts: {
  city: string;
  region: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Place', 'TouristDestination'],
    name: opts.city,
    description: opts.description,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: opts.region,
    },
    url: canonicalUrl(opts.url),
  };
}

export function buildRealEstateListingSchema(opts: {
  name: string;
  description: string;
  url: string;
  addressLocality: string;
  price?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: opts.name,
    description: opts.description,
    url: canonicalUrl(opts.url),
    image: opts.image ?? SEO_OG_IMAGE.url,
    inLanguage: 'de-DE',
    offers: opts.price
      ? {
          '@type': 'Offer',
          price: opts.price,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/LimitedAvailability',
        }
      : undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: opts.addressLocality,
      addressCountry: 'EG',
    },
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: SITE_NAME,
    url: SITE,
    inLanguage: 'de-DE',
    publisher: { '@id': `${SITE}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE}/investieren?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** CollectionPage / hub pages (investieren, wissen, städte-hub) */
export function buildCollectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : canonicalUrl(opts.url),
    inLanguage: 'de-DE',
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': `${SITE}/#organization` },
  };
}

export function mergeSchemas(
  ...schemas: (Record<string, unknown> | null | undefined)[]
): Record<string, unknown>[] {
  return schemas.filter(Boolean) as Record<string, unknown>[];
}
