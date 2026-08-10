import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { installPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(installPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={installPage}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Planung" },
        ]}
    />
  );
}
