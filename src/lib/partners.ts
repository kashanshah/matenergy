export type Partner = {
  name: string;
  category: "Solar Panels" | "Inverters" | "Batteries & Storage";
  /** Logo in /public/partners. Left out where no working file exists yet, so the name shows instead. */
  logo?: string;
};

export const partners: Partner[] = [
  { name: "Jinko Solar", category: "Solar Panels", logo: "/partners/Jinko-1.png" },
  { name: "LONGi", category: "Solar Panels", logo: "/partners/longi.svg" },
  { name: "Trinasolar", category: "Solar Panels", logo: "/partners/trinasolar.png" },
  { name: "Huawei", category: "Inverters", logo: "/partners/Huawei-Logo.png" },
  { name: "Sungrow", category: "Inverters", logo: "/partners/Sungrow.png" },
  { name: "Growatt", category: "Inverters", logo: "/partners/growatt.png" },
  { name: "GoodWe", category: "Inverters", logo: "/partners/Goodwe.svg" },
  { name: "Solis", category: "Inverters", logo: "/partners/solis.png" },
  { name: "Inverex Solar Energy", category: "Inverters", logo: "/partners/Inverex.png" },
  { name: "BYD", category: "Batteries & Storage", logo: "/partners/byd.png" },
  { name: "Pylontech", category: "Batteries & Storage", logo: "/partners/pylontech.png" },
  { name: "Sunwoda Energy", category: "Batteries & Storage", logo: "/partners/sunwoda.png" },
  { name: "Narada", category: "Batteries & Storage", logo: "/partners/narada-wordmark.png" },
];

export const partnerCategories = ["Solar Panels", "Inverters", "Batteries & Storage"] as const;
