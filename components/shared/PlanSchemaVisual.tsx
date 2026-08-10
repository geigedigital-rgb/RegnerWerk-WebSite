/** Lightweight zone-plan illustration for home Planung card (configurator language). */
export function PlanSchemaVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br from-ice via-mint/40 to-ice ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 320 200"
        className="h-[88%] w-[92%] transition duration-500 group-hover:scale-[1.02]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Plot silhouette */}
        <rect
          x="36"
          y="28"
          width="248"
          height="144"
          rx="10"
          className="fill-white stroke-forest/15"
          strokeWidth="1.5"
        />
        {/* House stub */}
        <rect
          x="48"
          y="40"
          width="52"
          height="36"
          rx="4"
          className="fill-forest/10 stroke-forest/25"
          strokeWidth="1"
        />
        {/* Zone 1 coverage */}
        <circle
          cx="130"
          cy="118"
          r="48"
          className="fill-aqua-deep/15 stroke-aqua-deep/45"
          strokeWidth="1.25"
        />
        {/* Zone 2 coverage */}
        <circle
          cx="198"
          cy="108"
          r="52"
          className="fill-aqua-deep/12 stroke-aqua-deep/40"
          strokeWidth="1.25"
        />
        {/* Zone 3 coverage (corner) */}
        <circle
          cx="248"
          cy="148"
          r="36"
          className="fill-lime/20 stroke-aqua-deep/35"
          strokeWidth="1.25"
        />
        {/* Head markers */}
        <circle cx="130" cy="118" r="3.5" className="fill-forest" />
        <circle cx="198" cy="108" r="3.5" className="fill-forest" />
        <circle cx="248" cy="148" r="3.5" className="fill-forest" />
        {/* Labels */}
        <text
          x="118"
          y="78"
          className="fill-forest/70"
          style={{ fontSize: "11px", fontWeight: 600 }}
        >
          Zone 1
        </text>
        <text
          x="186"
          y="68"
          className="fill-forest/70"
          style={{ fontSize: "11px", fontWeight: 600 }}
        >
          Zone 2
        </text>
        <text
          x="228"
          y="126"
          className="fill-forest/70"
          style={{ fontSize: "11px", fontWeight: 600 }}
        >
          Zone 3
        </text>
        <text
          x="36"
          y="190"
          className="fill-forest/45"
          style={{ fontSize: "9px", letterSpacing: "0.06em" }}
        >
          PLAN · ZONEN · ÜBERDECKUNG
        </text>
      </svg>
    </div>
  );
}
