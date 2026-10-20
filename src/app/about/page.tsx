import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { Eye, Leaf, Target } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { HomeSolarIllustration } from "@/components/illustrations";
import { PartnerStrip, ProcessSection, WhyUsSection } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About Mat Energy | Solar Company in Karachi",
  description:
    "Mat Energy is a Karachi-based solar energy company in North Nazimabad, delivering residential, commercial and industrial solar systems with tier-1 equipment and after-sales support.",
  path: "/about/",
  absoluteTitle: true,
});

const values = [
  {
    icon: Target,
    title: "Our mission",
    text: "To make clean, affordable and reliable solar power accessible to every home and business in Karachi.",
  },
  {
    icon: Eye,
    title: "Our vision",
    text: "A Karachi where rooftops generate the city's power, bills are predictable and load-shedding no longer stops life.",
  },
  {
    icon: Leaf,
    title: "Our promise",
    text: "Honest advice, tier-1 equipment, safe engineering and support that continues long after installation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about/" }]}
        eyebrow="About us"
        title={
          <>
            Adding green energy to <span className="text-brand-600">Karachi&apos;s</span> life.
          </>
        }
        intro={`${site.name} is a Karachi solar energy company helping homeowners, businesses and industries take control of their electricity costs with professionally engineered solar systems.`}
      />
      <section className="container-x grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Who we are" title="A local team with a long-term view" />
          <div className="mt-6 space-y-5 text-lg leading-8 text-ink-600">
            <p>
              From our office in North Nazimabad, we design and install on-grid, hybrid and off-grid solar systems
              across Karachi, from family homes to factories, warehouses and institutions.
            </p>
            <p>
              We believe going solar should be simple and transparent. That means sizing systems from real data,
              recommending only tier-1 equipment from partners such as Jinko, LONGi, Huawei, Sungrow and BYD, and
              explaining costs, savings and net-metering rules clearly before you decide.
            </p>
            <p>
              Our services also cover energy audits, net metering with K-Electric and after-sales maintenance, so
              your system keeps delivering for its entire 25+ year life.
            </p>
          </div>
        </div>
        <HomeSolarIllustration className="w-full rounded-4xl ring-1 ring-ink-100" />
      </section>
      <section className="container-x pb-16 sm:pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-4xl bg-brand-50 p-8 ring-1 ring-brand-100">
              <v.icon className="size-8 text-brand-600" aria-hidden />
              <h2 className="mt-5 text-xl font-bold">{v.title}</h2>
              <p className="mt-3 leading-7 text-ink-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <PartnerStrip />
      <WhyUsSection />
      <ProcessSection />
      <CtaBand />
    </>
  );
}
