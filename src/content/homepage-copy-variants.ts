export type CopyVariantSlug = 'publicite-internet' | 'chantiers-visibles' | 'avis-google';

export interface CopyVariantSection {
  kicker?: string;
  title: string;
  text?: string;
  bullets?: string[];
}

export interface CopyVariantPricing {
  intro: string;
  plans: Array<{ name: string; price: string; detail: string }>;
}

export interface CopyVariant {
  slug: CopyVariantSlug;
  label: string;
  angle: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  visualNote: string;
  proofLine: string;
  sections: CopyVariantSection[];
  pricing: CopyVariantPricing;
  finalCta: string;
}

export const copyHomepageVariants: Record<CopyVariantSlug, CopyVariant> = {
  'publicite-internet': {
    slug: 'publicite-internet',
    label: 'Variante 1',
    angle: 'Catégorie claire : PubliTools = publicité sur Internet pour le BTP.',
    title: 'Variante 1 — Publicité Internet simple | PubliTools',
    description: 'Structure copywriting PubliTools France orientée publicité sur Internet, réseaux sociaux, avis clients et Google Business.',
    eyebrow: 'PubliTools — page copy-first',
    h1: 'L’IA BTP pour votre publicité sur Internet',
    subheadline: 'Photos, vidéos, vocaux, avis : PubliTools prépare vos publications pour Facebook, Instagram, LinkedIn et Google Business. Vous relisez, vous publiez.',
    primaryCta: 'Essayer avec un chantier',
    secondaryCta: 'Voir les fonctions incluses',
    visualNote: 'Image/animation future : un artisan ajoute une photo de chantier et un vocal ; PubliTools prépare une publication professionnelle, puis montre les destinations Facebook, Instagram, LinkedIn et Google Business.',
    proofLine: 'Le message : une seule plateforme pour préparer, vérifier, programmer et publier vos contenus principaux.',
    sections: [
      {
        kicker: 'Le problème',
        title: 'Vos chantiers sont visibles sur place. Pas assez sur Internet.',
        text: 'Vous avez déjà les photos, les vidéos, les clients contents et les chantiers terminés. Ce qui manque, c’est le temps de transformer tout ça en publications propres et régulières.'
      },
      {
        kicker: 'Le mécanisme',
        title: 'Vous donnez la matière. PubliTools prépare la publication.',
        bullets: [
          'Ajoutez une photo, une vidéo, un texte ou un vocal de chantier.',
          'PubliTools rédige une publication claire et adaptée au support.',
          'L’outil peut retoucher la photo, proposer un visuel ou un carrousel.',
          'Votre logo et vos couleurs peuvent être réutilisés dans les visuels.'
        ]
      },
      {
        kicker: 'Diffusion',
        title: 'Une publication, plusieurs endroits utiles.',
        bullets: [
          'Facebook et Instagram pour montrer vos réalisations.',
          'LinkedIn pour garder une image sérieuse auprès des pros.',
          'Google Business pour garder votre fiche active avec des contenus récents.',
          'Programmation possible pour publier sans tout faire au dernier moment.'
        ]
      },
      {
        kicker: 'Avis clients',
        title: 'Les avis deviennent aussi de la matière publiable.',
        text: 'Après un chantier, vous pouvez envoyer une demande d’avis par SMS. Les avis Google peuvent ensuite devenir des publications ou des visuels qui montrent ce que vos clients disent déjà de votre travail.'
      },
      {
        kicker: 'Contrôle',
        title: 'Rien ne part sans votre validation.',
        text: 'Vous relisez, vous modifiez si besoin, vous choisissez les réseaux, puis vous publiez ou programmez. PubliTools prépare ; vous gardez la main.'
      }
    ],
    pricing: {
      intro: 'Deux offres simples, sans engagement, selon le volume de publications dont vous avez besoin.',
      plans: [
        { name: 'Essai', price: '14 jours', detail: 'Pour tester le workflow avec vos vrais chantiers.' },
        { name: 'Basique', price: '19,90 €/mois', detail: '10 publications par mois pour garder une présence régulière.' },
        { name: 'Illimité', price: '39,90 €/mois', detail: 'Publications illimitées, programmation et mise en avant des avis.' }
      ]
    },
    finalCta: 'Commencez avec une photo de chantier et voyez ce que PubliTools prépare.'
  },
  'chantiers-visibles': {
    slug: 'chantiers-visibles',
    label: 'Variante 2',
    angle: 'Angle métier : montrer le travail bien fait, sans parler comme une agence.',
    title: 'Variante 2 — Chantiers visibles | PubliTools',
    description: 'Structure copywriting PubliTools France orientée chantiers, savoir-faire, photos, retouches, visuels et contrôle avant publication.',
    eyebrow: 'PubliTools — page copy-first',
    h1: 'Montrez vos chantiers sans y passer vos soirées',
    subheadline: 'Une photo, une vidéo ou un vocal suffit à préparer une publication professionnelle avec votre logo, vos couleurs et votre travail réel.',
    primaryCta: 'Créer une publication chantier',
    secondaryCta: 'Voir le parcours',
    visualNote: 'Image/animation future : une photo brute de rénovation devient une publication propre avec retouche, logo, couleurs, texte court et aperçu avant validation.',
    proofLine: 'Le message : votre savoir-faire existe déjà ; PubliTools le rend publiable plus vite et plus proprement.',
    sections: [
      {
        kicker: 'Départ terrain',
        title: 'Votre meilleure matière, c’est le chantier terminé.',
        text: 'Une cuisine rénovée, une toiture refaite, une façade propre, une salle de bain livrée : ce sont déjà des preuves. PubliTools aide à les transformer en publications claires.'
      },
      {
        kicker: 'Avant publication',
        title: 'La photo peut être améliorée avant d’être montrée.',
        bullets: [
          'Retouche d’une photo brute avant publication.',
          'Création de visuels avant/après quand le chantier s’y prête.',
          'Mise en page avec logo et couleurs de l’entreprise.',
          'Possibilité de choisir ou modifier le design avant validation.'
        ]
      },
      {
        kicker: 'Texte',
        title: 'Vous expliquez vite. PubliTools rédige proprement.',
        text: 'Un vocal suffit pour donner le contexte : ce qui a été fait, où, avec quel résultat. PubliTools transforme ces informations en texte de publication compréhensible.'
      },
      {
        kicker: 'Réseaux',
        title: 'Vos réalisations peuvent être publiées là où les clients regardent.',
        bullets: [
          'Facebook et Instagram pour les photos de chantier.',
          'LinkedIn pour l’image professionnelle.',
          'Google Business pour ajouter des contenus récents à votre fiche.',
          'Publication immédiate ou programmation selon votre planning.'
        ]
      },
      {
        kicker: 'Confiance',
        title: 'Vos clients contents deviennent des preuves visibles.',
        text: 'PubliTools permet aussi de demander un avis par SMS, puis de réutiliser un avis Google en publication ou en visuel. Simple, visible, utile.'
      }
    ],
    pricing: {
      intro: 'Le prix doit se comprendre comme un outil de présence régulière, pas comme une dépense de design isolée.',
      plans: [
        { name: 'Essai', price: '14 jours', detail: 'Pour tester avec vos photos et vos vocaux.' },
        { name: 'Basique', price: '19,90 €/mois', detail: '10 publications par mois : assez pour publier régulièrement sans se disperser.' },
        { name: 'Illimité', price: '39,90 €/mois', detail: 'Pour publier souvent, programmer, et mettre davantage vos avis en avant.' }
      ]
    },
    finalCta: 'Prenez un chantier récent. PubliTools vous aide à en faire une publication propre.'
  },
  'avis-google': {
    slug: 'avis-google',
    label: 'Variante 3',
    angle: 'Angle preuves locales : avis clients, Google Business et réseaux sociaux.',
    title: 'Variante 3 — Avis et Google | PubliTools',
    description: 'Structure copywriting PubliTools France orientée avis clients, SMS, Google Business et réutilisation des preuves sur les réseaux sociaux.',
    eyebrow: 'PubliTools — page copy-first',
    h1: 'Vos avis clients visibles sur vos réseaux et Google',
    subheadline: 'Demandez un avis par SMS après un chantier, puis transformez vos avis Google en publications propres pour Facebook, Instagram, LinkedIn et Google Business.',
    primaryCta: 'Utiliser mes avis clients',
    secondaryCta: 'Voir le flow avis',
    visualNote: 'Image/animation future : après un chantier terminé, l’artisan envoie une demande d’avis par SMS ; un avis Google devient ensuite une publication claire avec photo, note et logo.',
    proofLine: 'Le message : les avis ne restent pas cachés ; ils deviennent des preuves que l’entreprise peut montrer proprement.',
    sections: [
      {
        kicker: 'Après chantier',
        title: 'Le bon moment pour demander un avis est souvent perdu.',
        text: 'Le chantier est livré, le client est content, mais la demande d’avis passe à la trappe. PubliTools aide à envoyer une demande par SMS avec un lien vers Google Business.'
      },
      {
        kicker: 'Demande SMS',
        title: 'Un numéro client, un message prêt à envoyer.',
        bullets: [
          'Ajoutez le numéro du client après le chantier.',
          'PubliTools génère une demande d’avis simple.',
          'Le lien dirige vers la fiche Google Business.',
          'Le but : faciliter la demande, sans promettre un volume d’avis garanti.'
        ]
      },
      {
        kicker: 'Réutilisation',
        title: 'Un bon avis peut devenir une publication.',
        text: 'Quand un avis Google existe, PubliTools peut le transformer en publication, en caption ou en visuel. Vous montrez ce que vos clients disent déjà de votre travail.'
      },
      {
        kicker: 'Présence locale',
        title: 'Vos preuves circulent sur les bons supports.',
        bullets: [
          'Google Business pour garder des contenus récents liés à l’entreprise.',
          'Facebook et Instagram pour montrer les avis avec les chantiers.',
          'LinkedIn pour renforcer l’image sérieuse de l’entreprise.',
          'Validation avant publication pour garder le contrôle.'
        ]
      },
      {
        kicker: 'Pas seulement les avis',
        title: 'La même plateforme prépare aussi vos publications chantier.',
        text: 'Photos, vidéos, vocaux, retouches, visuels, carrousels, programmation : l’angle avis ouvre la porte, mais PubliTools couvre aussi le contenu régulier de l’entreprise.'
      }
    ],
    pricing: {
      intro: 'L’offre doit faire sentir que les avis, les réseaux sociaux et Google Business sont dans le même outil.',
      plans: [
        { name: 'Essai', price: '14 jours', detail: 'Pour tester la demande d’avis et une publication issue d’un chantier.' },
        { name: 'Basique', price: '19,90 €/mois', detail: '10 publications par mois pour réutiliser vos chantiers et vos avis.' },
        { name: 'Illimité', price: '39,90 €/mois', detail: 'Publications illimitées, programmation et mise en avant des avis clients.' }
      ]
    },
    finalCta: 'Commencez par un avis client ou une photo de chantier récente.'
  }
};

export const copyVariantOrder: CopyVariantSlug[] = ['publicite-internet', 'chantiers-visibles', 'avis-google'];

export function getCopyHomepageVariant(slug: CopyVariantSlug): CopyVariant {
  return copyHomepageVariants[slug];
}
