# AI_RULES.md

## Tech Stack
- React 18 with TypeScript
- React Router (v6) for routing – keep all route definitions in `src/App.tsx`
- shadcn/ui component library (built on Radix UI and Tailwind CSS) – use prebuilt components; do not modify them directly
- Tailwind CSS for all styling – apply utility classes for layout, spacing, colors, typography, etc.
- Lucide React for icons – import icons from `lucide-react`
- Radix UI primitives (via shadcn/ui) for accessible behavior when needed
- Source code organization:
  - All source files live in the `src/` directory
  - Pages go in `src/pages/` (the main/default page is `src/pages/Index.tsx`)
  - Reusable components go in `src/components/`
  - When adding a new component, update `src/pages/Index.tsx` (or the appropriate page) to render it
- Styling rule: Always use Tailwind CSS; avoid writing custom CSS or CSS-in-JS unless absolutely necessary
- Component rule: Prefer shadcn/ui components; if you need to customize behavior or appearance, create a new component that wraps or extends the shadcn/ui one rather than editing the original
- File naming: Use PascalCase for component files (e.g., `MyButton.tsx`) and camelCase for utility files
- State management: Use React's built-in hooks (`useState`, `useEffect`, `useContext`) for local state; introduce a state library (e.g., Zustand, Jotai) only when global state becomes complex
- Data fetching: Use React Query or SWR for server state; avoid manual `fetch` in components unless it's a one‑off call
- Code quality: Enable ESLint and Prettier; keep TypeScript strict; aim for zero lint and type‑check errors

## Règle visuelle permanente
- Sur tout le site, les boutons avec un fond orange doivent toujours avoir un texte blanc, jamais noir ou sombre, y compris au survol et au focus.

## Images
- Toute nouvelle image matricielle du site ou du blog doit être enregistrée dans `src/assets/` et rendue avec `astro:assets` ou `src/components/OptimizedImage.astro` afin de générer automatiquement des variantes WebP responsives.
- Ne placer dans `public/` que les SVG, favicons et fichiers qui doivent impérativement conserver une URL publique inchangée.
- Utiliser le chargement différé par défaut ; réserver `loading="eager"` et `fetchpriority="high"` à l’image principale visible au chargement.
