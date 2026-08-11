/**
 * Configuration i18n centrale du site PubliTools.
 * Ajoute une nouvelle locale ici + son contenu dans content.ts.
 */
export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

export interface LocaleConfig {
  code: Locale;
  label: string;
  short: string;
  flag: string;
  htmlLang: string;
  siteName: string;
  ogLocale: string;
  alternatePath: string;
  currency: { symbol: string; code: string; per: string };
}

export const localeConfig: Record<Locale, LocaleConfig> = {
  fr: {
    code: 'fr',
    label: 'Français',
    short: 'FR',
    flag: '🇫🇷',
    htmlLang: 'fr-FR',
    siteName: 'PubliTools',
    ogLocale: 'fr_FR',
    alternatePath: '/en/',
    currency: { symbol: '€', code: 'EUR', per: 'HT/mois' },
  },
  en: {
    code: 'en',
    label: 'English',
    short: 'EN',
    flag: '🇬🇧',
    htmlLang: 'en-US',
    siteName: 'PubliTools',
    ogLocale: 'en_US',
    alternatePath: '/fr/',
    currency: { symbol: '$', code: 'USD', per: '/month' },
  },
};

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  return DEFAULT_LOCALE;
}

export function getAlternatePath(pathname: string, currentLocale: Locale): string {
  const other = currentLocale === 'fr' ? 'en' : 'fr';
  // Strip current locale prefix and add the other one
  let stripped = pathname;
  if (currentLocale === 'en' && pathname.startsWith('/en')) {
    stripped = pathname.replace(/^\/en/, '') || '/';
  } else if (currentLocale === 'fr' && pathname.startsWith('/fr')) {
    stripped = pathname.replace(/^\/fr/, '') || '/';
  }
  // Normalize
  if (!stripped.startsWith('/')) stripped = '/' + stripped;
  if (other === 'fr') {
    if (stripped === '/') return '/fr/';
    return `/fr${stripped === '/' ? '/' : stripped}`;
  }
  if (stripped === '/') return '/en/';
  return `/en${stripped === '/' ? '/' : stripped}`;
}