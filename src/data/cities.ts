import { slugifyGerman } from '../lib/slug';

export interface CityData {
  name: string;
  slug: string;
  state?: string;
  introVariant: number;
  localAngle: string;
}

const cityNames = [
  'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf',
  'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg',
  'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe', 'Mannheim', 'Augsburg',
  'Wiesbaden', 'Gelsenkirchen', 'Mönchengladbach', 'Braunschweig', 'Kiel', 'Aachen', 'Chemnitz',
  'Halle', 'Magdeburg', 'Freiburg', 'Krefeld', 'Lübeck', 'Oberhausen', 'Erfurt', 'Mainz',
  'Rostock', 'Kassel', 'Hagen', 'Hamm', 'Saarbrücken', 'Mülheim an der Ruhr', 'Potsdam',
  'Ludwigshafen', 'Oldenburg', 'Leverkusen', 'Osnabrück', 'Solingen', 'Heidelberg', 'Herne',
  'Neuss', 'Darmstadt', 'Paderborn', 'Regensburg', 'Ingolstadt', 'Würzburg', 'Fürth', 'Wolfsburg',
  'Offenbach', 'Ulm', 'Heilbronn', 'Pforzheim', 'Göttingen', 'Bottrop', 'Trier', 'Reutlingen',
  'Koblenz', 'Bremerhaven', 'Bergisch Gladbach', 'Jena', 'Remscheid', 'Erlangen', 'Moers',
  'Siegen', 'Hildesheim', 'Salzgitter',
] as const;

const stateMap: Record<string, string> = {
  Berlin: 'Berlin',
  Hamburg: 'Hamburg',
  München: 'Bayern',
  Köln: 'Nordrhein-Westfalen',
  'Frankfurt am Main': 'Hessen',
  Stuttgart: 'Baden-Württemberg',
  Düsseldorf: 'Nordrhein-Westfalen',
  Dortmund: 'Nordrhein-Westfalen',
  Essen: 'Nordrhein-Westfalen',
  Leipzig: 'Sachsen',
  Bremen: 'Bremen',
  Dresden: 'Sachsen',
  Hannover: 'Niedersachsen',
  Nürnberg: 'Bayern',
  Potsdam: 'Brandenburg',
  Kiel: 'Schleswig-Holstein',
  Saarbrücken: 'Saarland',
  'Mülheim an der Ruhr': 'Nordrhein-Westfalen',
};

const localAngles = [
  (c: string) =>
    `Von ${c} aus erreichen Sie den Großraum Kairo oft mit einem Direktflug — ideal für Erstberatung remote und gezielte Besichtigungsreisen.`,
  (c: string) =>
    `Investoren aus ${c} schätzen Tatari, weil Beratung, Vertragslogik und Euro-Kalkulation auf Deutsch erfolgen — ohne Ägypten allein navigieren zu müssen.`,
  (c: string) =>
    `In ${c} stehen viele Anleger vor dem gleichen Thema: Kapital soll arbeiten, aber nicht nur im heimischen Markt warten. Ägypten kann eine strukturierte Ergänzung sein.`,
  (c: string) =>
    `Aus ${c} investieren heißt: klare Vorprüfung, planbare Bauträger-Raten und ein Sachwert, den Sie besuchen und verstehen können.`,
  (c: string) =>
    `${c} bietet starke Wirtschaftskraft — viele unserer Kunden nutzen genau dieses Einkommen für einen diversifizierten Immobilien-Einstieg in Ägypten.`,
  (c: string) =>
    `Ob Berufstätige oder Unternehmer aus ${c}: Der Fokus liegt auf Offplan-Projekten mit dokumentierter Projektlogik, nicht auf schnellen Versprechen.`,
  (c: string) =>
    `Von ${c} nach Sheikh Zayed: Tatari begleitet von der Erstberatung bis zur Reservierung — vorbehaltlich Verfügbarkeit und Prüfung.`,
  (c: string) =>
    `Deutschsprachige Investoren aus ${c} erhalten bei Tatari eine Euro-Kalkulation aller Meilensteine — transparent statt undurchsichtig.`,
  (c: string) =>
    `${c} und Ägypten verbinden Flugverbindungen und eine wachsende Community deutscher Käufer im Offplan-Segment.`,
  (c: string) =>
    `Wer in ${c} bleibt, kann trotzdem strukturiert in Ägypten positionieren: Remote-Beratung, Due Diligence und optional Site Visit.`,
  (c: string) =>
    `Aus ${c} ist West Wind in Sheikh Zayed besonders relevant — Commercial, Medical und Retail in einer etablierten Lage.`,
  (c: string) =>
    `Investoren aus ${c} fragen uns oft nach zinsfreien Bauträger-Raten — wir prüfen, was projektspezifisch möglich ist, ohne Garantie.`,
  (c: string) =>
    `${c}: Sachwert statt Stillstand — mit Tatari als deutschsprachigem Begleiter für Offplan in Ägypten.`,
  (c: string) =>
    `Von ${c} aus starten viele mit einem kostenlosen Erstgespräch — Budget, Ziel und Ratenplan-Prüfung in einem strukturierten Prozess.`,
  (c: string) =>
    `Die Distanz von ${c} nach Ägypten ist kein Hindernis, wenn Prozess, Sprache und Projektprüfung stimmen — genau dafür steht Tatari.`,
];

