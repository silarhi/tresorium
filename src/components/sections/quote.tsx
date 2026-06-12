import { Container } from '@/components/container'
import { Reveal } from '@/components/reveal'

export function Quote() {
    return (
        <section className="dark bg-linear-165 from-navy-900 to-navy-950 py-[clamp(4.5rem,9vw,7.5rem)] text-center text-foreground">
            <Container className="max-w-[860px]">
                <Reveal>
                    <svg viewBox="0 0 48 36" aria-hidden="true" className="mx-auto mb-8 w-11 text-gold opacity-85">
                        <path
                            d="M0 36V20.4C0 8.4 7.2 1.2 19.2 0l2.4 5.4c-7.2 1.8-10.8 5.4-10.8 10.2H21V36H0zm27 0V20.4C27 8.4 34.2 1.2 46.2 0l1.8 5.4c-7.2 1.8-10.8 5.4-10.8 10.2H48V36H27z"
                            fill="currentColor"
                        />
                    </svg>
                    <p className="font-display font-medium text-[clamp(1.6rem,3.4vw,2.5rem)] text-white leading-[1.35]">
                        Lorsque TRESORIUM intervient, la question n'est pas{' '}
                        <em className="text-gold-light">combien coûte notre mission</em>, mais{' '}
                        <em className="text-gold-light">combien de valeur elle permettra de créer</em>.
                    </p>
                    <p className="mt-7 font-semibold text-[0.8rem] text-muted-foreground uppercase tracking-[0.22em]">
                        Notre engagement
                    </p>
                </Reveal>
            </Container>
        </section>
    )
}
