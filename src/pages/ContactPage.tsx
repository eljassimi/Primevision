import { Link } from 'react-router-dom'
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config/contact'
import { BRAND } from '../config/brand'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { usePageMeta } from '../hooks/usePageMeta'

export function ContactPage() {
  usePageMeta({
    title: 'Kontakt',
    description: `Kontaktieren Sie ${BRAND.name} per WhatsApp oder E-Mail – Support auf Deutsch.`,
    path: '/kontakt',
  })

  return (
    <div className="border-b border-line py-14 lg:py-20">
      <Container className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-signal">
          / Kontakt
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-paper">Kontakt</h1>
        <p className="mt-3 text-sm leading-relaxed text-mute">
          Schreiben Sie uns – wir melden uns auf Deutsch. Für Test und Bestellung
          ist WhatsApp meist der schnellste Weg.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="border border-line bg-panel p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-mute">
              E-Mail
            </p>
            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="mt-2 block text-sm text-signal hover:underline"
            >
              {CONTACT_CONFIG.email}
            </a>
          </div>
          <div className="border border-line bg-panel p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-mute">
              Telefon
            </p>
            <p className="mt-2 text-sm text-paper">{CONTACT_CONFIG.phoneDisplay}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton label="WhatsApp öffnen" />
          <Button
            href={getWhatsAppUrl(
              'Hallo PrimeVision, ich habe eine Frage zum Support.',
            )}
            variant="secondary"
          >
            Support anfragen
          </Button>
        </div>

        <p className="mt-6 text-sm text-mute">{CONTACT_CONFIG.supportHours}</p>

        <p className="mt-12 text-sm">
          <Link to="/" className="text-signal hover:underline">
            ← Zurück zur Startseite
          </Link>
        </p>
      </Container>
    </div>
  )
}
