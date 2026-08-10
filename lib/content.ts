/** Compatibility barrel — prefer imports from lib/content/* or lib/site. */
export { site, konfiguratorUrl, formatEuro, telHref } from "@/lib/site";
export { nav, footerNav, legalNav, calcHref } from "@/lib/content/nav";
export { testimonials } from "@/lib/content/testimonials";
export { projects } from "@/lib/content/projects";
export { images } from "@/lib/content/media";
export {
  homeHero,
  proofItems,
  homeServices,
  homeProcess,
  homeCostTeaser,
  homeApplications,
  homeRegion,
  homeFinalCta,
  existingGardenBlock,
} from "@/lib/content/home";

/** Legacy section stubs (not on homepage IA). */
export const blogPosts: {
  date: string;
  title: string;
  excerpt: string;
  image: string;
}[] = [];

export const tickerItems: string[] = [
  "Wasseranschluss geprüft",
  "Schonender Einbau",
  "Klarer Preis vor Baubeginn",
  "Betreuung nach der Installation",
];
