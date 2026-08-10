"use client";

import { useState } from "react";

export function FaqAccordion({
  faqs,
  variant = "default",
}: {
  faqs: { question: string; answer: string }[];
  /** onMedia: soft list for photo backgrounds — no boxed cards */
  variant?: "default" | "onMedia";
}) {
  const [open, setOpen] = useState<number | null>(0);

  if (!faqs.length) return null;

  if (variant === "onMedia") {
    return (
      <div className="divide-y divide-white/20 border-y border-white/20">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.question}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 py-4 text-left transition sm:py-5"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="text-[0.9875rem] font-semibold leading-snug text-white sm:text-base">
                  {faq.question}
                </span>
                <span
                  className="mt-0.5 shrink-0 text-lg font-light leading-none text-lime"
                  aria-hidden
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <p className="pb-5 text-sm leading-[1.65] text-white/80">
                  {faq.answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100 rounded-[1.75rem] border border-gray-100 bg-white px-5 sm:px-6">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-4 text-left sm:py-5"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-semibold leading-snug text-forest">
                {faq.question}
              </span>
              <span className="mt-0.5 shrink-0 text-aqua-deep" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="pb-5 text-sm leading-relaxed text-gray-600">
                {faq.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
