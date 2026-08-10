import Image from "next/image";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/content/media";

/** Full-bleed FAQ with soft left blur — shared across marketing pages. */
export function FaqBand({
  faqs,
  image = images.faqMitarbeiterin,
  imageAlt = "Häufige Fragen zur Gartenbewässerung",
}: {
  faqs: { question: string; answer: string }[];
  image?: string;
  imageAlt?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section className="relative min-h-[28rem] overflow-hidden lg:min-h-[32rem]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover object-[72%_top]"
        sizes="100vw"
        quality={75}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full backdrop-blur-[6px] lg:w-[54%]"
        style={{
          maskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-forest/75 via-forest/35 to-transparent lg:via-forest/25"
        aria-hidden
      />
      <Container className="relative z-10 py-14 lg:py-20">
        <div className="max-w-xl lg:max-w-[28rem] xl:max-w-xl">
          <h2 className="mb-8 text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-white">
            Häufige Fragen
          </h2>
          <FaqAccordion faqs={faqs} variant="onMedia" />
        </div>
      </Container>
    </section>
  );
}
