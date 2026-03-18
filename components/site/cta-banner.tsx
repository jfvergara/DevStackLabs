import { Button } from "@/components/ui/button";

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section className="rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))] px-6 py-10 shadow-2xl shadow-cyan-950/20 sm:px-10 sm:py-14">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
