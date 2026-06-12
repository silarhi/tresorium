import Image from 'next/image'
import Link from 'next/link'
import logoMark from '@/assets/logo-mark.png'
import { cn } from '@/lib/utils'

export function Brand({ className }: { className?: string }) {
    return (
        <Link
            href="#top"
            aria-label="TRESORIUM — Accueil"
            className={cn('flex items-center gap-3 text-white', className)}
        >
            <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-md bg-white p-1">
                <Image src={logoMark} alt="" className="size-full object-contain" sizes="40px" />
            </span>
            <span className="font-display font-semibold text-[1.35rem] tracking-[0.2em]">TRESORIUM</span>
        </Link>
    )
}
