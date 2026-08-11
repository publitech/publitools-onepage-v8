/**
 * Configuration i18n centrale du site PubliTools.
 * Ajoute une nouvelle locale ici + son contenu dans content.ts.
 */
export const LOCALES = ['fr', 'en', 'es', 'de'] as const;
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
    currency: { symbol: '$', code: 'USD', per: '/month' },
  },
  es: {
    code: 'es',
    label: 'Español',
    short: 'ES',
    flag: '🇪🇸',
    htmlLang: 'es-ES',
    siteName: 'PubliTools',
    ogLocale: 'es_ES',
    currency: { symbol: '€', code: 'EUR', per: '/mes sin IVA' },
  },
  de: {
    code: 'de',
    label: 'Deutsch',
    short: 'DE',
    flag: '🇩🇪',
    htmlLang: 'de-DE',
    siteName: 'PubliTools',
    ogLocale: 'de_DE',
    currency: { symbol: '€', code: 'EUR', per: '/Monat zzgl. MwSt.' },
  },
};

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en') || pathname === '/en') return 'en';
  if (pathname.startsWith('/es') || pathname === '/es') return 'es';
  if (pathname.startsWith('/de') || pathname === '/de') return 'de';
  return DEFAULT_LOCALE;
}

export function getAlternatePath(pathname: string, currentLocale: Locale): string {
  const stripped = pathname
    .replace(/^\/(fr|en|es|de)/, '')
    .replace(/^\/+/, '/');
  const suffix = !stripped || stripped === '/' ? '/' : stripped;
  return `/${currentLocale === 'fr' ? 'fr' : currentLocale}${suffix === '/' ? '/' : suffix}`;
}