import { ContactForm } from "@/components/forms/ContactForm";
import { MarketingPageView } from "@/components/shared/MarketingPageView";
import { servicePage } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(servicePage.seo);

export default function Page() {
  return (
    <MarketingPageView
      page={servicePage}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Start und Einstellung" },
        ]}
    >
      <div>
        <h2 className="text-2xl font-bold text-forest">Service anfragen</h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Beschreiben Sie kurz Anlage und Anliegen. Wir melden uns in der Regel
          innerhalb von 1–2 Werktagen.
        </p>
        <div className="mt-6">
          <ContactForm
            defaultGardenType="Service / Wartung"
            submitLabel="Service-Anfrage senden"
          />
        </div>
      </div>
    </MarketingPageView>
  );
}
