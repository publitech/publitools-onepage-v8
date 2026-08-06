import type { HomepageVariant, VariantSlug } from './types';

export const HOMEPAGE_VARIANT_CTA = 'https://app.publichantier.fr/?signup=yes';

const asset = (path: string) => `/homepage-variants/${path}`;

const baseSections = (slug: VariantSlug): HomepageVariant['sections'] => [
  {
    id: `${slug}-proof`,
    kind: 'proof-grid',
    eyebrow: 'Preuves à intégrer',
    title: 'Preuves, captures et assets Léa à brancher',
    body: 'Stub technique : cette zone accueillera les preuves validées, sans inventer de chiffre, témoignage ou dashboard.',
    items: [
      { title: 'Copy Pedro', body: 'Brief wave 3 disponible, intégration complète prévue en vague suivante.', meta: 'source validée' },
      { title: 'Assets Léa', body: 'Emplacements préparés pour visuels statutés final / brouillon / manquant.', meta: 'à recevoir' },
      { title: 'Claims Nina/Patrick', body: 'Claims sensibles à vérifier avant version review complète.', meta: 'garde-fou' },
    ],
  },
  {
    id: `${slug}-workflow`,
    kind: 'workflow-demo',
    eyebrow: 'Démo produit',
    title: 'Workflow chantier → publication',
    body: 'Zone de mini-démo destinée à montrer photo/vidéo chantier, vocal, validation puis publication multi-réseaux sans vendre de fonctionnalité future.',
    items: [
      { title: 'Photo ou vidéo chantier', body: 'Point de départ réel, depuis le téléphone.' },
      { title: 'Message vocal', body: 'Le pro explique ce qu’il veut dire simplement.' },
      { title: 'Post prêt à valider', body: 'PubliTools aide à transformer la matière en publication professionnelle.' },
    ],
  },
  {
    id: `${slug}-capabilities`,
    kind: 'capability-cards',
    eyebrow: 'Capacités actuelles',
    title: 'Ce que la variante doit couvrir sans devenir catalogue',
    items: [
      { title: 'Réseaux sociaux', body: 'Créer des publications plus vite pour rester visible.' },
      { title: 'Photos de chantier', body: 'Valoriser le travail déjà fait, sans shooting compliqué.' },
      { title: 'Avis et présence locale', body: 'Mentionner avec prudence, sans promettre résultats commerciaux automatiques.' },
    ],
  },
  {
    id: `${slug}-comparison`,
    kind: 'comparison-block',
    eyebrow: 'Différenciation',
    title: 'Avant / après prévu pour la preview',
    body: 'Stub comparatif : remplacé par une mise en scène concrète lorsque les assets et arbitrages visuels seront livrés.',
    items: [
      { title: 'Avant', body: 'Photos qui restent dans le téléphone, posts irréguliers, formulation improvisée.' },
      { title: 'Après', body: 'Matière chantier transformée en publication claire, vérifiable et validée par le pro.' },
    ],
  },
  {
    id: `${slug}-faq`,
    kind: 'faq-block',
    title: 'Questions à intégrer',
    faqs: [
      { question: 'Est-ce que cette variante invente des résultats ?', answer: 'Non. Les zones de preuve sont volontairement en stub tant que les assets et chiffres ne sont pas validés.' },
      { question: 'Le pricing est-il affiché ?', answer: 'Non. Décision Patrick : PricingSection masqué dans les cinq previews.' },
    ],
  },
  {
    id: `${slug}-final-cta`,
    kind: 'final-cta',
    title: 'CTA final',
    body: 'CTA conservé selon décision Patrick, sans modification de promesse.',
    cta: { label: 'Essayer PubliTools', href: HOMEPAGE_VARIANT_CTA },
  },
];

