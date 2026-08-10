import { Container } from "@/components/ui/Container";

export function ProofBar({ items }: { items: string[] }) {
  return (
    <section className="border-b border-gray-100 bg-mint py-5">
      <Container>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-semibold text-forest"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-lime" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
