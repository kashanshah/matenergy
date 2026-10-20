import type { Metadata } from "next";
import { BillSizer } from "@/components/bill-sizer";
import { SystemScene } from "@/components/system-scene";
import { HomeFaq, HomeHero, ProcessDiagonal, ProjectScatter, ServiceBand, TestimonialPhoto, VisitCard } from "@/components/home";
import { PartnersSection } from "@/components/sections";
import { projects } from "@/lib/projects";
import { systems } from "@/lib/systems";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Solar Panel Installation in Karachi | Homes & Businesses | MAT Energy",
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const system = (id: string) => systems.find((s) => s.id === id)!;

const sceneSteps = [
  {
    title: "On-grid cuts the bill",
    text: system("on-grid").summary,
    image: { src: "/images/projects/karachi-10kw-elevated-rooftop.jpg", alt: "An on-grid array raised on a steel frame over a Karachi roof" },
  },
  {
    title: "Hybrid rides out load-shedding",
    text: system("hybrid").summary,
    image: {
      src: "/images/projects/dha-phase-6-30kw-hybrid-inverters-batteries.jpg",
      alt: "Hybrid inverters and lithium batteries in DHA Phase 6",
    },
  },
  {
    title: "Off-grid needs no grid",
    text: system("off-grid").summary,
    image: {
      src: "/images/projects/gadap-farmhouse-30kw-hybrid-inverters-batteries.jpg",
      alt: "Inverters and battery storage at a farmhouse in Gadap Town",
    },
  },
  {
    title: "Raised frames keep the roof",
    text: "We lift the panels on steel, up to 20 ft with a walkway, so the roof below stays usable.",
    image: { src: "/videos/karachi-rooftop-solar-poster.jpg", alt: "Panels on an elevated frame above a Karachi rooftop" },
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BillSizer
        projects={projects.map(({ slug, title, size, type, location, photos }) => ({ slug, title, size, type, location, photos }))}
      />
      <ServiceBand />
      <ProjectScatter />
      <div className="mt-28 sm:mt-44">
        <SystemScene heading="Three ways to go solar" steps={sceneSteps} />
      </div>
      <ProcessDiagonal />
      <TestimonialPhoto />
      <PartnersSection />
      <HomeFaq />
      <VisitCard />
    </>
  );
}
