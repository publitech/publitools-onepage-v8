export type VariantSlug = 'variant-a' | 'variant-b' | 'variant-c' | 'variant-d' | 'variant-e';

export type VariantStatus = 'scaffold' | 'copy-ready' | 'assets-missing' | 'ready-for-review';

export interface VariantCta {
  label: string;
  href: string;
  helper?: string;
}

export interface VariantMedia {
  src: string;
  webpSrc?: string;
  alt: string;
  caption?: string;
}

export interface VariantHeroVisual {
  chantier: VariantMedia;
  chantierMobile?: VariantMedia;
  mockup: VariantMedia;
  checkIcon?: VariantMedia;
  voiceNote: string;
  draftTitle: string;
  draftLines: string[];
  brandLabel: string;
  networkChips: string[];
  surfaces: Array<{ label: string; detail: string }>;
}

export interface VariantHero {
  eyebrow: string;
  title: string;
  lead: string;
  reassurance?: string;
  primaryCta: VariantCta;
  secondaryCta?: VariantCta;
  visualNote: string;
  visual?: VariantHeroVisual;
}

export type VariantSectionKind =
  | 'proof-grid'
  | 'workflow-demo'
  | 'capability-cards'
  | 'comparison-block'
  | 'faq-block'
  | 'final-cta';

export interface VariantSectionBase {
  id: string;
  kind: VariantSectionKind;
  eyebrow?: string;
  title: string;
  body?: string;
}

export interface VariantListItem {
  title: string;
  body: string;
  meta?: string;
  image?: VariantMedia;
}

export interface VariantFaqItem {
  question: string;
  answer: string;
}

export interface VariantSection extends VariantSectionBase {
  items?: VariantListItem[];
  faqs?: VariantFaqItem[];
  cta?: VariantCta;
}

export interface HomepageVariant {
  slug: VariantSlug;
  label: string;
  route: string;
  status: VariantStatus;
  strategicIntent: string;
  audienceNote: string;
  assetStatus: string;
  motionStatus: string;
  title: string;
  description: string;
  hero: VariantHero;
  sections: VariantSection[];
}
