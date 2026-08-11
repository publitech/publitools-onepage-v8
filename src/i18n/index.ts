export { LOCALES, DEFAULT_LOCALE, localeConfig, getLocaleFromPath, getAlternatePath } from './config';
export type { Locale, LocaleConfig } from './config';
export { dict } from './content';
export type { Dict, LocaleDict } from './content';

import type { Locale } from './config';
import { dict } from './content';

/**
 * Resolve the dictionary for a locale.
 */
export function t(locale: Locale) {
  return dict[locale];
}

/**
 * Get the localized path prefix for a given locale.
 * Returns an empty string for the default locale so /fr stays canonical
 * when needed, and a '/<locale>' segment otherwise.
 */
export function localePath(locale: Locale): string {
  return locale === 'fr' ? '/fr' : '/en';
}

/**
 * Build an absolute canonical URL for a given locale + path.
 */
export function canonicalUrl(locale: Locale, path: string): string {
  const base = 'https://publitools.ai';
  const prefix = locale === 'fr' ? '/fr' : '/en';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${prefix}${normalized === '/' ? '/' : normalized}`;
}