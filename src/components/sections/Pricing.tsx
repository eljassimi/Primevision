import {
  buildPlanWhatsAppMessage,
  pricingDisclaimer,
  pricingPlans,
} from '../../data/pricing'
import { getWhatsAppUrl } from '../../config/contact'
import type { PricingPlan } from '../../types'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { cn } from '../../lib/cn'

function PlanIcon({ accent }: { accent: PricingPlan['accent'] }) {
  if (accent === 'vip') {
    return (
      <span
        aria-hidden
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4a017]/50 bg-[#d4a017]/10 text-[#e8c547]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 16l2.5-8 3 4 2.5-6 2.5 6 3-4L21 16H5zm0 2h16v2H5v-2z" />
        </svg>
      </span>
    )
  }

  return (
    <span
      aria-hidden
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-signal/40 bg-signal/10 text-signal"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12h2l2-6 3 12 2-8 2 4h5" />
      </svg>
    </span>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.94.52 3.76 1.43 5.34L2 22l4.99-1.53a9.86 9.86 0 0 0 5.05 1.36h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.75 13.96c-.24.67-1.4 1.23-1.94 1.31-.5.07-1.14.1-1.84-.12-.42-.13-.97-.32-1.67-.63-2.94-1.27-4.85-4.22-5-4.41-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.4-.24.67-.14.27.1 1.71.81 2 .95.29.15.49.22.56.34.08.13.08.74-.16 1.41Z" />
    </svg>
  )
}

function CheckIcon({ accent }: { accent: PricingPlan['accent'] }) {
  return (
    <span
      aria-hidden
      className={cn(
        'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold',
        accent === 'vip'
          ? 'bg-[#d4a017]/15 text-[#e8c547]'
          : 'bg-signal/15 text-signal',
      )}
    >
      ✓
    </span>
  )
}

export function Pricing() {
  return (
    <section
      id="pakete"
      className="relative scroll-mt-24 pb-16 pt-4 lg:pb-20 lg:pt-2"
      aria-labelledby="pricing-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-surface/40 to-ink"
      />

      <Container className="relative z-10">
        <div className="mb-8 text-center lg:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-signal">
            Angebote
          </p>
          <h2
            id="pricing-heading"
            className="font-display mt-2 text-2xl font-bold text-paper sm:text-3xl"
          >
            Zwei Pakete. Keine versteckten Kosten.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-mute">
            Jahresabo wählen und per WhatsApp bestellen – Paket und Preis sind
            in der Nachricht bereits enthalten.
          </p>
        </div>

        <ul className="mx-auto grid max-w-4xl list-none grid-cols-1 gap-6 p-0 lg:grid-cols-2 lg:items-stretch">
          {pricingPlans.map((plan) => {
            const isVip = plan.accent === 'vip'
            const whatsappHref = getWhatsAppUrl(buildPlanWhatsAppMessage(plan))

            return (
              <li
                key={plan.id}
                className={cn(
                  'relative flex flex-col rounded-2xl border bg-panel/95 p-6 backdrop-blur-sm md:p-8',
                  isVip
                    ? 'border-[#d4a017]/70 shadow-[0_0_36px_rgba(212,160,23,0.22)]'
                    : 'border-line shadow-[0_12px_40px_rgba(0,0,0,0.35)]',
                )}
              >
                {plan.badge ? (
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <Badge
                      className={cn(
                        'whitespace-nowrap border-0 px-3 py-1 text-[10px] font-bold tracking-[0.12em]',
                        isVip
                          ? 'bg-[#e8c547] text-ink'
                          : 'bg-signal text-ink',
                      )}
                    >
                      {plan.badge}
                    </Badge>
                  </span>
                ) : null}

                <div className={cn('flex items-start justify-between gap-3', plan.badge && 'pt-2')}>
                  <div>
                    <h3
                      className={cn(
                        'font-display text-2xl font-bold tracking-tight',
                        isVip ? 'text-[#e8c547]' : 'text-paper',
                      )}
                    >
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm text-mute">{plan.description}</p>
                  </div>
                  <PlanIcon accent={plan.accent} />
                </div>

                <div className="mt-6">
                  <p className="flex items-baseline gap-2">
                    <span className="font-price text-5xl font-semibold text-paper">
                      {plan.price}
                    </span>
                    <span className="text-sm text-mute">/ {plan.period}</span>
                  </p>
                  {plan.priceNote ? (
                    <p
                      className={cn(
                        'mt-2 text-sm',
                        isVip ? 'text-[#e8c547]/90' : 'text-mute',
                      )}
                    >
                      {plan.priceNote}
                    </p>
                  ) : null}
                </div>

                <ul className="mt-7 flex-1 space-y-3 p-0 list-none">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-soft"
                    >
                      <CheckIcon accent={plan.accent} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_22px_rgba(37,211,102,0.35)] transition-all duration-200 hover:brightness-110"
                  >
                    <WhatsAppIcon />
                    {plan.whatsappCtaLabel}
                  </a>
                </div>
              </li>
            )
          })}
        </ul>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-mute">
          {pricingDisclaimer}
        </p>
      </Container>
    </section>
  )
}
