import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devstacklabs.com"),
  title: "DevStack Labs",
  description:
    "DevStack Labs designs and builds custom software, SaaS products, internal tools, and automation systems.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-slate-950 font-sans text-slate-50 antialiased`}
      >
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_28%),radial-gradient(circle_at_20%_20%,_rgba(34,211,238,0.12),_transparent_22%),linear-gradient(180deg,#020617_0%,#020617_100%)]" />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
