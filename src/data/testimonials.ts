import type { TestimonialItem } from '../types'

/**
 * Platzhalter – durch echte, freigegebene Kundenstimmen ersetzen.
 * Keine erfundenen Bewertungen als echt darstellen.
 */
export const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    quote:
      'Beispielbewertung – echte Kundenstimme hier einsetzen. Kurzer Eindruck zu Bildqualität, Einrichtung oder Support.',
    attribution: 'Name, Ort — Paket',
    isPlaceholder: true,
  },
  {
    id: 't2',
    quote:
      'Beispielbewertung – echte Kundenstimme hier einsetzen. Bitte nur mit Einwilligung der Kundin oder des Kunden veröffentlichen.',
    attribution: 'Name, Ort — Paket',
    isPlaceholder: true,
  },
  {
    id: 't3',
    quote:
      'Beispielbewertung – echte Kundenstimme hier einsetzen. Neutral formulieren, ohne übertriebene Versprechen.',
    attribution: 'Name, Ort — Paket',
    isPlaceholder: true,
  },
]
