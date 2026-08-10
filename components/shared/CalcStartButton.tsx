"use client";

import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

export function CalcStartButton({ href }: { href: string }) {
  return (
    <Button
      href={href}
      variant="primary"
      className="mt-6"
      onClick={() => {
        track("calc_start");
        track("garten_berechnen_click");
      }}
    >
      Zum Online-Rechner
    </Button>
  );
}
