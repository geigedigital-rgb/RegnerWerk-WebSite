/** Phase 2 — advantage / trust-mechanism pages (DE). Brand skill structure. */

export type AdvantagePage = {
  seo: { title: string; description: string; path: string };
  /** Primary search intent (internal) */
  query: string;
  h1: string;
  problem: { title: string; body: string };
  promise: { title: string; body: string };
  how: { title: string; body: string; steps: string[] };
  outcome: { title: string; body: string };
  checks: { title: string; items: string[] };
  boundaries: { title: string; body: string };
  /** Only real examples later — placeholder copy until approved */
  exampleNote: string;
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string; description?: string }[];
  cta: { title: string; primaryLabel: string; primaryHref: string };
};

export const schonenderEinbauPage: AdvantagePage = {
  seo: {
    title: "Schonender Einbau der Bewässerung im bestehenden Garten",
    description:
      "Der Garten bleibt. Die Bewässerung kommt. Schutz von Rasen, Wegen und Pflanzen, geplante Leitungswege und Wiederherstellung nach dem Einbau.",
    path: "/schonender-einbau/",
  },
  query: "schonender Einbau Bewässerung Garten",
  h1: "Schonender Einbau der Bewässerungsanlage",
  problem: {
    title: "Das Problem",
    body: "Viele Eigentümer fürchten, dass der fertige Garten bei der Nachrüstung leidet: offene Gräben, beschädigte Wege, gestresste Pflanzen und ein Rasen, der monatelang aussieht wie eine Baustelle.",
  },
  promise: {
    title: "Unser Versprechen",
    body: "Der Garten bleibt. Die Bewässerung kommt. Wir planen Leitungswege mit Rücksicht auf vorhandene Flächen und stellen den Zustand nach dem Einbau wieder her.",
  },
  how: {
    title: "So arbeiten wir",
    body: "Schonender Einbau ist ein Ablauf – kein Slogan.",
    steps: [
      "Zustand von Rasen, Wegen und Pflanzungen vor Beginn festhalten",
      "Leitungswege planen, bevor geöffnet wird",
      "Flächen und empfindliche Bereiche während der Arbeit schützen",
      "Rasen kontrolliert öffnen und zurücklegen",
      "Offene Trassen dokumentieren, bevor verfüllt wird",
      "Fläche nach dem Verfüllen wiederherstellen und Spuren prüfen",
    ],
  },
  outcome: {
    title: "Was Sie erhalten",
    body: "Eine eingebaute Anlage in einem bestehenden Garten – mit nachvollziehbarem Schutz der Fläche und klarer Dokumentation der unterirdischen Verläufe.",
  },
  checks: {
    title: "Was geprüft oder dokumentiert wird",
    items: [
      "Ausgangszustand vor dem Einbau",
      "Geplante Trassenführung",
      "Fotos wichtiger Leitungsabschnitte vor dem Verfüllen",
      "Sichtbare Spuren direkt nach Abschluss und Hinweise zur Nachpflege",
    ],
  },
  boundaries: {
    title: "Grenzen",
    body: "Frisch verlegte Bereiche können zunächst auffallen. Biologisches Nachwachsen hängt von Witterung und Pflege ab. Extrem enge Bestandsverhältnisse können den Aufwand erhöhen – das benennen wir vor Baubeginn.",
  },
  exampleNote:
    "Ein freigegebenes Vorher-Während-Nachher-Projekt wird hier ergänzt, sobald Fotos und Kennzahlen vorliegen.",
  faqs: [
    {
      question: "Ist der Rasen danach sofort unsichtbar wiederhergestellt?",
      answer:
        "Direkt nach den Arbeiten können Spuren sichtbar sein. Ziel ist eine sorgfältige Wiederherstellung; der optische Zustand verbessert sich in den folgenden Wochen typischerweise deutlich.",
    },
    {
      question: "Gilt das nur für Nachrüstung?",
      answer:
        "Der schonende Ablauf ist besonders relevant im Bestand. Auch bei Neubauten achten wir auf saubere Führung und Dokumentation.",
    },
  ],
  related: [
    {
      href: "/bewaesserung-bestehender-garten/",
      label: "Nachrüstung im bestehenden Garten",
      description: "Gesamtleistung Nachrüstung",
    },
    {
      href: "/digitaler-anlagenpass/",
      label: "Digitaler Anlagenpass",
      description: "Was unter dem Rasen liegt",
    },
    {
      href: "/projekte/",
      label: "Projekte",
      description: "Dokumentierte Objekte",
    },
  ],
  cta: {
    title: "Garten für schonenden Einbau einschätzen",
    primaryLabel: "Garten berechnen",
    primaryHref: "/garten-berechnen/",
  },
};

