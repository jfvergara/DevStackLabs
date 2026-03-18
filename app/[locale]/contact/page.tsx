import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/site/contact-form";
import { getDictionary } from "@/data/dictionary";
import { buildPageMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: dictionary.contact.metaTitle,
    description: dictionary.contact.metaDescription,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <div className="container-shell py-16 sm:py-20">
      <section className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {dictionary.contact.title}
        </h1>
        <p className="mt-3 text-slate-300">
          {dictionary.contact.description}
        </p>
        <a
          href={`mailto:${dictionary.site.contactEmail}`}
          className="mt-4 inline-block text-cyan-300 hover:text-cyan-200"
        >
          {dictionary.site.contactEmail}
        </a>

        <div className="mt-10">
          <ContactForm
            copy={dictionary.contact.form}
            recipientEmail={dictionary.site.contactEmail}
          />
        </div>
      </section>
    </div>
  );
}
