import {
  defaultConsent,
  readConsent,
  saveConsent,
  type ConsentCategories,
} from '../lib/cookie-consent';
import { applyConsentScripts } from './load-tracking';
import { initTrackingHandlers } from './tracking';

const HIDE_MS = 480;

function getBanner() {
  return document.getElementById('cookie-banner-root');
}

function showBanner(openSettings = false) {
  const root = getBanner();
  if (!root) return;
  root.hidden = false;
  root.classList.remove('is-leaving');
  root.setAttribute('aria-hidden', 'false');
  toggleSettings(openSettings);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => root.classList.add('is-visible'));
  });
}

function hideBanner() {
  const root = getBanner();
  if (!root) return;
  root.classList.remove('is-visible', 'is-settings');
  root.classList.add('is-leaving');
  root.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    root.hidden = true;
    root.classList.remove('is-leaving');
    toggleSettings(false);
  }, HIDE_MS);
}

function getCheckboxes() {
  return {
    analytics: document.getElementById('cookie-analytics') as HTMLInputElement | null,
    marketing: document.getElementById('cookie-marketing') as HTMLInputElement | null,
  };
}

function syncCheckboxes(consent: ConsentCategories) {
  const { analytics, marketing } = getCheckboxes();
  if (analytics) analytics.checked = consent.analytics;
  if (marketing) marketing.checked = consent.marketing;
}

function readCheckboxes(): ConsentCategories {
  const { analytics, marketing } = getCheckboxes();
  return {
    necessary: true,
    analytics: analytics?.checked ?? false,
    marketing: marketing?.checked ?? false,
  };
}

function applyConsent(consent: ConsentCategories) {
  saveConsent(consent);
  applyConsentScripts(consent.analytics, consent.marketing);
  if (consent.analytics || consent.marketing) {
    initTrackingHandlers();
  }
  window.dispatchEvent(new CustomEvent('tatari-consent-updated', { detail: consent }));
  hideBanner();
}

function toggleSettings(open: boolean) {
  const root = getBanner();
  const panel = document.getElementById('cookie-settings-panel');
  const btn = document.getElementById('cookie-settings-open');
  if (!root || !panel) return;

  root.classList.toggle('is-settings', open);
  panel.setAttribute('aria-hidden', open ? 'false' : 'true');
  btn?.setAttribute('aria-expanded', String(open));
}

function bindBanner() {
  document.getElementById('cookie-accept-all')?.addEventListener('click', () => {
    applyConsent({ necessary: true, analytics: true, marketing: true });
  });

  const reject = () => applyConsent({ ...defaultConsent });

  document.getElementById('cookie-reject')?.addEventListener('click', reject);
  document.getElementById('cookie-reject-settings')?.addEventListener('click', reject);

  document.getElementById('cookie-save-settings')?.addEventListener('click', () => {
    applyConsent(readCheckboxes());
  });

  document.getElementById('cookie-settings-open')?.addEventListener('click', () => {
    const root = getBanner();
    const isOpen = root?.classList.contains('is-settings') ?? false;
    toggleSettings(!isOpen);
    if (!isOpen) syncCheckboxes(readConsent() ?? { ...defaultConsent });
  });

  document.getElementById('cookie-settings-back')?.addEventListener('click', () => {
    toggleSettings(false);
  });

  document.querySelectorAll('[data-open-cookie-settings]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      showBanner(true);
      syncCheckboxes(readConsent() ?? { ...defaultConsent });
    });
  });
}

export function initCookieConsent() {
  bindBanner();

  const stored = readConsent();
  if (stored) {
    syncCheckboxes(stored);
    applyConsentScripts(stored.analytics, stored.marketing);
    if (stored.analytics || stored.marketing) initTrackingHandlers();
    return;
  }

  syncCheckboxes({ ...defaultConsent });
  showBanner(false);
}

declare global {
  interface Window {
    tatariOpenCookieSettings?: () => void;
  }
}

window.tatariOpenCookieSettings = () => {
  showBanner(true);
  syncCheckboxes(readConsent() ?? { ...defaultConsent });
};
