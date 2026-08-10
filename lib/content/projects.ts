export type Project = {
  slug: string;
  title: string;
  ort: string;
  region: string;
  gardenType: string;
  areaM2: number;
  zones: number;
  task: string;
  image: string;
  imageAlt: string;
  gallery?: { src: string; alt: string }[];
  placeholder: true;
  waterSource?: string;
  constraints?: string[];
  solution?: string;
  installed?: string[];
  duration?: string;
  aftercare?: string;
  body?: string[];
};

export const projects: Project[] = [
  {
    slug: "koeln-rasen-hecke",
    title: "Bewässerungsanlage in Köln: 220 m² Garten mit 5 Zonen",
    ort: "Köln",
    region: "Nordrhein-Westfalen",
    gardenType: "Bestehender Privatgarten",
    areaM2: 220,
    zones: 5,
    task: "Rasen und Hecke automatisch bewässern – ohne den bestehenden Garten zu zerstören.",
    image: "/images/projects/koeln-rasen-hecke-01.webp",
    imageAlt: "Privater Garten in Köln nach dem Einbau der Bewässerung",
    gallery: [
      {
        src: "/images/projects/koeln-rasen-hecke-02.webp",
        alt: "Weitere Ansicht des Gartens in Köln nach dem Einbau",
      },
    ],
    placeholder: true,
    waterSource: "Hauswasseranschluss, Druck vor Ort geprüft",
    constraints: [
      "Vorhandene Wege und Beete",
      "Schmaler Seitengang",
      "Wunsch nach unsichtbaren Düsen im Rasen",
    ],
    solution:
      "Getrennte Zonen für Rasen und Hecke, schonende Trassenführung und Steuerung mit Wetteranpassung.",
    installed: [
      "Versenkregner für den Rasen",
      "Tropfleitung an der Hecke",
      "Ventilbox und Steuerung",
      "Dokumentation der Leitungsverläufe",
    ],
    duration: "Einbau über zwei Arbeitstage (Platzhalterbeispiel)",
    aftercare: "Einstellung nach dem Einbau und Nachjustierung in der ersten Saison",
    body: [
      "Der Garten war bereits angelegt. Ziel war eine vollautomatische Bewässerung mit klarer Trennung von Rasen und Pflanzflächen.",
      "Vor dem Einbau wurden Wasseranschluss und verfügbarer Durchfluss geprüft. Anschließend entstanden fünf Zonen mit abgestimmten Laufzeiten.",
      "Dieses Beispiel dient als Platzhalter-Fallstudie und wird durch freigegebene Projektdaten ersetzt.",
    ],
  },
  {
    slug: "hamburg-neubau-rasen",
    title: "Bewässerungsanlage in Hamburg: 180 m² Rasen mit 4 Zonen",
    ort: "Hamburg",
    region: "Hamburg",
    gardenType: "Neubau Privatgarten",
    areaM2: 180,
    zones: 4,
    task: "Gleichmäßige Rasenbewässerung für einen neuen Garten vor der Fertigstellung.",
    image: "/images/projects/hamburg-neubau-rasen-01.webp",
    imageAlt: "Neubau-Garten in Hamburg mit Rasenbewässerung",
    placeholder: true,
    waterSource: "Frischwasser, Parameter gemessen",
    constraints: ["Rechteckige Rasenfläche", "Terrasse als Hindernis"],
    solution:
      "Vier überlappende Rasenzonen, Steuerung vorbereitet für spätere Beet-Erweiterung.",
    installed: ["Versenkregner", "Unterirdische Leitungen", "Steuerung"],
    duration: "Ein Arbeitstag plus Einstellung",
    aftercare: "Feinjustierung nach der ersten Trockenphase",
    body: [
      "Beim Neubau ließ sich die Verlegung besonders sauber in die Flächenplanung integrieren.",
      "Platzhalterprojekt – Kennzahlen und Fotos werden durch reale Objekte ersetzt.",
    ],
  },
  {
    slug: "muenchen-beete-tropf",
    title: "Tropfbewässerung in München: Beete und Hecken, 3 Zonen",
    ort: "München",
    region: "Bayern",
    gardenType: "Beete und Hecken",
    areaM2: 95,
    zones: 3,
    task: "Gezielte Bewässerung für Pflanzflächen ohne nasse Wege und ohne Überbewässerung.",
    image: "/images/projects/muenchen-beete-tropf-01.webp",
    imageAlt: "Beete und Hecke in München mit Tropfbewässerung",
    placeholder: true,
    waterSource: "Hausanschluss mit Druckminderung",
    constraints: ["Enge Beetstreifen", "Natursteinwege"],
    solution: "Tropfzonen mit Filter und Druckregulierung, getrennte Laufzeiten.",
    installed: ["Tropfrohr", "Filter", "Druckregler", "Steuerung"],
    duration: "Ein Arbeitstag",
    aftercare: "Kontrolle nach dem Anwachsen der Saison",
    body: [
      "Statt flächiger Regner kamen Tropfleitungen zum Einsatz – passend zu Beeten und Hecke.",
      "Platzhalterbeispiel für die Projektstruktur auf der Website.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
