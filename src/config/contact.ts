/**
 * Zentraler Kontakt. Zahlen und Links hier ändern – nicht in Komponenten.
 */
export const CONTACT_CONFIG = {
  email: 'kontakt@beispiel.de',
  phoneDisplay: '+49 XXX XXXXXXX',
  phoneHref: 'tel:+49XXXXXXXXXXX',
  whatsappNumber: '491701234567',
  whatsappMessage:
    'Hallo PrimeVision, ich interessiere mich für einen kostenlosen Test.',
  supportHours: 'Support auf Deutsch, werktags und am Wochenende',
  addressLines: [
    '[Firmenname]',
    '[Straße Hausnummer]',
    '[PLZ Ort]',
    'Deutschland',
  ],
} as const

export function getWhatsAppUrl(message?: string): string {
  const digits = CONTACT_CONFIG.whatsappNumber.replace(/\D/g, '')
  if (!digits) return '#kontakt'
  const text = encodeURIComponent(message ?? CONTACT_CONFIG.whatsappMessage)
  return `https://wa.me/${digits}?text=${text}`
}
