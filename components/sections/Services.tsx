import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeServices } from "@/lib/content/home";

export function Services() {
  return (
    <section id="leistungen" className="bg-white py-16 lg:py-20">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Leistungen"
            title="Was zu einer kompletten Anlage gehört"
            description="Keine Teileliste – ein zusammenhängendes System: Rasen, Komponenten, Steuerung, Planung, Montage und Einstellung."
          />
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <Link
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-ice"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-forest">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-aqua-deep">
                    Mehr erfahren →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
