import { Container } from '@/components/container'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Card, CardContent } from '@/components/ui/card'

const STEPS = [
    {
        title: 'Écoute & cadrage',
        description:
            'Compréhension de votre entreprise, de vos ambitions et de vos contraintes. Définition conjointe des objectifs de la mission.',
    },
    {
        title: 'Diagnostic',
        description:
            'Analyse financière complète : rentabilité, trésorerie, BFR, structure de financement. Un état des lieux objectif et chiffré.',
    },
    {
        title: 'Recommandations',
        description:
            'Des préconisations concrètes, mesurables et directement applicables, hiérarchisées par impact sur la création de valeur.',
    },
    {
        title: 'Mise en œuvre',
        description:
            'Accompagnement opérationnel : tableaux de bord, négociations bancaires, structuration des financements, pilotage.',
    },
    {
        title: 'Suivi & mesure',
        description:
            'Mesure des résultats obtenus, ajustements et points réguliers avec le dirigeant. La valeur créée se constate, elle ne se devine pas.',
    },
]

export function Method() {
    return (
        <section id="methode" className="bg-background py-[clamp(4.5rem,9vw,7.5rem)]">
            <Container>
                <Reveal className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[720px]">
                    <Eyebrow>Méthodologie d'intervention</Eyebrow>
                    <h2 className="font-display font-semibold text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.12]">
                        Une méthode orientée vers l'action,
                        <br />
                        <em className="font-medium text-gold italic">rémunérée à la part d'enrichissement.</em>
                    </h2>
                    <p className="mt-5 text-[1.08rem] text-muted-foreground">
                        Sur site, dans nos locaux, en visioconférence ou à distance&nbsp;: chaque mission suit un cadre
                        clair, du premier échange jusqu'à la mesure des résultats.
                    </p>
                </Reveal>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                    {STEPS.map((step, index) => (
                        <Reveal key={step.title} delay={index * 120} className="h-full">
                            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgb(10_26_47/25%)]">
                                <CardContent>
                                    <span
                                        aria-hidden
                                        className="mb-3 block font-bold font-display text-[2.6rem] text-gold leading-none tracking-[0.06em]"
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mb-2 font-display font-semibold text-[1.22rem]">{step.title}</h3>
                                    <p className="text-[0.88rem] text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    )
}
