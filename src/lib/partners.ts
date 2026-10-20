export type Partner = {
  name: string;
  /** Short tagline shown under the name. */
  tagline: string;
  category: "Solar Panels" | "Inverters" | "Batteries & Storage";
  /** Optional logo in /public/partners, e.g. "/partners/jinko.svg". Falls back to a wordmark. */
  logo?: string;
};

export const partners: Partner[] = [
  { name: "Jinko Solar", tagline: "Tier-1 solar modules", category: "Solar Panels" },
  { name: "LONGi", tagline: "High-efficiency mono modules", category: "Solar Panels" },
  { name: "Trinasolar", tagline: "Tier-1 solar modules", category: "Solar Panels" },
  { name: "Huawei", tagline: "Smart PV inverters", category: "Inverters" },
  { name: "Sungrow", tagline: "Clean power for all", category: "Inverters" },
  { name: "Growatt", tagline: "Hybrid & on-grid inverters", category: "Inverters" },
  { name: "GoodWe", tagline: "Smart energy innovator", category: "Inverters" },
  { name: "Solis", tagline: "String & hybrid inverters", category: "Inverters" },
  { name: "Inverex Solar Energy", tagline: "Inverters & solar solutions", category: "Inverters" },
  { name: "BYD", tagline: "Lithium battery storage", category: "Batteries & Storage" },
  { name: "Pylontech", tagline: "LiFePO4 energy storage", category: "Batteries & Storage" },
  { name: "Sunwoda Energy", tagline: "Energy storage systems", category: "Batteries & Storage" },
  { name: "Narada", tagline: "Lithium & storage batteries", category: "Batteries & Storage" },
];

export const partnerCategories = ["Solar Panels", "Inverters", "Batteries & Storage"] as const;
