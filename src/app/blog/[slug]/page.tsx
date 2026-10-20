import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Lightbulb } from "lucide-react";
import { JsonLd, PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { PostCard } from "@/components/sections";
import { getPost, posts } from "@/lib/posts";
import { articleJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}/`;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleJsonLd({ title: post.title, description: post.description, path, date: post.date })} />
      <PageHero
        crumbs={[
          { name: "Blog", path: "/blog/" },
          { name: post.title, path },
        ]}
        eyebrow={post.category}
        title={post.title}
      >
        <p className="mt-6 flex items-center gap-4 text-sm text-ink-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </time>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden /> {post.readingMinutes} min read
          </span>
        </p>
      </PageHero>
      <article className="container-x py-14 sm:py-20">
        <div className="prose-mat mx-auto max-w-3xl text-lg">
          {post.body.map((b, i) => {
            switch (b.type) {
              case "p":
                return <p key={i}>{b.text}</p>;
              case "h2":
                return <h2 key={i}>{b.text}</h2>;
              case "ul":
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              case "callout":
                return (
                  <aside key={i} className="mt-8 flex gap-4 rounded-3xl bg-sun-50 p-6 ring-1 ring-sun-100">
                    <Lightbulb className="mt-1 size-5 shrink-0 text-sun-600" aria-hidden />
                    <p className="!mt-0 font-medium text-ink-800">{b.text}</p>
                  </aside>
                );
            }
          })}
          <p>
            Ready to explore solar for your property?{" "}
            <Link href="/get-a-quote/" className="font-semibold text-brand-700 underline underline-offset-4">
              Book a free site survey
            </Link>{" "}
            or try our{" "}
            <Link href="/solar-calculator/" className="font-semibold text-brand-700 underline underline-offset-4">
              solar savings calculator
            </Link>
            .
          </p>
        </div>
      </article>
      <section className="container-x">
        <h2 className="text-2xl font-bold">More solar guides</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {more.map((p) => (
            <PostCard key={p.slug} {...p} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