const variantESections: HomepageVariant['sections'] = [
  {
    id: 'fonctionnement',
    kind: 'comparison-block',
    eyebrow: 'La voie simple entre deux extrêmes',
    title: 'Entre bricolage et délégation complète, il manque une voie maîtrisée',
    body: 'La variante E ne caricature ni le fait maison ni les agences. Elle montre pourquoi PubliTools peut aider une entreprise du bâtiment à produire plus proprement, à partir de sa matière terrain, tout en gardant la validation humaine.',
    items: [
      { title: 'Fait maison', body: 'C’est authentique, mais ça prend du temps et le rendu change selon les jours.' },
      { title: 'Délégué', body: 'Utile parfois, mais il faut briefer, valider, corriger, et le ton peut s’éloigner du chantier.' },
      { title: 'Avec PubliTools', body: 'Vous partez de votre matière terrain. L’outil prépare une version propre. Vous gardez la validation.' },
    ],
  },
  {
    id: 'matiere-image',
    kind: 'proof-grid',
    eyebrow: 'Vos chantiers, vos mots, votre image',
    title: 'La publication part de ce que votre entreprise possède déjà',
    body: 'Photos, vidéos fournies, avis clients, vocal métier, logo et couleurs si vous les avez : PubliTools assemble cette matière dans une publication prête à relire, sans promettre une direction artistique sur mesure.',
    items: [
      { title: 'Matière réelle', body: 'Photos, vidéos fournies, avis clients et explications vocales restent la base du contenu.', meta: 'terrain' },
      { title: 'Mise en forme', body: 'Texte clair, design adapté au bâtiment et formats prêts pour les surfaces choisies.', meta: 'publication' },
      { title: 'Cohérence', body: 'Logo et couleurs peuvent être réutilisés si disponibles, sans vendre une charte complète automatique.', meta: 'image' },
      { title: 'Validation', body: 'Le patron relit, corrige et choisit avant que le contenu parte en ligne.', meta: 'contrôle' },
    ],
  },
  {
    id: 'designs-propres',
    kind: 'capability-cards',
    eyebrow: 'Designs sobres',
    title: 'Des designs propres, pas des templates flashy',
    body: 'L’objectif est de mieux présenter la réalisation, pas de maquiller le chantier. Les visuels restent sobres, lisibles et adaptés à une entreprise du bâtiment.',
    items: [
      {
        title: 'Adaptés au bâtiment',
        body: 'Des compositions centrées sur la réalisation, la preuve et les détails métier.',
        image: { src: asset('variant-e/mockups/variant-e-mockup-choix-designs.png'), webpSrc: asset('variant-e/mockups/variant-e-mockup-choix-designs.webp'), alt: 'Mockup PubliTools montrant trois designs sobres de publication bâtiment avec sélection active orange' },
      },
      {
        title: 'Plusieurs choix',
        body: 'Plusieurs designs prédéfinis peuvent être proposés pour choisir celui qui convient.',
        image: { src: asset('pool-photos/encours-cuisine-renovation.png'), webpSrc: asset('pool-photos/encours-cuisine-renovation.webp'), alt: 'Chantier de rénovation de cuisine utilisé comme matière visuelle pour une publication bâtiment' },
      },
      {
        title: 'Limite honnête',
        body: 'PubliTools n’est pas une suite Canva complète ni une création sur mesure garantie.',
        image: { src: asset('pool-photos/artisan-electricien-atelier.png'), webpSrc: asset('pool-photos/artisan-electricien-atelier.webp'), alt: 'Artisan électricien dans un atelier, exemple de contexte métier réel à valoriser sans surpromesse' },
      },
    ],
  },
  {
    id: 'presence-connectee',
    kind: 'workflow-demo',
    eyebrow: 'Publication connectée',
    title: 'Votre image reste reliée aux réseaux, à Google Business et aux avis',
    body: 'La page évite l’angle social-only : les contenus préparés peuvent servir à montrer l’activité sur les réseaux, à garder une fiche Google Business plus active et à valoriser des avis clients réels.',
    items: [
      { title: 'Réseaux', body: 'Facebook, Instagram et LinkedIn pour montrer l’activité, les réalisations et les détails de chantier.' },
      { title: 'Google Business', body: 'Photos, contenus et avis valorisés pour nourrir la présence locale, sans promesse de classement.' },
      { title: 'Avis', body: 'Demande par SMS et transformation d’un avis réel en publication prête à valider.' },
      { title: 'Validation', body: 'Relire, corriger, puis publier ou programmer selon les canaux disponibles.' },
    ],
  },
  {
    id: 'main',
    kind: 'proof-grid',
    eyebrow: 'Vous gardez la main',
    title: 'Ce qui se voit en ligne ne part pas sans votre accord',
    body: 'La promesse reste volontairement concrète : PubliTools prépare, l’entreprise vérifie les mots, les détails métier, le ton et la diffusion.',
    items: [
      { title: 'Relire', body: 'Vérifier les mots, les détails métier et le ton avant publication.', meta: '1' },
      { title: 'Corriger', body: 'Ajuster le texte ou la présentation si un élément ne correspond pas.', meta: '2' },
      { title: 'Choisir', body: 'Sélectionner le design sobre qui correspond à l’image fournie.', meta: '3' },
      { title: 'Publier', body: 'Diffuser maintenant ou programmer plus tard sur les surfaces disponibles.', meta: '4' },
    ],
  },
  {
    id: 'faq',
    kind: 'faq-block',
    title: 'Questions fréquentes',
    faqs: [
      { question: 'Est-ce que PubliTools remplace une agence ?', answer: 'Non. PubliTools aide à produire régulièrement des contenus propres depuis votre matière terrain. Une agence peut rester utile pour une stratégie complète ou une création sur mesure.' },
      { question: 'Est-ce que PubliTools crée ma charte graphique ?', answer: 'Non. Si vous avez un logo et des couleurs, PubliTools peut les réutiliser. Il ne faut pas promettre une identité complète automatique.' },
      { question: 'Est-ce que le rendu sera générique ?', answer: 'L’objectif est de garder vos chantiers, vos avis et vos mots, puis de les présenter plus proprement. La validation reste importante.' },
      { question: 'Est-ce seulement pour les réseaux sociaux ?', answer: 'Non. La page inclut aussi Google Business et les avis clients, sans réduire PubliTools à un outil social-only.' },
      { question: 'Puis-je continuer à corriger les textes ?', answer: 'Oui. Les publications sont prêtes à relire et modifiables avant diffusion.' },
    ],
  },
  {
    id: 'cta-final',
    kind: 'final-cta',
    title: 'Gardez votre matière. Gagnez un rendu plus propre.',
    body: 'Une photo, un avis, un vocal, votre logo si vous l’avez : PubliTools prépare une publication à votre image, sans vous faire perdre le contrôle.',
    cta: { label: 'Créer un post à votre image', href: HOMEPAGE_VARIANT_CTA },
  },
];

const variantASections: HomepageVariant['sections'] = [
  {
    id: 'fonctionnement',
    kind: 'proof-grid',
    eyebrow: 'La publicité Internet, sans l’usine marketing',
    title: 'Ce que PubliTools prépare dans la semaine — et ce que vous gardez',
    body: 'Plus besoin de repartir de zéro pour chaque réseau : vous ajoutez une photo, une vidéo ou un avis, vous expliquez le contexte, puis PubliTools prépare une version publiable. Votre expertise métier, votre validation et votre décision restent au centre.',
    items: [
      { title: 'Textes prêts à relire', body: 'Des publications rédigées à partir de vos chantiers, avis et mots métier.', meta: 'contenu' },
      { title: 'Designs avec vos repères', body: 'Logo et couleurs réutilisés si vous les avez fournis, sans promettre de charte automatique.', meta: 'design' },
      { title: 'Réseaux prévus', body: 'Facebook, Instagram, LinkedIn et Google Business restent dans une logique simple : préparer, relire, publier ou programmer.', meta: 'diffusion' },
      { title: 'Avis clients valorisés', body: 'Demande par SMS avec lien Google, puis transformation d’un avis réel en publication prête à valider.', meta: 'avis' },
    ],
  },
  {
    id: 'demo-matiere-publicite',
    kind: 'workflow-demo',
    eyebrow: 'Démonstration simple',
    title: 'Matière terrain → publicité prête',
    body: 'Le mécanisme montre la simplicité sans réduire PubliTools à photo + vocal : il sert de preuve concrète pour comprendre la catégorie.',
    items: [
      { title: 'Vous ajoutez la matière', body: 'Photo de chantier, vidéo fournie, avis Google ou réalisation récente.' },
      { title: 'Vous expliquez', body: 'Un vocal court suffit pour donner le contexte : métier, contrainte, résultat, détail important.' },
      { title: 'PubliTools prépare', body: 'Texte clair, visuel propre, format adapté et réseaux proposés.' },
      { title: 'Vous validez', body: 'Vous relisez, corrigez si besoin, choisissez les réseaux et publiez ou programmez.' },
    ],
  },
  {
    id: 'pense-batiment',
    kind: 'capability-cards',
    eyebrow: 'Pensé pour le bâtiment',
    title: 'Des mots de chantier, pas un outil pour community managers',
    body: 'Une publication ne sert pas à faire joli. Elle montre un chantier, un avis, un détail de qualité ou une entreprise sérieuse.',
    items: [
      {
        title: 'Métiers visibles',
        body: 'Couverture, rénovation, plomberie, chauffage, électricité, menuiserie, paysage, façade : la page doit sentir le métier.',
        image: { src: asset('pool-photos/artisan-plombier-intervention.png'), webpSrc: asset('pool-photos/artisan-plombier-intervention.webp'), alt: 'Plombier français en intervention, contexte métier crédible pour une entreprise du bâtiment' },
      },
      {
        title: 'Photos présentées, pas maquillées',
        body: 'Vos photos réelles peuvent être mieux présentées sans être transformées en faux chantier.',
        image: { src: asset('pool-photos/encours-cuisine-renovation.png'), webpSrc: asset('pool-photos/encours-cuisine-renovation.webp'), alt: 'Cuisine en cours de rénovation avec outils visibles et contexte de chantier réel' },
      },
      {
        title: 'Avis et Google Business dans la même logique',
        body: 'Les avis clients et contenus Google Business sont traités comme des preuves à préparer et valider, sans promesse de classement.',
        image: { src: asset('pool-photos/artisan-electricien-atelier.png'), webpSrc: asset('pool-photos/artisan-electricien-atelier.webp'), alt: 'Électricien dans son atelier avec matériel professionnel et posture de dirigeant TPE' },
      },
    ],
  },
  {
    id: 'surfaces',
    kind: 'comparison-block',
    eyebrow: 'Réseaux, avis, Google Business',
    title: 'Une seule logique : rendre visible ce que l’entreprise fait déjà',
    body: 'La variante A couvre les piliers produit sans les empiler en catalogue. Chaque surface reste liée à la même promesse : préparer une publicité Internet basée sur le réel.',
    items: [
      { title: 'Réseaux sociaux', body: 'Publiez sur Facebook, Instagram et LinkedIn sans copier-coller partout.' },
      { title: 'Google Business', body: 'Gardez votre fiche plus active avec des photos, contenus et avis valorisés, sans promesse de classement.' },
      { title: 'Avis clients', body: 'Demandez un avis par SMS avec un lien Google, puis transformez un avis réel en post prêt à publier.' },
    ],
  },
  {
    id: 'controle',
    kind: 'proof-grid',
    eyebrow: 'Vous gardez le contrôle',
    title: 'L’IA prépare. Vous décidez avant publication.',
    body: 'Chaque contenu reste à relire et à modifier. PubliTools ne doit jamais donner l’impression de publier n’importe quoi à votre place.',
    items: [
      { title: 'Validation visible', body: 'Vous relisez, ajustez et choisissez la version finale avant diffusion.', meta: 'humain' },
      { title: 'Pas d’avis inventés', body: 'Un avis valorisé part d’un avis réel et reste présenté comme tel.', meta: 'preuve' },
      { title: 'Pas de promesse magique', body: 'Pas de promesse de leads, de devis ou de classement Google.', meta: 'garde-fou' },
    ],
  },
  {
    id: 'faq',
    kind: 'faq-block',
    title: 'Questions fréquentes',
    faqs: [
      { question: 'Est-ce que PubliTools publie tout seul ?', answer: 'Non. PubliTools prépare les contenus, mais vous pouvez relire, modifier et valider avant publication.' },
      { question: 'Sur quels réseaux puis-je publier ?', answer: 'Facebook, Instagram, LinkedIn et Google Business sont les surfaces prévues dans cette version.' },
      { question: 'Est-ce que ça gère toute ma fiche Google Business ?', answer: 'Non. PubliTools aide à publier des photos/contenus et à valoriser vos avis sur Google Business. La gestion intégrale de fiche n’est pas la promesse actuelle.' },
      { question: 'Est-ce que je dois savoir faire du marketing ?', answer: 'Non. Le principe est de partir de vos chantiers, de vos avis et de vos explications métier, pas de vous transformer en community manager.' },
      { question: 'Puis-je utiliser mon logo et mes couleurs ?', answer: 'Oui, si vous les fournissez, PubliTools peut les réutiliser dans les designs de publications.' },
    ],
  },
  {
    id: 'cta-final',
    kind: 'final-cta',
    title: 'Commencez avec un chantier, un avis ou une photo récente.',
    body: 'Prenez une matière réelle de votre entreprise. PubliTools prépare la version publiable. Vous décidez si elle mérite d’être diffusée.',
    cta: { label: 'Essayer 14 jours', href: HOMEPAGE_VARIANT_CTA },
  },
];


