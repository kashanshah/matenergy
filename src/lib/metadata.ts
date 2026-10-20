import type { Metadata } from "next";

export const ogImage = {
  url: "/images/og-mat-energy.png",
  width: 1200,
  height: 630,
  alt: "MAT Energy – Solar panel installation in Karachi for homes & businesses",
};

/** Page metadata with canonical URL and Open Graph / Twitter tags kept in sync. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  /** Skip the "| MAT Energy" title suffix (for titles that already contain the brand). */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  /** Share image for this page; defaults to the site-wide one. */
  image?: { url: string; alt: string };
}): Metadata {
  const image = opts.image ? { ...opts.image, width: 1200, height: 675 } : ogImage;
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.type ?? "website",
      locale: "en_PK",
      siteName: "MAT Energy",
      title: opts.title,
      description: opts.description,
      url: opts.path,
      images: [image],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image.url],
    },
  };
}
