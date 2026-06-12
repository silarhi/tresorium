import { UserRound } from 'lucide-react'
import { Container } from '@/components/container'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'

export function Founder() {
    return (
        <section id="cabinet" className="bg-background py-[clamp(4.5rem,9vw,7.5rem)]">
            <Container className="grid items-start gap-[clamp(2.5rem,6vw,5.5rem)] md:grid-cols-[1fr_1.2fr]">
                <Reveal>
                    <Eyebrow>Le mot du fondateur</Eyebrow>
                    <h2 className="font-display font-semibold text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.12]">
                        Un capital qui dort est
                        <br />
                        <em className="font-medium text-gold">une opportunité perdue.</em>
                    </h2>

                    {/* TODO : remplacer par le portrait de Jean-Luc Gimeno (format 4:5) */}
                    <figure className="mt-9 flex aspect-4/5 max-w-[340px] flex-col items-center justify-center gap-4 rounded-md border border-gold/35 bg-linear-160 from-navy-800 to-navy-950 text-muted-foreground">
                        <UserRound className="size-16 text-gold opacity-80" strokeWidth={1.4} aria-hidden="true" />
                        <figcaption className="text-center font-medium text-[0.78rem] uppercase leading-[1.8] tracking-[0.12em]">
                            Portrait de Jean-Luc Gimeno
                            <br />— photo à venir —
                        </figcaption>
                    </figure>

                    <div className="mt-9 border-t pt-7">
                        <strong className="block text-[1.02rem]">Jean-Luc Gimeno</strong>
                        <span className="text-[0.85rem] text-muted-foreground">Président fondateur</span>
                    </div>
                </Reveal>

                <Reveal delay={120} className="space-y-5 text-[1.04rem] text-muted-foreground leading-relaxed">
                    <p>
                        Créer une entreprise, la développer, investir, recruter ou transmettre son patrimoine
                        entrepreneurial sont autant de décisions qui engagent l'avenir. Derrière chacune d'elles se
                        trouve toujours la même question&nbsp;:{' '}
                        <strong className="text-foreground">
                            comment utiliser intelligemment les ressources financières pour créer davantage de
                            valeur&nbsp;?
                        </strong>
                    </p>
                    <p>
                        L'argent ne doit jamais être considéré comme une finalité. Il est un moyen. Un capital bien
                        piloté devient un moteur de développement, d'innovation et de croissance. La véritable
                        intelligence financière consiste à faire en sorte que le patrimoine constitué travaille à son
                        tour — pour vous, pour votre entreprise et pour les projets que vous souhaitez construire.
                    </p>
                    <p>
                        C'est cette philosophie qui a donné naissance à TRESORIUM&nbsp;: un cabinet indépendant capable
                        d'accompagner les dirigeants bien au-delà des chiffres, avec une vision stratégique, un regard
                        objectif et un accompagnement personnalisé.
                    </p>
                    <blockquote className="mt-8 rounded-r-md border-gold border-l-[3px] bg-secondary px-8 py-6 font-display text-[1.35rem] text-foreground italic leading-[1.45]">
                        Notre engagement est simple&nbsp;: transformer la finance en un outil de développement au
                        service de votre stratégie.
                    </blockquote>
                </Reveal>
            </Container>
        </section>
    )
}
