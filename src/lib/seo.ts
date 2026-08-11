import { LOCALES, localeConfig, dict, type Locale } from '../i18n';

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

/**
 * Build a `hreflang` entry for each locale, including the `x-default`
 * fallback. `x-default` pointe vers la version anglaise, qui sert de
 * page de base quand le pays du visiteur est inconnu.
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
    href: `${base}/en${suffix}`,
  });

  return entries;
}

/**
 * Données structurées des pages d'accueil : Organization, WebSite et
 * SoftwareApplication avec la fourchette de prix Starter/Pro.
 */
export function buildHomepageSchema(locale: Locale): Record<string, unknown>[] {
  const t = dict[locale];
  const cfg = localeConfig[locale];
  const url = `https://publitools.ai/${locale}/`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: t.common.siteName,
      url,
      logo: 'https://publitools.ai/brand/publitools-logo-official.svg',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: t.common.siteName,
      url,
      inLanguage: cfg.htmlLang,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: t.common.siteName,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: t.meta.homeDescription,
      url,
      inLanguage: cfg.htmlLang,
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '19.90',
        highPrice: '39.90',
        priceCurrency: 'EUR',
        offerCount: 2,
      },
    },
  ];
}