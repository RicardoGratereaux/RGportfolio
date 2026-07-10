"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    if (typeof window !== "undefined") {
      (window as any).portfolioLenis = lenis;
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.origin === window.location.origin) {
        const hash = anchor.hash;
        if (hash === "" || hash === "#") {
          // If clicking home/logo link, scroll smoothly to the top
          e.preventDefault();
          lenis.scrollTo(0);
        } else {
          try {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
              e.preventDefault();
              lenis.scrollTo(targetElement, {
                offset: -40, // Offset to keep spacing under header
              });
            }
          } catch (err) {
            // Silence selector syntax errors for non-standard hashes
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
