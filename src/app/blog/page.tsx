import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { PostCard } from "@/components/sections";
import { posts } from "@/lib/posts";

export const metadata: Metadata = pageMeta({
  title: "Solar Blog | Guides on Solar, Energy & Renewables in Karachi",
  description:
    "Practical guides on solar panels, net metering, batteries, industrial solar ROI and maintenance for homes and businesses in Karachi.",
  path: "/blog/",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        crumbs={[{ name: "Blog", path: "/blog/" }]}
        eyebrow="Solar guides"
        title="Solar, energy & renewables, explained"
        intro="Clear, practical advice to help Karachi homeowners and businesses make better energy decisions."
      />
      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <PostCard key={p.slug} {...p} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
