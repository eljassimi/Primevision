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
      className="relative overflow-hidden pb-6 pt-8 lg:pb-8 lg:pt-12"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="h-full w-full scale-105 object-cover object-[center_35%] opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink" />

        <div className="absolute -right-24 top-0 h-[22rem] w-[22rem] rounded-full bg-signal/[0.07] blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-[16rem] w-[16rem] rounded-full bg-signal/[0.04] blur-3xl" />

        <div className="hero-grid absolute inset-0 opacity-90" />
        <div className="hero-grid-fine absolute inset-0 opacity-60" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl animate-fade-up text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-signal">
            Premium Streaming · Deutschland
          </p>
          <h1
            id="hero-heading"
            className="font-display text-balance text-3xl font-bold leading-[1.1] tracking-tight text-paper sm:text-4xl lg:text-[2.75rem]"
          >
            Wählen Sie Ihr Paket.
            <span className="mt-1 block text-signal">
              Klar. Stabil. Fair.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mute sm:text-base">
            {BRAND.name} – Live-TV und Streaming mit schneller Freischaltung
            und Support auf Deutsch. Zwei Jahresabos, Bestellung per WhatsApp.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#pakete" size="lg">
              Pakete ansehen
            </Button>
            <Button href={CTA_CONFIG.trial.href} variant="secondary" size="lg">
              {CTA_CONFIG.trial.label}
            </Button>
          </div>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-soft"
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

        {/* Subtle lifestyle strip – secondary to offers */}
        <div
          className="relative mx-auto mt-10 hidden max-w-4xl animate-fade-up overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:block"
          style={{ animationDelay: '80ms' }}
        >
          <img
            src="/hero-main.png"
            alt={`${BRAND.name} – Streaming-Erlebnis zu Hause`}
            width={688}
            height={400}
            className="h-40 w-full object-cover object-[center_30%] opacity-90 lg:h-48"
            loading="eager"
            decoding="async"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
          />
          <p className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-soft">
            Home Cinema · HD & 4K
          </p>
        </div>
      </Container>
    </section>
  )
}
