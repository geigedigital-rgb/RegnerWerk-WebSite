import { AdvantagePageView } from "@/components/shared/AdvantagePageView";
import { anlagenpassPage } from "@/lib/content/advantages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(anlagenpassPage.seo);

export default function Page() {
  return (
    <AdvantagePageView
      page={anlagenpassPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Anlagenpass" },
      ]}
    />
  );
}
