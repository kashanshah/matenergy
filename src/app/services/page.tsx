import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand, ServiceList } from "@/components/blocks";
import { MethodologySection, SystemsSection } from "@/components/sections";
import { services } from "@/lib/services";

export const metadata: Metadata = pageMeta({
  title: "Solar Installation & Maintenance Services in Karachi",
  description:
    "Residential and commercial solar installation, home energy audits and after-sales maintenance across Karachi by MAT Energy.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        photo={{ src: "/images/projects/karachi-10kw-elevated-rooftop.jpg", alt: "An elevated rooftop array with a walkway, installed by MAT Energy" }}
        crumbs={[{ name: "Services", path: "/services/" }]}
        title="Powering you with smart solutions"
        intro="From a home energy audit to a full commercial system, and the after-sales care that keeps it running."
      />
      <section className="container-x py-24 sm:py-36">
        <ServiceList items={services} headingLevel="h2" />
      </section>
      <SystemsSection />
      <MethodologySection />
      <CtaBand />
    </>
  );
}
