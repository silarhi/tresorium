import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-cormorant',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://tresorium-invest.com'),
    title: 'TRESORIUM — La finance au service de la stratégie',
    description:
        'TRESORIUM, cabinet indépendant de conseil en stratégie de développement et optimisation financière de trésorerie. Premier rendez-vous gratuit : nous accompagnons les dirigeants dans leurs décisions les plus importantes.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'TRESORIUM — La finance au service de la stratégie',
        description:
            'Cabinet indépendant de conseil en stratégie de développement et optimisation financière de trésorerie. Premier rendez-vous gratuit.',
        url: '/',
        siteName: 'TRESORIUM',
        type: 'website',
        locale: 'fr_FR',
    },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'TRESORIUM',
    url: 'https://tresorium-invest.com',
    description:
        'Cabinet indépendant de conseil en stratégie de développement et optimisation financière de trésorerie. Premier rendez-vous gratuit.',
    slogan: 'La finance au service de la stratégie.',
    email: 'tresorium.jl@gmail.com',
    telephone: '+33641335034',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '6 place Wilson',
        postalCode: '31000',
        addressLocality: 'Toulouse',
        addressCountry: 'FR',
    },
    founder: {
        '@type': 'Person',
        name: 'Jean-Luc Gimeno',
        jobTitle: 'Président fondateur',
    },
    priceRange: '€€',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
            <body>
                {children}
                <script
                    type="application/ld+json"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD statique contrôlé
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    )
}
