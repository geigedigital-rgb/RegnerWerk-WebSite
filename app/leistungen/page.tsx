import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { TopicCluster } from "@/components/shared/TopicCluster";
import { leistungenPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(leistungenPage.seo);

export default function Page() {
  return (
    <>
      <MarketingPageView
        page={leistungenPage}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Leistungen" },
        ]}
      />
      <TopicCluster title="Verwandte Themen und Vertrauensseiten" />
    </>
  );
}
