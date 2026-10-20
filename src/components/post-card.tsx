import Image from "next/image";
import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/posts";

/** An article teaser: 16:9 thumbnail, title and summary, all one link. */
export function PostCard({ post, headingLevel = "h3", priority = false }: { post: Post; headingLevel?: "h2" | "h3"; priority?: boolean }) {
  const Heading = headingLevel;
  return (
    <article data-reveal>
      <Link href={`/blog/${post.slug}/`} className="group block">
        <span className="relative block aspect-[16/9] overflow-hidden bg-surface">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            priority={priority}
            quality={85}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </span>
        <Heading className="mt-5 text-lead uppercase leading-none transition group-hover:text-brand-700">{post.title}</Heading>
      </Link>
      <p className="mt-3 text-ink-700">{post.description}</p>
      <p className="mt-3 text-small text-ink-700">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readingMinutes} min read
      </p>
    </article>
  );
}
