export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-0 z-[100] -translate-y-[120%] rounded-full bg-lime px-5 py-3 text-sm font-semibold text-forest shadow-soft transition focus:translate-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
    >
      Zum Inhalt springen
    </a>
  );
}
