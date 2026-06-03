# Kasa

Application Next.js de location immobiliere entre particuliers.

## Commandes

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
```

## Architecture

Le projet utilise l'App Router de Next.js.

- `src/app` contient les routes, layouts, pages et fichiers SEO Next.js.
- `src/features` contient la logique metier par domaine : auth, proprietes, messages.
- `src/shared` contient les composants et utilitaires reutilisables.
- `src/lib` contient la configuration et le client API.
- `src/styles` contient les styles globaux et les tokens CSS.

## Rendu serveur et client

Les pages sont rendues cote serveur autant que possible. Les composants client
sont limites aux zones qui ont besoin d'interaction :

- formulaire de connexion ;
- bouton favori ;
- galerie d'images ;
- menu mobile ;
- lien de messagerie avec comportement responsive.

Cette separation permet de reduire le JavaScript envoye au navigateur et
d'ameliorer le SEO.

## SEO

Le fichier `src/app/sitemap.ts` genere `/sitemap.xml`.

Le sitemap inclut uniquement les pages publiques et indexables :

- accueil ;
- page a propos ;
- fiches logements dynamiques.

Les pages privees ou liees a un utilisateur, comme favoris et messages, ne sont
pas ajoutees au sitemap.

## Donnees structurees

Les microdonnees schema.org sont injectees en JSON-LD avec le composant
`JsonLinkedData`.

- `src/app/schema.ts` decrit le site avec `Organization` et `WebSite`.
- `src/app/announce/[id]/announce.schema.ts` decrit chaque logement avec
  `Accommodation`, `Offer`, `BreadcrumbList`, `AggregateRating` et `Person`.

Les URLs publiques utilisent `NEXT_PUBLIC_SITE_URL`. En developpement, la valeur
par defaut est `http://localhost:3000`.

## Documentation du code

La documentation est faite avec JSDoc sur les fonctions et composants qui portent
de la logique importante :

- services API ;
- server actions ;
- sitemap ;
- microdonnees schema.org ;
- composants partages ;
- composants interactifs client.

Les commentaires sont volontairement concentres sur les intentions metier,
l'accessibilite, le SEO et les choix serveur/client.

## Variables d'environnement

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`NEXT_PUBLIC_SITE_URL` doit etre remplacee par l'URL publique du site en
production.

## Deploiement front seul

Pour deployer uniquement le front sans backend, l'application expose des routes
API mockees directement dans Next.js :

- `GET /api/properties`
- `GET /api/properties/:id`
- `GET /api/messages`
- `POST /auth/login`
- routes de favoris et de messages associees aux logements

Sur Vercel, laissez `NEXT_PUBLIC_API_URL` vide. Les services utilisent alors
directement les donnees mockees du front :

```bash
NEXT_PUBLIC_SITE_URL=https://votre-front.vercel.app
```

Les logements, favoris, messages et la connexion utilisent des donnees locales
de demonstration situees dans `src/mocks`.

Si vous souhaitez rebrancher un vrai backend plus tard, renseignez simplement :

```bash
NEXT_PUBLIC_API_URL=https://url-de-votre-api
```
