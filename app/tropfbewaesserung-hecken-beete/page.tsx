import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { tropfPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(tropfPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={tropfPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Tropfbewässerung" },
      ]}
    />
  );
}
