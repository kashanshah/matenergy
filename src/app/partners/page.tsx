import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { PartnerLogo } from "@/components/sections";
import { partnerCategories, partners } from "@/lib/partners";

export const metadata: Metadata = pageMeta({
  title: "Our Partners | Solar Panel, Inverter & Battery Brands",
  description:
    "MAT Energy works with Jinko Solar, LONGi, Trinasolar, Huawei, Sungrow, Growatt, GoodWe, Solis, Inverex, BYD, Pylontech, Sunwoda and Narada.",
  path: "/partners/",
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Partners", path: "/partners/" }]}
        title="Our partners"
        intro="Collaborating with industry leaders to drive innovation and success together. These are the panel, inverter and battery brands we install."
      />
      <section className="container-x space-y-14 py-16 sm:py-20">
        {partnerCategories.map((cat) => (
          <div key={cat}>
            <h2 className="text-2xl font-bold">{cat}</h2>
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-3 lg:grid-cols-6">
              {partners
                .filter((p) => p.category === cat)
                .map((p) => (
                  <PartnerLogo key={p.name} partner={p} />
                ))}
            </div>
          </div>
        ))}
      </section>
      <CtaBand
        title="Not sure which brand is right for you?"
        text="We'll recommend the panel, inverter and battery combination that fits your budget and needs."
      />
    </>
  );
}
