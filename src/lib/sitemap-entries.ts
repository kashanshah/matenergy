import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { posts } from "@/lib/posts";

export type SitemapEntry = {
  url: string;
  lastModified?: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

/** Every indexable URL on the site. Used by /sitemap.xml and the IndexNow cron. */
export function sitemapEntries(): SitemapEntry[] {
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solar-installation-karachi/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/get-a-quote/", priority: 0.8, changeFrequency: "yearly" },
    { path: "/solar-calculator/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/partners/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
    { path: "/faqs/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog/", priority: 0.6, changeFrequency: "weekly" },
    { path: "/privacy-policy/", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...pages.map((p) => ({ url: absoluteUrl(p.path), priority: p.priority, changeFrequency: p.changeFrequency })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}/`),
      priority: s.segment === "both" ? 0.8 : 0.95,
      changeFrequency: "monthly" as const,
    })),
    ...areas.map((a) => ({
      url: absoluteUrl(`/solar-installation-karachi/${a.slug}/`),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}/`),
      lastModified: p.date,
      priority: 0.5,
      changeFrequency: "yearly" as const,
    })),
  ];
}
