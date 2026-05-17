/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WHATSAPP_PHONE?: string;
  readonly PUBLIC_PHONE_DISPLAY?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_FORM_API?: string;
  readonly PUBLIC_EUR_EGP_RATE?: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_TIKTOK_PIXEL_ID?: string;
  readonly PUBLIC_LINKEDIN_PARTNER_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?: string;
  readonly PUBLIC_CALENDLY_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
