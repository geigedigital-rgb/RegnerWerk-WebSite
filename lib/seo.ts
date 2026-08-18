import type { Metadata } from "next";
import { featuredCities } from "@/lib/content/cities";
import { site, siteUrl } from "@/lib/site";

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  ogImage?: string;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const base = siteUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function buildMetadata({
  title,
  description,
  path,
  noIndex,
  ogImage,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage || "/og.png";

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      locale: "de_DE",
      type: "website",
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: siteUrl,
    logo: `${siteUrl}/brand/logo-horizontal.png`,
    email: site.email,
    telephone: site.phone,
    identifier: "16035252",
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: site.name,
    url: siteUrl,
    inLanguage: "de-DE",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: site.name,
    description: site.tagline,
    url: siteUrl,
    image: `${siteUrl}/og.png`,
    logo: `${siteUrl}/brand/logo-horizontal.png`,
    email: site.email,
    telephone: site.phone,
    areaServed: [
      { "@type": "Country", name: "Deutschland" },
      ...featuredCities().map((city) => ({
        "@type": "City",
        name: city.name,
      })),
    ],
    priceRange: "€€€",
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "de-DE",
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    serviceType: "Automatische Gartenbewässerung",
  };
}

export function cityServiceSchema({
  name,
  description,
  path,
  city,
  land,
  geo,
}: {
  name: string;
  description: string;
  path: string;
  city: string;
  land: string;
  geo: { latitude: number; longitude: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#organization` },
    serviceType: "Automatische Gartenbewässerung",
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: land,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
