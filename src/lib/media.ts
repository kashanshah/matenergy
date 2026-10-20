import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

/** True when a file exists under /public. Lets photo slots disappear until the image is added. */
export function hasPublicFile(src: string) {
  return existsSync(path.join(process.cwd(), "public", src));
}

// Photos from the live WordPress site, downloaded by `npm run fetch-media`.
export const photos = {
  about: { src: "/images/site/about.jpg", alt: "MAT Energy solar installation" },
  contact: { src: "/images/site/contact.jpg", alt: "MAT Energy team on site" },
  audit: { src: "/images/site/home-energy-audit.jpg", alt: "Home energy audit by MAT Energy" },
  afterSales: { src: "/images/site/after-sales.png", alt: "MAT Energy after-sales service" },
  "on-grid": { src: "/images/site/on-grid.png", alt: "On-grid solar system" },
  "off-grid": { src: "/images/site/off-grid.jpg", alt: "Off-grid solar system" },
  hybrid: { src: "/images/site/hybrid.jpg", alt: "Hybrid solar system" },
} as const;

export type PhotoKey = keyof typeof photos;
