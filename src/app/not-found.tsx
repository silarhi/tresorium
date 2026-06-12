import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <main className="dark flex min-h-svh items-center justify-center bg-linear-160 from-navy-900 to-navy-950 p-8 text-center text-foreground">
            <div className="max-w-[520px]">
                <p className="font-display font-semibold text-[6rem] text-gold leading-none">404</p>
                <h1 className="mt-4 mb-3 font-display font-semibold text-[2rem] text-white">
                    Cette page est introuvable.
                </h1>
                <p className="mb-8 text-muted-foreground leading-relaxed">
                    La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil pour découvrir
                    TRESORIUM.
                </p>
                <Button asChild size="lg">
                    <Link href="/">Retour à l'accueil</Link>
                </Button>
            </div>
        </main>
    )
}
