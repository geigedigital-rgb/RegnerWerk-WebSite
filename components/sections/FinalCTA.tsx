import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoAtmosphere } from "@/components/shared/PhotoAtmosphere";
import { homeFinalCta, homeRegion } from "@/lib/content/home";
import { bundeslaender, landInstallPath } from "@/lib/content/regions";
import { images } from "@/lib/content/media";

export function FinalCTA() {
  return (
    <>
      <PhotoAtmosphere
        variant="mint"
        image={images.heroGarden}
        className="py-16 lg:py-20"
      >
        <Container>
          <div className="max-w-2xl rounded-[1.75rem] border border-white/70 bg-white/85 p-6 backdrop-blur-[2px] lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-deep">
              {homeRegion.eyebrow}
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-forest">
              {homeRegion.title}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">{homeRegion.body}</p>
            <Button href={homeRegion.href} variant="dark" className="mt-8">
              {homeRegion.cta}
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {bundeslaender.slice(0, 8).map((land) => (
              <li key={land.slug}>
                <Link
                  href={landInstallPath(land.slug)}
                  className="inline-block rounded-full border border-white/70 bg-white/90 px-4 py-2 text-sm font-medium text-forest backdrop-blur-[2px] hover:border-aqua-deep/40"
                >
                  {land.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/einsatzgebiet/"
                className="inline-block rounded-full bg-forest px-4 py-2 text-sm font-medium text-white"
              >
                Alle Bundesländer
              </Link>
            </li>
          </ul>
        </Container>
      </PhotoAtmosphere>

      <section className="relative overflow-hidden py-20 lg:py-28">
        <Image
          src={homeFinalCta.image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/80" />
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white">
            {homeFinalCta.title}
          </h2>
          <Button href={homeFinalCta.href} variant="primary" className="mt-8">
            {homeFinalCta.cta}
          </Button>
        </Container>
      </section>
    </>
  );
}
