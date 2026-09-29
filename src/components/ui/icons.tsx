import type { ReactNode } from 'react'

type IconProps = {
  className?: string
  title?: string
}

function Base({
  children,
  className,
  title,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      width="22"
      height="22"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export function IconQuality(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="12" />
      <path d="M8 19h8M12 17v2" />
    </Base>
  )
}

export function IconChannels(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 7h16M4 12h10M4 17h14" />
    </Base>
  )
}

export function IconVod(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M10 9l6 3-6 3V9z" fill="currentColor" stroke="none" />
    </Base>
  )
}

export function IconDevices(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="4" width="14" height="10" />
      <rect x="16" y="10" width="6" height="10" />
      <path d="M6 18h6" />
    </Base>
  )
}

export function IconSupport(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3a7 7 0 0 0-7 7v3H7v-3a5 5 0 0 1 10 0v3h2v-3a7 7 0 0 0-7-7z" />
      <path d="M7 13h2v5H7zM15 13h2v5h-2z" />
      <path d="M9 20h6" />
    </Base>
  )
}

export function IconSetup(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </Base>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Base>
  )
}

export function IconClose(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Base>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12l4 4 10-10" />
    </Base>
  )
}
