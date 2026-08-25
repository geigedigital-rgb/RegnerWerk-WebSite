/**
 * Forward marketing site form submissions to RegnerWerk Backend CRM.
 * Server-only — never expose service keys; only BACKEND_URL / NEXT_PUBLIC_API_URL.
 */

import { getBackendUrl } from "@/lib/backend";

export type SiteLeadPayload = {
  submission_id: string;
  form_type: "contact" | "service" | "projekt_anfrage" | "other";
  name: string;
  email?: string | null;
  phone?: string | null;
  postal_code?: string | null;
  address?: string | null;
  message?: string | null;
  garden_type?: string | null;
  landing_page?: string | null;
  referrer?: string | null;
  privacy_notice_version?: string;
  company_website?: string | null;
};

export async function forwardLeadToBackend(
  payload: SiteLeadPayload,
): Promise<{ ok: true; reference: string } | { ok: false; error: string }> {
  try {
    const res = await fetch(`${getBackendUrl()}/api/public/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as {
      accepted?: boolean;
      reference?: string;
      error?: string;
    };
    if (!res.ok || !data.accepted || !data.reference) {
      return {
        ok: false,
        error: data.error || "Backend-Anfrage fehlgeschlagen.",
      };
    }
    return { ok: true, reference: data.reference };
  } catch (e) {
    console.error("[forwardLeadToBackend]", e);
    return { ok: false, error: "Backend nicht erreichbar." };
  }
}
