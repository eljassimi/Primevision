import type { FeatureItem, StepItem, TrustItem } from '../types'

export const trustItems: TrustItem[] = [
  {
    id: 'quality',
    label: 'HD & 4K',
    detail: 'Je nach Paket und Verbindung',
  },
  {
    id: 'stable',
    label: 'Stabile Streams',
    detail: 'Fokus auf zuverlässige Wiedergabe',
  },
  {
    id: 'support',
    label: 'Support DE',
    detail: 'Hilfe auf Deutsch',
  },
  {
    id: 'devices',
    label: 'Viele Geräte',
    detail: 'TV, Stick, Handy, PC',
  },
  {
    id: 'setup',
    label: 'Schnelle Einrichtung',
    detail: 'Schritt für Schritt begleitet',
  },
]

export const features: FeatureItem[] = [
  {
    id: 'quality',
    icon: 'quality',
    title: 'HD & 4K Streaming',
    description:
      'Klare Bildqualität – abhängig von Gerät, Bandbreite und verfügbaren Streams in Ihrem Paket.',
  },
  {
    id: 'channels',
    icon: 'channels',
    title: 'Senderauswahl',
    description:
      '[Anzahl] Sender gemäß gebuchtem Paket und verfügbaren Lizenzen. Details erhalten Sie vor dem Kauf.',
  },
  {
    id: 'vod',
    icon: 'vod',
    title: 'Filme & Serien',
    description:
      'VOD-Inhalte, soweit in Ihrem Paket enthalten – mit Fokus auf einfache Navigation.',
  },
  {
    id: 'devices',
    icon: 'devices',
    title: 'Smart-TV & mehr',
    description:
      'Nutzung auf gängigen Smart TVs, Streaming-Sticks, Smartphones, Tablets und am PC.',
  },
  {
    id: 'support',
    icon: 'support',
    title: 'Deutscher Support',
    description:
      'Fragen zur Einrichtung und Nutzung beantworten wir auf Deutsch – klar und ohne Fachchinesisch.',
  },
  {
    id: 'setup',
    icon: 'setup',
    title: 'Schnelle Einrichtung',
    description:
      'Zugang erhalten, App wählen, starten. Wir begleiten Sie bei den ersten Schritten.',
  },
]

export const steps: StepItem[] = [
  {
    id: 'choose',
    number: '01',
    title: 'Paket auswählen',
    description:
      'Basic, Premium oder Ultimate – passend zu Geräten und gewünschter Qualität.',
  },
  {
    id: 'access',
    number: '02',
    title: 'Zugang erhalten',
    description:
      'Nach der Bestellung bzw. dem Test senden wir Ihnen die Zugangsdaten und kurze Hinweise.',
  },
  {
    id: 'start',
    number: '03',
    title: 'App einrichten und starten',
    description:
      'Gemeinsam richten wir die passende App auf Ihrem Gerät ein – dann können Sie starten.',
  },
]
