import { testimonials } from '../../data/testimonials'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <section id="stimmen" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          title="Stimmen unserer Kunden"
          description="Aktuell Platzhalter. Ersetzen Sie die Texte durch echte, freigegebene Bewertungen."
        >
          <div className="mt-4 flex justify-center">
            <Badge tone="warn">Beispielinhalte – nicht echt</Badge>
          </div>
        </SectionHeading>

        <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.id} as="li" className="rounded-2xl">
              {item.isPlaceholder ? (
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-warn">
                  Platzhalter
                </p>
              ) : null}
              <blockquote className="mt-3 m-0">
                <p className="text-sm leading-relaxed text-soft">
                  „{item.quote}“
                </p>
                <footer className="mt-4 text-xs text-mute">
                  — {item.attribution}
                </footer>
              </blockquote>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  )
}
