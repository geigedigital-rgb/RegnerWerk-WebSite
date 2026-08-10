"use client";

import { Button } from "@/components/ui/Button";
import { writeConsent } from "@/lib/consent";

export function CookieControls() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        type="button"
        variant="primary"
        className="!shadow-none"
        onClick={() => {
          writeConsent("all");
          alert("Einstellungen gespeichert: Analyse erlaubt.");
        }}
      >
        Analyse erlauben
      </Button>
      <Button
        type="button"
        variant="dark"
        className="!shadow-none"
        onClick={() => {
          writeConsent("necessary");
          alert("Einstellungen gespeichert: nur notwendige Cookies.");
        }}
      >
        Nur notwendige
      </Button>
    </div>
  );
}
