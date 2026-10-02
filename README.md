# TRESORIUM — Site vitrine

Site vitrine de TRESORIUM, cabinet indépendant de conseil en stratégie de développement
et optimisation financière de trésorerie.

**Signature** : _La finance au service de la stratégie._
**🌐 Production** : <https://www.tresorium-invest.com> (URL canonique ; l’apex redirige vers `www` ; alias : <https://tresorium.vercel.app>)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Radix)
- [Biome](https://biomejs.dev) (lint + format)
- Polices : Cormorant Garamond (display) + Inter (texte) via `next/font`

```
src/
  app/
    layout.tsx            # Fonts, metadata, JSON-LD ProfessionalService
    page.tsx              # Assemblage des sections
    globals.css           # Design tokens (navy/or) clair + sombre, reveal
    not-found.tsx         # 404 brandée
    robots.ts             # robots.txt généré
    opengraph-image.png   # Image OG (+ icon.png, apple-icon.png)
    api/contact/route.ts  # API formulaire (Resend)
  components/
    ui/                   # Composants shadcn (button, card, input, select…)
    sections/             # Header, Hero, Founder, Vision, Values, Offers,
                          # Method, Testimonials, Quote, Contact(+Form), Footer
    reveal.tsx            # Animation d'apparition au scroll
    container.tsx, eyebrow.tsx, brand.tsx
  assets/                 # Logo, portrait du fondateur
  lib/utils.ts            # cn()
```

## Développement

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build      # build de production
yarn lint       # biome check --write
```

## Déploiement (Vercel)

Projet Vercel `tresorium` (compte `guillaume-sainthillier`), connecté au repo GitHub :
**chaque push sur `main` déploie en production**, chaque PR génère une preview.
GitHub Actions ne fait que la validation (Biome + build).

Déploiement manuel possible si besoin via la CLI Vercel (`vercel deploy --prod`).

> ⚠️ Le plan Hobby de Vercel est officiellement réservé à un usage non commercial.
> Pour un site client en production : plan Pro, ou alternative gratuite compatible
> usage commercial (Cloudflare Pages).

## Formulaire de contact (API)

Le formulaire poste sur `/api/contact` (route handler Next.js) qui envoie l'e-mail via
[Resend](https://resend.com) (gratuit : 3 000 e-mails/mois). Tant que l'API n'est pas
configurée (HTTP 503), le site bascule automatiquement sur l'ouverture du client mail du
visiteur — le formulaire n'est donc jamais cassé.

Configuration (Vercel → Settings → Environment Variables) :

- `RESEND_API_KEY` (requise) — clé API Resend.
- `CONTACT_TO` — destinataire des demandes (défaut défini dans
  `src/app/api/contact/route.ts`).
- `CONTACT_FROM` — expéditeur (défaut : `onboarding@resend.dev`). Sans domaine vérifié sur
  Resend, l'envoi n'est délivré qu'à l'adresse du compte Resend : pour livrer au client,
  vérifier le domaine `tresorium-invest.com` sur <https://resend.com/domains> (DNS SPF/DKIM)
  puis définir un expéditeur sur ce domaine.

Anti-spam : honeypot côté client + validation côté serveur.

## Coordonnées affichées

Les coordonnées du cabinet (e-mail, téléphone, adresse) sont codées en dur dans :

- `src/components/sections/contact.tsx` et `src/components/sections/footer.tsx` (affichage) ;
- `src/components/sections/contact-form.tsx` (`CONTACT_EMAIL`, repli mailto) ;
- `src/app/layout.tsx` (JSON-LD `ProfessionalService`).

## Reste à faire

- [ ] **Mentions légales / politique de confidentialité** : liens placeholder du footer
      (`href="#top"` dans `src/components/sections/footer.tsx`).
