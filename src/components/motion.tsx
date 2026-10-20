"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Reveals every [data-reveal] block once it scrolls into view. Re-scans after each client navigation. */
export function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const blocks = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      blocks.forEach((b) => b.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    blocks.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
