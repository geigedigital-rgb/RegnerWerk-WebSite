type Variant = "color" | "onDark" | "mark";

const SRC: Record<Variant, { src: string; width: number; height: number }> = {
  color: {
    src: "/brand/logo-horizontal.svg",
    width: 1960,
    height: 480,
  },
  onDark: {
    src: "/brand/logo-horizontal-on-dark.svg",
    width: 1960,
    height: 480,
  },
  mark: {
    src: "/brand/mark.svg",
    width: 512,
    height: 512,
  },
};

export function BrandLogo({
  variant = "color",
  className = "h-8 w-auto lg:h-9",
}: {
  variant?: Variant;
  className?: string;
}) {
  const { src, width, height } = SRC[variant];
  return (
    // SVG wordmarks stay crisp at header size.
    <img
      src={src}
      alt="RegnerWerk"
      width={width}
      height={height}
      className={className}
      decoding="async"
    />
  );
}
