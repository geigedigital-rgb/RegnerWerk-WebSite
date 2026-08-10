import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { steuerungPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(steuerungPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={steuerungPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Leistungen", href: "/leistungen/" },
        { label: "Steuerung" },
      ]}
    />
  );
}
