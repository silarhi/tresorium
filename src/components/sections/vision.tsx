import { Check } from 'lucide-react'
import { Container } from '@/components/container'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const MISSIONS = [
    'Consolider, sécuriser et anticiper les besoins de trésorerie',
    'Élaborer une vision financière fiable et prospective',
    'Optimiser la rentabilité et les performances économiques',
    "Structurer les projets de développement et d'investissement",
    'Accompagner la croissance, la transmission et la restructuration',
    'Fournir des indicateurs simples, pertinents et orientés action',
]

export function Vision() {
    return (
        <section
            id="vision"
            className="dark bg-linear-165 from-navy-900 to-navy-950 py-[clamp(4.5rem,9vw,7.5rem)] text-foreground"
        >
            <Container>
                <Reveal className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[720px]">
                    <Eyebrow>Vision &amp; mission</Eyebrow>
                    <h2 className="font-display font-semibold text-[clamp(2rem,4.2vw,3.1rem)] text-white leading-[1.12]">
                        Replacer la fonction financière
                        <br />
                        <em className="font-medium text-gold">au cœur de la stratégie.</em>
                    </h2>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-2">
                    <Reveal>
                        <Card className="h-full">
                            <CardHeader className="border-b">
                                <CardTitle className="font-display font-semibold text-[1.6rem] text-white">
                                    Notre vision
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    La finance n'est pas une finalité. Elle est un accélérateur de développement. La
                                    réussite d'une entreprise repose avant tout sur sa capacité à prendre{' '}
                                    <strong className="text-white">les bonnes décisions au bon moment</strong> — des
                                    décisions qui ne peuvent plus être guidées par la seule intuition, mais par une
                                    vision financière claire et une stratégie durable.
                                </p>
                                <p>
                                    Nous voulons faire de TRESORIUM une référence du conseil indépendant en stratégie
                                    financière, stratégie de trésorerie et pilotage de la performance, reconnue pour son
                                    exigence, sa proximité et sa capacité à accompagner durablement les dirigeants.
                                </p>
                            </CardContent>
                        </Card>
                    </Reveal>

                    <Reveal delay={120}>
                        <Card className="h-full">
                            <CardHeader className="border-b">
                                <CardTitle className="font-display font-semibold text-[1.6rem] text-white">
                                    Notre mission
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed">
                                <p>
                                    Apporter aux dirigeants les outils, les analyses et les méthodes qui leur permettent
                                    de consolider leur trésorerie, de développer leur entreprise avec sérénité.
                                    Concrètement&nbsp;:
                                </p>
                                <ul className="mt-5 space-y-2.5">
                                    {MISSIONS.map((mission) => (
                                        <li key={mission} className="flex items-start gap-2.5 text-[0.96rem]">
                                            <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                                            {mission}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Reveal>
                </div>
            </Container>
        </section>
    )
}
