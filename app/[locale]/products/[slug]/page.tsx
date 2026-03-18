import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { FeatureList } from "@/components/site/cards";
import { ProductScreenshotCard } from "@/components/product/screenshot-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/data/dictionary";
import { getAllProductSlugs, getProductBySlug } from "@/data/products";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocalizedHref, isValidLocale, locales, type Locale } from "@/lib/i18n";

type ProductPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllProductSlugs().map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);
  const product = getProductBySlug(locale, slug);

  if (!product) {
    return buildPageMetadata({
      locale,
      title: dictionary.productDetail.notFoundTitle,
      path: `/products/${slug}`,
    });
  }

  const title =
    product.slug === "obraclaro"
      ? (locale === "es"
          ? "ObraClaro – Cotizaciones y facturas para tu negocio | DevStack Labs"
          : "ObraClaro – Quotes and invoices for your business | DevStack Labs")
      : product.name;
  const description = product.shortDescription;

  return buildPageMetadata({
    locale,
    title,
    description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dictionary = getDictionary(currentLocale);
  const product = getProductBySlug(currentLocale, slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container-shell py-16 sm:py-20">
      <section className="max-w-3xl">
        {product.iconPath ? (
          <div className="mb-6">
            <Image
              src={product.iconPath}
              alt=""
              width={80}
              height={80}
              className="h-20 w-20 rounded-2xl object-contain"
            />
          </div>
        ) : null}
        <div className="flex flex-wrap items-center gap-2">
          <Badge status={product.status}>
            {dictionary.ui.status[product.status]}
          </Badge>
          <Badge>{product.category}</Badge>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {product.name}
        </h1>
        <p className="mt-3 text-lg text-cyan-200">{product.tagline}</p>
        <p className="mt-4 text-slate-300">{product.overview}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={product.demoHref} size="lg">
            {product.primaryCtaLabel}
          </Button>
          <Button
            href={
              product.secondaryCtaHref ??
              getLocalizedHref(currentLocale, "/contact")
            }
            variant="secondary"
            size="lg"
          >
            {product.secondaryCtaLabel}
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-white">
          {dictionary.productDetail.featuresTitle}
        </h2>
        <div className="mt-6">
          <FeatureList items={product.keyFeatures} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-white">
          {dictionary.productDetail.screenshotsTitle}
        </h2>
        {product.slug === "obraclaro" && product.screenshots.length >= 6 ? (
          <div className="mt-8 space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <ProductScreenshotCard
                shot={product.screenshots[3]}
                placeholderLabel={dictionary.productDetail.screenshotPlaceholder}
                featured
              />
              <ProductScreenshotCard
                shot={product.screenshots[4]}
                placeholderLabel={dictionary.productDetail.screenshotPlaceholder}
                featured
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[0, 1, 2, 5].map((i) => (
                <ProductScreenshotCard
                  key={product.screenshots[i].title}
                  shot={product.screenshots[i]}
                  placeholderLabel={dictionary.productDetail.screenshotPlaceholder}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.screenshots.map((shot) => (
              <ProductScreenshotCard
                key={shot.title}
                shot={shot}
                placeholderLabel={dictionary.productDetail.screenshotPlaceholder}
              />
            ))}
          </div>
        )}
      </section>

      <section className="mt-16 flex flex-wrap gap-4">
        <Button href={product.demoHref} size="lg">
          {product.primaryCtaLabel}
        </Button>
        <Button
          href={
            product.secondaryCtaHref ??
            getLocalizedHref(currentLocale, "/contact")
          }
          variant="secondary"
          size="lg"
        >
          {product.secondaryCtaLabel}
        </Button>
      </section>
    </div>
  );
}