export const nachgemessenPage: AdvantagePage = {
  seo: {
    title: "Bewässerung nachgemessen – Geplant. Eingebaut. Nachgemessen.",
    description:
      "Nach dem Einbau stellen und prüfen wir die Anlage: Zonen, Abdeckung und Einstellung – damit der Plan im Garten ankommt.",
    path: "/bewaesserung-nachgemessen/",
  },
  query: "Bewässerung nachmessen prüfen",
  h1: "Bewässerung, die nachgemessen wird",
  problem: {
    title: "Das Problem",
    body: "Eine Anlage kann eingebaut sein und trotzdem ungleich arbeiten: trockene Ecken, übernässte Stellen oder Zonen, die nicht zum verfügbaren Wasser passen.",
  },
  promise: {
    title: "Unser Versprechen",
    body: "Geplant. Eingebaut. Nachgemessen. Wir prüfen nach dem Einbau, ob die Anlage so läuft, wie geplant – und justieren nach.",
  },
  how: {
    title: "So arbeiten wir",
    body: "Nachmessen gehört zum Einbau, nicht zur optionalen Extra-Show.",
    steps: [
      "Plan und Zonenlogik vor Ort gegenprüfen",
      "Regner und Tropfbereiche in Betrieb nehmen",
      "Abdeckung und offensichtliche Fehlstellen erkennen",
      "Einstellung anpassen",
      "Ergebnis und offene Punkte dokumentieren",
    ],
  },
  outcome: {
    title: "Was Sie erhalten",
    body: "Eine eingestellte Anlage mit nachvollziehbarer Prüfung – nicht nur verlegte Rohre.",
  },
  checks: {
    title: "Was geprüft wird",
    items: [
      "Funktion der Zonen",
      "Sichtbare Abdeckung und kritische Fehlstellen",
      "Grundlegende Einstellungen der Steuerung",
      "Bedarf an Nachjustierung in der ersten Betriebsphase",
    ],
  },
  boundaries: {
    title: "Grenzen",
    body: "Wir versprechen keine festen Prozentwerte für Gleichmäßigkeit ohne eigene Objektstatistik. Pflanzenwachstum hängt auch von Boden, Pflege und Wetter ab.",
  },
  exampleNote:
    "Mess- und Einstellprotokolle aus freigegebenen Projekten werden ergänzt, sobald sie vorliegen.",
  faqs: [
    {
      question: "Reicht ein einmaliges Nachmessen?",
      answer:
        "Die erste Prüfung erfolgt nach dem Einbau. In der ersten Saison kann eine Nachjustierung sinnvoll sein – Umfang steht im Angebot.",
    },
    {
      question: "Garantiert ihr einen immer grünen Rasen?",
      answer:
        "Nein. Eine gut eingestellte Anlage verteilt Wasser nachvollziehbar. Pflanzenwachstum hängt auch von Boden, Pflege und Wetter ab.",
    },
  ],
  related: [
    {
      href: "/bewaesserungsanlage-installieren-lassen/",
      label: "Anlage installieren lassen",
      description: "Vollständiger Einbauzyklus",
    },
    {
      href: "/erste-saison-betreuung/",
      label: "Erste Saison",
      description: "Betreuung nach dem Start",
    },
    {
      href: "/service/",
      label: "Service",
      description: "Nachjustierung und Diagnose",
    },
  ],
  cta: {
    title: "Anlage mit Prüfung planen",
    primaryLabel: "Garten berechnen",
    primaryHref: "/garten-berechnen/",
  },
};

