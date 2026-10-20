import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

/** True when a file exists under /public. Lets photo slots disappear until the image is added. */
export function hasPublicFile(src: string) {
  return existsSync(path.join(process.cwd(), "public", src));
}

// Photo slots. The WordPress photos (`npm run fetch-media`) were never pulled before the domain
// moved, so these use real installation photos from instagram.com/mat.energy (see lib/projects.ts).
export const photos = {
  about: { src: "/images/projects/karachi-10kw-rooftop-panels.jpg", alt: "Solar panels installed by MAT Energy on an elevated rooftop structure in Karachi" },
  contact: { src: "/images/site/contact.jpg", alt: "MAT Energy team on site" },
  audit: { src: "/images/projects/gulistan-e-johar-25kw-distribution-board.jpg", alt: "Distribution board with breakers, surge protection and an energy meter" },
  afterSales: { src: "/images/projects/gulshan-e-iqbal-20kw-control-panel.jpg", alt: "Solar control panel with indicator lights, breakers and a meter" },
  "on-grid": { src: "/images/projects/karachi-10kw-elevated-rooftop.jpg", alt: "Elevated on-grid solar array on a Karachi rooftop" },
  "off-grid": { src: "/images/projects/gadap-farmhouse-30kw-hybrid-inverters-batteries.jpg", alt: "Inverters and lithium battery storage at a farmhouse in Gadap Town" },
  hybrid: { src: "/images/projects/dha-phase-6-30kw-hybrid-inverters-batteries.jpg", alt: "Solis hybrid inverters with Pylontech lithium batteries in DHA Phase 6" },
} as const;

export type PhotoKey = keyof typeof photos;
