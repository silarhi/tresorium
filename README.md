# TRESORIUM — Site vitrine

Site vitrine de TRESORIUM, cabinet indépendant de conseil en stratégie de développement
et optimisation financière de trésorerie (fondateur : Jean-Luc Gimeno, Toulouse).

**Signature** : _La finance au service de la stratégie._
**🌐 Production** : <https://tresorium-invest.com> (alias : <https://tresorium.vercel.app>)

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
    api/contact/route.ts  # API formulaire (Resend)
  components/
    ui/                   # Composants shadcn (button, card, input, select…)
    sections/             # Header, Hero, Founder, Vision, Values, Offers,
                          # Method, Testimonials, Quote, Contact(+Form), Footer
    reveal.tsx            # Animation d'apparition au scroll
    container.tsx, eyebrow.tsx, brand.tsx
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

```bash
npx vercel deploy --prod   # déploiement manuel si besoin
```

> ⚠️ Le plan Hobby de Vercel est officiellement réservé à un usage non commercial.
> Pour un site client en production : plan Pro, ou alternative gratuite compatible
> usage commercial (Cloudflare Pages).

## Formulaire de contact (API)

Le formulaire poste sur `/api/contact` (route handler Next.js) qui envoie l'e-mail via
[Resend](https://resend.com) (gratuit : 3 000 e-mails/mois). Tant que l'API n'est pas
configurée (HTTP 503), le site bascule automatiquement sur l'ouverture du client mail du
visiteur — le formulaire n'est donc jamais cassé.

**État actuel** : `RESEND_API_KEY` est configurée (compte Resend de Guillaume) et le
formulaire fonctionne. Le compte étant en mode test (pas de domaine vérifié), Resend ne
délivre qu'à l'adresse du compte : `CONTACT_TO=guillaume@silarhi.fr` est donc défini sur
Vercel — les demandes arrivent chez Guillaume, à transférer au client.

**Pour livrer directement à `tresorium.jl@gmail.com`** :

1. Vérifier le domaine `tresorium-invest.com` sur <https://resend.com/domains>
   (ajout d'enregistrements DNS SPF/DKIM).
2. Sur Vercel : `CONTACT_FROM="TRESORIUM <contact@tresorium-invest.com>"` et supprimer
   `CONTACT_TO` (le défaut `tresorium.jl@gmail.com` reprendra la main).
3. Re-déployer.

Variables : `RESEND_API_KEY` (requise), `CONTACT_TO` (destinataire), `CONTACT_FROM`
(expéditeur). Anti-spam : honeypot côté client + validation côté serveur.

## Coordonnées

- E-mail : `tresorium.jl@gmail.com` · Téléphone : 06 41 33 50 34
- Adresse : 6 place Wilson, 31000 Toulouse, France

## À remplacer avant mise en ligne définitive

- [ ] **Mentions légales / politique de confidentialité** : liens placeholder du footer.
- [ ] **Domaine + OG image** : ajouter `metadataBase`, `og:image` et le domaine
      personnalisé une fois connus.
