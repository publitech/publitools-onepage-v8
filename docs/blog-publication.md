# Blog PubliTools

## Architecture

Le blog utilise Astro, les collections de contenu et MDX. Keystatic est l’éditeur gratuit, en stockage local. Aucun article n’est fourni ou publié par défaut.

- Pages : `/fr/blog/`, `/en/blog/`, `/es/blog/`, `/de/blog/`.
- Éditeur : `/keystatic/`, uniquement sur le serveur de développement.
- Articles : `src/content/blog/*.mdx`.
- Images : `src/assets/blog/`, traitées par Astro.
- Configuration éditoriale : `keystatic.config.ts`.

L’intégration Keystatic est activée uniquement avec le démarrage `astro dev` du projet. La compilation de production ne contient ni l’interface ni les API locales de Keystatic. Ne pas exposer le serveur de développement sur Internet : l’éditeur local est destiné à un environnement de confiance, pas à une administration publique authentifiée.

## Rédiger

1. Ouvrir `/keystatic/` sur le site en développement et créer un article.
2. Renseigner titre, langue, résumé, sujet, auteur, date et couverture avec texte alternatif. Garder « Brouillon » activé pendant la rédaction.
3. Rédiger le corps avec les titres H2/H3, listes, tableaux, citations, liens et images. Le bloc « Encadré conseil » accepte un titre et du contenu riche. Les points « À retenir » sont saisis séparément.
4. Le sommaire et le temps de lecture sont calculés automatiquement.
5. Utiliser un slug stable et distinct pour chaque traduction. Donner aux traductions le même identifiant commun, avec une seule version par langue. Les liens hreflang ne ciblent que les versions effectivement publiées.
6. Désactiver « Brouillon » lorsque l’article est prêt. La date sert de date éditoriale et de tri ; ce n’est pas un planificateur automatique.
7. Enregistrer. Les fichiers sont modifiés localement ; leur mise en ligne nécessite leur enregistrement dans le dépôt et un nouveau déploiement du site.

Les brouillons ne disposent pas de route publique. L’éditeur permet de relire le contenu ; il ne fournit pas une prévisualisation privée du modèle d’article final.

## Publication en ligne : connexion restante

Il faut connaître le dépôt GitHub et l’hébergement pour configurer une administration distante authentifiée et les déploiements automatiques. Cette connexion n’est pas activée. Il ne suffit pas de déployer ce site statique pour pouvoir éditer en ligne.

Keystatic peut utiliser un stockage GitHub avec une GitHub App et une administration exécutée sur un hébergement compatible. L’application, ses secrets serveur et le déploiement doivent être configurés ensemble. Ne jamais placer un secret dans le navigateur ou dans le dépôt. Keystatic Cloud n’est pas requis. Les éventuels quotas et coûts d’hébergement restent distincts du CMS gratuit.

## Référencement et rédaction

Le sitemap Astro existant inclut les pages statiques générées, donc uniquement les articles publiés. Le modèle fournit canonical, métadonnées sociales, BlogPosting, fil d’Ariane et traductions disponibles. Les images de couverture sont responsives et converties en WebP. Le blog n’ajoute pas d’hydratation React publique ; les scripts de suivi du layout existant restent présents.

Identifier les auteurs réels, citer des sources avec des liens, dater les mises à jour et rédiger des réponses originales et concrètes. Aucun classement Google ni citation par une IA n’est garanti.

Les fichiers MDX sont du code de confiance : réserver les droits de rédaction aux collaborateurs autorisés. Ne pas importer du MDX non vérifié depuis des utilisateurs anonymes.
