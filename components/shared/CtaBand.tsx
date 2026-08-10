import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoAtmosphere } from "@/components/shared/PhotoAtmosphere";
import { images } from "@/lib/content/media";

export function CtaBand({
  title,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <PhotoAtmosphere
      variant="dark"
      image={images.heroGarden}
      className="rw-section"
    >
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-[clamp(1.55rem,3vw,2.35rem)] font-bold leading-tight tracking-[-0.02em] text-white">
          {title}
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </Container>
    </PhotoAtmosphere>
  );
}
