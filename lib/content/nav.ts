import { konfiguratorEntryUrl } from "@/lib/site";

export const nav = [
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/bewaesserungsanlage-kosten/", label: "Kosten" },
  { href: "/projekte/", label: "Projekte" },
  { href: "/service/", label: "Service" },
  { href: "/ueber-regnerwerk/", label: "Über RegnerWerk" },
  { href: "/kontakt/", label: "Kontakt" },
] as const;

export const calcHref = konfiguratorEntryUrl;

export const footerNav: { href: string; label: string }[] = [
  ...nav,
  { href: "/einsatzgebiet/", label: "Einsatzgebiet" },
  { href: calcHref, label: "Garten berechnen" },
];

export const legalNav = [
  { href: "/impressum/", label: "Impressum" },
  { href: "/datenschutz/", label: "Datenschutz" },
  { href: "/cookies/", label: "Cookies" },
  { href: "/nutzungsbedingungen/", label: "Nutzungsbedingungen" },
] as const;
