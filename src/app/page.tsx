import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Founder } from '@/components/sections/founder'
import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Method } from '@/components/sections/method'
import { Offers } from '@/components/sections/offers'
import { Quote } from '@/components/sections/quote'
import { Testimonials } from '@/components/sections/testimonials'
import { Values } from '@/components/sections/values'
import { Vision } from '@/components/sections/vision'

export default function Home() {
    return (
        <>
            <Header />
            <main id="top">
                <Hero />
                <Founder />
                <Vision />
                <Values />
                <Offers />
                <Method />
                <Testimonials />
                <Quote />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