export function getCityIntro(city: CityData): string {
  const variants = [
    `Als Investor aus ${city.name} suchen Sie vermutlich mehr als ein Sparbuch: einen Sachwert in einem Wachstumsmarkt, den Sie nachvollziehen können. Tatari begleitet deutschsprachige Käufer bei geprüften Offplan-Projekten in Ägypten — mit persönlicher Vorqualifizierung und Euro-Kalkulation.`,
    `Von ${city.name} aus investieren heißt nicht, blind zu kaufen. Es heißt: strukturiert prüfen, Ratenplan verstehen und direkt mit dem Bauträger vertraglich arbeiten — vorbehaltlich Verfügbarkeit.`,
    `Investoren aus ${city.name} nutzen Tatari Investment, um Offplan-Immobilien in Ägypten zugänglich zu machen: deutschsprachige Beratung, lokale Due Diligence und transparente Projektunterlagen.`,
    `Ob Sie in ${city.name} wohnen oder dort Ihr Einkommen erzielen: Ein Einstieg in Ägypten kann eine Ergänzung zur heimischen Kapitalanlage sein — mit klarem Risikoprofil und ohne Renditegarantie.`,
    `Aus ${city.name} in einen Wachstumsmarkt zu investieren erfordert Vertrauen und Struktur. Tatari liefert beides: geprüfte Projekte, Bauträger-Direktzugang und Begleitung auf Deutsch.`,
  ];
  return variants[city.introVariant % variants.length];
}

function buildCities(): CityData[] {
  return cityNames.map((name, i) => ({
    name,
    slug: slugifyGerman(name),
    state: stateMap[name],
    introVariant: i % 5,
    localAngle: localAngles[i % localAngles.length](name),
  }));
}

export const germanCities = buildCities();

export function getCityBySlug(slug: string): CityData | undefined {
  return germanCities.find((c) => c.slug === slug);
}

export const defaultProcessSteps = [
  'Beratung auf Deutsch — Erstgespräch kostenlos',
  'Budget & Ziel klären — persönliche Vorqualifizierung',
  'Projektvorschläge erhalten — z. B. West Wind, Commercial Units',
  'Ratenplan prüfen — Bauträger-Modell nach Prüfung',
  'EOI / Reservierung — vorbehaltlich Verfügbarkeit',
  'Vertrag direkt mit Bauträger — transparente Meilensteine',
  'After-Sales Support — Tatari begleitet bis Übergabe',
];

export function cityMeta(city: CityData) {
  const stateBit = city.state ? ` (${city.state})` : '';
  return {
    title: `Immobilien Ägypten von ${city.name}${stateBit} | Offplan & Raten | Tatari`,
    description: `Von ${city.name} in Offplan-Immobilien in Ägypten investieren: Beratung auf Deutsch, Bauträger-Raten nach Prüfung — Tatari Investment.`,
    headline: `Immobilien in Ägypten kaufen aus ${city.name} — Offplan & zinsfreie Bauträger-Raten`,
  };
}

export function cityFaqs(city: CityData) {
  return [
    {
      q: `Kann ich von ${city.name} aus eine Immobilie in Ägypten kaufen?`,
      a: 'Ja, mit strukturierter Beratung, Dokumentenprüfung und remote Prozess. Tatari begleitet deutschsprachige Investoren — vorbehaltlich Verfügbarkeit.',
    },
    {
      q: 'Sind zinsfreie Raten garantiert?',
      a: 'Nein. Zinsfreie Bauträger-Raten sind projektspezifisch und nach Ratenplan-Prüfung möglich — nicht zugesichert.',
    },
    {
      q: `Muss ich von ${city.name} nach Ägypten fliegen?`,
      a: 'Nicht zwingend für den Start. Viele Schritte laufen remote; eine Besichtigungsreise ist optional empfohlen.',
    },
    {
      q: 'Was ist West Wind?',
      a: 'Ein Mixed-Use-Offplan-Projekt in Sheikh Zayed mit Clinics, Offices und Retail — Details auf der Projektseite.',
    },
  ];
}
