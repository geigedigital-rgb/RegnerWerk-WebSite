import { AdvantagePageView } from "@/components/shared/AdvantagePageView";
import { wasserverbrauchPage } from "@/lib/content/advantages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(wasserverbrauchPage.seo);

export default function Page() {
  return (
    <AdvantagePageView
      page={wasserverbrauchPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Wasserverbrauch" },
      ]}
    />
  );
}
