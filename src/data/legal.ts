import { BRAND } from '../config/brand'
import { CONTACT_CONFIG } from '../config/contact'
import type { LegalSection } from '../types'

export const impressumSections: LegalSection[] = [
  {
    heading: 'Angaben gemäß § 5 TMG',
    paragraphs: [
      ...CONTACT_CONFIG.addressLines,
      `E-Mail: ${CONTACT_CONFIG.email}`,
      `Telefon: ${CONTACT_CONFIG.phoneDisplay}`,
    ],
  },
  {
    heading: 'Verantwortlich für den Inhalt',
    paragraphs: [
      'Platzhalter: Name der verantwortlichen Person sowie vollständige Anschrift hier eintragen.',
    ],
  },
  {
    heading: 'Hinweis',
    paragraphs: [
      'Dieses Impressum ist ein Platzhalter und muss vor dem öffentlichen Betrieb durch rechtlich geprüfte Angaben ersetzt werden.',
    ],
  },
]

export const datenschutzSections: LegalSection[] = [
  {
    heading: '1. Verantwortliche Stelle',
    paragraphs: [
      `${BRAND.legalName} – Kontaktdaten siehe Impressum.`,
      'Dieses Dokument ist ein Platzhalter und ersetzt keine rechtsgültige Datenschutzerklärung.',
    ],
  },
  {
    heading: '2. Erhebung und Verarbeitung',
    paragraphs: [
      'Beim Besuch dieser Website können technisch notwendige Daten anfallen (z. B. IP-Adresse, Zeitpunkt, angeforderte Ressource). Soweit Analyse- oder Marketing-Tools eingesetzt werden, sind diese hier zu beschreiben und mit Rechtsgrundlage zu versehen.',
    ],
  },
  {
    heading: '3. Kontaktaufnahme',
    paragraphs: [
      'Wenn Sie uns per E-Mail oder WhatsApp kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage.',
    ],
  },
  {
    heading: '4. Ihre Rechte',
    paragraphs: [
      'Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dazu an die im Impressum genannten Kontaktdaten.',
    ],
  },
]

export const agbSections: LegalSection[] = [
  {
    heading: '1. Geltungsbereich',
    paragraphs: [
      `Diese AGB-Platzhalter gelten für die Nutzung der Angebote von ${BRAND.legalName}. Vor dem Go-Live durch eine rechtlich geprüfte Fassung ersetzen.`,
    ],
  },
  {
    heading: '2. Leistungsbeschreibung',
    paragraphs: [
      'Der genaue Leistungsumfang ergibt sich aus dem jeweils gebuchten Paket und der Auftragsbestätigung. Es werden nur Inhalte bereitgestellt, für die die erforderlichen Rechte vorliegen.',
    ],
  },
  {
    heading: '3. Vertragsschluss',
    paragraphs: [
      'Der Vertrag kommt durch Bestellung und Annahme bzw. Freischaltung zustande. Details zu Laufzeit, Verlängerung und Kündigung sind hier zu ergänzen.',
    ],
  },
  {
    heading: '4. Pflichten der Kundinnen und Kunden',
    paragraphs: [
      'Zugangsdaten sind vertraulich zu behandeln. Eine Nutzung außerhalb der vereinbarten Grenzen ist unzulässig.',
    ],
  },
]

export const widerrufSections: LegalSection[] = [
  {
    heading: 'Widerrufsrecht',
    paragraphs: [
      'Platzhalter: Für Verbraucherinnen und Verbraucher kann ein Widerrufsrecht bestehen. Formulieren Sie hier die gesetzlich erforderlichen Hinweise und fügen Sie das Muster-Widerrufsformular bei.',
    ],
  },
  {
    heading: 'Widerrufsfrist',
    paragraphs: [
      'In der Regel 14 Tage ab Vertragsschluss – bitte rechtlich prüfen und exakt formulieren, insbesondere bei digitalen Inhalten und möglichen Erlöschensgründen.',
    ],
  },
  {
    heading: 'Folgen des Widerrufs',
    paragraphs: [
      'Platzhalter zu Rückzahlung, Freischaltung und etwaigen Wertersatzregelungen ergänzen.',
    ],
  },
]
