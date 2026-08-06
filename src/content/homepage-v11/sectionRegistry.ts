export type HomepageV11SectionId =
  | 'hero'
  | 'proof'
  | 'growth-mechanism'
  | 'transformations'
  | 'how-it-works'
  | 'google-reviews'
  | 'network-distribution'
  | 'trial-start'
  | 'comparison'
  | 'pricing'
  | 'faq'
  | 'final-cta';

export type HomepageV11SectionStatus = 'reuse-existing' | 'new-component' | 'adapt-existing';

export type HomepageV11AnimationKey =
  | 'heroWorkflowLoop'
  | 'proofMetricsCountUp'
  | 'growthLoopDiagram'
  | 'transformationCards'
  | 'threeStepWorkflow'
  | 'googleReviewFlow'
  | 'networkHub'
  | 'comparisonReveal';

export type HomepageV11SectionDefinition = {
  id: HomepageV11SectionId;
  order: number;
  sourceCopyHeading: string;
  componentName: string;
  status: HomepageV11SectionStatus;
  dataKey: string;
  animationKey?: HomepageV11AnimationKey;
  notes: string;
};

export const homepageV11Sections: HomepageV11SectionDefinition[] = [
  { id: 'hero', order: 1, sourceCopyHeading: 'Hero', componentName: 'HeroSection', status: 'adapt-existing', dataKey: 'hero', animationKey: 'heroWorkflowLoop', notes: 'Reprendre le layout 2 colonnes actuel et remplacer ProductFlowAnimation par un mockup V11 piloté par assets Léa.' },
  { id: 'proof', order: 2, sourceCopyHeading: 'Barre de preuve', componentName: 'ProofMetricStrip', status: 'new-component', dataKey: 'proofMetrics', animationKey: 'proofMetricsCountUp', notes: 'Section compacte 4 cartes desktop / 2x2 mobile ; chiffres éditables côté CMS.' },
  { id: 'growth-mechanism', order: 3, sourceCopyHeading: 'Le mécanisme de croissance en ligne pour artisans', componentName: 'GrowthMechanismSection', status: 'new-component', dataKey: 'growthMechanism', animationKey: 'growthLoopDiagram', notes: 'Schéma loop simple : Chantier réel → Visibilité → Réputation → Contact → Croissance.' },
  { id: 'transformations', order: 4, sourceCopyHeading: 'Ce que PubliTools transforme', componentName: 'TransformationGridSection', status: 'new-component', dataKey: 'transformations', animationKey: 'transformationCards', notes: 'Grille 2x3 très visuelle, chaque carte reçoit un asset brut/résultat via manifest central.' },
  { id: 'how-it-works', order: 5, sourceCopyHeading: 'Comment ça marche en 3 étapes', componentName: 'HowItWorksSection', status: 'adapt-existing', dataKey: 'howItWorks', animationKey: 'threeStepWorkflow', notes: 'Réutiliser l’approche timeline actuelle, mais avec PhoneWorkflowMockup dédié V11.' },
  { id: 'google-reviews', order: 6, sourceCopyHeading: 'Google Business et avis clients', componentName: 'GoogleReviewsSection', status: 'adapt-existing', dataKey: 'googleReviews', animationKey: 'googleReviewFlow', notes: 'Fusionner les sections actuelles avis + Google Business en split screen V11.' },
  { id: 'network-distribution', order: 7, sourceCopyHeading: '6 destinations, 1 validation', componentName: 'NetworkDistributionSection', status: 'adapt-existing', dataKey: 'networkDistribution', animationKey: 'networkHub', notes: 'Conserver les vrais logos /public/social ; desktop radial, mobile carrousel horizontal.' },
  { id: 'trial-start', order: 8, sourceCopyHeading: 'Démarrage et essai 14 jours', componentName: 'TrialStartSection', status: 'new-component', dataKey: 'trialStart', notes: 'Mini workflow loop 12–15s, sans vidéo lourde tant que les assets Léa ne sont pas livrés.' },
  { id: 'comparison', order: 9, sourceCopyHeading: 'À la main vs PubliTools', componentName: 'ManualVsPubliToolsSection', status: 'adapt-existing', dataKey: 'comparison', animationKey: 'comparisonReveal', notes: 'Réutiliser le modèle comparison actuel, mais passer en tableau 2 colonnes V11.' },
  { id: 'pricing', order: 10, sourceCopyHeading: 'Tarifs', componentName: 'PricingSection', status: 'reuse-existing', dataKey: 'pricing', notes: 'Composant actuel conservable ; vérifier libellés V11 exacts au moment de l’intégration.' },
  { id: 'faq', order: 11, sourceCopyHeading: 'FAQ', componentName: 'FaqSection', status: 'adapt-existing', dataKey: 'faq', notes: 'Réutiliser details/summary ou FaqSection existant ; limiter à la copy V11 verrouillée.' },
  { id: 'final-cta', order: 12, sourceCopyHeading: 'CTA final', componentName: 'FinalCtaSection', status: 'new-component', dataKey: 'finalCta', notes: 'Bandeau visuel avec fond chantier Léa ; pas de placeholder final.' },
];

export const homepageV11ComponentImportPlan = homepageV11Sections.map((section) => ({
  componentName: section.componentName,
  path: section.status === 'reuse-existing'
    ? `src/components/${section.componentName}.astro`
    : `src/components/homepage-v11/${section.componentName}.astro`,
}));
