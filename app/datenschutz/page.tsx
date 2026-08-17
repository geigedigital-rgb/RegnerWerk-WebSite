import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { legalEntity, legalNoticeDissolved } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Datenschutz",
  description: `Datenschutzerklärung für ${legalEntity.brandName} – Informationen zur Verarbeitung personenbezogener Daten.`,
  path: "/datenschutz/",
});

export default function DatenschutzPage() {
  const addr = legalEntity.registeredOffice;

  return (
    <>
      <PageHero
        h1="Datenschutz"
        lead="Informationen zur Verarbeitung personenbezogener Daten beim Besuch und bei Anfragen über diese Website."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Datenschutz" },
        ]}
      />
      <section className="bg-white py-14">
        <Container className="max-w-3xl space-y-8 text-gray-600 leading-relaxed">
          <aside className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-forest">
            <p className="font-semibold">{legalNoticeDissolved.title}</p>
            <p className="mt-2">{legalNoticeDissolved.body}</p>
          </aside>

          <div>
            <h2 className="text-xl font-bold text-forest">
              1. Verantwortliche Stelle
            </h2>
            <p className="mt-3">
              Verantwortliche Stelle im Sinne der DSGVO (soweit anwendbar) bzw.
              vergleichbarer Vorschriften:
            </p>
            <p className="mt-3 font-semibold text-forest">
              {legalEntity.companyName}
            </p>
            <p>
              Company number {legalEntity.companyNumber}
              <br />
              {addr.line1}, {addr.line2}
              <br />
              {addr.postalCode} {addr.city}, {addr.country}
            </p>
            <p className="mt-3">
              E-Mail:{" "}
              <a
                className="text-aqua-deep underline"
                href={`mailto:${legalEntity.contactEmail}`}
              >
                {legalEntity.contactEmail}
              </a>
              <br />
              Telefon: {legalEntity.contactPhone}
              <br />
              Vertretung: {legalEntity.director.name} (Director)
            </p>
            <p className="mt-3 text-sm">
              Markenauftritt: {legalEntity.brandName} unter {siteUrl}. Register:{" "}
              <a
                href={legalEntity.registerUrl}
                className="text-aqua-deep underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Companies House
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              2. Grundsätze der Verarbeitung
            </h2>
            <p className="mt-3">
              Wir verarbeiten personenbezogene Daten nur, soweit dies für den
              Betrieb der Website, die Beantwortung von Anfragen, die
              Vorbereitung von Angeboten oder gesetzliche Pflichten erforderlich
              ist – oder soweit Sie eingewilligt haben. Wir erheben keine Daten
              „auf Vorrat“ über das Notwendige hinaus.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              3. Hosting, Server-Logs und Sicherheit
            </h2>
            <p className="mt-3">
              Beim Aufruf der Website können technisch erforderliche Daten
              verarbeitet werden (z. B. IP-Adresse in verkürzter/anonymisierter
              Form soweit möglich, Datum/Uhrzeit, angeforderte Ressource,
              User-Agent, Referrer). Zweck: Auslieferung, Stabilität,
              Missbrauchserkennung und Sicherheit. Rechtsgrundlage: berechtigtes
              Interesse an sicherem Betrieb (Art. 6 Abs. 1 lit. f DSGVO), soweit
              anwendbar.
            </p>
            <p className="mt-3">
              Hosting-/CDN-Dienstleister können als Auftragsverarbeiter tätig
              sein. Verträge zur Auftragsverarbeitung werden nachgezogen, sobald
              der Produktivhost feststeht. Speicherdauer von Logs ist auf das
              Erforderliche begrenzt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              4. Kontaktformular, E-Mail und Telefon
            </h2>
            <p className="mt-3">
              Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren,
              verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name,
              E-Mail, optional Telefon, PLZ/Ort, Art des Gartens, Nachricht,
              hochgeladene Fotos/Pläne, Plandaten aus dem Konfigurator), um Ihre
              Anfrage zu bearbeiten, Sie zu kontaktieren und – falls gewünscht –
              ein Angebot vorzubereiten. Der Download eines unverbindlichen
              PDF-Plans allein begründet keinen Vertrag.
            </p>
            <p className="mt-3">
              Rechtsgrundlagen: Vertragserfüllung bzw. vorvertragliche Maßnahmen
              (Art. 6 Abs. 1 lit. b DSGVO) und/oder berechtigtes Interesse an
              Kommunikation (Art. 6 Abs. 1 lit. f DSGVO); Einwilligung, soweit Sie
              sie ausdrücklich erteilen (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p className="mt-3">
              Speicherdauer: für die Dauer der Bearbeitung und danach gemäß
              gesetzlichen Aufbewahrungsfristen bzw. bis zum Wegfall des Zwecks;
              bei Einwilligung bis zum Widerruf, soweit keine anderen Fristen
              entgegenstehen.
            </p>
            <p className="mt-3 text-sm">
              Hinweis zu Uploads: Übermitteln Sie keine sensiblen Daten Dritter
              ohne Befugnis. Inhalte, die Rechte Dritter verletzen, dürfen nicht
              hochgeladen werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              5. KI-gestützte Telefonie und Nachrichten
            </h2>
            <p className="mt-3">
              Zur Bearbeitung von Anfragen können wir Sie per E-Mail, Telefon
              oder Nachricht kontaktieren. Das umfasst auch, dass wir Sie
              anrufen, Anrufe entgegennehmen und Gespräche führen. Dabei können
              KI-gestützte Systeme eingesetzt werden (z.&nbsp;B. Sprachassistent,
              Transkriptionshilfen, vorbereitete Antworten). Eine ausschließlich
              automatisierte Entscheidung mit Rechtswirkung im Sinne von Art. 22
              DSGVO findet nicht statt; Angebote und Verträge prüft ein Mensch.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Ihre Einwilligung im Formular (Art. 6 Abs. 1 lit. a
              DSGVO) sowie – soweit einschlägig – vorvertragliche Maßnahmen (Art. 6
              Abs. 1 lit. b DSGVO). Widerruf der Einwilligung jederzeit mit
              Wirkung für die Zukunft (z.&nbsp;B. an {legalEntity.contactEmail}).
              Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin
              erfolgten Verarbeitung.
            </p>
            <p className="mt-3 text-sm">
              Telefonate können je nach technischer Einrichtung bei
              Dienstleistern verarbeitet werden. Eine dauerhafte
              Gesprächsaufzeichnung erfolgt nur, soweit dies gesondert
              kenntlich gemacht und rechtlich zulässig ist.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              6. Online-Rechner / Konfigurator
            </h2>
            <p className="mt-3">
              Der Online-Rechner kann Eingaben zur vorläufigen Einschätzung
              verarbeiten. Ergebnisse und PDF-Pläne sind unverbindlich. Name,
              E-Mail und optional Telefon werden erst übermittelt, wenn Sie das
              Formular absenden und der Datenschutzerklärung zustimmen. Läuft
              der Rechner auf einer anderen Domain, gilt diese Erklärung
              gleichwohl für die dort erhobenen Kontaktdaten, soweit
              RegnerWerk Verantwortliche ist.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              7. Cookies und Einwilligung
            </h2>
            <p className="mt-3">
              Notwendige Cookies/Speicherungen (z. B. Speicherung Ihrer
              Cookie-Entscheidung) setzen wir ohne Einwilligung, soweit
              erforderlich. Analyse- und vergleichbare nicht notwendige
              Technologien laden wir nur nach Opt-in. Details und Steuerung:{" "}
              <Link href="/cookies/" className="text-aqua-deep underline">
                Cookie-Einstellungen
              </Link>
              .
            </p>
            <p className="mt-3">
              Rechtsgrundlage für nicht notwendige Cookies: Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO / § 25 TTDSG soweit anwendbar). Widerruf jederzeit
              mit Wirkung für die Zukunft über die Cookie-Einstellungen bzw. durch
              Löschen der lokalen Speicherung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">8. Analyse-Events</h2>
            <p className="mt-3">
              Nach Einwilligung können Ereignisse wie Klicks auf „Garten
              berechnen“, Formularstart/-absenden, Telefonklicks oder
              Projektaufrufe erfasst werden, um die Website zu verbessern. Ohne
              Einwilligung werden diese Analyse-Events nicht aktiviert.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              9. Empfänger und Auftragsverarbeitung
            </h2>
            <p className="mt-3">
              Empfänger können sein: Hosting-/E-Mail-/Formular-Dienstleister,
              Messenger zur internen Entgegennahme von Anfragen (z.&nbsp;B.
              Telegram), Sprach-/KI-Dienstleister für Telefonie, ggf. Fachpartner
              nur soweit zur Anfragebearbeitung erforderlich und rechtlich
              zulässig. Eine Weitergabe zu Werbezwecken Dritter ohne
              Rechtsgrundlage findet nicht statt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              10. Drittlandtransfers
            </h2>
            <p className="mt-3">
              Soweit Tools oder Hosting Daten außerhalb des EWR verarbeiten,
              erfolgt dies nur mit geeigneten Garantien (z. B. Angemessenheitsbeschluss,
              Standardvertragsklauseln), soweit gesetzlich erforderlich. Die
              Gesellschaft ist im Vereinigten Königreich registriert; für
              Übermittlungen UK↔EU gelten die jeweils aktuellen Regelungen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">11. Ihre Rechte</h2>
            <p className="mt-3">
              Soweit die DSGVO anwendbar ist, stehen Ihnen insbesondere zu:
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit, Widerspruch gegen Verarbeitungen auf Basis
              berechtigter Interessen sowie Widerruf erteilter Einwilligungen.
            </p>
            <p className="mt-3">
              Außerdem besteht ein Beschwerderecht bei einer Aufsichtsbehörde.{" "}
              {legalEntity.supervisoryAuthorityHint}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              12. Keine automatisierte Entscheidung
            </h2>
            <p className="mt-3">
              Es findet keine ausschließlich automatisierte Entscheidungsfindung
              einschließlich Profiling mit Rechtswirkung gemäß Art. 22 DSGVO
              statt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">13. Änderungen</h2>
            <p className="mt-3">
              Wir passen diese Erklärung an, wenn sich Technik, Recht oder
              Prozesse ändern. Es gilt die jeweils auf dieser Seite veröffentlichte
              Fassung.
            </p>
            <p className="mt-3 text-sm">
              Stand: August 2026. Entwurf zum Schutz und zur Transparenz – vor
              Produktivbetrieb anwaltlich prüfen lassen, insbesondere wegen des
              aufgelösten Gesellschaftsstatus.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
