import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import Image from "next/image";
import { BatteryCharging, Cpu, PanelsTopLeft } from "lucide-react";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { partnerCategories, partners } from "@/lib/partners";

export const metadata: Metadata = pageMeta({
  title: "Our Partners | Tier-1 Solar Panel, Inverter & Battery Brands",
  description:
    "Mat Energy installs tier-1 solar equipment from Jinko Solar, LONGi, Trinasolar, Huawei, Sungrow, Growatt, GoodWe, Solis, Inverex, BYD, Pylontech, Sunwoda and Narada in Karachi.",
  path: "/partners/",
});

const categoryMeta = {
  "Solar Panels": {
    icon: PanelsTopLeft,
    text: "High-efficiency mono PERC and N-type modules with long performance warranties.",
  },
  Inverters: {
    icon: Cpu,
    text: "On-grid, hybrid and off-grid inverters with smart monitoring and grid compliance.",
  },
  "Batteries & Storage": {
    icon: BatteryCharging,
    text: "Lithium (LiFePO4) storage for backup, self-consumption and energy independence.",
  },
} as const;

export default function PartnersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Partners", path: "/partners/" }]}
        eyebrow="Our partners"
        title="Built with the world's leading solar brands"
        intro="We only install equipment from proven, bankable manufacturers, so your system performs, and stays under warranty, for decades."
      />
      <section className="container-x space-y-16 py-16 sm:py-24">
        {partnerCategories.map((cat) => {
          const meta = categoryMeta[cat];
          return (
            <div key={cat}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
                  <meta.icon className="size-7 text-brand-500" aria-hidden /> {cat}
                </h2>
                <p className="max-w-md text-ink-500">{meta.text}</p>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {partners
                  .filter((p) => p.category === cat)
                  .map((p) => (
                    <li
                      key={p.name}
                      className="flex aspect-[4/3] flex-col items-center justify-center rounded-3xl bg-white p-5 text-center ring-1 ring-ink-100 transition hover:shadow-lg hover:shadow-brand-900/5 hover:ring-brand-200"
                    >
                      {p.logo ? (
                        <Image src={p.logo} alt={`${p.name} logo`} width={160} height={60} className="h-12 w-auto object-contain" />
                      ) : (
                        <span className="font-display text-xl font-extrabold text-ink-800">{p.name}</span>
                      )}
                      <span className="mt-2 text-xs text-ink-400">{p.tagline}</span>
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </section>
      <CtaBand
        title="Not sure which brand is right for you?"
        text="We'll recommend the best panel, inverter and battery combination for your budget and goals."
      />
    </>
  );
}