export const wasseranschlussPage: AdvantagePage = {
  seo: {
    title: "Wasseranschluss für die Bewässerungsanlage prüfen",
    description:
      "Vor der Auslegung prüfen wir Druck und verfügbare Menge – Grundlage für Zonen, Komponenten und einen realistischen Preis.",
    path: "/bewaesserungsanlage-wasseranschluss-pruefen/",
  },
  query: "Wasseranschluss Bewässerung prüfen",
  h1: "Wasseranschluss vor der Planung prüfen",
  problem: {
    title: "Das Problem",
    body: "Ohne Kenntnis von Druck und Durchfluss entstehen Anlagen, die auf dem Papier stimmen und vor Ort unter- oder überfordert sind – mit teuren Korrekturen hinterher.",
  },
  promise: {
    title: "Unser Versprechen",
    body: "Wir prüfen den Wasseranschluss, bevor wir die Anlage auslegen. Planung und Preis basieren auf realen Rahmenbedingungen.",
  },
  how: {
    title: "So arbeiten wir",
    body: "Der Wassercheck steht am Anfang – nicht als Nachgedanke.",
    steps: [
      "Anschluss und Entnahmestelle klären",
      "Druck und verfügbare Menge erfassen",
      "Grenzen für Zonenanzahl und Komponenten ableiten",
      "Ergebnisse in Planung und Angebot übernehmen",
    ],
  },
  outcome: {
    title: "Was Sie erhalten",
    body: "Eine Planung, die zum Wasser passt – und eine nachvollziehbare Begründung für Zonen und Material.",
  },
  checks: {
    title: "Was dokumentiert wird",
    items: [
      "Relevante Wasserparameter",
      "Konsequenzen für Zonen und Auslegung",
      "Hinweise, wenn der Anschluss Grenzen setzt",
    ],
  },
  boundaries: {
    title: "Grenzen",
    body: "Der Check ersetzt keine Sanierung der Hauswasserinstallation. Liegt die Grenze im Bestand, benennen wir Optionen – ohne unrealistische Versprechen.",
  },
  exampleNote:
    "Beispielhafte Messwerte und Ableitungen erscheinen mit freigegebenen Projekten.",
  faqs: [
    {
      question: "Kann ich ohne Wassercheck online rechnen?",
      answer:
        "Ja, als grobe Orientierung. Der verbindliche Plan und Preis folgen nach Prüfung vor Ort.",
    },
    {
      question: "Was wird konkret gemessen?",
      answer:
        "Typischerweise Druck und Durchfluss am relevanten Anschluss sowie Rahmenbedingungen, die die Zonenplanung beeinflussen.",
    },
  ],
  related: [
    {
      href: "/bewaesserungsanlage-installieren-lassen/",
      label: "Installation",
      description: "Gesamter Zyklus",
    },
    {
      href: "/bewaesserungsanlage-kosten/",
      label: "Kosten",
      description: "Wasser als Preisfaktor",
    },
    {
      href: "/festpreis/",
      label: "Festpreis vor Baubeginn",
      description: "Preis nach Prüfung",
    },
  ],
  cta: {
    title: "Prüfung und Planung anfragen",
    primaryLabel: "Garten berechnen",
    primaryHref: "/garten-berechnen/",
  },
};

