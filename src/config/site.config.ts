/** Central site configuration — override via PUBLIC_* env vars where noted */
export const siteConfig = {
  siteUrl: 'https://www.i-tatari.com',
  siteName: 'Tatari Investment',
  phone: import.meta.env.PUBLIC_WHATSAPP_PHONE ?? '+201111100179',
  phoneDisplay: import.meta.env.PUBLIC_PHONE_DISPLAY ?? '+20 11111 001 79',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL ?? 'hello@i-tatari.com',
  formApi:
    import.meta.env.PUBLIC_FORM_API ??
    'https://server.connect-crm.de/functions/v1/send-email',
  /** Default rate — editable; disclaimer required on all calculators */
  eurToEgp: Number(import.meta.env.PUBLIC_EUR_EGP_RATE ?? 62),
  calculatorDisclaimer:
    'Alle Euro-Werte sind Richtwerte. Wechselkurse, Gebühren, Verfügbarkeit und Zahlungspläne können sich ändern.',
  legalDisclaimer:
    'Hinweis: Immobilieninvestitionen sind mit Risiken verbunden. Renditen, Wertsteigerungen und Mieteinnahmen sind nicht garantiert. Preise, Wechselkurse, Verfügbarkeiten und Zahlungspläne können sich ändern. Alle Angaben dienen der Information und ersetzen keine rechtliche, steuerliche oder finanzielle Beratung.',
} as const;

export const whatsappTemplates = {
  westWind:
    'Hallo Tatari Investment, ich möchte Informationen zu West Wind und den Ratenplänen erhalten.',
  germany:
    'Hallo, ich möchte wissen, welche Immobilien in Ägypten für deutsche Investoren verfügbar sind.',
  euroCalc:
    'Hallo, ich möchte eine Euro-Kalkulation für ein Offplan Investment in Ägypten.',
  installments:
    'Hallo, ich interessiere mich für Immobilien auf Raten direkt vom Bauträger.',
} as const;

export function whatsappUrl(message: string): string {
  const phone = siteConfig.phone.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
