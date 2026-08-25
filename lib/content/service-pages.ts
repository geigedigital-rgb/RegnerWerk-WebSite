import { images } from "@/lib/content/media";
import { calcHref } from "@/lib/content/nav";

/** Deep pages behind home Services cards — unique narrative each. */

export const komponentenPage = {
  seo: {
    title: "Bewässerungskomponenten: Hunter, Rain Bird und Gesamtsystem",
    description:
      "Bewährte Bewässerungskomponenten von Hunter und Rain Bird – ausgewählt nach Wassercheck und Planung. RegnerWerk liefert Auslegung, Einbau und Einstellung als Gesamtsystem, keinen Shop.",
    path: "/bewaesserungskomponenten/",
  },
  query: "Bewässerungskomponenten Hunter Rain Bird",
  h1: "Bewährte Komponenten – passend zur Auslegung",
  lead:
    "Gute Teile allein machen noch keine gute Anlage. Wir planen mit etablierten Bewässerungssystemen – unter anderem Hunter und Rain Bird – und verantworten Auslegung, Einbau und Einstellung als Gesamtsystem.",
  heroImage: images.components,
  heroImageAlt: "Professionelle Bewässerungskomponenten vor dem Einbau",
  blocks: [
    {
      type: "prose",
      title: "Warum Marke ohne Plan teuer werden kann",
      paragraphs: [
        "Viele Eigentümer vergleichen Düsen und Ventile wie Katalogartikel. Ohne gemessenen Druck, Durchfluss und Zonenkonzept bleibt die teuerste Marke Spekulation – und die günstigste oft ein Dauerproblem.",
        "RegnerWerk wählt Komponenten nach dem, was Ihr Anschluss und Ihr Garten wirklich hergeben. Hunter und Rain Bird stehen für etablierte Profi-Technik im Markt. Unser Versprechen ist nicht der Markenname, sondern die passende Auslegung und die fertige, eingestellte Anlage.",
      ],
    },
    {
      type: "stageGallery",
      title: "So wählen und verbauen wir Komponenten",
      intro:
        "Vier Schritte vom Bedarf bis zur dokumentierten Anlage – ohne Shop-Logik.",
      stages: [
        {
          number: "01",
          caption: "Anforderung klären",
          title: "Zuerst der Garten – dann die Technik",
          body: "Bevor wir Regner oder Ventile festlegen, klären wir Fläche, Pflanzen, Druck, Durchfluss und Ihren Alltag. So entsteht eine Auslegung, die zum Anschluss und zum Grundstück passt – nicht zu einem Katalogwunsch. Sie wissen früh, was die Anlage leisten soll und wo Grenzen liegen.",
          image: images.measurement,
          imageAlt: "Wasseranschluss und Parameter prüfen",
        },
        {
          number: "02",
          caption: "Passend auswählen",
          title: "Komponenten folgen dem Plan",
          body: "Regner, Tropf, Ventile und Filter werden erst nach der Auslegung gewählt. Bewährte Systeme wie Hunter oder Rain Bird setzen wir dort ein, wo sie zur Zone und zum Wasserangebot passen. Marke ersetzt bei uns keine Messung – sie stützt das geplante Ergebnis.",
          image: images.passendAuswaehlen,
          imageAlt: "Auswahl bewährter Bewässerungskomponenten nach Planung",
        },
        {
          number: "03",
          caption: "Sauber einbauen",
          title: "Einbau, der später Service erlaubt",
          body: "Ventilbox, Leitungen und Anschlüsse legen wir so, dass der Bestand geschont bleibt und wichtige Stellen zugänglich sind. Ordentliche Führung und klare Übergänge reduzieren Folgeschäden und machen Wartung oder Erweiterung später nachvollziehbar – statt Rätselraten unter dem Rasen.",
          image: images.controller,
          imageAlt: "Ordentlich verbaute Ventilbox im Garten",
        },
        {
          number: "04",
          caption: "Dokumentieren",
          title: "Was verbaut wurde, bleibt nachvollziehbar",
          body: "Wichtige Leitungsverläufe und Einstellungen halten wir fest, soweit im Projekt vereinbart. So bleibt die Anlage auch Jahre später verständlich – für Sie, für Service und für Erweiterungen. Dokumentation ist Teil der Verantwortung, nicht ein Extra nach dem Einbau.",
          image: images.dokumentieren,
          imageAlt: "Dokumentation offener Leitungsverläufe",
        },
      ],
      focus: {
        title: "Was wir bewusst nicht tun",
        items: [
          {
            title: "Kein Teilekatalog",
            body: "Wir verkaufen keine Einzelartikel zum Selberbasteln.",
            icon: "package",
          },
          {
            title: "Keine Marke als Ersatz für Planung",
            body: "Erst Wasser und Zonen – dann die passende Komponente.",
            icon: "ruler",
          },
          {
            title: "Keine versteckte Billigmontage",
            body: "Einbauqualität und Zugänglichkeit zählen genauso wie das Produkt.",
            icon: "shield",
          },
        ],
      },
    },
    {
      type: "cards",
      title: "Welche Bauteile typischerweise ins System gehören",
      cards: [
        {
          title: "Versenkregner",
          body: "Für Rasenflächen mit geplanter Überdeckung – im Ruhezustand kaum sichtbar.",
          icon: "droplets",
          href: "/rasenbewaesserung-installieren/",
        },
        {
          title: "Tropfleitungen",
          body: "Für Beete und Hecken: Wasser an der Wurzel, getrennte Laufzeiten.",
          icon: "sprout",
          href: "/tropfbewaesserung-hecken-beete/",
        },
        {
          title: "Ventile und Box",
          body: "Zonen schalten, Druck halten, Servicezugang offen lassen.",
          icon: "layers",
        },
        {
          title: "Filter und Drucktechnik",
          body: "Wo Wasserqualität oder Druck es erfordern – vor dem Tropf oft entscheidend.",
          icon: "filter",
        },
      ],
    },
    {
      type: "compare",
      title: "Katalogkauf vs. geplantes Gesamtsystem",
      intro:
        "Beide Wege gibt es. RegnerWerk steht für Verantwortung über das fertige Ergebnis.",
      left: {
        title: "Nur Komponenten kaufen",
        image: images.components,
        imageAlt: "Lose Bewässerungsteile ohne Gesamtplanung",
        tone: "muted",
        items: [
          { text: "Auswahl ohne Wassercheck", icon: "alert" },
          { text: "Planung oft beim Kunden", icon: "person" },
          { text: "Fehlerbild schwer zu finden", icon: "eyeOff" },
          { text: "Keine Übergabe mit Prüfung", icon: "file" },
        ],
      },
      right: {
        title: "Mit RegnerWerk",
        image: images.controller,
        imageAlt: "Eingebaute Ventilbox als Teil des Gesamtsystems",
        tone: "accent",
        items: [
          { text: "Auswahl nach Auslegung", icon: "ruler" },
          { text: "Hunter / Rain Bird wo passend", icon: "badgeCheck" },
          { text: "Einbau und Einstellung inklusive", icon: "wrench" },
          { text: "Dokumentation wichtiger Abschnitte", icon: "camera" },
          { text: "Wartbarer Aufbau", icon: "clipboard" },
          { text: "Kein Shop-Versprechen", icon: "package" },
          { text: "Zonen folgen dem Wasser", icon: "gauge" },
          { text: "Ergebnis im Garten", icon: "trees" },
        ],
      },
    },
    {
      type: "media",
      title: "Qualität zeigt sich im eingebauten Zustand",
      body: "Ordentliche Ventilbox, klare Leitungsführung und zugängliche Anschlüsse – das ist die sichtbare Seite guter Komponentenwahl. Markennamen allein reichen nicht; die Montage muss dem Alltag und dem späteren Service standhalten.",
      image: images.controller,
      imageAlt: "Sauber eingebaute Ventile in der Ventilbox",
    },
    {
      type: "prose",
      title: "Das Ergebnis für Ihren Garten",
      paragraphs: [
        "Am Ende steht keine Kiste mit Teilen, sondern eine laufende Anlage: Zonen schalten zuverlässig, Regner und Tropf passen zur Fläche, und Sie wissen, was verbaut wurde.",
        "Wenn Sie später erweitern oder warten lassen, bleibt die Basis nachvollziehbar – weil Auswahl, Einbau und Dokumentation zusammengehören.",
      ],
    },
  ],
  faqs: [
    {
      question: "Verkaufen Sie Hunter- oder Rain-Bird-Teile einzeln?",
      answer:
        "Nein. RegnerWerk ist kein Onlineshop. Komponenten gehören zur geplanten und eingebauten Anlage.",
    },
    {
      question: "Sind Hunter und Rain Bird immer im Einsatz?",
      answer:
        "Wir arbeiten mit etablierten Profi-Systemen, darunter Hunter und Rain Bird. Was verbaut wird, folgt der Auslegung nach Wassercheck – nicht einem Werbeversprechen.",
    },
    {
      question: "Was ist wichtiger: Marke oder Planung?",
      answer:
        "Die Planung. Ohne passende Zonen und Durchfluss hilft die beste Marke wenig. Danach wählen wir passende, bewährte Komponenten.",
    },
  ],
  related: [
    {
      href: "/bewaesserungsanlage-installieren-lassen/",
      label: "Planung und Einbau",
      description: "Vom Wassercheck bis zum Angebot",
    },
    {
      href: "/bewaesserungssteuerung/",
      label: "Steuerung",
      description: "Bedienung und Zonen im Alltag",
    },
    {
      href: "/leistungen/",
      label: "Alle Leistungen",
      description: "Überblick zum Gesamtsystem",
    },
    {
      href: "/bewaesserungsanlage-kosten/",
      label: "Kosten",
      description: "Was den Preis beeinflusst",
    },
  ],
  cta: {
    title: "Anlage mit passenden Komponenten planen?",
    primaryLabel: "Garten berechnen",
    primaryHref: calcHref,
    secondaryLabel: "Kontakt",
    secondaryHref: "/kontakt/",
  },
};

