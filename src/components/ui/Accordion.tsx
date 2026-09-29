import { useId, useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

export type AccordionItem = {
  id: string
  title: string
  content: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)
  const baseId = useId()

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-line divide-y divide-line',
        className,
      )}
    >
      {items.map((item) => {
        const isOpen = openId === item.id
        const panelId = `${baseId}-panel-${item.id}`
        const buttonId = `${baseId}-button-${item.id}`

        return (
          <div key={item.id} className="bg-panel">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={cn(
                  'flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-paper transition-colors',
                  'hover:text-signal',
                )}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.title}</span>
                <span
                  aria-hidden
                  className={cn(
                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/40 text-signal transition-transform duration-200',
                    isOpen && 'rotate-45 bg-signal/15',
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-4"
            >
              {isOpen && (
                <div className="text-sm leading-relaxed text-mute">
                  {item.content}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
