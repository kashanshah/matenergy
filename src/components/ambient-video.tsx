"use client";

import { useEffect, useRef } from "react";

/**
 * Muted, looping background clip. Shows only the poster when the visitor prefers reduced motion.
 * `eager` is for a clip on the first screen: it loads straight away instead of waiting to be scrolled near.
 */
export function AmbientVideo({
  src,
  poster,
  label,
  className = "",
  eager = false,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = "auto";
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      aria-label={label}
    />
  );
}
