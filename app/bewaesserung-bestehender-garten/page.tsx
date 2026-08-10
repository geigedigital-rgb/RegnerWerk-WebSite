import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { bestehendPage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(bestehendPage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={bestehendPage}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Montage / Nachrüstung" },
        ]}
    />
  );
}
