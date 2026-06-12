import { Check } from 'lucide-react'
import { Container } from '@/components/container'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

type Price = {
    prefix?: string
    amount: string
    unit: string
}

type Mode = {
    label: string
    title: string
    description: string
    features: string[]
    prices: Price[]
}

const MODES: Mode[] = [
    {
        label: 'Formule 01',
        title: 'Accompagnement au temps passé',
        description:
            'Consolidation de trésorerie, conseil stratégique de croissance, optimisation financière… Nous intervenons à la carte, au rythme de vos besoins.',
        features: [
            'Interventions ponctuelles ou récurrentes',
            'Dans vos locaux, les nôtres ou à distance',
            'Tarif dégressif sur devis en fonction du projet',
        ],
        prices: [
            { amount: '200 €', unit: 'HT / heure' },
            { amount: '890 €', unit: 'HT / jour' },
        ],
    },
    {
        label: 'Formule 02 · Le point de départ idéal',
        title: "Audit & plan d'action",
        description:
            "Analyse complète de votre organisation et recherche d'une optimisation visant une rentabilité supérieure à l'actuelle, formalisée dans un plan d'action concret.",
        features: [
            "Analyse de l'organisation et des flux financiers",
            'Identification des leviers de rentabilité',
            "Plan d'action proposé, mesurable et applicable",
        ],
        prices: [{ prefix: 'à partir de', amount: '1 490 €', unit: 'HT' }],
    },
]

export function Offers() {
    return (
        <section id="offres" className="bg-secondary py-[clamp(4.5rem,9vw,7.5rem)]">
            <Container>
                <Reveal className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[720px]">
                    <Eyebrow>Nos offres</Eyebrow>
                    <h2 className="font-display font-semibold text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.12]">
                        Une tarification simple,
                        <br />
                        <em className="font-medium text-gold italic">annoncée à l'avance.</em>
                    </h2>
                    <p className="mt-5 text-[1.08rem] text-muted-foreground">
                        Aucun coût caché, aucune prestation imprévue facturée sans accord préalable. Chaque proposition
                        est calibrée sur vos enjeux.
                    </p>
                </Reveal>

                <Reveal className="mb-10">
                    <div className="dark flex flex-col items-start justify-between gap-8 rounded-md bg-navy-900 p-[clamp(1.8rem,3.5vw,2.5rem)] text-muted-foreground md:flex-row md:items-center">
                        <div>
                            <h3 className="mb-2 flex flex-wrap items-center gap-3 font-display font-semibold text-[1.65rem] text-white">
                                Premier rendez-vous gratuit
                                <Badge className="bg-linear-135 from-gold to-gold-dark font-sans font-bold text-[0.68rem] text-navy-950 uppercase tracking-[0.12em]">
                                    Offert
                                </Badge>
                            </h3>
                            <p className="max-w-[560px] text-[0.97rem]">
                                Un premier échange sans engagement pour comprendre votre entreprise, vos enjeux et
                                identifier les leviers les plus pertinents.
                            </p>
                        </div>
                        <Button asChild size="lg" className="shrink-0">
                            <a href="#contact">Réserver mon rendez-vous</a>
                        </Button>
                    </div>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-2">
                    {MODES.map((mode, index) => (
                        <Reveal key={mode.title} delay={index * 120}>
                            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_20px_60px_-24px_rgb(10_26_47/25%)]">
                                <CardContent className="flex h-full flex-col p-[clamp(0.5rem,1.5vw,1rem)]">
                                    <p className="mb-3 font-semibold text-[0.76rem] text-gold-dark uppercase tracking-[0.16em]">
                                        {mode.label}
                                    </p>
                                    <h3 className="mb-3 font-display font-semibold text-[1.65rem] leading-tight">
                                        {mode.title}
                                    </h3>
                                    <p className="text-[0.97rem] text-muted-foreground leading-relaxed">
                                        {mode.description}
                                    </p>
                                    <ul className="mt-5 flex-1 space-y-2.5">
                                        {mode.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2.5 text-[0.96rem] text-muted-foreground"
                                            >
                                                <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 flex flex-wrap gap-x-12 gap-y-3 border-t pt-5">
                                        {mode.prices.map((price) => (
                                            <p
                                                key={price.unit}
                                                className="font-bold text-[1.7rem] text-navy-800 leading-[1.1] tracking-tight"
                                            >
                                                {price.prefix && (
                                                    <span className="font-medium text-[0.82rem] text-muted-foreground tracking-normal">
                                                        {price.prefix}{' '}
                                                    </span>
                                                )}
                                                {price.amount}{' '}
                                                <small className="font-medium text-[0.82rem] text-muted-foreground tracking-normal">
                                                    {price.unit}
                                                </small>
                                            </p>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    )
}
