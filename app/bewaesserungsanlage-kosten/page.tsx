import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { kostenPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(kostenPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={kostenPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Kosten" },
      ]}
    />
  );
}
