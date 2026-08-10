import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { legalEntity, legalNoticeDissolved } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung für ${legalEntity.brandName} / ${legalEntity.companyName}.`,
  path: "/impressum/",
});

export default function ImpressumPage() {
  const addr = legalEntity.registeredOffice;

  return (
    <>
      <PageHero
        h1="Impressum"
        lead="Anbieterkennzeichnung und rechtliche Hinweise zur Website RegnerWerk."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Impressum" },
        ]}
      />
      <section className="bg-white py-14">
        <Container className="max-w-3xl space-y-8 text-gray-600 leading-relaxed">
          <aside className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-forest">
            <p className="font-semibold">{legalNoticeDissolved.title}</p>
            <p className="mt-2">{legalNoticeDissolved.body}</p>
            <p className="mt-2">
              Registereintrag:{" "}
              <a
                href={legalEntity.registerUrl}
                className="text-aqua-deep underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Companies House {legalEntity.companyNumber}
              </a>
            </p>
          </aside>

          <div>
            <h2 className="text-xl font-bold text-forest">
              Angaben gemäß Anbieterkennzeichnung
            </h2>
            <p className="mt-3">
              Die Marke <strong>{legalEntity.brandName}</strong> wird betrieben
              bzw. bereitgestellt unter Bezug auf:
            </p>
            <p className="mt-4 font-semibold text-forest">
              {legalEntity.companyName}
            </p>
            <p>{legalEntity.companyType}</p>
            <p className="mt-3">
              {addr.line1}
              <br />
              {addr.line2}
              <br />
              {addr.postalCode} {addr.city}
              <br />
              {addr.country}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">Register</h2>
            <ul className="mt-3 space-y-1">
              <li>Register: {legalEntity.register}</li>
              <li>Company number: {legalEntity.companyNumber}</li>
              <li>Incorporated on: {legalEntity.incorporatedOn}</li>
              <li>Status (Companies House): {legalEntity.status}</li>
              <li>Dissolved on: {legalEntity.dissolvedOn}</li>
              <li>
                SIC: {legalEntity.sic.join("; ")}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              Vertretungsberechtigte Person
            </h2>
            <p className="mt-3">
              Director: {legalEntity.director.name}
              <br />
              Secretary: {legalEntity.secretary.name}
              <br />
              Bestellt am: {legalEntity.director.appointedOn}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">Kontakt</h2>
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
            </p>
            <p className="mt-2 text-sm">
              Bitte beachten Sie: Die oben genannte Companies-House-Default-Adresse
              ist keine ladungsfähige Geschäftsadresse im Sinne typischer
              deutscher Verbrauchererwartungen. Für den Produktivbetrieb ist eine
              erreichbare ladungsfähige Anschrift der aktiven Anbieterin
              nachzutragen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">Umsatzsteuer</h2>
            <p className="mt-3">
              {legalEntity.vatId
                ? `USt-IdNr.: ${legalEntity.vatId}`
                : "Eine Umsatzsteuer-Identifikationsnummer liegt derzeit nicht vor bzw. wird nachgetragen, sobald sie erteilt und freigegeben ist. Es werden keine erfundenen Steuerkennzeichen ausgewiesen."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-3">
              Verantwortlich für journalistische bzw. redaktionelle Inhalte dieser
              Website im Sinne einschlägiger Vorschriften:{" "}
              {legalEntity.director.name}, erreichbar über{" "}
              {legalEntity.contactEmail}.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              Hinweis zu Leistungen und Online-Rechner
            </h2>
            <p className="mt-3">
              Darstellungen auf {siteUrl} (inkl. Preisorientierungen und
              Online-Rechner) sind unverbindliche Informationen und stellen kein
              verbindliches Angebot im Rechtssinne dar. Verbindliche Preise,
              Leistungsumfang und Termine entstehen erst durch ein ausdrücklich
              bestätigtes Angebot nach Prüfung von Wasseranschluss und Objekt –
              und nur durch eine rechtlich handlungsfähige Anbieterin.
            </p>
            <p className="mt-3">
              Der Konfigurator kann auf einer separaten Domain betrieben werden.
              Für dessen Nutzung gelten zusätzlich die dort ausgewiesenen
              Hinweise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">Haftungsausschluss</h2>
            <h3 className="mt-4 font-semibold text-forest">Inhalte</h3>
            <p className="mt-2">
              Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für
              Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine
              Gewähr, soweit gesetzlich zulässig. Verpflichtungen entstehen erst
              durch gesonderte vertragliche Vereinbarung.
            </p>
            <h3 className="mt-4 font-semibold text-forest">
              Garten-, Pflanzen- und Wasserergebnisse
            </h3>
            <p className="mt-2">
              Aussagen zu Bewässerung, Verteilung oder Pflege ersetzen keine
              individuelle Objektprüfung. Wir garantieren keinen dauerhaft
              grünen Rasen, keinen bestimmten Wasser-Sparprozentsatz und keinen
              biologischen Erfolg unabhängig von Boden, Wetter und Pflege.
            </p>
            <h3 className="mt-4 font-semibold text-forest">Links</h3>
            <p className="mt-2">
              Bei direkten oder indirekten Verweisen auf fremde Websites liegt
              die Verantwortung beim jeweiligen Anbieter. Zum Zeitpunkt der
              Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Eine
              permanente Kontrolle ohne konkrete Anhaltspunkte ist nicht zumutbar.
              Bei Bekanntwerden von Rechtsverletzungen werden Links entfernt.
            </p>
            <h3 className="mt-4 font-semibold text-forest">
              Urheber- und Kennzeichenrecht
            </h3>
            <p className="mt-2">
              Inhalte, Texte, Fotos, Grafiken und das Branding {legalEntity.brandName}{" "}
              sind urheberrechtlich bzw. kennzeichenrechtlich geschützt, soweit
              nicht anders gekennzeichnet. Platzhalterbilder Dritter unterliegen
              deren Lizenzbedingungen. Vervielfältigung oder Nutzung außerhalb
              der gesetzlich erlaubten Fälle bedarf vorheriger Zustimmung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">Streitbeilegung</h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                className="text-aqua-deep underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht verpflichtet und derzeit nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen, soweit keine gesetzliche Pflicht besteht.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">Weitere Hinweise</h2>
            <p className="mt-3">
              Datenschutz: siehe{" "}
              <Link href="/datenschutz/" className="text-aqua-deep underline">
                Datenschutzerklärung
              </Link>
              . Cookies: siehe{" "}
              <Link href="/cookies/" className="text-aqua-deep underline">
                Cookie-Einstellungen
              </Link>
              . Nutzungsbedingungen der Website: siehe{" "}
              <Link href="/nutzungsbedingungen/" className="text-aqua-deep underline">
                Nutzungsbedingungen
              </Link>
              .
            </p>
            <p className="mt-3 text-sm">
              Dieser Text ist ein Schutz- und Strukturentwurf auf Basis
              öffentlicher Registerdaten. Er ersetzt keine anwaltliche Beratung.
              Vor Go-Live: aktive Gesellschaft, ladungsfähige Anschrift,
              Steuerdaten und Freigabe prüfen lassen.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
