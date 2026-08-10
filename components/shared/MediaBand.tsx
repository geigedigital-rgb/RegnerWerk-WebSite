import Image from "next/image";
import { Container } from "@/components/ui/Container";

/** Full-bleed or split media band for content depth on marketing pages. */
export function MediaBand({
  image,
  imageAlt,
  title,
  body,
  reverse = false,
}: {
  image: string;
  imageAlt: string;
  title: string;
  body: string;
  reverse?: boolean;
}) {
  return (
    <section className="bg-ice py-14 lg:py-16">
      <Container>
        <div
          className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-forest">
              {title}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">{body}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
