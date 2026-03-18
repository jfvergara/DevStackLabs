import Link from "next/link";

import type { Dictionary } from "@/data/dictionary";
import { getLocalizedHref, type Locale } from "@/lib/i18n";

import { Button } from "../ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href={`/${locale}`} className="inline-flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-sm font-bold text-slate-950">
            DS
          </span>
          <span className="text-base font-semibold tracking-tight text-white">
            DevStack Labs
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {dictionary.site.nav.map((item) => (
            <Link
              key={item.href}
              href={getLocalizedHref(locale, item.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher
            locale={locale}
            label={dictionary.site.languageLabel}
            languages={dictionary.site.languages}
          />
          <Button href={getLocalizedHref(locale, "/contact")} size="sm">
            {dictionary.site.consultationCta}
          </Button>
        </div>

        <MobileNav locale={locale} dictionary={dictionary} />
      </div>
    </header>
  );
}
