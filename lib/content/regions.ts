export type Bundesland = {
  slug: string;
  name: string;
  /** Unique intro for local page */
  intro: string;
  climateNote: string;
  gardenNote: string;
  seo: {
    title: string;
    description: string;
  };
};

export const bundeslaender: Bundesland[] = [
  {
    slug: "baden-wuerttemberg",
    name: "Baden-Württemberg",
    intro:
      "In Baden-Württemberg planen und installieren wir automatische Bewässerungsanlagen für private Gärten – von städtischen Reihenhausgärten bis zu größeren Grundstücken.",
    climateNote:
      "Trockene Sommerphasen und unterschiedliche Lagen vom Oberrhein bis zur Schwäbischen Alb machen eine zonenweise Planung besonders wichtig.",
    gardenNote:
      "Häufig gefragt: Rasenbewässerung, Tropf für Hecken und schonender Einbau in bestehende Anlagen.",
    seo: {
      title: "Bewässerungsanlage installieren in Baden-Württemberg",
      description:
        "Automatische Gartenbewässerung in Baden-Württemberg: planen, einbauen und einstellen lassen – deutschlandweiter Service von RegnerWerk.",
    },
  },
  {
    slug: "bayern",
    name: "Bayern",
    intro:
      "Für Gärten in Bayern liefern wir komplette Bewässerungssysteme: Prüfung des Wasseranschlusses, Planung der Zonen, Einbau und Nachjustierung.",
    climateNote:
      "Von Alpenvorland bis Franken wechseln Niederschlag und Boden – die Anlage wird an Fläche und verfügbares Wasser angepasst.",
    gardenNote:
      "Typisch sind kombinierte Lösungen aus Rasenzonen und Tropf für Beete oder Hecken.",
    seo: {
      title: "Bewässerungsanlage installieren in Bayern",
      description:
        "Gartenbewässerung in Bayern planen und installieren lassen. RegnerWerk: vom Wassercheck bis zur Nachjustierung.",
    },
  },
  {
    slug: "berlin",
    name: "Berlin",
    intro:
      "In Berlin und Umgebung rüsten wir private Gärten mit automatischer Bewässerung nach – klar geplant, sauber eingebaut.",
    climateNote:
      "Städtische Grundstücke und oft begrenzte Wasserressourcen erfordern eine präzise Zonen- und Laufzeitplanung.",
    gardenNote:
      "Viele Projekte betreffen bestehende Gärten mit Wegen, Terrassen und dichten Pflanzungen.",
    seo: {
      title: "Bewässerungsanlage installieren in Berlin",
      description:
        "Automatische Bewässerung für Privatgärten in Berlin: Planung, Einbau und Service durch RegnerWerk.",
    },
  },
  {
    slug: "brandenburg",
    name: "Brandenburg",
    intro:
      "In Brandenburg installieren wir Bewässerungsanlagen für Einfamilienhausgärten – mit Blick auf Fläche, Wasseranschluss und Pflegeaufwand.",
    climateNote:
      "Sandigere Böden und trockene Perioden begünstigen gezielte Bewässerung statt Gießen von Hand.",
    gardenNote:
      "Oft sinnvoll: getrennte Zonen für Rasen und Pflanzstreifen.",
    seo: {
      title: "Bewässerungsanlage installieren in Brandenburg",
      description:
        "Gartenbewässerung in Brandenburg planen und einbauen lassen – RegnerWerk deutschlandweit.",
    },
  },
  {
    slug: "bremen",
    name: "Bremen",
    intro:
      "Für Gärten in Bremen planen wir automatische Bewässerung passend zu Grundstück, Wasseranschluss und bestehenden Flächen.",
    climateNote:
      "Norddeutsche Wetterlagen mit wechselnden Niederschlägen erfordern steuerbare Zonen statt starrer Gießroutinen.",
    gardenNote:
      "Häufig: Rasenbewässerung und Tropf für Hecken oder Beete im bestehenden Garten.",
    seo: {
      title: "Bewässerungsanlage installieren in Bremen",
      description:
        "Automatische Gartenbewässerung in Bremen: planen, installieren und einstellen lassen mit RegnerWerk.",
    },
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    intro:
      "In Hamburg bieten wir Planung und Einbau automatischer Bewässerungsanlagen für private Gärten – von kompakt bis großzügig.",
    climateNote:
      "Feuchtere Phasen und trockene Sommerwochen wechseln: die Steuerung hilft, Wasser gezielt einzusetzen.",
    gardenNote:
      "Schonender Einbau ist bei fertigen Stadtgärten oft die zentrale Anforderung.",
    seo: {
      title: "Bewässerungsanlage installieren in Hamburg",
      description:
        "Bewässerungsanlage in Hamburg installieren lassen – Planung, Montage und Nachjustierung von RegnerWerk.",
    },
  },
  {
    slug: "hessen",
    name: "Hessen",
    intro:
      "Für Privatgärten in Hessen übernehmen wir Wassercheck, Zonenplanung, Einbau und Einstellung der Bewässerungsanlage.",
    climateNote:
      "Unterschiedliche Lagen von Rhein-Main bis Nordhessen erfordern individuelle Auslegung statt Standardpaketen.",
    gardenNote:
      "Rasen, Beete und Hecken werden bei Bedarf in getrennten Zonen geführt.",
    seo: {
      title: "Bewässerungsanlage installieren in Hessen",
      description:
        "Automatische Gartenbewässerung in Hessen planen und einbauen – RegnerWerk.",
    },
  },
  {
    slug: "mecklenburg-vorpommern",
    name: "Mecklenburg-Vorpommern",
    intro:
      "In Mecklenburg-Vorpommern installieren wir Bewässerungssysteme für private Gärten – robust geplant und klar dokumentiert.",
    climateNote:
      "Küstennahe und inlandige Lagen unterscheiden sich; die Anlage folgt gemessenem Wasser und Flächenbedarf.",
    gardenNote:
      "Oft gewünscht: zuverlässige Rasenbewässerung und einfache Bedienung.",
    seo: {
      title: "Bewässerungsanlage installieren in Mecklenburg-Vorpommern",
      description:
        "Gartenbewässerung in Mecklenburg-Vorpommern installieren lassen – mit RegnerWerk.",
    },
  },
  {
    slug: "niedersachsen",
    name: "Niedersachsen",
    intro:
      "In Niedersachsen planen und bauen wir automatische Bewässerungsanlagen für bestehende und neue Privatgärten.",
    climateNote:
      "Große Grundstücksvielfalt und wechselnde Böden machen die Prüfung des Wasseranschlusses zum Startpunkt.",
    gardenNote:
      "Typische Kombination: Rasenzonen plus Tropf für Hecken.",
    seo: {
      title: "Bewässerungsanlage installieren in Niedersachsen",
      description:
        "Bewässerungsanlage in Niedersachsen planen und installieren lassen – RegnerWerk deutschlandweit.",
    },
  },
  {
    slug: "nordrhein-westfalen",
    name: "Nordrhein-Westfalen",
    intro:
      "In Nordrhein-Westfalen realisieren wir automatische Gartenbewässerung für private Grundstücke – vom Wassercheck bis zur Nachjustierung.",
    climateNote:
      "Dichte Siedlungsräume und unterschiedliche Gartengrößen erfordern maßgeschneiderte Zonen statt Einheitslösungen.",
    gardenNote:
      "Besonders gefragt: Nachrüstung im bestehenden Garten mit Schutz von Rasen und Wegen.",
    seo: {
      title: "Bewässerungsanlage installieren in Nordrhein-Westfalen",
      description:
        "Automatische Bewässerung in NRW: planen, einbauen und betreuen lassen – RegnerWerk.",
    },
  },
  {
    slug: "rheinland-pfalz",
    name: "Rheinland-Pfalz",
    intro:
      "Für Gärten in Rheinland-Pfalz liefern wir komplette Bewässerungslösungen mit Planung, Montage und Einstellung.",
    climateNote:
      "Wärmere Lagen und trockene Sommerabschnitte machen automatische Zonensteuerung besonders sinnvoll.",
    gardenNote:
      "Häufig kombiniert: Rasenregner und Tropf für Weinbergnahe oder dichte Pflanzstreifen im Privatgarten.",
    seo: {
      title: "Bewässerungsanlage installieren in Rheinland-Pfalz",
      description:
        "Gartenbewässerung in Rheinland-Pfalz installieren lassen – RegnerWerk.",
    },
  },
  {
    slug: "saarland",
    name: "Saarland",
    intro:
      "Im Saarland planen wir Bewässerungsanlagen für private Gärten – übersichtlich im Ablauf und klar im Angebot vor Baubeginn.",
    climateNote:
      "Kompakte Grundstücke profitieren von präziser Flächenaufteilung und abgestimmten Laufzeiten.",
    gardenNote:
      "Schonender Einbau und nachvollziehbare Dokumentation der Leitungen stehen im Fokus.",
    seo: {
      title: "Bewässerungsanlage installieren im Saarland",
      description:
        "Automatische Gartenbewässerung im Saarland planen und einbauen – RegnerWerk.",
    },
  },
  {
    slug: "sachsen",
    name: "Sachsen",
    intro:
      "In Sachsen installieren wir automatische Bewässerung für Privatgärten – mit geprüftem Wasseranschluss und dokumentierter Planung.",
    climateNote:
      "Kontinentale Trockenphasen erfordern verlässliche Zonen statt manuellen Gießens.",
    gardenNote:
      "Rasenflächen und Pflanzbereiche werden getrennt geplant, wenn der Garten es erfordert.",
    seo: {
      title: "Bewässerungsanlage installieren in Sachsen",
      description:
        "Bewässerungsanlage in Sachsen installieren lassen – Planung und Einbau von RegnerWerk.",
    },
  },
  {
    slug: "sachsen-anhalt",
    name: "Sachsen-Anhalt",
    intro:
      "Für Gärten in Sachsen-Anhalt bieten wir Planung und Einbau automatischer Bewässerungssysteme.",
    climateNote:
      "Trockene Perioden und unterschiedliche Bodentypen machen die Auslegung nach gemessenem Durchfluss entscheidend.",
    gardenNote:
      "Ziel: gleichmäßige Versorgung ohne unnötigen Wasserverbrauch.",
    seo: {
      title: "Bewässerungsanlage installieren in Sachsen-Anhalt",
      description:
        "Gartenbewässerung in Sachsen-Anhalt planen und installieren – RegnerWerk.",
    },
  },
  {
    slug: "schleswig-holstein",
    name: "Schleswig-Holstein",
    intro:
      "In Schleswig-Holstein rüsten wir private Gärten mit automatischer Bewässerung aus – angepasst an Grundstück und Wasseranschluss.",
    climateNote:
      "Wechselhaftes norddeutsches Wetter spricht für steuerbare Bewässerung statt starrer Zeitpläne.",
    gardenNote:
      "Häufig: Rasenbewässerung und Service für Winter und Saisonstart.",
    seo: {
      title: "Bewässerungsanlage installieren in Schleswig-Holstein",
      description:
        "Automatische Bewässerung in Schleswig-Holstein installieren lassen – RegnerWerk.",
    },
  },
  {
    slug: "thueringen",
    name: "Thüringen",
    intro:
      "In Thüringen planen und installieren wir Bewässerungsanlagen für private Gärten – vom Check bis zur Einstellung.",
    climateNote:
      "Lagenunterschiede und trockene Abschnitte erfordern eine Anlage, die zum verfügbaren Wasser passt.",
    gardenNote:
      "Wir trennen Zonen sinnvoll und dokumentieren, was unter dem Rasen verläuft.",
    seo: {
      title: "Bewässerungsanlage installieren in Thüringen",
      description:
        "Bewässerungsanlage in Thüringen planen und einbauen lassen – RegnerWerk.",
    },
  },
];

export function getBundesland(slug: string) {
  return bundeslaender.find((b) => b.slug === slug);
}

export function landInstallPath(slug: string) {
  return `/${slug}/bewaesserungsanlage-installieren/`;
}
