import { Mail, MapPin, Phone, Video } from 'lucide-react'
import { Container } from '@/components/container'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/sections/contact-form'

const CONTACT_ITEMS = [
    {
        icon: Mail,
        content: (
            <a href="mailto:tresorium.jl@gmail.com" className="transition-colors hover:text-gold-dark">
                tresorium.jl@gmail.com
            </a>
        ),
    },
    {
        icon: Phone,
        content: (
            <a href="tel:+33641335034" className="transition-colors hover:text-gold-dark">
                06 41 33 50 34
            </a>
        ),
    },
    {
        icon: MapPin,
        content: <span>6 place Wilson, 31000 Toulouse</span>,
    },
    {
        icon: Video,
        content: <span>Sur rendez-vous — dans vos locaux, les nôtres ou en visioconférence</span>,
    },
]

export function Contact() {
    return (
        <section id="contact" className="bg-background py-[clamp(4.5rem,9vw,7.5rem)]">
            <Container className="grid items-start gap-[clamp(2.5rem,6vw,5.5rem)] md:grid-cols-[1fr_1.2fr]">
                <Reveal>
                    <Eyebrow>Contact</Eyebrow>
                    <h2 className="font-display font-semibold text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.12]">
                        Parlons de votre entreprise,
                        <br />
                        <em className="font-medium text-gold italic">en toute confidentialité.</em>
                    </h2>
                    <p className="mt-5 text-[1.08rem] text-muted-foreground">
                        Un premier échange permet de comprendre vos enjeux et d'identifier les leviers les plus
                        pertinents. Sans engagement, et en toute discrétion.
                    </p>
                    <ul className="mt-9 space-y-4">
                        {CONTACT_ITEMS.map((item, index) => (
                            <li
                                // biome-ignore lint/suspicious/noArrayIndexKey: liste statique
                                key={index}
                                className="flex items-center gap-3.5 text-[0.98rem] text-muted-foreground"
                            >
                                <item.icon className="size-[22px] shrink-0 text-gold-dark" aria-hidden="true" />
                                {item.content}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal delay={120}>
                    <ContactForm />
                </Reveal>
            </Container>
        </section>
    )
}
