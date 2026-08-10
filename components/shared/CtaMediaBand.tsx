"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  LeadCaptureModal,
  type LeadModalCopy,
} from "@/components/shared/LeadCaptureModal";
import { PhotoAtmosphere } from "@/components/shared/PhotoAtmosphere";
import { track } from "@/lib/analytics";

export function CtaMediaBand({
  title,
  body,
  image,
  imageAlt,
  reverse,
  primaryLabel,
  primaryHref,
  secondaryLabel = "Kurz anfragen",
  lead,
}: {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  lead: LeadModalCopy;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PhotoAtmosphere
        variant="darkBeds"
        image={image}
        className="rw-section"
      >
        <Container>
          <div
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
              reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/15 shadow-soft">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lime">
                {lead.topic}
              </p>
              <h2 className="mt-3 text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-white">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.7] text-white/85">{body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={primaryHref}
                  variant="primary"
                  onClick={() => track("garten_berechnen_click")}
                >
                  {primaryLabel}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    track("form_start");
                    setOpen(true);
                  }}
                >
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </PhotoAtmosphere>
      <LeadCaptureModal open={open} onClose={() => setOpen(false)} copy={lead} />
    </>
  );
}
