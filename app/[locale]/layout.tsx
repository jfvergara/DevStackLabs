import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { getDictionary } from "@/data/dictionary";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <div lang={locale} className="flex min-h-screen flex-col">
      <Header locale={locale} dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dictionary={dictionary} />
    </div>
  );
}
