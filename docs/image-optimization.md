# Optimisation des images

## Règle générale

- Les photos et captures matricielles utilisées par le site doivent être placées dans `src/assets/`, jamais dans `public/`.
- Les SVG (logos, icônes et illustrations vectorielles) peuvent rester dans `public/` : ils sont déjà légers et ne doivent pas être convertis en WebP.
- Utiliser `astro:assets` (`Image`) pour les imports statiques et `src/components/OptimizedImage.astro` pour les chemins dynamiques.
- Les images responsives sont générées en WebP, avec plusieurs largeurs et une qualité par défaut de 78.
- Réserver `loading="eager"` et `fetchpriority="high"` à l’image principale visible dès l’ouverture de la page. Les autres images doivent rester en chargement différé.

## Images du blog et Keystatic

Les champs image Keystatic enregistrent les fichiers dans `src/assets/blog` avec le chemin MDX `../../assets/blog/`.

- `ImageSlot` optimise automatiquement l’image en WebP et génère plusieurs tailles.
- Les images optionnelles du composant `Steps` suivent le même pipeline.
- Les couvertures sont rendues directement avec `astro:assets`.

Aucune conversion manuelle n’est nécessaire lors de l’ajout d’une nouvelle image dans Keystatic.

## Chemins dynamiques

`OptimizedImage.astro` accepte les deux formes utilisées dans le projet :

- `/assets/...` pour les données historiques et les tableaux de configuration ;
- `../../assets/...` pour les contenus MDX générés par Keystatic.

Dans les deux cas, le fichier source correspondant doit exister sous `src/assets/`.
