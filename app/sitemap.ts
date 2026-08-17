import type { MetadataRoute } from "next";
import { advantagePages } from "@/lib/content/advantages";
import { projects } from "@/lib/content/projects";
import { cities, cityPath } from "@/lib/content/cities";
import { bundeslaender, landInstallPath } from "@/lib/content/regions";
import { siteUrl } from "@/lib/site";

const staticPaths = [
  "/",
  "/leistungen/",
  "/bewaesserungsanlage-installieren-lassen/",
  "/bewaesserung-bestehender-garten/",
  "/rasenbewaesserung-installieren/",
  "/tropfbewaesserung-hecken-beete/",
  "/bewaesserungskomponenten/",
  "/bewaesserungssteuerung/",
  "/bewaesserungsanlage-kosten/",
  "/garten-berechnen/",
  "/projekte/",
  "/service/",
  "/ueber-regnerwerk/",
  "/einsatzgebiet/",
  "/kontakt/",
  "/projekt-anfragen/",
  "/impressum/",
  "/datenschutz/",
  "/cookies/",
  "/nutzungsbedingungen/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...advantagePages.map((p) => ({
      url: `${base}${p.seo.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...projects.map((p) => ({
      url: `${base}/projekte/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...bundeslaender.map((land) => ({
      url: `${base}${landInstallPath(land.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...cities.map((city) => ({
      url: `${base}${cityPath(city.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return entries;
}
