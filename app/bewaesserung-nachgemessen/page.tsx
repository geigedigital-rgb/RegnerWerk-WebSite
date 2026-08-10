import { AdvantagePageView } from "@/components/shared/AdvantagePageView";
import { nachgemessenPage } from "@/lib/content/advantages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(nachgemessenPage.seo);

export default function Page() {
  return (
    <AdvantagePageView
      page={nachgemessenPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Nachgemessen" },
      ]}
    />
  );
}
