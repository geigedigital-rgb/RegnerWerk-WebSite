import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Anfrage gesendet",
  description: "Ihre Anfrage bei RegnerWerk wurde übermittelt.",
  path: "/anfrage-gesendet/",
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <section className="bg-mint pt-32 pb-20">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-deep">
          Bestätigung
        </p>
        <h1 className="mt-4 text-3xl font-bold text-forest lg:text-4xl">
          Vielen Dank – Ihre Anfrage ist eingegangen
        </h1>
        <p className="mt-5 leading-relaxed text-gray-600">
          Wir melden uns in der Regel innerhalb von 1–2 Werktagen. Wenn Sie
          Fotos oder einen Plan nachreichen möchten, antworten Sie einfach auf
          unsere E-Mail.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="dark">
            Zur Startseite
          </Button>
          <Button href="/projekt-anfragen/" variant="primary">
            Weitere Anfrage
          </Button>
        </div>
      </Container>
    </section>
  );
}
