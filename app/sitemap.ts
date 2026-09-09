import type { MetadataRoute } from "next";

import { getAllProductSlugs } from "@/data/products";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/products", "/resources", "/contact"];
  const baseUrl = "https://www.devstacklabs.com";

  const staticEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
  );

  const productEntries = locales.flatMap((locale) =>
    getAllProductSlugs().map((slug) => ({
      url: `${baseUrl}/${locale}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  const appLegalSlugs = ["obraclaro", "tallerpro", "floreriapro"] as const;
  const legalSubpages = ["privacidad", "soporte"] as const;
  const legalEntries = locales.flatMap((locale) =>
    appLegalSlugs.flatMap((slug) =>
      legalSubpages.map((sub) => ({
        url: `${baseUrl}/${locale}/products/${slug}/${sub}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
    ),
  );

  return [...staticEntries, ...productEntries, ...legalEntries];
}
