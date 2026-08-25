/**
 * RegnerWerk Backend (admin / CRM API — Next.js on Railway).
 * Not the voice-gateway service.
 * Server-only — do not expose service secrets to the browser.
 */
export function getBackendUrl(): string {
  let raw = (
    process.env.BACKEND_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:3001"
  )
    .trim()
    .replace(/\/$/, "");

  // Railway vars are often pasted without scheme → fetch() throws → site 503
  if (raw && !/^https?:\/\//i.test(raw)) {
    raw = `https://${raw}`;
  }

  return raw;
}
