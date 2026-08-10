import { ProjectCard } from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/content/projects";

export function Gallery() {
  return (
    <section id="projekte" className="bg-white py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Projekte"
          title="Beispiele aus der Praxis"
          description="Ort, Fläche, Zonen und Aufgabe auf einen Blick. Kennzahlen und Fotos ersetzen wir durch freigegebene Objekte – bis dahin sind Karten klar als Beispiele gekennzeichnet."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/projekte/" variant="dark">
            Alle Projekte
          </Button>
        </div>
      </Container>
    </section>
  );
}
