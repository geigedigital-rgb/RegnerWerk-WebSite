/** Client-side UTM / landing attribution for CRM lead POSTs. */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function pageAttribution(): {
  landing_page: string;
  referrer: string | null;
  utm: Record<string, string> | null;
} {
  if (typeof window === "undefined") {
    return { landing_page: "", referrer: null, utm: null };
  }
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const v = params.get(key);
    if (v) utm[key] = v;
  }
  return {
    landing_page: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || null,
    utm: Object.keys(utm).length ? utm : null,
  };
}
