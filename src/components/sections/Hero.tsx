import { BRAND } from '../../config/brand'
import { CTA_CONFIG } from '../../config/cta'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const trustPoints = [
  'HD & 4K Qualität',
  'Schnelle Aktivierung',
  'Deutscher Support',
  'Flexible Pakete',
]

export function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden pb-16 pt-10 lg:pb-24 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Atmospheric background from lifestyle photo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="h-full w-full object-cover object-[center_35%] opacity-[0.22] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(184,255,0,0.08),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="animate-fade-up lg:col-span-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-signal">
            Premium Streaming · Deutschland
          </p>
          <h1
            id="hero-heading"
            className="font-display text-balance text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-[3.25rem]"
          >
            Fernsehen in neuer Qualität.
            <span className="mt-1 block text-signal">
              Einfach. Stabil. PrimeVision.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-mute">
            {BRAND.name} bringt Live-TV und Streaming auf Ihre Geräte – mit
            klaren Paketen, schneller Freischaltung und Support auf Deutsch.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={CTA_CONFIG.order.href} size="lg">
              Jetzt starten
            </Button>
            <Button href={CTA_CONFIG.trial.href} variant="secondary" size="lg">
              {CTA_CONFIG.trial.label}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
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

        <div
          className="animate-fade-up lg:col-span-6"
          style={{ animationDelay: '100ms' }}
        >
          <HeroImage />
        </div>
      </Container>
    </section>
  )
}

function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-signal/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-black/70 blur-2xl"
      />

      <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-[0_24px_80px_rgba(0,0,0,0.65),0_0_40px_rgba(184,255,0,0.12)]">
        <img
          src="/hero-main.png"
          alt={`${BRAND.name} – Streaming-Erlebnis zu Hause`}
          width={688}
          height={1024}
          className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/6] lg:aspect-[4/5]"
          loading="eager"
          decoding="async"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
        />
        <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/15 bg-ink/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-soft backdrop-blur-md">
            Home Cinema
          </span>
          <span className="rounded-full border border-signal/35 bg-signal/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-signal backdrop-blur-md">
            HD · 4K
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
