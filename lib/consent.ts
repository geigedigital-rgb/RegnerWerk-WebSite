const KEY = "rw-cookie-consent";
const listeners = new Set<() => void>();

export type ConsentValue = "all" | "necessary";

export function getConsentKey() {
  return KEY;
}

export function emitConsentChange() {
  listeners.forEach((l) => l());
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("rw-cookie-consent-changed"));
  }
}

export function subscribeConsent(listener: () => void) {
  listeners.add(listener);
  if (typeof window !== "undefined") {
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) listener();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("rw-cookie-consent-changed", listener);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("rw-cookie-consent-changed", listener);
    };
  }
  return () => listeners.delete(listener);
}

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(KEY);
    if (v === "all" || v === "necessary") return v;
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(value: ConsentValue) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* ignore */
  }
  emitConsentChange();
}

export function hasAnalyticsConsent() {
  return readConsent() === "all";
}
