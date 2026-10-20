// "What we specialise in" from the live site.

export type SolarSystem = {
  id: "on-grid" | "off-grid" | "hybrid";
  name: string;
  summary: string;
  description: string;
  benefits: string[];
};

export const systems: SolarSystem[] = [
  {
    id: "on-grid",
    name: "On-grid solar system",
    summary: "Connected to the main power grid. The most cost-effective way to cut your bill.",
    description:
      "Connected to the main power grid, an on-grid solar system comprises solar panels, an inverter, the utility grid and a meter, and integrates with your home or office electrical system. Like conventional electricity, the solar energy is regulated through your main power panel. On-grid systems are more cost-effective and convenient than the alternatives.",
    benefits: [
      "Links panels, inverter, utility grid and meter into one system",
      "Cost-effective, eco-friendly and durable, reducing your carbon footprint",
      "Lower bills compared to traditional electricity",
    ],
  },
  {
    id: "off-grid",
    name: "Off-grid solar system",
    summary: "Runs on batteries, independent of the grid. Power through every outage.",
    description:
      "An off-grid system uses a battery bank for power regulation and energy storage. It typically includes solar panels, an inverter, a battery bank and a charge controller. In some cases, a generator serves as a secondary backup source.",
    benefits: [
      "Self-reliance and independence from the grid",
      "No blackouts when the grid fails",
      "Extra power available from battery storage",
      "No dealing with electricity bills and payments",
    ],
  },
  {
    id: "hybrid",
    name: "Hybrid solar system",
    summary: "Grid-connected with battery storage. Savings and backup in one system.",
    description:
      "A hybrid system works like a standard grid-tied system, producing electricity, but uses a hybrid inverter and batteries to store energy. Much like a UPS, many hybrid systems act as backup power during a blackout. In the solar industry, \"hybrid\" means solar plus energy storage, connected to the grid.",
    benefits: [
      "Stores excess solar or low-cost off-peak electricity",
      "Uses stored energy in the evening peak for self-use or load-shifting",
      "Backup power during outages",
      "Draws less from the grid, reducing demand",
      "Advanced energy management for better efficiency",
    ],
  },
];
