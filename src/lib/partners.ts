export type Partner = {
  name: string;
  category: "Solar Panels" | "Inverters" | "Batteries & Storage";
  /** Logo in /public/partners. Left out where the supplied file has no artwork in it, so the name shows instead. */
  logo?: string;
};

export const partners: Partner[] = [
  { name: "Jinko Solar", category: "Solar Panels", logo: "/partners/Jinko-1.png" },
  { name: "LONGi", category: "Solar Panels", logo: "/partners/longi.svg" },
  { name: "Trinasolar", category: "Solar Panels" },
  { name: "Huawei", category: "Inverters", logo: "/partners/Huawei-Logo.png" },
  { name: "Sungrow", category: "Inverters", logo: "/partners/Sungrow.png" },
  { name: "Growatt", category: "Inverters" },
  { name: "GoodWe", category: "Inverters" },
  { name: "Solis", category: "Inverters", logo: "/partners/solis.png" },
  { name: "Inverex Solar Energy", category: "Inverters", logo: "/partners/Inverex.png" },
  { name: "BYD", category: "Batteries & Storage" },
  { name: "Pylontech", category: "Batteries & Storage", logo: "/partners/pylontech.png" },
  { name: "Sunwoda Energy", category: "Batteries & Storage" },
  { name: "Narada", category: "Batteries & Storage", logo: "/partners/narada-wordmark.png" },
];

export const partnerCategories = ["Solar Panels", "Inverters", "Batteries & Storage"] as const;
