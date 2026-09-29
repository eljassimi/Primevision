import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeProps = {
  children: ReactNode
  tone?: 'signal' | 'mute' | 'warn'
  className?: string
}

const tones = {
  signal: 'border-signal/50 bg-signal/10 text-signal',
  mute: 'border-line-strong bg-panel text-mute',
  warn: 'border-warn/50 bg-warn/10 text-warn',
}

export function Badge({ children, tone = 'signal', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
