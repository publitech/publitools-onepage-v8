export type Cta = { label: string; href: string; variant?: 'primary' | 'secondary' };
export type MiniFaq = { question: string; answer: string };
export type FeatureCard = { title: string; href?: string; text: string; image?: string; imageAlt?: string; icon?: string; iconAlt?: string; items?: string[]; eyebrow?: string; cta?: string };
export type CategoryPage = {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  eyebrow: string;
  h1: string;
  lead: string;
  proof: string;
  visualSrc: string;
  visualAlt: string;
  visualLabel: string;
  problemTitle: string;
  problemText: string;
  stepsTitle: string;
  steps: string[];
  featuresTitle: string;
  featuresLead: string;
  features: FeatureCard[];
  exampleTitle: string;
  exampleText: string;
  exampleImages: FeatureCard[];
  faq: MiniFaq[];
  finalTitle: string;
  finalText: string;
};
export type DetailPage = {
  slug: string;
  parentTitle: string;
  parentHref: string;
  title: string;
  description: string;
  canonical: string;
  eyebrow: string;
  h1: string;
  lead: string;
  visualSrc: string;
  visualAlt: string;
  visualLabel: string;
  problemTitle: string;
  problemText: string;
  capabilityTitle: string;
  capabilities: string[];
  exampleTitle: string;
  exampleText: string;
  limitTitle?: string;
  limitText?: string;
  faq: MiniFaq[];
  finalCta: string;
};

export const assets = {
  chantierFacade: '/assets/site-v31/chantier-source/btp-renov-chantier-01-facade.webp',
  chantierBathroom: '/assets/site-v31/chantier-source/btp-renov-chantier-02-bathroom.webp',
  chantierRoofing: '/assets/site-v31/chantier-source/btp-renov-chantier-03-roofing.webp',
  chantierKitchen: '/assets/site-v31/chantier-source/btp-renov-chantier-04-kitchen.webp',
  chantierFlooring: '/assets/site-v31/chantier-source/btp-renov-chantier-05-flooring.webp',
  chantierExterior: '/assets/site-v31/chantier-source/btp-renov-chantier-06-finished-exterior.webp',
  socialFacebook: '/assets/site-v31/social-outputs/btp-renov-facebook-post.webp',
  socialInstagram: '/assets/site-v31/social-outputs/btp-renov-instagram-post.webp',
  socialLinkedin: '/assets/site-v31/social-outputs/btp-renov-linkedin-post.webp',
  socialGoogle: '/assets/site-v31/social-outputs/btp-renov-google-business-post.webp',
  socialTiktok: '/assets/site-v31/social-outputs/btp-renov-tiktok-thumbnail.webp',
  socialYoutube: '/assets/site-v31/social-outputs/btp-renov-youtube-thumbnail.webp',
  uiUpload: '/assets/site-v31/ui-screens/btp-renov-ui-upload-photo.webp',
  uiVocal: '/assets/site-v31/ui-screens/btp-renov-ui-caption-vocal.webp',
  uiNetworks: '/assets/site-v31/ui-screens/btp-renov-ui-network-selection.webp',
  uiSms: '/assets/site-v31/ui-screens/btp-renov-ui-sms-review-request.webp',
  catSocial: '/assets/site-v31/category-visuals/category-social-media.webp',
  catReviews: '/assets/site-v31/category-visuals/category-customer-reviews.webp',
  catGoogle: '/assets/site-v31/category-visuals/category-google-business.webp',
  iconPhoto: '/ui/icon-photo-edit.svg',
  iconWriting: '/ui/icon-writing.svg',
  iconMulti: '/ui/icon-multishare.svg',
  iconReviews: '/ui/icon-reviews.svg',
  iconGoogle: '/ui/icon-google-business.svg',
  iconClock: '/homepage/fr/v12/icons/icon-horloge.svg',
  socialFacebookIcon: '/social/facebook-official.svg',
  socialInstagramIcon: '/social/instagram-official.svg',
  socialLinkedinIcon: '/social/linkedin-official.svg',
  socialGoogleIcon: '/social/google-official.svg',
  socialTiktokIcon: '/social/tiktok-official.svg',
  socialYoutubeIcon: '/social/youtube-official.svg',
};

export const socialLogos = [
  { label: 'Facebook', icon: assets.socialFacebookIcon },
  { label: 'Instagram', icon: assets.socialInstagramIcon },
  { label: 'LinkedIn', icon: assets.socialLinkedinIcon },
  { label: 'Google Business', icon: assets.socialGoogleIcon },
  { label: 'TikTok', icon: assets.socialTiktokIcon },
  { label: 'YouTube', icon: assets.socialYoutubeIcon },
];

