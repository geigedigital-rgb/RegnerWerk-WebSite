import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { berechnenPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(berechnenPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={berechnenPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Garten berechnen" },
      ]}
    />
  );
}
