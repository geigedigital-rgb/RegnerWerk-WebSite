import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { calcHref } from "@/lib/content/nav";

export default function NotFound() {
  return (
    <section className="bg-ice pt-32 pb-20">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-deep">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-forest">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-gray-600">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="dark">
            Zur Startseite
          </Button>
          <Button href={calcHref} variant="primary">
            Garten berechnen
          </Button>
        </div>
      </Container>
    </section>
  );
}
