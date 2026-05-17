import { siteConfig } from '../config/site.config';
import { trackFormSubmit, trackLeadSuccess } from './tracking';

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildLeadEmailHtml(data: Record<string, string>) {
  const rows = Object.entries(data)
    .map(([k, v]) => `<p><strong>${escapeHtml(k)}:</strong> ${escapeHtml(v || '–')}</p>`)
    .join('');
  return `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif">${rows}</body></html>`;
}

export function initLeadForms() {
  document.querySelectorAll<HTMLFormElement>('.lead-form, #contact-form').forEach((form) => {
    if (form.dataset.leadInit) return;
    form.dataset.leadInit = 'true';

    const status = form.querySelector('.form-status') as HTMLElement | null;
    const submit = form.querySelector('[type="submit"]') as HTMLButtonElement | null;

    const setStatus = (msg: string, type: 'success' | 'error' | '') => {
      if (!status) return;
      status.textContent = msg;
      status.hidden = !msg;
      status.className = `form-status form-status--${type}`;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get('name') ?? '').trim();
      const email = String(fd.get('email') ?? '').trim();
      const phone = String(fd.get('phone') ?? '').trim();
      const consent = fd.get('consent');
      const message = String(fd.get('message') ?? '').trim();

      if (!name || !email) {
        setStatus('Bitte Name und E-Mail ausfüllen.', 'error');
        return;
      }
      if (form.classList.contains('lead-form') && !consent) {
        setStatus('Bitte Einwilligung bestätigen.', 'error');
        return;
      }

      const interests = fd.getAll('interest').join(', ');
      const payload: Record<string, string> = {
        Name: name,
        Email: email,
        Telefon: phone,
        Land: String(fd.get('country') ?? ''),
        Stadt: String(fd.get('city') ?? ''),
        Budget: String(fd.get('budget') ?? ''),
        Ziel: String(fd.get('goal') ?? ''),
        Interesse: interests,
        Zeithorizont: String(fd.get('timeline') ?? ''),
        Kontakt: String(fd.get('contactMethod') ?? ''),
        Nachricht: message,
        Quelle: form.dataset.source ?? 'contact',
        LeadMagnet: form.dataset.magnet ?? '',
      };

      if (submit) {
        submit.disabled = true;
        submit.textContent = 'Wird gesendet…';
      }
      setStatus('', '');

      try {
        const res = await fetch(siteConfig.formApi, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: { email: 'noreply@connect-crm.de', name: 'Tatari Website' },
            to: [{ email: 'senoralpha39@gmail.com', name: 'Admin' }],
            subject: `Lead: ${payload.Quelle} — ${name}`,
            message: `Neue Anfrage von ${name}`,
            htmlMessage: buildLeadEmailHtml(payload),
          }),
        });
        if (!res.ok) throw new Error('fail');
        trackFormSubmit(form.id || 'lead-form', payload.Quelle);
        trackLeadSuccess(payload.Quelle);
        const thankYou = '/danke';
        if (form.classList.contains('lead-form')) {
          window.location.href = `${thankYou}?source=${encodeURIComponent(payload.Quelle)}`;
          return;
        }
        setStatus('Vielen Dank! Ihre Nachricht wurde gesendet.', 'success');
        form.reset();
      } catch {
        setStatus('Senden fehlgeschlagen. Bitte WhatsApp oder Telefon nutzen.', 'error');
      } finally {
        if (submit) {
          submit.disabled = false;
          submit.textContent = form.id.startsWith('contact') ? 'Nachricht senden' : 'Anfrage senden';
        }
      }
    });
  });
}
