export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: "Solar" | "Energy" | "Renewable";
  date: string;
  readingMinutes: number;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "on-grid-vs-hybrid-vs-off-grid-solar-karachi",
    title: "On-Grid vs Hybrid vs Off-Grid Solar: Which Is Right for Your Karachi Home?",
    description:
      "A plain-English comparison of on-grid, hybrid and off-grid solar systems for Karachi homes, covering cost, savings, load-shedding backup and net metering.",
    category: "Solar",
    date: "2026-09-15",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "The first decision when going solar in Karachi isn't which panel to buy. It's which type of system fits your home. The three options behave very differently during load-shedding and deliver very different returns.",
      },
      { type: "h2", text: "On-grid (grid-tied) solar" },
      {
        type: "p",
        text: "An on-grid system connects your panels to K-Electric's grid through a grid-tied inverter. During the day your home uses solar first, and with net metering any surplus is exported.",
      },
      {
        type: "ul",
        items: [
          "Lowest cost per kW because there are no batteries",
          "Best financial return when your daytime usage is high",
          "Shuts down during load-shedding for line-worker safety",
        ],
      },
      { type: "h2", text: "Hybrid solar with batteries" },
      {
        type: "p",
        text: "A hybrid system adds lithium batteries and a hybrid inverter. It saves money like an on-grid system and keeps essentials running when the grid goes down.",
      },
      {
        type: "ul",
        items: [
          "Automatic backup during load-shedding",
          "Store daytime solar for evening use",
          "Higher upfront cost, but batteries can be added later",
        ],
      },
      { type: "h2", text: "Off-grid solar" },
      {
        type: "p",
        text: "Off-grid systems run entirely on solar and batteries with no utility connection. They suit farmhouses or sites without reliable power, but need larger battery banks and careful sizing.",
      },
      {
        type: "callout",
        text: "Rule of thumb: if outages rarely affect you, choose on-grid for the fastest payback. If load-shedding disrupts your day, choose hybrid.",
      },
      { type: "h2", text: "Not sure? Start with the numbers" },
      {
        type: "p",
        text: "Your bills, roof and outage pattern determine the right answer. Our free site survey turns those into a clear recommendation and an itemised quotation.",
      },
    ],
  },
  {
    slug: "net-metering-karachi-guide",
    title: "Net Metering in Karachi: A Step-by-Step Guide for K-Electric Consumers",
    description:
      "How solar net metering works with K-Electric in Karachi: eligibility, documents, the NEPRA licence, inspections and how long it takes.",
    category: "Energy",
    date: "2026-08-28",
    readingMinutes: 7,
    body: [
      {
        type: "p",
        text: "Net metering allows a solar-powered home or business to export surplus electricity to the grid and receive credit for it. In Karachi the process runs through K-Electric, with a generation licence issued by NEPRA.",
      },
      { type: "h2", text: "Who is eligible?" },
      {
        type: "ul",
        items: [
          "K-Electric consumers with a three-phase connection (single-phase rules vary)",
          "Solar systems with approved grid-tied or hybrid inverters",
          "System size within the limits allowed for your sanctioned load",
        ],
      },
      { type: "h2", text: "The process" },
      {
        type: "ul",
        items: [
          "Install a compliant on-grid or hybrid solar system",
          "Submit the application with CNIC, latest bill, single-line diagram and equipment datasheets",
          "K-Electric reviews the file and carries out a site inspection",
          "NEPRA issues the generation licence",
          "A bi-directional (green) meter is installed and the agreement is signed",
        ],
      },
      {
        type: "callout",
        text: "Net-metering rules and buy-back rates are set by the government and NEPRA and have been revised in recent years. Always check the current policy before sizing a system for export.",
      },
      { type: "h2", text: "How to avoid delays" },
      {
        type: "p",
        text: "Most delays come from incomplete documents or non-compliant installations. Mat Energy prepares the full file, ensures the installation meets requirements and follows up with K-Electric until your meter is installed.",
      },
    ],
  },
  {
    slug: "industrial-solar-roi-karachi-factories",
    title: "Industrial Solar in Karachi: How Factories Calculate ROI and Payback",
    description:
      "How Karachi factories evaluate rooftop solar: load profiles, tariffs, generator savings, payback period and what to look for in an EPC proposal.",
    category: "Renewable",
    date: "2026-07-30",
    readingMinutes: 8,
    body: [
      {
        type: "p",
        text: "For factories in SITE, Korangi, Landhi and North Karachi, energy is often the second-largest cost after raw materials. Solar is now a mainstream way to control it, but a good investment decision starts with good data.",
      },
      { type: "h2", text: "1. Understand your load profile" },
      {
        type: "p",
        text: "Solar produces during the day. Factories running day shifts can consume almost all of their solar output directly, which delivers the strongest returns. A load-profile study shows how much of your demand solar can cover.",
      },
      { type: "h2", text: "2. Count every unit you avoid" },
      {
        type: "ul",
        items: [
          "Grid units displaced at your commercial or industrial tariff",
          "Generator fuel saved during daytime operation",
          "Exported units credited under net metering, where applicable",
        ],
      },
      { type: "h2", text: "3. Payback and lifetime value" },
      {
        type: "p",
        text: "Payback period is the system cost divided by annual savings. Well-designed C&I plants in Karachi commonly pay back in roughly 2–4 years and keep generating for 25 years or more.",
      },
      { type: "h2", text: "4. What a good EPC proposal includes" },
      {
        type: "ul",
        items: [
          "Generation simulation for your exact roof and location",
          "Structural assessment and mounting design",
          "Named tier-1 equipment with datasheets and warranties",
          "Protection, earthing and generator-sync design",
          "O&M plan with cleaning schedule and monitoring",
        ],
      },
      {
        type: "callout",
        text: "Mat Energy provides a free preliminary feasibility for Karachi factories. Share your last 12 months of bills and we'll show you the numbers.",
      },
    ],
  },
  {
    slug: "solar-panel-cleaning-maintenance-karachi",
    title: "Solar Panel Cleaning & Maintenance in Karachi: Keep Your Output High",
    description:
      "Why Karachi's dust and sea air reduce solar output, how often to clean panels, and a simple maintenance checklist for homes and factories.",
    category: "Solar",
    date: "2026-06-18",
    readingMinutes: 5,
    body: [
      {
        type: "p",
        text: "A solar system has no moving parts, but that doesn't mean zero maintenance. In Karachi, dust, smog and salty coastal air settle on panels and can noticeably reduce generation within weeks.",
      },
      { type: "h2", text: "How often should you clean?" },
      {
        type: "p",
        text: "Every 2–4 weeks suits most Karachi rooftops, more often near construction sites, main roads or industrial areas. Watch your monitoring app: a steady drop on clear days usually means it's time to clean.",
      },
      { type: "h2", text: "Cleaning do's and don'ts" },
      {
        type: "ul",
        items: [
          "Clean early morning or evening when panels are cool",
          "Use soft brushes and clean water; avoid harsh detergents",
          "Never use high-pressure jets or walk on panels",
          "Check for bird droppings and shading from new obstructions",
        ],
      },
      { type: "h2", text: "Annual health check" },
      {
        type: "ul",
        items: [
          "Tighten DC and AC terminations",
          "Inspect earthing and lightning protection",
          "Check structure for rust and loose fasteners",
          "Review inverter logs and update firmware",
        ],
      },
      {
        type: "callout",
        text: "Mat Energy offers one-off cleaning and annual maintenance plans for any solar system in Karachi, whoever installed it.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
