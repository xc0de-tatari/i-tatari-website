#!/usr/bin/env node
/** Generate src/data/articles.ts from title list */
import { writeFile } from 'node:fs/promises';
import { slugifyGerman } from '../src/lib/slug.ts';

const titles = [
  'Immobilien in Ägypten kaufen: Der komplette Guide für Deutsche',
  'Offplan Immobilien einfach erklärt',
  'Warum Ägypten für Investoren aus Deutschland interessant wird',
  'Immobilien auf Raten in Ägypten: So funktionieren Bauträger-Pläne',
  'Zinsfreie Raten beim Bauträger: Was deutsche Investoren wissen müssen',
  'West Wind Sheikh Zayed: Clinics, Offices und Retail im Überblick',
  'Warum Sheikh Zayed eine der spannendsten Lagen in Ägypten ist',
  'Kliniken kaufen in Ägypten: Medical Real Estate als Investment',
  'Büros kaufen in Ägypten: Chancen im Commercial Real Estate',
  'Retail-Flächen und Pharmacy Opportunities in Mixed-Use-Projekten',
  'Urlaub und Investment kombinieren: Immobilienreise nach Ägypten',
  'Wie Deutsche eine Immobilie in Ägypten kaufen können',
  'Welche Unterlagen braucht man für den Immobilienkauf in Ägypten?',
  'Offplan vs. Bestandsimmobilie: Was passt besser für Investoren?',
  'Warum frühe Projektphasen oft die spannendsten Preise bieten',
  'Dubai 2001 und Ägypten heute: Was Investoren aus Offplan-Märkten lernen können',
  'Monatliche Raten statt Sofortzahlung: Immobilienaufbau mit Struktur',
  'Warum direkte Bauträger-Projekte für Investoren interessant sind',
  'Was bedeutet EOI bei Offplan-Projekten?',
  'Wie funktioniert eine Reservierung bei Tatari Investment?',
  'Mieteinnahmen in Ägypten: Welche Faktoren zählen wirklich?',
  'Wertsteigerungspotenzial bei Offplan Immobilien',
  'Ägypten als Sachwert-Alternative für deutsche Anleger',
  'Euro, EGP und Wechselkurs: Was Investoren beachten sollten',
  'Warum Mixed-Use-Projekte Nachfrage aus mehreren Quellen erzeugen können',
  'Rofayda Hospital, Park Street und El Bostan: Warum Lage zählt',
  'Was macht ein gutes Commercial Real Estate Investment aus?',
  'Die größten Fehler beim Immobilienkauf im Ausland',
  'Wie Tatari Investment Projekte vor Ort prüft',
  'Warum lokale Due Diligence entscheidend ist',
  'New Cairo, Sheikh Zayed oder North Coast: Welche Lage passt zu dir?',
  'Immobilien in Ägypten für Auswanderer und Expats',
  'Ferienimmobilie in Ägypten kaufen: Lifestyle und Investment verbinden',
  'Ratenkauf für Deutsche: Was möglich ist und was geprüft wird',
  'Wie man eine Euro-Kalkulation für Ägypten-Immobilien versteht',
  'Warum Commercial Units kleinere Einstiegsmöglichkeiten bieten können',
  'Egypt Real Estate for GCC Investors',
  'Egypt Offplan Property for UAE Investors',
  'Egypt Property Investment for Saudi Investors',
  'How to Invest in Egyptian Real Estate from Abroad',
];

const categories = [
  'Offplan Immobilien',
  'Immobilien auf Raten',
  'Ägypten Investment',
  'Deutsche Investoren',
  'Rendite & Mieteinnahmen',
  'Developer Payment Plans',
  'West Wind',
  'Sheikh Zayed',
  'New Cairo',
  'North Coast',
  'Recht & Prozess',
  'Kaufprozess',
  'Besichtigungsreisen',
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const articles = titles.map((title, i) => {
  const slug = slugify(title);
  const category = categories[i % categories.length];
  const isEn = i >= 36;
  return {
    slug,
    title,
    category,
    lang: isEn ? 'en' : 'de',
    seo: {
      title: `${title} | Tatari Investment`,
      description: isEn
        ? `Expert guide: ${title}. Offplan Egypt, direct developer, Tatari due diligence.`
        : `${title} — Ratgeber von Tatari Investment. Claim-safe, praxisnah, für Investoren aus DACH.`,
    },
    intro: isEn
      ? `This guide explains ${title.toLowerCase()} for international investors — with clear risk disclosure and no guaranteed returns.`
      : `${title}: In diesem Ratgeber erklärt Tatari Investment die wichtigsten Punkte für deutschsprachige Anleger — transparent und ohne Renditeversprechen.`,
    sections: [
      {
        h2: isEn ? 'Overview' : 'Überblick',
        body: isEn
          ? 'Egypt offers urban growth, offplan pricing phases and developer-direct payment plans — each project requires individual due diligence.'
          : 'Ägypten bietet urbane Nachfrage, Offplan-Phasen und Bauträger-Raten — jedes Projekt braucht individuelle Prüfung.',
      },
      {
        h2: isEn ? 'What Tatari checks' : 'Was Tatari prüft',
        body: isEn
          ? 'Developer credentials, location, contract logic and payment milestones — before you reserve.'
          : 'Bauträger, Lage, Vertragslogik und Zahlungsmeilensteine — bevor Sie reservieren.',
      },
      {
        h2: isEn ? 'Next step' : 'Nächster Schritt',
        body: isEn
          ? 'Request availability, floor plans and a Euro calculation via consultation.'
          : 'Verfügbarkeit, Grundrisse und Euro-Kalkulation in der kostenlosen Erstberatung anfragen.',
      },
    ],
    faqs: [
      {
        q: isEn ? 'Are returns guaranteed?' : 'Ist Rendite garantiert?',
        a: isEn
          ? 'No. We provide scenarios only — no guarantee on rent or appreciation.'
          : 'Nein. Tatari liefert Szenarien — keine Garantie auf Miete oder Wertsteigerung.',
      },
    ],
    relatedLinks: [
      { href: '/immobilien-kaufen-aegypten', label: isEn ? 'Buy in Egypt' : 'Immobilien Ägypten' },
      { href: '/projekte/west-wind', label: 'West Wind' },
      { href: '/#kontakt', label: isEn ? 'Consultation' : 'Beratung' },
    ],
  };
});

const out = `/** Auto-generated — run: node scripts/generate-articles.mjs */\nexport const articleCategories = ${JSON.stringify(categories, null, 2)} as const;\n\nexport const articles = ${JSON.stringify(articles, null, 2)} as const;\n\nexport function getArticle(slug: string) {\n  return articles.find((a) => a.slug === slug);\n}\n`;

await writeFile(new URL('../src/data/articles.ts', import.meta.url), out);
console.log(`✓ ${articles.length} articles`);
