import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionary";
import { getLocalizedHref, isValidLocale, type Locale } from "@/lib/i18n";

const lastUpdated = "2025-03-12";

type PrivacidadPageProps = {
  params: Promise<{ locale: string }>;
};

const content = {
  en: {
    title: "Privacy Policy – ObraClaro",
    updated: "Last updated:",
    paragraphs: [
      "ObraClaro does not collect or send personal data to external servers. All information you enter (clients, documents, your business details) is stored only on your device.",
      "We do not use third-party analytics or advertising. We do not share data with third parties.",
      "If you have questions, contact us at:",
    ],
    backToProduct: "Back to ObraClaro",
  },
  es: {
    title: "Política de privacidad – ObraClaro",
    updated: "Última actualización:",
    paragraphs: [
      "ObraClaro no recopila ni envía datos personales a servidores externos. Toda la información que introduces (clientes, documentos, datos de tu negocio) se guarda únicamente en tu dispositivo.",
      "No utilizamos analytics de terceros ni publicidad. No compartimos datos con terceros.",
      "Si tienes dudas, escríbenos a:",
    ],
    backToProduct: "Volver a ObraClaro",
  },
} as const;

export async function generateMetadata({
  params,
}: PrivacidadPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const t = content[locale as Locale];
  return {
    title: t.title,
    description:
      locale === "es"
        ? "ObraClaro no recopila ni envía datos personales. Toda la información se guarda en tu dispositivo."
        : "ObraClaro does not collect or send personal data. All information is stored on your device.",
    openGraph: {
      title: t.title,
      url: `https://www.devstacklabs.com/${locale}/products/obraclaro/privacidad`,
    },
  };
}

export default async function ObraClaroPrivacidadPage({
  params,
}: PrivacidadPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const currentLocale = locale as Locale;
  const t = content[currentLocale];
  const dictionary = getDictionary(currentLocale);
  const supportEmail = dictionary.site.contactEmail;

  return (
    <div className="container-shell py-16 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <h1 className="display-title text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 text-sm text-slate-400">
          {t.updated} {lastUpdated}
        </p>
        <div className="mt-10 space-y-6 text-base leading-8 text-slate-300">
          {t.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p>
            <a
              href={`mailto:${supportEmail}`}
              className="font-medium text-cyan-300 hover:text-cyan-200"
            >
              {supportEmail}
            </a>
          </p>
        </div>
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
