import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

/** Fallback blurbs when a page omits `description` — keeps the block readable. */
const DESCRIPTIONS: Record<string, string> = {
  "/tropfbewaesserung-hecken-beete/":
    "Eigene Zonen für Beete und Hecken – getrennt vom Rasen.",
  "/bewaesserung-bestehender-garten/":
    "Nachrüstung mit Schutz von Rasen, Wegen und Pflanzungen.",
  "/bewaesserungsanlage-kosten/":
    "Spannen, Preisfaktoren und Online vs. Festpreis.",
  "/bewaesserung-nachgemessen/":
    "Einstellung und Prüfung nach dem Einbau.",
  "/rasenbewaesserung-installieren/":
    "Versenkregner, Überdeckung und Zonen für den Rasen.",
  "/bewaesserungsanlage-installieren-lassen/":
    "Kompletter Zyklus: prüfen, planen, einbauen, einstellen.",
  "/schonender-einbau/":
    "Wie wir Flächen schützen und wiederherstellen.",
  "/digitaler-anlagenpass/":
    "Leitungsverläufe nachvollziehbar dokumentiert.",
  "/projekte/":
    "Beispiele mit Ort, Fläche und Aufgabe.",
  "/service/":
    "Winter, Justage und Diagnose – klar vom Einbau getrennt.",
  "/wartung-winterservice/":
    "Frostschutz und saisonale Absicherung.",
  "/erste-saison-betreuung/":
    "Feinjustage im vereinbarten Rahmen nach dem Einbau.",
  "/festpreis/":
    "Was vor Baubeginn verbindlich feststeht.",
  "/leistungen/":
    "Überblick aller Leistungen von RegnerWerk.",
  "/kontakt/":
    "Kurz schreiben – wir melden uns mit dem nächsten Schritt.",
  "/einsatzgebiet/":
    "Deutschlandweit – Bundesländer und Ablauf.",
  "/garten-berechnen/":
    "Vorläufige Orientierung in wenigen Minuten.",
  "/wasserverbrauch-leckagekontrolle/":
    "Verbrauch nachvollziehbar halten.",
  "/bewaesserungsanlage-wasseranschluss-pruefen/":
    "Druck und Durchfluss vor der Auslegung.",
};

function blurbFor(href: string, description?: string) {
  if (description) return description;
  if (DESCRIPTIONS[href]) return DESCRIPTIONS[href];
  // strip trailing slash variants
  const key = href.endsWith("/") ? href : `${href}/`;
  return DESCRIPTIONS[key] ?? "Mehr Details zu diesem Thema.";
}

export function RelatedLinks({
  items,
}: {
  items: { href: string; label: string; description?: string }[];
}) {
  if (!items.length) return null;

  return (
    <section className="rw-section border-y border-gray-100 bg-white">
      <Container>
        <div className="rw-measure">
          <p className="rw-eyebrow">Vertiefen</p>
          <h2 className="mt-2 text-[clamp(1.35rem,2.2vw,1.75rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
            Passende Themen zu dieser Seite
          </h2>
          <p className="mt-3 text-[1.0625rem] leading-[1.7] text-gray-600">
            Kurze Wege zu verwandten Leistungen und Erklärungen – damit Sie das
            passende Thema ohne Umwege finden.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((item) => {
            const blurb = blurbFor(item.href, item.description);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-gray-100 bg-ice/60 px-5 py-4 transition hover:border-aqua-deep/35 hover:bg-mint/50"
                >
                  <span className="min-w-0">
                    <span className="block font-semibold text-forest group-hover:text-aqua-deep">
                      {item.label}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-gray-600">
                      {blurb}
                    </span>
                  </span>
                  <span
                    className="mt-0.5 shrink-0 text-aqua-deep transition group-hover:text-forest"
                    aria-hidden
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
