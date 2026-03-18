import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceCard } from "@/components/site/cards";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/data/dictionary";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocalizedHref, isValidLocale, type Locale } from "@/lib/i18n";

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: dictionary.servicesPage.metaTitle,
    description: dictionary.servicesPage.metaDescription,
    path: "/services",
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dictionary = getDictionary(currentLocale);

  return (
    <div className="container-shell py-16 sm:py-20">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {dictionary.servicesPage.title}
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          {dictionary.servicesPage.description}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">
          {dictionary.servicesPage.catalogTitle}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dictionary.shared.services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-10">
          <Button href={getLocalizedHref(currentLocale, "/contact")} size="lg">
            {dictionary.servicesPage.ctaLabel}
          </Button>
        </div>
      </section>
    </div>
  );
}
