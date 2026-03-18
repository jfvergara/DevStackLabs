"use client";

import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const buttonVariants = {
  primary:
    "bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus-visible:outline-cyan-300",
  secondary:
    "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 focus-visible:outline-white/40",
  ghost:
    "bg-transparent text-slate-200 hover:bg-white/10 focus-visible:outline-white/30",
};

const buttonSizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type BaseProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
  children: ReactNode;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = BaseProps & {
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps | LinkButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
