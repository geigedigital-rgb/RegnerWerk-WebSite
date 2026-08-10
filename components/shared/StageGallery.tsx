import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContentIcon, type RwIcon } from "@/components/shared/ContentIcon";
import { PhotoAtmosphere } from "@/components/shared/PhotoAtmosphere";
import { images } from "@/lib/content/media";

export type StageItem = {
  title: string;
  body?: string;
  image: string;
  imageAlt: string;
  number?: string;
};

export type StageFocusItem = {
  title: string;
  body: string;
  icon: RwIcon;
};

export function StageGallery({
  title,
  intro,
  stages,
  focus,
}: {
  title: string;
  intro?: string;
  stages: StageItem[];
  focus?: { title: string; items: StageFocusItem[] };
}) {
  return (
    <PhotoAtmosphere
      variant="light"
      image={images.lawn}
      className="rw-section"
    >
      <Container>
        <div className="rw-measure">
          <p className="rw-eyebrow">Ablauf</p>
          <h2 className="mt-2 text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
            {title}
          </h2>
          {intro ? (
            <p className="mt-3 text-[1.0625rem] leading-[1.7] text-gray-600">
              {intro}
            </p>
          ) : null}
        </div>

        <div
          className={`-mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0 ${
            stages.length >= 5
              ? "md:grid-cols-2 lg:grid-cols-3"
              : stages.length === 3
                ? "md:grid-cols-3"
                : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {stages.map((stage, i) => {
            const n = stage.number || String(i + 1).padStart(2, "0");
            return (
              <article
                key={stage.title}
                className="relative h-72 w-[78vw] max-w-sm shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-white/40 shadow-soft md:h-80 md:w-auto md:max-w-none"
              >
                <Image
                  src={stage.image}
                  alt={stage.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 78vw, (max-width:1024px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/10"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-lime px-2.5 text-xs font-bold text-forest">
                    {n}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                    {stage.title}
                  </h3>
                  {stage.body ? (
                    <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                      {stage.body}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {focus ? (
          <div className="mt-8 rounded-[1.75rem] border border-white/70 bg-white/90 p-5 backdrop-blur-[2px] sm:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-deep">
              {focus.title}
            </h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {focus.items.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <ContentIcon
                    name={item.icon}
                    className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep"
                  />
                  <span>
                    <span className="block text-sm font-bold text-forest">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-gray-600 sm:text-sm">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </PhotoAtmosphere>
  );
}
