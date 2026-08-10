"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

type Ctx = {
  open: boolean;
  show: () => void;
  hide: () => void;
};

const MaintenanceCtx = createContext<Ctx | null>(null);

export function useKonfiguratorMaintenance() {
  const ctx = useContext(MaintenanceCtx);
  if (!ctx) {
    throw new Error("useKonfiguratorMaintenance must be used within provider");
  }
  return ctx;
}

function isKonfiguratorNavTarget(href: string) {
  try {
    if (href.includes("/garten-berechnen")) return true;
    if (href.includes("konfigurator")) return true;
    const u = new URL(href, window.location.origin);
    if (u.pathname.includes("/garten-berechnen")) return true;
    return false;
  } catch {
    return href.includes("/garten-berechnen") || href.includes("konfigurator");
  }
}

export function KonfiguratorMaintenanceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const titleId = useId();

  const show = useCallback(() => {
    setOpen(true);
    track("konfigurator_maintenance_open");
  }, []);
  const hide = useCallback(() => setOpen(false), []);

  // Direct visits to /garten-berechnen/
  useEffect(() => {
    if (pathname?.includes("garten-berechnen")) {
      setOpen(true);
    }
  }, [pathname]);

  // Intercept in-app links to calculator / konfigurator
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const el = (e.target as Element | null)?.closest?.("a[href]");
      if (!el) return;
      const href = el.getAttribute("href") || "";
      if (!isKonfiguratorNavTarget(href)) return;
      e.preventDefault();
      show();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [show]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, hide]);

  return (
    <MaintenanceCtx.Provider value={{ open, show, hide }}>
      {children}
      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          {/* GIF background */}
          <div className="absolute inset-0 overflow-hidden bg-forest">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Water-Irrigation.gif"
              alt=""
              className="h-full w-full object-cover"
            />
            {/* Darken + blur: bright sunlit GIF would wash out white text otherwise */}
            <div
              className="absolute inset-0 bg-forest/80 backdrop-blur-[3px]"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-forest/55 via-forest/70 to-forest/90"
              aria-hidden
            />
          </div>

          <div className="relative z-10 w-full max-w-lg">
            <button
              type="button"
              onClick={hide}
              className="absolute -right-1 -top-1 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-forest/70 text-white shadow-soft backdrop-blur-md transition hover:bg-forest/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              aria-label="Schließen"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            <div className="rounded-[1.75rem] border border-white/25 bg-forest/75 p-7 text-center shadow-soft backdrop-blur-xl sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">
                Hinweis
              </p>
              <h2
                id={titleId}
                className="mt-3 text-[clamp(1.35rem,3vw,1.75rem)] font-bold leading-tight tracking-[-0.02em] text-white"
              >
                Technische Arbeiten
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[0.9875rem] leading-[1.65] text-white/88">
                Der Online-Konfigurator wird gerade vorbereitet und ist
                vorübergehend nicht erreichbar. Sie können uns trotzdem Ihren
                Garten beschreiben – wir melden uns persönlich.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  href="/projekt-anfragen/"
                  variant="primary"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    hide();
                    track("projekt_anfragen_from_maintenance");
                  }}
                >
                  Projekt anfragen
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full border-white/40 sm:w-auto"
                  onClick={hide}
                >
                  Schließen
                </Button>
              </div>
              <p className="mt-5 text-xs text-white/55">
                Oder weiterstöbern:{" "}
                <Link href="/" className="text-lime underline-offset-2 hover:underline" onClick={hide}>
                  zur Startseite
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </MaintenanceCtx.Provider>
  );
}
