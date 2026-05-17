/** Premium HTML notifications for sales — email-client safe (tables + inline CSS) */

const C = {
  gold: '#c5a059',
  goldLight: '#e8d5a8',
  goldDark: '#9a7d3f',
  bg: '#080808',
  card: '#121212',
  cardAlt: '#1a1a1a',
  border: '#2a2418',
  text: '#f4f4f5',
  muted: '#a1a1aa',
  accent: '#22c55e',
  link: '#e0c47a',
} as const;

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatTimestamp(): string {
  return new Date().toLocaleString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function displayValue(value: string | undefined): string {
  const v = (value ?? '').trim();
  return v ? escapeHtml(v) : '<span style="color:#71717a">–</span>';
}

function dataRow(label: string, value: string | undefined, opts?: { highlight?: boolean; full?: boolean }) {
  const v = (value ?? '').trim();
  if (!v && !opts?.highlight) return '';

  const bg = opts?.highlight ? C.cardAlt : C.card;
  const labelColor = opts?.highlight ? C.goldLight : C.muted;
  const valueStyle = opts?.full
    ? `color:${C.text};font-size:15px;line-height:1.6;white-space:pre-wrap`
    : `color:${C.text};font-size:15px;font-weight:600`;

  return `
    <tr>
      <td style="padding:0 0 10px 0">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${bg};border:1px solid ${C.border};border-radius:10px">
          <tr>
            <td style="padding:14px 18px">
              <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${labelColor}">${escapeHtml(label)}</p>
              <p style="margin:0;${valueStyle}">${displayValue(v)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function actionButton(href: string, label: string, primary = false): string {
  const bg = primary
    ? `background:linear-gradient(135deg,${C.goldLight},${C.goldDark})`
    : `background:${C.cardAlt};border:1px solid ${C.border}`;
  const color = primary ? '#0a0a0a' : C.goldLight;

  return `
    <td style="padding:6px 4px">
      <a href="${href}" style="display:inline-block;padding:12px 20px;${bg};color:${color};font-size:13px;font-weight:700;text-decoration:none;border-radius:8px;letter-spacing:0.02em">${label}</a>
    </td>`;
}

function emailShell(opts: {
  badge: string;
  headline: string;
  subline: string;
  source?: string;
  bodyRows: string;
  actions?: string;
  preheader: string;
}): string {
  const sourceBadge = opts.source
    ? `<span style="display:inline-block;margin-top:12px;padding:6px 14px;background:${C.cardAlt};border:1px solid ${C.border};border-radius:999px;font-size:12px;font-weight:600;color:${C.goldLight};letter-spacing:0.04em">Quelle: ${escapeHtml(opts.source)}</span>`
    : '';

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <title>${escapeHtml(opts.headline)}</title>
</head>
<body style="margin:0;padding:0;background:${C.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all">${escapeHtml(opts.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.bg};padding:32px 16px">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">
          <!-- Header -->
          <tr>
            <td style="padding:0 0 24px 0;text-align:center">
              <p style="margin:0 0 8px 0;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:${C.gold}">Tatari Investment</p>
              <table role="presentation" width="80" align="center" cellpadding="0" cellspacing="0">
                <tr><td style="height:3px;background:linear-gradient(90deg,transparent,${C.gold},transparent);border-radius:2px"></td></tr>
              </table>
            </td>
          </tr>
          <!-- Hero card -->
          <tr>
            <td style="padding:0 0 20px 0">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(145deg,${C.cardAlt} 0%,${C.card} 100%);border:1px solid ${C.border};border-radius:16px;overflow:hidden">
                <tr>
                  <td style="padding:28px 28px 24px;border-bottom:1px solid ${C.border}">
                    <span style="display:inline-block;padding:5px 12px;background:rgba(197,160,89,0.15);border:1px solid ${C.border};border-radius:6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${C.gold}">${escapeHtml(opts.badge)}</span>
                    <h1 style="margin:16px 0 8px 0;font-size:26px;font-weight:700;line-height:1.25;color:${C.text}">${escapeHtml(opts.headline)}</h1>
                    <p style="margin:0;font-size:15px;line-height:1.5;color:${C.muted}">${escapeHtml(opts.subline)}</p>
                    ${sourceBadge}
                  </td>
                </tr>
                ${opts.actions ? `<tr><td style="padding:20px 24px 24px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>${opts.actions}</tr></table></td></tr>` : ''}
              </table>
            </td>
          </tr>
          <!-- Data -->
          <tr>
            <td>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${opts.bodyRows}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:28px 0 0 0;text-align:center">
              <p style="margin:0 0 8px 0;font-size:12px;color:${C.muted}">${formatTimestamp()}</p>
              <p style="margin:0;font-size:12px;color:#52525b">
                <a href="https://www.i-tatari.com" style="color:${C.link};text-decoration:none">i-tatari.com</a>
                · Premium Real Estate · Ägypten · Dubai · Saudi
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Contact box on homepage */
export function buildContactNotificationHtml(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  const tel = data.phone.replace(/\s/g, '');
  const actions =
    actionButton(`mailto:${encodeURIComponent(data.email)}?subject=Re:%20Tatari%20Investment`, '✉️ E-Mail beantworten', true) +
    (tel ? actionButton(`tel:${tel}`, '📞 Anrufen') : '') +
    (tel ? actionButton(`https://wa.me/${tel.replace(/\D/g, '')}`, '💬 WhatsApp') : '');

  const rows =
    dataRow('Name', data.name, { highlight: true }) +
    dataRow('E-Mail', data.email, { highlight: true }) +
    dataRow('Telefon / WhatsApp', data.phone) +
    dataRow('Nachricht', data.message, { full: true });

  return emailShell({
    badge: 'Neue Kontaktanfrage',
    headline: data.name,
    subline: 'Jemand hat über die Kontaktbox auf der Website geschrieben — jetzt reagieren lohnt sich.',
    preheader: `Neue Kontaktanfrage von ${data.name}`,
    bodyRows: rows,
    actions,
  });
}

const LEAD_FIELD_ORDER: Array<{ key: string; label: string; highlight?: boolean; full?: boolean }> = [
  { key: 'Name', label: 'Name', highlight: true },
  { key: 'Email', label: 'E-Mail', highlight: true },
  { key: 'Telefon', label: 'Telefon / WhatsApp', highlight: true },
  { key: 'Budget', label: 'Budget (EUR)', highlight: true },
  { key: 'Ziel', label: 'Investment-Ziel' },
  { key: 'Interesse', label: 'Interesse' },
  { key: 'Zeithorizont', label: 'Zeithorizont' },
  { key: 'Land', label: 'Land' },
  { key: 'Stadt', label: 'Stadt' },
  { key: 'Kontakt', label: 'Bevorzugter Kontakt' },
  { key: 'Nachricht', label: 'Nachricht', full: true },
  { key: 'LeadMagnet', label: 'Lead-Magnet' },
];

/** Lead forms on landing pages */
export function buildLeadNotificationHtml(fields: Record<string, string>): string {
  const name = fields.Name ?? 'Unbekannt';
  const email = fields.Email ?? '';
  const phone = fields.Telefon ?? '';
  const source = fields.Quelle ?? 'website';
  const budget = fields.Budget ?? '';

  const tel = phone.replace(/\s/g, '');
  const actions =
    (email ? actionButton(`mailto:${encodeURIComponent(email)}?subject=Re:%20Ihre%20Anfrage%20bei%20Tatari%20Investment`, '✉️ E-Mail', true) : '') +
    (tel ? actionButton(`tel:${tel}`, '📞 Anrufen') : '') +
    (tel ? actionButton(`https://wa.me/${tel.replace(/\D/g, '')}`, '💬 WhatsApp') : '');

  const rows = LEAD_FIELD_ORDER.map(({ key, label, highlight, full }) =>
    dataRow(label, fields[key], { highlight, full })
  ).join('');

  const subline = budget
    ? `Qualifizierter Lead mit Budget ${budget} — bitte innerhalb von 24h kontaktieren.`
    : 'Neue Investment-Anfrage — bitte innerhalb von 24h kontaktieren.';

  return emailShell({
    badge: 'Neuer Investment-Lead',
    headline: name,
    subline,
    source,
    preheader: `Neuer Lead: ${name} · ${source}`,
    bodyRows: rows,
    actions: actions || undefined,
  });
}
