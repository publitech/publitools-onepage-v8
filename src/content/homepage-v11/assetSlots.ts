export type HomepageV11ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type HomepageV11IconAsset = {
  src: string;
  alt: string;
};

export const homepageV11R2Base = 'https://pub-5e559559ce914c5990f858683a782702.r2.dev/assets/website/homepage/fr/2026-06-05/v11/';

export const homepageV11Images = {
  heroDashboard: {
    src: `${homepageV11R2Base}hero-dashboard-main.png`,
    width: 1024,
    height: 576,
    alt: 'Dashboard PubliTools montrant photo de chantier, caption générée, validation humaine et destinations cochées.',
  },
  avatars: [
    { src: `${homepageV11R2Base}avatar-couvreur.png`, width: 1024, height: 1024, alt: 'Artisan couvreur utilisateur PubliTools.' },
    { src: `${homepageV11R2Base}avatar-peintre.png`, width: 1024, height: 1024, alt: 'Artisan peintre utilisateur PubliTools.' },
    { src: `${homepageV11R2Base}avatar-plombier.png`, width: 1024, height: 1024, alt: 'Artisan plombier utilisateur PubliTools.' },
    { src: `${homepageV11R2Base}avatar-paysagiste.png`, width: 1024, height: 1024, alt: 'Artisan paysagiste utilisateur PubliTools.' },
    { src: `${homepageV11R2Base}avatar-renovateur.png`, width: 1024, height: 1024, alt: 'Artisane rénovatrice utilisatrice PubliTools.' },
  ],
  transformations: {
    photo: { src: `${homepageV11R2Base}transform-photo.png`, width: 1024, height: 576, alt: 'Transformation PubliTools photo chantier brute vers visuel prêt à publier.' },
    video: { src: `${homepageV11R2Base}transform-video.png`, width: 1024, height: 576, alt: 'Transformation PubliTools vidéo chantier vers miniature TikTok et YouTube.' },
    vocal: { src: `${homepageV11R2Base}transform-vocal.png`, width: 1024, height: 576, alt: 'Transformation PubliTools vocal chantier vers caption professionnelle.' },
    texte: { src: `${homepageV11R2Base}transform-texte.png`, width: 1024, height: 576, alt: 'Transformation PubliTools note texte vers publication structurée.' },
    avis: { src: `${homepageV11R2Base}transform-avis.png`, width: 1024, height: 576, alt: 'Transformation PubliTools avis client vers visuel cinq étoiles.' },
    logo: { src: `${homepageV11R2Base}transform-logo.png`, width: 1024, height: 576, alt: 'Transformation PubliTools logo et couleurs vers visuel brandé.' },
  },
  googleBusiness: {
    src: `${homepageV11R2Base}mockup-google-business.png`,
    width: 768,
    height: 1024,
    alt: 'Mockup de fiche Google Business artisan avec posts chantier, note 4,8 et avis visibles.',
  },
  reviewSms: {
    src: `${homepageV11R2Base}mockup-sms-avis.png`,
    width: 768,
    height: 1024,
    alt: 'Mockup mobile montrant un SMS d’avis préparé par PubliTools et à envoyer par l’utilisateur.',
  },
  reviewCard: {
    src: `${homepageV11R2Base}visuel-avis-5-etoiles.png`,
    width: 1024,
    height: 1024,
    alt: 'Visuel PubliTools cinq étoiles créé à partir d’un avis client.',
  },
  networkHubGenerated: {
    src: `${homepageV11R2Base}mockup-destinations-reseaux.png`,
    width: 1024,
    height: 576,
    alt: 'Mockup de distribution multi-destinations PubliTools fourni par Léa.',
  },
  finalCta: {
    src: `${homepageV11R2Base}fond-cta-final-chantier.png`,
    width: 1024,
    height: 576,
    alt: 'Chantier français en cours utilisé comme fond visuel PubliTools.',
  },
} as const;

export const homepageV11LocalIconBase = '/homepage/fr/v11/icons/';

export const homepageV11Icons = {
  devis: { src: `${homepageV11LocalIconBase}icon-devis.svg`, alt: 'Icône demande de devis.' },
  vues: { src: `${homepageV11LocalIconBase}icon-vues.svg`, alt: 'Icône vues de posts chantier.' },
  googleLocal: { src: `${homepageV11LocalIconBase}icon-google-local.svg`, alt: 'Icône visibilité locale Google.' },
  avis: { src: `${homepageV11LocalIconBase}icon-avis.svg`, alt: 'Icône avis Google.' },
  visibilite: { src: `${homepageV11LocalIconBase}icon-visibilite.svg`, alt: 'Icône visibilité.' },
  reputation: { src: `${homepageV11LocalIconBase}icon-reputation.svg`, alt: 'Icône réputation.' },
  contact: { src: `${homepageV11LocalIconBase}icon-contact.svg`, alt: 'Icône contact.' },
  croissance: { src: `${homepageV11LocalIconBase}icon-croissance.svg`, alt: 'Icône croissance.' },
  horloge: { src: `${homepageV11LocalIconBase}icon-horloge.svg`, alt: 'Icône temps inférieur à deux minutes.' },
  caption: { src: `${homepageV11LocalIconBase}icon-caption.svg`, alt: 'Icône caption.' },
  retouche: { src: `${homepageV11LocalIconBase}icon-retouche-image.svg`, alt: 'Icône retouche image.' },
  validation: { src: `${homepageV11LocalIconBase}icon-validation.svg`, alt: 'Icône validation humaine.' },
  publication: { src: `${homepageV11LocalIconBase}icon-publication.svg`, alt: 'Icône publication.' },
} as const;

export const homepageV11NetworkLogos = [
  { name: 'Facebook', src: '/social/facebook-official.svg', alt: 'Logo Facebook', format: 'posts chantier, photos, vidéos, albums si format compatible.' },
  { name: 'Instagram', src: '/social/instagram-official.svg', alt: 'Logo Instagram', format: 'images, vidéos, carrousels, textes adaptés.' },
  { name: 'LinkedIn', src: '/social/linkedin-official.svg', alt: 'Logo LinkedIn', format: 'contenus pro, études de cas chantiers, recrutement.' },
  { name: 'Google Business', src: '/social/google-official.svg', alt: 'Logo Google Business', format: 'posts locaux, offres, actualités chantier.' },
  { name: 'TikTok', src: '/social/tiktok-official.svg', alt: 'Logo TikTok', format: 'vidéos courtes de chantier quand la matière est compatible.' },
  { name: 'YouTube', src: '/social/youtube-official.svg', alt: 'Logo YouTube', format: 'Shorts, vidéos longues, descriptions optimisées, miniatures.' },
] as const;
