import { BRAND } from '../../config/brand'
import { cn } from '../../lib/cn'

type LogoProps = {
  className?: string
  markClassName?: string
  showWordmark?: boolean
  size?: 'sm' | 'md'
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="40" height="40" rx="10" fill="#B8FF00" />
      <path
        d="M14 12.5v15l13-7.5-13-7.5z"
        fill="#050505"
      />
      <path
        d="M27.5 27.5h-15"
        stroke="#050505"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  )
}

export function Logo({
  className,
  markClassName,
  showWordmark = true,
  size = 'md',
}: LogoProps) {
  const markSize = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9'

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className={cn(markSize, 'shrink-0', markClassName)} />
      {showWordmark ? (
        <span
          className={cn(
            'font-semibold tracking-tight text-paper',
            size === 'sm' ? 'text-sm' : 'text-base',
          )}
        >
          {BRAND.name}
        </span>
      ) : null}
    </span>
  )
}
