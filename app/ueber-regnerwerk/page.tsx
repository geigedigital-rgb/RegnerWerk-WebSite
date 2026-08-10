import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { ueberPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(ueberPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={ueberPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Über RegnerWerk" },
      ]}
    />
  );
}
