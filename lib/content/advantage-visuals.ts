import { images } from "@/lib/content/media";

/** Visual depth for advantage pages — keyed by seo.path */
export const advantageVisuals: Record<
  string,
  {
    heroImage: string;
    heroImageAlt: string;
    band: { image: string; imageAlt: string; title: string; body: string };
  }
> = {
  "/schonender-einbau/": {
    heroImage: images.houseGarden,
    heroImageAlt: "Bestehender Garten vor der Nachrüstung",
    band: {
      image: images.trenchDoc,
      imageAlt: "Geschützte Arbeitsfläche im Garten",
      title: "Schutz ist Teil des Ablaufs",
      body: "Trassen, Abdeckungen und Wiederherstellung gehören zum Einbau – nicht als nachträglicher Zusatz.",
    },
  },
  "/bewaesserung-nachgemessen/": {
    heroImage: images.measurement,
    heroImageAlt: "Prüfung der Bewässerung nach dem Einbau",
    band: {
      image: images.lawn,
      imageAlt: "Rasen nach Einstellung der Anlage",
      title: "Einstellen statt nur Einschalten",
      body: "Nach dem Einbau prüfen wir die Funktion und justieren Zonen – damit der Plan im Garten ankommt.",
    },
  },
  "/bewaesserungsanlage-wasseranschluss-pruefen/": {
    heroImage: images.controller,
    heroImageAlt: "Prüfung des Wasseranschlusses",
    band: {
      image: images.process,
      imageAlt: "Planung auf Basis gemessener Parameter",
      title: "Zuerst messen, dann auslegen",
      body: "Druck und Durchfluss bestimmen, was die Anlage sinnvoll leisten kann – vor dem ersten Spatenstich.",
    },
  },
  "/erste-saison-betreuung/": {
    heroImage: images.lawn,
    heroImageAlt: "Garten in der ersten Bewässerungssaison",
    band: {
      image: images.teamWork,
      imageAlt: "Nachjustierung vor Ort",
      title: "Installiert ist erst der Anfang",
      body: "In der ersten Saison feinjustieren wir im vereinbarten Rahmen – ohne falsche Erwartung unbegrenzter Einsätze.",
    },
  },
  "/digitaler-anlagenpass/": {
    heroImage: images.trenchDoc,
    heroImageAlt: "Dokumentation der Leitungsverläufe",
    band: {
      image: images.installWork,
      imageAlt: "Unterirdische Verläufe vor dem Verfüllen",
      title: "Nicht raten, was unter dem Rasen liegt",
      body: "Wichtige Abschnitte, Ventile und Einstellungen bleiben nachvollziehbar dokumentiert.",
    },
  },
  "/wasserverbrauch-leckagekontrolle/": {
    heroImage: images.controller,
    heroImageAlt: "Steuerung und Verbrauchskontrolle",
    band: {
      image: images.measurement,
      imageAlt: "Kontrolle der Bewässerungszonen",
      title: "Verbrauch nachvollziehbar halten",
      body: "Mit korrekter Messtechnik und klaren Zonen wird Auffälligkeiten früher nachgegangen – ohne erfundenen Sparversprechen.",
    },
  },
  "/festpreis/": {
    heroImage: images.process,
    heroImageAlt: "Abstimmung von Leistung und Preis",
    band: {
      image: images.houseGarden,
      imageAlt: "Garten vor Baubeginn",
      title: "Klarheit vor Baubeginn",
      body: "Umfang, Annahmen und Ausnahmen stehen im Angebot. Online bleibt Orientierung – verbindlich nach Prüfung.",
    },
  },
  "/wartung-winterservice/": {
    heroImage: images.winter,
    heroImageAlt: "Garten in der kalten Jahreszeit",
    band: {
      image: images.controller,
      imageAlt: "Service an der Bewässerungsanlage",
      title: "Service klar vom Einbau trennen",
      body: "Winterservice und wiederkehrende Wartung sind eigene Leistungen, sofern nicht ausdrücklich vereinbart.",
    },
  },
};
