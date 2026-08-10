import { images } from "@/lib/content/media";
import { calcHref } from "@/lib/content/nav";

export const homeSeo = {
  title: "Automatische Gartenbewässerung planen und einbauen",
  description:
    "RegnerWerk plant, installiert und betreut Bewässerungsanlagen für private Gärten in Deutschland – vom Wassercheck bis zur Nachjustierung. Klarer Ablauf, schonender Einbau, Preis vor Baubeginn.",
  path: "/",
};

export const homeHero = {
  h1Lead: "Automatische Gartenbewässerung.",
  h1Bold: "Professionell geplant und eingebaut.",
  subtitle:
    "RegnerWerk plant, installiert und betreut Bewässerungsanlagen für private Gärten in Deutschland – vom Wassercheck bis zur Nachjustierung.",
  primaryCta: { label: "Garten berechnen", href: calcHref },
  secondaryCta: { label: "Projekte ansehen", href: "/projekte/" },
  image: images.heroGarden,
  imageAlt: "Privater Garten mit unsichtbarer Bewässerung",
};

export const proofItems = [
  "Wasseranschluss geprüft",
  "Schonender Einbau",
  "Klarer Preis vor Baubeginn",
  "Betreuung nach der Installation",
];

export const homeServices = [
  {
    title: "Rasenbewässerung",
    description:
      "Zonen und Überdeckung so geplant, dass der Rasen gleichmäßig versorgt wird – ohne Ratespiel an heißen Tagen.",
    href: "/rasenbewaesserung-installieren/",
    image: images.planungBuero,
  },
  {
    title: "Bewährte Komponenten",
    description:
      "Wir planen mit etablierten Bewässerungssystemen – u. a. Hunter und Rain Bird – und verantworten Auslegung, Einbau und Einstellung als Gesamtsystem.",
    href: "/bewaesserungskomponenten/",
    image: images.components,
  },
  {
    title: "Steuerung",
    description:
      "Bedienung, die im Alltag funktioniert: Zeiten, Wetteranpassung und nachvollziehbare Zonen.",
    href: "/bewaesserungssteuerung/",
    image: images.steuerung,
  },
  {
    title: "Planung",
    description:
      "Zuerst Wasser und Grundstück, dann der Plan: Zonen und Überdeckung stehen fest, bevor der Rasen geöffnet wird.",
    href: "/bewaesserungsanlage-installieren-lassen/",
    image: images.process,
  },
  {
    title: "Montage",
    description:
      "Einbau mit Respekt vor dem bestehenden Garten: schützen, öffnen, dokumentieren, wiederherstellen.",
    href: "/bewaesserung-bestehender-garten/",
    image: images.trenchDoc,
  },
  {
    title: "Start und Einstellung",
    description:
      "Einschalten reicht nicht. Wir stellen ein, prüfen und justieren nach – im vereinbarten Rahmen.",
    href: "/service/",
    image: images.startEinstellung,
  },
];

export const existingGardenBlock = {
  eyebrow: "Bestehende Gärten",
  title: "Der Garten bleibt. Die Bewässerung kommt.",
  body: "Viele Eigentümer zögern wegen Rasen, Wegen und Beeten. Wir planen Leitungswege vor dem Öffnen, schützen Flächen während der Arbeit und stellen den Zustand danach wieder her – nachvollziehbar und ohne Show.",
  href: "/bewaesserung-bestehender-garten/",
  cta: "Nachrüstung ansehen",
  image: images.houseGarden,
};

