import { AdvantagePageView } from "@/components/shared/AdvantagePageView";
import { winterservicePage } from "@/lib/content/advantages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(winterservicePage.seo);

export default function Page() {
  return (
    <AdvantagePageView
      page={winterservicePage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Winterservice" },
      ]}
    />
  );
}
