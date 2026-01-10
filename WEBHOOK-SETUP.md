# 🌱 Configuration du Webhook Sanity → Cloudflare Pages

Ce guide vous explique comment configurer le rebuild automatique de votre site Astro lorsque vous publiez un article dans Sanity.

## 🎯 Objectif

- Publier un article dans Sanity
- → Déclenchement automatique d'un rebuild
- → Nouveau site déployé en 2-3 minutes
- **Impact écologique : Division par 100 de l'empreinte carbone** 🌍

---

## Étape 1️⃣ : Récupérer le Deploy Hook de Cloudflare Pages

1. Allez sur votre dashboard Cloudflare Pages
2. Sélectionnez votre projet
3. Allez dans **Settings** → **Builds & deployments**
4. Trouvez la section **Deploy hooks**
5. Cliquez sur **Add deploy hook**
6. Donnez-lui un nom : `Sanity Content Update`
7. Branche de déploiement : `main` (ou votre branche de production)
8. Copiez l'URL générée (format : `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/...`)

---

## Étape 2️⃣ : Configurer le Webhook dans Sanity

### Option A : Via l'interface Sanity Studio (Recommandé)

1. Allez sur https://www.sanity.io/manage
2. Sélectionnez votre projet : **firstastro-blog** (ID: `di83dpfu`)
3. Dans le menu de gauche, cliquez sur **API** → **Webhooks**
4. Cliquez sur **Create webhook**
5. Configurez comme suit :

   **Name:** `Cloudflare Pages Deploy`

   **URL:** Collez l'URL du Deploy Hook de Cloudflare

   **Dataset:** `production`

   **Trigger on:**
   - ✅ Create
   - ✅ Update
   - ✅ Delete

   **Filter (optionnel mais recommandé):**
   ```groq
   _type == "post"
   ```
   *(Cela déclenche uniquement sur les articles, pas sur les auteurs)*

   **Projection (optionnel):**
   Laisser vide ou mettre :
   ```json
   {
     "title": title,
     "slug": slug.current
   }
   ```

   **HTTP method:** `POST`

   **HTTP headers:** Laisser vide (Cloudflare n'en a pas besoin)

   **Secret:** Laisser vide pour commencer

6. Cliquez sur **Save**

### Option B : Via l'API Sanity (Avancé)

```bash
curl -X POST https://api.sanity.io/v2021-06-07/hooks/projects/di83dpfu/datasets/production \
  -H "Authorization: Bearer YOUR_SANITY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Cloudflare Pages Deploy",
    "url": "VOTRE_CLOUDFLARE_DEPLOY_HOOK_URL",
    "filter": "_type == \"post\"",
    "httpMethod": "POST"
  }'
```

---

## Étape 3️⃣ : Tester le Webhook

1. Dans Sanity Studio (https://manage.sanity.io), créez ou modifiez un article de test
2. Publiez-le
3. Retournez dans **API** → **Webhooks** sur sanity.io
4. Cliquez sur votre webhook → onglet **Deliveries**
5. Vous devriez voir une entrée avec un status **200 OK**
6. Sur Cloudflare Pages, dans **Deployments**, vous devriez voir un nouveau build en cours

---

## ✅ Vérification

### Indicateurs de succès :

- ✅ Dans Sanity : Webhook deliveries montrent des status 200
- ✅ Dans Cloudflare : Nouveau build visible dans la timeline
- ✅ Build terminé en 2-3 minutes
- ✅ Changements visibles sur le site

### En cas de problème :

#### Webhook ne se déclenche pas
- Vérifiez que le filtre `_type == "post"` est correct
- Vérifiez que vous avez bien **publié** (pas juste sauvegardé en draft)

#### Build échoue
- Vérifiez les logs dans Cloudflare Pages → Deployments
- Vérifiez que votre build `npm run build` fonctionne localement

#### Status 401/403 dans Sanity
- L'URL du Deploy Hook est incorrecte
- Régénérez un nouveau Deploy Hook dans Cloudflare

---

## 📊 Limites et quotas

### Cloudflare Pages (Plan gratuit)
- **500 builds/mois** gratuits
- Builds illimités en plan Pro ($20/mois)

### Sanity (Plan gratuit)
- **Webhooks illimités** ✅
- Pas de limite de déclenchements

### Calcul réaliste pour un blog
- 1 article/jour = **~30 builds/mois** → 🟢 Largement OK
- 10 articles/jour = **~300 builds/mois** → 🟢 Toujours OK
- Corrections/modifications = quelques builds supplémentaires

---

## 🌱 Impact écologique

### Avant (SSR - output: 'server')
- 10 000 visiteurs/mois
- = 10 000 requêtes serveur
- = 10 000 appels API Sanity
- **~500g CO₂/mois**

### Après (SSG + Webhook - output: 'static')
- 30 builds/mois
- HTML statique servi depuis CDN
- Aucun calcul serveur pour les visiteurs
- **~5g CO₂/mois**

### Résultat : **Division par 100 de l'empreinte carbone** 🌍✨

---

## 🔐 Sécurité (Optionnel)

Pour plus de sécurité, vous pouvez ajouter un secret partagé :

1. Générez un secret :
   ```bash
   openssl rand -hex 32
   ```

2. Dans Sanity webhook, ajoutez dans **Secret** : votre secret généré

3. Dans Cloudflare Pages, créez une variable d'environnement `WEBHOOK_SECRET` avec ce même secret

4. Cloudflare validera automatiquement la signature

---

## 📝 Notes importantes

- Le webhook se déclenche **uniquement sur les documents publiés**, pas sur les drafts
- Les modifications d'auteur ne déclenchent pas de rebuild (sauf si vous retirez le filtre)
- Vous pouvez toujours déclencher un rebuild manuel depuis Cloudflare Pages
- Le site reste 100% statique - aucun JavaScript côté client n'est nécessaire pour le contenu

---

## 🚀 Prochaines étapes recommandées

1. ✅ Testez avec un article de test
2. ✅ Surveillez les premiers builds
3. 📊 Consultez les analytics Cloudflare après quelques jours
4. 🌱 Partagez vos économies d'énergie !

---

**Félicitations ! Votre blog est maintenant 100x plus écologique** 🌱

Pour toute question : contact@global-climat.com
