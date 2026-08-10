import Image from "next/image";
import type { Testimonial } from "@/lib/content/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill={i < rating ? "#E8B84A" : "rgba(255,255,255,0.4)"}
          className="drop-shadow-sm"
        >
          <path d="M8 1.2l1.76 3.56 3.93.57-2.84 2.77.67 3.9L8 10.16l-3.52 1.84.67-3.9L2.3 5.33l3.93-.57L8 1.2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({
  item,
  featured = false,
}: {
  item: Testimonial;
  featured?: boolean;
}) {
  return (
    <article
      className={`relative flex min-h-[26rem] flex-col overflow-hidden rounded-[1.75rem] ${
        featured ? "ring-2 ring-lime/50" : ""
      }`}
    >
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, 33vw"
      />

      {/* Stars stay readable on open photo */}
      <div className="absolute left-5 top-5 z-20 sm:left-6 sm:top-6">
        <div className="rounded-full bg-forest/45 px-2.5 py-1.5 backdrop-blur-[2px]">
          <Stars rating={item.rating} />
        </div>
      </div>

      {/* Soft bottom band only — photo stays mostly open */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-forest/90 via-forest/55 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mt-auto p-5 pt-0 sm:p-6 sm:pt-0">
        <p className="text-[0.9375rem] leading-[1.6] text-white/95">
          „{item.quote}“
        </p>
        <div className="mt-3.5">
          <p className="text-sm font-semibold text-white">{item.name}</p>
          <p className="mt-0.5 text-xs text-white/70">{item.role}</p>
          {item.placeholder ? (
            <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-lime/80">
              Beispielstimme
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
