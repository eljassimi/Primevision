import { faqItems } from '../../data/faq'
import { Accordion } from '../ui/Accordion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { WhatsAppButton } from '../ui/WhatsAppButton'

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          title="Häufige Fragen"
          description="Kurz und verständlich. Weitere Fragen klären wir persönlich."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion
            items={faqItems.map((item) => ({
              id: item.id,
              title: item.question,
              content: item.answer,
            }))}
          />
          <div className="mt-8 flex justify-center">
            <WhatsAppButton label="Frage per WhatsApp stellen" />
          </div>
        </div>
      </Container>
    </section>
  )
}
