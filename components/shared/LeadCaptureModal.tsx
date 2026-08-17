"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calculator, MessageSquare, X } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { calcHref } from "@/lib/content/nav";

export type LeadModalCopy = {
  topic: string;
  title: string;
  intro: string;
  defaultGardenType?: string;
  defaultMessage?: string;
  bullets?: string[];
};

export function LeadCaptureModal({
  open,
  onClose,
  copy,
}: {
  open: boolean;
  onClose: () => void;
  copy: LeadModalCopy;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const bullets = copy.bullets ?? [
    "Unverbindlich – kein automatischer Kaufabschluss",
    "Antwort mit nächsten Schritten, kein Callcenter-Skript",
    "Online-Rechnung bleibt Orientierung, nicht Festpreis",
  ];

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Dialog schließen"
            className="absolute inset-0 bg-forest/55 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="relative z-[81] flex max-h-[92svh] w-full max-w-lg flex-col overflow-hidden rounded-t-[1.75rem] border border-gray-100 bg-white shadow-soft sm:rounded-[1.75rem]"
          >
            <div className="shrink-0 border-b border-gray-100 bg-ice px-5 pb-4 pt-5 sm:px-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-aqua-deep">
                    {copy.topic}
                  </p>
                  <h2
                    id={titleId}
                    className="mt-1.5 text-xl font-bold tracking-tight text-forest sm:text-2xl"
                  >
                    {copy.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {copy.intro}
                  </p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-gray-100 bg-white p-2 text-forest transition hover:bg-mint"
                  aria-label="Schließen"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <a
                  href={calcHref}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-3.5 py-3 transition hover:border-aqua-deep/40"
                  onClick={onClose}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-forest">
                    <Calculator className="h-4 w-4" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-bold text-forest">
                      Selbst berechnen
                    </span>
                    <span className="block text-xs text-gray-600">
                      ~2 Min. Orientierung
                    </span>
                  </span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-aqua-deep/30 bg-mint px-3.5 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-lime">
                    <MessageSquare className="h-4 w-4" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-bold text-forest">
                      Kurz schreiben
                    </span>
                    <span className="block text-xs text-gray-600">
                      Formular unten
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              <ul className="mb-5 space-y-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-sm leading-snug text-gray-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-deep" />
                    {b}
                  </li>
                ))}
              </ul>
              <ContactForm
                compact
                defaultGardenType={copy.defaultGardenType}
                defaultMessage={copy.defaultMessage}
                contextTopic={copy.topic}
                submitLabel="Kurz anfragen"
              />
              <p className="mt-4 text-center text-xs text-gray-400">
                Lieber selbst starten?{" "}
                <a
                  href={calcHref}
                  className="font-medium text-aqua-deep underline"
                  onClick={onClose}
                >
                  Garten berechnen
                </a>
              </p>
            </div>

            <div className="shrink-0 border-t border-gray-100 bg-white px-5 py-3 sm:hidden">
              <Button
                type="button"
                variant="secondary"
                className="w-full"
                onClick={onClose}
              >
                Schließen
              </Button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
