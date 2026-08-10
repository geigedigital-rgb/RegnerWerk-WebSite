import Link from "next/link";
import { Container } from "@/components/ui/Container";

const clusters = [
  {
    title: "Planen & einbauen",
    links: [
      {
        href: "/bewaesserungsanlage-installieren-lassen/",
        label: "Anlage installieren lassen",
      },
      {
        href: "/bewaesserung-bestehender-garten/",
        label: "Bestehenden Garten nachrüsten",
      },
      { href: "/bewaesserungsanlage-wasseranschluss-pruefen/", label: "Wasseranschluss prüfen" },
    ],
  },
  {
    title: "Flächen & Technik",
    links: [
      { href: "/rasenbewaesserung-installieren/", label: "Rasenbewässerung" },
      { href: "/tropfbewaesserung-hecken-beete/", label: "Tropf für Beete & Hecken" },
      { href: "/bewaesserungskomponenten/", label: "Komponenten" },
      { href: "/bewaesserungssteuerung/", label: "Steuerung" },
      { href: "/schonender-einbau/", label: "Schonender Einbau" },
    ],
  },
  {
    title: "Preis & Vertrauen",
    links: [
      { href: "/bewaesserungsanlage-kosten/", label: "Kosten verstehen" },
      { href: "/festpreis/", label: "Preis vor Baubeginn" },
      { href: "/bewaesserung-nachgemessen/", label: "Nachgemessen" },
      { href: "/digitaler-anlagenpass/", label: "Digitaler Anlagenpass" },
    ],
  },
];

/** Topic cluster for internal SEO — one job: deepen topical links without nav clutter. */
export function TopicCluster({
  eyebrow = "Themen",
  title = "Vertiefen Sie einzelne Aspekte",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="border-t border-gray-100 bg-white py-14 lg:py-16">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-deep">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-bold text-forest">{title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {clusters.map((cluster) => (
            <div key={cluster.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                {cluster.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {cluster.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-forest hover:text-aqua-deep"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
