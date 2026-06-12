'use client'

import { type FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const CONTACT_EMAIL = 'tresorium.jl@gmail.com'

const SUBJECTS = [
    'Premier rendez-vous gratuit',
    "Audit & plan d'action",
    'Accompagnement au temps passé',
    'Autre demande',
]

type Status = { type: 'success' | 'error'; message: string } | null

export function ContactForm() {
    const [subject, setSubject] = useState(SUBJECTS[0])
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState<Status>(null)

    const openMailClient = (data: FormData) => {
        const mailSubject = encodeURIComponent(`[Site web] ${subject} — ${data.get('company') || data.get('name')}`)
        const body = encodeURIComponent(
            [
                `Nom : ${data.get('name')}`,
                `Société : ${data.get('company') || '—'}`,
                `E-mail : ${data.get('email')}`,
                `Téléphone : ${data.get('phone') || '—'}`,
                '',
                String(data.get('message') || ''),
            ].join('\n')
        )
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${body}`
        setStatus({
            type: 'success',
            message: `Votre client de messagerie va s’ouvrir avec votre demande pré-remplie. Vous pouvez aussi nous écrire directement à ${CONTACT_EMAIL}.`,
        })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const data = new FormData(form)
        setSending(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...Object.fromEntries(data.entries()), subject }),
            })

            if (response.ok) {
                form.reset()
                setStatus({
                    type: 'success',
                    message: 'Merci ! Votre demande a bien été envoyée. Nous revenons vers vous très rapidement.',
                })
            } else if (response.status === 400) {
                const { error } = (await response.json()) as { error?: string }
                setStatus({ type: 'error', message: error || 'Veuillez vérifier les champs du formulaire.' })
            } else {
                // API indisponible ou non configurée : on bascule sur le client mail
                openMailClient(data)
            }
        } catch {
            openMailClient(data)
        } finally {
            setSending(false)
        }
    }

    return (
        <Card className="shadow-[0_20px_60px_-24px_rgb(10_26_47/25%)]">
            <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-5">
                    {/* Honeypot anti-spam : champ invisible que seuls les robots remplissent */}
                    <label className="-left-[9999px] absolute size-px overflow-hidden" aria-hidden="true">
                        Site web
                        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                    </label>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <Label htmlFor="contact-name">Nom</Label>
                            <Input id="contact-name" name="name" required autoComplete="name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="contact-company">Société</Label>
                            <Input id="contact-company" name="company" autoComplete="organization" />
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <Label htmlFor="contact-email">E-mail</Label>
                            <Input id="contact-email" name="email" type="email" required autoComplete="email" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="contact-phone">Téléphone</Label>
                            <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="contact-subject">Votre besoin</Label>
                        <Select value={subject} onValueChange={setSubject}>
                            <SelectTrigger id="contact-subject" className="w-full">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {SUBJECTS.map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="contact-message">Message</Label>
                        <Textarea
                            id="contact-message"
                            name="message"
                            rows={4}
                            placeholder="Décrivez brièvement votre situation et vos enjeux…"
                        />
                    </div>

                    <Button type="submit" size="lg" disabled={sending} className="w-full">
                        {sending ? 'Envoi en cours…' : 'Envoyer ma demande'}
                    </Button>

                    {status && (
                        <p
                            className={cn(
                                'rounded-md border px-4 py-3 text-[0.92rem]',
                                status.type === 'success'
                                    ? 'border-gold/40 bg-gold/10 text-foreground'
                                    : 'border-destructive/40 bg-destructive/10 text-foreground'
                            )}
                        >
                            {status.message}
                        </p>
                    )}

                    <p className="text-center text-[0.8rem] text-muted-foreground">
                        Vos informations restent strictement confidentielles et ne sont jamais transmises à des tiers.
                    </p>
                </form>
            </CardContent>
        </Card>
    )
}
