export const nav = [
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/bewaesserungsanlage-kosten/", label: "Kosten" },
  { href: "/projekte/", label: "Projekte" },
  { href: "/service/", label: "Service" },
  { href: "/ueber-regnerwerk/", label: "Über RegnerWerk" },
] as const;

export const footerNav = [
  ...nav,
  { href: "/einsatzgebiet/", label: "Einsatzgebiet" },
  { href: "/kontakt/", label: "Kontakt" },
  { href: "/garten-berechnen/", label: "Garten berechnen" },
] as const;

export const legalNav = [
  { href: "/impressum/", label: "Impressum" },
  { href: "/datenschutz/", label: "Datenschutz" },
  { href: "/cookies/", label: "Cookies" },
  { href: "/nutzungsbedingungen/", label: "Nutzungsbedingungen" },
] as const;

export const calcHref = "/garten-berechnen/";
