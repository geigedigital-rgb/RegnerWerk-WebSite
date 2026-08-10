"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { calcHref } from "@/lib/content/nav";
import { track } from "@/lib/analytics";

const HIDE = [
  "/garten-berechnen",
  "/projekt-anfragen",
  "/anfrage-gesendet",
  "/kontakt",
  "/service",
];

/** Persistent mobile CTA — brief: keep Garten berechnen prominent on small screens. */
export function StickyMobileCta() {
  const pathname = usePathname();
  if (HIDE.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 p-3 backdrop-blur-md lg:hidden">
      <Button
        href={calcHref}
        variant="primary"
        className="w-full !shadow-none"
        onClick={() => track("garten_berechnen_click", { source: "sticky_mobile" })}
      >
        Garten berechnen
      </Button>
    </div>
  );
}
