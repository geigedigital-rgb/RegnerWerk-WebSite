import Link from "next/link";
import { CtaBand } from "@/components/shared/CtaBand";
import { FaqBand } from "@/components/shared/FaqBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { MediaBand } from "@/components/shared/MediaBand";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { Container } from "@/components/ui/Container";
import { homeProcess } from "@/lib/content/home";
import { images } from "@/lib/content/media";
import { calcHref } from "@/lib/content/nav";
import type { Bundesland } from "@/lib/content/regions";
import { citiesInLand, cityPath } from "@/lib/content/cities";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

export function LandInstallPage({ land }: { land: Bundesland }) {
  const path = `/${land.slug}/bewaesserungsanlage-installieren/`;
  const landCities = citiesInLand(land.slug);
  const faqs = [
    {
      question: `Installiert RegnerWerk Bewässerungsanlagen in ${land.name}?`,
      answer: `Deutschland ist unser Einsatzgebiet – einschließlich ${land.name}. Termin und Anfahrt klären wir in der Anfrage.`,
    },
    {
      question: "Ist der Online-Preis final?",
      answer:
        "Nein. Online erhalten Sie eine vorläufige Einschätzung. Der verbindliche Preis folgt nach Prüfung von Wasser und Grundstück.",
    },
    {
      question: "Können bestehende Gärten nachgerüstet werden?",
      answer:
        "Ja. Wir planen Trassen, schützen Flächen und stellen den Garten nach dem Einbau wieder her.",
    },
    {
      question: `Wie starte ich in ${land.name}?`,
      answer:
        "Nutzen Sie den Online-Rechner für eine vorläufige Einschätzung oder schreiben Sie uns über das Kontaktformular mit PLZ und kurzer Beschreibung Ihres Gartens.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Bewässerungsanlage in ${land.name}`,
            description: land.intro,
            path,
          }),
          breadcrumbSchema([
            { name: "Start", path: "/" },
            { name: "Einsatzgebiet", path: "/einsatzgebiet/" },
            { name: land.name },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        h1={`Bewässerungsanlage in ${land.name} installieren lassen`}
        lead={land.intro}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Einsatzgebiet", href: "/einsatzgebiet/" },
          { label: land.name },
        ]}
        image={images.heroGarden}
        imageAlt={`Gartenbewässerung – Informationen für ${land.name}`}
      />
      <section className="rw-section bg-white">
        <Container className="space-y-12 lg:space-y-14">
          <div className="rw-measure">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
              Lokaler Kontext in {land.name}
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
              {land.climateNote}
            </p>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
              {land.gardenNote}
            </p>
          </div>
          <div>
            <h2 className="mb-6 rw-measure text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
              So arbeiten wir
            </h2>
            <ProcessSteps steps={homeProcess} />
          </div>
          <div className="rw-measure rounded-3xl border border-dashed border-gray-100 bg-ice p-6 text-[0.9875rem] leading-[1.65] text-gray-600">
            Lokale Projektreferenzen und Fotos aus {land.name} ergänzen wir,
            sobald freigegebene Objekte vorliegen. Bis dahin keine erfundenen
            Baustellenberichte.
          </div>
          {landCities.length ? (
            <div>
              <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
                Städte in {land.name}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {landCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={cityPath(city.slug)}
                      className="inline-block rounded-full border border-gray-100 bg-ice px-4 py-2 text-sm font-medium text-forest hover:border-aqua-deep/40"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </section>
      <FaqBand faqs={faqs} />
      <MediaBand
        image={images.lawn}
        imageAlt="Privater Rasen nach geplanter Bewässerung"
        title={`Automatische Bewässerung für Gärten in ${land.name}`}
        body="Gleicher Qualitätsanspruch wie bundesweit: Wasser prüfen, Zonen planen, schonend einbauen, einstellen und dokumentieren. Der Online-Rechner bleibt vorläufig – verbindlich nach Objektprüfung. Regionale Seiten erklären den Kontext, ersetzen aber keine Prüfung vor Ort."
      />
      <RelatedLinks
        items={[
          {
            href: "/bewaesserungsanlage-installieren-lassen/",
            label: "Komplettinstallation",
          },
          { href: "/bewaesserungsanlage-kosten/", label: "Kosten" },
          { href: "/einsatzgebiet/", label: "Alle Bundesländer" },
        ]}
      />
      <CtaBand
        title={`Garten in ${land.name} berechnen`}
        primaryLabel="Garten berechnen"
        primaryHref={`${calcHref}?from=land&land=${land.slug}`}
        secondaryLabel="Kontakt"
        secondaryHref="/kontakt/"
      />
    </>
  );
}
