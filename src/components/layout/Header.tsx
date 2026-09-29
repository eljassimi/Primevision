import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BRAND } from '../../config/brand'
import { CTA_CONFIG } from '../../config/cta'
import { mainNav } from '../../data/navigation'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { IconClose, IconMenu } from '../ui/icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 8,
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent transition-all duration-200',
        scrolled || open
          ? 'border-line/80 bg-ink/85 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between gap-4">
        <Link
          to="/"
          className="group text-paper"
          aria-label={`${BRAND.name} Startseite`}
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Hauptnavigation"
        >
          {mainNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-soft transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={CTA_CONFIG.trial.href} size="md">
            {CTA_CONFIG.trial.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-ink/95 lg:hidden"
      >
        {open ? (
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm text-paper hover:bg-panel hover:text-signal"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <Button href={CTA_CONFIG.trial.href} className="mt-3 w-full">
              {CTA_CONFIG.trial.label}
            </Button>
          </Container>
        ) : null}
      </div>
    </header>
  )
}
