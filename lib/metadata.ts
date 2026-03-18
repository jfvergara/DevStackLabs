import type { Metadata } from "next";

import { getDictionary } from "@/data/dictionary";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const siteUrl = "https://www.devstacklabs.com";
const ogImage = "/og-image.svg";

export function buildPageMetadata({
  locale,
  title,
  description,
  path = "",
}: {
  locale: Locale;
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const dictionary = getDictionary(locale);
  const fullTitle = title ? `${title} | DevStack Labs` : dictionary.site.title;
  const fullDescription = description ?? dictionary.site.description;
  const localizedPath =
    locale === defaultLocale ? `/${locale}${path}` : `/${locale}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: localizedPath,
      languages: Object.fromEntries(
        locales.map((currentLocale) => [
          currentLocale,
          `${siteUrl}/${currentLocale}${path}`,
        ]),
      ),
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}${localizedPath}`,
      title: fullTitle,
      description: fullDescription,
      siteName: "DevStack Labs",
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "DevStack Labs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
  };
}
