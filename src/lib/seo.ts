import { LOCALES, localeConfig, dict, type Locale } from '../i18n';

export const SITE_URL = 'https://publitools.ai';

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

/**
 * Entrées `hreflang` pour un chemin qui existe dans les 4 langues.
 * `x-default` pointe vers la version anglaise : c'est la page de base
 * quand le pays du visiteur est inconnu.
 */
export function buildHreflang(pathname: string, _currentLocale?: Locale): HreflangEntry[] {
  const stripped = pathname.replace(/^\/(fr|en|es|de)/, '').replace(/^\/+/, '/');
  const suffix = !stripped || stripped === '/' ? '/' : stripped;

  const entries: HreflangEntry[] = LOCALES.map((code) => ({
    hreflang: code,
    href: `${SITE_URL}/${code}${suffix}`,
  }));

  entries.push({ hreflang: 'x-default', href: `${SITE_URL}/en${suffix}` });
  return entries;
}

/** Alternates des 4 pages d'accueil (les seules pages traduites en 4 langues). */
export function buildHomepageAlternates(): HreflangEntry[] {
  return buildHreflang('/');
}

/**
 * Données structurées des pages d'accueil : Organization, WebSite et
 * SoftwareApplication avec la fourchette de prix Starter/Pro.
 */
export function buildHomepageSchema(locale: Locale): Record<string, unknown>[] {
  const t = dict[locale];
  const cfg = localeConfig[locale];
  const url = `${SITE_URL}/${locale}/`;
  const priceCurrency = locale === 'en' ? 'USD' : 'EUR';

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: t.common.siteName,
      url: SITE_URL,
      logo: `${SITE_URL}/brand/publitools-logo-official.svg`,
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
        priceCurrency,
        offerCount: 2,
      },
    },
  ];
}