import { AdvantagePageView } from "@/components/shared/AdvantagePageView";
import { wasseranschlussPage } from "@/lib/content/advantages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(wasseranschlussPage.seo);

export default function Page() {
  return (
    <AdvantagePageView
      page={wasseranschlussPage}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Wasseranschluss prüfen" },
      ]}
    />
  );
}
