import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { legalEntity, legalNoticeDissolved } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Nutzungsbedingungen",
  description: `Nutzungsbedingungen der Website ${legalEntity.brandName}.`,
  path: "/nutzungsbedingungen/",
});

export default function NutzungsbedingungenPage() {
  return (
    <>
      <PageHero
        h1="Nutzungsbedingungen"
        lead="Regeln für die Nutzung dieser Website und unverbindlicher Online-Dienste – zum Schutz beider Seiten."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Nutzungsbedingungen" },
        ]}
      />
      <section className="bg-white py-14">
        <Container className="max-w-3xl space-y-8 text-gray-600 leading-relaxed">
          <aside className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-forest">
            <p className="font-semibold">{legalNoticeDissolved.title}</p>
            <p className="mt-2">{legalNoticeDissolved.body}</p>
          </aside>

          <div>
            <h2 className="text-xl font-bold text-forest">1. Geltungsbereich</h2>
            <p className="mt-3">
              Diese Nutzungsbedingungen gelten für den Besuch und die Nutzung der
              Website {siteUrl} (Marke {legalEntity.brandName}) sowie zugehöriger
              Online-Funktionen (z. B. Informationsseiten, Kontaktformular,
              vorläufiger Rechner/Handoff). Anbieterbezug:{" "}
              {legalEntity.companyName}, Nr. {legalEntity.companyNumber}.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">2. Kein Angebot</h2>
            <p className="mt-3">
              Inhalte, Preisorientierungen, Projektbeispiele und
              Online-Einschätzungen sind unverbindlich und stellen kein
              verbindliches Vertragsangebot dar. Ein Vertrag über Planung,
              Einbau oder Service kommt erst durch ausdrückliche Annahme eines
              konkreten Angebots zustande – und nur mit einer rechtlich
              handlungsfähigen Anbieterin.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              3. Online-Rechner und Konfigurator
            </h2>
            <p className="mt-3">
              Ergebnisse des Online-Rechners sind vorläufig. Sie ersetzen keine
              Prüfung von Wasseranschluss, Grundstück und Einbaubedingungen. Es
              wird kein Festpreis allein durch Online-Eingaben begründet.
              Fehlerhafte oder unvollständige Nutzereingaben können zu
              ungeeigneten Einschätzungen führen; daraus entstehen keine
              Schadensersatzansprüche, soweit gesetzlich zulässig.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">4. Anfragen</h2>
            <p className="mt-3">
              Mit dem Absenden einer Anfrage versichern Sie, wahrheitsgemäße
              Angaben zu machen und – bei Uploads – berechtigt zu sein, die
              Dateien zu übermitteln. Spam, rechtswidrige Inhalte und
              missbräuchliche Nutzung sind untersagt. Wir können Anfragen ohne
              Angabe von Gründen ablehnen oder unbeantwortet lassen, soweit
              keine gesetzliche Pflicht besteht.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              5. Leistungs- und Ergebnisgrenzen
            </h2>
            <p className="mt-3">
              Website-Texte beschreiben typische Abläufe. Konkrete Leistungen,
              Termine, Preise und Garantien ergeben sich ausschließlich aus dem
              individuellen Angebot bzw. Vertrag. Insbesondere werden nicht
              zugesichert: bestimmter Wasserverbrauch, bestimmter
              Pflanzenzustand, bestimmte Bauzeiten ohne Objektprüfung oder
              unbegrenzter kostenloser Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">6. Haftung</h2>
            <p className="mt-3">
              Für Vorsatz und grobe Fahrlässigkeit sowie bei Verletzung von Leben,
              Körper oder Gesundheit haften wir nach den gesetzlichen Vorschriften.
              Bei leichter Fahrlässigkeit haften wir – soweit gesetzlich zulässig –
              nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf
              den vorhersehbaren, typischen Schaden. Die Haftung für mittelbare
              Schäden und entgangenen Gewinn ist, soweit zulässig, ausgeschlossen.
              Die Haftung nach Produkthaftungsrecht bleibt unberührt.
            </p>
            <p className="mt-3">
              Für Inhalte und Verfügbarkeit der Website wird, soweit zulässig,
              keine ununterbrochene Fehlerfreiheit geschuldet.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">7. Geistiges Eigentum</h2>
            <p className="mt-3">
              Texte, Design, Marke {legalEntity.brandName} und übrige geschützte
              Inhalte dürfen ohne vorherige Zustimmung nicht außerhalb der
              gesetzlich erlaubten Fälle genutzt, kopiert oder verändert werden.
              Platzhaltermedien Dritter bleiben deren Rechte vorbehalten.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">8. Datenschutz</h2>
            <p className="mt-3">
              Es gilt die{" "}
              <Link href="/datenschutz/" className="text-aqua-deep underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              9. Änderungen und Salvatorisches
            </h2>
            <p className="mt-3">
              Wir können diese Bedingungen anpassen. Es gilt die zum Zeitpunkt
              der Nutzung veröffentlichte Fassung. Sollte eine Bestimmung
              unwirksam sein, bleibt der Rest wirksam.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">10. Recht / Forum</h2>
            <p className="mt-3">
              Soweit zulässig und soweit keine zwingenden Verbraucherschutzvorschriften
              entgegenstehen, gelten die Gesetze des Vereinigten Königreichs unter
              Berücksichtigung zwingender Vorschriften am Wohnsitz von
              Verbraucherinnen und Verbrauchern in der EU/dem EWR. Zwingende
              Verbraucherrechte bleiben unberührt.
            </p>
            <p className="mt-3 text-sm">
              Stand: August 2026. Schutzentwurf – vor Go-Live anwaltlich freigeben,
              insbesondere wegen Gesellschaftsstatus Dissolved.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