export const commonCtas: Cta[] = [
  { label: 'Essayer PubliTools 14 jours', href: 'https://app.publitools.ai/fr/signup', variant: 'primary' },
  { label: 'Voir les tarifs', href: '/fr/tarif/', variant: 'secondary' },
];

export const hubPillars: FeatureCard[] = [
  {
    eyebrow: 'Pilier 01',
    title: 'Réseaux sociaux',
    href: '/fr/fonctionnalites/automatisation-reseaux-sociaux/',
    text: 'Créer, retoucher, rédiger et publier à partir de vrais chantiers.',
    image: assets.catSocial,
    imageAlt: 'Composition visuelle BTP Renov pour l’automatisation des réseaux sociaux',
    icon: assets.iconMulti,
    items: ['photo/vidéo', 'vocal → texte', '6 réseaux', 'programmation Pro'],
    cta: 'Découvrir l’automatisation réseaux sociaux',
  },
  {
    eyebrow: 'Pilier 02',
    title: 'Avis clients',
    href: '/fr/fonctionnalites/obtenir-plus-d-avis/',
    text: 'Demander l’avis au bon moment et valoriser les vrais retours clients.',
    image: assets.catReviews,
    imageAlt: 'Composition visuelle BTP Renov pour les avis clients',
    icon: assets.iconReviews,
    items: ['SMS prêt', 'lien Google', 'avis → visuel', 'Pro pour publier'],
    cta: 'Découvrir les avis clients',
  },
  {
    eyebrow: 'Pilier 03',
    title: 'Google Business',
    href: '/fr/fonctionnalites/booster-google-business/',
    text: 'Ajouter des photos, posts et preuves récentes sur votre présence locale.',
    image: assets.catGoogle,
    imageAlt: 'Composition visuelle BTP Renov pour Google Business',
    icon: assets.iconGoogle,
    items: ['posts Google', 'photos chantier', 'avis réutilisés', 'aucune position garantie'],
    cta: 'Découvrir Google Business',
  },
];

export const subFeatures: FeatureCard[] = [
  {
    title: 'Retouche photo IA',
    href: '/fr/fonctionnalites/automatisation-reseaux-sociaux/retouche-photo-ia/',
    text: 'Des photos chantier plus lisibles avant publication.',
    image: assets.chantierBathroom,
    imageAlt: 'Photo de chantier BTP Renov retouchée pour une publication',
    icon: assets.iconPhoto,
    items: ['luminosité', 'cadrage', 'contraste', 'rendu plus propre'],
  },
  {
    title: 'Rédaction vocale assistée',
    href: '/fr/fonctionnalites/automatisation-reseaux-sociaux/redaction-vocale-assistee/',
    text: 'Un vocal chantier devient un texte clair.',
    image: assets.uiVocal,
    imageAlt: 'Écran PubliTools de texte de publication et vocal',
    icon: assets.iconWriting,
    items: ['transcription', 'texte', 'hashtags', 'ton choisi'],
  },
  {
    title: 'Publication multi-réseaux',
    href: '/fr/fonctionnalites/automatisation-reseaux-sociaux/publication-multi-reseaux/',
    text: 'Une publication adaptée aux réseaux connectés.',
    image: assets.uiNetworks,
    imageAlt: 'Écran PubliTools de sélection des réseaux',
    icon: assets.iconMulti,
    items: ['Facebook', 'Instagram', 'LinkedIn', 'Google Business', 'TikTok', 'YouTube'],
  },
  {
    title: 'Programmation',
    href: '/fr/fonctionnalites/automatisation-reseaux-sociaux/programmation-publications/',
    text: 'Préparez maintenant, publiez plus tard avec Pro.',
    image: assets.socialLinkedin,
    imageAlt: 'Publication BTP Renov préparée pour LinkedIn',
    icon: assets.iconClock,
    items: ['calendrier', 'publication immédiate', 'publication planifiée'],
  },
  {
    title: 'SMS de demande d’avis',
    href: '/fr/fonctionnalites/obtenir-plus-d-avis/demande-avis-sms/',
    text: 'Un SMS prêt avec le lien Google Business.',
    image: assets.uiSms,
    imageAlt: 'Écran PubliTools de demande d’avis SMS',
    icon: assets.iconReviews,
    items: ['message préparé', 'lien Google', 'app SMS ouverte', 'envoi par l’utilisateur'],
  },
  {
    title: 'Avis → publication',
    href: '/fr/fonctionnalites/obtenir-plus-d-avis/publication-avis-reseaux-sociaux/',
    text: 'Un avis réel devient un contenu publiable avec Pro.',
    image: assets.catReviews,
    imageAlt: 'Visuel avis clients BTP Renov',
    icon: assets.iconReviews,
    items: ['visuel avis', 'texte', 'format réseaux', 'Pro uniquement'],
  },
  {
    title: 'Photos Google Business',
    href: '/fr/fonctionnalites/booster-google-business/publication-photo-automatique/',
    text: 'Vos photos chantier alimentent votre présence locale.',
    image: assets.chantierFacade,
    imageAlt: 'Photo de façade rénovée BTP Renov',
    icon: assets.iconGoogle,
    items: ['photos chantier', 'fiche Google', 'activité récente'],
  },
  {
    title: 'Posts Google Business',
    href: '/fr/fonctionnalites/booster-google-business/creation-posts-google/',
    text: 'Des posts Google à partir de vos chantiers.',
    image: assets.socialGoogle,
    imageAlt: 'Post Google Business BTP Renov',
    icon: assets.iconGoogle,
    items: ['post', 'photo', 'texte', 'vocal ou écrit'],
  },
];

