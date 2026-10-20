import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { Photo } from "@/components/sections";
import { systems } from "@/lib/systems";

export const metadata: Metadata = pageMeta({
  title: "On-Grid vs Off-Grid vs Hybrid Solar Systems in Karachi",
  description:
    "How on-grid, off-grid and hybrid solar systems work, and which one suits your home or business in Karachi. Explained by MAT Energy.",
  path: "/solar-systems/",
});

const rows: { label: string; values: [string, string, string] }[] = [
  { label: "Connected to the grid", values: ["Yes", "No", "Yes"] },
  { label: "Batteries", values: ["No", "Yes", "Yes"] },
  { label: "Power during load-shedding", values: ["No", "Yes", "Yes"] },
  { label: "Net metering", values: ["Yes", "No", "Yes"] },
];

export default function SolarSystemsPage() {
  return (
    <>
      <PageHero
        photo={{ src: "/images/projects/gadap-farmhouse-30kw-hybrid-inverters-batteries.jpg", alt: "Inverters and battery storage at a farmhouse in Gadap Town" }}
        crumbs={[{ name: "Solar Systems", path: "/solar-systems/" }]}
        title="On-grid, off-grid and hybrid solar systems"
        intro="We specialise in all three. Here's how each one works, and what it's best at."
      />

      <section className="container-x py-20 sm:py-28" data-reveal>
        <div className="overflow-x-auto bg-white">
          <table className="w-full min-w-[36rem] text-left">
            <thead className="bg-brand-900 text-white">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">
                  <span className="sr-only">Feature</span>
                </th>
                {systems.map((s) => (
                  <th key={s.id} scope="col" className="px-5 py-4 font-semibold">
                    <a href={`#${s.id}`} className="text-white hover:text-brand-200">
                      {s.name.replace(" solar system", "")}
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-200">{/* real table rows keep their lines: taste-skill-ignore */}
              {rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className="px-5 py-4 font-medium">
                    {r.label}
                  </th>
                  {r.values.map((v, i) => (
                    <td key={i} className="px-5 py-4">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {systems.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-28 py-24 sm:py-36 ${i % 2 ? "bg-surface" : ""}`}>
          <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`} data-reveal>
              <h2 className="title-head">{s.name.replace(" solar system", "")}</h2>
              <p className="mt-8 max-w-[56ch]">{s.description}</p>
              <h3 className="mt-10 font-sans text-body font-semibold tracking-normal">What it gives you</h3>
              <ul className="mt-4 space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden className="mt-[0.6em] size-2 shrink-0 bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <Photo
              name={s.id}
              className={`aspect-[4/3] lg:col-span-6 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </section>
      ))}

      <CtaBand
        title="Not sure which system you need?"
        text="Tell us about your bill and your load-shedding, and we'll recommend the right one."
      />
    </>
  );
}
