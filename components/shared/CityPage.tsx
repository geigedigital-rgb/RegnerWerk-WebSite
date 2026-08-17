import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/shared/CtaBand";
import { FaqBand } from "@/components/shared/FaqBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { ProofBar } from "@/components/shared/ProofBar";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  cityPath,
  nearbyCities,
  type City,
} from "@/lib/content/cities";
import { homeCostTeaser, homeProcess, proofItems } from "@/lib/content/home";
import { calcHref } from "@/lib/content/nav";
import { landInstallPath } from "@/lib/content/regions";
import {
  breadcrumbSchema,
  cityServiceSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo";

export function CityPage({ city }: { city: City }) {
  const path = cityPath(city.slug);
  const nearby = nearbyCities(city);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: city.h1,
            description: city.lead,
            path,
          }),
          cityServiceSchema({
            name: `Bewässerungsanlage in ${city.name}`,
            description: city.lead,
            path,
            city: city.name,
            land: city.landName,
            geo: city.geo,
          }),
          breadcrumbSchema([
            { name: "Start", path: "/" },
            { name: "Einsatzgebiet", path: "/einsatzgebiet/" },
            { name: city.landName, path: landInstallPath(city.landSlug) },
            { name: city.name },
          ]),
          faqSchema(city.faqs),
        ]}
      />

      <PageHero
        h1={city.h1}
        lead={city.lead}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Einsatzgebiet", href: "/einsatzgebiet/" },
          { label: city.landName, href: landInstallPath(city.landSlug) },
          { label: city.name },
        ]}
        image={city.heroImage}
        imageAlt={city.heroImageAlt}
      />

      <ProofBar items={proofItems} />

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gray-100">
              <Image
                src={city.heroImage}
                alt={city.heroImageAlt}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="rw-eyebrow">{city.name}</p>
              <h2 className="mt-3 text-[clamp(1.65rem,2.8vw,2.35rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
                {city.climateTitle}
              </h2>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
                {city.climate}
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
                {city.waterNote}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mint py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="rw-eyebrow">Vor Ort</p>
            <h2 className="mt-3 text-[clamp(1.65rem,2.8vw,2.35rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
              {city.gardensTitle}
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
              {city.gardens}
            </p>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
              {city.districts}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="Anwendungen"
            title={`Was wir in ${city.name} planen`}
            description="Gleicher fachlicher Ablauf wie bundesweit – Zonen und Einbau folgen dem Grundstück vor Ort."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {city.applications.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-[18rem] flex-col overflow-hidden rounded-[1.75rem] sm:min-h-[20rem]"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/10"
                  aria-hidden
                />
                <div className="relative z-10 mt-auto p-5 sm:p-6">
                  <h3 className="text-xl font-bold tracking-[-0.01em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-[1.6] text-white/90">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-lime">
                    Mehr erfahren →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ice py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="Ablauf"
            title="So arbeiten wir"
            description="Vom ersten Überblick bis zur Nachjustierung – unabhängig von der Stadt derselbe Standard."
          />
          <div className="mt-12">
            <ProcessSteps steps={homeProcess} />
          </div>
        </Container>
      </section>

      <section id="kosten" className="bg-white py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow={homeCostTeaser.eyebrow}
            title={`Was kostet eine Bewässerungsanlage in ${city.name}?`}
            description={city.costNote}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {homeCostTeaser.examples.map((ex) => (
              <div
                key={ex.label}
                className="rounded-3xl border border-gray-100 bg-ice p-6"
              >
                <p className="text-sm font-semibold text-aqua-deep">{ex.note}</p>
                <h3 className="mt-2 text-lg font-bold text-forest">{ex.label}</h3>
                <p className="mt-3 text-2xl font-bold text-forest">{ex.range}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={`${calcHref}?from=city&city=${city.slug}`}
              variant="primary"
            >
              Garten berechnen
            </Button>
            <Button href={homeCostTeaser.href} variant="dark">
              Kosten verstehen
            </Button>
          </div>
        </Container>
      </section>

      <FaqBand faqs={city.faqs} />

      {nearby.length ? (
        <section className="border-y border-gray-100 bg-mint py-16 lg:py-20">
          <Container>
            <p className="rw-eyebrow">Weitere Städte</p>
            <h2 className="mt-3 max-w-2xl text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
              Bewässerung in der Nähe von {city.name}
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {nearby.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={cityPath(item.slug)}
                    className="inline-block rounded-full border border-white/70 bg-white px-4 py-2 text-sm font-medium text-forest hover:border-aqua-deep/40"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/einsatzgebiet/#staedte"
                  className="inline-block rounded-full bg-forest px-4 py-2 text-sm font-medium text-white"
                >
                  Alle Städte
                </Link>
              </li>
            </ul>
          </Container>
        </section>
      ) : null}

      <RelatedLinks
        items={[
          {
            href: landInstallPath(city.landSlug),
            label: `Bewässerung in ${city.landName}`,
            description: `Bundesland-Kontext für ${city.landName}.`,
          },
          {
            href: "/bewaesserungsanlage-installieren-lassen/",
            label: "Komplettinstallation",
          },
          { href: "/bewaesserungsanlage-kosten/", label: "Kosten" },
          { href: "/einsatzgebiet/", label: "Einsatzgebiet" },
        ]}
      />

      <CtaBand
        title={`Garten in ${city.name} vorläufig berechnen`}
        primaryLabel="Garten berechnen"
        primaryHref={`${calcHref}?from=city&city=${city.slug}`}
        secondaryLabel="Kontakt"
        secondaryHref="/kontakt/"
      />
    </>
  );
}