export const categoryPages: Record<string, CategoryPage> = {
  social: {
    slug: 'automatisation-reseaux-sociaux',
    title: 'Automatisation des réseaux sociaux BTP — PubliTools',
    description: 'PubliTools prépare vos publications réseaux sociaux à partir de photos chantier, vidéos et vocaux terrain.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/automatisation-reseaux-sociaux/',
    eyebrow: 'Réseaux sociaux BTP',
    h1: 'Automatisez vos réseaux sociaux avec vos vrais chantiers',
    lead: 'Ajoutez une photo ou une vidéo. Expliquez le chantier avec un vocal. PubliTools prépare une publication professionnelle, puis vous la publiez en 1 clic sur les réseaux connectés sélectionnés.',
    proof: 'Facebook, Instagram, LinkedIn, Google Business, TikTok et YouTube confirmés au lancement.',
    visualSrc: assets.uiNetworks,
    visualAlt: 'Écran PubliTools de sélection multi-réseaux pour BTP Renov',
    visualLabel: 'Sélection réseaux BTP Renov',
    problemTitle: 'Le chantier est fait. La publication, elle, attend toujours.',
    problemText: 'Le problème n’est pas de manquer de choses à montrer. Le problème, c’est de trouver le temps de trier les photos, écrire le texte, adapter les formats et publier partout.',
    stepsTitle: '3 étapes. Pas une soirée de plus.',
    steps: ['Vous ajoutez les photos ou vidéos du chantier.', 'Vous dictez ce qui a été fait.', 'PubliTools prépare la publication, l’adapte, puis vous validez.'],
    featuresTitle: 'Ce que PubliTools prépare pour vos réseaux',
    featuresLead: 'Les briques utiles sont rangées ici : image, texte, réseaux, programmation. Pas de tunnel, juste ce qui sert à publier proprement.',
    features: subFeatures.slice(0, 4),
    exampleTitle: 'BTP Renov publie une rénovation complète sans repartir de zéro',
    exampleText: 'Photos avant/après, vocal du chef d’équipe, choix des réseaux. PubliTools prépare une publication claire pour montrer le chantier, rassurer les futurs clients et garder une présence régulière.',
    exampleImages: [
      { title: 'Instagram', text: 'Format square visuel, chantier lisible.', image: assets.socialInstagram, imageAlt: 'Post Instagram BTP Renov' },
      { title: 'LinkedIn', text: 'Version plus professionnelle pour réseau business.', image: assets.socialLinkedin, imageAlt: 'Post LinkedIn BTP Renov' },
      { title: 'Google Business', text: 'Activité récente visible sur la fiche.', image: assets.socialGoogle, imageAlt: 'Post Google Business BTP Renov' },
    ],
    faq: [
      { question: 'Est-ce que PubliTools publie automatiquement sans validation ?', answer: 'Non. PubliTools prépare la publication. Vous pouvez relire, modifier et valider avant de publier ou programmer.' },
      { question: 'Quels réseaux sont confirmés ?', answer: 'Facebook, Instagram, LinkedIn, Google Business, TikTok et YouTube.' },
      { question: 'Est-ce que Starter publie sur les 6 réseaux à la fois ?', answer: 'Starter permet de sélectionner jusqu’à 3 réseaux par publication. Pro permet une sélection illimitée selon les réseaux connectés.' },
    ],
    finalTitle: 'Vos réseaux sociaux peuvent enfin suivre le rythme de vos chantiers',
    finalText: 'Testez PubliTools avec une vraie photo chantier et un vocal terrain.',
  },
  reviews: {
    slug: 'obtenir-plus-d-avis',
    title: 'Obtenir plus d’avis Google — PubliTools',
    description: 'PubliTools prépare des SMS de demande d’avis Google et transforme les avis reçus en contenu avec le plan Pro.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/obtenir-plus-d-avis/',
    eyebrow: 'Avis clients',
    h1: 'Demandez plus facilement des avis Google à vos clients',
    lead: 'PubliTools prépare un SMS clair avec votre lien Google Business. Votre téléphone ouvre l’app SMS. Vous vérifiez, vous envoyez.',
    proof: 'La demande d’avis par SMS est illimitée sur Starter et Pro.',
    visualSrc: assets.uiSms,
    visualAlt: 'Écran PubliTools de demande d’avis SMS pour BTP Renov',
    visualLabel: 'SMS avis BTP Renov',
    problemTitle: 'Un client satisfait ne laisse pas toujours un avis tout seul',
    problemText: 'Souvent, il faut demander au bon moment. Mais écrire le message, retrouver le lien Google, l’envoyer proprement… ça passe après le chantier suivant.',
    stepsTitle: 'La demande d’avis devient un réflexe simple',
    steps: ['Vous ajoutez le numéro du client.', 'PubliTools prépare un SMS avec le lien Google Business.', 'L’app SMS s’ouvre. Vous relisez et vous envoyez.'],
    featuresTitle: 'Ce que PubliTools fait pour vos avis',
    featuresLead: 'Demander plus simplement, puis réutiliser les vrais avis avec le bon plan. Le client garde toujours le choix de répondre.',
    features: subFeatures.slice(4, 6),
    exampleTitle: 'BTP Renov finit un chantier. La demande part le jour même.',
    exampleText: 'Le client est satisfait. BTP Renov ajoute son numéro, PubliTools prépare le SMS, l’équipe vérifie le message et l’envoie. Le geste prend peu de temps, mais il change la régularité des demandes.',
    exampleImages: [
      { title: 'Chantier terminé', text: 'Moment naturel pour demander.', image: assets.chantierBathroom, imageAlt: 'Salle de bain rénovée par BTP Renov' },
      { title: 'SMS prêt', text: 'Message clair avec lien Google.', image: assets.uiSms, imageAlt: 'SMS avis préparé dans PubliTools' },
      { title: 'Avis valorisé', text: 'Sortie publiable en Pro.', image: assets.catReviews, imageAlt: 'Visuel de valorisation avis client' },
    ],
    faq: [
      { question: 'PubliTools envoie le SMS automatiquement ?', answer: 'Non. PubliTools ouvre l’app SMS avec un message prérédigé. L’utilisateur envoie lui-même.' },
      { question: 'Est-ce que PubliTools garantit la note des avis ?', answer: 'Non. PubliTools simplifie la demande d’avis. Il ne garantit ni le nombre d’avis, ni la note.' },
      { question: 'Est-ce que les demandes d’avis sont limitées ?', answer: 'La demande d’avis par SMS est illimitée sur Starter et Pro.' },
    ],
    finalTitle: 'Arrêtez de laisser les avis clients au hasard',
    finalText: 'Préparez vos demandes d’avis au bon moment, sans promettre ce que le client décidera.',
  },
  google: {
    slug: 'booster-google-business',
    title: 'Booster Google Business pour le bâtiment — PubliTools',
    description: 'PubliTools aide les entreprises du bâtiment à publier posts, photos et avis sur Google Business, sans promettre de position Google.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/booster-google-business/',
    eyebrow: 'Google Business',
    h1: 'Alimentez votre fiche Google Business avec vos chantiers',
    lead: 'Posts, photos, demandes d’avis, réutilisation d’avis : PubliTools aide votre fiche Google Business à montrer une entreprise active, sérieuse et visible.',
    proof: 'Google Business est une destination confirmée pour vos publications PubliTools.',
    visualSrc: assets.catGoogle,
    visualAlt: 'Visuel BTP Renov pour montrer une fiche Google Business active',
    visualLabel: 'Google Business actif',
    problemTitle: 'Votre fiche Google est souvent le premier contrôle qualité',
    problemText: 'Avant d’appeler, beaucoup de prospects regardent les photos, les avis, l’activité récente. Une fiche vide ou peu à jour peut créer un doute, même quand le travail terrain est bon.',
    stepsTitle: 'Vos chantiers nourrissent aussi votre fiche Google',
    steps: ['Vous ajoutez photos, vidéos ou texte chantier.', 'PubliTools prépare un post ou des photos pour Google Business.', 'Vous validez et publiez selon les réseaux connectés.'],
    featuresTitle: 'Ce que PubliTools couvre sur Google Business',
    featuresLead: 'Photos, posts et preuves récentes pour garder une fiche active. Sans promesse de classement Google.',
    features: subFeatures.slice(6, 8),
    exampleTitle: 'BTP Renov montre son activité récente sur Google',
    exampleText: 'Après une rénovation, BTP Renov ajoute les photos du chantier. PubliTools prépare un post Google Business et peut ajouter les photos à la fiche. Le prospect voit une entreprise active, pas une fiche abandonnée.',
    exampleImages: [
      { title: 'Photo récente', text: 'Votre travail visible sur la fiche.', image: assets.chantierExterior, imageAlt: 'Façade rénovée BTP Renov' },
      { title: 'Post Google', text: 'Actualité chantier claire.', image: assets.socialGoogle, imageAlt: 'Post Google Business BTP Renov' },
      { title: 'Avis client', text: 'Réutilisation possible avec Pro.', image: assets.catGoogle, imageAlt: 'Visuel Google Business BTP Renov' },
    ],
    faq: [
      { question: 'PubliTools garantit une meilleure position Google ?', answer: 'Non. PubliTools ne garantit aucun classement Google. Il aide à alimenter la fiche avec des posts, photos et avis.' },
      { question: 'PubliTools gère toute ma fiche Google Business ?', answer: 'Non. PubliTools couvre aujourd’hui les posts, photos, demandes d’avis et réutilisation d’avis. L’administration intégrale de la fiche ne doit pas être présentée comme disponible.' },
      { question: 'Puis-je publier sur Google Business depuis PubliTools ?', answer: 'Oui, Google Business fait partie des destinations confirmées.' },
    ],
    finalTitle: 'Faites travailler vos chantiers aussi sur Google',
    finalText: 'Gardez une activité visible avec des contenus réels issus du terrain.',
  },
};

