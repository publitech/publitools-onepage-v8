import { LOCALES, type Locale } from '../i18n';

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

/**
 * Build a `hreflang` entry for each locale, including the optional
 * `x-default` fallback. Used in the Layout head to declare alternate
 * versions of a page to search engines.
 */
export function buildHreflang(pathname: string, _currentLocale: Locale): HreflangEntry[] {
  const base = 'https://publitools.ai';
  const stripped = pathname
    .replace(/^\/(fr|en|es|de)/, '')
    .replace(/^\/+/, '/');
  const suffix = !stripped || stripped === '/' ? '/' : stripped;

  const entries: HreflangEntry[] = LOCALES.map((code) => ({
    hreflang: code,
    href: `${base}/${code}${suffix}`,
  }));

  entries.push({
    hreflang: 'x-default',
    href: `${base}/fr${suffix}`,
  });

  return entries;
}