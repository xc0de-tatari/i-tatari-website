import type { CityData } from '../data/cities';
import { getKeywordsForPath } from './page-seo';

export interface CityUniqueBlock {
  h2: string;
  paragraphs: string[];
  bullets: string[];
  investorProfile: string;
}

const tierAH2 = [
  'Offplan-Immobilien Ägypten — strukturierter Einstieg für Kapitalanleger',
  'Immobilien auf Raten Ägypten — Bauträger-Modell nach Vorprüfung',
  'West Wind Sheikh Zayed — Commercial & Medical für anspruchsvolle Profile',
  'Direkt vom Bauträger — Offplan ohne undurchsichtige Zwischenhändler',
];

const tierBH2 = [
  'Ägypten als Ergänzung zur heimischen Kapitalanlage',
  'Zinsfreie Bauträger-Raten — was projektspezifisch möglich ist',
  'Mixed-Use Investment: Clinics, Offices, Retail in einem Konzept',
  'Euro-Kalkulation & deutschsprachige Due Diligence',
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function getCityUniqueBlock(city: CityData): CityUniqueBlock {
  const h = hash(city.slug);
  const path = `/immobilien-aegypten/${city.slug}`;
  const topKw = getKeywordsForPath(path, 3).map((k) => k.keyword);
  const kwPhrase = topKw[0] ?? `Immobilien Ägypten ${city.name}`;

  const profiles = [
    `Typisches Profil aus ${city.name}: Berufstätige mit 50–250k € Budget, die Sachwert und planbare Raten suchen — ohne Renditeversprechen.`,
    `Aus ${city.name} kommen oft Unternehmer und Freiberufler, die Commercial Units (Clinics/Offices) diversifizieren wollen.`,
    `Viele Anfragen aus ${city.name} betreffen Familien mit Zweitwohnsitz- oder Urlaubs-Investment — immer mit klarer Risikoaufklärung.`,
    `Investoren aus ${city.name} mit Fokus auf ${city.state ?? 'Deutschland'} nutzen häufig West Wind als konkretes Beispielprojekt in Sheikh Zayed.`,
  ];

  const bulletSets = [
    [
      `${kwPhrase} — Beratung auf Deutsch`,
      'Offplan direkt vom Bauträger nach Projektprüfung',
      'Zinsfreie Bauträger-Raten nach Ratenplan-Prüfung — nicht zugesichert',
      'West Wind: Clinics ab 24 m², Offices ab 79 m², Retail ab 37 m²',
    ],
    [
      'Sheikh Zayed & Greater Cairo — etablierte Nachfrageachsen',
      'Euro-Kalkulation aller Meilensteine',
      'Remote-Prozess mit optionaler Besichtigungsreise',
      'Keine garantierte Rendite — Szenarien auf Anfrage',
    ],
    [
      'Pins & Corners — West Wind an El Bostan Street',
      'Nähe Rofayda Hospital & Park Street',
      'Mixed-Use: Medical, Admin, Retail, Parking, EV, Concierge',
      'Vorqualifizierung in 24h Erstreaktion',
    ],
    [
      'Immobilienfinanzierung über Bauträger-Modell — keine Bankzusage',
      'Dokumentenbegleitung & Vertragslogik erklärt',
      'Commercial Investment Egypt — claim-safe',
      'Kostenlose Erstberatung — unverbindlich',
    ],
  ];

  const paraSets = [
    [
      `Für Investoren aus ${city.name} ist der Einstieg in Ägypten kein „Schnäppchen-Hype“, sondern ein strukturierter Prozess: Ziel klären, Budget prüfen, Projekt verstehen — erst dann reservieren.`,
      `Tatari Investment verbindet deutschsprachige Beratung mit lokaler Due Diligence. Beliebte Suchbegriffe aus ${city.name}: „${topKw[1] ?? 'Offplan Ägypten'}“ und „${topKw[2] ?? 'Immobilien auf Raten'}“.`,
    ],
    [
      `Wer in ${city.name} wohnt, profitiert von etablierten Flugverbindungen in den Großraum Kairo — ideal für Erstgespräch remote und gezielte Site Visits.`,
      `Unser Fokus liegt auf Offplan-Projekten mit dokumentierter Logik — aktuell besonders West Wind in Sheikh Zayed (El Bostan Street, nahe Rofayda Hospital).`,
    ],
    [
      `${city.name} und Ägypten: Viele Kunden starten mit einer unverbindlichen Verfügbarkeitsanfrage zu West Wind oder einem Ratenplan-Gespräch.`,
      `Wir kommunizieren transparent: Renditepotenzial ist möglich, aber nie garantiert. Finanzierung erfolgt über Bauträger-Raten nach persönlicher Prüfung.`,
    ],
  ];

  return {
    h2: (h % 2 === 0 ? tierAH2 : tierBH2)[h % tierAH2.length],
    paragraphs: paraSets[h % paraSets.length],
    bullets: bulletSets[h % bulletSets.length],
    investorProfile: profiles[h % profiles.length],
  };
}
