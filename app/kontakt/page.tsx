import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { calcHref } from "@/lib/content/nav";
import {
  breadcrumbSchema,
  buildMetadata,
  contactPageSchema,
  faqSchema,
} from "@/lib/seo";
import { site, telHref } from "@/lib/site";

const title = "Kontakt – Bewässerung anfragen";
const description = `Kontakt zu RegnerWerk: Telefon ${site.phone}, E-Mail ${site.email}. Beratung und Anfrage zur automatischen Gartenbewässerung in Deutschland.`;

const faqs = [
  {
    question: "Wie schnell melden Sie sich?",
    answer:
      "Nach einer Anfrage per Formular oder E-Mail antworten wir in der Regel innerhalb von 1–2 Werktagen. Am Telefon erreichen Sie uns zu den angegebenen Zeiten.",
  },
  {
    question: "Wann ist RegnerWerk telefonisch erreichbar?",
    answer: `${site.hours}. Samstag nach Vereinbarung, Sonntag geschlossen.`,
  },
  {
    question: "Für welche Regionen nehmen Sie Anfragen an?",
    answer:
      "Wir planen und installieren automatische Gartenbewässerung deutschlandweit. Nennen Sie Ort und Gartenfläche – wir prüfen den nächsten sinnvollen Schritt.",
  },
  {
    question: "Muss ich vor dem Anruf etwas vorbereiten?",
    answer:
      "Hilfreich sind Ort, ungefähre Gartengröße und ob Rasen, Beete oder Hecken bewässert werden sollen. Optional starten Sie zuerst die Online-Einschätzung.",
  },
];

export const metadata = buildMetadata({
  title,
  description,
  path: "/kontakt/",
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Start", path: "/" },
            { name: "Kontakt", path: "/kontakt/" },
          ]),
          contactPageSchema({
            name: title,
            description,
            path: "/kontakt/",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        h1="Kontakt zu RegnerWerk"
        lead="Telefon, E-Mail oder Formular – wir helfen bei Planung und Einbau Ihrer automatischen Gartenbewässerung."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Kontakt" },
        ]}
      />

      <section className="bg-white py-14 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="rw-eyebrow text-aqua-deep">Erreichbarkeit</p>
            <h2 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em] text-forest">
              So erreichen Sie uns
            </h2>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-[1.7] text-gray-600">
              Kurze Fragen am Telefon, ausführliche Projektanfragen per Formular
              oder E-Mail. Wir melden uns mit dem nächsten klaren Schritt.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-aqua-deep">
                  <Phone size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">Telefon</p>
                  <a
                    className="mt-0.5 block text-lg font-semibold text-aqua-deep hover:underline"
                    href={telHref()}
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-aqua-deep">
                  <Mail size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">E-Mail</p>
                  <a
                    className="mt-0.5 block font-medium text-aqua-deep hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-aqua-deep">
                  <Clock size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    Erreichbarkeit
                  </p>
                  <p className="mt-0.5 text-gray-600">{site.hours}</p>
                  <p className="text-sm text-gray-500">
                    Sa nach Vereinbarung · So geschlossen
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-aqua-deep">
                  <MapPin size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    Einsatzgebiet
                  </p>
                  <p className="mt-0.5 text-gray-600">{site.region}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={telHref()} variant="primary" className="!shadow-none">
                Jetzt anrufen
              </Button>
              <Button href={calcHref} variant="dark" className="!shadow-none">
                Garten berechnen
              </Button>
            </div>
          </div>

          <div>
            <p className="rw-eyebrow text-aqua-deep">Anfrage</p>
            <h2 className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em] text-forest">
              Nachricht senden
            </h2>
            <p className="mt-3 mb-6 max-w-md text-sm leading-relaxed text-gray-600">
              Beschreiben Sie kurz Ihren Garten. Wir melden uns in der Regel
              innerhalb von 1–2 Werktagen.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="bg-ice py-14 lg:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em] text-forest">
            Häufige Fragen zum Kontakt
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </Container>
      </section>

      <RelatedLinks
        items={[
          {
            href: "/garten-berechnen/",
            label: "Garten berechnen",
            description: "Vorläufige Online-Einschätzung starten.",
          },
          {
            href: "/bewaesserungsanlage-kosten/",
            label: "Kosten verstehen",
            description: "Spannen und Preisfaktoren im Überblick.",
          },
          {
            href: "/einsatzgebiet/",
            label: "Einsatzgebiet",
            description: "Städte und Bundesländer in Deutschland.",
          },
          {
            href: "/leistungen/",
            label: "Leistungen",
            description: "Von Planung bis Einbau und Service.",
          },
        ]}
      />
    </>
  );
}
