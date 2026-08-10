import { AdvantagePageView } from "@/components/shared/AdvantagePageView";
import { schonenderEinbauPage } from "@/lib/content/advantages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(schonenderEinbauPage.seo);

export default function Page() {
  return (
    <AdvantagePageView
      page={schonenderEinbauPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Schonender Einbau" },
      ]}
    />
  );
}
