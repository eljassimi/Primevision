import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { usePageMeta } from '../hooks/usePageMeta'
import type { LegalSection } from '../types'

type LegalPageProps = {
  title: string
  description: string
  path: string
  sections: LegalSection[]
}

export function LegalPage({
  title,
  description,
  path,
  sections,
}: LegalPageProps) {
  usePageMeta({ title, description, path })

  return (
    <div className="border-b border-line py-14 lg:py-20">
      <Container className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-signal">
          Rechtliches
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold text-paper">{title}</h1>
        <p className="mt-3 text-sm text-mute">{description}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-paper">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-sm leading-relaxed text-mute"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm">
          <Link to="/" className="text-signal hover:underline">
            ← Zurück zur Startseite
          </Link>
        </p>
      </Container>
    </div>
  )
}
