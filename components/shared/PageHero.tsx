import Image from "next/image";
import { Breadcrumbs, type Crumb } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export function PageHero({
  h1,
  lead,
  breadcrumbs,
  image,
  imageAlt,
}: {
  h1: string;
  lead: string;
  breadcrumbs: Crumb[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest pt-28 pb-16 lg:pt-32 lg:pb-24">
      {image ? (
        <Image
          src={image}
          alt={imageAlt || ""}
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/70" />
      <Container className="relative">
        <Breadcrumbs items={breadcrumbs} light />
        <h1 className="mt-7 max-w-3xl text-[clamp(1.9rem,4.2vw,3.15rem)] font-bold leading-[1.12] tracking-[-0.025em] text-white">
          {h1}
        </h1>
        <p className="mt-5 max-w-2xl text-[clamp(1.05rem,1.6vw,1.2rem)] leading-[1.65] text-white/80">
          {lead}
        </p>
      </Container>
    </section>
  );
}
