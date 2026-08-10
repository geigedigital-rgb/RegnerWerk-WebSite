import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { berechnenPage } from "@/lib/content/pages";

export const metadata = buildMetadata(berechnenPage.seo);

/** Configurator offline — maintenance CTA to project inquiry. */
export default function Page() {
  return (
    <section className="bg-gradient-to-b from-mint via-ice to-white pb-20 pt-28 lg:pb-28 lg:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="rw-eyebrow">Online-Rechner</p>
          <h1 className="mt-3 text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
            Technische Arbeiten
          </h1>
          <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
            Der Online-Konfigurator wird gerade vorbereitet und ist vorübergehend
            nicht erreichbar. Beschreiben Sie kurz Ihr Projekt – wir melden uns
            persönlich.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/projekt-anfragen/" variant="primary">
              Projekt anfragen
            </Button>
            <Button href="/" variant="dark">
              Zur Startseite
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
