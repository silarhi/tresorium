import { Container } from '@/components/container'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Card, CardContent } from '@/components/ui/card'

const VALUES = [
    {
        title: 'Excellence',
        description:
            'Nous recherchons la rigueur intellectuelle et la qualité dans chacune de nos interventions. Nos analyses doivent être fiables, objectives, réalisables et utiles à la prise de décision.',
    },
    {
        title: 'Indépendance',
        description:
            "Notre seule priorité est l'intérêt du dirigeant et de son entreprise. Nous formulons des recommandations libres de toute influence extérieure, avec honnêteté et transparence.",
    },
    {
        title: 'Confidentialité',
        description:
            'Les informations financières et stratégiques confiées par nos clients constituent un patrimoine sensible. Elles sont traitées avec la plus grande discrétion et dans le strict respect de la confidentialité.',
    },
    {
        title: 'Pragmatisme',
        description:
            'Une bonne stratégie est avant tout une stratégie applicable. Nous privilégions des solutions concrètes, adaptées aux réalités opérationnelles et aux contraintes de chaque entreprise.',
    },
    {
        title: 'Engagement',
        description:
            'Nous nous impliquons aux côtés des dirigeants comme un véritable partenaire. Leur réussite constitue la meilleure mesure de notre propre performance.',
    },
    {
        title: 'Création de valeur',
        description:
            'Chaque mission doit générer un impact positif et durable : amélioration de la rentabilité, sécurisation de la trésorerie, optimisation des ressources ou accompagnement de la croissance.',
    },
]

export function Values() {
    return (
        <section id="valeurs" className="bg-background py-[clamp(4.5rem,9vw,7.5rem)]">
            <Container>
                <Reveal className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[720px]">
                    <Eyebrow>Nos valeurs</Eyebrow>
                    <h2 className="font-display font-semibold text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.12]">
                        Six exigences, <em className="font-medium text-gold italic">une seule priorité&nbsp;: vous.</em>
                    </h2>
                </Reveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {VALUES.map((value, index) => (
                        <Reveal key={value.title} delay={(index % 3) * 120}>
                            <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgb(10_26_47/25%)]">
                                <CardContent>
                                    <span
                                        aria-hidden
                                        className="block font-bold font-display text-[2.6rem] text-gold leading-none tracking-[0.06em]"
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-3 mb-2.5 font-display font-semibold text-[1.45rem]">
                                        {value.title}
                                    </h3>
                                    <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                    <span
                                        aria-hidden
                                        className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100"
                                    />
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    )
}
