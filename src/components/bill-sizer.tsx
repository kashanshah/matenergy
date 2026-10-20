"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { estimate, pkr, PANEL_WATTS } from "@/lib/solar";
import type { Project } from "@/lib/projects";

const TARIFF = 60;
const COVERAGE = 90;
const MIN = 5_000;
const MAX = 600_000;

/** Type a monthly bill, read the system it buys, and see the closest system MAT Energy has actually built. */
export function BillSizer({ projects }: { projects: Pick<Project, "slug" | "title" | "size" | "type" | "location" | "photos">[] }) {
  const id = useId();
  const [bill, setBill] = useState(40_000);
  const r = useMemo(() => estimate(bill, TARIFF, COVERAGE), [bill]);
  const closest = useMemo(
    () => projects.reduce((a, b) => (Math.abs(b.size - r.systemKw) < Math.abs(a.size - r.systemKw) ? b : a)),
    [projects, r.systemKw],
  );

  return (
    <section className="bg-brand-900 text-white" aria-labelledby={`${id}-title`}>
      <div className="container-x grid gap-14 py-24 sm:py-32 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div data-reveal>
          <h2 id={`${id}-title`} className="title-head text-white">
            What your bill buys
          </h2>
          <p className="mt-6 max-w-[40ch] text-lead leading-[1.35]">
            Type your monthly K-Electric bill and see roughly what system it pays for, and the closest one we have
            already built.
          </p>
          <label htmlFor={`${id}-bill`} className="mt-12 block font-semibold">
            Monthly electricity bill
          </label>
          <div className="mt-3 flex items-center bg-white text-ink-900">
            <span className="pl-4 font-semibold text-ink-600">PKR</span>
            <input
              id={`${id}-bill`}
              type="number"
              inputMode="numeric"
              min={MIN}
              max={MAX}
              step={1000}
              value={bill}
              onChange={(e) => setBill(Math.min(MAX, Math.max(0, Number(e.target.value) || 0)))}
              className="w-full bg-transparent px-3 py-4 font-display text-lead font-bold tabular-nums outline-none"
            />
          </div>
          <input
            type="range"
            aria-label="Adjust monthly bill"
            min={MIN}
            max={MAX}
            step={1000}
            value={Math.max(MIN, bill)}
            onChange={(e) => setBill(Number(e.target.value))}
            className="mt-6 h-11 w-full cursor-pointer accent-sun-500"
          />
          <p className="mt-4 text-small text-brand-100">
            Estimate at PKR {TARIFF} a unit, covering {COVERAGE}% of your use. A free survey confirms it.
          </p>
        </div>

        <div aria-live="polite">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10" data-reveal>
            <div className="col-span-2">
              <dt className="text-lead text-brand-100">System size</dt>
              <dd className="font-display text-display font-bold uppercase leading-[0.85] tabular-nums">
                {r.systemKw ? `${r.systemKw} kW` : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-brand-100">Panels</dt>
              <dd className="mt-1 font-display text-lead font-bold tabular-nums">
                {r.panels} × {PANEL_WATTS} W
              </dd>
            </div>
            <div>
              <dt className="text-brand-100">Roof space</dt>
              <dd className="mt-1 font-display text-lead font-bold tabular-nums">
                {Math.round(r.roofSqft).toLocaleString("en-PK")} sq ft
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="text-brand-100">Saving on your bill</dt>
              <dd className="mt-1 font-display text-lead font-bold text-sun-300 tabular-nums">
                about {pkr(r.monthlySavings)} a month
              </dd>
            </div>
          </dl>

          <Link
            href={`/projects/#${closest.slug}`}
            className="group mt-14 grid grid-cols-[8rem_1fr] items-center gap-5 bg-brand-950 p-4 transition hover:bg-brand-800 sm:grid-cols-[11rem_1fr] sm:gap-7"
          >
            <span className="relative block aspect-[4/3] overflow-hidden">
              <Image
                src={closest.photos[0].src}
                alt={closest.photos[0].alt}
                fill
                sizes="176px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </span>
            <span>
              <span className="block">
                We built one like it: <strong className="font-semibold">{closest.size} kW {closest.type.toLowerCase()}, {closest.location}</strong>
              </span>
              <span className="mt-2 inline-block font-semibold text-brand-200 underline decoration-2 underline-offset-4">
                See the project
              </span>
            </span>
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/get-a-quote/"
              className="inline-flex min-h-12 items-center bg-white px-6 font-semibold text-ink-900 transition hover:bg-brand-50 active:scale-[0.98]"
            >
              Book a free survey
            </Link>
            <Link href="/solar-calculator/" className="font-semibold text-white underline decoration-2 underline-offset-[6px] hover:text-brand-200">
              Open the full calculator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
