import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContentIcon, type RwIcon } from "@/components/shared/ContentIcon";

export type CompareColumn = {
  title: string;
  image: string;
  imageAlt: string;
  tone?: "muted" | "accent";
  items: { text: string; icon: RwIcon }[];
};

export function CompareBand({
  title,
  intro,
  left,
  right,
}: {
  title: string;
  intro?: string;
  left: CompareColumn;
  right: CompareColumn;
}) {
  return (
    <section className="rw-section bg-white">
      <Container>
        <div className="rw-measure">
          <p className="rw-eyebrow">Vergleich</p>
          <h2 className="mt-2 text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
            {title}
          </h2>
          {intro ? (
            <p className="mt-3 text-[1.0625rem] leading-[1.7] text-gray-600">
              {intro}
            </p>
          ) : null}
        </div>

        {/* One shell — split photo + split content */}
        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-gray-100 shadow-soft">
          <div className="relative grid min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] lg:grid-cols-2">
            {[left, right].map((col, i) => {
              const accent = col.tone === "accent";
              return (
                <div
                  key={col.title}
                  className={`relative ${i === 0 ? "border-b border-white/20 lg:border-b-0 lg:border-r lg:border-white/25" : ""}`}
                >
                  <Image
                    src={col.image}
                    alt={col.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 ${
                      accent
                        ? "bg-gradient-to-t from-forest/90 via-forest/45 to-forest/10"
                        : "bg-gradient-to-t from-forest/85 via-forest/40 to-forest/15"
                    }`}
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                        accent ? "text-lime" : "text-white/70"
                      }`}
                    >
                      {accent ? "Mit RegnerWerk" : "Ohne Anlage"}
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl">
                      {col.title}
                    </h3>
                  </div>
                </div>
              );
            })}

            {/* Center divider mark (desktop) */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
              aria-hidden
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-forest/80 text-xs font-bold tracking-wide text-lime backdrop-blur-sm">
                VS
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            {[left, right].map((col) => {
              const accent = col.tone === "accent";
              return (
                <div
                  key={`${col.title}-items`}
                  className={`p-5 sm:p-6 ${
                    accent
                      ? "bg-mint/50 lg:border-l lg:border-aqua-deep/15"
                      : "bg-ice/40"
                  }`}
                >
                  <ul
                    className={`grid gap-x-4 gap-y-2.5 ${
                      col.items.length > 4
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {col.items.map((item) => (
                      <li key={item.text} className="flex items-start gap-2.5">
                        <ContentIcon
                          name={item.icon}
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            accent ? "text-aqua-deep" : "text-gray-400"
                          }`}
                        />
                        <span className="text-sm font-medium leading-snug text-gray-600">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
