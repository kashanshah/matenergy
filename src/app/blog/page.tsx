import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { PostCard } from "@/components/post-card";
import { formatPostDate, posts } from "@/lib/posts";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Solar Guides for Karachi | Sizing, Batteries & Maintenance",
  description:
    "Practical solar guides for Karachi homes and businesses: sizing a system from your bill, on-grid vs hybrid, batteries for load-shedding, elevated structures and maintenance.",
  path: "/blog/",
});

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Blog", path: "/blog/" }]}
        title="Solar guides for Karachi"
        intro="Plain answers to the questions we hear most, from sizing a system to keeping it running."
      />
      <section className="container-x py-24 sm:py-32">
        <article className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8" data-reveal>
          <Link href={`/blog/${featured.slug}/`} className="group relative block aspect-[16/9] overflow-hidden bg-surface lg:col-span-7">
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              fill
              priority
              quality={85}
              sizes="(min-width: 1024px) 55vw, 92vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </Link>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="text-lead uppercase leading-none">
              <Link href={`/blog/${featured.slug}/`} className="transition hover:text-brand-700">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-5">{featured.description}</p>
            <p className="mt-4 text-small text-ink-700">
              <time dateTime={featured.date}>{formatPostDate(featured.date)}</time> · {featured.readingMinutes} min read
            </p>
          </div>
        </article>
        <div className="mt-24 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} headingLevel="h2" />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
