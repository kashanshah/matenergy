import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import {
  AboutSection,
  MethodologySection,
  PartnersSection,
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
      <PageHero crumbs={[{ name: "About", path: "/about/" }]} title="About MAT Energy" intro={intro} />
      <AboutSection link={false} />
      <section className="container-x grid gap-12 pb-20 sm:pb-24 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <StatsStrip />
        <YouTubeVideo id={companyVideo.youtubeId} title={companyVideo.title} />
      </section>
      <TestimonialsSection />
      <WhyUsSection />
      <MethodologySection />
      <PartnersSection />
      <CtaBand />
    </>
  );
}