export const homeProcess = [
  {
    number: "01",
    title: "Garten berechnen",
    description:
      "Erste Orientierung zu Fläche und Aufwand – vorläufig, verständlich, ohne Festpreis-Illusion.",
  },
  {
    number: "02",
    title: "Wasseranschluss und Grundstück prüfen",
    description:
      "Druck, Durchfluss und Zugang vor Ort. Darauf baut die sinnvolle Auslegung auf.",
  },
  {
    number: "03",
    title: "Anlage planen",
    description:
      "Zonen für Rasen und Pflanzflächen, Trassenführung und passende Komponenten.",
  },
  {
    number: "04",
    title: "Angebot bestätigen",
    description:
      "Umfang, Annahmen und Preis vor Baubeginn – nachvollziehbar festgehalten.",
  },
  {
    number: "05",
    title: "System einbauen",
    description:
      "Schonender Einbau, Schutz der Flächen und Dokumentation wichtiger Leitungsabschnitte.",
  },
  {
    number: "06",
    title: "Einstellen und nachjustieren",
    description:
      "Inbetriebnahme, Funktionsprüfung und Feinschliff in der ersten Saison.",
  },
];

export const homeCostTeaser = {
  eyebrow: "Kosten",
  title: "Was kostet eine Bewässerungsanlage?",
  body: "Der Preis folgt Fläche, Form, Zonenanzahl, Wasserparametern und Einbauaufwand – nicht einem pauschalen Werbeversprechen. Online erhalten Sie eine Orientierung. Verbindlich wird der Preis nach Prüfung von Wasser und Grundstück.",
  examples: [
    {
      label: "Kompakter Rasengarten",
      range: "ab ca. 2.490 €",
      note: "Orientierung",
    },
    {
      label: "Rasen + Hecke oder Beete",
      range: "häufig 3.500–6.500 €",
      note: "je nach Zonen",
    },
    {
      label: "Größerer Mischgarten",
      range: "individuell",
      note: "nach Aufmaß",
    },
  ],
  href: "/bewaesserungsanlage-kosten/",
  cta: "Kosten verstehen",
};

export const homeApplications = {
  eyebrow: "Anwendungen",
  title: "Individuelle Bewässerung – für die Flächen, die bei Ihnen grünen sollen",
  description:
    "RegnerWerk plant und installiert automatische Bewässerung für private Grundstücke in Deutschland. Je Fläche andere Zonen und Technik – vom Rasen bis zur Nachrüstung im bestehenden Garten.",
  items: [
    {
      title: "Rasen",
      description:
        "Gleichmäßige Versorgung durch geplante Zonen und Überdeckung – statt trockener Stellen und Schlauch-Alltag.",
      href: "/rasenbewaesserung-installieren/",
      image: images.lawnAnwendung,
      imageAlt: "Privater Rasen mit Versenkregnern",
    },
    {
      title: "Gärten mit Beeten und Hecken",
      description:
        "Tropf an der Wurzel, Regner für den Rasen – getrennte Laufzeiten, trockenere Wege.",
      href: "/tropfbewaesserung-hecken-beete/",
      image: images.bedsHecken,
      imageAlt: "Beete und Hecke im Privatgarten",
    },
    {
      title: "Sport- und Spielrasen",
      description:
        "Privater Bolzplatz, Tennisrasen oder Spielwiese: belastbare, gleichmäßige Bewässerung nach Zonen.",
      href: "/rasenbewaesserung-installieren/",
      image: images.sportSpielrasen,
      imageAlt: "Gleichmäßig versorgter Sportrasen im Privatgarten",
    },
  ],
};

export const homeRegion = {
  eyebrow: "Einsatzgebiet",
  title: "Bewässerungsanlagen in ganz Deutschland",
  body: "Wir arbeiten deutschlandweit für private Gärten. Zu jedem Bundesland gibt es eine eigene Informationsseite mit regionalem Kontext – ohne künstliche Stadt-Massenseiten.",
  href: "/einsatzgebiet/",
  cta: "Einsatzgebiet ansehen",
};

export const homeFinalCta = {
  title: "Wie viel kostet eine Bewässerungsanlage für Ihren Garten?",
  cta: "Garten jetzt berechnen",
  href: calcHref,
  image: images.finalCta,
};
