"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type SceneStep = { title: string; text: string; image: { src: string; alt: string } };

/**
 * Side by side: the statements scroll down the left column while the photograph on the right stays
 * pinned beside them and crossfades to the matching installation (the page's signature move).
 * On a phone each statement carries its own photograph instead.
 */
export function SystemScene({ heading, steps }: { heading: string; steps: SceneStep[] }) {
  const [active, setActive] = useState(0);
  const blocks = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    blocks.current.forEach((b) => b && observer.observe(b));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ink-900 text-white" aria-labelledby="scene-heading">
      <div className="lg:grid lg:grid-cols-2">
        <div className="container-x py-24 sm:py-32 lg:mx-0 lg:max-w-none lg:px-10 xl:px-16">
          <div data-reveal>
            <h2 id="scene-heading" className="title-head text-white">
              {heading}
            </h2>
            <Link
              href="/solar-systems/"
              className="mt-8 inline-block font-semibold text-white underline decoration-2 underline-offset-[6px] hover:text-brand-200"
            >
              Compare the three systems
            </Link>
          </div>
          <div className="mt-16 space-y-16 lg:mt-0 lg:space-y-0">
            {steps.map((s, i) => (
              <div
                key={s.title}
                ref={(el) => {
                  blocks.current[i] = el;
                }}
                data-step={i}
                className="lg:flex lg:min-h-[70svh] lg:items-center"
              >
                <div data-reveal>
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden lg:hidden">
                    <Image src={s.image.src} alt={s.image.alt} fill sizes="100vw" className="object-cover" />
                  </div>
                  <h3
                    className={`text-head uppercase leading-[0.9] transition-colors duration-500 ${
                      i === active ? "lg:text-sun-300" : "lg:text-white"
                    } text-white`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-[40ch] text-lead leading-[1.35] text-ink-100">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="sticky top-18 h-[calc(100svh-4.5rem)] overflow-hidden">
            {steps.map((s, i) => (
              <Image
                key={s.image.src}
                src={s.image.src}
                alt={i === active ? s.image.alt : ""}
                fill
                sizes="50vw"
                className={`object-cover transition-opacity duration-[1600ms] ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
