# TRESORIUM — Site vitrine

Site vitrine statique pour TRESORIUM, cabinet indépendant de conseil en stratégie financière
et Direction Financière externalisée (fondateur : Jean-Luc Gimeno).

**Signature** : _La finance au service de la stratégie._
**Persona** : sécurité, sérénité, rentabilité, disponibilité de l'équipe.

## Stack

Site 100 % statique, sans build : HTML + CSS + JS vanilla.

```
index.html              # Page unique (one-page, ancres par section)
assets/css/style.css    # Design system (navy/or, Cormorant Garamond + Inter)
assets/js/main.js       # Header sticky, menu mobile, reveal au scroll, formulaire mailto
assets/img/favicon.svg
```

## Développement

```bash
python3 -m http.server 8742
# → http://localhost:8742
```

## Déploiement (Vercel)

**🌐 En ligne : <https://tresorium.vercel.app>** (projet `tresorium`, compte
`guillaume-sainthillier`). Un domaine personnalisé pourra être attaché gratuitement dans
les réglages du projet (Settings → Domains).

```bash
npx vercel deploy --prod   # re-déployer en production
npx vercel deploy          # déploiement de preview (URL protégée par auth Vercel)
```

La configuration [vercel.json](vercel.json) gère les URLs propres (`cleanUrls`), le cache
des assets (1 jour + `stale-while-revalidate`) et les headers de sécurité. `404.html` est
servie automatiquement par Vercel pour les pages introuvables, `robots.txt` autorise
l'indexation.

> ⚠️ Le plan Hobby de Vercel est officiellement réservé à un usage non commercial.
> Pour un site client en production : plan Pro, ou alternative gratuite compatible
> usage commercial (Cloudflare Pages).

## Formulaire de contact (API)

Le formulaire poste sur `/api/contact` ([api/contact.js](api/contact.js)), une fonction
serverless Vercel qui envoie l'e-mail via [Resend](https://resend.com) (gratuit :
3 000 e-mails/mois). Tant que l'API n'est pas configurée (HTTP 503), le site bascule
automatiquement sur l'ouverture du client mail du visiteur — le formulaire n'est donc
jamais cassé.

Pour activer l'envoi :

1. Créer un compte Resend **avec l'adresse `tresorium.jl@gmail.com`** (sans domaine
   vérifié, Resend ne délivre qu'à l'adresse du compte).
2. Générer une clé API puis : `npx vercel env add RESEND_API_KEY production`
3. Re-déployer : `npx vercel deploy --prod`

Variables optionnelles : `CONTACT_TO` (destinataire, défaut `tresorium.jl@gmail.com`),
`CONTACT_FROM` (expéditeur, défaut `onboarding@resend.dev` — à remplacer par une adresse
du domaine une fois celui-ci vérifié chez Resend, ce qui lèvera aussi la restriction de
destinataire). Anti-spam : champ honeypot côté client + validation côté serveur.

## Coordonnées

- E-mail : `tresorium.jl@gmail.com` (présent dans `index.html`, `main.js` et le JSON-LD)
- Téléphone : 06 41 33 50 34
- Adresse : 6 place Wilson, 31000 Toulouse, France

## À remplacer avant mise en ligne

- [ ] **Photo du fondateur** : placeholder dans la section « Mot du fondateur » — remplacer
      par le portrait de Jean-Luc Gimeno (format 4:5).
- [ ] **Témoignages** : rédigés à titre illustratif — à remplacer par de vrais retours clients.
- [ ] **Formulaire de contact** : actuellement un fallback `mailto:`. Brancher un vrai backend
      (Formspree, Netlify Forms, ou endpoint maison) si souhaité.
- [ ] **Mentions légales / politique de confidentialité** : liens placeholder dans le footer.
- [ ] **Domaine + OG image** : ajouter `og:url` / `og:image` une fois le domaine connu.

## Contenu

Sections : hero (1er RDV gratuit), mot du fondateur (+ photo), vision & mission, 6 valeurs,
offres — premier rendez-vous gratuit puis 2 formules : accompagnement au temps passé
(200 € HT/heure ou 890 € HT/jour, dégressif sur devis selon le projet) et audit & plan
d'action (890 € HT) —, méthodologie en 5 étapes, témoignages, citation d'engagement, contact.
