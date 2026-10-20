import type { Metadata } from "next";
import { Check } from "lucide-react";
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
        crumbs={[{ name: "Solar Systems", path: "/solar-systems/" }]}
        title="On-grid, off-grid and hybrid solar systems"
        intro="We specialise in all three. Here's how each one works, and what it's best at."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="overflow-x-auto rounded-lg border border-ink-200">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-ink-50 text-ink-900">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">
                  <span className="sr-only">Feature</span>
                </th>
                {systems.map((s) => (
                  <th key={s.id} scope="col" className="px-5 py-4 font-display font-bold">
                    <a href={`#${s.id}`} className="hover:text-brand-700">
                      {s.name.replace(" solar system", "")}
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className="px-5 py-4 font-medium text-ink-700">
                    {r.label}
                  </th>
                  {r.values.map((v, i) => (
                    <td key={i} className="px-5 py-4 text-ink-600">
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
        <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-ink-100 py-16 sm:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="kicker">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{s.name}</h2>
              <p className="mt-5 text-lg leading-8 text-ink-700">{s.description}</p>
            </div>
            <div>
              <Photo name={s.id} className="mb-8 aspect-[4/3]" sizes="(min-width: 1024px) 600px, 100vw" />
              <h3 className="text-sm font-semibold text-ink-900">Benefits</h3>
              <ul className="mt-4 space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3 leading-7 text-ink-700">
                    <Check className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
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
