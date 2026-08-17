import { images } from "@/lib/content/media";

export type CityFaq = { question: string; answer: string };

export type CityApplication = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type City = {
  slug: string;
  name: string;
  landSlug: string;
  landName: string;
  featured: boolean;
  geo: { latitude: number; longitude: number };
  nearby: string[];
  seo: { title: string; description: string };
  h1: string;
  lead: string;
  climateTitle: string;
  climate: string;
  gardensTitle: string;
  gardens: string;
  districts: string;
  waterNote: string;
  costNote: string;
  heroImage: string;
  heroImageAlt: string;
  applications: CityApplication[];
  faqs: CityFaq[];
};

export function cityPath(slug: string) {
  return `/${slug}/bewaesserungsanlage/`;
}

export const cities: City[] = [
  {
    slug: "muenchen",
    name: "München",
    landSlug: "bayern",
    landName: "Bayern",
    featured: true,
    geo: { latitude: 48.1351, longitude: 11.582 },
    nearby: ["nuernberg", "stuttgart", "freiburg", "frankfurt"],
    seo: {
      title: "Bewässerungsanlage München – planen und einbauen",
      description:
        "Automatische Gartenbewässerung in München: Zonenplanung für Rasen und Beete, schonender Einbau im Bestand, Preis nach Wasserprüfung. RegnerWerk.",
    },
    h1: "Bewässerungsanlage in München planen und einbauen",
    lead:
      "Für Privatgärten in München planen wir automatische Bewässerung nach Fläche, Wasseranschluss und Bestand – von kompakten Reihenhausgärten bis zu größeren Grundstücken am Stadtrand.",
    climateTitle: "Klima und Boden in München",
    climate:
      "Münchner Sommer bringen oft mehrere trockene Wochen, während Föhnlagen die Verdunstung kurzzeitig stark anheben. Böden wechseln von kiesig-durchlässig im Süden und Westen zu bindigeren Lagen – ohne Zonenplanung entstehen schnell gelbe Raseninseln neben durchnässten Beeten.",
    gardensTitle: "Typische Gärten in München",
    gardens:
      "Viele Objekte sind fertige Stadtgärten: enge Zugänge, Pflaster, Hecken an der Grenze, oft ein kleiner Rasen als Zentrum. Nachrüstung ist die Regel. Wir planen Trassen vor dem Öffnen, schützen Wege und stellen Flächen nachvollziehbar wieder her.",
    districts:
      "Häufig angefragt werden Einfamilien- und Reihenhausgärten in Stadtteilen wie Bogenhausen, Harlaching, Pasing, Obermenzing und den Umlandlagen Grünwald, Starnberg und Dachau – jeweils mit anderem Druck, anderer Fläche und anderem Zugang.",
    waterNote:
      "Der Münchner Hausanschluss reicht selten „irgendwie“. Wir messen Druck und Durchfluss, bevor Zonen und Düsen festgelegt werden – sonst läuft die hintere Zone leer, sobald vorne beregnet wird.",
    costNote:
      "In München treiben oft nicht die Quadratmeter den Aufwand, sondern Zugang, Pflaster und die Zahl getrennter Zonen. Online bleibt eine Orientierung; verbindlich wird der Preis nach Prüfung vor Ort.",
    heroImage: images.heroGarden,
    heroImageAlt: "Privater Garten in München mit unsichtbarer Bewässerung",
    applications: [
      {
        title: "Rasen",
        description:
          "Head-to-Head-Überdeckung für Münchner Rasenflächen, die im Hochsommer schnell austrocknen.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasenzone mit Versenkregnern",
      },
      {
        title: "Hecken und Beete",
        description:
          "Tropf an der Wurzel für Liguster, Eibe und Stauden – getrennte Laufzeiten zum Rasen.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Beete und Hecke im Privatgarten",
      },
      {
        title: "Nachrüstung",
        description:
          "Einbau im bestehenden Münchner Garten ohne unnötiges Aufreißen von Wegen und Terrassen.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Bestehender Garten vor der Nachrüstung",
      },
    ],
    faqs: [
      {
        question: "Installiert RegnerWerk Bewässerungsanlagen in München?",
        answer:
          "Ja. München und Umland gehören zum Einsatzgebiet. Termin und Anfahrt klären wir in der Anfrage – ohne Filialversprechen und ohne pauschale Soforttermine.",
      },
      {
        question: "Lohnt sich automatische Bewässerung bei Münchner Sommern?",
        answer:
          "Ja, vor allem bei durchlässigen Böden und mehreren trockenen Wochen. Die Anlage folgt gemessenem Wasser und Zonen, nicht einem starren Gießkalender.",
      },
      {
        question: "Kann der Garten in München nachgerüstet werden?",
        answer:
          "In den meisten Fällen ja. Wir planen Leitungswege, schützen Bestand und stellen Rasen und Wege nach dem Einbau wieder her.",
      },
      {
        question: "Was kostet eine Bewässerungsanlage in München?",
        answer:
          "Kompakte Rasengärten orientieren sich oft ab ca. 2.490 €. Enge Zugänge, Pflaster und zusätzliche Tropfzonen erhöhen den Aufwand. Der Online-Rechner ist vorläufig.",
      },
    ],
  },
  {
    slug: "berlin",
    name: "Berlin",
    landSlug: "berlin",
    landName: "Berlin",
    featured: true,
    geo: { latitude: 52.52, longitude: 13.405 },
    nearby: ["hamburg", "leipzig", "hannover", "dresden"],
    seo: {
      title: "Bewässerungsanlage Berlin – Garten automatisch bewässern",
      description:
        "Gartenbewässerung in Berlin planen und einbauen: sandige Böden, Stadtgärten, Zonen für Rasen und Beete, schonende Nachrüstung. RegnerWerk deutschlandweit.",
    },
    h1: "Bewässerungsanlage in Berlin für private Gärten",
    lead:
      "In Berlin planen wir automatische Bewässerung für Vorgärten, Reihenhausgärten und größere Grundstücke – angepasst an sandige Böden, begrenzte Anschlüsse und dichten Bestand.",
    climateTitle: "Trockene Sommer, sandiger Boden",
    climate:
      "Berliner Sommer sind oft kontinental-trocken. Viele Böden speichern wenig Wasser; ohne gezielte Zonen versickert Gießwasser, bevor der Rasen gleichmäßig versorgt ist. Automatische kurze Gaben nach Messung sind hier meist sinnvoller als langes Schlauchgießen.",
    gardensTitle: "Stadtgarten statt Parkanlage",
    gardens:
      "Typisch sind schmale Grundstücke, Altbau-Hinterhöfe mit Pflanzstreifen, Kleingärten und Einfamilienhäuser in den Außenbezirken. Zugang über Treppen, enge Seitenwege oder gepflasterte Höfe bestimmt den Einbau mehr als die reine Fläche.",
    districts:
      "Anfragen kommen häufig aus Zehlendorf, Steglitz, Pankow, Köpenick, Lichterfelde und den Umlandorten Potsdam und Bernau. Jede Lage hat andere Wasserwerte – wir messen vor der Auslegung.",
    waterNote:
      "In älteren Berliner Häusern schwankt der Hausanschluss. Eine Zone zu viel, und der hintere Regner dreht nicht mehr. Deshalb steht der Wassercheck am Anfang, nicht der Produktkatalog.",
    costNote:
      "Kleine Berliner Gärten können günstiger wirken – bis Zugang, Pflaster und getrennte Beetstreifen den Aufwand heben. Online-Spanne zuerst, Festpreis nach Prüfung.",
    heroImage: images.houseGarden,
    heroImageAlt: "Privater Stadtgarten in Berlin",
    applications: [
      {
        title: "Rasen",
        description:
          "Kurze, gleichmäßige Gaben für sandige Berliner Rasenflächen statt durchnässter Ecken.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasenbewässerung im Privatgarten",
      },
      {
        title: "Beete und Hecken",
        description:
          "Tropf für Pflanzstreifen an Mauern und Zäunen – typisch für Berliner Vorgärten.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Heckenbewässerung per Tropf",
      },
      {
        title: "Nachrüstung",
        description:
          "Schonender Einbau bei bestehendem Pflaster, Spielrasen und engen Seitenzugängen.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.process,
        imageAlt: "Nachrüstung einer Bewässerung im Bestand",
      },
    ],
    faqs: [
      {
        question: "Kommt RegnerWerk für eine Bewässerungsanlage nach Berlin?",
        answer:
          "Ja. Berlin liegt im Einsatzgebiet. Ob und wann ein Vor-Ort-Termin möglich ist, klären wir mit PLZ und kurzer Gartenbeschreibung.",
      },
      {
        question: "Ist Berliner Boden ein Problem für Bewässerung?",
        answer:
          "Sandige, durchlässige Böden brauchen eher häufigere, kürzere Gaben und klare Zonen. Das lösen wir in der Planung, nicht mit einem stärkeren Regner.",
      },
      {
        question: "Geht das auch im Kleingarten oder Hinterhof?",
        answer:
          "Wenn ein geeigneter Wasseranschluss und ein klarer Auftrag vorliegen, ja. Sehr kleine Pflanzkübel-Situationen ohne Anschluss sind oft kein sinnvolles Anlagenprojekt.",
      },
      {
        question: "Ist der Online-Preis für Berlin verbindlich?",
        answer:
          "Nein. Der Rechner liefert eine Orientierung. Verbindlich wird der Preis nach Wasser- und Objektprüfung.",
      },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    landSlug: "hamburg",
    landName: "Hamburg",
    featured: true,
    geo: { latitude: 53.5511, longitude: 9.9937 },
    nearby: ["hannover", "berlin", "koeln", "duesseldorf"],
    seo: {
      title: "Bewässerungsanlage Hamburg – planen, einbauen, einstellen",
      description:
        "Automatische Gartenbewässerung in Hamburg: Stadtgärten, wechselhaftes Nordklima, schonender Einbau, klare Zonen für Rasen und Hecken. RegnerWerk.",
    },
    h1: "Bewässerungsanlage in Hamburg installieren lassen",
    lead:
      "Für Hamburger Privatgärten liefern wir Planung, Einbau und Einstellung automatischer Bewässerung – auch wenn der Garten fertig ist und Wege, Terrassen und Hecken stehen bleiben sollen.",
    climateTitle: "Wechselhaft, aber nicht ohne Trockenstress",
    climate:
      "Hamburg gilt als feucht, trotzdem trocknen Rasenflächen in windigen, niederschlagsarmen Wochen aus. Die Steuerung muss auf Wetter reagieren können – starre Wochenprogramme passen schlecht zum norddeutschen Wechsel.",
    gardensTitle: "Fertige Stadtgärten und Marschböden",
    gardens:
      "Viele Gärten sind kompakt, gut gepflegt und schwer zugänglich. In manchen Lagen kommen bindigere Böden dazu: zu viel Wasser steht, zu wenig erreicht die Wurzel nicht. Zonen und Laufzeiten folgen der Fläche, nicht einem Standardpaket.",
    districts:
      "Typische Anfragen: Blankenese, Nienstedten, Harvestehude, Winterhude, Volksdorf sowie Umland wie Ahrensburg und Wedel. Zugang und Bestandsschutz stehen oft vor der reinen Rasenfläche.",
    waterNote:
      "Wir prüfen den Hausanschluss in Hamburg vor der Düsenwahl. Ein schöner Plan auf dem Papier nützt nichts, wenn drei Zonen gleichzeitig den Druck zusammenbrechen lassen.",
    costNote:
      "Schonender Einbau im fertigen Hamburger Garten kann mehr Aufwand bedeuten als ein offenes Neubau-Grundstück gleicher Größe. Das machen wir vor Auftrag sichtbar.",
    heroImage: images.lawn,
    heroImageAlt: "Gleichmäßig versorgter Rasen in einem Hamburger Garten",
    applications: [
      {
        title: "Rasen",
        description:
          "Versenkregner mit Überdeckung – unsichtbar im Alltag, gleichmäßig in trockenen Wochen.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Versenkregner im Rasen",
      },
      {
        title: "Hecken",
        description:
          "Tropf für dichte Hamburger Hecken, getrennt vom Rasen, damit Wege trockener bleiben.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Hecke mit Tropfbewässerung",
      },
      {
        title: "Nachrüstung",
        description:
          "Trassenplanung vor dem Öffnen – zentral in gewachsenen Stadtgärten.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Bestehender Garten in Hamburg",
      },
    ],
    faqs: [
      {
        question: "Braucht Hamburg überhaupt eine Bewässerungsanlage?",
        answer:
          "Viele Gärten ja – nicht wegen Dauerregen, sondern wegen unregelmäßiger Trockenphasen und Böden, die Wasser schlecht halten oder schlecht abgeben. Die Steuerung macht den Unterschied.",
      },
      {
        question: "Arbeitet RegnerWerk in Hamburg?",
        answer:
          "Ja. Hamburg ist Einsatzgebiet. Termin und Anfahrt stimmen wir vor dem Vor-Ort-Termin ab.",
      },
      {
        question: "Wird der Garten beim Einbau geschont?",
        answer:
          "Das ist in Hamburg oft die Hauptanforderung. Wir schützen Flächen, dokumentieren Leitungen und stellen den Zustand danach wieder her.",
      },
      {
        question: "Wie starte ich in Hamburg?",
        answer:
          "Garten berechnen für eine vorläufige Spanne oder Kontakt mit PLZ, ungefährer Fläche und Fotos, falls vorhanden.",
      },
    ],
  },
  {
    slug: "koeln",
    name: "Köln",
    landSlug: "nordrhein-westfalen",
    landName: "Nordrhein-Westfalen",
    featured: true,
    geo: { latitude: 50.9375, longitude: 6.9603 },
    nearby: ["duesseldorf", "frankfurt", "stuttgart", "hannover"],
    seo: {
      title: "Bewässerungsanlage Köln – Gartenbewässerung einbauen",
      description:
        "Bewässerungsanlage in Köln planen und installieren: milde Rheinage, Nachrüstung im Bestand, Zonen für Rasen, Beete und Hecken. RegnerWerk.",
    },
    h1: "Bewässerungsanlage in Köln planen und installieren",
    lead:
      "In Köln rüsten wir private Gärten mit automatischer Bewässerung nach – klar zoniert, schonend eingebaut und erst nach Prüfung von Wasser und Grundstück angeboten.",
    climateTitle: "Milde Rheinage, trockene Hochsommer",
    climate:
      "Köln ist vergleichsweise mild, aber Hochsommerwochen ohne Regen belasten Rasen und frisch gepflanzte Hecken. In dicht bebauten Lagen kommt Hitzeinsel-Effekt dazu. Kurze, geplante Gaben schonen Wasser besser als abendliches Schlauchgießen.",
    gardensTitle: "Reihenhaus, Vorgarten, Rheinlage",
    gardens:
      "Viele Kölner Gärten sind schmal und durchgängig gestaltet: Rasen, Sitzplatz, Hecke zur Nachbargrenze. Einbau heißt hier oft: wenige, präzise Trassen statt großflächigem Aufgraben.",
    districts:
      "Häufig: Lindenthal, Marienburg, Rodenkirchen, Dellbrück, Longerich und Umland wie Brühl oder Bergisch Gladbach. Jede Adresse braucht eigene Wasserwerte.",
    waterNote:
      "Am Rhein schwanken Anschlüsse je nach Gebäudealter. Wir legen Zonen erst nach Messung aus – nicht nach Wunschbild aus dem Katalog.",
    costNote:
      "Schmale Kölner Gärten wirken klein, haben aber oft mehrere Nutzungen auf wenig Fläche. Die Zonenzahl entscheidet mit über den Preis.",
    heroImage: images.process,
    heroImageAlt: "Planung einer Gartenbewässerung für Köln",
    applications: [
      {
        title: "Rasen",
        description:
          "Gleichmäßige Rasenzonen für schmale Kölner Grundstücke – ohne nasse Wege.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasenbewässerung",
      },
      {
        title: "Beete",
        description:
          "Tropf für Staudenstreifen und Kübelzonen am Sitzplatz, getrennt vom Rasen.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Beetbewässerung",
      },
      {
        title: "Nachrüstung",
        description:
          "Einbau bei bestehendem Pflaster und dichter Nachbarbebauung.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Nachrüstung im Kölner Garten",
      },
    ],
    faqs: [
      {
        question: "Gibt es Bewässerung von RegnerWerk in Köln?",
        answer:
          "Ja. Köln und Umland gehören zu Nordrhein-Westfalen im Einsatzgebiet. Den Termin klären wir individuell.",
      },
      {
        question: "Stört der Einbau die Nachbarn?",
        answer:
          "Wir arbeiten geplant und zeitlich begrenzt. Enge Reihenhauslagen erfordern Abstimmung – nicht spektakuläre Großbaustellen.",
      },
      {
        question: "Kann ich nur den Rasen bewässern lassen?",
        answer:
          "Ja. Viele Kölner Anlagen starten mit Rasenzonen; Hecken oder Beete können als eigene Zone folgen, wenn der Anschluss es hergibt.",
      },
      {
        question: "Was brauche ich für ein Angebot in Köln?",
        answer:
          "PLZ, ungefähre Fläche, Fotos oder Skizze und ob Beete mitbewässert werden sollen. Danach folgen Messung und verbindliches Angebot.",
      },
    ],
  },
  {
    slug: "frankfurt",
    name: "Frankfurt",
    landSlug: "hessen",
    landName: "Hessen",
    featured: true,
    geo: { latitude: 50.1109, longitude: 8.6821 },
    nearby: ["koeln", "stuttgart", "duesseldorf", "muenchen"],
    seo: {
      title: "Bewässerungsanlage Frankfurt – Hitze, Rasen, Zonenplanung",
      description:
        "Automatische Bewässerung in Frankfurt am Main: Hitzeinsel, trockene Sommer, kompakte Stadtgärten, Preis nach Wassercheck. RegnerWerk plant und baut ein.",
    },
    h1: "Bewässerungsanlage in Frankfurt am Main",
    lead:
      "Frankfurt gehört zu den wärmeren deutschen Lagen. Wir planen Bewässerung so, dass Rasen und Pflanzungen die trockenen Wochen überstehen – ohne Dauerlauf und ohne Ratespiel am Hahn.",
    climateTitle: "Rhein-Main: Wärme und Verdunstung",
    climate:
      "Die Frankfurter Hitzeinsel und häufige Trockenphasen machen manuelles Gießen unzuverlässig. Böden in Neubaugebieten sind oft verdichtet; ältere Villengärten speichern besser, brauchen aber schonenden Einbau. Beides verlangt gemessene Zonen, nicht mehr Wasser um jeden Preis.",
    gardensTitle: "Kompakt, wertvoll, oft nachgerüstet",
    gardens:
      "Typisch sind gepflegte, eher kleine Gärten mit hohem Anspruch an Optik nach der Baustelle. Pflaster, Sichtschutz und enge Seitenzugänge bestimmen den Aufwand.",
    districts:
      "Häufige Lagen: Sachsenhausen, Westend, Nordend, Bornheim sowie Bad Homburg, Kronberg und Eschborn. Umlandgärten sind oft größer, Stadtgärten anspruchsvoller im Bestandsschutz.",
    waterNote:
      "In Mehrfamilien- und Reihenhauslagen teilen sich Anschlüsse manchmal Nutzungen. Wir klären, ob der Gartenanschluss für sinnvolle Zonen reicht, bevor verbaut wird.",
    costNote:
      "In Frankfurt kann der Einbauaufwand den reinen Materialanteil übersteigen – wegen Zugang und Wiederherstellung. Das steht im Angebot, nicht als Nachtrag.",
    heroImage: images.heroGarden,
    heroImageAlt: "Automatische Bewässerung in einem Frankfurter Garten",
    applications: [
      {
        title: "Rasen",
        description:
          "Überdeckte Rasenzonen gegen Trockenstellen in warmen Rhein-Main-Wochen.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasen in Frankfurt",
      },
      {
        title: "Hecken und Beete",
        description:
          "Tropf für Sichtschutzhecken, die in der Hitzeinsel sonst lückenhaft werden.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Hecke in Frankfurt",
      },
      {
        title: "Nachrüstung",
        description:
          "Einbau in fertige Gärten – Trassen zuerst planen, dann öffnen.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Nachrüstung Frankfurt",
      },
    ],
    faqs: [
      {
        question: "Ist Frankfurt im Einsatzgebiet von RegnerWerk?",
        answer:
          "Ja, einschließlich Rhein-Main. Termine stimmen wir nach Anfrage ab.",
      },
      {
        question: "Hilft Bewässerung gegen die Frankfurter Hitze?",
        answer:
          "Sie ersetzt keinen Schatten und keinen Bodenaufbau, verhindert aber ungleichmäßiges Austrocknen, wenn Zonen und Laufzeiten zum Anschluss passen.",
      },
      {
        question: "Gibt es einen Festpreis online?",
        answer:
          "Nein. Online ist Orientierung, verbindlich nach Wasser- und Grundstücksprüfung.",
      },
      {
        question: "Kann ich Fotos aus Frankfurt mitschicken?",
        answer:
          "Ja. Fotos von Garten, Anschluss und Zugängen beschleunigen die Einschätzung.",
      },
    ],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    landSlug: "baden-wuerttemberg",
    landName: "Baden-Württemberg",
    featured: true,
    geo: { latitude: 48.7758, longitude: 9.1829 },
    nearby: ["freiburg", "muenchen", "frankfurt", "nuernberg"],
    seo: {
      title: "Bewässerungsanlage Stuttgart – Hanglage und Trockensommer",
      description:
        "Gartenbewässerung in Stuttgart: Kessellage, Hanggrundstücke, trockene Sommer, Zonenplanung und schonender Einbau. RegnerWerk.",
    },
    h1: "Bewässerungsanlage in Stuttgart für Hang und Stadtgarten",
    lead:
      "Stuttgarts Kessellage und viele Hanggrundstücke machen Bewässerung zur Planungssache: Druck, Steigung und Zonen müssen zusammenpassen, bevor der Rasen geöffnet wird.",
    climateTitle: "Wärmeinsel im Kessel",
    climate:
      "Stuttgart zählt zu den wärmeren deutschen Städten. Trockene Sommerabschnitte und südseitige Hänge erhöhen den Bedarf. Gleichzeitig darf eine Zone unten nicht den Druck für die Zone oben wegnehmen – das ist Auslegung, kein stärkeres Ventil nach Gefühl.",
    gardensTitle: "Hang, Terrasse, enger Zugang",
    gardens:
      "Viele Gärten sind terrassiert oder über Treppen erschlossen. Einbau braucht klare Trassen und oft mehr Aufmerksamkeit für Leitungsführung als ein ebenes Vorort-Grundstück.",
    districts:
      "Anfragen kommen etwa aus Degerloch, Sillenbuch, Vaihingen, Bad Cannstatt und dem Umland wie Esslingen, Ludwigsburg und Böblingen.",
    waterNote:
      "Höhendifferenz verändert den Druck. Wir messen und planen Zonen so, dass oben und unten versorgt werden – nicht nur die Fläche direkt am Hahn.",
    costNote:
      "Hanglagen und terrassierte Gärten liegen oft über der Orientierung eines ebenen Rasens gleicher Quadratmeter. Das benennen wir vor Auftrag.",
    heroImage: images.process,
    heroImageAlt: "Bewässerungsplanung für einen Stuttgarter Garten",
    applications: [
      {
        title: "Rasen",
        description:
          "Zonen entlang von Terrassen und Hängen, damit Wasser nicht nur nach unten läuft.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasenzonen am Hang",
      },
      {
        title: "Beete",
        description:
          "Tropf in Pflanzterrassen – gezielte Wurzelgabe statt Abfluss über die Stufe.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Terrassenbeete",
      },
      {
        title: "Nachrüstung",
        description:
          "Schonender Einbau bei bestehenden Stützmauern, Treppen und Wegen.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Bestehender Hanggarten",
      },
    ],
    faqs: [
      {
        question: "Funktioniert Bewässerung am Stuttgarter Hang?",
        answer:
          "Ja, wenn Zonen und Druck zur Höhendifferenz passen. Pauschale Ein-Zonen-Lösungen sind hier oft ungeeignet.",
      },
      {
        question: "Kommt ihr nach Stuttgart?",
        answer:
          "Ja. Stuttgart liegt in Baden-Württemberg im Einsatzgebiet. Termin nach Abstimmung.",
      },
      {
        question: "Ist der Einbau im terrassierten Garten möglich?",
        answer:
          "In der Regel ja. Aufwand und Trassen klären wir vor Ort, bevor ein Preis feststeht.",
      },
      {
        question: "Was ist der erste Schritt?",
        answer:
          "Online-Rechner oder Kontakt mit PLZ, Fotos vom Hang und Angabe, ob Rasen, Beete oder beides bewässert werden sollen.",
      },
    ],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    landSlug: "nordrhein-westfalen",
    landName: "Nordrhein-Westfalen",
    featured: true,
    geo: { latitude: 51.2277, longitude: 6.7735 },
    nearby: ["koeln", "frankfurt", "hannover", "hamburg"],
    seo: {
      title: "Bewässerungsanlage Düsseldorf – privat planen und einbauen",
      description:
        "Automatische Gartenbewässerung in Düsseldorf: Villengärten, Nachrüstung, klare Zonen, Preis vor Baubeginn nach Wasserprüfung. RegnerWerk.",
    },
    h1: "Bewässerungsanlage in Düsseldorf einbauen lassen",
    lead:
      "In Düsseldorf planen wir Bewässerung für gepflegte Privatgärten – mit Blick auf Bestandsschutz, gleichmäßige Rasenzonen und getrennte Tropfbereiche.",
    climateTitle: "Rheinisch mild, im Sommer trotzdem trocken",
    climate:
      "Düsseldorf ist wintermild. Entscheidend sind trockene Hochsommer und windige Lagen, in denen der Rasen ungleich austrocknet. Eine steuerbare Anlage ersetzt den Schlauch, ohne den Garten jeden Abend zur Baustelle zu machen.",
    gardensTitle: "Hoher Anspruch an den Bestand",
    gardens:
      "Viele Gärten sind repräsentativ: Rasenflächen, Solitärgehölze, Hecken, oft hochwertiges Pflaster. Der Einbau muss unsichtbar enden. Deshalb planen wir Leitungswege vor dem ersten Schnitt.",
    districts:
      "Häufig: Oberkassel, Niederkassel, Golzheim, Grafenberg, Kaiserswerth sowie Meerbusch, Neuss und Ratingen.",
    waterNote:
      "Auch in Düsseldorf gilt: erst messen, dann Zonen. Repräsentative Flächen brauchen Überdeckung, nicht mehr Regner auf derselben Leitung.",
    costNote:
      "Der Preis folgt Fläche, Zonen und Wiederherstellung. Gepflegte Villengärten liegen oft über der Untergrenze kompakter Rasengärten.",
    heroImage: images.lawn,
    heroImageAlt: "Gepflegter Rasengarten in Düsseldorf",
    applications: [
      {
        title: "Rasen",
        description:
          "Head-to-Head-Planung für sichtbare Rasenflächen, die gleichmäßig wirken sollen.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasen in Düsseldorf",
      },
      {
        title: "Hecken",
        description:
          "Eigene Tropfzone für Sichtschutz – ohne nasse Wege neben dem Rasen.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Heckenzone",
      },
      {
        title: "Nachrüstung",
        description:
          "Einbau mit Schutz von Pflaster, Rasen und Pflanzungen.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Nachrüstung Düsseldorf",
      },
    ],
    faqs: [
      {
        question: "Installiert RegnerWerk in Düsseldorf?",
        answer:
          "Ja. Düsseldorf und Umland gehören zum NRW-Einsatzgebiet. Termine nach Abstimmung.",
      },
      {
        question: "Bleibt der Garten nach dem Einbau ansehnlich?",
        answer:
          "Das ist die Anforderung, nicht ein Extra. Wir schützen, dokumentieren und stellen wieder her – im vereinbarten Rahmen.",
      },
      {
        question: "Kann die Steuerung wetterabhängig laufen?",
        answer:
          "Ja, sofern im Angebot enthalten. Details zur Bedienung klären wir in der Planung.",
      },
      {
        question: "Wie genau muss ich Fläche angeben?",
        answer:
          "Eine grobe Schätzung reicht für die Orientierung. Verbindlich wird nach Aufmaß und Wassercheck.",
      },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    landSlug: "sachsen",
    landName: "Sachsen",
    featured: true,
    geo: { latitude: 51.3397, longitude: 12.3731 },
    nearby: ["dresden", "berlin", "hannover", "nuernberg"],
    seo: {
      title: "Bewässerungsanlage Leipzig – Garten in trockenen Sommern",
      description:
        "Gartenbewässerung in Leipzig planen und einbauen: kontinentale Trockenphasen, Gründerzeitgärten, Zonen für Rasen und Beete. RegnerWerk.",
    },
    h1: "Bewässerungsanlage in Leipzig planen und einbauen",
    lead:
      "Leipzig hat ausgeprägte Trockenphasen. Wir planen automatische Bewässerung für Einfamilienhausgärten und Gründerzeitgrundstücke – nach gemessenem Wasser, nicht nach Schätzungen vom Schlauch.",
    climateTitle: "Kontinental und oft zu trocken für den Rasen",
    climate:
      "Ostdeutsche Sommer können wochenlang wenig Niederschlag bringen. Lehmig-sandige Mischböden halten Wasser ungleich. Ohne Zonen entstehen Pfützen an einer Ecke und Stroh an der anderen.",
    gardensTitle: "Gründerzeit, Neubau, Kleingartenrand",
    gardens:
      "Neben klassischen Einfamilienhäusern gibt es tiefe Gründerzeitgärten hinter der Bebauung – langer Weg, schmaler Zugang. Die Trasse entscheidet, nicht nur die Rasenfläche vor dem Haus.",
    districts:
      "Häufig: Gohlis, Plagwitz, Stötteritz, Connewitz sowie Markkleeberg und Schkeuditz. Jede Lage braucht eigene Messung.",
    waterNote:
      "Wir prüfen, ob der Anschluss mehrere Zonen nacheinander versorgen kann. In älteren Gebäuden ist das der limitierende Faktor.",
    costNote:
      "Lange, schmale Gärten können mehr Leitung brauchen als ein quadratischer Rasen gleicher Fläche. Das gehört in die Planung vor dem Preis.",
    heroImage: images.houseGarden,
    heroImageAlt: "Privatgarten in Leipzig",
    applications: [
      {
        title: "Rasen",
        description:
          "Zuverlässige Rasenzonen für trockene Leipziger Sommerwochen.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasen Leipzig",
      },
      {
        title: "Beete",
        description:
          "Tropf für Stauden und Gehölze in tiefen Hintergärten.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Beete Leipzig",
      },
      {
        title: "Nachrüstung",
        description:
          "Einbau bei vorhandenem Bestand und begrenztem Seitenzugang.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.process,
        imageAlt: "Nachrüstung Leipzig",
      },
    ],
    faqs: [
      {
        question: "Ist Leipzig im Einsatzgebiet?",
        answer:
          "Ja, Sachsen einschließlich Leipzig. Vor-Ort-Termine nach Abstimmung.",
      },
      {
        question: "Lohnt sich die Anlage trotz gelegentlicher Regenwochen?",
        answer:
          "Die trockenen Abschnitte entscheiden. Eine steuerbare Anlage gießt nicht blind bei Regen, wenn die Steuerung entsprechend geplant ist.",
      },
      {
        question: "Geht Bewässerung im Gründerzeitgarten?",
        answer:
          "Oft ja, wenn Zugang und Anschluss geklärt sind. Lange schmale Grundstücke planen wir als eigene Trassenaufgabe.",
      },
      {
        question: "Wie genau ist der Online-Rechner für Leipzig?",
        answer:
          "Er liefert eine Spanne. Verbindlich nach Prüfung von Wasser, Zugang und Fläche.",
      },
    ],
  },
  {
    slug: "hannover",
    name: "Hannover",
    landSlug: "niedersachsen",
    landName: "Niedersachsen",
    featured: true,
    geo: { latitude: 52.3759, longitude: 9.732 },
    nearby: ["hamburg", "berlin", "leipzig", "duesseldorf"],
    seo: {
      title: "Bewässerungsanlage Hannover – planen und installieren",
      description:
        "Automatische Bewässerung in Hannover: Einfamilienhausgärten, Rasen- und Tropfzonen, schonender Einbau, klarer Preis nach Prüfung. RegnerWerk.",
    },
    h1: "Bewässerungsanlage in Hannover für den Privatgarten",
    lead:
      "In Hannover planen und installieren wir automatische Bewässerung für typische Einfamilienhausgärten – Rasen als Mitte, Hecken und Beete als eigene Zonen, wenn der Anschluss es hergibt.",
    climateTitle: "Norddeutsch wechselhaft",
    climate:
      "Hannover liegt klimatisch zwischen maritim und kontinental. Es gibt feuchte Phasen und spürbar trockene Frühsommer. Die Anlage muss steuerbar sein, sonst gießt sie gegen den Regen oder zu spät gegen die Trockenheit.",
    gardensTitle: "Klassischer Hausgarten",
    gardens:
      "Viele Grundstücke sind klar zoniert: Rasen, Terrasse, Hecke, Nutz- oder Zierstreifen. Das begünstigt eine verständliche Zonenplanung – vorausgesetzt Druck und Durchfluss reichen.",
    districts:
      "Häufig: Kirchrode, Kleefeld, Bothfeld, Wettbergen sowie Isernhagen, Laatzen und Garbsen.",
    waterNote:
      "Der Wassercheck bleibt der Start. Auch ein „normaler“ Hausgarten in Hannover scheitert, wenn zwei Rasenzonen gleichzeitig den Anschluss überziehen.",
    costNote:
      "Viele hannoversche Gärten liegen im mittleren Bereich: Rasen plus eine Tropfzone. Die Online-Orientierung ist ein Einstieg, kein Festpreis.",
    heroImage: images.lawn,
    heroImageAlt: "Einfamilienhausgarten in Hannover",
    applications: [
      {
        title: "Rasen",
        description:
          "Gleichmäßige Versorgung der zentralen Rasenfläche – typisch für hannoversche Hausgärten.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasen Hannover",
      },
      {
        title: "Hecken und Beete",
        description:
          "Getrennte Tropfzone, damit die Hecke nicht mit dem Rasen dieselbe Laufzeit teilt.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Hecke Hannover",
      },
      {
        title: "Nachrüstung",
        description:
          "Einbau im bestehenden Garten mit Schutz von Rasen und Wegen.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Nachrüstung Hannover",
      },
    ],
    faqs: [
      {
        question: "Kommt RegnerWerk nach Hannover?",
        answer:
          "Ja. Hannover liegt in Niedersachsen im Einsatzgebiet. Termine klären wir in der Anfrage.",
      },
      {
        question: "Reicht eine Zone für den ganzen Garten?",
        answer:
          "Selten, wenn Rasen und Hecke denselben Bedarf hätten. Getrennte Zonen sind der Normalfall, sobald Beete oder Hecken mitbewässert werden.",
      },
      {
        question: "Was kostet die Anlage in Hannover?",
        answer:
          "Kompakte Rasengärten orientieren sich ab ca. 2.490 €. Mischgärten liegen häufig höher. Verbindlich nach Prüfung.",
      },
      {
        question: "Kann ich im Winter die Anlage absichern?",
        answer:
          "Winterservice ist eine eigene Leistung, sofern nicht ausdrücklich vereinbart. Details unter Service.",
      },
    ],
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    landSlug: "bayern",
    landName: "Bayern",
    featured: true,
    geo: { latitude: 49.4521, longitude: 11.0767 },
    nearby: ["muenchen", "stuttgart", "frankfurt", "leipzig"],
    seo: {
      title: "Bewässerungsanlage Nürnberg – Franken, Trockenlagen, Zonen",
      description:
        "Gartenbewässerung in Nürnberg: trockenes Franken, sandige Böden, Rasen- und Tropfzonen, Einbau im Bestand. RegnerWerk plant und installiert.",
    },
    h1: "Bewässerungsanlage in Nürnberg und der Region",
    lead:
      "Franken ist trockener als viele erwarten. In Nürnberg planen wir Bewässerung so, dass sandige Böden und heiße Wochen den Rasen nicht in Inseln zerlegen.",
    climateTitle: "Trockenes Franken",
    climate:
      "Nürnberg und Umgebung zählen zu den niederschlagsärmeren deutschen Lagen. Sandige Böden speichern wenig. Häufige, kurze, zonierte Gaben sind hier fachlich oft richtiger als seltenes Fluten.",
    gardensTitle: "Vorstadtgarten und sandiger Rasen",
    gardens:
      "Typisch sind Einfamilienhausgärten mit Rasenfläche und Hecke. In älteren Lagen kommen enge Zugänge und bestehendes Pflaster dazu. Nachrüstung ist Standard.",
    districts:
      "Häufig: Erlenstegen, Laufamholz, Mögeldorf, Langwasser sowie Fürth, Erlangen und Schwabach. Die Region teilt das trockene Klima, nicht unbedingt denselben Anschluss.",
    waterNote:
      "Bei sandigem Boden und begrenztem Druck planen wir eher mehr, kürzere Zonen als eine große, die hinten nicht mehr dreht.",
    costNote:
      "Trockenlage ändert nicht den Listenpreis der Teile, aber die sinnvolle Zonenzahl. Deshalb bleibt der Online-Wert eine Spanne.",
    heroImage: images.process,
    heroImageAlt: "Bewässerungsplanung in Nürnberg",
    applications: [
      {
        title: "Rasen",
        description:
          "Zonen gegen Trockenstellen auf sandigen Nürnberger Rasenflächen.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasen Nürnberg",
      },
      {
        title: "Tropf",
        description:
          "Wurzelnahe Gabe für Hecken, die in Franken sonst lückenhaft werden.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Tropf Nürnberg",
      },
      {
        title: "Nachrüstung",
        description:
          "Einbau im Bestand – Trassen planen, Flächen schützen, dokumentieren.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Nachrüstung Nürnberg",
      },
    ],
    faqs: [
      {
        question: "Ist Nürnberg zu trocken für Rasen ohne Anlage?",
        answer:
          "Viele Gärten ja, zumindest in heißen Abschnitten. Ob eine Anlage sinnvoll ist, hängt von Fläche, Anspruch und Anschluss ab – das klären wir konkret.",
      },
      {
        question: "Arbeitet ihr auch in Fürth und Erlangen?",
        answer:
          "Ja, die Region gehört zum bayerischen Einsatzgebiet. Die Stadtseite Nürnberg beschreibt den lokalen Kontext; der Ablauf bleibt gleich.",
      },
      {
        question: "Kommt ihr nach Nürnberg?",
        answer:
          "Ja. Termin und Anfahrt nach Anfrage.",
      },
      {
        question: "Online-Preis oder Festpreis?",
        answer:
          "Online Orientierung, Festpreis nach Wasser- und Objektprüfung.",
      },
    ],
  },
  {
    slug: "dresden",
    name: "Dresden",
    landSlug: "sachsen",
    landName: "Sachsen",
    featured: true,
    geo: { latitude: 51.0504, longitude: 13.7373 },
    nearby: ["leipzig", "berlin", "nuernberg", "hannover"],
    seo: {
      title: "Bewässerungsanlage Dresden – Elblage und Privatgarten",
      description:
        "Automatische Gartenbewässerung in Dresden: kontinentales Klima, Villengärten, Nachrüstung, Zonenplanung nach Wassercheck. RegnerWerk.",
    },
    h1: "Bewässerungsanlage in Dresden planen und einbauen",
    lead:
      "In Dresden kombinieren wir kontinentale Trockenphasen mit oft anspruchsvollen Villen- und Hanggärten. Planung heißt: Wasser messen, Zonen trennen, Bestand schonen.",
    climateTitle: "Elbtal: Wärme und Trockenabschnitte",
    climate:
      "Dresden kann in Sommern deutlich trockener sein als norddeutsche Lagen. Südseitige Gärten und leichte Böden verstärken das. Bewässerung ist hier Versorgung, nicht Dekoration.",
    gardensTitle: "Hang, Villa, Neubaurand",
    gardens:
      "Neben Einfamilienhäusern am Stadtrand gibt es ältere Villengärten mit Gehölzbestand und Höhenunterschieden. Einbau ohne Plan zerstört mehr, als er nützt.",
    districts:
      "Häufig: Weißer Hirsch, Blasewitz, Strehlen, Loschwitz sowie Radebeul und Freital. Hang und Zugang ändern den Aufwand spürbar.",
    waterNote:
      "Höhendifferenz und ältere Anschlüsse sind in Dresden keine Ausnahme. Zonen folgen der Messung.",
    costNote:
      "Hang- und Villengärten liegen oft über der Orientierung eines ebenen Rasens. Wir machen das vor Auftrag sichtbar.",
    heroImage: images.heroGarden,
    heroImageAlt: "Gartenbewässerung in Dresden",
    applications: [
      {
        title: "Rasen",
        description:
          "Gleichmäßige Rasenzonen trotz Trockenphasen im Elbtal.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasen Dresden",
      },
      {
        title: "Beete und Gehölze",
        description:
          "Tropf für Pflanzungen, die am Hang nicht mit Oberflächenwasser mitgespült werden sollen.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Beete Dresden",
      },
      {
        title: "Nachrüstung",
        description:
          "Schonender Einbau in gewachsenen Villengärten.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Nachrüstung Dresden",
      },
    ],
    faqs: [
      {
        question: "Ist Dresden Einsatzgebiet von RegnerWerk?",
        answer:
          "Ja, Sachsen einschließlich Dresden. Termine nach Abstimmung.",
      },
      {
        question: "Geht Bewässerung im Hanggarten an der Elbe?",
        answer:
          "Ja, mit angepassten Zonen und Druck. Pauschale Ein-Kreis-Lösungen sind oft ungeeignet.",
      },
      {
        question: "Kann ich bestehende Regner weiterverwenden?",
        answer:
          "Nur nach Prüfung. Alte Düsen und falsche Überdeckung übernehmen wir nicht ungeprüft.",
      },
      {
        question: "Wie starte ich in Dresden?",
        answer:
          "Garten berechnen oder Kontakt mit PLZ, Fotos und Angabe zu Hang oder ebener Fläche.",
      },
    ],
  },
  {
    slug: "freiburg",
    name: "Freiburg",
    landSlug: "baden-wuerttemberg",
    landName: "Baden-Württemberg",
    featured: true,
    geo: { latitude: 47.999, longitude: 7.8421 },
    nearby: ["stuttgart", "muenchen", "frankfurt", "nuernberg"],
    seo: {
      title: "Bewässerungsanlage Freiburg – warme Lage, geplante Zonen",
      description:
        "Gartenbewässerung in Freiburg im Breisgau: eine der wärmsten Lagen Deutschlands, Rasen- und Tropfzonen, Einbau nach Wasserprüfung. RegnerWerk.",
    },
    h1: "Bewässerungsanlage in Freiburg im Breisgau",
    lead:
      "Freiburg gehört zu den wärmsten deutschen Städten. Automatische Bewässerung ist hier oft kein Komfort, sondern die Voraussetzung für gleichmäßigen Rasen und dichte Hecken in trockenen Sommern.",
    climateTitle: "Oberrhein: Wärme und lange Trockenphasen",
    climate:
      "Die Oberrheinische Tiefebene bringt frühe Wärme und ausgeprägte Trockenabschnitte. Verdunstung ist hoch. Eine Anlage ohne Zonen und ohne Messung verschwendet Wasser oder unterversorgt die Fläche – beides sehen wir häufig, wenn nach Gefühl nachgerüstet wurde.",
    gardensTitle: "Stadtgarten, Hang zum Schwarzwald, Neubau",
    gardens:
      "In der Stadt sind Gärten oft kompakt; Richtung Hänge kommen Steigung und terrassierte Pflanzungen dazu. Beides braucht eigene Planung, nicht dasselbe Standardpaket.",
    districts:
      "Häufig: Herdern, Wiehre, Günterstal, Hochdorf sowie Kirchzarten, Bad Krozingen und Emmendingen.",
    waterNote:
      "Hoher Bedarf trifft nicht automatisch auf starken Anschluss. Wir legen die Zonenzahl nach Messung fest, damit die Anlage in der Hitze noch arbeitet.",
    costNote:
      "In Freiburg steigen Aufwand und Zonenzahl oft mit der Trockenlage, nicht nur mit den Quadratmetern. Online bleibt vorläufig.",
    heroImage: images.lawn,
    heroImageAlt: "Rasenbewässerung in Freiburg",
    applications: [
      {
        title: "Rasen",
        description:
          "Überdeckte Rasenzonen für eine der trockensten deutschen Stadtlagen.",
        href: "/rasenbewaesserung-installieren/",
        image: images.lawnAnwendung,
        imageAlt: "Rasen Freiburg",
      },
      {
        title: "Hecken und Beete",
        description:
          "Tropf gegen Trockenstress an Hecken und mediterranen Pflanzungen.",
        href: "/tropfbewaesserung-hecken-beete/",
        image: images.bedsHecken,
        imageAlt: "Tropf Freiburg",
      },
      {
        title: "Nachrüstung",
        description:
          "Einbau im Bestand – besonders dort, wo der Garten schon unter Trockenheit leidet.",
        href: "/bewaesserung-bestehender-garten/",
        image: images.houseGarden,
        imageAlt: "Nachrüstung Freiburg",
      },
    ],
    faqs: [
      {
        question: "Lohnt sich eine Bewässerungsanlage in Freiburg besonders?",
        answer:
          "In vielen Gärten ja, weil Wärme und Trockenphasen den manuellen Aufwand und den Trockenschaden erhöhen. Ob es passt, entscheidet Anschluss und Fläche.",
      },
      {
        question: "Kommt RegnerWerk nach Freiburg?",
        answer:
          "Ja. Freiburg liegt in Baden-Württemberg im Einsatzgebiet. Termine nach Anfrage.",
      },
      {
        question: "Spart automatische Bewässerung Wasser?",
        answer:
          "Gegen unkontrolliertes Schlauchgießen oft ja – durch Zonen, Überdeckung und steuerbare Laufzeiten. Sie ist kein Freibrief für Dauerbetrieb.",
      },
      {
        question: "Wie geht es nach der Anfrage weiter?",
        answer:
          "Vorläufige Orientierung, dann Prüfung von Wasser und Grundstück, danach verbindliches Angebot vor Baubeginn.",
      },
    ],
  },
];

const bySlug = new Map(cities.map((c) => [c.slug, c]));

export function getCity(slug: string) {
  return bySlug.get(slug);
}

export function featuredCities() {
  return cities.filter((c) => c.featured);
}

export function citiesInLand(landSlug: string) {
  return cities.filter((c) => c.landSlug === landSlug);
}

export function nearbyCities(city: City) {
  return city.nearby
    .map((slug) => bySlug.get(slug))
    .filter((c): c is City => Boolean(c));
}
