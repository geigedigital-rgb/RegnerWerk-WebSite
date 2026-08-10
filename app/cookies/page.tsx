import Link from "next/link";
import { CookieControls } from "@/components/shared/CookieControls";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { legalEntity } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie-Einstellungen",
  description:
    "Cookie- und Einwilligungseinstellungen der RegnerWerk-Website.",
  path: "/cookies/",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        h1="Cookie-Einstellungen"
        lead="Steuern Sie, welche optionalen Technologien auf der RegnerWerk-Website genutzt werden dürfen."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Cookies" },
        ]}
      />
      <section className="bg-white py-14">
        <Container className="max-w-3xl space-y-6 text-gray-600">
          <p className="text-sm leading-relaxed">
            Verantwortliche Stelle: {legalEntity.companyName} (
            {legalEntity.companyNumber}). Details:{" "}
            <Link href="/datenschutz/" className="text-aqua-deep underline">
              Datenschutzerklärung
            </Link>{" "}
            und{" "}
            <Link href="/impressum/" className="text-aqua-deep underline">
              Impressum
            </Link>
            .
          </p>

          <div className="rounded-3xl border border-gray-100 p-6">
            <h2 className="font-bold text-forest">Notwendig (immer aktiv)</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Erforderlich für grundlegende Funktionen: Auslieferung der Seite,
              Sicherheit und Speicherung Ihrer Einwilligungsentscheidung
              (Local Storage). Ohne diese Speicherung müssten wir Sie bei jedem
              Besuch erneut fragen.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Rechtsgrundlage: berechtigtes Interesse / gesetzliche Erlaubnis für
              unbedingt erforderliche Speicherungen.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 p-6">
            <h2 className="font-bold text-forest">Analyse (nur mit Opt-in)</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Hilft zu verstehen, wie die Website genutzt wird (z. B. Klicks auf
              „Garten berechnen“, Formularstart/-absenden, Telefonklicks,
              Projektaufrufe). Wird erst nach Ihrer Zustimmung aktiviert.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Rechtsgrundlage: Einwilligung. Widerruf jederzeit über die Buttons
              unten oder durch Löschen der Website-Daten im Browser.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 p-6">
            <h2 className="font-bold text-forest">Marketing</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Derzeit sind keine Marketing-/Retargeting-Cookies aktiv. Sollten
              solche Tools später eingesetzt werden, erscheinen sie hier und
              werden nur nach gesonderter Einwilligung geladen.
            </p>
          </div>

          <CookieControls />

          <p className="text-sm">
            Einwilligungen werden lokal in Ihrem Browser gespeichert – nicht als
            globales Tracking-Profil. Nach dem Widerruf werden optionale
            Analysefunktionen nicht mehr ausgelöst.
          </p>
        </Container>
      </section>
    </>
  );
}
