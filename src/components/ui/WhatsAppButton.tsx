import { getWhatsAppUrl, CONTACT_CONFIG } from '../../config/contact'
import { cn } from '../../lib/cn'

type WhatsAppButtonProps = {
  label?: string
  message?: string
  variant?: 'inline' | 'floating'
  className?: string
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      width="18"
      height="18"
    >
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.94.52 3.76 1.43 5.34L2 22l4.99-1.53a9.86 9.86 0 0 0 5.05 1.36h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.75 13.96c-.24.67-1.4 1.23-1.94 1.31-.5.07-1.14.1-1.84-.12-.42-.13-.97-.32-1.67-.63-2.94-1.27-4.85-4.22-5-4.41-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.4-.24.67-.14.27.1 1.71.81 2 .95.29.15.49.22.56.34.08.13.08.74-.16 1.41Z" />
    </svg>
  )
}

export function WhatsAppButton({
  label = 'WhatsApp',
  message,
  variant = 'inline',
  className,
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(message)
  const hasNumber = Boolean(CONTACT_CONFIG.whatsappNumber.replace(/\D/g, ''))

  if (!hasNumber) {
    return null
  }

  if (variant === 'floating') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support öffnen"
        className={cn(
          'fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-2xl border border-signal bg-signal text-ink glow-btn',
          'transition-transform duration-200 hover:scale-105',
          className,
        )}
      >
        <WhatsAppIcon />
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 rounded-xl border border-signal/50 px-4 py-2.5 text-sm font-semibold text-signal transition-colors hover:bg-signal/10',
        className,
      )}
    >
      <WhatsAppIcon />
      {label}
    </a>
  )
}
