export const CONSENT_STORAGE_KEY = 'tatari_cookie_consent';
export const CONSENT_VERSION = 1;

export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = ConsentCategories & {
  version: number;
  timestamp: string;
};

export const defaultConsent: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function parseConsent(raw: string | null): StoredConsent | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as StoredConsent;
    if (data.version !== CONSENT_VERSION) return null;
    if (typeof data.analytics !== 'boolean' || typeof data.marketing !== 'boolean') return null;
    return { ...data, necessary: true };
  } catch {
    return null;
  }
}

export function saveConsent(categories: ConsentCategories): StoredConsent {
  const stored: StoredConsent = {
    ...categories,
    necessary: true,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  }
  return stored;
}

export function readConsent(): StoredConsent | null {
  if (typeof localStorage === 'undefined') return null;
  return parseConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
}

export function hasStoredConsent(): boolean {
  return readConsent() !== null;
}
