import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  const items = testimonials.slice(0, 3);
  return (
    <section id="stimmen" className="bg-white py-16 lg:py-20">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Stimmen"
            title="Was Kundinnen und Kunden sagen"
            description="Ruhige Abläufe und nachvollziehbare Ergebnisse – so klingt gute Bewässerung im Alltag. Platzhalterstimmen mit Projektfotos, bis freigegebene Originalrezensionen vorliegen."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.08}>
              <TestimonialCard item={item} featured={i === 1} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
