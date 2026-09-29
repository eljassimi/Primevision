import { BRAND } from './brand'

/** Produktions-Domain anpassen (ohne trailing slash). */
export const SITE_URL = 'https://www.beispiel.de'

export const SEO_CONFIG = {
  siteUrl: SITE_URL,
  defaultTitle: `${BRAND.name} | Premium IPTV Deutschland`,
  titleTemplate: `%s | ${BRAND.name}`,
  defaultDescription:
    'PrimeVision – Premium-Streaming und IPTV für Deutschland. Klare Pakete, HD & 4K, schnelle Aktivierung und Support auf Deutsch.',
  locale: 'de_DE',
  language: 'de',
  twitterCard: 'summary_large_image' as const,
  ogImage: '/og-image.svg',
} as const
