/**
 * Analytics & ads — set PUBLIC_* in .env (never commit real IDs to git).
 * Scripts load only when the corresponding ID is defined.
 */
export const trackingConfig = {
  gtmId: import.meta.env.PUBLIC_GTM_ID as string | undefined,
  ga4Id: import.meta.env.PUBLIC_GA4_ID as string | undefined,
  metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID as string | undefined,
  tiktokPixelId: import.meta.env.PUBLIC_TIKTOK_PIXEL_ID as string | undefined,
  linkedInPartnerId: import.meta.env.PUBLIC_LINKEDIN_PARTNER_ID as string | undefined,
  googleAdsId: import.meta.env.PUBLIC_GOOGLE_ADS_ID as string | undefined,
  googleAdsConversionLabel: import.meta.env.PUBLIC_GOOGLE_ADS_CONVERSION_LABEL as string | undefined,
  calendlyUrl: import.meta.env.PUBLIC_CALENDLY_URL as string | undefined,
} as const;

export function hasTracking(): boolean {
  const c = trackingConfig;
  return Boolean(
    c.gtmId ||
      c.ga4Id ||
      c.metaPixelId ||
      c.tiktokPixelId ||
      c.linkedInPartnerId ||
      c.googleAdsId
  );
}
