'use client'

import { type ReactNode, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
    children: ReactNode
    className?: string
    /** Délai d'apparition en millisecondes */
    delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) {
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )

        observer.observe(el)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={cn('reveal', className)}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    )
}
