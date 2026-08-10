import { AdvantagePageView } from "@/components/shared/AdvantagePageView";
import { ersteSaisonPage } from "@/lib/content/advantages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(ersteSaisonPage.seo);

export default function Page() {
  return (
    <AdvantagePageView
      page={ersteSaisonPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Erste Saison" },
      ]}
    />
  );
}
