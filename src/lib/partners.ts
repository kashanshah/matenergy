export type Partner = {
  name: string;
  category: "Solar Panels" | "Inverters" | "Batteries & Storage";
  /** Logo in /public/partners. Downloaded from the live site by `npm run fetch-media`. */
  logo: string;
};

export const partners: Partner[] = [
  { name: "Jinko Solar", category: "Solar Panels", logo: "/partners/jinko.png" },
  { name: "LONGi", category: "Solar Panels", logo: "/partners/longi.svg" },
  { name: "Trinasolar", category: "Solar Panels", logo: "/partners/trinasolar.png" },
  { name: "Huawei", category: "Inverters", logo: "/partners/huawei.png" },
  { name: "Sungrow", category: "Inverters", logo: "/partners/sungrow.png" },
  { name: "Growatt", category: "Inverters", logo: "/partners/growatt.png" },
  { name: "GoodWe", category: "Inverters", logo: "/partners/goodwe.png" },
  { name: "Solis", category: "Inverters", logo: "/partners/solis.png" },
  { name: "Inverex Solar Energy", category: "Inverters", logo: "/partners/inverex.png" },
  { name: "BYD", category: "Batteries & Storage", logo: "/partners/byd.png" },
  { name: "Pylontech", category: "Batteries & Storage", logo: "/partners/pylontech.png" },
  { name: "Sunwoda Energy", category: "Batteries & Storage", logo: "/partners/sunwoda.png" },
  { name: "Narada", category: "Batteries & Storage", logo: "/partners/narada.png" },
];

export const partnerCategories = ["Solar Panels", "Inverters", "Batteries & Storage"] as const;
