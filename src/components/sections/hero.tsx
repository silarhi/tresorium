import { CircleCheck } from 'lucide-react'
import { Container } from '@/components/container'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

export function Hero() {
    return (
        <section className="dark relative flex min-h-svh items-center overflow-hidden bg-linear-160 from-navy-900 to-navy-950 pt-36 pb-20 text-foreground">
            <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden="true" />
            <Container className="relative">
                <div className="max-w-[880px]">
                    <Reveal>
                        <Eyebrow>
                            Conseil en stratégie de développement &amp; optimisation financière de trésorerie
                        </Eyebrow>
                    </Reveal>
                    <Reveal delay={120}>
                        <h1 className="mb-6 font-display font-semibold text-[clamp(2.6rem,6.2vw,4.4rem)] text-white leading-[1.12] tracking-[-0.01em]">
                            La finance au service
                            <br />
                            <em className="font-medium text-gold">de votre stratégie.</em>
                        </h1>
                    </Reveal>
                    <Reveal delay={240}>
                        <p className="mb-10 max-w-[620px] text-[clamp(1.05rem,1.6vw,1.22rem)] text-muted-foreground leading-relaxed">
                            TRESORIUM accompagne les dirigeants dans leurs décisions les plus importantes&nbsp;:
                            pilotage de la performance, trésorerie, financement et développement. Pour que chaque
                            décision financière devienne un levier de croissance durable.
                        </p>
                    </Reveal>
                    <Reveal delay={360}>
                        <div className="mb-8 flex flex-wrap gap-4">
                            <Button asChild size="lg">
                                <a href="#contact">Réserver mon rendez-vous gratuit</a>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <a href="#offres">Découvrir nos offres</a>
                            </Button>
                        </div>
                    </Reveal>
                    <Reveal delay={480}>
                        <p className="inline-flex items-center gap-2.5 font-medium text-[0.92rem] text-gold-light">
                            <CircleCheck className="size-5" aria-hidden="true" />
                            Premier rendez-vous gratuit et sans engagement
                        </p>
                    </Reveal>
                </div>
            </Container>
        </section>
    )
}
