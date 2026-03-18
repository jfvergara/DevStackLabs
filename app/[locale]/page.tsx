import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/site/cards";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/data/dictionary";
import { getProducts } from "@/data/products";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocalizedHref, isValidLocale, type Locale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildPageMetadata({
    locale,
    description: dictionary.site.description,
    path: "",
  });
}

export default async function LocalizedHomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dictionary = getDictionary(currentLocale);
  const products = getProducts(currentLocale);

  return (
    <div className="container-shell py-16 sm:py-20">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {dictionary.home.heroTitle}
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          {dictionary.home.heroDescription}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={getLocalizedHref(currentLocale, "/contact")} size="lg">
            {dictionary.home.heroPrimaryCta}
          </Button>
          <Button
            href={getLocalizedHref(currentLocale, "/products")}
            variant="secondary"
            size="lg"
          >
            {dictionary.home.heroSecondaryCta}
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          {dictionary.home.productsTitle}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              labels={{
                viewProduct: dictionary.ui.viewProduct,
                visitWebsite: dictionary.ui.visitWebsite,
                statusLabel: dictionary.ui.status[product.status],
              }}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-white/10 bg-slate-900/60 p-8">
        <h2 className="text-xl font-semibold text-white">
          {dictionary.home.ctaTitle}
        </h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href={getLocalizedHref(currentLocale, "/contact")} size="lg">
            {dictionary.home.ctaPrimaryLabel}
          </Button>
          <Button
            href={getLocalizedHref(currentLocale, "/about")}
            variant="secondary"
            size="lg"
          >
            {dictionary.home.ctaSecondaryLabel}
          </Button>
        </div>
      </section>
    </div>
  );
}
