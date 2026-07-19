import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  AUTHOR,
  THEME_COLOR_DARK,
  THEME_COLOR_LIGHT,
  DEFAULT_OG_IMAGE,
  PERSON,
  seoPages,
} from './siteConfig';

function absoluteUrl(path) {
  if (!path || path === '/') return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function buildJsonLd({ pageKey, lang, title, description, canonical }) {
  const page = seoPages[pageKey] || seoPages.home;
  const locale = lang === 'fr' ? 'fr-TN' : 'en-US';

  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON.name,
    url: PERSON.url,
    image: PERSON.image,
    jobTitle: PERSON.jobTitle,
    email: PERSON.email,
    telephone: PERSON.telephone,
    sameAs: PERSON.sameAs,
    address: {
      '@type': 'PostalAddress',
      addressLocality: PERSON.address.addressLocality,
      addressRegion: PERSON.address.addressRegion,
      addressCountry: PERSON.address.addressCountry,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: PERSON.alumniOf,
    },
    knowsAbout: PERSON.knowsAbout,
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: seoPages.home[lang]?.description || seoPages.home.en.description,
    inLanguage: [locale, lang === 'fr' ? 'en-US' : 'fr-TN'],
    publisher: { '@id': `${SITE_URL}/#person` },
    author: { '@id': `${SITE_URL}/#person` },
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    inLanguage: locale,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: DEFAULT_OG_IMAGE,
    },
  };

  const graph = [person, website, webPage];

  if (pageKey !== 'home') {
    const homeLabel = lang === 'fr' ? 'Accueil' : 'Home';
    const pageLabel =
      (lang === 'fr' ? page.fr?.title : page.en?.title)?.split('|')[0]?.trim() || pageKey;

    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeLabel,
          item: absoluteUrl('/#home'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: pageLabel,
          item: canonical,
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export default function SEOHead({
  lang = 'en',
  darkMode = true,
  pageKey = 'home',
  preloadHeroHref,
}) {
  const page = seoPages[pageKey] || seoPages.home;
  const copy = page[lang] || page.en;
  const title = copy.title;
  const description = copy.description;
  const canonical = absoluteUrl(page.path);
  const locale = lang === 'fr' ? 'fr_TN' : 'en_US';
  const altLocale = lang === 'fr' ? 'en_US' : 'fr_TN';
  const themeColor = darkMode ? THEME_COLOR_DARK : THEME_COLOR_LIGHT;
  const jsonLd = buildJsonLd({
    pageKey,
    lang,
    title,
    description,
    canonical,
  });

  return (
    <Helmet prioritizeSeoTags>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={AUTHOR} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content={darkMode ? 'dark light' : 'light dark'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />

      {/* Hreflang for language variants (same SPA) */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="fr" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl('/#home')} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${PERSON.name} — ${PERSON.jobTitle}`} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={altLocale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:image:alt" content={`${PERSON.name} — ${PERSON.jobTitle}`} />

      {/* Icons / PWA */}
      <link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${import.meta.env.BASE_URL}favicon-32.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${import.meta.env.BASE_URL}apple-touch-icon.png`} />
      <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />

      {/* Fonts: preconnect already in index.html; dns-prefetch as backup */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {preloadHeroHref && (
        <link rel="preload" as="image" href={preloadHeroHref} type="image/webp" fetchPriority="high" />
      )}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
