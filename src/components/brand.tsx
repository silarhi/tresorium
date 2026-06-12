import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Brand({ className }: { className?: string }) {
    return (
        <Link
            href="#top"
            aria-label="TRESORIUM — Accueil"
            className={cn('flex items-center gap-3 text-white', className)}
        >
            <svg viewBox="0 0 40 40" aria-hidden="true" className="size-[34px] text-gold">
                <rect x="4" y="4" width="32" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path
                    d="M12 14h16M20 14v14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                />
            </svg>
            <span className="font-display font-semibold text-[1.35rem] tracking-[0.2em]">TRESORIUM</span>
        </Link>
    )
}
