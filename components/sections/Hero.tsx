import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { homeHero } from "@/lib/content/home";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={homeHero.image}
        alt={homeHero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/92 via-forest/72 to-forest/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-forest/30" />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-20 pt-28">
        <FadeIn className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            RegnerWerk
          </p>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.08] tracking-tight text-white">
            {homeHero.h1Lead}{" "}
            <span className="font-bold">{homeHero.h1Bold}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {homeHero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={homeHero.primaryCta.href} variant="primary">
              {homeHero.primaryCta.label}
            </Button>
            <Button href={homeHero.secondaryCta.href} variant="ghost">
              {homeHero.secondaryCta.label}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
