import { fields } from '@keystatic/core';
import { block, wrapper } from '@keystatic/core/content-components';

const text = (label: string) => fields.text({ label, multiline: true });
const strings = (label: string) => fields.array(text('Texte (gras : **texte**)'), { label, itemLabel: props => props.value });
const ctaFields = () => ({ label: text('Texte du bouton'), sublabel: text('Texte sous le bouton'), href: fields.url({ label: 'URL du bouton', validation: { isRequired: true } }) });

export const blogContentComponents = {
  ReasonHeader: block({ label: 'Titre de raison', schema: { number: fields.integer({ label: 'Numéro', defaultValue: 1, validation: { min: 1 } }), title: text('Titre') } }),
  Steps: block({ label: 'Étapes illustrées', schema: { items: fields.array(fields.object({ icon: text('Icône'), title: text('Titre'), text: text('Description'), image: fields.image({ label: 'Image sous cette étape (facultative)', directory: 'public/assets/blog', publicPath: '/assets/blog/' }) }), { label: 'Étapes', itemLabel: props => props.fields.title.value }) } }),
  CheckList: block({ label: 'Liste ✅ / ❌', schema: { variant: fields.select({ label: 'Style', options: [{ label: '✅', value: 'check' }, { label: '❌', value: 'cross' }], defaultValue: 'check' }), items: strings('Lignes') } }),
  NetworkChips: block({ label: 'Réseaux sociaux', schema: { items: strings('Réseaux') } }),
  ChronoDuel: block({ label: 'Duel chronométré', schema: { slowLabel: text('Libellé à gauche'), slowValue: text('Valeur à gauche'), fastLabel: text('Libellé à droite'), fastValue: text('Valeur à droite') } }),
  ComparisonTable: block({ label: 'Tableau comparatif', schema: { headers: strings('En-têtes'), rows: fields.array(strings('Cellules'), { label: 'Lignes' }), footer: strings('Total (facultatif)'), highlightColumn: fields.integer({ label: 'Colonne mise en avant (0 = première)', defaultValue: 2, validation: { min: 0 } }) } }),
  StatCards: block({ label: 'Chiffres clés', schema: { items: fields.array(fields.object({ value: text('Chiffre'), label: text('Libellé') }), { label: 'Chiffres', itemLabel: props => props.fields.value.value }), source: text('Source') } }),
  NumberedSteps: block({ label: 'Étapes numérotées', schema: { items: strings('Étapes') } }),
  Timeline: block({ label: 'Frise chronologique', schema: { items: fields.array(fields.object({ day: text('Jour'), text: text('Description') }), { label: 'Étapes', itemLabel: props => props.fields.day.value }) } }),
  Callout: wrapper({ label: 'Encadré conseil', schema: { title: fields.text({ label: 'Titre (facultatif)' }) } }),
  Transition: wrapper({ label: 'Transition', schema: {} }),
  CtaButton: block({ label: 'Bouton d’essai', schema: ctaFields() }),
  FinalCta: block({ label: 'Bloc final', schema: { title: text('Titre'), text: text('Description'), ...ctaFields() } }),
  TrialOffer: block({ label: 'Offre d’essai · prix et avantages', schema: {
    brand: text('Marque'), title: text('Titre'), text: text('Description'),
    trial: text('Offre d’essai'), price: text('Prix après l’essai'), priceNote: text('Transition vers le prix'),
    benefitsTitle: text('Titre des avantages'),
    benefits: fields.array(text('Avantage'), { label: 'Avantages', itemLabel: props => props.value }),
    terms: fields.array(text('Condition'), { label: 'Conditions de l’essai', itemLabel: props => props.value }),
    closing: text('Invitation à essayer'), ...ctaFields(),
  } }),
  ImageSlot: block({ label: 'Image / emplacement', schema: { src: fields.image({ label: 'Image (facultative)', directory: 'public/assets/blog', publicPath: '/assets/blog/' }), alt: text('Description de l’image'), caption: text('Légende') } }),
};