const variantCSections: HomepageVariant['sections'] = [
  {
    id: 'pourquoi-repousse',
    kind: 'proof-grid',
    eyebrow: 'Pourquoi ça passe toujours après',
    title: 'La communication se retrouve coincée entre le chantier, les devis et la fin de journée',
    body: 'La variante C teste la douleur temps/régularité : rester visible sans transformer la communication en deuxième journée de travail.',
    items: [
      { title: 'Le chantier d’abord', body: 'Clients, devis, matériaux, équipe et planning prennent la place avant tout le reste.', meta: 'terrain' },
      { title: 'La publication ensuite', body: 'Il faut choisir une photo, écrire, mettre en forme, adapter puis republier sur plusieurs surfaces.', meta: 'friction' },
      { title: 'La preuve dort', body: 'Les photos restent dans le téléphone, les avis ne sont pas valorisés et Google Business bouge peu.', meta: 'régularité' },
      { title: 'Le ton doit rester juste', body: 'Le contenu doit sonner métier, pas communication forcée ou phrase de community manager.', meta: 'crédibilité' },
    ],
  },
  {
    id: 'fonctionnement',
    kind: 'workflow-demo',
    eyebrow: 'Le geste simple',
    title: 'Une matière réelle, un contexte rapide, un brouillon prêt à relire',
    body: 'Le mécanisme reste volontairement concret : PubliTools aide à préparer une publication à partir d’un chantier, d’une vidéo fournie, d’un avis client ou de quelques mots métier.',
    items: [
      { title: 'Vous partez d’une matière existante', body: 'Photo de chantier, vidéo fournie, avis Google ou réalisation récente : pas besoin d’une idée marketing neuve.' },
      { title: 'Vous ajoutez le contexte', body: 'Un vocal ou quelques mots donnent les détails importants : métier, contrainte, résultat, finition.' },
      { title: 'PubliTools prépare le brouillon', body: 'Texte, design, formats et réseaux sont proposés pour éviter de refaire le même travail partout.' },
      { title: 'Vous décidez', body: 'Vous corrigez, validez, publiez maintenant ou programmez pour plus tard.' },
    ],
  },
  {
    id: 'preuve-recente',
    kind: 'capability-cards',
    eyebrow: 'Gain de temps, preuve plus récente',
    title: 'Rester visible ne veut pas dire publier pour publier',
    body: 'La régularité sert à montrer plus souvent ce que l’entreprise fait vraiment : chantiers, avis, photos et contenus Google Business récents.',
    items: [
      {
        title: 'Chantiers récents',
        body: 'La matière terrain devient plus facile à transformer en publication claire et validée.',
        image: { src: asset('pool-photos/encours-cuisine-renovation.png'), webpSrc: asset('pool-photos/encours-cuisine-renovation.webp'), alt: 'Cuisine en cours de rénovation avec outils visibles, matière chantier utilisable pour une publication PubliTools' },
      },
      {
        title: 'Présence plus vivante',
        body: 'Réseaux sociaux et Google Business peuvent refléter une activité récente, sans promettre de classement ni de demande entrante.',
        image: { src: asset('pool-photos/artisan-electricien-atelier.png'), webpSrc: asset('pool-photos/artisan-electricien-atelier.webp'), alt: 'Électricien dirigeant dans son atelier, contexte TPE bâtiment crédible pour une présence en ligne régulière' },
      },
      {
        title: 'Validation humaine',
        body: 'La publication reste à relire : PubliTools prépare, l’entreprise garde le dernier mot.',
        image: { src: asset('variant-c/mockups/variant-c-mockup-interface-simple.png'), webpSrc: asset('variant-c/mockups/variant-c-mockup-interface-simple.webp'), alt: 'Interface mobile PubliTools avec photo chantier, vocal, brouillon de post et bouton Relire et valider' },
      },
    ],
  },
  {
    id: 'capacites',
    kind: 'comparison-block',
    eyebrow: 'Ce que PubliTools prépare',
    title: 'Une même matière peut devenir texte, design, publication et avis valorisé',
    body: 'La page couvre les piliers actuels sans devenir un catalogue : elle montre comment la régularité s’appuie sur le réel.',
    items: [
      { title: 'Textes', body: 'Des publications claires à relire, basées sur vos mots et vos chantiers.' },
      { title: 'Designs', body: 'Des formats propres avec logo et couleurs si vous les avez fournis.' },
      { title: 'Diffusion', body: 'Facebook, Instagram, LinkedIn et Google Business sans refaire le même travail partout.' },
      { title: 'Avis', body: 'SMS d’avis et transformation d’un avis Google réel en publication prête à partager.' },
      { title: 'Programmation', body: 'Préparer quand vous avez la matière, puis diffuser plus tard sans promettre un calendrier autonome.' },
    ],
  },
  {
    id: 'controle',
    kind: 'proof-grid',
    eyebrow: 'Vous restez aux commandes',
    title: 'La régularité devient plus simple, pas automatique sans vous',
    body: 'Cette variante évite la promesse “zéro effort” : elle réduit la charge de rédaction, de mise en forme et de multi-publication, avec validation humaine visible.',
    items: [
      { title: 'Validation', body: 'Aucun message ne doit donner l’impression que PubliTools publie sans vous.', meta: 'contrôle' },
      { title: 'Programmation', body: 'Utile pour préparer quand la matière est disponible, puis diffuser plus tard.', meta: 'rythme' },
      { title: 'Correction', body: 'Vous pouvez modifier les détails métier avant publication.', meta: 'métier' },
      { title: 'Mini-démo cadrée', body: 'Le claim temps reste limité au contexte préparer + publier, sans promesse magique.', meta: 'garde-fou' },
    ],
  },
  {
    id: 'faq',
    kind: 'faq-block',
    title: 'Questions fréquentes',
    faqs: [
      { question: 'Est-ce vraiment “sans y passer mes soirées” ?', answer: 'La promesse est de réduire la charge de rédaction, de mise en forme et de publication multi-réseaux. Il reste une validation humaine.' },
      { question: 'Puis-je programmer mes publications ?', answer: 'Oui, publier en un clic ou programmer pour plus tard fait partie du périmètre autorisé.' },
      { question: 'Est-ce que PubliTools choisit seul quand publier ?', answer: 'Non. Cette variante ne promet pas de calendrier marketing autonome : vous choisissez et vous validez.' },
      { question: 'Le chiffre 2 minutes est-il affiché ?', answer: 'Non dans cette intégration preview. Le brief autorise ce claim seulement dans une mini-démo cadrée ; il est donc évité ici.' },
      { question: 'Est-ce que ça sert aussi à Google et aux avis ?', answer: 'Oui. La variante montre réseaux sociaux, Google Business, avis et designs, sans promettre de résultats commerciaux garantis.' },
    ],
  },
  {
    id: 'cta-final',
    kind: 'final-cta',
    title: 'Votre prochain post peut partir d’une photo que vous avez déjà.',
    body: 'Ajoutez une matière réelle, donnez le contexte, relisez le brouillon. La régularité devient plus simple parce qu’elle part du chantier, pas d’une page blanche.',
    cta: { label: 'Publier plus régulièrement', href: HOMEPAGE_VARIANT_CTA },
  },
];