export const ersteSaisonPage: AdvantagePage = {
  seo: {
    title: "Erste Saison nach dem Einbau der Bewässerung",
    description:
      "Installiert ist erst der Anfang. Einstellung und Nachjustierung in der ersten Betriebsphase – mit klar definiertem Umfang.",
    path: "/erste-saison-betreuung/",
  },
  query: "Bewässerung erste Saison Nachjustierung",
  h1: "Betreuung in der ersten Saison",
  problem: {
    title: "Das Problem",
    body: "Nach dem ersten Start verändert sich der Garten: Wachstum, Nutzung, Wetter. Ohne Nachjustierung bleibt die Ersteinstellung oft unvollständig.",
  },
  promise: {
    title: "Unser Versprechen",
    body: "Installiert ist erst der Anfang. Die erste Saison gehört zum Einbau – im vereinbarten Umfang, nicht als unbegrenzter Freifahrtschein.",
  },
  how: {
    title: "So arbeiten wir",
    body: "Betreuung heißt konkrete Termine und klarer Inhalt.",
    steps: [
      "Inbetriebnahme und Grundeinstellung",
      "Geplante Nachjustierung in der ersten Betriebsphase",
      "Anpassungen dokumentieren",
      "Weitere Serviceleistungen klar abgrenzen",
    ],
  },
  outcome: {
    title: "Was Sie erhalten",
    body: "Eine Anlage, die nach dem Einbau begleitet wird – mit nachvollziehbaren Einstellschritten.",
  },
  checks: {
    title: "Was festgehalten wird",
    items: [
      "Vereinbarter Betreuungsumfang",
      "Durchgeführte Einstellungen und Änderungen",
      "Offene Empfehlungen für die weitere Saison",
    ],
  },
  boundaries: {
    title: "Grenzen",
    body: "Unbegrenzte kostenlose Einsätze gehören nicht dazu. Umbauten am Garten oder Störungen außerhalb des vereinbarten Rahmens sind eigene Leistungen.",
  },
  exampleNote:
    "Typischer Ablauf einer ersten Saison wird mit freigegebenen Projektdaten ergänzt.",
  faqs: [
    {
      question: "Ist die erste Saison immer inklusive?",
      answer:
        "Der Umfang steht im Angebot. Wir formulieren ihn klar, damit keine falsche Erwartung an unbegrenzte Einsätze entsteht.",
    },
    {
      question: "Was passiert in der Nachjustierung?",
      answer:
        "Laufzeiten und Zonen werden an die reale Situation angepasst – zum Beispiel nach dem Anwachsen oder nach der ersten Trockenphase.",
    },
  ],
  related: [
    {
      href: "/service/",
      label: "Service",
      description: "Weitere Betreuung",
    },
    {
      href: "/bewaesserung-nachgemessen/",
      label: "Nachgemessen",
      description: "Prüfung nach dem Einbau",
    },
    {
      href: "/wartung-winterservice/",
      label: "Winterservice",
      description: "Saisonale Absicherung",
    },
  ],
  cta: {
    title: "Umfang der ersten Saison klären",
    primaryLabel: "Kontakt aufnehmen",
    primaryHref: "/kontakt/",
  },
};

