import { Container } from '@/components/container'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Card, CardContent } from '@/components/ui/card'

const TESTIMONIALS = [
    {
        quote: '« Une clarté financière indispensable pour une startup en forte croissance. Jean-Luc et son équipe parlent le langage des entrepreneurs. »',
        author: 'Fondateur',
        company: 'Startup en forte croissance',
    },
    {
        quote: "« L'accompagnement de TRESORIUM a été décisif dans notre phase de restructuration. Leur vision stratégique dépasse de loin la simple analyse comptable. »",
        author: 'Dirigeant',
        company: 'Entreprise en restructuration',
    },
    {
        quote: '« Pour mes investissements immobiliers complexes, la rigueur technique de TRESORIUM est devenue mon meilleur atout stratégique. »',
        author: 'Investisseur',
        company: 'Patrimoine immobilier',
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
