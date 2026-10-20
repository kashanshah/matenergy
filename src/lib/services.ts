import type { SolarSystem } from "./systems";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Name used on the live site. */
  name: string;
  /** Page H1, written for search. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line description from the live site. */
  summary: string;
  body: string[];
  points: { title: string; text: string }[];
  systems: SolarSystem["id"][];
  /** Index into `testimonials`. */
  testimonial?: number;
  /** Indexes into `generalFaqs`. */
  faqs: number[];
  segment: "Residential" | "Commercial";
};

export const services: Service[] = [
  {
    slug: "residential-solar-solutions",
    name: "Residential Solar Solutions",
    title: "Residential solar solutions in Karachi",
    metaTitle: "Home Solar Panel Installation in Karachi | Residential Solar",
    metaDescription:
      "On-grid, off-grid and hybrid solar systems for homes in Karachi, designed around your bills and your load-shedding. Installed and maintained by MAT Energy.",
    summary:
      "MAT Energy is your go-to for residential solar solutions, providing both On-Grid and Off-Grid systems tailored to meet your energy needs.",
    body: [
      "No two homes use electricity the same way. We look at your bills, your roof and the appliances you need during load-shedding, then recommend an on-grid, off-grid or hybrid system to match, not a one-size package.",
      "Our team handles the design, installation and commissioning, and stays with you afterwards through our after-sales service.",
    ],
    points: [
      {
        title: "Smart solar systems",
        text: "Panels, inverters and batteries from our partner brands, matched to each other and to your home.",
      },
      {
        title: "Custom energy plans",
        text: "System size and type chosen from your actual consumption, roof space and backup needs.",
      },
      {
        title: "Lower power bills",
        text: "Daytime loads run on solar, and with net metering surplus units go back to the grid.",
      },
    ],
    systems: ["on-grid", "hybrid", "off-grid"],
    faqs: [4, 2, 0],
    segment: "Residential",
  },
  {
    slug: "commercial-solar-solutions",
    name: "Commercial Solar Solutions",
    title: "Commercial & industrial solar in Karachi",
    metaTitle: "Commercial & Industrial Solar Installation in Karachi",
    metaDescription:
      "Solar for offices, shops, warehouses and factories in Karachi. On-grid and off-grid systems with a detailed cost analysis before you commit. MAT Energy.",
    summary:
      "Power your business sustainably with MAT Energy's Commercial Solar Solutions, offering both On-Grid and Off-Grid systems for enhanced efficiency.",
    body: [
      "For offices, shops, warehouses and factories, electricity is one of the largest running costs. Every commercial proposal from MAT Energy comes with a detailed cost analysis, so you can decide on numbers: system size, expected generation, investment and savings.",
      "Our project management team runs the installation to a plan, with daily progress reports from the site engineer, so your operations keep moving while we work.",
    ],
    points: [
      {
        title: "Scalable energy systems",
        text: "Start with the load that matters most and add capacity as your business grows.",
      },
      {
        title: "Boost cost efficiency",
        text: "Cut daytime grid consumption, which is when most businesses use the most power.",
      },
      {
        title: "Business-grade solutions",
        text: "Equipment, protection and installation practices specified for continuous commercial use.",
      },
    ],
    systems: ["on-grid", "hybrid", "off-grid"],
    testimonial: 1,
    faqs: [2, 1],
    segment: "Commercial",
  },
  {
    slug: "home-energy-audits",
    name: "Home Energy Audits",
    title: "Home energy audits in Karachi",
    metaTitle: "Home Energy Audit in Karachi | Cut Your Electricity Bill",
    metaDescription:
      "Find out where your electricity goes before you go solar. MAT Energy's home energy audits give you a usage report, efficiency fixes and cost-saving advice.",
    summary:
      "Elevate your energy efficiency with MAT Energy's Home Energy Audits, ensuring your home operates at its peak performance.",
    body: [
      "Before you spend on solar, it helps to know where your units actually go. An energy audit looks at your bills and the appliances in your home to find the biggest loads and the easiest savings.",
      "The result is a system sized for the home you'll have after the quick wins, not before, which can mean a smaller, cheaper system.",
    ],
    points: [
      {
        title: "Detailed usage reports",
        text: "A clear picture of which appliances and times of day drive your bill.",
      },
      {
        title: "Efficiency optimisation",
        text: "Practical changes, from settings to replacements, that reduce consumption.",
      },
      {
        title: "Cost-saving insights",
        text: "What each change is likely to save, and how it affects the solar system you need.",
      },
    ],
    systems: ["on-grid", "hybrid"],
    faqs: [2],
    segment: "Residential",
  },
  {
    slug: "after-sales-services",
    name: "After Sales Excellence",
    title: "Solar maintenance & after-sales service in Karachi",
    metaTitle: "Solar Maintenance, Cleaning & Repair in Karachi | After-Sales",
    metaDescription:
      "Solar panel cleaning, system checks, repairs and fast support in Karachi. MAT Energy's after-sales service keeps your system performing for the long term.",
    summary:
      "MAT Energy goes beyond installation, providing dedicated After Sales Services to guarantee ongoing system performance and customer satisfaction.",
    body: [
      "Karachi's dust and humidity take a toll on solar systems. Dirty panels and loose connections quietly cut your output long before anything stops working.",
      "Our after-sales team keeps your system clean, checked and running, and our support line is open 24/7 if something goes wrong.",
    ],
    points: [
      {
        title: "Regular system checks",
        text: "Panel cleaning, connection and earthing checks, and inverter and battery health reviews.",
      },
      {
        title: "Fast customer support",
        text: "Our support line is open 24/7, so help is always a call away.",
      },
      {
        title: "Long-term reliability",
        text: "Small faults caught early, before they turn into expensive repairs or lost generation.",
      },
    ],
    systems: [],
    testimonial: 0,
    faqs: [1, 3],
    segment: "Residential",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
