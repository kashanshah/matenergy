import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand, ServiceCard } from "@/components/blocks";
import { ProcessSection } from "@/components/sections";
import { services } from "@/lib/services";

export const metadata: Metadata = pageMeta({
  title: "Solar Services in Karachi | Installation, Net Metering & Maintenance",
  description:
    "Residential and industrial solar installation, net metering, hybrid battery backup, energy audits and solar maintenance across Karachi by Mat Energy.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services/" }]}
        eyebrow="Our services"
        title="Complete solar services for Karachi homes & industry"
        intro="Design, installation, net metering and lifetime support, delivered by one accountable team."
      />
      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <ProcessSection />
      <CtaBand />
    </>
  );
}
