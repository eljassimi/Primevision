import heroMain from '../../assets/hero-main.png'
import { BRAND } from '../../config/brand'
import { CTA_CONFIG } from '../../config/cta'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const trustPoints = [
  'HD & 4K Qualität',
  'Schnelle Aktivierung',
  'Deutscher Support',
  'Flexible Jahresabos',
]

export function Hero() {
  return (
    <section
      id="start"
      className="relative min-h-[min(78vh,48rem)] overflow-hidden pb-14 pt-12 lg:pb-20 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Bundled lifestyle photo as darkened full-bleed backdrop */}
        <div
          className="hero-photo absolute inset-0"
          style={{ backgroundImage: `url(${heroMain})` }}
        />

        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/40" />

        <div className="absolute right-[12%] top-[22%] h-72 w-72 rounded-full bg-signal/[0.1] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-signal/[0.05] blur-3xl" />

        <div className="hero-grid absolute inset-0 opacity-35" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl animate-fade-up text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-signal drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            Premium Streaming · Deutschland
          </p>
          <h1
            id="hero-heading"
            className="font-display text-balance text-3xl font-bold leading-[1.1] tracking-tight text-paper drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:text-4xl lg:text-[2.75rem]"
          >
            Wählen Sie Ihr Paket.
            <span className="mt-1 block text-signal">
              Klar. Stabil. Fair.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-soft drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)] sm:text-base">
            {BRAND.name} – Live-TV und Streaming mit schneller Freischaltung
            und Support auf Deutsch. Zwei Jahresabos, Bestellung per WhatsApp.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#pakete" size="lg">
              Pakete ansehen
            </Button>
            <Button href={CTA_CONFIG.trial.href} variant="secondary" size="lg">
              {CTA_CONFIG.trial.label}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-soft drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]"
              >
                <span
                  aria-hidden
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-signal/15 text-[10px] font-bold text-signal"
                >
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
