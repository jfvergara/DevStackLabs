"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import type { Dictionary } from "@/data/dictionary";
import { getLocalizedHref, type Locale } from "@/lib/i18n";

import { LanguageSwitcher } from "./language-switcher";

type MobileNavProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function MobileNav({ locale, dictionary }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={
          open
            ? dictionary.site.closeNavigationLabel
            : dictionary.site.openNavigationLabel
        }
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-4 top-20 z-50 rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl backdrop-blur"
        >
          <div className="mb-5">
            <LanguageSwitcher
              locale={locale}
              label={dictionary.site.languageLabel}
              languages={dictionary.site.languages}
            />
          </div>
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {dictionary.site.nav.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(locale, item.href)}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-100 transition hover:bg-white/8"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={getLocalizedHref(locale, "/contact")}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-cyan-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {dictionary.site.consultationCta}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
