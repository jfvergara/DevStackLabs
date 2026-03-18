export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";
export const localeCookieName = "preferred-language";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedHref(locale: Locale, href: string) {
  if (!href.startsWith("/")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/");

  if (segments[1] && isValidLocale(segments[1])) {
    return `/${segments.slice(2).join("/")}`.replace(/\/+/g, "/") || "/";
  }

  return pathname;
}
