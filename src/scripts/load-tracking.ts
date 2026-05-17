/** Load analytics/marketing scripts only after explicit consent (DSGVO). */

export type TrackingConfig = {
  gtmId?: string | null;
  ga4Id?: string | null;
  metaPixelId?: string | null;
  tiktokPixelId?: string | null;
  linkedInPartnerId?: string | null;
  googleAdsId?: string | null;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    ttq?: Record<string, unknown> & { page?: () => void; load?: (id: string) => void };
    TiktokAnalyticsObject?: string;
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: { (...args: unknown[]): void; q: unknown[][] };
  }
}

let analyticsLoaded = false;
let marketingLoaded = false;

function readConfig(): TrackingConfig {
  const el = document.getElementById('tracking-config');
  if (!el?.textContent) return {};
  try {
    return JSON.parse(el.textContent) as TrackingConfig;
  } catch {
    return {};
  }
}

function injectScript(src: string, async = true) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement('script');
  s.src = src;
  if (async) s.async = true;
  document.head.appendChild(s);
}

function loadGtm(gtmId: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${gtmId}`);
}

function loadGa4(ga4Id: string) {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args as unknown as Record<string, unknown>);
  }
  window.gtag = gtag;
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`);
  gtag('js', new Date());
  gtag('config', ga4Id, { anonymize_ip: true });
}

export function loadAnalyticsScripts() {
  if (analyticsLoaded || typeof document === 'undefined') return;
  const cfg = readConfig();
  if (cfg.gtmId) loadGtm(cfg.gtmId);
  else if (cfg.ga4Id) loadGa4(cfg.ga4Id);
  analyticsLoaded = true;
}

export function loadMarketingScripts() {
  if (marketingLoaded || typeof document === 'undefined') return;
  const cfg = readConfig();

  if (cfg.metaPixelId && !window.fbq) {
    const n: { (...args: unknown[]): void; queue: unknown[]; loaded?: boolean; version?: string } = function (
      ...args: unknown[]
    ) {
      if (n.queue) n.queue.push(args);
    };
    n.queue = [];
    n.loaded = true;
    n.version = '2.0';
    window.fbq = n as unknown as typeof window.fbq;
    window._fbq = n;
    injectScript('https://connect.facebook.net/en_US/fbevents.js');
    window.fbq!('init', cfg.metaPixelId);
    window.fbq!('track', 'PageView');
  }

  if (cfg.tiktokPixelId && !window.ttq) {
    const t = 'ttq';
    window.TiktokAnalyticsObject = t;
    const ttq: Record<string, unknown> & { _i?: Record<string, unknown[]> } = (window[t] =
      window[t] || []) as typeof window.ttq;
    ttq.methods = [
      'page',
      'track',
      'identify',
      'instances',
      'debug',
      'on',
      'off',
      'once',
      'ready',
      'alias',
      'group',
      'enableCookie',
      'disableCookie',
    ];
    injectScript(`https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${cfg.tiktokPixelId}&lib=${t}`);
    (ttq as { page?: () => void }).page?.();
  }

  if (cfg.linkedInPartnerId) {
    window._linkedin_partner_id = cfg.linkedInPartnerId;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(cfg.linkedInPartnerId);
    if (!window.lintrk) {
      window.lintrk = function (...args: unknown[]) {
        window.lintrk!.q.push(args);
      };
      window.lintrk.q = [];
    }
    injectScript('https://snap.licdn.com/li.lms-analytics/insight.min.js');
  }

  if (cfg.googleAdsId) {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${cfg.googleAdsId}`);
  }

  marketingLoaded = true;
}

export function applyConsentScripts(analytics: boolean, marketing: boolean) {
  if (analytics) loadAnalyticsScripts();
  if (marketing) loadMarketingScripts();
}
