/** Placeholder reviews — replace with real approved testimonials + project photos. */
import { images } from "@/lib/content/media";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  image: string;
  imageAlt: string;
  placeholder: true;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Der Einbau war ruhig und ordentlich. Unser Rasen lag nach wenigen Tagen wieder sauber – und die Anlage läuft genau so, wie besprochen.",
    name: "Anna M.",
    role: "Hausbesitzerin, Köln",
    rating: 5,
    image: "/images/testimonial-anna-koeln.webp",
    imageAlt: "Hausbesitzerin im Garten mit laufender Rasenbewässerung, Köln",
    placeholder: true,
  },
  {
    quote:
      "Vor Baubeginn wussten wir Preis und Umfang. Die Zonen für Rasen und Hecke laufen getrennt – das war uns wichtig und wurde sauber umgesetzt.",
    name: "Thomas K.",
    role: "Eigentümer, Hamburg",
    rating: 5,
    image: images.heroGarden,
    imageAlt: "Privater Garten mit geplanter Bewässerung",
    placeholder: true,
  },
  {
    quote:
      "Nach der Justierung im Sommer war die Verteilung spürbar gleichmäßiger. Die Betreuung danach hat uns Sicherheit gegeben.",
    name: "Laura S.",
    role: "Gartenbesitzerin, München",
    rating: 5,
    image: images.beds,
    imageAlt: "Beete und Hecke mit Tropfbewässerung",
    placeholder: true,
  },
  {
    quote:
      "Wir hatten Angst um den fertigen Garten. Die Trassen waren geplant, Wege geschützt – und die Fläche wurde wiederhergestellt.",
    name: "Markus W.",
    role: "Einfamilienhaus, Düsseldorf",
    rating: 5,
    image: images.houseGarden,
    imageAlt: "Bestehender Garten nach Nachrüstung – Platzhalter",
    placeholder: true,
  },
  {
    quote:
      "Die Online-Einschätzung war Orientierung, danach kam ein klares Angebot vor Ort. Genau so wollten wir vorgehen – ohne Überraschungen beim Einbau.",
    name: "Sandra H.",
    role: "Reihenhausgarten, Frankfurt",
    rating: 4,
    image: images.process,
    imageAlt: "Planung und Abstimmung – Platzhalterfoto",
    placeholder: true,
  },
  {
    quote:
      "Steuerung und Winterservice wurden klar getrennt erklärt. Wir wissen, was zur Anlage gehört und was späterer Service ist.",
    name: "Peter L.",
    role: "Eigentümer, Stuttgart",
    rating: 5,
    image: images.controller,
    imageAlt: "Steuerung der Bewässerung – Platzhalterfoto",
    placeholder: true,
  },
];