const variantDSections: HomepageVariant['sections'] = [
  {
    id: 'fonctionnement',
    kind: 'proof-grid',
    eyebrow: 'Le bouche-à-oreille vérifié en ligne',
    title: 'Une recommandation déclenche souvent une recherche',
    body: 'PubliTools ne remplace pas le bouche-à-oreille. Il aide à rendre visibles les preuves que vos prospects consultent quand ils tapent votre nom : avis, chantiers récents, fiche Google Business et publications.',
    items: [
      { title: 'Le prospect vérifie', body: 'Un client parle de vous. La personne regarde Google, vos avis, vos photos et parfois vos réseaux avant d’appeler.', meta: 'recherche' },
      { title: 'Les preuves rassurent', body: 'Des contenus récents montrent une entreprise active, claire et sérieuse sans promettre le choix final.', meta: 'confiance' },
      { title: 'Le terrain reste la base', body: 'Vos chantiers, vos avis réels et votre validation humaine restent la matière de départ.', meta: 'preuve réelle' },
    ],
  },
  {
    id: 'preuves-visibles',
    kind: 'capability-cards',
    eyebrow: 'Preuves avant l’appel',
    title: 'Les surfaces qui prolongent la confiance',
    body: 'La variante D montre les piliers réputation sans devenir un outil d’avis seul : chaque surface sert à rendre le sérieux plus vérifiable.',
    items: [
      { title: 'Avis Google', body: 'Demander un avis par SMS avec un lien direct, puis valoriser un avis réel en publication prête à relire.' },
      { title: 'Chantiers récents', body: 'Montrer une réalisation ou une intervention avec un texte métier clair et daté.' },
      { title: 'Fiche Google Business', body: 'Alimenter la fiche avec photos, contenus et avis, sans promettre de classement.' },
      { title: 'Réseaux sociaux', body: 'Prolonger la preuve sur Facebook, Instagram et LinkedIn sans jouer à l’influenceur.' },
    ],
  },
  {
    id: 'avis-devient-post',
    kind: 'workflow-demo',
    eyebrow: 'Démo réputation',
    title: 'Un avis client peut devenir plus qu’une ligne Google',
    body: 'Le mécanisme reste sobre : demander, recevoir, valoriser. PubliTools prépare une publication à partir d’un avis réel, puis le professionnel relit avant diffusion.',
    items: [
      { title: 'Demande', body: 'Après un chantier, vous envoyez un SMS avec un lien Google.' },
      { title: 'Réception', body: 'L’avis reste réel, non inventé et non transformé en faux témoignage.' },
      { title: 'Valorisation', body: 'PubliTools prépare une publication avec contexte chantier et bouton de validation.' },
      { title: 'Diffusion', body: 'La preuve peut être publiée sur les réseaux ou Google Business selon votre choix.' },
    ],
  },
  {
    id: 'chantiers-contexte',
    kind: 'comparison-block',
    eyebrow: 'Avis + chantier + contexte',
    title: 'Vos chantiers donnent du contexte à votre réputation',
    body: 'Un avis rassure davantage quand il est relié à une réalisation concrète, à un détail métier et à un contenu présenté proprement.',
    items: [
      { title: 'Photos', body: 'Une réalisation récente rend l’avis plus concret, sans maquiller le chantier.' },
      { title: 'Texte métier', body: 'Votre vocal explique la contrainte, le résultat et le détail qui prouvent le sérieux.' },
      { title: 'Design sobre', body: 'Logo et couleurs peuvent être repris si fournis, pour garder une image cohérente.' },
    ],
  },
  {
    id: 'garde-fous-reputation',
    kind: 'proof-grid',
    eyebrow: 'Présence active, pas promesse de devis',
    title: 'Ce que la page dit — et ce qu’elle ne promet pas',
    body: 'L’angle réputation locale doit rester crédible : PubliTools aide à rendre des preuves visibles, pas à garantir un résultat commercial ou Google.',
    items: [
      { title: 'Ce que l’on peut dire', body: 'Aider les prospects à vérifier votre sérieux avec des avis, chantiers et publications visibles.', meta: 'autorisé' },
      { title: 'Ce que l’on ne dit pas', body: 'Pas de promesse d’appels, de devis, de meilleure position Google ou d’avis 5 étoiles.', meta: 'interdit' },
      { title: 'Contrôle humain', body: 'Chaque publication reste à relire et valider avant diffusion.', meta: 'validation' },
    ],
  },
  {
    id: 'faq',
    kind: 'faq-block',
    title: 'Questions fréquentes',
    faqs: [
      { question: 'Je marche déjà au bouche-à-oreille. Pourquoi utiliser PubliTools ?', answer: 'Justement : PubliTools ne le remplace pas. Il aide à rendre visibles les preuves que les prospects consultent quand ils vérifient une recommandation.' },
      { question: 'Est-ce que PubliTools garantit plus de devis ?', answer: 'Non. Cette variante parle de preuves visibles et de présence plus active, pas de résultats commerciaux garantis.' },
      { question: 'Est-ce que PubliTools crée des avis ?', answer: 'Non. Les avis doivent rester réels. PubliTools peut aider à demander un avis par SMS et à valoriser un avis Google existant.' },
      { question: 'Est-ce que Google Business est entièrement géré ?', answer: 'Non. Le périmètre actuel est la publication de photos/contenus et la valorisation d’avis, pas la gestion intégrale ni le classement.' },
      { question: 'Est-ce que je dois publier comme un influenceur ?', answer: 'Non. L’idée est de montrer chantiers, avis, équipe et preuves de sérieux, pas de jouer un personnage.' },
    ],
  },
  {
    id: 'cta-final',
    kind: 'final-cta',
    title: 'Transformez vos avis et chantiers en preuves que l’on peut vérifier.',
    body: 'Le bouche-à-oreille reste fort. PubliTools l’aide à continuer sur Google, vos réseaux et vos publications récentes.',
    cta: { label: 'Rendre vos preuves plus visibles', href: HOMEPAGE_VARIANT_CTA },
  },
];

