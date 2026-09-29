import { Link } from 'react-router-dom'
import { BRAND } from '../../config/brand'
import { CONTACT_CONFIG } from '../../config/contact'
import { footerNav } from '../../data/navigation'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { WhatsAppButton } from '../ui/WhatsAppButton'

const COPYRIGHT_YEAR = 2026

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface" id="kontakt">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              {BRAND.description}
            </p>
            <div className="mt-5">
              <WhatsAppButton label="Per WhatsApp schreiben" />
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-signal">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 p-0 list-none">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-mute transition-colors hover:text-signal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-signal">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2 p-0 list-none text-sm text-mute">
              <li>
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="hover:text-signal"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </li>
              <li>{CONTACT_CONFIG.phoneDisplay}</li>
              <li>{CONTACT_CONFIG.supportHours}</li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-mute">
              Es werden nur Inhalte angeboten, für die die erforderlichen Rechte
              und Lizenzen vorliegen.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COPYRIGHT_YEAR} {BRAND.legalName}. Alle Rechte vorbehalten.
          </p>
          <p>Premium Streaming · Deutschland</p>
        </div>
      </Container>
    </footer>
  )
}
