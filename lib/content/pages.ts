import { images } from "@/lib/content/media";
import { calcHref } from "@/lib/content/nav";
import type { RwIcon } from "@/components/shared/ContentIcon";

export type Faq = { question: string; answer: string };

export type CompareColumn = {
  title: string;
  image: string;
  imageAlt: string;
  tone?: "muted" | "accent";
  items: { text: string; icon: RwIcon }[];
};

export type ContentBlock =
  | { type: "text"; title: string; body: string }
  | { type: "prose"; title: string; paragraphs: string[] }
  | { type: "list"; title: string; intro?: string; items: string[] }
  | {
      type: "checklist";
      title: string;
      intro?: string;
      items: { text: string; icon: RwIcon }[];
    }
  | { type: "steps"; title: string; steps: { title: string; body: string }[] }
  | {
      type: "stageGallery";
      title: string;
      intro?: string;
      stages: {
        title: string;
        caption?: string;
        body?: string;
        image: string;
        imageAlt: string;
        number?: string;
      }[];
      focus?: {
        title: string;
        items: { title: string; body: string; icon: RwIcon }[];
      };
    }
  | {
      type: "cards";
      title: string;
      cards: { title: string; body: string; href?: string; icon?: RwIcon }[];
    }
  | {
      type: "compare";
      title: string;
      intro?: string;
      left: CompareColumn;
      right: CompareColumn;
    }
  | {
      type: "mistakes";
      title: string;
      intro?: string;
      items: { title: string; body: string }[];
    }
  | {
      type: "media";
      title: string;
      body: string;
      image: string;
      imageAlt: string;
      reverse?: boolean;
    }
  | {
      type: "ctaMedia";
      title: string;
      body: string;
      image: string;
      imageAlt: string;
      reverse?: boolean;
      primaryLabel: string;
      primaryHref: string;
      secondaryLabel?: string;
      lead: {
        topic: string;
        title: string;
        intro: string;
        defaultGardenType?: string;
        defaultMessage?: string;
        bullets?: string[];
      };
    };

export type MarketingPage = {
  seo: { title: string; description: string; path: string; noIndex?: boolean };
  query: string;
  h1: string;
  lead: string;
  heroImage?: string;
  heroImageAlt?: string;
  blocks: ContentBlock[];
  faqs: Faq[];
  /** Optional full-bleed photo behind FAQ; left panel gets blur + darken. */
  faqImage?: string;
  faqImageAlt?: string;
  related: { href: string; label: string; description?: string }[];
  cta: { title: string; primaryLabel: string; primaryHref: string; secondaryLabel?: string; secondaryHref?: string };
};

