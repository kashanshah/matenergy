// Installations posted on instagram.com/mat.energy, with photos from those posts.
export type Project = {
  slug: string;
  title: string;
  /** System size in kW. */
  size: number;
  type: "On-grid" | "Hybrid";
  location: string;
  /** Month the project was posted, as YYYY-MM. */
  date: string;
  equipment: string[];
  photos: { src: string; alt: string }[];
  instagram: string;
};

export const projects: Project[] = [
  {
    slug: "dha-phase-6-30kw-hybrid",
    title: "30 kW hybrid system with lithium batteries",
    size: 30,
    type: "Hybrid",
    location: "DHA Phase 6",
    date: "2026-09",
    equipment: ["2 × Solis 15 kW hybrid inverters", "Pylontech lithium batteries"],
    photos: [
      {
        src: "/images/projects/dha-phase-6-30kw-hybrid-inverters-batteries.jpg",
        alt: "Solis hybrid inverters and a rack of Pylontech lithium batteries installed in DHA Phase 6",
      },
    ],
    instagram: "https://www.instagram.com/p/Dcx4HBPo8LX/",
  },
  {
    slug: "gadap-farmhouse-30kw-hybrid",
    title: "30 kW hybrid system for a farmhouse",
    size: 30,
    type: "Hybrid",
    location: "Gadap Town",
    date: "2025-09",
    equipment: ["Three hybrid inverters", "Wall-mounted lithium batteries"],
    photos: [
      {
        src: "/images/projects/gadap-farmhouse-30kw-hybrid-inverters-batteries.jpg",
        alt: "Three hybrid inverters above four lithium battery units at a farmhouse in Gadap Town",
      },
    ],
    instagram: "https://www.instagram.com/p/DOlEwssCPpb/",
  },
  {
    slug: "gulistan-e-johar-25kw-on-grid",
    title: "25 kW on-grid system",
    size: 25,
    type: "On-grid",
    location: "Gulistan-e-Johar",
    date: "2024-09",
    equipment: [
      "44 × Jinko 585 W panels",
      "Huawei 25 kW on-grid inverter",
      "Pakistan Cables, Schneider breakers, ABB SPD",
    ],
    photos: [
      {
        src: "/images/projects/gulistan-e-johar-25kw-huawei-inverter.jpg",
        alt: "Huawei 25 kW on-grid inverter with AC and DC protection boxes in Gulistan-e-Johar",
      },
      {
        src: "/images/projects/gulistan-e-johar-25kw-distribution-board.jpg",
        alt: "Wired distribution board with Schneider breakers, ABB surge protection and an energy meter",
      },
    ],
    instagram: "https://www.instagram.com/p/C_lqW0QIshU/",
  },
  {
    slug: "gulshan-e-iqbal-20kw-on-grid",
    title: "20 kW on-grid system on a 20 ft elevated structure",
    size: 20,
    type: "On-grid",
    location: "Gulshan-e-Iqbal",
    date: "2024-03",
    equipment: ["Jinko 580 W N-type panels", "Huawei 20 kW on-grid inverter", "20 ft elevated structure with walkway"],
    photos: [
      {
        src: "/images/projects/gulshan-e-iqbal-20kw-huawei-inverter.jpg",
        alt: "Huawei 20 kW on-grid inverter between its protection boxes in Gulshan-e-Iqbal",
      },
      {
        src: "/images/projects/gulshan-e-iqbal-20kw-control-panel.jpg",
        alt: "Open solar control panel with indicator lights, breakers and a meter",
      },
    ],
    instagram: "https://www.instagram.com/p/C4Q48JKIZU-/",
  },
  {
    slug: "karachi-10kw-growatt-on-grid",
    title: "10 kW on-grid system on an elevated rooftop structure",
    size: 10,
    type: "On-grid",
    location: "Karachi",
    date: "2023-12",
    equipment: ["18 × Jinko 580 W N-type panels", "Growatt 10 kW on-grid inverter"],
    photos: [
      {
        src: "/images/projects/karachi-10kw-elevated-rooftop.jpg",
        alt: "Rows of Jinko N-type panels on an elevated structure with a central walkway on a Karachi rooftop",
      },
    ],
    instagram: "https://www.instagram.com/p/C06UaYkIbPE/",
  },
  {
    slug: "karachi-10kw-on-grid",
    title: "10 kW on-grid rooftop system",
    size: 10,
    type: "On-grid",
    location: "Karachi",
    date: "2023-04",
    equipment: ["Growatt on-grid inverter", "Elevated rooftop structure"],
    photos: [
      {
        src: "/images/projects/karachi-10kw-rooftop-panels.jpg",
        alt: "Solar panels on an elevated rooftop structure overlooking Karachi",
      },
      {
        src: "/images/projects/karachi-10kw-growatt-inverter.jpg",
        alt: "Growatt on-grid inverter mounted on a wall next to its DC isolator",
      },
      {
        src: "/images/projects/karachi-10kw-panel-array.jpg",
        alt: "Sunlit solar panel array on a Karachi rooftop",
      },
    ],
    instagram: "https://www.instagram.com/p/CqqZxH3Nxud/",
  },
];

export function formatProjectDate(date: string) {
  const [y, m] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
}
