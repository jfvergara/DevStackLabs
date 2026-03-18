"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  languages: Record<Locale, string>;
};

export function LanguageSwitcher({
  locale,
  label,
  languages,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  function buildHref(targetLocale: Locale) {
    const segments = pathname.split("/");

    if (segments[1]) {
      segments[1] = targetLocale;
    }

    const href = segments.join("/");

    return href || `/${targetLocale}`;
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
      <span className="sr-only">{label}</span>
      {locales.map((targetLocale) => {
        const active = locale === targetLocale;

        return (
          <Link
            key={targetLocale}
            href={buildHref(targetLocale)}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              active
                ? "bg-cyan-400 text-slate-950"
                : "text-slate-300 hover:bg-white/8 hover:text-white"
            }`}
          >
            {languages[targetLocale]}
          </Link>
        );
      })}
    </div>
  );
}
