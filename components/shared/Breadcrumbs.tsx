import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  const muted = light ? "text-white/70 hover:text-white" : "hover:text-aqua-deep text-gray-600";
  const current = light ? "text-white font-medium" : "text-forest font-medium";
  const sep = light ? "text-white/40" : "text-gray-400";

  return (
    <nav aria-label="Brotkrumen" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 ? <span className={sep}>/</span> : null}
            {item.href ? (
              <Link href={item.href} className={muted}>
                {item.label}
              </Link>
            ) : (
              <span className={current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
