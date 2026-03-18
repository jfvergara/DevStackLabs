import Image from "next/image";

import { assetPath, cn } from "@/lib/utils";

type Screenshot = {
  title: string;
  caption: string;
  imagePath?: string;
};

type ProductScreenshotCardProps = {
  shot: Screenshot;
  placeholderLabel?: string;
  featured?: boolean;
  className?: string;
};

export function ProductScreenshotCard({
  shot,
  placeholderLabel = "Screenshot",
  featured = false,
  className,
}: ProductScreenshotCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 transition-[border-color,box-shadow] hover:border-cyan-400/20 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.2)]",
        featured && "lg:flex-row lg:items-stretch",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]",
          featured ? "p-6 lg:w-[min(42%,320px)] lg:py-10" : "p-4",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center overflow-hidden rounded-[1.25rem] bg-slate-900/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.4)]",
            featured ? "aspect-[9/19.5] w-[min(100%,240px)]" : "aspect-[9/19.5] w-[min(100%,200px)]",
          )}
        >
          {shot.imagePath ? (
            <Image
              src={assetPath(shot.imagePath)}
              alt={shot.title}
              width={featured ? 280 : 200}
              height={featured ? 606 : 433}
              className="h-full w-auto object-contain"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                {placeholderLabel}
              </p>
              <p className="text-sm font-semibold text-white">{shot.title}</p>
            </div>
          )}
        </div>
      </div>
      <div
        className={cn(
          "flex flex-col justify-center border-t border-white/5 lg:border-t-0 lg:border-l lg:border-white/5",
          featured ? "p-6 lg:flex-1 lg:pl-8 lg:pr-8" : "p-5",
        )}
      >
        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
          {shot.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
          {shot.caption}
        </p>
      </div>
    </article>
  );
}
