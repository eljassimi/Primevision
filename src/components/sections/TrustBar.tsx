import { devices } from '../../data/devices'
import { Container } from '../ui/Container'

/** Kompakte Geräte-Leiste im Stil der Referenz – fokussiert auf Kernplattformen. */
const spotlightIds = ['android-tv', 'iphone', 'apple-tv', 'samsung', 'lg'] as const

const deviceLogos: Record<string, string> = {
  'android-tv': 'Android',
  iphone: 'iOS',
  'apple-tv': 'Apple TV',
  samsung: 'Samsung',
  lg: 'LG',
}

export function TrustBar() {
  const spotlight = devices.filter((d) =>
    (spotlightIds as readonly string[]).includes(d.id),
  )

  return (
    <section className="py-8 lg:py-10" aria-label="Kompatible Plattformen">
      <Container>
        <ul className="grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-5">
          {spotlight.map((device) => (
            <li
              key={device.id}
              className="group flex flex-col items-center justify-center rounded-2xl border border-line bg-panel px-4 py-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[0_0_24px_rgba(184,255,0,0.12)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mute">
                Verfügbar auf
              </p>
              <p className="mt-2 font-display text-sm font-bold text-paper transition-colors group-hover:text-signal sm:text-base">
                {deviceLogos[device.id] ?? device.name}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