export const steuerungPage = {
  seo: {
    title: "Bewässerungssteuerung: Zeiten, Zonen und Alltag",
    description:
      "Bewässerungssteuerung verständlich einrichten: Zonen, Laufzeiten und sinnvolle Anpassungen – ohne Technikchaos. RegnerWerk programmiert, weist ein und justiert nach.",
    path: "/bewaesserungssteuerung/",
  },
  query: "Bewässerungssteuerung Garten",
  h1: "Steuerung, die im Alltag funktioniert",
  lead:
    "Eine gute Steuerung merkt man daran, dass Sie sie selten anfassen müssen: klare Zonen, sinnvolle Zeiten und nachvollziehbare Anpassungen – statt komplizierter Menüs und Ratespiel.",
  heroImage: images.steuerung,
  heroImageAlt: "Steuerung einer automatischen Gartenbewässerung",
  blocks: [
    {
      type: "prose",
      title: "Warum die Bedienung oft wichtiger ist als die Hardware",
      paragraphs: [
        "Viele Anlagen scheitern nicht am Rohr oder am Regner, sondern an der Steuerung: alle Zonen laufen gleich lang, Rasen und Beete teilen sich ein Programm, oder eine App bleibt unbenutzt, weil niemand sie erklärt bekommen hat. Dann wird wieder zum Schlauch gegriffen – obwohl die Technik eigentlich da ist.",
        "Bei RegnerWerk gehört die Steuerung zur fertigen Anlage. Wir ordnen Zonen logisch, setzen Laufzeiten nach Fläche und Wasserangebot und weisen Sie so ein, dass Sie im Alltag den Überblick behalten. Technik bleibt im Hintergrund; Verständlichkeit und Nachjustierung nicht.",
      ],
    },
    {
      type: "stageGallery",
      title: "So entsteht eine alltagstaugliche Steuerung",
      intro:
        "Vier Schritte von der Zonenlogik bis zur Feinjustierung – klar benannt, ohne Feature-Hype.",
      stages: [
        {
          number: "01",
          caption: "Zonen logisch ordnen",
          title: "Jede Fläche bekommt ihr eigenes Programm",
          body: "Rasen, Beete und Hecken werden nicht in eine Schublade geworfen. Wir gruppieren Zonen so, dass Durchfluss, Laufzeit und Reihenfolge zum Anschluss passen. Sie sehen später auf der Steuerung, was wann läuft – und warum Rasen und Tropf getrennt bleiben sollten.",
          image: images.zonePlan,
          imageAlt: "Planung der Bewässerungszonen im Garten",
        },
        {
          number: "02",
          caption: "Programmieren",
          title: "Zeiten, die zum Garten und zum Wasser passen",
          body: "Laufzeiten und Startfenster richten wir nach Fläche, Regnerart und verfügbarem Druck ein – nicht nach einer Standardvorlage. Parallel laufen nur so viele Zonen, wie der Anschluss stabil versorgen kann. So entsteht ein Programm, das im Alltag funktioniert, statt nur auf dem Display gut auszusehen.",
          image: images.controllerProgramming,
          imageAlt: "Programmierung der Bewässerungssteuerung",
        },
        {
          number: "03",
          caption: "Einweisen",
          title: "Sie wissen, was Sie selbst ändern dürfen",
          body: "Nach der Inbetriebnahme zeigen wir Ihnen die Grundeinstellungen: Zonen erkennen, Zeiten nachvollziehen, Bewässerung pausieren. Gleichzeitig sagen wir klar, wann eine Anpassung sinnvoll ist und wann Sie lieber anrufen sollten. Einweisung ist bei uns kein Extra – sie gehört zur Übergabe.",
          image: images.einstellen,
          imageAlt: "Einweisung in die Bewässerungssteuerung vor Ort",
        },
        {
          number: "04",
          caption: "Feinjustieren",
          title: "Nach den ersten Läufen nachziehen",
          body: "Ein Programm steht selten nach dem ersten Tag perfekt. Nach den ersten heißen Wochen prüfen wir Sektoren, Laufzeiten und Abdeckung und ziehen nach, soweit im Projekt vereinbart. So wird aus der theoretischen Planung eine Anlage, die im echten Garten gleichmäßig arbeitet.",
          image: images.startEinstellung,
          imageAlt: "Feinjustierung der Bewässerung nach den ersten Läufen",
        },
      ],
      focus: {
        title: "Was wir bei der Steuerung bewusst tun",
        items: [
          {
            title: "Zonen getrennt halten",
            body: "Rasen und Tropf laufen nicht pauschal mit – unterschiedliche Bedürfnisse, unterschiedliche Intervalle.",
            icon: "grid",
          },
          {
            title: "Wasser zuerst",
            body: "Parallelbetrieb und Laufzeiten folgen Druck und Durchfluss – nicht umgekehrt.",
            icon: "gauge",
          },
          {
            title: "Übergabe statt App-Hype",
            body: "Funktionen nur einrichten, die Sie wirklich nutzen – und verständlich erklären.",
            icon: "badgeCheck",
          },
        ],
      },
    },
    {
      type: "cards",
      title: "Welche Steuerung zu Ihrem Garten passt",
      cards: [
        {
          title: "Einfache Zeitensteuerung",
          body: "Feste Startzeiten und Zonen – ideal, wenn Sie klare Programme brauchen und selten umstellen. Zuverlässig, nachvollziehbar, ohne Pflicht-App.",
          icon: "clock",
        },
        {
          title: "Wetterangepasst",
          body: "Regensensor oder Wetterführung, wo sinnvoll: weniger Verschwendung bei Nässe, ohne dass Sie täglich nachjustieren müssen.",
          icon: "phone",
        },
        {
          title: "Getrennte Tropfzonen",
          body: "Beete und Hecken mit eigenen Intervallen – getrennt vom Rasenprogramm. Wichtig, wenn Pflanzen und Gras unterschiedlich Wasser brauchen.",
          icon: "sprout",
          href: "/tropfbewaesserung-hecken-beete/",
        },
        {
          title: "Erweiterbar vorbereitet",
          body: "Steuerung und Ventilbox so angelegt, dass spätere Zonen oder Anschlüsse möglich bleiben – ohne alles neu planen zu müssen.",
          icon: "layers",
        },
      ],
    },
    {
      type: "checklist",
      title: "Was Sie nach der Übergabe können sollten",
      intro:
        "Kein Technikseminar – aber genug Sicherheit für den Alltag. Das sollte nach unserer Einweisung klar sein:",
      items: [
        {
          text: "Welche Zone Rasen, Beete oder Hecken versorgt",
          icon: "grid",
        },
        {
          text: "Wie Sie die Bewässerung pausieren (Urlaub, Starkregen)",
          icon: "clock",
        },
        {
          text: "Wie Sie Startzeiten oder Laufzeiten leicht verschieben",
          icon: "timer",
        },
        {
          text: "Wann ein Anruf sinnvoller ist als Experimentieren",
          icon: "badgeCheck",
        },
      ],
    },
    {
      type: "mistakes",
      title: "Typische Fehler bei der Steuerung",
      intro:
        "Diese Muster sehen wir oft – und vermeiden sie in der Planung und Übergabe:",
      items: [
        {
          title: "Alle Zonen gleich lang laufen lassen",
          body: "Rasen und Tropf brauchen selten dieselbe Dauer. Gleiche Minuten für alles führen zu nassen Wegen oder durstigen Beeten.",
        },
        {
          title: "App einrichten, aber nicht erklären",
          body: "Unbenutzte Funktionen helfen nicht. Besser: wenige Einstellungen, die Sie verstehen und im Notfall selbst anpassen können.",
        },
        {
          title: "Nie nach den ersten heißen Wochen prüfen",
          body: "Abdeckung und Laufzeiten zeigen sich erst im Betrieb. Feinjustierung gehört zur professionellen Übergabe – nicht zum Glücksspiel.",
        },
        {
          title: "Programmierung mit Winterservice verwechseln",
          body: "Einstellung für die Saison und technische Wintervorbereitung sind getrennte Themen. Wir benennen das klar, damit keine Lücken entstehen.",
        },
      ],
    },
    {
      type: "media",
      title: "Steuerung im Hintergrund, Ergebnis im Garten",
      body: "Die beste Steuerung ist die, die Sie selten öffnen müssen. Sichtbar bleibt der Garten: gleichmäßigere Flächen, trockene Wege, ruhiger Alltag ohne Schlauch. Steuergerät und Ventilbox gehören zur Anlage – nicht zur Werbefläche. Entscheidend ist, dass Zonen, Zeiten und Nachjustierung zusammenpassen.",
      image: images.steuerung,
      imageAlt: "Steuergerät der Gartenbewässerung im Technikbereich",
      reverse: true,
    },
    {
      type: "prose",
      title: "Das Ergebnis im Alltag",
      paragraphs: [
        "Sie starten die Saison mit nachvollziehbaren Zonen und Zeiten. Anpassungen bleiben überschaubar – und Sie wissen, was zur Einweisung gehört und was späterer Service ist.",
        "So wird Automatik im Garten spürbar: weniger Schlauch, weniger Rätselraten, und eine Anlage, die zu Ihrem Grundstück und Ihrem Wasseranschluss passt.",
      ],
    },
  ],
  faqs: [
    {
      question: "Brauche ich unbedingt eine App?",
      answer:
        "Nein. Viele Anlagen laufen zuverlässig mit klaren Zeiten am Steuergerät. App oder Wetterführung sind sinnvoll, wenn Sie sie wirklich nutzen – nicht als Pflichtfeature.",
    },
    {
      question: "Können Rasen und Beete getrennt laufen?",
      answer:
        "Ja – und das ist oft sinnvoll. Versenkregner und Tropf haben unterschiedliche Intervalle. Getrennte Zonen sind Teil einer vernünftigen Auslegung, nicht ein Luxus.",
    },
    {
      question: "Wer stellt die Steuerung ein?",
      answer:
        "Wir programmieren, prüfen und weisen ein. Feinjustierung nach den ersten Läufen gehört dazu – im vereinbarten Projektumfang, nicht als Ratespiel für Sie.",
    },
    {
      question: "Was passiert, wenn ich etwas falsch stelle?",
      answer:
        "Kleine Zeitverschiebungen sind normal. Wenn Abdeckung, Druck oder Zonen durcheinandergeraten, ist ein Anruf oft günstiger als stundenlanges Herumprobieren. Genau dafür gibt es die Einweisung mit klaren Grenzen.",
    },
  ],
  related: [
    {
      href: "/service/",
      label: "Start und Einstellung",
      description: "Nach dem Einbau justieren",
    },
    {
      href: "/bewaesserungskomponenten/",
      label: "Komponenten",
      description: "Ventile und Technik im System",
    },
    {
      href: "/rasenbewaesserung-installieren/",
      label: "Rasenbewässerung",
      description: "Zonen und Überdeckung",
    },
    {
      href: "/leistungen/",
      label: "Leistungen",
      description: "Gesamtsystem im Überblick",
    },
  ],
  cta: {
    title: "Steuerung alltagstauglich einrichten?",
    primaryLabel: "Garten berechnen",
    primaryHref: calcHref,
    secondaryLabel: "Kontakt",
    secondaryHref: "/kontakt/",
  },
};


