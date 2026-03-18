import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionary";
import { getLocalizedHref, isValidLocale, type Locale } from "@/lib/i18n";

type SoportePageProps = {
  params: Promise<{ locale: string }>;
};

const content = {
  en: {
    title: "Support – ObraClaro",
    description:
      "For questions or issues with ObraClaro, email us and we'll get back to you as soon as possible.",
    contactLabel: "Email support",
    backToProduct: "Back to ObraClaro",
  },
  es: {
    title: "Soporte – ObraClaro",
    description:
      "Para dudas o problemas con ObraClaro, escríbenos y te responderemos lo antes posible.",
    contactLabel: "Escribir a soporte",
    backToProduct: "Volver a ObraClaro",
  },
} as const;

export async function generateMetadata({
  params,
}: SoportePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const t = content[locale as Locale];
  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      url: `https://www.devstacklabs.com/${locale}/products/obraclaro/soporte`,
    },
  };
}

export default async function ObraClaroSoportePage({
  params,
}: SoportePageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const currentLocale = locale as Locale;
  const t = content[currentLocale];
  const supportEmail = getDictionary(currentLocale).site.contactEmail;

  return (
    <div className="container-shell py-16 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <h1 className="display-title text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          {t.description}
        </p>
        <p className="mt-8">
          <a
            href={`mailto:${supportEmail}`}
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {t.contactLabel}
          </a>
        </p>
        <p className="mt-12">
          <Link
            href={getLocalizedHref(currentLocale, "/products/obraclaro")}
            className="inline-flex items-center text-sm font-medium text-cyan-300 hover:text-cyan-200"
          >
            {t.backToProduct}
          </Link>
        </p>
      </article>
    </div>
  );
}
