import Link from "next/link";
import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { cities, cityPath } from "@/lib/content/cities";
import { einsatzgebietPage } from "@/lib/content/pages";
import { bundeslaender, landInstallPath } from "@/lib/content/regions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(einsatzgebietPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={einsatzgebietPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Einsatzgebiet" },
      ]}
    >
      <div className="space-y-12">
        <div id="staedte">
          <h2 className="text-2xl font-bold text-forest">Städte</h2>
          <p className="mt-3 max-w-2xl text-[1.0625rem] leading-[1.7] text-gray-600">
            Lokale Seiten zu Klima, typischen Gärten und dem Einstieg – für
            Suchanfragen nach einer bestimmten Stadt.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={cityPath(city.slug)}
                  className="block rounded-2xl border border-gray-100 bg-ice px-4 py-3 font-medium text-forest hover:border-aqua-deep/40"
                >
                  Bewässerungsanlage {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-forest">Bundesländer</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {bundeslaender.map((land) => (
              <li key={land.slug}>
                <Link
                  href={landInstallPath(land.slug)}
                  className="block rounded-2xl border border-gray-100 bg-ice px-4 py-3 font-medium text-forest hover:border-aqua-deep/40"
                >
                  Bewässerung in {land.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MarketingPageView>
  );
}
