import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const statusStyles = {
  live: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/20",
  beta: "bg-amber-500/15 text-amber-200 ring-amber-400/20",
  comingSoon: "bg-fuchsia-500/15 text-fuchsia-200 ring-fuchsia-400/20",
} as const;

type BadgeProps = {
  children: ReactNode;
  className?: string;
  status?: keyof typeof statusStyles;
};

export function Badge({ children, className, status }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ring-1",
        status
          ? statusStyles[status]
          : "bg-white/8 text-slate-200 ring-white/10",
        className,
      )}
    >
      {children}
    </span>
  );
}
