import Link from "next/link";

import type { Dictionary } from "@/data/dictionary";
import { getLocalizedHref, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Footer({ locale, dictionary }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-2">
          <Link
            href={getLocalizedHref(locale, "/")}
            className="inline-flex items-center gap-2 text-white hover:text-cyan-300"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/20 text-sm font-bold text-cyan-300">
              DS
            </span>
            <span className="font-semibold">DevStack Labs</span>
          </Link>
          {dictionary.site.nav.map((item) => (
            <Link
              key={item.href}
              href={getLocalizedHref(locale, item.href)}
              className="text-sm text-slate-400 hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${dictionary.site.contactEmail}`}
            className="text-sm text-slate-400 hover:text-cyan-300"
          >
            {dictionary.site.contactEmail}
          </a>
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} DevStack Labs. {dictionary.site.footerRights}
        </p>
      </div>
    </footer>
  );
}
