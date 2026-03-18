"use client";

import { useEffect } from "react";

import { defaultLocale, isValidLocale, localeCookieName } from "@/lib/i18n";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function RootRedirect() {
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${localeCookieName}=`));
    const value = cookie?.split("=")[1];
    const locale = value && isValidLocale(value) ? value : defaultLocale;
    const path = basePath ? `${basePath}/${locale}` : `/${locale}`;
    window.location.replace(path);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-300">
      <p>Redirecting…</p>
    </div>
  );
}
