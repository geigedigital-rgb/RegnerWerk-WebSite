import Image from "next/image";
import type { ReactNode } from "react";
import { images } from "@/lib/content/media";

const presets = {
  dark: {
    image: images.lawn,
    overlay: "bg-forest/78",
    wash: "bg-gradient-to-br from-forest/40 via-transparent to-forest-mid/50",
  },
  darkBeds: {
    image: images.beds,
    overlay: "bg-forest/80",
    wash: "bg-gradient-to-tr from-forest/50 via-transparent to-forest/30",
  },
  light: {
    image: images.heroGarden,
    overlay: "bg-ice/88",
    wash: "bg-gradient-to-b from-mint/70 via-ice/50 to-white/80",
  },
  mint: {
    image: images.lawn,
    overlay: "bg-mint/90",
    wash: "bg-gradient-to-br from-white/50 via-mint/40 to-ice/70",
  },
} as const;

export type AtmosphereVariant = keyof typeof presets;

/** Soft lawn / irrigation photo behind sections — avoids flat solid fills. */
export function PhotoAtmosphere({
  variant = "dark",
  image,
  children,
  className = "",
  as: Tag = "section",
}: {
  variant?: AtmosphereVariant;
  image?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  const preset = presets[variant];
  const src = image ?? preset.image;

  return (
    <Tag className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        aria-hidden
        className="object-cover scale-105"
        sizes="100vw"
        quality={70}
      />
      <div className={`absolute inset-0 ${preset.overlay}`} aria-hidden />
      <div className={`absolute inset-0 ${preset.wash}`} aria-hidden />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
