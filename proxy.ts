import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  defaultLocale,
  isValidLocale,
  localeCookieName,
  locales,
} from "@/lib/i18n";

function getPreferredLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;

  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage) {
    const requestedLocales = acceptLanguage
      .split(",")
      .map((value) => value.trim().split(";")[0]?.toLowerCase().slice(0, 2))
      .filter(Boolean);

    for (const locale of requestedLocales) {
      if (locale && isValidLocale(locale)) {
        return locale;
      }
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    const response = NextResponse.next();

    if (locale && isValidLocale(locale)) {
      response.cookies.set(localeCookieName, locale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }

    return response;
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.svg|og-image.svg|.*\\..*).*)"],
};
