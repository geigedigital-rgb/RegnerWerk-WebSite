import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeCostTeaser } from "@/lib/content/home";

export function Packages() {
  return (
    <section id="kosten" className="bg-ice py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow={homeCostTeaser.eyebrow}
          title={homeCostTeaser.title}
          description={homeCostTeaser.body}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {homeCostTeaser.examples.map((ex) => (
            <div
              key={ex.label}
              className="rounded-3xl border border-gray-100 bg-white p-6"
            >
              <p className="text-sm font-semibold text-aqua-deep">{ex.note}</p>
              <h3 className="mt-2 text-lg font-bold text-forest">{ex.label}</h3>
              <p className="mt-3 text-2xl font-bold text-forest">{ex.range}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href={homeCostTeaser.href} variant="dark">
            {homeCostTeaser.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
