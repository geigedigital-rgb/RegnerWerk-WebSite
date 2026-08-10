import { ContentIcon, type RwIcon } from "@/components/shared/ContentIcon";

export function ChecklistBlock({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: { text: string; icon: RwIcon }[];
}) {
  return (
    <div>
      <div className="rw-measure">
        <p className="rw-eyebrow">Vorbereitung</p>
        <h2 className="mt-1.5 text-[clamp(1.35rem,2.2vw,1.75rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
          {title}
        </h2>
        {intro ? (
          <p className="mt-2 text-[1.0625rem] leading-[1.7] text-gray-600">
            {intro}
          </p>
        ) : null}
        <p className="mt-2 text-xs text-gray-400">{items.length} Punkte</p>
      </div>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.text}
            className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white px-3.5 py-3"
          >
            <ContentIcon
              name={item.icon}
              className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep"
            />
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-0.5 block text-sm font-medium leading-snug text-forest">
                {item.text}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
