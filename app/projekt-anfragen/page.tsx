import { ProjektAnfrageForm } from "@/components/forms/ProjektAnfrageForm";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projekt anfragen",
  description:
    "Unverbindlich Bewässerungsprojekt bei RegnerWerk anfragen – kurze Angaben reichen. Wir melden uns persönlich.",
  path: "/projekt-anfragen/",
});

export default function ProjektAnfragenPage() {
  return (
    <section className="bg-gradient-to-b from-mint via-ice to-white pb-20 pt-28 lg:pb-28 lg:pt-32">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <div>
            <p className="rw-eyebrow">Projekt anfragen</p>
            <h1 className="mt-3 text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
              Kurz beschreiben. Wir melden uns.
            </h1>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
              Der Online-Konfigurator ist gerade in Wartung. Mit wenigen Angaben
              können Sie uns Ihr Vorhaben schicken – unverbindlich, ohne
              Technik-Details.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-relaxed text-gray-600">
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                Name und Erreichbarkeit reichen zum Start
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                Fläche und Wünsche nur so genau, wie Sie möchten
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                Antwort in der Regel innerhalb von 1–2 Werktagen
              </li>
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-soft sm:p-8">
            <ProjektAnfrageForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
