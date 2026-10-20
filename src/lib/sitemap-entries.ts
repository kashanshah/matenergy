import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";

export type SitemapEntry = {
  url: string;
  lastModified?: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

/** Every indexable URL on the site. Used by /sitemap.xml and the IndexNow cron. */
export function sitemapEntries(): SitemapEntry[] {
  const pages: (Omit<SitemapEntry, "url"> & { path: string })[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solar-systems/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/get-a-quote/", priority: 0.8, changeFrequency: "yearly" },
    { path: "/solar-calculator/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
    { path: "/partners/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faqs/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy/", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...pages.map((p) => ({ url: absoluteUrl(p.path), priority: p.priority, changeFrequency: p.changeFrequency })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}/`),
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
  ];
}
