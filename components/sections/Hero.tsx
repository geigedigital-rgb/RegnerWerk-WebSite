import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroBackgroundVideo } from "@/components/sections/HeroBackgroundVideo";
import { homeHero } from "@/lib/content/home";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-forest">
      <HeroBackgroundVideo
        poster={homeHero.image}
        posterAlt={homeHero.imageAlt}
        srcDesktop={homeHero.videoDesktop}
        srcMobile={homeHero.videoMobile}
      />
      {/* Readable type over bright irrigation footage */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/68 to-forest/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-forest/35" />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-20 pt-28">
        <FadeIn className="max-w-3xl">
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
