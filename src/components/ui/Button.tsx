import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  href: string
  external?: boolean
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<Variant, string> = {
  primary:
    'rounded-[var(--radius-btn)] border-signal bg-signal text-ink glow-btn hover:brightness-110',
  secondary:
    'rounded-[var(--radius-btn)] border-signal/70 bg-transparent text-signal hover:bg-signal/10 hover:border-signal glow-btn',
  ghost:
    'rounded-[var(--radius-btn)] border-transparent bg-transparent text-soft hover:text-signal hover:bg-white/5',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm font-semibold tracking-wide',
  lg: 'px-6 py-3.5 text-sm font-semibold tracking-wide',
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary'
  const size = props.size ?? 'md'
  const classes = cn(
    'inline-flex items-center justify-center gap-2 border uppercase transition-all duration-200',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variants[variant],
    sizes[size],
    props.className,
  )

  if (props.href) {
    const { href, external, children } = props
    const isHash = href.startsWith('#')
    const isInternal = href.startsWith('/') && !href.startsWith('//')

    if (isInternal && !external) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      )
    }

    if (isHash) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <a
        href={href}
        className={classes}
        target={external === false ? undefined : '_blank'}
        rel={external === false ? undefined : 'noopener noreferrer'}
      >
        {children}
      </a>
    )
  }

  const {
    children,
    variant: _variant,
    size: _size,
    className: _className,
    href: _href,
    ...rest
  } = props

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
