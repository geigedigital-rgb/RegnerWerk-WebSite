import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  accent?: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = light ? "text-white" : "text-forest";
  const descColor = light ? "text-white/75" : "text-gray-600";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] ${light ? "text-lime" : "text-aqua-deep"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-[clamp(1.65rem,2.8vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] ${titleColor}`}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span className="font-accent text-[1.15em] font-medium text-lime">
              {accent}
            </span>
          </>
        ) : null}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-[1.0625rem] leading-[1.7] ${descColor} ${align === "center" ? "mx-auto max-w-xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
