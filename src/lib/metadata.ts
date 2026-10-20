import type { Metadata } from "next";

export const ogImage = {
  url: "/images/og-mat-energy.png",
  width: 1200,
  height: 630,
  alt: "Mat Energy – Solar panel installation in Karachi for homes & industry",
};

/** Page metadata with canonical URL and Open Graph / Twitter tags kept in sync. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  /** Skip the "| Mat Energy" title suffix (for titles that already contain the brand). */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.type ?? "website",
      locale: "en_PK",
      siteName: "Mat Energy",
      title: opts.title,
      description: opts.description,
      url: opts.path,
      images: [ogImage],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImage.url],
    },
  };
}
