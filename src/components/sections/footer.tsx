import { Brand } from '@/components/brand'
import { Container } from '@/components/container'

const FOOTER_COLUMNS = [
    {
        title: 'Le cabinet',
        links: [
            { href: '#cabinet', label: 'Mot du fondateur' },
            { href: '#vision', label: 'Vision & mission' },
            { href: '#valeurs', label: 'Valeurs' },
            { href: '#methode', label: 'Méthodologie' },
        ],
    },
    {
        title: 'Offres',
        links: [
            { href: '#offres', label: 'Offres & tarifs' },
            { href: '#temoignages', label: 'Témoignages' },
            { href: '#contact', label: 'Contact' },
        ],
    },
]

export function Footer() {
    return (
        <footer className="dark bg-navy-950 pt-18 text-muted-foreground">
            <Container className="grid gap-[clamp(2.5rem,6vw,5rem)] border-white/10 border-b pb-14 md:grid-cols-[1.4fr_1fr]">
                <div>
                    <Brand className="mb-6" />
                    <p className="mb-3 font-display text-[1.35rem] text-gold-light italic">
                        La finance au service de la stratégie.
                    </p>
                    <p className="max-w-[420px] text-[0.92rem] leading-relaxed">
                        Nous accompagnons les dirigeants dans leurs décisions afin de transformer la performance
                        financière en levier de développement durable.
                    </p>
                    <ul className="mt-6 space-y-1.5 text-[0.92rem]">
                        <li>
                            <a href="mailto:tresorium.jl@gmail.com" className="transition-colors hover:text-gold-light">
                                tresorium.jl@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+33641335034" className="transition-colors hover:text-gold-light">
                                06 41 33 50 34
                            </a>
                        </li>
                        <li>6 place Wilson, 31000 Toulouse, France</li>
                    </ul>
                </div>

                <nav className="grid grid-cols-2 gap-8" aria-label="Pied de page">
                    {FOOTER_COLUMNS.map((column) => (
                        <div key={column.title}>
                            <h4 className="mb-4 font-semibold text-[0.78rem] text-white uppercase tracking-[0.18em]">
                                {column.title}
                            </h4>
                            {column.links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block py-1.5 text-[0.92rem] transition-colors hover:text-gold-light"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </nav>
            </Container>
            <Container className="flex flex-wrap items-center justify-between gap-3 py-6 text-[0.82rem]">
                <p>
                    © {new Date().getFullYear()} TRESORIUM — Conseil en stratégies de développement d'entreprise. Tous
                    droits réservés.
                </p>
                <p>
                    <a href="#top" className="transition-colors hover:text-gold-light">
                        Mentions légales
                    </a>{' '}
                    ·{' '}
                    <a href="#top" className="transition-colors hover:text-gold-light">
                        Politique de confidentialité
                    </a>
                </p>
            </Container>
        </footer>
    )
}
