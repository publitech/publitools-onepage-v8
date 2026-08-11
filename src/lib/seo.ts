import { dict, localeConfig, type Locale } from '../i18n';

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

const LOCALES: Locale[] = ['fr', 'en'];

/**
 * Build a `hreflang` entry for each locale, including the optional
 * `x-default` fallback. Used in the Layout head to declare alternate
 * versions of a page to search engines.
 */
export function buildHreflang(pathname: string, currentLocale: Locale): HreflangEntry[] {
  const base = 'https://publitools.ai';
  const entries: HreflangEntry[] = LOCALES.map((code) => {
    const prefix = code === 'fr' ? '/fr' : '/en';
    const stripped = pathname
      .replace(/^\/fr/, '')
      .replace(/^\/en/, '')
      .replace(/^\/+/, '/');
    const suffix = !stripped || stripped === '/' ? '/' : stripped;
    return {
      hreflang: code,
      href: `${base}${prefix}${suffix === '/' ? '/' : suffix}`,
    };
  });
  // x-default falls back to the default locale (fr).
  const defaultPath = pathname.startsWith('/en') ? pathname.replace(/^\/en/, '') || '/' : pathname;
  entries.push({
    hreflang: 'x-default',
    href: `https://publitools.ai/fr${defaultPath === '/' ? '/' : defaultPath.startsWith('/') ? defaultPath : `/${defaultPath}`}`,
  });
  return entries;
}