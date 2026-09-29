import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  as?: 'div' | 'article' | 'li'
}

export function Card({
  children,
  className,
  hover = false,
  glow = false,
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={cn(
        'card-surface p-5 md:p-6',
        glow && 'glow-frame border-signal/60 bg-panel-elevated',
        hover &&
          'transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-signal/40',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
