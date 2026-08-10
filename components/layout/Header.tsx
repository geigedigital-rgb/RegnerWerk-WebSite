"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { calcHref, nav } from "@/lib/content/nav";
import { track } from "@/lib/analytics";
import { site, telHref } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrollY > 24;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link
          href="/"
          className={`text-lg font-bold tracking-tight transition-colors ${
            solid ? "text-forest" : "text-white"
          }`}
        >
          Regner
          <span className={solid ? "text-aqua-deep" : "text-lime"}>Werk</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? "text-forest-mid hover:text-forest"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={telHref()}
            onClick={() => track("tel_click")}
            className={`text-sm font-medium ${
              solid ? "text-forest-mid" : "text-white/85"
            }`}
          >
            {site.phone}
          </a>
          <Button
            href={calcHref}
            variant="primary"
            onClick={() => track("garten_berechnen_click")}
          >
            Garten berechnen
          </Button>
        </div>

        <button
          type="button"
          className={`rounded-full p-2 lg:hidden ${
            solid ? "text-forest" : "text-white"
          }`}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            {open ? (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-forest"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href={calcHref} variant="primary" className="w-full">
              Garten berechnen
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
