/** Second domain — Sofort configurator (never same-origin planner on this site). */
export const konfiguratorUrl =
  process.env.NEXT_PUBLIC_KONFIGURATOR_URL?.replace(/\/$/, "") ||
  "http://localhost:3001";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.regnerwerk.de";

export const site = {
  name: "RegnerWerk",
  legalName: "MARYSCHAKGROUP LTD",
  tagline: "Automatische Gartenbewässerung. Professionell geplant und eingebaut.",
  phone: "+49 (0) 800 123 4567",
  email: "hallo@regnerwerk.de",
  address: "United Kingdom (Companies House Nr. 16035252)",
  region: "Deutschland",
  hours: "Mo–Fr 08:00–18:00",
};

export function formatEuro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function telHref(phone = site.phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
