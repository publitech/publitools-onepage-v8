import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const homepage = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/homepage' }),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
      canonical: z.string().url(),
    }),
    signupUrl: z.string().url(),
    hero: z.object({
      eyebrow: z.string(),
      h1: z.string(),
      subheadline: z.string(),
      bullets: z.array(z.string()).min(1),
      primaryCta: ctaSchema,
      secondaryCta: ctaSchema,
      socialProof: z.string(),
    }),
    pricing: z.object({
      id: z.string(),
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      plans: z.array(z.object({
        name: z.string(),
        subtitle: z.string(),
        price: z.string(),
        href: z.string(),
        icon: z.string(),
        featured: z.boolean().optional(),
        featuredLabel: z.string().optional(),
        features: z.array(z.string()).min(1),
        ctaLabel: z.string(),
      })).min(1),
      note: z.string(),
    }),
    faq: z.object({
      id: z.string(),
      title: z.string(),
      items: z.array(z.object({
        question: z.string(),
        answer: z.string(),
      })).min(1),
      cta: ctaSchema,
      reassurance: z.string(),
    }),
  }).passthrough(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    locale: z.enum(['fr', 'en', 'es', 'de']),
    draft: z.boolean().default(true),
    description: z.string().min(1).max(180),
    seoTitle: z.string().optional(),
    category: z.enum(['social', 'local', 'photos', 'ai']),
    author: z.string().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.preprocess(value => value || undefined, z.coerce.date().optional()),
    translationKey: z.string().optional(),
    cover: image(),
    coverAlt: z.string().min(1),
    takeaways: z.array(z.string()).default([]),
    layout: z.enum(['standard', 'listicle']).default('standard'),
    readingTime: z.number().int().positive().nullish(),
  }),
});

export const collections = { homepage, blog };
