export type NavItem = {
  label: string
  href: string
}

export type PricingPlan = {
  id: string
  name: string
  description: string
  /** Anzeigepreis, z. B. "49 €" */
  price: string
  /** Abrechnungszeitraum, z. B. "Jahr" */
  period: string
  /** Zusatzzeile unter dem Preis */
  priceNote?: string
  devices: string
  quality: string
  features: string[]
  highlighted?: boolean
  badge?: string
  /** Visuelles Theme der Karte */
  accent: 'standard' | 'vip'
  /** Label für WhatsApp-Bestellung */
  whatsappCtaLabel: string
  /**
   * Vorgefertigter WhatsApp-Text inkl. Paketname und Preis.
   * Wird 1:1 in die Chat-Nachricht übernommen.
   */
  whatsappOrderMessage: string
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type DeviceItem = {
  id: string
  name: string
  category: string
}

export type FeatureItem = {
  id: string
  title: string
  description: string
  icon: 'quality' | 'channels' | 'vod' | 'devices' | 'support' | 'setup'
}

export type TrustItem = {
  id: string
  label: string
  detail: string
}

export type StepItem = {
  id: string
  number: string
  title: string
  description: string
}

export type TestimonialItem = {
  id: string
  quote: string
  attribution: string
  isPlaceholder: boolean
}

export type LegalSection = {
  heading: string
  paragraphs: string[]
}
