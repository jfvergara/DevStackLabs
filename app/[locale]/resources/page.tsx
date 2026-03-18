import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getDictionary } from "@/data/dictionary";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocalizedHref, isValidLocale, type Locale } from "@/lib/i18n";

type ResourcesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ResourcesPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: dictionary.resources.metaTitle,
    description: dictionary.resources.metaDescription,
    path: "/resources",
  });
}

export default async function ResourcesPage({ params }: ResourcesPageProps) {
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
          {dictionary.resources.title}
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          {dictionary.resources.description}
        </p>
        <div className="mt-10">
          <Button href={getLocalizedHref(currentLocale, "/contact")} size="lg">
            {dictionary.resources.ctaLabel}
          </Button>
        </div>
      </section>
    </div>
  );
}