export const leistungenPage: MarketingPage = {
  seo: {
    title: "Leistungen: Automatische Bewässerung für Ihren Garten",
    description:
      "Leistungen von RegnerWerk: Bewässerungsanlage planen und einbauen, Rasen, Tropf, Nachrüstung, Steuerung und Service – als fertiges System für private Gärten.",
    path: "/leistungen/",
  },
  query: "automatische Bewässerung Garten Leistungen",
  h1: "Automatische Bewässerung für Ihren Garten",
  lead:
    "Sie wollen keine Bauteile suchen – Sie wollen eine Anlage, die im Alltag funktioniert. RegnerWerk prüft, plant, baut ein, stellt ein und betreut Bewässerungssysteme für private Gärten in Deutschland.",
  heroImage: images.installWork,
  heroImageAlt: "Fachgerechte Arbeit an einer Gartenbewässerung",
  blocks: [
    {
      type: "prose",
      title: "Ein System – vom Wassercheck bis zur Nachjustierung",
      paragraphs: [
        "Am Ende steht eine laufende Anlage mit klaren Zonen und verständlicher Bedienung. Technik tritt zurück; Qualität bleibt sichtbar in Ablauf, Einbau und Einstellung. Sie bekommen kein Teilepaket zum Selberbasteln, sondern ein Ergebnis für den Alltag.",
        "Diese Seite gibt den Überblick. Die Unterseiten vertiefen Rasen, Komponenten, Steuerung, Planung, Montage, Service und Tropf – mit demselben ruhigen Ton und denselben Grenzen: Online orientiert, verbindlich nach Prüfung.",
      ],
    },
    {
      type: "cards",
      title: "Unsere Leistungen im Überblick",
      cards: [
        {
          title: "Rasenbewässerung",
          body: "Zonen und Überdeckung – vom Problem bis zum gleichmäßigen Ergebnis.",
          href: "/rasenbewaesserung-installieren/",
        },
        {
          title: "Bewährte Komponenten",
          body: "Hunter, Rain Bird und Gesamtsystem – kein Teilekatalog.",
          href: "/bewaesserungskomponenten/",
        },
        {
          title: "Steuerung",
          body: "Zeiten, Zonen und Alltag – verständlich eingerichtet.",
          href: "/bewaesserungssteuerung/",
        },
        {
          title: "Planung",
          body: "Wassercheck, Zonen und Angebot – bevor der Rasen geöffnet wird.",
          href: "/bewaesserungsanlage-installieren-lassen/",
        },
        {
          title: "Montage im Bestand",
          body: "Schützen, öffnen, dokumentieren, wiederherstellen.",
          href: "/bewaesserung-bestehender-garten/",
        },
        {
          title: "Start und Einstellung",
          body: "Prüfen und justieren – Servicegrenzen klar.",
          href: "/service/",
        },
        {
          title: "Tropf für Beete und Hecken",
          body: "Wasser an der Wurzel – getrennt vom Rasen.",
          href: "/tropfbewaesserung-hecken-beete/",
        },
        {
          title: "Kosten & Orientierung",
          body: "Preisfaktoren und Online vs. Angebot.",
          href: "/bewaesserungsanlage-kosten/",
        },
      ],
    },
    {
      type: "list",
      title: "Für wen RegnerWerk die passende Adresse ist",
      intro:
        "Privatgärten in Deutschland – Neubau und Bestand. Entscheidend ist der Wunsch nach einer fertigen Anlage, nicht nach einem Shop.",
      items: [
        "Eigentümerinnen und Eigentümer, die Automatik statt Schlauch wollen",
        "Bestehende Gärten, bei denen Schonung zählt",
        "Kombination aus Rasenregnern und Tropfzonen",
        "Klarer Ablauf und nachvollziehbarer Preis vor Baubeginn",
      ],
    },
    {
      type: "stageGallery",
      title: "So läuft ein typisches Projekt",
      intro:
        "Drei klare Etappen – von der ersten Orientierung bis zur eingestellten Anlage.",
      stages: [
        {
          title: "Berechnen & anfragen",
          body: "Erste Orientierung online oder per Nachricht – ohne Festpreis-Illusion.",
          image: images.process,
          imageAlt: "Erste Anfrage und Orientierung",
        },
        {
          title: "Prüfen & planen",
          body: "Wasser und Grundstück klären, dann Zonen und Trassen festlegen.",
          image: images.measurement,
          imageAlt: "Prüfung und Planung vor dem Einbau",
        },
        {
          title: "Einbauen & einstellen",
          body: "Montage, Dokumentation, Inbetriebnahme und Feinschliff.",
          image: images.lawn,
          imageAlt: "Fertige eingestellte Bewässerungsanlage",
        },
      ],
    },
    {
      type: "media",
      title: "Ergebnis zuerst, Technik danach",
      body: "Zuerst erklären wir, was Ihr Garten davon hat: ruhigere Versorgung, klarer Ablauf und nachvollziehbare Verantwortung. Komponenten nennen wir nur dort, wo sie das Ergebnis verständlich machen – kein Shop-Katalog.",
      image: images.heroGarden,
      imageAlt: "Privater Garten als Ergebnis der Bewässerungsplanung",
    },
    {
      type: "compare",
      title: "Materialliste vs. fertige Anlage",
      intro:
        "Beide Wege existieren am Markt. RegnerWerk steht für das zweite Modell.",
      left: {
        title: "Teile & Selbstbau",
        image: images.controller,
        imageAlt: "Lose Bewässerungskomponenten – Platzhalter",
        tone: "muted",
        items: [
          { text: "Düsen und Rohre ohne Gesamtverantwortung", icon: "package" },
          { text: "Planung oft beim Kunden", icon: "person" },
          { text: "Einstellung und Fehlerbild unklar", icon: "alert" },
          { text: "Dokumentation fehlt häufig", icon: "file" },
        ],
      },
      right: {
        title: "RegnerWerk-System",
        image: images.lawn,
        imageAlt: "Fertige eingestellte Bewässerungsanlage",
        tone: "accent",
        items: [
          { text: "Prüfen bis Einstellen", icon: "clipboard" },
          { text: "Zonen nach Wasser", icon: "layers" },
          { text: "Übergabe mit Prüfung", icon: "badgeCheck" },
          { text: "Service getrennt klar", icon: "wrench" },
          { text: "Kein Teile-Shop", icon: "package" },
          { text: "Dokumentierte Leitungen", icon: "camera" },
          { text: "Alltagstaugliche Steuerung", icon: "phone" },
          { text: "Online nur Orientierung", icon: "file" },
        ],
      },
    },
    {
      type: "mistakes",
      title: "Fehler, die Leistungen teuer machen",
      items: [
        {
          title: "Leistung ohne Wassercheck buchen",
          body: "Ohne Druck und Durchfluss bleibt jede Zonenplanung Spekulation.",
        },
        {
          title: "Nur Rasen denken, Beete vergessen",
          body: "Pflanzen brauchen oft eigene Intervalle – sonst entsteht Dauerfrust.",
        },
        {
          title: "Einbau und Service vermischen",
          body: "Winter und Wartung gehören nicht stillschweigend in den Einbaupreis – wir benennen das.",
        },
        {
          title: "Online-Preis als Vertrag lesen",
          body: "Der Rechner orientiert. Verbindlich wird das Angebot nach Prüfung.",
        },
      ],
    },
    {
      type: "checklist",
      title: "Checkliste: welche Leistung Sie brauchen",
      items: [
        { text: "Nur Rasen – oder auch Beete und Hecken?", icon: "sprout" },
        { text: "Neubau oder bestehender Garten?", icon: "home" },
        { text: "Ist Schonung der Flächen zentral?", icon: "shield" },
        {
          text: "Brauchen Sie eher Installation oder zuerst Service an einer vorhandenen Anlage?",
          icon: "wrench",
        },
        {
          text: "Online berechnen oder lieber kurz schreiben?",
          icon: "phone",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Liefern Sie nur Material?",
      answer:
        "Nein. RegnerWerk plant, installiert und stellt die Anlage ein. Sie erhalten ein funktionierendes System – keinen Teilekatalog für den Selbstbau.",
    },
    {
      question: "Arbeiten Sie deutschlandweit?",
      answer:
        "Ja. Unser Einsatzgebiet ist Deutschland. Details und Bundesländer finden Sie unter Einsatzgebiet.",
    },
    {
      question: "Wo sehe ich Preise?",
      answer:
        "Unter Kosten und im Online-Rechner finden Sie Orientierung. Verbindlich wird der Preis nach Prüfung von Wasser und Grundstück.",
    },
    {
      question: "Unterscheidet ihr Neubau und bestehenden Garten?",
      answer:
        "Ja. Im Bestand stehen Schutz und Wiederherstellung besonders im Fokus. Beide Wege enden in einer fertigen, eingestellten Anlage.",
    },
    {
      question: "Kann ich Rasen und Tropf kombinieren?",
      answer:
        "Ja. Viele Anlagen verbinden Flächenregner mit Tropfzonen – mit getrennten Laufzeiten. Details auf den jeweiligen Leistungsseiten.",
    },
    {
      question: "Ist Service im Einbau enthalten?",
      answer:
        "Grundeinstellung und vereinbarte Nachjustierung gehören zur Installation. Winterservice und wiederkehrende Wartung sind eigene Leistungen, sofern nicht ausdrücklich vereinbart.",
    },
    {
      question: "Was ist der erste Schritt?",
      answer:
        "Garten berechnen für eine Orientierung – oder kurz anfragen, wenn Sie lieber mit uns starten. Beides ist unverbindlich.",
    },
  ],
  related: [
    { href: "/bewaesserungsanlage-kosten/", label: "Kosten", description: "Preisfaktoren verstehen" },
    { href: "/projekte/", label: "Projekte", description: "Beispiele ansehen" },
    { href: calcHref, label: "Garten berechnen", description: "Erste Einschätzung" },
    { href: "/bewaesserungsanlage-installieren-lassen/", label: "Installation", description: "Voller Zyklus" },
  ],
  cta: {
    title: "Welche Bewässerung passt zu Ihrem Garten?",
    primaryLabel: "Garten berechnen",
    primaryHref: calcHref,
    secondaryLabel: "Leistungen als Angebot anfragen",
    secondaryHref: "/kontakt/",
  },
};




export const tropfPage: MarketingPage = {
  seo: {
    title: "Tropfbewässerung für Beete und Hecken installieren",
    description:
      "Tropfbewässerung für Beete und Hecken: eigene Zonen, Fixierung, Filter, Druckregulierung und Winterhinweise – kombinierbar mit Rasenregnern.",
    path: "/tropfbewaesserung-hecken-beete/",
  },
  query: "Tropfbewässerung Beete Hecken",
  h1: "Tropfbewässerung für Beete und Hecken",
  lead:
    "Pflanzen brauchen oft andere Laufzeiten als der Rasen. Tropf bringt Wasser gezielt an die Wurzeln – ideal für Beete und Hecken, während Regner die Fläche versorgen.",
  heroImage: images.beds,
  heroImageAlt: "Beete und Hecken im Privatgarten",
  blocks: [
    {
      type: "prose",
      title: "Wann Tropfbewässerung die bessere Wahl ist",
      paragraphs: [
        "Tropf eignet sich, wenn Wasser an der Wurzel ankommen soll – nicht als Sprühnebel über Wegen und Fassaden. Typisch: schmale Beete, Heckenstreifen, Pflanzflächen entlang von Mauern oder Situationen, in denen flächige Regner Pflanzen zu nass oder Wege zu glatt machen.",
        "In vielen Privatgärten ist Tropf die Ergänzung zur Rasenbewässerung: eigene Zonen, eigene Intervalle, ruhigere Versorgung. RegnerWerk plant und installiert Tropf als Teil der Gesamtanlage – mit Filter, Druckregulierung und klarer Anbindung an die Steuerung.",
      ],
    },
    {
      type: "compare",
      title: "Regner und Tropf im Vergleich",
      intro:
        "Beide gehören oft in dieselbe Anlage – mit getrennten Aufgaben.",
      left: {
        title: "Regner (Fläche)",
        image: images.lawn,
        imageAlt: "Flächenbewässerung mit Regnern",
        tone: "muted",
        items: [
          { text: "Für Rasen und offene Flächen", icon: "grid" },
          { text: "Überdeckung und Wurfweiten", icon: "target" },
          {
            text: "Sichtbare Bewässerung während des Betriebs",
            icon: "droplets",
          },
          {
            text: "Empfindlich für Wind auf offenen Flächen",
            icon: "alert",
          },
        ],
      },
      right: {
        title: "Tropf (Linie / Wurzel)",
        image: images.beds,
        imageAlt: "Tropfbewässerung an Beeten und Hecken",
        tone: "accent",
        items: [
          { text: "Für Beete und Hecken", icon: "sprout" },
          { text: "Wasser an der Wurzel", icon: "droplets" },
          { text: "Wege bleiben trockener", icon: "shield" },
          { text: "Eigene Laufzeiten", icon: "timer" },
          { text: "Filter gegen Verstopfung", icon: "filter" },
          { text: "Druckregulierung", icon: "gauge" },
          { text: "Kombinierbar mit Rasen", icon: "layers" },
          { text: "Winterschutz planbar", icon: "snow" },
        ],
      },
    },
    {
      type: "stageGallery",
      title: "Ablauf bei Tropfbewässerung",
      intro:
        "Von der Trennung der Flächen bis zur eigenen Programmeinstellung – inklusive der Technik, die Tropf stabil hält.",
      stages: [
        {
          title: "Flächen trennen",
          body: "Beete und Hecken bekommen eigene Intervalle – getrennt vom Rasen.",
          image: images.beds,
          imageAlt: "Beete und Hecken im Privatgarten",
        },
        {
          title: "Wasser & Druck",
          body: "Filter und Druckregler gehören zur Planung dazu.",
          image: images.measurement,
          imageAlt: "Prüfung von Wasser und Druck für Tropf",
        },
        {
          title: "Leitung fixieren",
          body: "Saubere Führung – geschützt vor Mähen und Pflege.",
          image: images.installWork,
          imageAlt: "Verlegung und Fixierung der Tropfleitung",
        },
        {
          title: "Einstellen",
          body: "Eigene Programme – nicht mit dem Rasen mitlaufen lassen.",
          image: images.controller,
          imageAlt: "Steuerung der Tropfzonen",
        },
      ],
      focus: {
        title: "Was zur Tropflösung gehört",
        items: [
          {
            title: "Eigene Zonen",
            body: "Pflanzen und Hecken getrennt vom Rasen steuern.",
            icon: "layers",
          },
          {
            title: "Filter & Druck",
            body: "Schutz vor Verstopfung und stabile Tropfer.",
            icon: "filter",
          },
          {
            title: "Fixierung",
            body: "Leitung hält Mähen und Pflege stand.",
            icon: "shield",
          },
          {
            title: "Winterhinweis",
            body: "Frostschutz klar vereinbaren – nicht stillschweigend.",
            icon: "snow",
          },
        ],
      },
    },
    {
      type: "media",
      title: "Getrennt vom Rasen denken",
      body: "Wenn Beete und Hecken mit der Raseneinstellung mitlaufen müssen, entsteht schnell zu viel oder zu wenig Wasser. Eigene Tropfzonen halten die Versorgung ruhig und nachvollziehbar – ohne den Garten zur Experimentierfläche zu machen.",
      image: images.beds,
      imageAlt: "Beete und Hecke im Privatgarten – Platzhalterfoto",
      reverse: true,
    },
    {
      type: "prose",
      title: "Kombination mit Rasenbewässerung",
      paragraphs: [
        "Die meisten Anfragen betreffen nicht „nur Tropf“, sondern den ganzen Garten. Dann planen wir Regner für die Fläche und Tropf für Pflanzen – mit getrennten Ventilen und Laufzeiten.",
        "Im bestehenden Garten achten wir darauf, Hecken und Beete beim Trassenbau zu schützen und Leitungen so zu führen, dass spätere Pflege möglich bleibt. Details zur Nachrüstung finden Sie auf der Bestandsseite.",
      ],
    },
    {
      type: "prose",
      title: "Kosten und Winter",
      paragraphs: [
        "Den Aufwand bestimmen Länge der Tropfstrecken, Anzahl der Zonen, Filter/Drucktechnik und ob parallel eine Rasenzone entsteht. Online bleibt Orientierung; verbindlich nach Prüfung.",
        "Im Winter brauchen Tropfsysteme eine klare Absicherung gegen Frostschäden. Ob Entleerung und Service im Einbau enthalten oder separat sind, steht im Angebot – siehe auch Wartung & Winterservice.",
      ],
    },
    {
      type: "mistakes",
      title: "Fehler bei Tropfbewässerung",
      items: [
        {
          title: "Ohne Filter und Druckregler",
          body: "Verstopfung und ungleichmäßige Tropfer sind die typische Folge – nicht „schlechtes Rohr“ allein.",
        },
        {
          title: "Tropf als Rasenersatz",
          body: "Für flächigen Rasen sind Regner in der Regel passender. Tropf ergänzt Pflanzen, ersetzt die Fläche nicht.",
        },
        {
          title: "Eine Laufzeit für Rasen und Beete",
          body: "Unterschiedliche Bedarfe in einem Programm erzeugen Übernässung oder Trockenstress.",
        },
        {
          title: "Lose, unfixierte Leitungen",
          body: "Mähen, Jäten und Hunde machen ungesicherte Tropfschläuche schnell kaputt.",
        },
        {
          title: "Winter ignorieren",
          body: "Frost in Leitungen und Tropfern wird teurer als ein klar vereinbarter Winterservice.",
        },
      ],
    },
    {
      type: "checklist",
      title: "Checkliste für Beete und Hecken",
      items: [
        {
          text: "Welche Pflanzstreifen und Hecken sollen tropfen?",
          icon: "sprout",
        },
        {
          text: "Gibt es bereits Mulch, Vlies oder enge Einfassungen?",
          icon: "layers",
        },
        {
          text: "Soll parallel Rasenbewässerung geplant werden?",
          icon: "grid",
        },
        {
          text: "Wasserqualität / Brunnen – Filterbedarf abschätzen",
          icon: "filter",
        },
        {
          text: "Wer übernimmt den Winterschutz – Service oder Eigentümer?",
          icon: "snow",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Kann Tropf den Rasen ersetzen?",
      answer:
        "Für flächigen Rasen sind Regner in der Regel die passende Lösung. Tropf ergänzt Beete und Hecken.",
    },
    {
      question: "Ist Filter nötig?",
      answer:
        "Ja. Filter und passende Druckregulierung schützen die Tropfer und halten die Verteilung stabil.",
    },
    {
      question: "Was ist im Winter zu beachten?",
      answer:
        "Tropfsysteme brauchen eine klare Absicherung gegen Frostschäden. Den Ablauf stimmen wir als Service oder im Rahmen vereinbarter Leistungen ab.",
    },
    {
      question: "Ist Tropf unter Mulch sinnvoll?",
      answer:
        "Häufig ja – die Leitung bleibt geschützt und Wasser kommt näher an die Wurzel. Die genaue Führung hängt von Beetaufbau und Pflege ab.",
    },
    {
      question: "Kann ich bestehende Tropfschläuche weiternutzen?",
      answer:
        "Manchmal. Alter, Verkalkung und fehlende Dokumentation entscheiden. Oft ist ein sauberer Neuaufbau der Zonen langfristig ruhiger.",
    },
    {
      question: "Wie oft laufen Tropfzonen?",
      answer:
        "Kürzer und häufiger als viele erwarten – abhängig von Boden, Pflanze und Wetter. Startwerte setzen wir bei der Einstellung.",
    },
    {
      question: "Was kostet Tropfbewässerung?",
      answer:
        "Abhängig von Streckenlänge, Zonen und ob Rasen mitgeplant wird. Online Orientierung; Festpreis nach Prüfung – siehe Kosten.",
    },
  ],
  related: [
    {
      href: "/rasenbewaesserung-installieren/",
      label: "Rasenbewässerung",
      description: "Flächenregner und Überdeckung für den Rasen.",
    },
    {
      href: "/bewaesserung-bestehender-garten/",
      label: "Bestehender Garten",
      description: "Tropf und Trassen schonend im angelegten Garten.",
    },
    {
      href: "/service/",
      label: "Service",
      description: "Einstellung, Diagnose und Saison – nach dem Einbau.",
    },
    {
      href: "/wartung-winterservice/",
      label: "Winterservice",
      description: "Was Tropf und Leitungen im Frost brauchen.",
    },
  ],
  cta: {
    title: "Tropf und Rasen gemeinsam planen",
    primaryLabel: "Garten berechnen",
    primaryHref: calcHref,
    secondaryLabel: "Beratung anfragen",
    secondaryHref: "/kontakt/",
  },
};

export const kostenPage: MarketingPage = {
  seo: {
    title: "Was kostet eine automatische Bewässerungsanlage?",
    description:
      "Bewässerungsanlage Kosten: orientierende Spannen, Preisfaktoren, Angebotsumfang und Unterschied zwischen Online-Rechnung und Festpreis nach Prüfung.",
    path: "/bewaesserungsanlage-kosten/",
  },
  query: "Bewässerungsanlage Kosten",
  h1: "Was kostet eine automatische Bewässerungsanlage?",
  lead:
    "Transparente Orientierung statt Scheingenauigkeit: Online vorläufig, verbindlich nach Prüfung von Wasser und Objekt. So bleibt der Preis vor Baubeginn nachvollziehbar – ohne falsche Festpreis-Versprechen aus dem Rechner.",
  heroImage: images.process,
  heroImageAlt: "Planung und Abstimmung einer Bewässerungsanlage",
  blocks: [
    {
      type: "prose",
      title: "Warum es keine ehrliche Einheitspreis-Liste gibt",
      paragraphs: [
        "Zwei Gärten mit derselben Quadratmeterzahl können sehr unterschiedliche Anlagen brauchen: Form, Zonen, Wasserangebot, Zugang und ob im Bestand gearbeitet wird, bewegen den Aufwand stärker als eine pauschale „pro m²“-Zahl.",
        "Deshalb zeigen wir Spannen und Faktoren – und trennen klar zwischen Online-Orientierung und verbindlichem Angebot. Details zur Festpreis-Logik finden Sie auch unter Festpreis.",
      ],
    },
    {
      type: "cards",
      title: "Orientierende Spannen",
      cards: [
        {
          title: "Kompakter Rasengarten",
          body: "Häufig ab ca. 2.490 € als Einstiegsorientierung – abhängig von Zonen und Zugang.",
          icon: "home",
        },
        {
          title: "Rasen plus Hecke oder Beete",
          body: "Oft im mittleren vierstelligen Bereich, sobald mehrere Zonen und Tropf hinzukommen.",
          icon: "sprout",
        },
        {
          title: "Größere oder komplexe Gärten",
          body: "Individuell nach Aufmaß, Wasserparametern und Einbauaufwand.",
          icon: "ruler",
        },
        {
          title: "Service & Winter",
          body: "Eigene Leistungen – nicht stillschweigend im Einbaupreis, sofern nicht vereinbart.",
          href: "/service/",
          icon: "snow",
        },
      ],
    },
    {
      type: "stageGallery",
      title: "Vom Online-Wert zum verbindlichen Preis",
      intro:
        "Vier Etappen – damit klar bleibt, wann Orientierung endet und Angebot beginnt. Darunter die größten Preishebel.",
      stages: [
        {
          title: "Online rechnen",
          body: "Vorläufige Spanne anhand grober Angaben.",
          image: images.process,
          imageAlt: "Online-Orientierung zu den Kosten",
        },
        {
          title: "Wasser prüfen",
          body: "Druck und Durchfluss entscheiden über sinnvolle Zonen.",
          image: images.measurement,
          imageAlt: "Wassercheck vor dem Angebot",
        },
        {
          title: "Objekt klären",
          body: "Zugang, Bestand, Schonung – der reale Einbauaufwand.",
          image: images.houseGarden,
          imageAlt: "Objektprüfung im Garten",
        },
        {
          title: "Angebot",
          body: "Umfang, Annahmen und Preis vor Baubeginn.",
          image: images.controller,
          imageAlt: "Abstimmung des Angebots",
        },
      ],
      focus: {
        title: "Was den Preis bewegt",
        items: [
          {
            title: "Fläche & Form",
            body: "Nicht nur m² – auch Schnitt und Hindernisse.",
            icon: "ruler",
          },
          {
            title: "Zonen",
            body: "Mehr Zonen = mehr Ventile und Aufwand.",
            icon: "layers",
          },
          {
            title: "Wasser",
            body: "Druck und Durchfluss bestimmen die Auslegung.",
            icon: "gauge",
          },
          {
            title: "Einbau",
            body: "Zugang, Bestand und Schonung erhöhen Komplexität.",
            icon: "shield",
          },
        ],
      },
    },
    {
      type: "compare",
      title: "Online-Rechnung vs. Festpreis-Angebot",
      left: {
        title: "Online-Rechner",
        image: images.process,
        imageAlt: "Online-Orientierung zu den Kosten",
        tone: "muted",
        items: [
          { text: "Schnelle Orientierung", icon: "clock" },
          { text: "Basiert auf Ihren Angaben", icon: "person" },
          { text: "Kein Vertrag, kein Kauf", icon: "file" },
          { text: "Kann nach Prüfung abweichen", icon: "alert" },
        ],
      },
      right: {
        title: "Angebot nach Prüfung",
        image: images.measurement,
        imageAlt: "Abstimmung des verbindlichen Angebots",
        tone: "accent",
        items: [
          { text: "Umfang beschrieben", icon: "clipboard" },
          { text: "Annahmen benannt", icon: "file" },
          { text: "Preis vor Baubeginn klar", icon: "badgeCheck" },
          { text: "Änderungen nur abgestimmt", icon: "shield" },
          { text: "Online bleibt vorläufig", icon: "clock" },
          { text: "Wassercheck fließt ein", icon: "gauge" },
          { text: "Objektaufwand sichtbar", icon: "home" },
          { text: "Keine stille Nachbelastung", icon: "alert" },
        ],
      },
    },
    {
      type: "media",
      title: "Preis vor dem ersten Spatenstich",
      body: "Sie sollen vor Baubeginn wissen, was installiert wird und was es kostet. Ergänzungen nach Auftrag nur mit klarer Abstimmung – nicht als stille Nachbelastung.",
      image: images.process,
      imageAlt: "Planung und Abstimmung vor dem Einbau – Platzhalterfoto",
    },
    {
      type: "list",
      title: "Was im Angebot steht – und was extra sein kann",
      intro:
        "Das Angebot beschreibt den vereinbarten Umfang. Zusätzlich können zum Beispiel sein:",
      items: [
        "Erhebliche Erschwernisse am Grundstück, die vorher nicht sichtbar waren",
        "Nachträgliche Umbauten am Garten",
        "Separater Winterservice oder erweiterte Wartung",
        "Erweiterungen, die nach der Installation gewünscht werden",
      ],
    },
    {
      type: "mistakes",
      title: "Kostenfallen, die wir vermeiden helfen",
      items: [
        {
          title: "Billigstpreis ohne Wassercheck",
          body: "Später fehlen Zonen oder die Anlage läuft ewig – Nacharbeit wird teurer als die ehrliche Planung.",
        },
        {
          title: "„Festpreis“ aus dem Internet",
          body: "Ohne Objektprüfung ist das Marketing, kein belastbares Angebot.",
        },
        {
          title: "Service im Einbaupreis verstecken",
          body: "Winter und Wartung gehören benannt – sonst entstehen Erwartungskonflikte.",
        },
        {
          title: "Nur m² vergleichen",
          body: "Form, Zugang und Tropfanteile erklären Preisunterschiede besser als die reine Fläche.",
        },
      ],
    },
    {
      type: "checklist",
      title: "Checkliste für eine realistische Kosteneinschätzung",
      items: [
        { text: "Ungefähre Fläche und Form notieren", icon: "ruler" },
        { text: "Rasen / Beete / Hecke trennen", icon: "layers" },
        {
          text: "Anschluss und Zugang grob beschreiben",
          icon: "gauge",
        },
        { text: "Neubau oder Bestand?", icon: "home" },
        {
          text: "Online rechnen und Ergebnis ggf. an RegnerWerk senden",
          icon: "phone",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Ist der Online-Preis ein Festpreis?",
      answer:
        "Nein. Er ist vorläufig. Der Festpreis kommt nach Prüfung vor Ort bzw. nach Wasser- und Objektklärung.",
    },
    {
      question: "Warum hängt so viel vom Wasser ab?",
      answer:
        "Druck und Durchfluss bestimmen, wie viele Zonen sinnvoll sind und welche Komponenten passen – und damit den Aufwand.",
    },
    {
      question: "Was steht im Angebot?",
      answer:
        "Der vereinbarte Leistungsumfang, relevante Annahmen und – wo nötig – Ausnahmen. So bleibt der Preis vor Baubeginn nachvollziehbar.",
    },
    {
      question: "Ab welchem Preis startet eine Anlage?",
      answer:
        "Als Orientierung nennen wir häufig ab ca. 2.490 € für kompaktere Rasengärten – abhängig von Zonen und Zugang. Das ist keine Garantie für jedes Objekt.",
    },
    {
      question: "Warum kostet Nachrüstung oft mehr?",
      answer:
        "Schonung, Zugang und Wiederherstellung erhöhen den Aufwand gegenüber einem freien Neubau. Details unter Bewässerung im bestehenden Garten.",
    },
    {
      question: "Sind Winterservice-Kosten enthalten?",
      answer:
        "Nur wenn ausdrücklich vereinbart. Sonst sind Winter und wiederkehrende Wartung separate Leistungen.",
    },
    {
      question: "Kann der Preis nach Auftrag steigen?",
      answer:
        "Erhebliche, vorher nicht erkennbare Erschwernisse oder nachträgliche Wünsche nur mit klarer Abstimmung – nicht als stille Nachbelastung.",
    },
  ],
  related: [
    {
      href: "/festpreis/",
      label: "Festpreis-Erklärung",
      description: "Was vor Baubeginn verbindlich festgehalten wird.",
    },
    {
      href: "/garten-berechnen/",
      label: "Garten berechnen",
      description: "Vorläufige Spanne online – ohne Festpreis-Illusion.",
    },
    {
      href: "/leistungen/",
      label: "Leistungen",
      description: "Welche Leistung hinter dem Preis steht.",
    },
    {
      href: "/kontakt/",
      label: "Kontakt",
      description: "Frage zu Kosten oder Objekt kurz senden.",
    },
  ],
  cta: {
    title: "Kosten für meinen Garten berechnen",
    primaryLabel: "Kosten für meinen Garten berechnen",
    primaryHref: calcHref,
    secondaryLabel: "Frage zu Kosten",
    secondaryHref: "/kontakt/",
  },
};

export const berechnenPage: MarketingPage = {
  seo: {
    title: "Bewässerung für Ihren Garten berechnen",
    description:
      "Online-Einschätzung für Ihre Gartenbewässerung: welche Daten nötig sind, was Sie erhalten und wann der Endpreis feststeht.",
    path: "/garten-berechnen/",
  },
  query: "Garten Bewässerung berechnen",
  h1: "Bewässerung für Ihren Garten berechnen",
  lead:
    "In wenigen Schritten erhalten Sie eine vorläufige Einschätzung. Der detaillierte Planer öffnet sich auf unserem Konfigurator – das Ergebnis dort ist eine Orientierung, kein finaler Festpreis.",
  heroImage: images.controller,
  heroImageAlt: "Planung und Steuerung einer Bewässerung",
  blocks: [
    {
      type: "list",
      title: "Was Sie bereithalten sollten",
      items: [
        "Ungefähre Garten- oder Rasenfläche",
        "Ob Beete oder Hecken mitbewässert werden sollen",
        "Adresse bzw. Region für die spätere Abstimmung",
        "Optional: Fotos oder eine Skizze",
      ],
    },
    {
      type: "list",
      title: "Was Sie erhalten",
      items: [
        "Eine verständliche vorläufige Einschätzung",
        "Kein Überladen mit technischen Artikelnummern",
        "Die Möglichkeit, das Ergebnis an RegnerWerk zu senden",
        "Klarheit, dass der Endpreis nach Prüfung folgt",
      ],
    },
    {
      type: "text",
      title: "Nächster Schritt",
      body: "Starten Sie den Rechner. Kontaktdaten fragen wir erst, wenn ein nützliches Zwischenergebnis vorliegt. Fotos oder Pläne können Sie anschließend beilegen.",
    },
    {
      type: "media",
      title: "Vorläufig online – verbindlich vor Ort",
      body: "Der Rechner hilft bei der Orientierung zu Fläche und Aufwand. Druck, Zugang und Einbaukomplexität prüfen wir vor dem Festpreis. So vermeiden wir falsche Erwartungen an einen Online-Festpreis.",
      image: images.process,
      imageAlt: "Abstimmung der Gartenbewässerung vor dem Einbau",
    },
  ],
  faqs: [
    {
      question: "Wie lange dauert die Berechnung?",
      answer:
        "Die erste Orientierung ist in wenigen Minuten möglich. Die verbindliche Ausarbeitung folgt nach Prüfung.",
    },
    {
      question: "Ist das Ergebnis verbindlich?",
      answer:
        "Nein. Es ist vorläufig. Verbindlich wird der Preis nach Wasser- und Objektprüfung.",
    },
    {
      question: "Muss ich sofort Kontaktdaten angeben?",
      answer:
        "Nein. Kontaktdaten sind sinnvoll, wenn Sie das Ergebnis an RegnerWerk senden möchten – nicht als Einstiegshürde vor jedem Nutzen.",
    },
    {
      question: "Kann ich danach noch schreiben?",
      answer:
        "Ja. Über Kontakt können Sie Fotos, Pläne oder Fragen nachreichen.",
    },
  ],
  related: [
    { href: "/bewaesserungsanlage-kosten/", label: "Kosten verstehen" },
    { href: "/kontakt/", label: "Direkt kontaktieren" },
  ],
  cta: {
    title: "Jetzt vorläufige Einschätzung starten",
    primaryLabel: "Rechner öffnen",
    primaryHref: "CONFIGURATOR",
    secondaryLabel: "Lieber schreiben",
    secondaryHref: "/kontakt/",
  },
};


export const ueberPage: MarketingPage = {
  seo: {
    title: "Über RegnerWerk – Spezialist für Gartenbewässerung",
    description:
      "RegnerWerk ist Spezialist für automatische Gartenbewässerung: planen, einbauen, messen und betreuen – in Deutschland.",
    path: "/ueber-regnerwerk/",
  },
  query: "RegnerWerk Unternehmen",
  h1: "RegnerWerk – Spezialist für automatische Gartenbewässerung",
  lead:
    "Wir konzentrieren uns auf Bewässerungsanlagen für private Gärten: modern im Ablauf, ruhig in der Ausführung, verantwortlich für das Ergebnis. Die Technik verschwindet – die Qualität bleibt sichtbar.",
  heroImage: images.installWork,
  heroImageAlt: "Arbeit an einem Gartenprojekt",
  blocks: [
    {
      type: "text",
      title: "Wofür wir stehen",
      body: "RegnerWerk macht professionelle Gartenbewässerung selbstverständlich. Wir sind weder Teile-Shop noch Allround-GaLaBau mit Bewässerung als Nebenbei. Unser Fokus: planen, einbauen, messen und betreuen – mit ruhiger Klarheit statt Werbesuperlativen.",
    },
    {
      type: "list",
      title: "Unser Ansatz",
      items: [
        "Wasser prüfen, bevor geplant wird",
        "Zonen und Trassen nachvollziehbar auslegen",
        "Bestehende Gärten schonend behandeln",
        "Nach dem Einbau einstellen und dokumentieren",
        "Service klar vom Einbau trennen",
      ],
    },
    {
      type: "text",
      title: "Team und Fotos",
      body: "Auf dieser Seite zeigen wir Arbeits- und Gartensituationen als Platzhalter. Porträts und Biografien veröffentlichen wir erst mit freigegebenen, realen Aufnahmen und Texten – keine erfundenen Mitarbeitenden und keine erfundenen Firmengeschichte.",
    },
    {
      type: "media",
      title: "Ordnung auf der Baustelle",
      body: "Professionelle Bewässerung zeigt sich auch im Verhalten vor Ort: geschützte Flächen, nachvollziehbare Schritte und ein ruhiger Abschluss – nicht in Werbesuperlativen.",
      image: images.teamWork,
      imageAlt: "Organisierte Arbeit am Gartenprojekt – Platzhalterfoto",
      reverse: true,
    },
    {
      type: "text",
      title: "Region",
      body: "Wir sind in Deutschland tätig. Stadt- und Bundesland-Seiten finden Sie unter Einsatzgebiet.",
    },
  ],
  faqs: [
    {
      question: "Seid ihr ein GaLaBau-Allrounder?",
      answer:
        "Nein. Unser Fokus ist automatische Gartenbewässerung – Planung, Einbau und Betreuung der Anlage.",
    },
    {
      question: "Wo finde ich Referenzen?",
      answer:
        "Unter Projekte. Freigegebene Fallstudien ersetzen nach und nach die gekennzeichneten Platzhalterbeispiele.",
    },
  ],
  related: [
    { href: "/einsatzgebiet/", label: "Einsatzgebiet" },
    { href: "/projekte/", label: "Projekte" },
    { href: "/kontakt/", label: "Kontakt" },
  ],
  cta: {
    title: "Mit RegnerWerk Ihren Garten planen",
    primaryLabel: "Garten berechnen",
    primaryHref: calcHref,
  },
};

export const einsatzgebietPage: MarketingPage = {
  seo: {
    title: "Einsatzgebiet: Bewässerung in Städten und Bundesländern",
    description:
      "RegnerWerk plant Bewässerungsanlagen deutschlandweit. Stadtseiten für München, Berlin, Hamburg, Köln und weitere Lagen – plus Übersicht aller Bundesländer.",
    path: "/einsatzgebiet/",
  },
  query: "Bewässerung Einsatzgebiet Deutschland Stadt",
  h1: "Bewässerungsanlagen in Deutschland",
  lead:
    "Unser Einsatzgebiet ist deutschlandweit. Für wichtige Städte und jedes Bundesland gibt es eigene Seiten mit Klima-, Garten- und Ablaufkontext – ohne ausgetauschte Türseiten.",
  heroImage: images.heroGarden,
  heroImageAlt: "Garten in Deutschland",
  blocks: [
    {
      type: "text",
      title: "Hauptgebiet",
      body: "Private Gärten in Deutschland. Anfahrt, Termine und konkrete Projektbedingungen klären wir vor Auftrag – transparent und ohne den Eindruck, überall gleichzeitig vor Ort zu sein, ohne Abstimmung.",
    },
    {
      type: "media",
      title: "Lokal informieren, bundesweit denselben Standard",
      body: "Stadtseiten erklären Klima, typische Gärten und den Einstieg vor Ort. Bundesland-Seiten ordnen die Region ein. Der fachliche Ablauf bleibt gleich: Wasser prüfen, planen, einbauen, einstellen.",
      image: images.houseGarden,
      imageAlt: "Privater Garten in Deutschland – Platzhalterfoto",
    },
    {
      type: "text",
      title: "Städte und Bundesländer",
      body: "Wählen Sie unten Ihre Stadt oder Ihr Bundesland. Jede Seite führt zur vorläufigen Berechnung oder zum Kontakt. Weitere Städte legen wir an, wenn eigener lokaler Inhalt vorliegt – nicht als Namensliste.",
    },
  ],
  faqs: [
    {
      question: "Kommt ihr auch in meine Stadt?",
      answer:
        "Deutschland ist unser Einsatzgebiet. Ob und wann ein Termin bei Ihnen möglich ist, klären wir in der Anfrage – auch wenn Ihre Stadt noch keine eigene Seite hat.",
    },
    {
      question: "Warum nur ausgewählte Stadtseiten?",
      answer:
        "Wir schreiben Seiten nur, wo eigener lokaler Kontext (Klima, Gartenlage, typische Grundstücke) vorliegt. Eine Seite für jede Gemeinde mit ausgetauschtem Namen lehnen wir ab.",
    },
  ],
  related: [
    { href: "/kontakt/", label: "Kontakt" },
    { href: calcHref, label: "Garten berechnen" },
    { href: "/projekte/", label: "Projekte" },
  ],
  cta: {
    title: "Standort klären und Garten berechnen",
    primaryLabel: "Garten berechnen",
    primaryHref: calcHref,
    secondaryLabel: "Kontakt",
    secondaryHref: "/kontakt/",
  },
};

import {
  komponentenPage as _komponentenPage,
  steuerungPage as _steuerungPage,
  rasenPage as _rasenPage,
  installPage as _installPage,
  bestehendPage as _bestehendPage,
  servicePage as _servicePage,
} from "@/lib/content/service-pages";

export const komponentenPage = _komponentenPage as MarketingPage;
export const steuerungPage = _steuerungPage as MarketingPage;
export const rasenPage = _rasenPage as MarketingPage;
export const installPage = _installPage as MarketingPage;
export const bestehendPage = _bestehendPage as MarketingPage;
export const servicePage = _servicePage as MarketingPage;