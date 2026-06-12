'use client'

import { useEffect, useState } from 'react'
import { Brand } from '@/components/brand'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
    { href: '#cabinet', label: 'Le cabinet' },
    { href: '#valeurs', label: 'Valeurs' },
    { href: '#offres', label: 'Offres' },
    { href: '#methode', label: 'Méthode' },
    { href: '#temoignages', label: 'Témoignages' },
]

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={cn(
                'dark fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300',
                scrolled && 'border-white/10 border-b bg-navy-950/90 py-3 backdrop-blur-md'
            )}
        >
            <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-8 px-6">
                <Brand />

                <nav
                    className={cn(
                        'fixed inset-y-0 right-0 z-40 flex w-[min(320px,85vw)] translate-x-full flex-col items-start gap-2 bg-navy-950 px-8 pt-24 shadow-2xl transition-transform duration-300',
                        'md:static md:w-auto md:translate-x-0 md:flex-row md:items-center md:gap-7 md:bg-transparent md:p-0 md:shadow-none',
                        open && 'translate-x-0'
                    )}
                    aria-label="Navigation principale"
                    // Ferme le menu mobile dès qu'un lien est suivi (délégation)
                    onClickCapture={(event) => {
                        if ((event.target as HTMLElement).closest('a')) {
                            setOpen(false)
                        }
                    }}
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'w-full border-white/10 border-b py-2.5 font-medium text-[1.05rem] text-white/75 transition-colors hover:text-gold-light',
                                'md:w-auto md:border-0 md:py-0 md:text-[0.9rem]'
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button asChild size="sm" className="mt-5 md:mt-0">
                        <a href="#contact">Prendre rendez-vous</a>
                    </Button>
                </nav>

                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    aria-expanded={open}
                    aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                    className="relative z-50 flex flex-col gap-[5px] p-1.5 md:hidden"
                >
                    <span
                        className={cn(
                            'h-0.5 w-6 bg-white transition-transform duration-300',
                            open && 'translate-y-[7px] rotate-45'
                        )}
                    />
                    <span className={cn('h-0.5 w-6 bg-white transition-opacity duration-300', open && 'opacity-0')} />
                    <span
                        className={cn(
                            'h-0.5 w-6 bg-white transition-transform duration-300',
                            open && '-translate-y-[7px] -rotate-45'
                        )}
                    />
                </button>
            </div>
        </header>
    )
}
