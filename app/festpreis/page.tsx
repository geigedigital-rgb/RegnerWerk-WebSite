import { AdvantagePageView } from "@/components/shared/AdvantagePageView";
import { festpreisPage } from "@/lib/content/advantages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(festpreisPage.seo);

export default function Page() {
  return (
    <AdvantagePageView
      page={festpreisPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Festpreis" },
      ]}
    />
  );
}
