import { CTA_CONFIG } from '../../config/cta'
import { BRAND } from '../../config/brand'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function CTA() {
  return (
    <section className="pb-20 pt-8 lg:pb-28" aria-labelledby="cta-heading">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-signal/40 bg-panel px-6 py-12 glow-frame sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-signal">
              Nächster Schritt
            </p>
            <h2
              id="cta-heading"
              className="font-display mt-3 text-3xl font-bold text-paper sm:text-4xl"
            >
              Bereit für {BRAND.name}?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">
              Testen Sie unverbindlich oder wählen Sie direkt ein Paket. Wir
              begleiten Sie bei der Einrichtung – auf Deutsch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={CTA_CONFIG.trial.href} size="lg">
                {CTA_CONFIG.trial.label}
              </Button>
              <Button
                href={CTA_CONFIG.pricing.href}
                variant="secondary"
                size="lg"
              >
                {CTA_CONFIG.pricing.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
