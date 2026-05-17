import keywordsJson from './keywords.json';

export interface KeywordEntry {
  id: number;
  cluster: string;
  keyword: string;
  intent: string;
  placement: string;
  priority: string;
  score: number;
  note?: string;
  sheet?: string;
}

/** All 997 unique keywords from Tatari_Investment_1000_Monster_Keywords.xlsx */
export const keywords: KeywordEntry[] = keywordsJson as KeywordEntry[];

export const keywordCount = keywords.length;

export const keywordClusters = [...new Set(keywords.map((k) => k.cluster))];

export function getKeywordsByCluster(cluster: string): KeywordEntry[] {
  return keywords.filter((k) => k.cluster === cluster);
}

export function getWestWindKeywords(): KeywordEntry[] {
  return getKeywordsByCluster('12 West Wind Project Keywords');
}

export function getLongTailKeywords(): KeywordEntry[] {
  return getKeywordsByCluster('18 Long-Tail SEO Fragen');
}

export function getHighPriorityKeywords(limit = 50): KeywordEntry[] {
  return [...keywords]
    .filter((k) => k.priority === 'High' || Number(k.score) >= 85)
    .sort((a, b) => Number(b.score) - Number(a.score))
    .slice(0, limit);
}

/** Meta keywords string (max ~20 for meta tag) */
export function getMetaKeywords(limit = 25): string[] {
  return getHighPriorityKeywords(limit).map((k) => k.keyword);
}

export function keywordToSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function searchKeywords(query: string, limit = 20): KeywordEntry[] {
  const q = query.toLowerCase();
  return keywords.filter((k) => k.keyword.toLowerCase().includes(q)).slice(0, limit);
}
