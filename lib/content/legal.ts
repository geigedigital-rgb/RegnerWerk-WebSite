/**
 * Legal entity for RegnerWerk website operator disclosures.
 * Source: UK Companies House — https://find-and-update.company-information.service.gov.uk/company/16035252
 *
 * CRITICAL: Company status is Dissolved (21 April 2026). Do not treat as
 * a go-live Impressum for consumer contracts until an active entity is named.
 */

export const legalEntity = {
  brandName: "RegnerWerk",
  companyName: "MARYSCHAKGROUP LTD",
  companyNumber: "16035252",
  companyType: "Private limited Company (UK)",
  incorporatedOn: "22. Oktober 2024",
  dissolvedOn: "21. April 2026",
  status: "Dissolved" as const,
  register: "Companies House (United Kingdom)",
  registerUrl:
    "https://find-and-update.company-information.service.gov.uk/company/16035252",
  registeredOffice: {
    line1: "PO Box 4385",
    line2: "16035252 – COMPANIES HOUSE DEFAULT ADDRESS",
    city: "Cardiff",
    postalCode: "CF14 8LH",
    country: "United Kingdom",
  },
  sic: [
    "62012 – Business and domestic software development",
    "62020 – Information technology consultancy activities",
  ],
  director: {
    name: "Serhii Maryshchak",
    role: "Director",
    appointedOn: "22. Oktober 2024",
  },
  secretary: {
    name: "Serhii Maryshchak",
    role: "Secretary",
    appointedOn: "22. Oktober 2024",
  },
  /** Public contact for the RegnerWerk service brand (not inventing private addresses). */
  contactEmail: "hallo@regnerwerk.de",
  contactPhone: "+49 (0) 800 123 4567",
  vatId: null as string | null,
  supervisoryAuthorityHint:
    "Zuständige Datenschutz-Aufsichtsbehörde am Wohnsitz bzw. gewöhnlichen Aufenthalt der betroffenen Person oder am Sitz der verantwortlichen Stelle (für DE u. a. die Landesbeauftragten für Datenschutz; für UK ggf. ICO).",
};

export const legalNoticeDissolved = {
  title: "Wichtiger Statushinweis",
  body: `Nach öffentlichen Angaben von Companies House ist ${legalEntity.companyName} (Nr. ${legalEntity.companyNumber}) seit dem ${legalEntity.dissolvedOn} aufgelöst (Status: Dissolved). Die eingetragene Anschrift ist eine Companies-House-Default-Adresse. Bis eine aktive, rechtlich handlungsfähige Anbieterin mit erreichbarer ladungsfähiger Anschrift benannt ist, gelten die nachfolgenden Angaben als vorbereiteter Entwurf und ersetzen keine anwaltliche Freigabe für den Produktivbetrieb gegenüber Verbraucherinnen und Verbrauchern.`,
};