export const anlagenpassPage: AdvantagePage = {
  seo: {
    title: "Digitaler Anlagenpass für Ihre Bewässerung",
    description:
      "Nie wieder rätseln, was unter dem Rasen liegt: Schema, Trassenfotos, Ventile, Komponenten und Servicehistorie – nachvollziehbar dokumentiert.",
    path: "/digitaler-anlagenpass/",
  },
  query: "Anlagenpass Bewässerung Dokumentation",
  h1: "Digitaler Anlagenpass",
  problem: {
    title: "Das Problem",
    body: "Nach Jahren weiß oft niemand mehr, wo Leitungen verlaufen, welche Ventile zuständig sind oder was zuletzt eingestellt wurde – teuer bei Reparatur und Umbau.",
  },
  promise: {
    title: "Unser Versprechen",
    body: "Nie wieder rätseln, was unter dem Rasen liegt. Wichtige Informationen zur Anlage bleiben dokumentiert und auffindbar.",
  },
  how: {
    title: "So arbeiten wir",
    body: "Dokumentation entsteht während des Einbaus – nicht hinterher aus dem Gedächtnis.",
    steps: [
      "Schema und Zonenlogik festhalten",
      "Fotos offener Trassen vor dem Verfüllen",
      "Lage wichtiger Armaturen und Entleerungen notieren",
      "Komponenten und Einstellungen erfassen",
      "Servicehistorie fortführen",
    ],
  },
  outcome: {
    title: "Was Sie erhalten",
    body: "Eine nachvollziehbare Anlagenakte für Betrieb, Service und spätere Änderungen.",
  },
  checks: {
    title: "Was enthalten sein kann",
    items: [
      "Zonenübersicht",
      "Trassenfotos vor dem Verfüllen",
      "Hinweise zu Ventilen und Entleerungen",
      "Relevante Einstellungen und Serviceeinträge",
    ],
  },
  boundaries: {
    title: "Grenzen",
    body: "Der Pass ist so gut wie die freigegebenen und erfassten Daten. Fremdanlagen ohne Bestand können nur nach Begehung und Rekonstruktion dokumentiert werden.",
  },
  exampleNote:
    "Beispielseiten eines Anlagenpasses erscheinen, sobald freigegebene Muster vorliegen.",
  faqs: [
    {
      question: "Bekomme ich den Pass digital?",
      answer:
        "Ja – Ziel ist eine digitale, weiterführbare Dokumentation. Format und Übergabe klären wir im Projekt.",
    },
    {
      question: "Was enthält der Anlagenpass mindestens?",
      answer:
        "Wesentliche Leitungsverläufe, wichtige Komponenten und Einstellungen – so weit im Projekt dokumentiert und vereinbart.",
    },
  ],
  related: [
    {
      href: "/schonender-einbau/",
      label: "Schonender Einbau",
      description: "Dokumentation der Trassen",
    },
    {
      href: "/service/",
      label: "Service",
      description: "Historie fortführen",
    },
    {
      href: "/ueber-regnerwerk/",
      label: "Über RegnerWerk",
      description: "Arbeitsweise",
    },
  ],
  cta: {
    title: "Anlage mit Dokumentation planen",
    primaryLabel: "Garten berechnen",
    primaryHref: "/garten-berechnen/",
  },
};

export const wasserverbrauchPage: AdvantagePage = {
  seo: {
    title: "Wasserverbrauch und Leckagekontrolle der Bewässerung",
    description:
      "Jeder Liter im Blick: Verbrauch und Auffälligkeiten nachvollziehbar machen – ohne erfundene Sparversprechen.",
    path: "/wasserverbrauch-leckagekontrolle/",
  },
  query: "Bewässerung Wasserverbrauch Leckage",
  h1: "Wasserverbrauch und Leckagekontrolle",
  problem: {
    title: "Das Problem",
    body: "Ohne Überblick über den Verbrauch bleiben Lecks, Fehlsteuerungen oder unnötig lange Laufzeiten lange unbemerkt – mit hohen Wasser- und Folgekosten.",
  },
  promise: {
    title: "Unser Versprechen",
    body: "Jeder Liter im Blick – wenn Durchflussmessung und Auswertung korrekt eingerichtet sind. Wir versprechen keine Sparprozente ohne Messbasis.",
  },
  how: {
    title: "So arbeiten wir",
    body: "Kontrolle braucht Sensorik oder Zählung, klare Zonen und nachvollziehbare Auswertung.",
    steps: [
      "Geeignete Messtechnik im System vorsehen",
      "Zonen und Laufzeiten sauber trennen",
      "Auffälligkeiten erkennbar machen",
      "Reaktionen und Grenzen im Betrieb erklären",
    ],
  },
  outcome: {
    title: "Was Sie erhalten",
    body: "Mehr Transparenz über den Wasserhaushalt der Anlage und eine Grundlage, Abweichungen früh zu erkennen.",
  },
  checks: {
    title: "Was eingerichtet oder geprüft wird",
    items: [
      "Vorhandensein und Funktion der Verbrauchserfassung",
      "Plausible Zonentrennung",
      "Hinweise auf typische Anomalien",
    ],
  },
  boundaries: {
    title: "Grenzen",
    body: "Ohne Ausgangsmessung keine Prozentversprechen. Nicht jede Leckage wird automatisch erkannt – die Technik unterstützt, ersetzt aber nicht den Blick auf den Garten.",
  },
  exampleNote:
    "Auswertungsbeispiele folgen mit freigegebenen Anlagen und Messdaten.",
  faqs: [
    {
      question: "Spart die Anlage automatisch 40 % Wasser?",
      answer:
        "Solche Zahlen nennen wir nicht ohne eigene Messung. Einsparung hängt von Ausgangssituation, Wetter und Einstellung ab.",
    },
    {
      question: "Erkennt die Anlage Lecks von allein?",
      answer:
        "Auffälligkeiten können erkannt werden, wenn Messtechnik und Grenzwerte korrekt eingerichtet sind. Das ist kein Ersatz für Sichtkontrolle und Service.",
    },
  ],
  related: [
    {
      href: "/bewaesserung-nachgemessen/",
      label: "Nachgemessen",
      description: "Prüfung der Funktion",
    },
    {
      href: "/service/",
      label: "Service",
      description: "Diagnose und Verbrauch",
    },
    {
      href: "/digitaler-anlagenpass/",
      label: "Anlagenpass",
      description: "Dokumentation der Einstellungen",
    },
  ],
  cta: {
    title: "Transparente Anlage planen",
    primaryLabel: "Garten berechnen",
    primaryHref: "/garten-berechnen/",
  },
};

