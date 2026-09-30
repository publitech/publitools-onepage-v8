import { collection, config, fields } from '@keystatic/core';
import { blogContentComponents } from './src/lib/blogContentComponents';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'PubliTools · Journal' } },
  collections: {
    posts: collection({
      label: 'Articles · FR / EN / ES / DE',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre', validation: { isRequired: true } } }),
        locale: fields.select({ label: 'Langue', options: [{ label: 'Français', value: 'fr' }, { label: 'English', value: 'en' }, { label: 'Español', value: 'es' }, { label: 'Deutsch', value: 'de' }], defaultValue: 'fr' }),
        draft: fields.checkbox({ label: 'Brouillon (non publié)', defaultValue: true }),
        description: fields.text({ label: 'Résumé / description SEO', multiline: true, validation: { isRequired: true, length: { max: 180 } } }),
        seoTitle: fields.text({ label: 'Titre SEO (facultatif)' }),
        category: fields.select({ label: 'Sujet', options: [{ label: 'Réseaux sociaux', value: 'social' }, { label: 'Visibilité locale', value: 'local' }, { label: 'Photos de chantier', value: 'photos' }, { label: 'IA & productivité', value: 'ai' }], defaultValue: 'social' }),
        author: fields.text({ label: 'Auteur', defaultValue: 'Équipe PubliTools', validation: { isRequired: true } }),
        publishedAt: fields.date({ label: 'Date de publication', validation: { isRequired: true } }),
        updatedAt: fields.date({ label: 'Dernière modification (facultatif)' }),
        translationKey: fields.text({ label: 'Identifiant commun aux traductions', description: 'Même valeur pour les versions traduites du même article ; une seule version par langue.' }),
        cover: fields.image({ label: 'Couverture', directory: 'src/assets/blog', publicPath: '../../assets/blog/', validation: { isRequired: true } }),
        coverAlt: fields.text({ label: 'Description de l’image', validation: { isRequired: true } }),
        takeaways: fields.array(fields.text({ label: 'Point essentiel', validation: { isRequired: true } }), { label: 'À retenir', itemLabel: props => props.value }),
        layout: fields.select({ label: 'Mise en page', options: [{ label: 'Article classique', value: 'standard' }, { label: 'Listicle · colonne 680 px', value: 'listicle' }], defaultValue: 'standard' }),
        readingTime: fields.integer({ label: 'Temps de lecture en minutes (facultatif)', validation: { min: 1 } }),
        content: fields.mdx({
          label: 'Article',
          options: { heading: [2, 3], image: { directory: 'src/assets/blog', publicPath: '../../assets/blog/' } },
          components: blogContentComponents,
        }),
      },
    }),
  },
});
