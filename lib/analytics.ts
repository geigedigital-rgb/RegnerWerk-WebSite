/** Consent-gated analytics helpers. */
import { hasAnalyticsConsent } from "@/lib/consent";

export type AnalyticsEvent =
  | "garten_berechnen_click"
  | "calc_start"
  | "calc_complete"
  | "form_start"
  | "form_submit"
  | "tel_click"
  | "project_open"
  | "land_to_calc"
  | "photo_upload"
  | "konfigurator_maintenance_open"
  | "projekt_anfragen_from_maintenance"
  | "projekt_anfrage_start"
  | "projekt_anfrage_submit";

export { hasAnalyticsConsent };

export function track(event: AnalyticsEvent, payload?: Record<string, string>) {
  if (!hasAnalyticsConsent()) return;
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, payload ?? {});
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("rw-analytics", { detail: { event, payload } }),
    );
  }
}
