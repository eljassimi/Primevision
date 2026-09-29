import { steps } from '../../data/features'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const stepIcons = [
  // plan
  <path
    key="plan"
    d="M7 4h10v16H7V4zm3 4h4M9 12h6M9 15h4"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
  />,
  // chat
  <path
    key="chat"
    d="M5 6h14v9H9l-4 3V6z"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
  />,
  // play
  <path key="play" d="M9 7.5v9l7-4.5-7-4.5z" fill="currentColor" />,
]

export function HowItWorks() {
  return (
    <section id="ablauf" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          title="So funktioniert's"
          description="Drei klare Schritte – von der Auswahl bis zum ersten Stream."
        />

        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className="rounded-2xl border border-line bg-panel px-6 py-8 text-center transition-all duration-200 hover:border-signal/35 hover:shadow-[0_0_28px_rgba(184,255,0,0.1)]"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-signal/40 bg-signal/10 text-signal">
                <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
                  {stepIcons[index]}
                </svg>
              </span>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">
                Schritt {step.number}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-signal">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
