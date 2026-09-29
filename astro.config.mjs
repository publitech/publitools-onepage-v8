// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';

// Local CMS endpoints must never be exposed in the static production build.
const localEditor = process.argv.includes('dev');

export default defineConfig({
  site: 'https://publitools.ai',
  integrations: [react(), mdx(), sitemap(), ...(localEditor ? [keystatic()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
});