export const festpreisPage: AdvantagePage = {
  seo: {
    title: "Festpreis für die Bewässerungsanlage vor Baubeginn",
    description:
      "Plan, Preis und Wasserbedarf – vor dem ersten Spatenstich. Online-Schätzung und verbindliches Angebot klar getrennt.",
    path: "/festpreis/",
  },
  query: "Bewässerungsanlage Festpreis",
  h1: "Klarer Preis vor Baubeginn",
  problem: {
    title: "Das Problem",
    body: "Unklare Angebote und nachträgliche Aufschläge zerstören Vertrauen. Online-Zahlen werden leicht mit Endpreisen verwechselt.",
  },
  promise: {
    title: "Unser Versprechen",
    body: "Plan, Preis und Wasserbedarf – vor dem ersten Spatenstich. Nach Prüfung von Wasser und Grundstück erhalten Sie ein nachvollziehbares Angebot mit Umfang und Ausnahmen.",
  },
  how: {
    title: "So arbeiten wir",
    body: "Preis Klarheit entsteht in Schritten.",
    steps: [
      "Online-Schätzung als Orientierung",
      "Wasseranschluss und Grundstück prüfen",
      "Leistungsumfang festlegen",
      "Angebot mit Preis, Inhalten und Ausnahmen bestätigen",
      "Zusatzarbeiten nur nach Abstimmung",
    ],
  },
  outcome: {
    title: "Was Sie erhalten",
    body: "Ein verbindlicher Rahmen vor Baubeginn – und die Sicherheit, dass der Online-Rechner nicht als Festpreis verkauft wird.",
  },
  checks: {
    title: "Was im Angebot sichtbar ist",
    items: [
      "Leistungsumfang",
      "Preis bzw. Preisrahmen nach Prüfung",
      "Ausnahmen und optionale Leistungen",
      "Regel für Änderungen während der Montage",
    ],
  },
  boundaries: {
    title: "Grenzen",
    body: "Unvorhersehbare Bestandshindernisse können Zusatzaufwand auslösen. Das wird benannt und abgestimmt – nicht stillschweigend aufgeschlagen.",
  },
  exampleNote:
    "Beispielangebotsstruktur wird ergänzt, sobald freigegebene Muster vorliegen.",
  faqs: [
    {
      question: "Ist der Online-Rechner der Festpreis?",
      answer:
        "Nein. Er ist vorläufig. Der verbindliche Preis folgt nach Prüfung und bestätigtem Umfang.",
    },
    {
      question: "Was, wenn sich auf der Baustelle etwas ändert?",
      answer:
        "Wesentliche Ergänzungen stimmen wir ab, statt sie still nachzubelasten. Ausnahmen und Regeln stehen im Angebot.",
    },
  ],
  related: [
    {
      href: "/bewaesserungsanlage-kosten/",
      label: "Kostenseite",
      description: "Faktoren und Spannen",
    },
    {
      href: "/bewaesserungsanlage-wasseranschluss-pruefen/",
      label: "Wasseranschluss prüfen",
      description: "Grundlage für den Preis",
    },
    {
      href: "/garten-berechnen/",
      label: "Garten berechnen",
      description: "Vorläufige Einschätzung",
    },
  ],
  cta: {
    title: "Kosten für meinen Garten berechnen",
    primaryLabel: "Jetzt berechnen",
    primaryHref: "/garten-berechnen/",
  },
};

