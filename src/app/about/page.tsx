import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import {
  AboutSection,
  MethodologySection,
  PartnersSection,
  ProjectsSection,
  StatsStrip,
  TestimonialsSection,
  WhyUsSection,
} from "@/components/sections";
import { YouTubeVideo } from "@/components/video";
import { companyVideo, intro } from "@/lib/company";

export const metadata: Metadata = pageMeta({
  title: "About MAT Energy | Solar Energy Company in Karachi",
  description:
    "MAT Energy (Pvt.) Ltd. is a Karachi solar company delivering on-grid, off-grid and hybrid systems, home energy audits and after-sales service.",
  path: "/about/",
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        photo={{ src: "/images/projects/karachi-10kw-elevated-rooftop.jpg", alt: "An elevated rooftop array with a walkway, installed by MAT Energy" }} crumbs={[{ name: "About", path: "/about/" }]} title="About MAT Energy" intro={intro} />
      <AboutSection link={false} />
      <section className="container-x grid gap-14 pb-28 sm:pb-40 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
        <StatsStrip />
        <YouTubeVideo id={companyVideo.youtubeId} title={companyVideo.title} />
      </section>
      <ProjectsSection />
      <TestimonialsSection />
      <WhyUsSection />
      <MethodologySection />
      <PartnersSection />
      <CtaBand />
    </>
  );
}
