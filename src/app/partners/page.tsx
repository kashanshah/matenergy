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
        photo={{ src: "/images/projects/dha-phase-6-30kw-hybrid-inverters-batteries.jpg", alt: "Solis inverters and Pylontech batteries in DHA Phase 6" }}
        crumbs={[{ name: "Partners", path: "/partners/" }]}
        title="Our partners"
        intro="The panel, inverter and battery brands we install."
      />
      <section className="container-x space-y-20 py-24 sm:py-36">
        {partnerCategories.map((cat) => (
          <div key={cat} data-reveal>
            <h2 className="title-head">{cat}</h2>
            <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
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
        title="Not sure which brand?"
        text="We'll recommend the panel, inverter and battery combination that fits your budget and needs."
      />
    </>
  );
}
