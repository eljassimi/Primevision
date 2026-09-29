import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  cue?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionHeading({
  cue,
  title,
  description,
  className,
  align = 'center',
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {cue ? (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-signal">
          {cue}
        </p>
      ) : null}
      <h2 className="font-display m-0 text-balance text-3xl font-bold tracking-tight text-paper sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-sm leading-relaxed text-mute sm:text-base',
            align === 'center' && 'mx-auto max-w-xl',
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}
