import { Button } from "@/components/ui/button";
import { defaultLocale } from "@/lib/i18n";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[70vh] items-center py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          404
        </p>
        <h1 className="display-title mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          The page you are looking for does not exist.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          The link may be outdated or the page may have moved as the DevStack Labs
          site grows. Use the navigation below to continue exploring.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={`/${defaultLocale}`}>Back to home</Button>
          <Button href={`/${defaultLocale}/products`} variant="secondary">
            View products
          </Button>
        </div>
      </div>
    </div>
  );
}
