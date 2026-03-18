import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getDictionary } from "@/data/dictionary";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocalizedHref, isValidLocale, type Locale } from "@/lib/i18n";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: dictionary.about.metaTitle,
    description: dictionary.about.metaDescription,
    path: "/about",
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dictionary = getDictionary(currentLocale);

  return (
    <div className="container-shell py-16 sm:py-20">
      <section className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {dictionary.about.title}
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          {dictionary.about.description}
        </p>
        <div className="mt-10">
          <Button href={getLocalizedHref(currentLocale, "/contact")} size="lg">
            {dictionary.about.ctaLabel}
          </Button>
        </div>
      </section>
    </div>
  );
}
