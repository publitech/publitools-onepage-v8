export type HomepageV12ImageAsset = { src: string; width: number; height: number; alt: string };
export type HomepageV12SocialLogo = { name: string; src: string; alt: string };

export const homepageV12ImageBase = '/homepage/fr/v12/images/';

export const homepageV12Images = {
  hero: { src: `${homepageV12ImageBase}hero-app-demo-v12-dominante.png`, width: 1024, height: 768, alt: 'Démo PubliTools montrant photo chantier, vocal transcrit, caption générée, validation humaine et publication multi-destinations Google Business, Facebook, Instagram, LinkedIn.' },
  outputs: { src: `${homepageV12ImageBase}one-jobsite-to-outputs-v12.png`, width: 1024, height: 768, alt: 'Un chantier source génère 6 sorties : posts Instagram, Google Business, Facebook, LinkedIn, visuel avant/après et avis client.' },
  flow: { src: `${homepageV12ImageBase}flow-3-steps-v12.png`, width: 1024, height: 768, alt: 'Workflow PubliTools en 3 étapes : ajoutez photo, vidéo ou vocal, relisez caption et design, publiez sur destinations connectées.' },
  googleReviews: { src: `${homepageV12ImageBase}google-reviews-flow-v12.png`, width: 768, height: 1024, alt: 'Google Business : publication chantier, SMS avis préparé, avis client transformé en visuel cinq étoiles.' },
  validation: { src: `${homepageV12ImageBase}validation-multi-destinations-v12.png`, width: 1024, height: 768, alt: 'Validation contenu PubliTools vers Google Business, Facebook, Instagram et LinkedIn.' },
  beforeAfter: { src: `${homepageV12ImageBase}before-after-compact-v12.png`, width: 1024, height: 768, alt: 'Comparaison à la main vs PubliTools : caption préparée, formats prêts, SMS avis préparé.' },
  finalCta: { src: `${homepageV12ImageBase}final-cta-visual-v12.png`, width: 1024, height: 576, alt: 'Scène finale chantier et app PubliTools pour démarrer un essai gratuit.' },
  transformationPhotos: { src: `${homepageV12ImageBase}transformation-photos-v12.png`, width: 1024, height: 576, alt: 'Photos chantier transformées en posts professionnels et visuels avant/après.' },
  transformationVideos: { src: `${homepageV12ImageBase}transformation-videos-v12.png`, width: 1024, height: 1024, alt: 'Vidéos brutes transformées en publications prêtes pour TikTok et YouTube quand la matière est compatible.' },
  transformationVocaux: { src: `${homepageV12ImageBase}transformation-vocaux-v12.png`, width: 1024, height: 576, alt: 'Messages vocaux transcrits en captions claires pour publications.' },
  transformationAvis: { src: `${homepageV12ImageBase}transformation-avis-v12.png`, width: 1024, height: 576, alt: 'Avis clients transformés en visuels cinq étoiles et SMS prêts à envoyer.' },
} as const satisfies Record<string, HomepageV12ImageAsset>;

export const homepageV12ProofIcons = {
  devis: '/homepage/fr/v12/icons/icon-devis.svg',
  vues: '/homepage/fr/v12/icons/icon-vues.svg',
  googleLocal: '/homepage/fr/v12/icons/icon-google-local.svg',
  avis: '/homepage/fr/v12/icons/icon-avis.svg',
  validation: '/homepage/fr/v12/icons/icon-validation.svg',
  publication: '/homepage/fr/v12/icons/icon-publication.svg',
} as const;

export const homepageV12SocialLogos = [
  { name: 'Facebook', src: '/social/facebook-official.svg', alt: 'Logo Facebook' },
  { name: 'Instagram', src: '/social/instagram-official.svg', alt: 'Logo Instagram' },
  { name: 'LinkedIn', src: '/social/linkedin-official.svg', alt: 'Logo LinkedIn' },
  { name: 'Google Business', src: '/social/google-official.svg', alt: 'Logo Google Business' },
  { name: 'TikTok', src: '/social/tiktok-official.svg', alt: 'Logo TikTok' },
  { name: 'YouTube', src: '/social/youtube-official.svg', alt: 'Logo YouTube' },
] as const satisfies HomepageV12SocialLogo[];
