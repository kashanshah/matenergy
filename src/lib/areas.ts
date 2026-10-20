export type Area = {
  slug: string;
  name: string;
  kind: "residential" | "industrial";
  intro: string;
  notes: string[];
};

export const areas: Area[] = [
  {
    slug: "north-nazimabad",
    name: "North Nazimabad",
    kind: "residential",
    intro:
      "Our office is in North Nazimabad, so this is home ground. We install rooftop solar for houses, portions and apartment buildings across all blocks, from Block A to Block T, and nearby Nazimabad, Hyderi and Buffer Zone.",
    notes: [
      "Fast site surveys from our Marhaba Heights office",
      "Elevated structures for shared roofs on multi-storey houses",
      "Hybrid systems popular for load-shedding backup",
    ],
  },
  {
    slug: "dha-karachi",
    name: "DHA Karachi",
    kind: "residential",
    intro:
      "Large bungalows in DHA Phases 1–8 often run multiple inverter ACs and high summer loads, making them ideal for 10–25 kW solar systems with net-metering. We design neat, low-profile installations that respect the look of your home.",
    notes: [
      "Corrosion-resistant hardware for sea-facing phases",
      "High-capacity on-grid and hybrid systems",
      "Discreet cable routing and premium finishing",
    ],
  },
  {
    slug: "clifton",
    name: "Clifton",
    kind: "residential",
    intro:
      "Clifton's coastal air is tough on metal and panels. Our Clifton installations use hot-dip galvanised structures, stainless fasteners and regular cleaning plans to keep systems productive near the sea.",
    notes: [
      "Coastal-grade mounting and fasteners",
      "Solutions for bungalows and building rooftops",
      "Cleaning plans for salt and dust build-up",
    ],
  },
  {
    slug: "gulshan-e-iqbal",
    name: "Gulshan-e-Iqbal",
    kind: "residential",
    intro:
      "From independent houses to shops and clinics, Gulshan-e-Iqbal is one of Karachi's busiest solar markets. We help families and small businesses choose between on-grid savings and hybrid backup.",
    notes: [
      "5–15 kW home systems",
      "Hybrid backup for clinics and shops",
      "Net-metering with K-Electric",
    ],
  },
  {
    slug: "gulistan-e-jauhar",
    name: "Gulistan-e-Jauhar",
    kind: "residential",
    intro:
      "Many Gulistan-e-Jauhar homes face long load-shedding hours. Hybrid solar systems with lithium batteries keep essentials running and cut bills at the same time.",
    notes: [
      "Battery-backed hybrid systems",
      "Solutions for houses and townhouses",
      "Expandable battery capacity",
    ],
  },
  {
    slug: "pechs",
    name: "PECHS & Tariq Road",
    kind: "residential",
    intro:
      "PECHS combines residences with offices and retail along Tariq Road and Shahrah-e-Faisal. We install residential and commercial rooftop solar systems for both.",
    notes: [
      "Mixed-use and commercial rooftops",
      "Office solar for daytime loads",
      "Compact designs for tight roofs",
    ],
  },
  {
    slug: "bahria-town-karachi",
    name: "Bahria Town Karachi",
    kind: "residential",
    intro:
      "Villas in Bahria Town Karachi have uniform, unshaded roofs that are ideal for solar. We design systems to match your villa's load and help with net-metering.",
    notes: [
      "Villa-sized on-grid and hybrid systems",
      "Clean, symmetric panel layouts",
      "Remote monitoring via mobile app",
    ],
  },
  {
    slug: "federal-b-area",
    name: "Federal B Area",
    kind: "residential",
    intro:
      "Federal B Area mixes homes with small industrial and commercial units. We serve both, from 5 kW home systems to rooftop plants for workshops and offices.",
    notes: [
      "Home and small-business systems",
      "Three-phase solutions",
      "Quick service from nearby North Nazimabad",
    ],
  },
  {
    slug: "site-area",
    name: "SITE Area",
    kind: "industrial",
    intro:
      "SITE is Karachi's oldest industrial estate, home to textile, garment and processing units with heavy daytime loads. Large shed roofs make it ideal for 100 kW–1 MW rooftop solar plants that cut production costs.",
    notes: [
      "Steel-shed and RCC roof structures",
      "Generator synchronisation",
      "Feasibility and payback analysis",
    ],
  },
  {
    slug: "korangi-industrial-area",
    name: "Korangi Industrial Area",
    kind: "industrial",
    intro:
      "Factories in Korangi Industrial Area and KIA's sectors run long daytime shifts, which matches solar generation closely. We engineer C&I plants around your load profile for fast payback.",
    notes: [
      "Load-profile-based design",
      "Phased installation to avoid downtime",
      "O&M and cleaning contracts",
    ],
  },
  {
    slug: "landhi-industrial-area",
    name: "Landhi Industrial Area",
    kind: "industrial",
    intro:
      "Landhi's manufacturing units can cut a large share of their daytime grid and generator costs with rooftop solar. We handle everything from structural checks to net-metering.",
    notes: ["Industrial rooftop EPC", "Generator fuel savings", "Remote plant monitoring"],
  },
  {
    slug: "north-karachi-industrial-area",
    name: "North Karachi Industrial Area",
    kind: "industrial",
    intro:
      "Close to our North Nazimabad office, North Karachi Industrial Area is home to many garment and plastics units. We offer quick surveys and dependable after-sales support.",
    notes: ["Close-by service team", "Garment and plastics experience", "Net-metering for industrial connections"],
  },
  {
    slug: "port-qasim",
    name: "Port Qasim",
    kind: "industrial",
    intro:
      "Large industrial plots at Port Qasim suit both rooftop and ground-mounted solar. We design utility-scale-ready systems with corrosion protection for the coastal environment.",
    notes: ["Ground-mounted and rooftop plants", "Coastal corrosion protection", "Battery storage options"],
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
