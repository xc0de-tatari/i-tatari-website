import type { Locale } from '../index';
import * as deSite from '../../data/site';
import { enSite } from './en-site';
import { developers } from '../../data/site';

export function getSiteContent(locale: Locale) {
  if (locale === 'en') {
    return { ...enSite, developers };
  }
  return {
    heroStats: deSite.heroStats,
    trustStats: deSite.trustStats,
    benefits: deSite.benefits,
    cities: deSite.cities,
    properties: deSite.properties,
    testimonials: deSite.testimonials,
    comparisonRows: deSite.comparisonRows,
    securityItems: deSite.securityItems,
    newsItems: deSite.newsItems,
    locations: deSite.locations,
    steps: deSite.steps,
    faqs: deSite.faqs,
    developers: deSite.developers,
  };
}

export function getPageSections(locale: Locale) {
  return locale === 'en'
    ? {
        kontakt: '/en/#contact',
        contact: '/en/#contact',
        rechner: '/en/#calculator',
        calculator: '/en/#calculator',
        maerkte: '/en/#markets',
        markets: '/en/#markets',
        vorteile: '/en/#benefits',
        benefits: '/en/#benefits',
        standorte: '/en/#locations',
        locations: '/en/#locations',
      }
    : {
        kontakt: '/#kontakt',
        contact: '/#kontakt',
        rechner: '/#rechner',
        calculator: '/#rechner',
        maerkte: '/#maerkte',
        markets: '/#maerkte',
        vorteile: '/#vorteile',
        benefits: '/#vorteile',
        standorte: '/#standorte',
        locations: '/#standorte',
      };
}

export { getUi, marketCardsEn } from './ui';

export function cityCardCta(
  locale: Locale,
  city: { name: string; href?: string },
  fallback: string
): string {
  const h = city.href ?? '';
  if (locale === 'en') {
    if (h.includes('dubai')) return 'Explore Dubai →';
    if (h.includes('saudi')) return 'Explore Saudi Arabia →';
    if (h.includes('west-wind')) return 'View West Wind →';
    return `Learn more →`;
  }
  if (h.includes('dubai')) return 'Immobilien Dubai →';
  if (h.includes('saudi')) return 'Saudi-Arabien →';
  if (city.name === 'Sheikh Zayed') return 'West Wind ansehen →';
  return `Mehr über ${city.name.split(' ')[0]} →`;
}

export function locationCardCta(locale: Locale, href?: string): string {
  if (!href) return locale === 'en' ? 'Learn more' : 'Mehr erfahren';
  if (href.includes('west-wind')) return locale === 'en' ? 'View West Wind' : 'West Wind ansehen';
  if (href.includes('dubai')) return locale === 'en' ? 'Explore Dubai' : 'Dubai entdecken';
  if (href.includes('saudi')) return locale === 'en' ? 'Explore Saudi Arabia' : 'Saudi-Arabien entdecken';
  return locale === 'en' ? 'Learn more' : 'Mehr erfahren';
}
