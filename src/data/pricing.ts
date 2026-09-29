import type { PricingPlan } from '../types'

/**
 * Preise und Pakete hier anpassen.
 * Bestellung erfolgt ausschließlich per WhatsApp.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Für ein Zuhause, einen Bildschirm',
    price: '49 €',
    period: 'Jahr',
    priceNote: '≈ 4,08 € pro Monat',
    devices: '1 Gerät gleichzeitig',
    quality: 'Full HD',
    features: [
      '1 Gerät pro Zugang',
      'Qualität in Full HD',
      'Senderpaket gemäß gebuchtem Angebot',
      'Unterstützung gängiger Player-Apps',
      'Technischer Basis-Support auf Deutsch',
    ],
    accent: 'standard',
    whatsappCtaLabel: 'Per WhatsApp bestellen',
    whatsappOrderMessage:
      'Hallo! Ich möchte den Standard-Plan für 49 € pro Jahr bestellen.',
  },
  {
    id: 'vip',
    name: 'VIP Unlimited',
    description: 'Zwei Bildschirme, keine Kompromisse',
    price: '79 €',
    period: 'Jahr',
    priceNote: '≈ 6,58 € pro Monat · +30 € für das doppelte Erlebnis',
    devices: '2 Geräte gleichzeitig',
    quality: 'HD & 4K*',
    features: [
      '2 Geräte gleichzeitig',
      'Priorisierter 4K-Zugang, soweit verfügbar*',
      'Stabilere Streams bei Live-Übertragungen',
      'Erweiterte Senderauswahl gemäß VIP-Paket',
      'Individuelle Senderliste auf Wunsch',
      'Priorisierter WhatsApp-Support, 365 Tage',
    ],
    highlighted: true,
    badge: 'Empfohlen',
    accent: 'vip',
    whatsappCtaLabel: 'Per WhatsApp bestellen',
    whatsappOrderMessage:
      'Hallo! Ich möchte den VIP Unlimited-Plan für 79 € pro Jahr bestellen.',
  },
]

export const pricingDisclaimer =
  '* 4K-Wiedergabe hängt von Ihrem Gerät, Ihrer Internetverbindung und den verfügbaren Streams ab. Inhaltsumfang richtet sich nach dem gebuchten Paket und den verfügbaren Lizenzen. Bestellung und Zahlung ausschließlich über WhatsApp.'

/** Baut eine klare Bestellnachricht inkl. Preis – Fallback, falls Message fehlt. */
export function buildPlanWhatsAppMessage(plan: PricingPlan): string {
  if (plan.whatsappOrderMessage.trim()) {
    return plan.whatsappOrderMessage
  }
  return `Hallo! Ich möchte den ${plan.name}-Plan für ${plan.price} pro ${plan.period} bestellen.`
}
