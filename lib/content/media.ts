/**
 * Image registry — swap Unsplash URLs for local files under /public/images/
 * without touching every page. Prefer WebP/AVIF when adding real assets.
 */
export const images = {
  heroGarden: "/images/hero-garden.webp",
  installWork: "/images/install-work.webp",
  lawn: "/images/lawn.webp",
  lawnAnwendung: "/images/lawn-anwendung.webp",
  beds: "/images/beds.webp",
  bedsHecken: "/images/beds-hecken.webp",
  sportSpielrasen: "/images/sport-spielrasen.webp",
  controller: "/images/controller.webp",
  controllerProgramming: "/images/controller-programming.webp",
  process: "/images/process.webp",
  trenchDoc: "/images/trench-doc.webp",
  trenchInstallation: "/images/trench-installation.webp",
  measurement: "/images/measurement-v2.webp",
  components: "/images/components.webp",
  steuerung: "/images/steuerung.webp",
  planungBuero: "/images/planung-buero.webp",
  startEinstellung: "/images/start-einstellung.webp",
  rasenHeadToHead: "/images/rasen-head-to-head.webp",
  ueberdeckungExpertin: "/images/ueberdeckung-expertin-iphone-v2.webp",
  zonePlan: "/images/zone.webp",
  faqMitarbeiterin: "/images/faq-mitarbeiterin-nachdenklich.webp",
  finalCta: "/images/hero-garden.webp",
  // Still placeholders until uploaded:
  houseGarden: "/images/bestehende-gaerten.webp",
  winter:
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
  teamWork:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
} as const;

export type ImageKey = keyof typeof images;