const variantBSections: HomepageVariant['sections'] = [
  {
    id: 'fonctionnement',
    kind: 'proof-grid',
    eyebrow: 'Preuves déjà disponibles',
    title: 'Ce qui dort dans votre téléphone peut rassurer vos futurs clients',
    body: 'Variante B part de la matière réelle : photos de chantier, avis client, avant/après sobre, détail de finition. PubliTools aide à la sortir du téléphone et à la présenter proprement, sans la transformer en promesse marketing artificielle.',
    items: [
      { title: 'Photos de chantier', body: 'Elles montrent le soin, les contraintes et les finitions. Encore faut-il les sortir du téléphone.', meta: 'chantier' },
      { title: 'Avis clients', body: 'Ils disent souvent mieux que vous ce qui a été apprécié : ponctualité, propreté, sérieux, conseil.', meta: 'avis réel' },
      { title: 'Avant / après', body: 'Quand il est réel et sobre, il donne tout de suite une preuve visuelle sans prétendre à la transformation parfaite.', meta: 'preuve visuelle' },
      { title: 'Présence locale', body: 'Une photo, un contenu ou un avis valorisé peut nourrir les réseaux et Google Business sans promettre de classement.', meta: 'réseaux + Google' },
    ],
  },
  {
    id: 'demo-brut-publiable',
    kind: 'workflow-demo',
    eyebrow: 'Du brut au publiable',
    title: 'Un chantier réel devient une publication propre, sous votre contrôle',
    body: 'La démo montre la transformation attendue par Pedro et Léa : photo brute, contexte vocal, carte publication, avis associé, puis validation avant diffusion.',
    items: [
      { title: 'Avant', body: 'Une photo prise vite, un chantier terminé, un avis reçu, une explication encore dans la tête du patron.' },
      { title: 'Avec PubliTools', body: 'Un vocal donne le contexte métier ; PubliTools prépare un texte professionnel, une présentation propre et des surfaces adaptées.' },
      { title: 'Après', body: 'Une publication prête à relire, corriger et valider sur Facebook, Instagram, LinkedIn ou Google Business.' },
    ],
  },
  {
    id: 'preuves-variees',
    kind: 'capability-cards',
    eyebrow: 'Pas seulement les chantiers spectaculaires',
    title: 'Toutes les preuves ne sont pas des photos parfaites',
    body: 'La page garde une lecture bâtiment large : rénovation visible, dépannage, installation technique, avis et fiche Google plus active peuvent tous prouver le sérieux.',
    items: [
      {
        title: 'Une réalisation récente',
        body: 'La salle de bain, la cuisine ou la terrasse terminée devient un support clair pour montrer le résultat.',
        image: { src: asset('variant-b/hero/variant-b-hero-sdb-brute-mobile.png'), webpSrc: asset('variant-b/hero/variant-b-hero-sdb-brute-mobile.webp'), alt: 'Photo smartphone verticale d’une salle de bain rénovée en France, cadrage chantier réaliste avec détails encore visibles' },
      },
      {
        title: 'Une carte de preuve publiable',
        body: 'Texte métier, photo recadrée, badge avis client et surfaces de publication restent visibles sans inventer de faux avis.',
        image: { src: asset('variant-b/cards/variant-b-hero-carte-post-propre.png'), webpSrc: asset('variant-b/cards/variant-b-hero-carte-post-propre.webp'), alt: 'Carte publication PubliTools pour une rénovation de salle de bain avec badge avis client et design professionnel sobre' },
      },
      {
        title: 'Une intervention moins spectaculaire',
        body: 'Un tableau électrique remis au carré, une chaudière remplacée ou un dépannage propre rassurent aussi quand le contexte est bien expliqué.',
      },
    ],
  },
  {
    id: 'rendu-professionnel',
    kind: 'comparison-block',
    eyebrow: 'Rendu professionnel, pas maquillage',
    title: 'Plus propre en ligne, toujours basé sur vos mots et vos preuves',
    body: 'La variante assume un rendu plus premium mais protège le réel : pas d’avis inventé, pas de photo parfaite garantie, pas de chantier maquillé.',
    items: [
      { title: 'Texte', body: 'Votre explication métier devient un texte clair, avec la possibilité de corriger les détails techniques.' },
      { title: 'Design', body: 'Logo, couleurs et designs prédéfinis adaptés au bâtiment donnent un rendu plus pro si les éléments sont fournis.' },
      { title: 'Validation', body: 'La publication reste sous votre contrôle avant diffusion : relire, ajuster, publier ou programmer.' },
    ],
  },
  {
    id: 'surfaces-preuves',
    kind: 'proof-grid',
    eyebrow: 'Là où vos clients regardent',
    title: 'Vos preuves circulent sans devenir une promesse de résultat',
    body: 'PubliTools prépare des contenus pour montrer l’activité récente de l’entreprise. Les surfaces sont citées clairement, sans promesse de leads, de devis ou de position Google.',
    items: [
      { title: 'Réseaux sociaux', body: 'Facebook, Instagram et LinkedIn pour montrer une activité réelle et récente.', meta: 'social' },
      { title: 'Google Business', body: 'Photos, contenus et avis valorisés pour une fiche plus vivante, sans vendre une gestion complète ni un classement garanti.', meta: 'local' },
      { title: 'Bouche-à-oreille', body: 'Quand quelqu’un vous recommande, vos preuves en ligne peuvent confirmer le sérieux.', meta: 'confiance' },
      { title: 'Validation humaine', body: 'Chaque preuve reste relue et validée par l’entreprise avant diffusion.', meta: 'contrôle' },
    ],
  },
  {
    id: 'faq',
    kind: 'faq-block',
    title: 'Questions fréquentes',
    faqs: [
      { question: 'Mes photos ne sont pas toujours parfaites. Est-ce grave ?', answer: 'Non. L’objectif n’est pas de faire faux. Une photo réelle peut être recadrée, accompagnée d’un texte clair et présentée proprement.' },
      { question: 'Est-ce que PubliTools invente des réalisations ?', answer: 'Non. La page reste basée sur vos chantiers, vos avis et vos informations réelles.' },
      { question: 'Est-ce seulement pour les métiers très visuels ?', answer: 'Non. Une intervention propre, un avis client ou une fiche Google plus active peuvent aussi prouver le sérieux d’une entreprise.' },
      { question: 'Est-ce que je dois me montrer en vidéo ?', answer: 'Non. Vous pouvez valoriser vos chantiers, vos équipes, vos avis et vos réalisations sans jouer à l’influenceur.' },
      { question: 'Puis-je publier sur Google Business ?', answer: 'Oui pour des photos/contenus et avis valorisés dans le périmètre actuel. La page ne promet ni gestion complète de fiche ni position Google.' },
    ],
  },
  {
    id: 'cta-final',
    kind: 'final-cta',
    title: 'Prenez une réalisation récente. Faites-en une preuve visible.',
    body: 'Un chantier terminé, un avis reçu, une photo utile : PubliTools vous aide à préparer la publication sans repartir de zéro.',
    cta: { label: 'Créer une publication avec un chantier', href: HOMEPAGE_VARIANT_CTA },
  },
];


