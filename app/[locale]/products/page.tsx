import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/site/cards";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/data/dictionary";
import { getProducts } from "@/data/products";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocalizedHref, isValidLocale, type Locale } from "@/lib/i18n";

type ProductsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: dictionary.productsPage.metaTitle,
    description: dictionary.productsPage.metaDescription,
    path: "/products",
  });
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dictionary = getDictionary(currentLocale);
  const products = getProducts(currentLocale);

  return (
    <div className="container-shell py-16 sm:py-20">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {dictionary.productsPage.title}
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          {dictionary.productsPage.description}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">
          {dictionary.productsPage.catalogTitle}
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
        <div className="mt-10">
          <Button href={getLocalizedHref(currentLocale, "/contact")} size="lg">
            {dictionary.productsPage.ctaLabel}
          </Button>
        </div>
      </section>
    </div>
  );
}
