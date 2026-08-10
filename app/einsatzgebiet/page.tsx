import Link from "next/link";
import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { Container } from "@/components/ui/Container";
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
        <Container className="!px-0 mt-6">
          <p className="text-sm text-gray-600">
            Stadtseiten legen wir erst an, wenn echte lokale Projekte und Inhalte
            vorliegen.
          </p>
        </Container>
      </div>
    </MarketingPageView>
  );
}
