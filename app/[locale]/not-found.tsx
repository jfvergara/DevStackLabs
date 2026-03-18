import { Button } from "@/components/ui/button";
import { getDictionary } from "@/data/dictionary";
import { defaultLocale } from "@/lib/i18n";

export default function LocalizedNotFound() {
  const locale = defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <div className="container-shell flex min-h-[70vh] items-center py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {dictionary.notFound.eyebrow}
        </p>
        <h1 className="display-title mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {dictionary.notFound.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          {dictionary.notFound.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={`/${locale}`}>{dictionary.notFound.homeLabel}</Button>
          <Button href={`/${locale}/products`} variant="secondary">
            {dictionary.notFound.productsLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
