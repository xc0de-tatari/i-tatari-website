import { links } from '../data/links';
import { initLeadForms } from './forms';
import { initTrackingHandlers } from './tracking';

function initMobileNav() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.mobile-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initFaq() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-question');
    btn?.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function formatEuro(n: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n);
}

function initCalculator() {
  const price = document.getElementById('price') as HTMLInputElement | null;
  const down = document.getElementById('down') as HTMLInputElement | null;
  const years = document.getElementById('years') as HTMLInputElement | null;
  const roi = document.getElementById('roi') as HTMLInputElement | null;

  if (!price || !down || !years || !roi) return;

  const els = {
    priceVal: document.getElementById('price-val'),
    downVal: document.getElementById('down-val'),
    yearsVal: document.getElementById('years-val'),
    roiVal: document.getElementById('roi-val'),
    yearsLabel: document.getElementById('years-label'),
    yearsSub: document.getElementById('years-sub'),
    totalReturn: document.getElementById('total-return'),
    monthlyRate: document.getElementById('monthly-rate'),
    monthlyReturn: document.getElementById('monthly-return'),
    yearlyReturn: document.getElementById('yearly-return'),
  };

  function update() {
    const p = Number(price.value);
    const d = Number(down.value);
    const y = Number(years.value);
    const r = Number(roi.value) / 100;

    const remaining = p - d;
    const monthlyRate = y > 0 ? remaining / (y * 12) : 0;
    const yearlyRent = p * r;
    const totalRent = yearlyRent * y;
    const monthlyRent = yearlyRent / 12;

    els.priceVal!.textContent = formatEuro(p);
    els.downVal!.textContent = formatEuro(d);
    els.yearsVal!.textContent = String(y);
    els.roiVal!.textContent = `${roi.value}%`;
    els.yearsLabel!.textContent = String(y);
    els.yearsSub!.textContent = String(y);
    els.totalReturn!.textContent = formatEuro(totalRent);
    els.monthlyRate!.textContent = formatEuro(monthlyRate);
    els.monthlyReturn!.textContent = formatEuro(monthlyRent);
    els.yearlyReturn!.textContent = formatEuro(yearlyRent);
  }

  [price, down, years, roi].forEach((input) => input.addEventListener('input', update));
  update();
}

function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initLogoScrollTop() {
  document.querySelectorAll('[data-scroll-top]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const href = (el as HTMLAnchorElement).getAttribute('href');
      if (href === '/' || href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function buildContactEmailHtml(data: { name: string; email: string; phone: string; message: string }) {
  const now = new Date().toLocaleString('de-DE', { dateStyle: 'full', timeStyle: 'short' });
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family:Arial,sans-serif;line-height:1.6;color:#333">
        <div style="max-width:600px;margin:0 auto;padding:20px">
          <h2 style="color:#C9A961">Neue Kontaktanfrage – Tatari Investments</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(data.phone || '–')}</p>
          <p><strong>Nachricht:</strong></p>
          <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0" />
          <p style="font-size:12px;color:#888">Gesendet am ${now} über i-tatari.com</p>
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function initContactForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit') as HTMLButtonElement | null;
  if (!form || !status || !submitBtn) return;

  function setStatus(message: string, type: 'success' | 'error' | '') {
    status.textContent = message;
    status.hidden = !message;
    status.className = `form-status form-status--${type}`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('Bitte füllen Sie alle Pflichtfelder aus.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet…';
    setStatus('', '');

    const htmlMessage = buildContactEmailHtml({ name, email, phone, message });

    try {
      const res = await fetch(links.formApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: { email: 'noreply@connect-crm.de', name: 'CRM System' },
          to: [{ email: 'senoralpha39@gmail.com', name: 'Admin' }],
          subject: 'Neue Kontaktanfrage – Tatari Investments',
          message: `Kontaktanfrage von ${name} (${email})`,
          htmlMessage,
        }),
      });

      if (!res.ok) throw new Error('send failed');

      setStatus('Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.', 'success');
      form.reset();
    } catch {
      setStatus('Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Nachricht senden';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFaq();
  initCalculator();
  initScrollTop();
  initLogoScrollTop();
  initHeaderScroll();
  initContactForm();
  initLeadForms();
  initTrackingHandlers();
});