export const detailPages: Record<string, DetailPage> = {
  photo: {
    slug: 'retouche-photo-ia',
    parentTitle: 'Automatisation réseaux sociaux',
    parentHref: '/fr/fonctionnalites/automatisation-reseaux-sociaux/',
    title: 'Retouche photo IA chantier — PubliTools',
    description: 'PubliTools améliore les photos de chantier pour les rendre plus lisibles sans trahir la réalité du chantier.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/automatisation-reseaux-sociaux/retouche-photo-ia/',
    eyebrow: 'Retouche photo IA',
    h1: 'Des photos chantier plus propres, sans trahir le chantier',
    lead: 'PubliTools améliore vos photos pour les rendre plus lisibles : cadrage, luminosité, contraste, rendu plus professionnel selon les capacités disponibles.',
    visualSrc: assets.chantierBathroom,
    visualAlt: 'Photo de salle de bain rénovée BTP Renov utilisée pour une publication',
    visualLabel: 'Photo chantier préparée',
    problemTitle: 'Le chantier est bon. La photo, pas toujours.',
    problemText: 'Sur le terrain, la lumière n’est pas parfaite. Le cadrage non plus. PubliTools aide vos photos à mieux montrer le travail réalisé.',
    capabilityTitle: 'Ce que PubliTools peut améliorer',
    capabilities: ['Luminosité', 'Cadrage', 'Contraste', 'Lisibilité', 'Rendu plus régulier', 'Préparation pour réseaux et Google Business'],
    exampleTitle: 'Exemple BTP Renov',
    exampleText: 'BTP Renov ajoute une photo sombre d’une rénovation terminée. PubliTools prépare une version plus lisible, prête à accompagner une publication réseaux sociaux ou Google Business.',
    limitTitle: 'Limites à respecter',
    limitText: 'PubliTools ne doit pas déformer la réalité du chantier. La suppression d’objets n’est pas une capacité actuelle validée.',
    faq: [
      { question: 'Est-ce que PubliTools modifie la réalité du chantier ?', answer: 'Non. L’objectif est de rendre la photo plus propre et lisible, pas d’inventer un résultat.' },
      { question: 'La suppression d’objets est disponible ?', answer: 'Non, elle ne doit pas être promise aujourd’hui.' },
    ],
    finalCta: 'Transformer mes photos chantier en publications',
  },
  vocal: {
    slug: 'redaction-vocale-assistee',
    parentTitle: 'Automatisation réseaux sociaux',
    parentHref: '/fr/fonctionnalites/automatisation-reseaux-sociaux/',
    title: 'Rédaction vocale assistée — PubliTools',
    description: 'Dictez le chantier à l’oral. PubliTools transforme votre vocal en texte clair pour vos réseaux.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/automatisation-reseaux-sociaux/redaction-vocale-assistee/',
    eyebrow: 'Vocal chantier',
    h1: 'Dictez le chantier. PubliTools écrit la publication.',
    lead: 'Vous expliquez ce qui a été fait avec un vocal. PubliTools le transcrit, le réécrit et prépare un texte clair pour vos réseaux.',
    visualSrc: assets.uiVocal,
    visualAlt: 'Écran PubliTools de texte vocal pour BTP Renov',
    visualLabel: 'Texte à partir du vocal',
    problemTitle: 'Vous savez quoi dire. Vous n’avez juste pas envie de l’écrire.',
    problemText: 'Un artisan sait expliquer son chantier à l’oral. PubliTools transforme cette explication en texte propre, utilisable pour une publication.',
    capabilityTitle: 'Ce que PubliTools génère',
    capabilities: ['Transcription du vocal', 'Texte de publication', 'Texte adapté au chantier', 'Hashtags si pertinents', 'CTA de contact si utile', 'Version exploitable par réseau'],
    exampleTitle: 'Exemple BTP Renov',
    exampleText: 'Le chef d’équipe explique : ancien carrelage retiré, pose propre, finitions autour de la douche. PubliTools transforme le vocal en texte simple, clair et professionnel.',
    limitTitle: 'Limites à respecter',
    limitText: 'Le vocal ne publie rien tout seul. Il sert à générer le texte et à guider la publication. L’utilisateur peut relire et modifier avant publication.',
    faq: [
      { question: 'Puis-je écrire au lieu de parler ?', answer: 'Oui. PubliTools accepte aussi du texte libre.' },
      { question: 'Est-ce que je peux modifier le texte ?', answer: 'Oui, avant publication.' },
    ],
    finalCta: 'Créer une publication avec un vocal',
  },
  multi: {
    slug: 'publication-multi-reseaux',
    parentTitle: 'Automatisation réseaux sociaux',
    parentHref: '/fr/fonctionnalites/automatisation-reseaux-sociaux/',
    title: 'Publication multi-réseaux BTP — PubliTools',
    description: 'Publiez vos chantiers sur Facebook, Instagram, LinkedIn, Google Business, TikTok et YouTube selon votre plan.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/automatisation-reseaux-sociaux/publication-multi-reseaux/',
    eyebrow: 'Multi-réseaux',
    h1: 'Publiez vos chantiers sur plusieurs réseaux sans tout refaire',
    lead: 'Préparez une publication, choisissez les réseaux connectés, puis publiez en 1 clic selon votre plan : Facebook, Instagram, LinkedIn, Google Business, TikTok et YouTube.',
    visualSrc: assets.uiNetworks,
    visualAlt: 'Écran PubliTools de sélection Facebook Instagram LinkedIn Google TikTok YouTube',
    visualLabel: '6 réseaux confirmés',
    problemTitle: 'Le vrai temps perdu, c’est la répétition',
    problemText: 'Réimporter les photos, recopier le texte, refaire les formats, passer d’une plateforme à l’autre : c’est ce que PubliTools cherche à supprimer.',
    capabilityTitle: 'Réseaux confirmés',
    capabilities: ['Facebook', 'Instagram', 'LinkedIn', 'Google Business', 'TikTok', 'YouTube', 'Adaptation légère par format', 'Sélection des réseaux connectés'],
    exampleTitle: 'Exemple BTP Renov',
    exampleText: 'BTP Renov prépare une publication chantier et sélectionne Instagram, Facebook et Google Business en Starter. En Pro, l’équipe peut publier plus largement et programmer selon son planning.',
    limitTitle: 'Starter ou Pro',
    limitText: 'Starter permet jusqu’à 3 réseaux par publication. Pro permet une sélection illimitée selon les réseaux connectés et les contraintes des plateformes.',
    faq: [
      { question: 'TikTok et YouTube sont-ils confirmés ?', answer: 'Oui, ils sont confirmés au lancement.' },
      { question: 'Puis-je publier sur d’autres réseaux que les 6 confirmés ?', answer: 'Non. Les pages publiques doivent rester sur les réseaux confirmés : Facebook, Instagram, LinkedIn, Google Business, TikTok et YouTube.' },
    ],
    finalCta: 'Publier sur plusieurs réseaux en 1 clic',
  },
  schedule: {
    slug: 'programmation-publications',
    parentTitle: 'Automatisation réseaux sociaux',
    parentHref: '/fr/fonctionnalites/automatisation-reseaux-sociaux/',
    title: 'Programmation publications BTP — PubliTools',
    description: 'Avec Pro, préparez vos publications à l’avance et choisissez quand elles partent.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/automatisation-reseaux-sociaux/programmation-publications/',
    eyebrow: 'Programmation Pro',
    h1: 'Programmez vos publications quand vous avez enfin 10 minutes',
    lead: 'Avec le plan Pro, vous pouvez préparer vos publications à l’avance et choisir quand elles partent.',
    visualSrc: assets.socialLinkedin,
    visualAlt: 'Publication BTP Renov prête à programmer',
    visualLabel: 'Publication prête pour la semaine',
    problemTitle: 'La régularité ne devrait pas dépendre de vos soirées',
    problemText: 'Quand vous avez plusieurs chantiers à montrer, préparez les publications au même moment. PubliTools vous aide à les programmer au lieu de publier dans l’urgence.',
    capabilityTitle: 'Comment ça marche',
    capabilities: ['Publication préparée', 'Choix des réseaux', 'Publier maintenant', 'Programmer plus tard', 'Calendrier Pro', 'Organisation de la semaine'],
    exampleTitle: 'Exemple BTP Renov',
    exampleText: 'Le lundi matin, BTP Renov prépare 3 publications de chantiers terminés. L’équipe programme les publications pour la semaine au lieu de tout faire jour par jour.',
    limitTitle: 'Disponibilité',
    limitText: 'La programmation est disponible dans le plan Pro.',
    faq: [
      { question: 'La programmation est-elle incluse dans Starter ?', answer: 'Non. Elle est disponible dans Pro.' },
      { question: 'Puis-je publier immédiatement aussi ?', answer: 'Oui, vous pouvez publier maintenant ou programmer selon votre plan.' },
    ],
    finalCta: 'Programmer mes publications avec Pro',
  },
  sms: {
    slug: 'demande-avis-sms',
    parentTitle: 'Obtenir plus d’avis',
    parentHref: '/fr/fonctionnalites/obtenir-plus-d-avis/',
    title: 'Demande avis SMS Google — PubliTools',
    description: 'PubliTools prépare un SMS de demande d’avis Google avec lien. L’app SMS s’ouvre, vous envoyez.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/obtenir-plus-d-avis/demande-avis-sms/',
    eyebrow: 'Avis par SMS',
    h1: 'Demandez un avis Google avec un SMS prêt à envoyer',
    lead: 'PubliTools prépare le message et le lien Google Business. Votre app SMS s’ouvre. Vous vérifiez, vous envoyez.',
    visualSrc: assets.uiSms,
    visualAlt: 'SMS de demande d’avis Google préparé pour BTP Renov',
    visualLabel: 'SMS prêt à envoyer',
    problemTitle: 'Le meilleur moment pour demander un avis, c’est quand le client est encore content du chantier',
    problemText: 'PubliTools vous aide à ne pas laisser passer ce moment. Le message est prêt, le lien est là, l’envoi reste entre vos mains.',
    capabilityTitle: 'Comment ça marche',
    capabilities: ['Numéro client', 'SMS préparé', 'Lien Google intégré', 'App SMS ouverte', 'Message modifiable', 'Envoi par l’utilisateur'],
    exampleTitle: 'Exemple BTP Renov',
    exampleText: 'Après une salle de bain terminée, BTP Renov prépare la demande pendant que le client est encore satisfait du résultat.',
    limitTitle: 'Disponibilité',
    limitText: 'La demande d’avis par SMS est illimitée sur Starter et Pro. PubliTools ne garantit pas qu’un client laisse un avis.',
    faq: [
      { question: 'PubliTools envoie le SMS à ma place ?', answer: 'Non. L’app SMS s’ouvre, puis vous envoyez.' },
      { question: 'Le message est-il modifiable ?', answer: 'Oui, vous pouvez l’ajuster avant envoi.' },
    ],
    finalCta: 'Préparer mes demandes d’avis',
  },
  reviewPost: {
    slug: 'publication-avis-reseaux-sociaux',
    parentTitle: 'Obtenir plus d’avis',
    parentHref: '/fr/fonctionnalites/obtenir-plus-d-avis/',
    title: 'Publication avis clients réseaux sociaux — PubliTools',
    description: 'Avec Pro, transformez vos avis Google en publications ou visuels prêts à publier sur vos réseaux.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/obtenir-plus-d-avis/publication-avis-reseaux-sociaux/',
    eyebrow: 'Avis → publication',
    h1: 'Transformez vos avis Google en publications professionnelles',
    lead: 'Avec Pro, PubliTools peut transformer un avis Google en publication ou en visuel prêt à publier sur vos réseaux.',
    visualSrc: assets.catReviews,
    visualAlt: 'Visuel BTP Renov de publication avis client',
    visualLabel: 'Avis valorisé avec Pro',
    problemTitle: 'Un bon avis ne doit pas rester caché au fond de votre fiche',
    problemText: 'Un avis client rassure. PubliTools vous aide à le réutiliser proprement, sans inventer ni changer le sens du témoignage.',
    capabilityTitle: 'Ce que PubliTools prépare',
    capabilities: ['Avis réel repris', 'Visuel avis client', 'Texte court', 'Format réseaux', 'Publication possible avec Pro', 'Aperçu possible en Starter'],
    exampleTitle: 'Exemple BTP Renov',
    exampleText: 'Un avis Google reçu après chantier devient une publication simple, claire, prête à rassurer les futurs clients.',
    limitTitle: 'Disponibilité par plan',
    limitText: 'La transformation d’un avis reçu en design ou publication exploitable est incluse dans Pro. Starter peut afficher des aperçus selon le parcours produit, mais ne doit pas être présenté comme publiable.',
    faq: [
      { question: 'Est-ce que PubliTools invente des avis ?', answer: 'Non. Seuls les avis réels doivent être utilisés.' },
      { question: 'Cette fonction est-elle disponible dans Starter ?', answer: 'La sortie publiable avis → publication est Pro uniquement.' },
    ],
    finalCta: 'Valoriser mes avis clients avec Pro',
  },
  googlePhoto: {
    slug: 'publication-photo-automatique',
    parentTitle: 'Booster Google Business',
    parentHref: '/fr/fonctionnalites/booster-google-business/',
    title: 'Publication photo Google Business — PubliTools',
    description: 'Ajoutez vos photos chantier à votre présence en ligne plus vite avec PubliTools.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/booster-google-business/publication-photo-automatique/',
    eyebrow: 'Photos chantier',
    h1: 'Ajoutez vos photos chantier à votre présence en ligne plus vite',
    lead: 'PubliTools aide à préparer et publier vos photos chantier sur les réseaux connectés et Google Business, selon votre plan et les contraintes des plateformes.',
    visualSrc: assets.chantierFacade,
    visualAlt: 'Façade rénovée par BTP Renov pour Google Business',
    visualLabel: 'Photo chantier exploitable',
    problemTitle: 'Vos photos existent déjà. Elles doivent juste sortir du téléphone.',
    problemText: 'Les photos chantier dorment souvent dans la galerie. PubliTools les transforme en support de communication : plus lisibles, mieux préparées, prêtes à être publiées.',
    capabilityTitle: 'Ce que PubliTools peut faire',
    capabilities: ['Une ou plusieurs photos', 'Lisibilité améliorée', 'Design ou avant/après', 'Post réseaux', 'Photo Google Business', 'Programmation selon le plan'],
    exampleTitle: 'Exemple BTP Renov',
    exampleText: 'BTP Renov ajoute 6 photos d’un chantier terminé. PubliTools prépare une publication visuelle et peut alimenter aussi la fiche Google Business.',
    limitTitle: 'Limites à respecter',
    limitText: 'Ne pas présenter cette fonction comme une publication sans validation. L’utilisateur voit le contenu et déclenche la publication.',
    faq: [
      { question: 'Puis-je publier plusieurs photos ?', answer: 'Oui, PubliTools peut préparer des publications à partir de plusieurs photos.' },
      { question: 'Les photos peuvent aller sur Google Business ?', answer: 'Oui, Google Business fait partie des capacités actuelles ou de lancement.' },
    ],
    finalCta: 'Publier mes photos chantier',
  },
  googlePost: {
    slug: 'creation-posts-google',
    parentTitle: 'Booster Google Business',
    parentHref: '/fr/fonctionnalites/booster-google-business/',
    title: 'Création posts Google Business — PubliTools',
    description: 'Créez des posts Google Business à partir de vos chantiers, photos, vidéos, textes ou vocaux.',
    canonical: 'https://publitools.ai/fr/fonctionnalites/booster-google-business/creation-posts-google/',
    eyebrow: 'Posts Google Business',
    h1: 'Créez des posts Google Business à partir de vos chantiers',
    lead: 'PubliTools transforme vos photos, vidéos, textes ou vocaux en posts Google Business prêts à valider.',
    visualSrc: assets.catGoogle,
    visualAlt: 'Visuel BTP Renov pour la création de posts Google Business',
    visualLabel: 'Post Google prêt à valider',
    problemTitle: 'Google Business ne doit pas rester figé entre deux avis',
    problemText: 'Un post chantier, une photo récente, une actualité simple : ce sont des signaux visibles pour les prospects qui vérifient votre entreprise avant de vous contacter.',
    capabilityTitle: 'Ce que PubliTools prépare',
    capabilities: ['Post Google Business', 'Texte adapté', 'Photos chantier', 'Vocal ou texte source', 'Avis réutilisable avec Pro', 'Validation avant publication'],
    exampleTitle: 'Exemple BTP Renov',
    exampleText: 'BTP Renov termine une rénovation extérieure. PubliTools prépare un post Google Business avec les photos, un texte clair et une présentation sérieuse du chantier.',
    limitTitle: 'Limites à respecter',
    limitText: 'Créer des posts Google Business ne garantit pas une position Google. La page parle d’activité visible et de preuve, pas de classement garanti.',
    faq: [
      { question: 'PubliTools garantit-il un meilleur classement Google ?', answer: 'Non. Il aide à alimenter la fiche avec des contenus réels.' },
      { question: 'Puis-je partir d’un vocal ?', answer: 'Oui, le vocal peut servir à rédiger le texte du post.' },
    ],
    finalCta: 'Créer un post Google Business',
  },
};
