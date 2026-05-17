/** Client-side analytics events — no-op until GTM/GA4 dataLayer exists */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (...args: unknown[]) => void };
  }
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;

  const payload = { event, ...params, timestamp: Date.now() };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
}

export function trackWhatsAppClick(location: string, template?: string) {
  trackEvent('whatsapp_click', { location, template: template ?? 'default' });
}

export function trackFormSubmit(formId: string, source: string) {
  trackEvent('form_submit', { form_id: formId, source });
}

export function trackLeadSuccess(source: string) {
  trackEvent('generate_lead', { source, method: 'form' });
}

export function initTrackingHandlers() {
  document.querySelectorAll('a[href*="wa.me"], a.wa-btn, a.whatsapp-btn').forEach((el) => {
    el.addEventListener('click', () => {
      const location =
        el.getAttribute('data-track-location') ||
        el.closest('section')?.id ||
        window.location.pathname;
      trackWhatsAppClick(location);
    });
  });
}
