# firstastro - Blog avec Sanity CMS

Votre projet Astro est maintenant configuré avec Sanity CMS pour gérer le contenu de votre blog !

## 🚀 Démarrage rapide

### 1. Lancer le serveur de développement

```bash
npm run dev
```

Votre site sera accessible sur `http://localhost:4321`

### 2. Accéder au Studio Sanity

Une fois le serveur lancé, accédez à : `http://localhost:4321/studio`

C'est ici que vous pourrez créer et gérer vos articles de blog.

## 📁 Structure du projet

```
/
├── schemaTypes/          # Schémas Sanity (modèles de contenu)
│   ├── post.ts          # Schéma pour les articles de blog
│   ├── author.ts        # Schéma pour les auteurs
│   └── index.ts
├── src/
│   ├── pages/
│   │   ├── index.astro  # Page d'accueil
│   │   ├── blog.astro   # Liste des articles
│   │   └── blog/
│   │       └── [slug].astro  # Page d'article individuel
│   └── utils/
│       └── sanity.ts    # Utilitaires Sanity (client, images)
├── sanity.config.ts     # Configuration du Studio Sanity
├── sanity.cli.ts        # Configuration CLI Sanity
└── .env                 # Variables d'environnement (ne pas commiter !)
```

## 📝 Créer votre premier article

1. Accédez au Studio : `http://localhost:4321/studio`
2. Créez d'abord un **Auteur** :
   - Cliquez sur "Auteur" dans le menu
   - Ajoutez un nom, une photo (optionnelle) et une biographie
   - Cliquez sur "Publish"
3. Créez ensuite un **Article de blog** :
   - Cliquez sur "Article de blog" dans le menu
   - Remplissez le titre, le slug (généré automatiquement), l'extrait
   - Ajoutez une image principale (optionnelle)
   - Sélectionnez un auteur
   - Rédigez le contenu dans l'éditeur
   - Cliquez sur "Publish"
4. Visitez `http://localhost:4321/blog` pour voir votre article !

## 🔑 Informations de projet

- **Project ID**: `di83dpfu`
- **Dataset**: `production`
- **Studio URL locale**: `http://localhost:4321/studio`

## 🛠️ Commandes utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Build du site pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Déployer le schéma Sanity
npx sanity schema deploy

# Lancer le Studio Sanity en standalone (optionnel)
npx sanity dev

# Déployer le Studio sur Sanity.io (optionnel)
npx sanity deploy
```

## 🎨 Schémas disponibles

### Article de blog (post)
- Titre
- Slug (URL-friendly)
- Auteur (référence)
- Image principale avec texte alternatif
- Date de publication
- Extrait
- Contenu (Portable Text - éditeur riche)

### Auteur (author)
- Nom
- Slug
- Photo
- Biographie (Portable Text)

## 🔒 Sécurité

Le fichier `.env` contient vos tokens API Sanity. **Ne le commitez jamais sur Git !**
Il est déjà ajouté au `.gitignore`.

## 📚 Ressources

- [Documentation Astro](https://docs.astro.build)
- [Documentation Sanity](https://www.sanity.io/docs)
- [Intégration @sanity/astro](https://github.com/sanity-io/sanity-astro)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## 🎉 Prochaines étapes

Quelques idées pour améliorer votre blog :

- Ajouter des catégories/tags pour les articles
- Implémenter la pagination sur la page blog
- Ajouter un système de commentaires
- Créer une page "À propos"
- Optimiser le SEO avec des meta tags
- Ajouter un sitemap
- Implémenter la recherche d'articles

Bon blogging ! 🚀
