import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { calcHref } from "@/lib/content/nav";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";

export const metadata = buildMetadata({
  title: "RegnerWerk kontaktieren",
  description:
    "Kontakt zu RegnerWerk: Telefon, E-Mail, Erreichbarkeit und Anfrageformular für Ihre Gartenbewässerung.",
  path: "/kontakt/",
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", path: "/" },
          { name: "Kontakt", path: "/kontakt/" },
        ])}
      />
      <PageHero
        h1="RegnerWerk kontaktieren"
        lead="Schreiben Sie uns zu Ihrem Garten oder starten Sie zuerst die vorläufige Online-Einschätzung."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Kontakt" },
        ]}
      />
      <section className="bg-white py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-forest">Direkt erreichen</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  Telefon:{" "}
                  <a className="font-medium text-forest" href={telHref()}>
                    {site.phone}
                  </a>
                </li>
                <li>
                  E-Mail:{" "}
                  <a
                    className="font-medium text-forest"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </li>
                <li>Erreichbarkeit: {site.hours}</li>
                <li>Einsatzgebiet: {site.region}</li>
              </ul>
            </div>
            <Button href={calcHref} variant="dark">
              Garten berechnen
            </Button>
            <p className="text-sm text-gray-600">
              Nach dem Absenden der Anfrage erhalten Sie eine Bestätigung. Wir
              melden uns in der Regel innerhalb von 1–2 Werktagen.
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
