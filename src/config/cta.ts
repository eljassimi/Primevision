import { getWhatsAppUrl } from './contact'

/**
 * CTA-Ziele zentral steuern.
 * Zahlungs-Integrationen später hier anbinden.
 */
export const CTA_CONFIG = {
  trial: {
    label: 'Kostenlos testen',
    href: getWhatsAppUrl(
      'Hallo PrimeVision, ich möchte den kostenlosen Test starten.',
    ),
  },
  order: {
    label: 'Jetzt bestellen',
    href: getWhatsAppUrl(
      'Hallo PrimeVision, ich möchte ein Paket bestellen.',
    ),
  },
  pricing: {
    label: 'Pakete ansehen',
    href: '#pakete',
  },
  contact: {
    label: 'Kontakt aufnehmen',
    href: '#kontakt',
  },
} as const
