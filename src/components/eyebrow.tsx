import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <p
            className={cn(
                'mb-4 flex items-center gap-3.5 font-semibold text-[0.78rem] text-gold-dark uppercase tracking-[0.22em] dark:text-gold-light',
                className
            )}
        >
            <span aria-hidden className="h-px w-9 shrink-0 bg-gold" />
            {children}
        </p>
    )
}
