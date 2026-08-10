import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { komponentenPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(komponentenPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={komponentenPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Leistungen", href: "/leistungen/" },
        { label: "Komponenten" },
      ]}
    />
  );
}
