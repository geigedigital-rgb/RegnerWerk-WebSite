export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
