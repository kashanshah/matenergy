"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type SceneStep = { title: string; text: string; image: { src: string; alt: string } };

/**
 * One sticky full-bleed scene. As the reader scrolls, the active statement steps down the stack and the
 * photograph behind it crossfades to the matching installation (the page's signature move).
 */
export function SystemScene({ heading, steps }: { heading: string; steps: SceneStep[] }) {
  const [active, setActive] = useState(0);
  const markers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    markers.current.forEach((m) => m && observer.observe(m));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-ink-900" style={{ height: `${steps.length * 65 + 20}svh` }} aria-label={heading}>
      <div className="sticky top-0 h-svh overflow-hidden">
        {steps.map((s, i) => (
          <Image
            key={s.image.src}
            src={s.image.src}
            alt={s.image.alt}
            fill
            sizes="100vw"
            className={`object-cover transition-opacity duration-[1600ms] ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {/* A neutral scrim behind the text only: the upper part on desktop, the lower part on a phone. */}
        <div className="absolute inset-x-0 bottom-0 bg-ink-900/85 sm:bottom-auto sm:top-0">
          <div className="container-x py-10 sm:py-14">
            <h2 className="title-head text-white">{heading}</h2>
            <ol className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="transition-transform duration-500" style={{ transform: i === active ? "translateY(-4px)" : "none" }}>
                  <p className={`font-display text-lead font-bold uppercase leading-none ${i === active ? "text-sun-300" : "text-ink-200"}`}>
                    {s.title}
                  </p>
                  <p className={`mt-2 max-w-[34ch] ${i === active ? "block" : "hidden sm:block"} ${i === active ? "text-white" : "text-ink-300"}`}>
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>
            <Link
              href="/solar-systems/"
              className="mt-8 inline-block font-semibold text-white underline decoration-2 underline-offset-[6px] hover:text-brand-200"
            >
              Compare the three systems
            </Link>
          </div>
        </div>
      </div>
      {steps.map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            markers.current[i] = el;
          }}
          data-step={i}
          aria-hidden
          className="pointer-events-none absolute inset-x-0"
          style={{ top: `${i * 65}svh`, height: "65svh" }}
        />
      ))}
    </section>
  );
}
