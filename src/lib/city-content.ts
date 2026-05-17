import type { CityData } from '../data/cities';

export interface CityUniqueBlock {
  h2: string;
  paragraphs: string[];
  bullets: string[];
  investorProfile: string;
}

const tierAH2 = [
  'Offplan in Ägypten — strukturiert vom heimischen Markt aus',
  'Bauträger-Raten statt undurchsichtiger Zwischenhändler',
  'Commercial & Mixed-Use als Ergänzung zur Kapitalanlage',
  'Direkt vom Bauträger — mit Prüfung statt Versprechen',
];

const tierBH2 = [
  'Warum viele Anleger über den deutschen Markt hinausblicken',
  'Planbare Raten während der Bauphase',
  'Sachwert in einem Wachstumsmarkt — mit klarem Risikoprofil',
  'Beratung auf Deutsch, Projekte in Ägypten',
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function getCityUniqueBlock(city: CityData): CityUniqueBlock {
  const h = hash(city.slug);

  const profiles = [
    `Typisches Profil aus ${city.name}: Berufstätige mit planbarem Budget, die Sachwert und Transparenz suchen.`,
    `Aus ${city.name} kommen oft Unternehmer, die Commercial Units diversifizieren möchten — mit Due Diligence.`,
    `Viele Anfragen aus ${city.name} betreffen Erstberatung zu Offplan und Ratenplan-Prüfung — unverbindlich.`,
    `Investoren aus ${city.name}${city.state ? ` (${city.state})` : ''} starten häufig mit einem Erstgespräch und optionaler Besichtigung.`,
  ];

  const bulletSets = [
    [
      'Offplan direkt vom Bauträger nach Projektprüfung',
      'Zinsfreie Bauträger-Raten nach Ratenplan-Prüfung — nicht zugesichert',
      'Euro-Kalkulation aller Meilensteine',
      'West Wind als Referenzprojekt in Sheikh Zayed',
    ],
    [
      'Greater Cairo & etablierte West-Lagen',
      'Remote-Prozess mit deutschsprachiger Begleitung',
      'Keine garantierte Rendite — Szenarien auf Anfrage',
      'Kostenlose Erstberatung',
    ],
    [
      'Mixed-Use: Medical, Admin, Retail',
      'Pins & Corners — West Wind Offplan',
      'Vorqualifizierung vor Reservierung',
      'Optional: Site Visit nach Ägypten',
    ],
    [
      'Bauträger-Finanzierungsmodell — keine Bankzusage',
      'Dokumenten- und Vertragsbegleitung',
      'Commercial Investment mit klarer Einheitentypologie',
      'After-Sales bis Übergabe',
    ],
  ];

  const paraSets = [
    [
      `Für Investoren aus ${city.name} zählt Struktur: Ziel klären, Budget prüfen, Projekt verstehen — erst dann reservieren.`,
      `Tatari begleitet deutschsprachig von der Erstberatung bis zur Vertragslogik mit dem Bauträger.`,
    ],
    [
      `Von ${city.name} aus sind viele Schritte remote möglich; eine Besichtigungsreise ist optional, aber oft hilfreich.`,
      `Unser Fokus liegt auf geprüften Offplan-Projekten — aktuell mit West Wind als konkretem Mixed-Use-Beispiel.`,
    ],
    [
      `${city.name} und Ägypten: Viele Kunden starten mit Verfügbarkeitsanfrage oder Ratenplan-Gespräch — vorbehaltlich Prüfung.`,
      `Wir kommunizieren Rendite nur als mögliches Szenario, nie als Garantie.`,
    ],
  ];

  return {
    h2: (h % 2 === 0 ? tierAH2 : tierBH2)[h % tierAH2.length],
    paragraphs: paraSets[h % paraSets.length],
    bullets: bulletSets[h % bulletSets.length],
    investorProfile: profiles[h % profiles.length],
  };
}