export const homepageVariants: HomepageVariant[] = [
  {
    slug: 'variant-a',
    label: 'Variante A — Catégorie / démo',
    route: '/fr/homepage-variants/variant-a/',
    status: 'ready-for-review',
    strategicIntent: 'Installer PubliTools comme l’IA qui aide les entreprises du bâtiment à faire leur publicité sur Internet.',
    audienceNote: 'TPE/PME bâtiment de 2 à 20 salariés qui veulent comprendre vite la catégorie avant de comparer agence, Canva ou outil social générique.',
    assetStatus: 'Assets Léa variante A intégrés : hero chantier, mockup validation, icône check et pool photos WEBP + PNG fallback.',
    motionStatus: 'Hero GSAP 8s + fallbacks CSS/reduced-motion ; sections révélées au viewport.',
    title: 'Variante A — PubliTools IA publicité Internet bâtiment',
    description: 'Preview noindex de la variante A : PubliTools comme IA pour aider les entreprises du bâtiment à faire leur publicité Internet à partir de leurs chantiers.',
    hero: {
      eyebrow: 'IA pour entreprises du bâtiment',
      title: 'Faites votre publicité sur Internet à partir de ce qui se passe déjà sur vos chantiers.',
      lead: 'PubliTools prépare vos publications, vos designs, vos avis clients et vos contenus Google Business à partir de vos photos, vidéos, avis et explications. Vous relisez, vous ajustez, puis vous publiez sur Facebook, Instagram, LinkedIn et Google Business.',
      reassurance: 'L’IA prépare. Vous gardez la main avant publication.',
      primaryCta: { label: 'Essayer 14 jours', href: HOMEPAGE_VARIANT_CTA },
      secondaryCta: { label: 'Voir comment ça marche', href: '#fonctionnement' },
      visualNote: 'Scène Léa : matière chantier → préparation PubliTools → validation → surfaces de publication.',
      visual: {
        chantier: {
          src: asset('variant-a/hero/variant-a-hero-chantier-cuisine.png'),
          webpSrc: asset('variant-a/hero/variant-a-hero-chantier-cuisine.webp'),
          alt: 'Rénovation de cuisine moderne en France avec armoires blanches, plan de travail gris et outils professionnels visibles',
        },
        chantierMobile: {
          src: asset('variant-a/hero/variant-a-hero-chantier-cuisine-mobile.png'),
          webpSrc: asset('variant-a/hero/variant-a-hero-chantier-cuisine-mobile.webp'),
          alt: 'Version mobile carrée d’un chantier de rénovation cuisine française tout juste terminé',
        },
        mockup: {
          src: asset('variant-a/mockups/variant-a-mockup-validation-mobile.png'),
          webpSrc: asset('variant-a/mockups/variant-a-mockup-validation-mobile.webp'),
          alt: 'Mockup mobile PubliTools montrant un brouillon de publication chantier avec bouton orange Relire et valider',
        },
        checkIcon: {
          src: asset('variant-a/icons/icon-check-validation.png'),
          webpSrc: asset('variant-a/icons/icon-check-validation.webp'),
          alt: 'Icône de validation orange PubliTools',
        },
        voiceNote: 'Cuisine neuve, client très content. On veut montrer le résultat proprement.',
        draftTitle: 'Rénovation cuisine terminée',
        draftLines: [
          'Une cuisine rénovée avec plan de travail quartz gris clair.',
          'Intervention propre, finitions visibles et résultat prêt à montrer.',
          'Publication proposée pour Facebook, Instagram, LinkedIn et Google Business.',
        ],
        brandLabel: 'Artisan fictif — logo et couleurs fournis',
        networkChips: ['Facebook', 'Instagram', 'LinkedIn', 'Google Business'],
        surfaces: [
          { label: 'Google Business', detail: 'Photo + contenu' },
          { label: 'Facebook', detail: 'Post chantier' },
          { label: 'Instagram', detail: 'Carte visuelle' },
          { label: 'LinkedIn', detail: 'Version pro' },
        ],
      },
    },
    sections: variantASections,
  },
  {
    slug: 'variant-b',
    label: 'Variante B — Vos chantiers deviennent vos preuves',
    route: '/fr/homepage-variants/variant-b/',
    status: 'ready-for-review',
    strategicIntent: 'Tester l’entrée la plus terrain : rendre visibles les preuves que l’entreprise possède déjà, sans fabriquer une histoire marketing.',
    audienceNote: 'Artisans et TPE qui prennent déjà des photos, reçoivent des avis ou ont des réalisations fortes mais publient peu ou irrégulièrement.',
    assetStatus: 'Assets Léa variante B intégrés : photo chantier salle de bain brute + carte publication propre, WEBP + PNG fallback.',
    motionStatus: 'Hero GSAP réutilisé sur pattern A, adapté au récit brut → preuve publiable ; fallback reduced-motion statique.',
    title: 'Variante B — Vos chantiers deviennent vos preuves en ligne',
    description: 'Preview noindex de la variante B : PubliTools transforme photos de chantier, avis et réalisations réelles en publications propres à relire et valider.',
    hero: {
      eyebrow: 'Vos réalisations méritent d’être vues',
      title: 'Vos chantiers font déjà la preuve. PubliTools les rend publiables.',
      lead: 'Photo de chantier, avis client, avant/après, détail de finition : PubliTools transforme cette matière réelle en publications claires, propres et prêtes à valider sur vos réseaux et Google Business.',
      reassurance: 'Basé sur vos preuves réelles. Relu et validé par vous.',
      primaryCta: { label: 'Créer une publication avec un chantier', href: HOMEPAGE_VARIANT_CTA },
      secondaryCta: { label: 'Voir un chantier devenir publication', href: '#fonctionnement' },
      visualNote: 'Scène Léa : photo chantier brute + vocal patron → carte publication propre avec avis/Google visible → validation et diffusion.',
      visual: {
        chantier: {
          src: asset('variant-b/hero/variant-b-hero-sdb-brute-mobile.png'),
          webpSrc: asset('variant-b/hero/variant-b-hero-sdb-brute-mobile.webp'),
          alt: 'Photo smartphone verticale d’une salle de bain rénovée en France, cadrage chantier réaliste avec traces de fin de travaux',
        },
        mockup: {
          src: asset('variant-b/cards/variant-b-hero-carte-post-propre.png'),
          webpSrc: asset('variant-b/cards/variant-b-hero-carte-post-propre.webp'),
          alt: 'Carte publication professionnelle PubliTools pour une rénovation de salle de bain avec texte métier et badge avis client',
        },
        voiceNote: 'Salle de bain refaite, client ravi. On veut montrer le résultat sans faire trop publicitaire.',
        draftTitle: 'Rénovation complète salle de bain',
        draftLines: [
          'Douche italienne, carrelage moderne et finitions propres.',
          'Photo réelle recadrée, contexte métier conservé.',
          'Avis client associé, puis publication à relire avant diffusion.',
        ],
        brandLabel: 'Entreprise fictive — preuve chantier réelle',
        networkChips: ['Facebook', 'Instagram', 'LinkedIn', 'Google Business'],
        surfaces: [
          { label: 'Avis client', detail: 'Extrait réel valorisé' },
          { label: 'Google Business', detail: 'Photo + contenu' },
          { label: 'Réseaux sociaux', detail: 'Post chantier propre' },
          { label: 'Validation', detail: 'Relire et valider' },
        ],
      },
    },
    sections: variantBSections,
  },
  {
    slug: 'variant-c',
    label: 'Variante C — Visible sans soirées',
    route: '/fr/homepage-variants/variant-c/',
    status: 'ready-for-review',
    strategicIntent: 'Tester la douleur temps/régularité : rendre la présence en ligne réaliste dans une vraie semaine de patron BTP, sans promettre zéro effort.',
    audienceNote: 'TPE 2–5 salariés déjà un peu visibles mais irrégulières ; dirigeant, conjointe, assistante ou équipe qui publie quand elle y pense.',
    assetStatus: 'Assets Léa variante C intégrés : galerie smartphone + mockup interface simple en WEBP/PNG ; mini-calendrier codé via cartes surfaces, sans placeholder final.',
    motionStatus: 'Hero GSAP 8s réutilisant le storyboard galerie → interface → validation → planification ; fallback reduced-motion statique.',
    title: 'Variante C — PubliTools régularité publicité Internet bâtiment',
    description: 'Preview noindex de la variante C : PubliTools aide les entreprises du bâtiment à publier plus régulièrement à partir de leurs chantiers, avis et explications.',
    hero: {
      eyebrow: 'Réseaux, avis, Google : sans soirée perdue',
      title: 'Restez visible avec vos chantiers récents, sans refaire chaque post à la main.',
      lead: 'PubliTools prépare vos publications à partir de vos photos, vidéos, avis et explications. Vous relisez, vous choisissez les réseaux, puis vous publiez ou programmez sur Facebook, Instagram, LinkedIn et Google Business.',
      reassurance: 'Pensé pour une semaine chargée, pas pour ajouter une nouvelle charge mentale.',
      primaryCta: { label: 'Publier plus régulièrement', href: HOMEPAGE_VARIANT_CTA },
      secondaryCta: { label: 'Voir le fonctionnement rapide', href: '#fonctionnement' },
      visualNote: 'Scène Léa : galerie smartphone non triée → interface PubliTools photo + vocal → brouillon prêt → validation et programmation légère.',
      visual: {
        chantier: {
          src: asset('variant-c/hero/variant-c-hero-galerie-smartphone.png'),
          webpSrc: asset('variant-c/hero/variant-c-hero-galerie-smartphone.webp'),
          alt: 'Galerie smartphone avec grille de photos de chantiers BTP mélangées, matière réelle encore non publiée',
        },
        mockup: {
          src: asset('variant-c/mockups/variant-c-mockup-interface-simple.png'),
          webpSrc: asset('variant-c/mockups/variant-c-mockup-interface-simple.webp'),
          alt: 'Mockup mobile PubliTools montrant une photo chantier, un vocal, un brouillon de publication et des réseaux à choisir',
        },
        voiceNote: 'On veut montrer ce chantier proprement, sans y passer la soirée.',
        draftTitle: 'Brouillon prêt à relire',
        draftLines: [
          'Une réalisation récente transformée en publication claire.',
          'Le détail métier reste visible avant validation.',
          'Version proposée pour réseaux sociaux et Google Business.',
        ],
        brandLabel: 'Mini-démo — préparer et valider',
        networkChips: ['Facebook', 'Instagram', 'LinkedIn', 'Google Business'],
        surfaces: [
          { label: 'Aujourd’hui', detail: 'Post chantier prêt à relire' },
          { label: 'Mercredi', detail: 'Avis client valorisé' },
          { label: 'Vendredi', detail: 'Photo Google Business' },
          { label: 'Plus tard', detail: 'Programmation validée par vous' },
        ],
      },
    },
    sections: variantCSections,
  },
  {
    slug: 'variant-d',
    label: 'Variante D — Bouche-à-oreille vérifiable',
    route: '/fr/homepage-variants/variant-d/',
    status: 'ready-for-review',
    strategicIntent: 'Tester PubliTools comme prolongement crédible du bouche-à-oreille : rendre visibles les preuves consultées quand un prospect vérifie une recommandation.',
    audienceNote: 'Artisans installés, TPE locales et dirigeants méfiants des promesses de leads, qui veulent protéger leur réputation et montrer leur sérieux en ligne.',
    assetStatus: 'Assets Léa variante D intégrés : scène recommandation terrain + mockup Google Business en PNG/WEBP ; autres preuves représentées en UI codée preview.',
    motionStatus: 'Hero GSAP existant réutilisé pour flux recommandation → preuve → validation ; fil orange et fallback reduced-motion statique.',
    title: 'Variante D — Bouche-à-oreille vérifiable PubliTools',
    description: 'Preview noindex de la variante D : PubliTools aide les entreprises du bâtiment à rendre visibles les preuves que les prospects vérifient après une recommandation.',
    hero: {
      eyebrow: 'Réputation locale + preuves visibles',
      title: 'Votre bouche-à-oreille continue quand vos prospects vous cherchent en ligne.',
      lead: 'PubliTools vous aide à rendre vos avis, vos chantiers récents, vos photos et votre fiche Google Business plus visibles — sans promettre des résultats commerciaux garantis ni remplacer ce qui marche déjà.',
      reassurance: 'Avis réels, chantiers réels, validation humaine avant publication.',
      primaryCta: { label: 'Rendre vos preuves plus visibles', href: HOMEPAGE_VARIANT_CTA },
      secondaryCta: { label: 'Voir comment un avis devient un post', href: '#fonctionnement' },
      visualNote: 'Scène Léa : recommandation terrain → vérification Google Business → avis réel valorisé en post prêt à valider.',
      visual: {
        chantier: {
          src: asset('variant-d/hero/variant-d-hero-recommandation-terrain.png'),
          webpSrc: asset('variant-d/hero/variant-d-hero-recommandation-terrain.webp'),
          alt: 'Client et artisan dans un contexte de chantier terminé, scène sobre de recommandation terrain pour une entreprise du bâtiment',
        },
        mockup: {
          src: asset('variant-d/mockups/variant-d-mockup-google-business.png'),
          webpSrc: asset('variant-d/mockups/variant-d-mockup-google-business.webp'),
          alt: 'Mockup mobile Google Business réaliste avec avis 4,5 sur 5, photos de chantier et publication récente, sans promesse de classement',
        },
        checkIcon: {
          src: asset('variant-a/icons/icon-check-validation.png'),
          webpSrc: asset('variant-a/icons/icon-check-validation.webp'),
          alt: 'Icône de validation orange PubliTools',
        },
        voiceNote: 'Client satisfait, avis reçu. On veut montrer le chantier et rester crédible.',
        draftTitle: 'Avis client → publication validée',
        draftLines: [
          'Avis Google réel marqué comme exemple à valoriser sans l’inventer.',
          'Photo chantier récente + contexte métier pour rassurer avant l’appel.',
          'Publication proposée pour Google Business, Facebook, Instagram et LinkedIn.',
        ],
        brandLabel: 'Exemple fictif — avis et chantier réels à valider',
        networkChips: ['Avis Google', 'Chantier récent', 'Post validé', 'Réseaux'],
        surfaces: [
          { label: 'Google Business', detail: 'Fiche plus active, sans promesse de classement.' },
          { label: 'Avis client', detail: 'Avis réel valorisé, jamais inventé.' },
          { label: 'Facebook', detail: 'Preuve chantier compréhensible localement.' },
          { label: 'Instagram', detail: 'Carte sobre, pas influenceur.' },
        ],
      },
    },
    sections: variantDSections,
  },
  {
    slug: 'variant-e',
    label: 'Variante E — À votre image',
    route: '/fr/homepage-variants/variant-e/',
    status: 'ready-for-review',
    strategicIntent: 'Tester PubliTools comme voie autonome entre bricolage chronophage, délégation complète et absence de communication.',
    audienceNote: 'TPE bâtiment qui publient déjà ou hésitent entre agence, Canva, ChatGPT et téléphone, avec envie d’un rendu plus propre sans perdre la main.',
    assetStatus: 'Assets Léa variante E intégrés : hero fait maison + mockup choix designs en PNG/WEBP ; colonne délégation représentée en UI codée preview, sans asset inventé.',
    motionStatus: 'Hero GSAP existant réutilisé pour assemblage matière → design → validation ; reduced-motion statique respecté.',
    title: 'Variante E — Publications à votre image PubliTools',
    description: 'Preview noindex de la variante E : PubliTools aide les entreprises du bâtiment à créer des publications à leur image sans tout déléguer ni tout refaire à la main.',
    hero: {
      eyebrow: 'Votre image, vos mots, vos chantiers',
      title: 'Des publications à votre image, sans tout déléguer ni tout refaire à la main.',
      lead: 'PubliTools prépare des textes et designs depuis vos chantiers, vos avis et vos explications, avec votre logo et vos couleurs si vous les fournissez. Vous relisez, vous choisissez, puis vous publiez sur vos réseaux et Google Business.',
      reassurance: 'Une aide pour produire régulièrement, pas une agence automatique.',
      primaryCta: { label: 'Créer un post à votre image', href: HOMEPAGE_VARIANT_CTA },
      secondaryCta: { label: 'Voir des exemples de publications', href: '#fonctionnement' },
      visualNote: 'Scène Léa : fait maison respectueux, choix de designs sobres PubliTools, validation puis diffusion réseaux et Google Business.',
      visual: {
        chantier: {
          src: asset('variant-e/hero/variant-e-hero-fait-maison.png'),
          webpSrc: asset('variant-e/hero/variant-e-hero-fait-maison.webp'),
          alt: 'Brouillon de publication fait maison sur mobile pour une entreprise du bâtiment, authentique mais peu mis en forme',
        },
        mockup: {
          src: asset('variant-e/mockups/variant-e-mockup-choix-designs.png'),
          webpSrc: asset('variant-e/mockups/variant-e-mockup-choix-designs.webp'),
          alt: 'Interface PubliTools proposant plusieurs designs sobres de publication bâtiment avec logo et couleurs fournis',
        },
        checkIcon: {
          src: asset('variant-a/icons/icon-check-validation.png'),
          webpSrc: asset('variant-a/icons/icon-check-validation.webp'),
          alt: 'Icône de validation orange PubliTools utilisée pour signaler le choix validé',
        },
        voiceNote: 'On veut garder nos mots, montrer le chantier proprement et utiliser notre orange.',
        draftTitle: 'Publication à votre image',
        draftLines: [
          'Photo chantier + avis réel + explication métier conservés.',
          'Design sobre avec logo et couleurs si fournis.',
          'Version prête à relire avant réseaux et Google Business.',
        ],
        brandLabel: 'Exemple fictif — logo et couleurs fournis',
        networkChips: ['Design sobre', 'Logo fourni', 'Avis réel', 'Google Business'],
        surfaces: [
          { label: 'Fait maison', detail: 'Authentique, mais variable selon le temps disponible.' },
          { label: 'Délégué', detail: 'Propre, mais demande brief, retours et validation.' },
          { label: 'Avec PubliTools', detail: 'Matière terrain préparée, choix visible, validation gardée.' },
        ],
      },
    },
    sections: variantESections,
  },
];

export const getHomepageVariant = (slug: VariantSlug): HomepageVariant => {
  const variant = homepageVariants.find((item) => item.slug === slug);
  if (!variant) {
    throw new Error(`Unknown homepage variant: ${slug}`);
  }
  return variant;
};