export const rasenPage = {
  seo: {
    title: "Automatische Rasenbewässerung planen und installieren",
    description:
      "Rasenbewässerung installieren: Zonen, Überdeckung, Wassercheck, Einbau und Einstellung für privaten Rasen – vom Problem bis zum gleichmäßigen Ergebnis.",
    path: "/rasenbewaesserung-installieren/",
  },
  query: "Rasenbewässerung installieren",
  h1: "Automatische Rasenbewässerung – gleichmäßig statt Schlauch-Alltag",
  lead:
    "Zonen und Überdeckung so geplant, dass der Rasen gleichmäßig versorgt wird – ohne Ratespiel an heißen Tagen. RegnerWerk liefert eine eingestellte Versenkregner-Anlage, keinen Düsenkatalog.",
  heroImage: images.rasenHeadToHead,
  heroImageAlt: "Privater Rasen mit laufender Versenkregner-Bewässerung",
  blocks: [
    {
      type: "prose",
      title: "Das Problem hinter trockenen und nassen Stellen",
      paragraphs: [
        "Am Schlauch entscheiden Zeit und Anwesenheit. Ergebnis: Ecken bleiben trocken, Wege werden nass, und nach dem Urlaub sieht der Rasen unruhig aus. Mehr Wasser hilft selten – es fehlt die wiederholbare Verteilung.",
        "Automatische Rasenbewässerung lohnt sich, wenn Fläche, Form oder Alltag den Schlauch überfordern. Ziel ist ruhige, geplante Versorgung: Regnerpositionen und Zonen folgen dem Garten und dem Wasseranschluss.",
      ],
    },
    {
      type: "stageGallery",
      title: "So entsteht Ihre Rasenbewässerung",
      intro:
        "Fünf Etappen vom Check bis zum Ergebnis – sichtbar und nachvollziehbar.",
      stages: [
        {
          number: "01",
          title: "Fläche und Wasser",
          body: "Form, Hindernisse, Druck und Durchfluss klären.",
          image: images.measurement,
          imageAlt: "Prüfung von Fläche und Wasseranschluss",
        },
        {
          number: "02",
          title: "Zonen und Überdeckung",
          body: "Regner so setzen, dass sie sich gegenseitig versorgen.",
          image: images.zonePlan,
          imageAlt: "Planung von Regnerpositionen und Zonen",
        },
        {
          number: "03",
          title: "Einbau",
          body: "Trassen schützen, öffnen, verlegen und wiederherstellen.",
          image: images.trenchInstallation,
          imageAlt: "Einbau der Leitungen im Rasen",
        },
        {
          number: "04",
          title: "Einstellen",
          body: "Sektoren und Laufzeiten justieren und prüfen.",
          image: images.controllerProgramming,
          imageAlt: "Einstellung der Rasenbewässerung",
        },
        {
          number: "05",
          title: "Ergebnis",
          body: "Gleichmäßigere Fläche, unsichtbare Technik im Alltag.",
          image: images.ueberdeckungExpertin,
          imageAlt: "Laufende Versenkregner mit Überdeckung",
        },
      ],
      focus: {
        title: "Worauf die Planung achtet",
        items: [
          {
            title: "Überdeckung",
            body: "Head-to-head: Regner erreichen sich – weniger trockene Inseln.",
            icon: "target",
          },
          {
            title: "Zonen und Durchfluss",
            body: "Nicht mehr parallel, als der Anschluss stabil liefert.",
            icon: "gauge",
          },
          {
            title: "Hindernisse",
            body: "Terrasse, Wege und Beete steuern Sektoren und Positionen.",
            icon: "home",
          },
        ],
      },
    },
    {
      type: "compare",
      title: "Schlauch vs. automatische Rasenbewässerung",
      intro:
        "Beide Wege bewässern. Der Unterschied liegt in Wiederholbarkeit und Alltag.",
      left: {
        title: "Schlauch / mobiler Regner",
        image: images.houseGarden,
        imageAlt: "Manuelle Bewässerung im Privatgarten",
        tone: "muted",
        items: [
          { text: "Abhängig von Zeit und Anwesenheit", icon: "clock" },
          { text: "Schwer wiederholbar gleichmäßig", icon: "person" },
          { text: "Oft Übernässung an Wegen", icon: "droplets" },
          { text: "Kein Zonenkonzept", icon: "grid" },
        ],
      },
      right: {
        title: "Geplante Versenkregner-Anlage",
        image: images.rasenHeadToHead,
        imageAlt: "Geplante Rasenbewässerung mit Versenkregnern",
        tone: "accent",
        items: [
          { text: "Automatik nach Zonen", icon: "timer" },
          { text: "Überdeckung nach Plan", icon: "target" },
          { text: "Technik unsichtbar in Ruhe", icon: "eyeOff" },
          { text: "Einstellung nach Einbau", icon: "badgeCheck" },
          { text: "Weniger Schlauch-Alltag", icon: "clock" },
          { text: "Gleichmäßigere Fläche", icon: "grid" },
          { text: "Wetteranpassung möglich", icon: "phone" },
          { text: "Wassercheck vor Planung", icon: "gauge" },
        ],
      },
    },
    {
      type: "cards",
      title: "Varianten je nach Garten",
      cards: [
        {
          title: "Kompakter Rasengarten",
          body: "Wenige Zonen, klare Rechtecke – oft der Einstieg in Automatik.",
          icon: "grid",
        },
        {
          title: "Rasen mit Hindernissen",
          body: "Terrasse, Beete und schmale Streifen brauchen präzise Sektoren.",
          icon: "layers",
        },
        {
          title: "Rasen plus Tropf",
          body: "Hecke und Beete getrennt steuern – nicht mit dem Rasen mitlaufen lassen.",
          icon: "sprout",
          href: "/tropfbewaesserung-hecken-beete/",
        },
        {
          title: "Nachrüstung im Bestand",
          body: "Schonender Einbau, wenn der Garten bereits fertig ist.",
          icon: "shield",
          href: "/bewaesserung-bestehender-garten/",
        },
      ],
    },
    {
      type: "media",
      title: "Was Sie auf der Baustelle sehen sollten",
      body: "Geplante Trassen, geschützte Flächen und nachvollziehbare Regnerpositionen – nicht Chaos und Ratespiel. Nach dem Einbau zählen Funktionsprüfung und Feinjustage genauso wie die Rohre unter dem Rasen.",
      image: images.trenchDoc,
      imageAlt: "Sorgfältiger Einbau der Rasenbewässerung",
    },
    {
      type: "prose",
      title: "Das fertige Ergebnis",
      paragraphs: [
        "Der Rasen wird in klaren Zonen versorgt. Versenkregner treten im Ruhezustand zurück. Sie bedienen Zeiten statt Schlauch – und wissen, dass Überdeckung und Wassercheck der Planung zugrunde lagen.",
        "Trockene Inseln und Pfützenwege verschwinden nicht über Nacht überall gleich, aber die Anlage liefert die Voraussetzung für eine ruhigere, gleichmäßigere Fläche über die Saison.",
      ],
    },
    {
      type: "mistakes",
      title: "Fehler bei Rasenbewässerung",
      items: [
        {
          title: "Düsen wählen vor dem Wassercheck",
          body: "Ohne Druck und Durchfluss bleibt jede Überdeckung Spekulation.",
        },
        {
          title: "Beete mit dem Rasen mitlaufen lassen",
          body: "Pflanzen brauchen oft andere Intervalle – Tropfzonen trennen.",
        },
        {
          title: "Nur einschalten, nicht einstellen",
          body: "Sektoren und Laufzeiten gehören zur Übergabe.",
        },
        {
          title: "Online-Preis als Vertrag lesen",
          body: "Orientierung online, verbindlich nach Prüfung vor Ort.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Brauche ich Versenkregner oder reicht ein mobiler Regner?",
      answer:
        "Mobile Regner bleiben abhängig von Zeit und Position. Versenkregner mit geplanter Überdeckung liefern wiederholbare Automatik – sinnvoll, wenn der Alltag den Schlauch überfordert.",
    },
    {
      question: "Funktioniert Rasenbewässerung im bestehenden Garten?",
      answer:
        "Ja. Wir planen Trassen, schützen Flächen und stellen wieder her. Details: Nachrüstung im bestehenden Garten.",
    },
    {
      question: "Wie viele Zonen brauche ich?",
      answer:
        "Das folgt Form, Hindernissen und verfügbarem Durchfluss – nicht einer Pauschalzahl aus dem Katalog.",
    },
    {
      question: "Was kostet Rasenbewässerung?",
      answer:
        "Online erhalten Sie Orientierung. Verbindlich nach Wasser- und Objektprüfung. Mehr unter Kosten.",
    },
  ],
  related: [
    {
      href: "/bewaesserung-bestehender-garten/",
      label: "Bestehender Garten",
      description: "Nachrüstung ohne Show-Baustelle",
    },
    {
      href: "/tropfbewaesserung-hecken-beete/",
      label: "Beete und Hecken",
      description: "Tropf getrennt vom Rasen",
    },
    {
      href: "/bewaesserungsanlage-installieren-lassen/",
      label: "Planung",
      description: "Vom Check bis zum Angebot",
    },
    {
      href: "/service/",
      label: "Einstellung",
      description: "Nach dem Einbau justieren",
    },
  ],
  cta: {
    title: "Rasen automatisch und gleichmäßig bewässern?",
    primaryLabel: "Garten berechnen",
    primaryHref: calcHref,
    secondaryLabel: "Kontakt",
    secondaryHref: "/kontakt/",
  },
};


export const installPage = {
  seo: {
    title: "Bewässerungsanlage planen: Wassercheck, Zonen und Angebot",
    description:
      "Bewässerung planen lassen: zuerst Wasser und Grundstück prüfen, dann Zonen und Trassen festlegen – bevor der Rasen geöffnet wird. Klare Annahmen und Preis vor Baubeginn.",
    path: "/bewaesserungsanlage-installieren-lassen/",
  },
  query: "Bewässerungsanlage planen installieren lassen",
  h1: "Planung zuerst – dann öffnen wir den Garten",
  lead:
    "Zuerst Wasser und Grundstück, dann der Plan: Zonen und Überdeckung stehen fest, bevor der Rasen geöffnet wird. RegnerWerk liefert Auslegung und Angebot mit nachvollziehbaren Annahmen – nicht Graben auf Verdacht.",
  heroImage: images.process,
  heroImageAlt: "Planung der Bewässerung mit Markierung und Aufmaß",
  blocks: [
    {
      type: "prose",
      title: "Warum Graben vor dem Messen riskant ist",
      paragraphs: [
        "Ohne Druck, Durchfluss und Trassenkonzept entstehen falsche Zonen, teure Nacharbeiten oder eine Anlage, die der Anschluss nicht trägt. Viele Frustprojekte beginnen mit zu frühem Öffnen des Rasens.",
        "Wir trennen Orientierung, Prüfung und verbindliches Angebot. Online hilft bei der Größenordnung. Vor Ort entscheiden Wasser und Grundstück, was sinnvoll ist – und was im Preis angenommen wurde.",
      ],
    },
    {
      type: "stageGallery",
      title: "So planen wir Ihre Anlage",
      intro: "Vom ersten Eindruck bis zum bestätigten Angebot – Schritt für Schritt.",
      stages: [
        {
          number: "01",
          title: "Online orientieren",
          body: "Fläche und Aufwand grob einschätzen – ohne Festpreis-Illusion.",
          image: images.planungBuero,
          imageAlt: "Erste Orientierung zur Bewässerungsplanung",
        },
        {
          number: "02",
          title: "Wasser und Grundstück",
          body: "Druck, Durchfluss, Zugang und Hindernisse vor Ort prüfen.",
          image: images.measurement,
          imageAlt: "Prüfung des Wasseranschlusses",
        },
        {
          number: "03",
          title: "Zonen und Trassen",
          body: "Rasen, Beete und Leitungswege zeichnen – vor dem Öffnen.",
          image: images.process,
          imageAlt: "Markierung und Planung der Trassen",
        },
        {
          number: "04",
          title: "Angebot bestätigen",
          body: "Umfang, Annahmen und Preis nachvollziehbar festhalten.",
          image: images.planungBuero,
          imageAlt: "Abstimmung von Plan und Angebot",
        },
        {
          number: "05",
          title: "Übergang Montage",
          body: "Erst wenn der Plan steht, folgt der schonende Einbau.",
          image: images.trenchDoc,
          imageAlt: "Vorbereiteter Einbau nach Planung",
        },
      ],
      focus: {
        title: "Was im Plan festgehalten wird",
        items: [
          {
            title: "Zonenlogik",
            body: "Welche Flächen gemeinsam oder getrennt laufen.",
            icon: "layers",
          },
          {
            title: "Trassenführung",
            body: "Wo Leitungen verlaufen – mit Respekt vor Wegen und Beeten.",
            icon: "branch",
          },
          {
            title: "Annahmen",
            body: "Was im Preis steckt – und was ausdrücklich nicht.",
            icon: "file",
          },
        ],
      },
    },
    {
      type: "checklist",
      title: "Checkliste vor der verbindlichen Planung",
      items: [
        { text: "Wasseranschluss oder Brunnen zugänglich", icon: "droplets" },
        { text: "Ungefähre Flächen für Rasen / Beete / Hecke", icon: "grid" },
        { text: "Bekannte Hindernisse (Terrasse, Wege, Bäume)", icon: "home" },
        { text: "Wunsch zur Steuerung (einfach vs. wettergeführt)", icon: "phone" },
        { text: "Neubau oder bestehender Garten", icon: "shield" },
      ],
    },
    {
      type: "cards",
      title: "Planung für unterschiedliche Ausgangslagen",
      cards: [
        {
          title: "Neubau",
          body: "Trassen lassen sich oft sauber in die Flächenplanung integrieren.",
          icon: "home",
        },
        {
          title: "Bestand",
          body: "Mehr Schutz und Wiederherstellung – Planung vor dem Öffnen ist entscheidend.",
          icon: "shield",
          href: "/bewaesserung-bestehender-garten/",
        },
        {
          title: "Rasen fokus",
          body: "Überdeckung und Zonenanzahl stehen im Zentrum.",
          icon: "droplets",
          href: "/rasenbewaesserung-installieren/",
        },
        {
          title: "Mischgarten",
          body: "Regner und Tropf getrennt denken – von Anfang an.",
          icon: "sprout",
          href: "/tropfbewaesserung-hecken-beete/",
        },
      ],
    },
    {
      type: "media",
      title: "Plan sichtbar machen",
      body: "Markierungen, Aufmaß und skizzierte Zonen gehören zur Planung – nicht erst zur Baustelle. So verstehen Sie vor dem Spatenstich, was gebaut wird und warum.",
      image: images.process,
      imageAlt: "Planung und Markierung im Garten",
    },
    {
      type: "prose",
      title: "Das Ergebnis der Planung",
      paragraphs: [
        "Bevor der Rasen geöffnet wird, stehen Zonen, Trassen und Annahmen. Sie kennen den Umfang und den Preisrahmen nach Prüfung – nicht nur eine Online-Zahl.",
        "Danach folgt die Montage mit klarem Auftrag. Planung ist bei RegnerWerk kein Papier ohne Verantwortung, sondern die Grundlage für Einbau und Einstellung.",
      ],
    },
  ],
  faqs: [
    {
      question: "Ist die Online-Berechnung schon das Angebot?",
      answer:
        "Nein. Online orientiert zu Fläche und Aufwand. Verbindlich wird das Angebot nach Prüfung von Wasser und Grundstück.",
    },
    {
      question: "Warum zuerst messen?",
      answer:
        "Druck und Durchfluss begrenzen, wie viele Zonen sinnvoll parallel laufen und welche Komponenten passen.",
    },
    {
      question: "Gehört der Einbau zur Planung?",
      answer:
        "Planung und Angebot stehen vor dem Einbau. Die Montage folgt dem bestätigten Umfang – siehe auch Nachrüstung und Service.",
    },
  ],
  related: [
    {
      href: calcHref,
      label: "Garten berechnen",
      description: "Erste Orientierung online",
    },
    {
      href: "/bewaesserungsanlage-wasseranschluss-pruefen/",
      label: "Wasseranschluss prüfen",
      description: "Druck und Durchfluss verstehen",
    },
    {
      href: "/bewaesserung-bestehender-garten/",
      label: "Montage im Bestand",
      description: "Schonender Einbau",
    },
    {
      href: "/bewaesserungsanlage-kosten/",
      label: "Kosten",
      description: "Preisfaktoren erklären",
    },
  ],
  cta: {
    title: "Anlage planen lassen – bevor gegraben wird?",
    primaryLabel: "Garten berechnen",
    primaryHref: calcHref,
    secondaryLabel: "Kontakt",
    secondaryHref: "/kontakt/",
  },
};

export const bestehendPage = {
  seo: {
    title: "Bewässerung im bestehenden Garten nachrüsten",
    description:
      "Bewässerung nachrüsten: schonender Einbau im bestehenden Garten – schützen, öffnen, dokumentieren, wiederherstellen. Trassen geplant, bevor der Rasen aufgeht.",
    path: "/bewaesserung-bestehender-garten/",
  },
  query: "Bewässerung bestehender Garten nachrüsten",
  h1: "Montage mit Respekt vor dem bestehenden Garten",
  lead:
    "Einbau mit Respekt vor dem bestehenden Garten: schützen, öffnen, dokumentieren, wiederherstellen. Die Bewässerung kommt hinzu – der Garten soll bleiben.",
  heroImage: images.houseGarden,
  heroImageAlt: "Bestehender Privatgarten vor der Nachrüstung",
  blocks: [
    {
      type: "prose",
      title: "Die Angst vor der Baustelle ist berechtigt",
      paragraphs: [
        "Fertige Rasenflächen, Wege und Beete sind der Grund, warum viele Eigentümer zögern. Eine Nachrüstung ohne Trassenplan und Schutz endet oft in Chaos, verdichtetem Boden und monatelang sichtbaren Narben.",
        "Wir planen Leitungswege vor dem Öffnen, schützen Flächen während der Arbeit und stellen den Zustand danach wieder her – nachvollziehbar und ohne Show. Montage heißt hier Handwerk, nicht Abriss.",
      ],
    },
    {
      type: "stageGallery",
      title: "So läuft die Montage im Bestand",
      intro: "Sechs Schritte vom Schutz bis zur wiederhergestellten Fläche.",
      stages: [
        {
          number: "01",
          title: "Bestand aufnehmen",
          body: "Garten, Wege und sensible Stellen vor dem Spatenstich klären.",
          image: images.houseGarden,
          imageAlt: "Bestehender Garten vor der Nachrüstung",
        },
        {
          number: "02",
          title: "Trassen planen",
          body: "Leitungen führen, bevor geöffnet wird – mit Plan, nicht mit Gefühl.",
          image: images.process,
          imageAlt: "Trassenplanung im bestehenden Garten",
        },
        {
          number: "03",
          title: "Schützen",
          body: "Wege, Beete und Lagerflächen absichern.",
          image: images.teamWork,
          imageAlt: "Schutzmaßnahmen auf der Baustelle",
        },
        {
          number: "04",
          title: "Öffnen und verlegen",
          body: "Gezielte Öffnung, Leitungen setzen, Ordnung halten.",
          image: images.trenchDoc,
          imageAlt: "Sorgfältige Verlegung der Leitungen",
        },
        {
          number: "05",
          title: "Dokumentieren",
          body: "Wichtige Verläufe und Ventile festhalten.",
          image: images.trenchDoc,
          imageAlt: "Dokumentation offener Leitungen",
        },
        {
          number: "06",
          title: "Wiederherstellen",
          body: "Rasen und Flächen zurückführen – nutzbar statt Dauerbaustelle.",
          image: images.lawn,
          imageAlt: "Wiederherstellung der Rasenfläche",
        },
      ],
    },
    {
      type: "compare",
      title: "Chaotische Nachrüstung vs. geplante Montage",
      left: {
        title: "Ohne Trassenplan",
        image: images.houseGarden,
        imageAlt: "Garten vor unsachgemäßer Öffnung",
        tone: "muted",
        items: [
          { text: "Öffnen auf Verdacht", icon: "alert" },
          { text: "Wege ungeschützt", icon: "eyeOff" },
          { text: "Keine Dokumentation", icon: "file" },
          { text: "Lange sichtbare Narben", icon: "clock" },
        ],
      },
      right: {
        title: "Mit RegnerWerk",
        image: images.trenchDoc,
        imageAlt: "Geplante Nachrüstung mit Dokumentation",
        tone: "accent",
        items: [
          { text: "Trassen vor dem Öffnen", icon: "ruler" },
          { text: "Schutz der Flächen", icon: "shield" },
          { text: "Dokumentierte Verläufe", icon: "camera" },
          { text: "Wiederherstellung einplanen", icon: "trees" },
          { text: "Saubere Ventilbox", icon: "layers" },
          { text: "Übergabe mit Prüfung", icon: "badgeCheck" },
          { text: "Links zu Schonung & Pass", icon: "file" },
          { text: "Klarer Umfang vor Start", icon: "clipboard" },
        ],
      },
    },
    {
      type: "cards",
      title: "Passende Vertiefungen",
      cards: [
        {
          title: "Schonender Einbau",
          body: "Mechanismus Schutz und Wiederherstellung im Detail.",
          href: "/schonender-einbau/",
          icon: "shield",
        },
        {
          title: "Digitaler Anlagenpass",
          body: "Verläufe und Einstellungen später nachvollziehen.",
          href: "/digitaler-anlagenpass/",
          icon: "bookImage",
        },
        {
          title: "Rasen nachrüsten",
          body: "Versenkregner und Überdeckung im Bestand.",
          href: "/rasenbewaesserung-installieren/",
          icon: "droplets",
        },
        {
          title: "Einstellung danach",
          body: "Nicht nur einbauen – prüfen und justieren.",
          href: "/service/",
          icon: "wrench",
        },
      ],
    },
    {
      type: "media",
      title: "Ordnung ist Teil der Montage",
      body: "Aushub auf Schutz, gerade Trassen, zugängliche Ventile – so sieht verantwortlicher Einbau aus. Was unter dem Rasen liegt, soll später auffindbar bleiben.",
      image: images.trenchDoc,
      imageAlt: "Geöffnete Trasse mit geschütztem Aushub",
      reverse: true,
    },
    {
      type: "prose",
      title: "Das Ergebnis nach der Montage",
      paragraphs: [
        "Der Garten ist wieder nutzbar. Die Technik tritt zurück. Sie haben eine laufende oder startklare Anlage und nachvollziehbare Dokumentation wichtiger Abschnitte.",
        "Narben heilen mit der Saison – aber der Unterschied zu einer ungeplanten Baustelle ist sofort spürbar: weniger Chaos, klarer Umfang, respektierter Bestand.",
      ],
    },
  ],
  faqs: [
    {
      question: "Wird der Rasen zerstört?",
      answer:
        "Wir öffnen gezielt und stellen wieder her. Vollständig unsichtbar ist jede Öffnung nicht – aber geplant und geschützt statt flächig zerstört.",
    },
    {
      question: "Wie lange dauert die Montage?",
      answer:
        "Das hängt von Fläche, Zonen und Zugang ab. Im Angebot halten wir den Umfang fest – nicht eine Werbe-Pauschalzeit.",
    },
    {
      question: "Was ist mit Dokumentation?",
      answer:
        "Wichtige Verläufe und Einstellungen halten wir nachvollziehbar fest. Vertiefung: digitaler Anlagenpass.",
    },
  ],
  related: [
    {
      href: "/schonender-einbau/",
      label: "Schonender Einbau",
      description: "Schutz als Mechanismus",
    },
    {
      href: "/digitaler-anlagenpass/",
      label: "Anlagenpass",
      description: "Verläufe dokumentieren",
    },
    {
      href: "/bewaesserungsanlage-installieren-lassen/",
      label: "Planung",
      description: "Vor dem Öffnen klären",
    },
    {
      href: "/projekte/",
      label: "Projekte",
      description: "Beispiele ansehen",
    },
  ],
  cta: {
    title: "Bewässerung nachrüsten – Garten behalten?",
    primaryLabel: "Garten berechnen",
    primaryHref: calcHref,
    secondaryLabel: "Kontakt",
    secondaryHref: "/kontakt/",
  },
};

export const servicePage = {
  seo: {
    title: "Bewässerung einstellen und Service nach dem Einbau",
    description:
      "Start und Einstellung der Bewässerungsanlage: Inbetriebnahme, Funktionsprüfung, Nachjustierung in der ersten Saison. Winterservice klar vom Einbau getrennt.",
    path: "/service/",
  },
  query: "Bewässerung einstellen Service Nachjustierung",
  h1: "Start und Einstellung – nicht nur einschalten",
  lead:
    "Einschalten reicht nicht. Wir stellen ein, prüfen und justieren nach – im vereinbarten Rahmen. So kommt der Plan im Garten an, und Servicegrenzen bleiben klar.",
  heroImage: images.startEinstellung,
  heroImageAlt: "Einstellung und Prüfung der Bewässerungsanlage",
  blocks: [
    {
      type: "prose",
      title: "Warum „läuft schon“ oft nicht reicht",
      paragraphs: [
        "Nach dem Einbau wirken Anlagen schnell fertig: Wasser kommt, Regner drehen. Fehlen Sektorenfeinschliff, Laufzeiten und eine kurze Funktionsprüfung, entstehen trockene Ecken, nasse Wege oder unnötiger Verbrauch.",
        "RegnerWerk trennt Einbau, Einstellung und späteren Service. Sie wissen, was zur Übergabe gehört – und was Winter oder Saisonpflege zusätzlich bedeutet.",
      ],
    },
    {
      type: "stageGallery",
      title: "So starten wir die Anlage",
      intro: "Von der Inbetriebnahme bis zur klaren Servicegrenze.",
      stages: [
        {
          number: "01",
          title: "Inbetriebnahme",
          body: "Anlage befüllen, Zonen anfahren, grobe Funktion prüfen.",
          image: images.startEinstellung,
          imageAlt: "Inbetriebnahme der Bewässerung",
        },
        {
          number: "02",
          title: "Sektoren und Zeiten",
          body: "Regner und Tropf auf Fläche und Bedarf einstellen.",
          image: images.rasenHeadToHead,
          imageAlt: "Justierung der Regnersektoren",
        },
        {
          number: "03",
          title: "Funktionsprüfung",
          body: "Abdeckung, Lecks und Schaltverhalten kontrollieren.",
          image: images.measurement,
          imageAlt: "Prüfung von Druck und Funktion",
        },
        {
          number: "04",
          title: "Nachjustierung",
          body: "In der ersten Saison Feinschliff im vereinbarten Rahmen.",
          image: images.teamWork,
          imageAlt: "Nachjustierung vor Ort",
        },
        {
          number: "05",
          title: "Servicegrenzen",
          body: "Winter und Wartung klar benennen – nicht stillschweigend einpreisen.",
          image: images.steuerung,
          imageAlt: "Abstimmung zu Steuerung und Service",
        },
      ],
    },
    {
      type: "cards",
      title: "Was Service bei RegnerWerk meint",
      cards: [
        {
          title: "Einstellung nach Einbau",
          body: "Teil der Übergabe: Sektoren, Laufzeiten, kurze Einweisung.",
          icon: "badgeCheck",
        },
        {
          title: "Erste Saison",
          body: "Nachjustierung im vereinbarten Rahmen – nicht unbegrenzt.",
          icon: "sprout",
          href: "/erste-saison-betreuung/",
        },
        {
          title: "Nachgemessen",
          body: "Ergebnis prüfen, nicht nur einschalten.",
          icon: "gauge",
          href: "/bewaesserung-nachgemessen/",
        },
        {
          title: "Winterservice",
          body: "Eigene Leistung – klar vom Einbau getrennt.",
          icon: "snow",
          href: "/wartung-winterservice/",
        },
      ],
    },
    {
      type: "checklist",
      title: "Übergabe-Check",
      intro: "Das sollten Sie nach Start und Einstellung mitnehmen.",
      items: [
        { text: "Zonen und typische Laufzeiten verstanden", icon: "grid" },
        { text: "Regnersektoren grob passend zur Fläche", icon: "target" },
        { text: "Steuerung bedienen können (Grundfunktionen)", icon: "phone" },
        { text: "Klarheit: was Nachjustierung vs. Winterservice ist", icon: "clipboard" },
      ],
    },
    {
      type: "mistakes",
      title: "Fehler nach dem Einbau",
      items: [
        {
          title: "Nie nachjustieren",
          body: "Die erste Trockenphase zeigt oft Feinschliffbedarf.",
        },
        {
          title: "Alles selbst verdrehen",
          body: "Ohne Plan zerstören Sie die Auslegung – lieber kurz abstimmen.",
        },
        {
          title: "Winter vergessen",
          body: "Frost und stehendes Wasser schaden Komponenten – Service klar planen.",
        },
        {
          title: "Service mit Garantie-Werbesprache vermischen",
          body: "Wir benennen Umfang und Grenzen statt Superlative.",
        },
      ],
    },
    {
      type: "media",
      title: "Einstellen ist sichtbare Arbeit",
      body: "Manometer, Sektorenschlüssel und Probeläufe gehören dazu. Qualität zeigt sich in der Verteilung auf der Fläche – nicht nur im eingeschalteten Display.",
      image: images.measurement,
      imageAlt: "Technische Prüfung am Wasseranschluss",
    },
    {
      type: "prose",
      title: "Das Ergebnis nach Start und Einstellung",
      paragraphs: [
        "Die Anlage läuft wie geplant: Zonen schalten, Verteilung stimmt in der groben Linie, Sie kennen die Bedienung. Feinschliff in der ersten Saison bleibt im vereinbarten Rahmen möglich.",
        "Winter und wiederkehrende Wartung sind keine stillen Zugaben – sondern klar benannte Leistungen, wenn Sie sie brauchen.",
      ],
    },
  ],
  faqs: [
    {
      question: "Ist Einstellung im Einbau enthalten?",
      answer:
        "Inbetriebnahme und Grundeinstellung gehören zur Übergabe. Umfang der Nachjustierung in der ersten Saison halten wir im Angebot fest.",
    },
    {
      question: "Was ist Winterservice?",
      answer:
        "Eigene Leistung zur Absicherung vor Frost – nicht automatisch Teil jedes Einbaupreises. Details auf der Winterservice-Seite.",
    },
    {
      question: "Können Sie fremde Anlagen einstellen?",
      answer:
        "Teilweise, nach Zustand und Dokumentation. Oft ist zuerst eine Bestandsaufnahme nötig – ohne Garantie fremder Alttechnik.",
    },
  ],
  related: [
    {
      href: "/bewaesserung-nachgemessen/",
      label: "Nachgemessen",
      description: "Ergebnis prüfen",
    },
    {
      href: "/erste-saison-betreuung/",
      label: "Erste Saison",
      description: "Feinschliff vereinbaren",
    },
    {
      href: "/wartung-winterservice/",
      label: "Winterservice",
      description: "Klar vom Einbau getrennt",
    },
    {
      href: "/bewaesserungssteuerung/",
      label: "Steuerung",
      description: "Bedienung im Alltag",
    },
  ],
  cta: {
    title: "Anlage einstellen oder Service klären?",
    primaryLabel: "Kurz anfragen",
    primaryHref: "/kontakt/",
    secondaryLabel: "Garten berechnen",
    secondaryHref: calcHref,
  },
};
