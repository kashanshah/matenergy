import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd, PageHero, TextLink } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { PostCard } from "@/components/post-card";
import { formatPostDate, getPost, posts } from "@/lib/posts";
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
    image: { url: post.image.src, alt: post.image.alt },
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
      <JsonLd data={articleJsonLd({ title: post.title, description: post.description, path, date: post.date, image: post.image.src })} />
      <PageHero
        crumbs={[
          { name: "Blog", path: "/blog/" },
          { name: post.title, path },
        ]}
        title={post.title}
        longTitle
      >
        <p className="mt-8 text-ink-700">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readingMinutes} min read
        </p>
      </PageHero>
      <div className="container-x pt-16 sm:pt-24">
        <div className="relative aspect-[16/9] max-w-5xl overflow-hidden bg-surface" data-reveal>
          <Image src={post.image.src} alt={post.image.alt} fill priority quality={85} sizes="(min-width: 1100px) 1024px, 92vw" className="object-cover" />
        </div>
      </div>
      <article className="container-x py-16 sm:py-24">
        <div className="prose-mat max-w-[68ch]">
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
              case "tip":
                return (
                  <p key={i} className="!mt-10 bg-white p-6 font-medium">
                    {b.text}
                  </p>
                );
              case "link":
                return (
                  <p key={i} className="!mt-8">
                    <TextLink href={b.href}>{b.text}</TextLink>
                  </p>
                );
            }
          })}
        </div>
      </article>
      <section className="bg-surface py-24 sm:py-32">
        <div className="container-x">
          <h2 className="title-head" data-reveal>
            More guides
          </h2>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
