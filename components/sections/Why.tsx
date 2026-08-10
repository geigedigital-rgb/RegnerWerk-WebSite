import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { existingGardenBlock, homeApplications } from "@/lib/content/home";

export function Why() {
  return (
    <>
      <section className="bg-mint py-16 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src={existingGardenBlock.image}
                alt="Bestehender Garten"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="rw-eyebrow">{existingGardenBlock.eyebrow}</p>
              <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
                {existingGardenBlock.title}
              </h2>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
                {existingGardenBlock.body}
              </p>
              <Button
                href={existingGardenBlock.href}
                variant="primary"
                className="mt-8"
              >
                {existingGardenBlock.cta}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow={homeApplications.eyebrow}
            title={homeApplications.title}
            description={homeApplications.description}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeApplications.items.map((item) => (
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
    </>
  );
}
