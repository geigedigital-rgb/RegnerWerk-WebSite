import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContentIcon, type RwIcon } from "@/components/shared/ContentIcon";

export type StageItem = {
  /** Short label on the photo (bottom). Falls back to title. */
  caption?: string;
  /** Clear headline next to the photo. */
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

/** Simple vertical stages: photo + copy, no nested shells. */
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
    <section className="rw-section">
      <Container>
        <div className="max-w-2xl">
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

        <ol className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
          {stages.map((stage, i) => {
            const n = stage.number || String(i + 1).padStart(2, "0");
            const reverse = i % 2 === 1;
            const onImage = stage.caption ?? stage.title;
            const textHeading = stage.caption ? stage.title : null;

            return (
              <li
                key={`${n}-${onImage}`}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-mint">
                  <Image
                    src={stage.image}
                    alt={stage.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-forest/75 via-forest/20 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="text-xs font-semibold tracking-[0.12em] text-lime">
                      {n}
                    </span>
                    <p className="mt-1.5 text-lg font-bold leading-snug tracking-[-0.02em] text-white sm:text-xl">
                      {onImage}
                    </p>
                  </div>
                </div>

                <div>
                  {textHeading ? (
                    <h3 className="text-[clamp(1.25rem,2vw,1.55rem)] font-bold leading-snug tracking-[-0.02em] text-forest">
                      {textHeading}
                    </h3>
                  ) : (
                    <span className="text-sm font-semibold tracking-[0.08em] text-aqua-deep">
                      {n}
                    </span>
                  )}
                  {stage.body ? (
                    <p
                      className={`max-w-lg text-[1.0625rem] leading-[1.7] text-gray-600 ${
                        textHeading ? "mt-4" : "mt-3"
                      }`}
                    >
                      {stage.body}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>

        {focus ? (
          <div className="mt-16 border-t border-gray-100 pt-10 lg:mt-20">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-deep">
              {focus.title}
            </h3>
            <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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
                    <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
