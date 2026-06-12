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

Site statique, aucun build requis. Deux options :

**Via le CLI :**

```bash
vercel          # premier déploiement (preview) — répondre "Other" / pas de build / output "."
vercel --prod   # déploiement en production
```

**Via l'import GitHub :** pousser le repo sur GitHub puis l'importer sur vercel.com avec
les réglages : Framework Preset `Other`, Build Command vide, Output Directory `.` (racine).

La configuration [vercel.json](vercel.json) gère les URLs propres (`cleanUrls`), le cache
des assets (1 jour + `stale-while-revalidate`) et les headers de sécurité. `404.html` est
servie automatiquement par Vercel pour les pages introuvables, `robots.txt` autorise
l'indexation.

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
