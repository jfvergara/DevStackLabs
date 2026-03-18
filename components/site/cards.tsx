import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Sparkles,
} from "lucide-react";

import type { Product } from "@/data/products";
import { assetPath } from "@/lib/utils";

import { Badge } from "../ui/badge";

type BasicCardProps = {
  title: string;
  description: string;
};

export function DifferentiatorCard({ title, description }: BasicCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/7">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        <Sparkles className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}

export function ServiceCard({
  title,
  description,
  value,
}: BasicCardProps & { value: string }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-cyan-300">
        <Layers3 className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-7 text-slate-400">
        {value}
      </p>
    </article>
  );
}

export function ProcessCard({ title, description }: BasicCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-transparent p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}

export function TestimonialCard({
  quote,
  name,
  company,
}: {
  quote: string;
  name: string;
  company: string;
}) {
  return (
    <figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <blockquote className="text-base leading-8 text-slate-100">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-sm text-slate-400">
        <span className="font-semibold text-white">{name}</span>
        <span className="mx-2 text-slate-600">/</span>
        <span>{company}</span>
      </figcaption>
    </figure>
  );
}

export function ProductCard({
  product,
  labels,
}: {
  product: Product;
  labels: {
    viewProduct: string;
    visitWebsite: string;
    statusLabel: string;
  };
}) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
      {product.iconPath ? (
        <div className="mb-5 flex justify-center">
          <Image
            src={assetPath(product.iconPath)}
            alt=""
            width={80}
            height={80}
            className="h-20 w-20 rounded-2xl object-contain"
          />
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-3">
        <Badge status={product.status}>{labels.statusLabel}</Badge>
        <Badge>{product.category}</Badge>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {product.name}
      </h3>
      <p className="mt-2 text-base text-cyan-200">{product.tagline}</p>
      <p className="mt-4 text-sm leading-7 text-slate-300">
        {product.shortDescription}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.techStack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
        <Link
          href={product.productHref}
          className="inline-flex items-center gap-2 text-white transition hover:text-cyan-300"
        >
          {labels.viewProduct}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={product.demoHref}
          className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          {labels.visitWebsite}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
          <span className="text-sm leading-7 text-slate-300">{item}</span>
        </li>
      ))}
    </ul>
  );
}
