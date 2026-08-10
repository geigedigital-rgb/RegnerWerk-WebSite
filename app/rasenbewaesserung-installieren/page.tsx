import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { rasenPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(rasenPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={rasenPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Rasenbewässerung" },
      ]}
    />
  );
}
