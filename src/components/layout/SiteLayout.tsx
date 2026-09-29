import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { WhatsAppButton } from '../ui/WhatsAppButton'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-signal focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-signal"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  )
}
