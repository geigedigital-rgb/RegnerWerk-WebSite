import { CtaBand } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Container } from "@/components/ui/Container";
import { calcHref } from "@/lib/content/nav";
import { projects } from "@/lib/content/projects";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bewässerungsprojekte von RegnerWerk",
  description:
    "Beispiele für automatische Gartenbewässerung: Ort, Fläche, Zonen und Aufgabe. Platzhalterprojekte bis freigegebene Fallstudien vorliegen.",
  path: "/projekte/",
});

export default function ProjektePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", path: "/" },
          { name: "Projekte", path: "/projekte/" },
        ])}
      />
      <PageHero
        h1="Bewässerungsprojekte von RegnerWerk"
        lead="Reale Parameter und Fotos folgen mit freigegebenen Objekten. Bis dahin zeigen wir gekennzeichnete Beispielkarten zur Orientierung."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Projekte" },
        ]}
      />
      <section className="bg-white py-14 lg:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-600">
            Filter nach Ort oder Gartentyp aktivieren wir, sobald genügend echte
            Projekte vorliegen.
          </p>
        </Container>
      </section>
      <CtaBand
        title="Ähnliches Projekt für Ihren Garten?"
        primaryLabel="Garten berechnen"
        primaryHref={calcHref}
        secondaryLabel="Kontakt"
        secondaryHref="/kontakt/"
      />
    </>
  );
}
