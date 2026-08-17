"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  poster: string;
  posterAlt: string;
  srcDesktop: string;
  srcMobile: string;
};

/**
 * Full-bleed hero video: poster first (LCP), then deferred muted loop.
 * Skips video when reduced-motion or Save-Data is on.
 */
export function HeroBackgroundVideo({
  poster,
  posterAlt,
  srcDesktop,
  srcMobile,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData =
      "connection" in navigator &&
      Boolean(
        (navigator as Navigator & { connection?: { saveData?: boolean } })
          .connection?.saveData,
      );
    if (reduced || saveData) return;

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const nextSrc = mobile ? srcMobile : srcDesktop;

    let cancelled = false;
    const start = () => {
      if (!cancelled) setSrc(nextSrc);
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 1200 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    const t = setTimeout(start, 350);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [srcDesktop, srcMobile]);

  useEffect(() => {
    if (!src) return;
    const el = videoRef.current;
    if (!el) return;

    const tryPlay = () => {
      el.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };

    if (el.readyState >= 2) tryPlay();
    else el.addEventListener("loadeddata", tryPlay, { once: true });

    return () => el.removeEventListener("loadeddata", tryPlay);
  }, [src]);

  return (
    <div className="absolute inset-0" aria-hidden>
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        className={`object-cover transition-opacity duration-700 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
        sizes="100vw"
      />

      {src ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          muted
          playsInline
          loop
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
        />
      ) : null}
    </div>
  );
}
