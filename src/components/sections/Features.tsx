import { features } from '../../data/features'
import { BRAND } from '../../config/brand'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { featureIcons } from '../ui/featureIcons'

export function Features() {
  return (
    <section id="vorteile" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          title={`Warum ${BRAND.name}?`}
          description="Technik und Service, die im Alltag zählen – ohne übertriebene Versprechen."
        />
        <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon]
            return (
              <Card key={feature.id} as="li" hover className="rounded-2xl">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-signal/35 bg-signal/10 text-signal">
                  <Icon />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-paper">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
