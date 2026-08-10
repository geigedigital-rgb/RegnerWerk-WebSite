"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  readConsent,
  subscribeConsent,
  writeConsent,
} from "@/lib/consent";

function getSnapshot() {
  return readConsent() === null;
}

function getServerSnapshot() {
  return false;
}

export function CookieBanner() {
  const visible = useSyncExternalStore(
    subscribeConsent,
    getSnapshot,
    getServerSnapshot,
  );

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-20 z-[60] mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-5 shadow-soft lg:bottom-4 lg:inset-x-auto lg:right-6 lg:left-auto">
      <p className="text-sm leading-relaxed text-gray-600">
        Wir verwenden notwendige Cookies und – nur nach Ihrer Zustimmung –
        Analyse-Events (z. B. „Garten berechnen“, Formulare). Details:{" "}
        <Link href="/cookies/" className="text-aqua-deep underline">
          Cookies
        </Link>{" "}
        und{" "}
        <Link href="/datenschutz/" className="text-aqua-deep underline">
          Datenschutz
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Button
          type="button"
          variant="primary"
          className="!shadow-none"
          onClick={() => writeConsent("all")}
        >
          Alle akzeptieren
        </Button>
        <Button
          type="button"
          variant="dark"
          className="!shadow-none"
          onClick={() => writeConsent("necessary")}
        >
          Nur notwendige
        </Button>
      </div>
    </div>
  );
}
