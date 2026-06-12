import { Container } from '@/components/container'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Card, CardContent } from '@/components/ui/card'

// TODO : remplacer par de vrais retours clients avant mise en ligne définitive
const TESTIMONIALS = [
    {
        quote: '« Nous avons retrouvé une visibilité complète sur notre trésorerie. Les décisions importantes sont préparées, chiffrées, sécurisées : nous avançons sereinement. »',
        author: 'Dirigeant',
        company: 'PME industrielle · 40 salariés',
    },
    {
        quote: "« L'audit a mis en évidence des leviers de rentabilité que nous ne voyions plus. Le plan d'action s'est financé dès les premiers mois. »",
        author: 'Fondatrice',
        company: 'Société de services en croissance',
    },
    {
        quote: '« Une équipe disponible et réactive, présente à chaque étape clé : banques, investissements, recrutements. Un véritable partenaire de confiance. »',
        author: 'Gérant',
        company: 'Entreprise du bâtiment',
    },
]

export function Testimonials() {
    return (
        <section id="temoignages" className="bg-secondary py-[clamp(4.5rem,9vw,7.5rem)]">
            <Container>
                <Reveal className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[720px]">
                    <Eyebrow>Témoignages</Eyebrow>
                    <h2 className="font-display font-semibold text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.12]">
                        Ce qu'en disent <em className="font-medium text-gold italic">les dirigeants accompagnés.</em>
                    </h2>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <Reveal key={testimonial.author} delay={index * 120}>
                            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgb(10_26_47/25%)]">
                                <CardContent className="flex h-full flex-col">
                                    <blockquote className="flex-1 font-display text-[1.25rem] italic leading-[1.5]">
                                        {testimonial.quote}
                                    </blockquote>
                                    <figcaption className="mt-6 border-t pt-5">
                                        <strong className="block text-[0.95rem]">{testimonial.author}</strong>
                                        <span className="text-[0.84rem] text-muted-foreground">
                                            {testimonial.company}
                                        </span>
                                    </figcaption>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    )
}
