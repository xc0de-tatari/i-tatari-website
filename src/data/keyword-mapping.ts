/**
 * Keyword → page mapping (from keywords.json / Excel)
 * Run: npm run sync:keywords then npm run build:mapping
 */
import keywordsJson from './keywords.json';

export interface KeywordMapping {
  keyword: string;
  primaryKeyword: string;
  cluster: string;
  intent: string;
  placement: string;
  pageTarget: string;
}

const pageRules: { pattern: RegExp; target: string }[] = [
  { pattern: /west wind|westwind|sheikh zayed/i, target: '/projekte/west-wind' },
  { pattern: /klinik|medical|clinic/i, target: '/kliniken-kaufen-aegypten' },
  { pattern: /büro|office|admin/i, target: '/bueros-kaufen-aegypten' },
  { pattern: /retail|pharmacy|apotheke|shop/i, target: '/retail-pharmacy-investment-aegypten' },
  { pattern: /offplan/i, target: '/offplan-immobilien-aegypten' },
  { pattern: /raten|zinsfrei|installment|anzahlung/i, target: '/immobilien-auf-raten-aegypten' },
  { pattern: /finanzierung|vorqualifiz|kredit/i, target: '/immobilienfinanzierung-aegypten-deutsche' },
  { pattern: /rendite|roi|mieteinnahmen/i, target: '/rendite-immobilien-aegypten' },
  { pattern: /direkt.*bauträger|developer direct/i, target: '/direkt-vom-bautraeger-aegypten' },
  { pattern: /tatari|due diligence|geprüft/i, target: '/warum-tatari-investment' },
  { pattern: /urlaub|besichtigung|reise/i, target: '/urlaub-und-investment-aegypten' },
  { pattern: /ägypten kaufen|immobilien.*ägypten/i, target: '/immobilien-kaufen-aegypten' },
  { pattern: /haus|wohnung|zweitwohn/i, target: '/haus-wohnung-auf-raten-aegypten-deutsche' },
  { pattern: /berlin|hamburg|münchen|stadt/i, target: '/immobilien-aegypten' },
];

function resolvePageTarget(keyword: string, cluster: string): string {
  for (const rule of pageRules) {
    if (rule.pattern.test(keyword) || rule.pattern.test(cluster)) return rule.target;
  }
  if (cluster.includes('18 Long-Tail')) return '/wissen';
  if (cluster.includes('12 West Wind')) return '/projekte/west-wind';
  return '/investieren';
}

const raw = keywordsJson as Array<{
  keyword: string;
  cluster: string;
  intent?: string;
  placement?: string;
  score?: number;
}>;

export const keywordMappings: KeywordMapping[] = raw.map((k) => ({
  keyword: k.keyword,
  primaryKeyword: k.keyword,
  cluster: k.cluster,
  intent: k.intent ?? '',
  placement: k.placement ?? '',
  pageTarget: resolvePageTarget(k.keyword, k.cluster),
}));

export function getKeywordsForPage(path: string, limit = 30): string[] {
  return keywordMappings
    .filter((m) => m.pageTarget === path)
    .sort((a, b) => a.keyword.length - b.keyword.length)
    .slice(0, limit)
    .map((m) => m.keyword);
}

export function getMappingStats() {
  const byPage = new Map<string, number>();
  for (const m of keywordMappings) {
    byPage.set(m.pageTarget, (byPage.get(m.pageTarget) ?? 0) + 1);
  }
  return Object.fromEntries(byPage);
}