export const winterservicePage: AdvantagePage = {
  seo: {
    title: "Wartung und Winterservice für Bewässerungsanlagen",
    description:
      "Winterfest machen und Frühjahrsinbetriebnahme: klare saisonale Schritte, getrennt vom Umfang der Erstmontage.",
    path: "/wartung-winterservice/",
  },
  query: "Bewässerung Winterservice Wartung",
  h1: "Wartung und Winterservice",
  problem: {
    title: "Das Problem",
    body: "Frost, stehendes Wasser und fehlender Saisonstart beschädigen Komponenten oder führen zu einem schlechten Start in die nächste Saison.",
  },
  promise: {
    title: "Unser Versprechen",
    body: "Saisonale Absicherung mit klaren Schritten: Winterservice und Frühjahrsinbetriebnahme als eigene, nachvollziehbare Leistungen.",
  },
  how: {
    title: "So arbeiten wir",
    body: "Wartung folgt dem Kalender und dem Anlagenzustand.",
    steps: [
      "Anlage vor dem Frost entleeren bzw. absichern",
      "Kritische Punkte prüfen",
      "Im Frühjahr kontrolliert in Betrieb nehmen",
      "Einstellungen bei Bedarf nachziehen",
    ],
  },
  outcome: {
    title: "Was Sie erhalten",
    body: "Eine Anlage, die saisonal betreut wird – ohne Vermischung mit dem Einbauumfang.",
  },
  checks: {
    title: "Was erledigt und notiert wird",
    items: [
      "Durchgeführte Wintermaßnahmen",
      "Festgestellte Auffälligkeiten",
      "Schritte der Wiederinbetriebnahme",
    ],
  },
  boundaries: {
    title: "Grenzen",
    body: "Winterservice ist nicht automatisch im Einbaupreis enthalten, sofern nicht vereinbart. Schäden durch unterlassene Absicherung liegen außerhalb der Erstmontage.",
  },
  exampleNote:
    "Checklisten aus dem Betrieb werden ergänzt, sobald freigegebene Vorlagen vorliegen.",
  faqs: [
    {
      question: "Braucht jede Anlage einen Winterservice?",
      answer:
        "In frostgefährdeten Regionen ist die Absicherung entscheidend. Den genauen Ablauf stimmen wir auf Ihre Anlage ab.",
    },
    {
      question: "Ist Winterservice im Einbau enthalten?",
      answer:
        "Nur wenn ausdrücklich vereinbart. Sonst ist Winterservice eine separate Leistung – das benennen wir klar.",
    },
  ],
  related: [
    {
      href: "/service/",
      label: "Service-Übersicht",
      description: "Alle Serviceleistungen",
    },
    {
      href: "/erste-saison-betreuung/",
      label: "Erste Saison",
      description: "Nach dem Einbau",
    },
    {
      href: "/kontakt/",
      label: "Kontakt",
      description: "Termin anfragen",
    },
  ],
  cta: {
    title: "Winterservice oder Wartung anfragen",
    primaryLabel: "Kontakt aufnehmen",
    primaryHref: "/kontakt/",
  },
};

export const advantagePages = [
  schonenderEinbauPage,
  nachgemessenPage,
  wasseranschlussPage,
  ersteSaisonPage,
  anlagenpassPage,
  wasserverbrauchPage,
  festpreisPage,
  winterservicePage,
] as const;
