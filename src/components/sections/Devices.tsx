import { devices } from '../../data/devices'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Devices() {
  return (
    <section id="geraete" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          title="Läuft auf Ihren Geräten"
          description="Kein Extra-Receiver nötig. Wir helfen bei der passenden App für Ihr Gerät."
        />

        <ul className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((device) => (
            <Card
              key={device.id}
              as="li"
              hover
              className="flex items-center justify-between gap-4 rounded-2xl"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-mute">
                  {device.category}
                </p>
                <h3 className="mt-1 font-display text-base font-bold text-paper">
                  {device.name}
                </h3>
              </div>
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/15 text-signal"
              >
                ▶
              </span>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  )
}
