export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: "home" | "factory" | "meter" | "battery" | "audit" | "wrench";
  segment: "residential" | "industrial" | "both";
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  includes: string[];
  idealFor: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "residential-solar-karachi",
    title: "Residential Solar Panel Installation in Karachi",
    shortTitle: "Residential Solar",
    icon: "home",
    segment: "residential",
    metaTitle: "Residential Solar Panel Installation in Karachi | Home Solar Systems",
    metaDescription:
      "Home solar systems in Karachi from 3 kW to 25 kW+. On-grid, hybrid and off-grid solutions with tier-1 panels, net-metering support and after-sales service by Mat Energy.",
    summary:
      "On-grid, hybrid and off-grid home solar systems sized to your bill, roof and load-shedding pattern.",
    intro: [
      "Rising K-Electric tariffs and unpredictable load-shedding have made rooftop solar one of the smartest investments a Karachi household can make. Mat Energy designs home solar systems around how your family actually uses electricity: the ACs in summer, the water pump, the fridge that must never go off.",
      "We start with a free site survey, study your last 12 months of bills, check roof orientation and shading, and recommend the right mix of panels, inverter and (optionally) batteries. Then our own team installs, commissions and supports it.",
    ],
    highlights: [
      {
        title: "Lower monthly bills",
        text: "Offset a large share of your daytime units and, with net-metering, export surplus to the grid.",
      },
      {
        title: "Backup during outages",
        text: "Hybrid systems with lithium batteries keep essentials running through load-shedding.",
      },
      {
        title: "Built for Karachi rooftops",
        text: "Galvanised, elevated mounting structures designed for coastal humidity and strong sea breeze.",
      },
      {
        title: "Clean, safe wiring",
        text: "DC/AC protection, proper earthing and lightning arrestors on every installation.",
      },
    ],
    includes: [
      "Free site survey and bill analysis",
      "Tier-1 mono PERC / N-type TOPCon panels",
      "On-grid, hybrid or off-grid inverter",
      "Optional lithium (LiFePO4) battery storage",
      "Elevated galvanised mounting structure",
      "DC & AC protection, earthing and lightning arrestor",
      "Net-metering application with K-Electric",
      "Mobile app monitoring setup",
      "After-sales cleaning and maintenance plans",
    ],
    idealFor: [
      "Houses and bungalows in DHA, Clifton, Gulshan, North Nazimabad and PECHS",
      "Portion owners with dedicated roof space",
      "Families wanting backup during load-shedding",
      "Homes with high summer AC usage",
    ],
    faqs: [
      {
        q: "What size solar system do I need for my home in Karachi?",
        a: "It depends on your monthly units, not just your bill amount. As a rough guide, a home using 500–600 units a month usually needs a 5–6 kW system, and a home with several inverter ACs often needs 10 kW or more. Use our savings calculator for an estimate, then we confirm it after a free site survey.",
      },
      {
        q: "On-grid, hybrid or off-grid: which is best for a home?",
        a: "On-grid systems give the best return when you have net-metering but switch off during load-shedding. Hybrid systems add batteries so essentials keep running during outages, and still work with net-metering. Off-grid is for locations with no reliable grid. Most Karachi homes choose on-grid or hybrid.",
      },
      {
        q: "How much roof space do I need?",
        a: "Roughly 55–70 sq ft of shade-free roof per kW with modern high-wattage panels. A 10 kW system typically needs around 600–700 sq ft. Elevated structures let you keep using the roof underneath.",
      },
      {
        q: "How long does installation take?",
        a: "Most home installations are completed in 2–4 days after the equipment arrives. Net-metering approval with K-Electric takes longer and we handle the paperwork for you.",
      },
    ],
  },
  {
    slug: "commercial-industrial-solar-karachi",
    title: "Commercial & Industrial Solar Solutions in Karachi",
    shortTitle: "Commercial & Industrial",
    icon: "factory",
    segment: "industrial",
    metaTitle: "Industrial & Commercial Solar Installation in Karachi | C&I Solar EPC",
    metaDescription:
      "Industrial and commercial solar power plants in Karachi from 20 kW to 1 MW+. Factories, warehouses, offices, schools and hospitals. Feasibility, ROI analysis, EPC and O&M by Mat Energy.",
    summary:
      "Rooftop and ground-mounted solar plants for factories, warehouses, offices and institutions, with full cost analysis.",
    intro: [
      "Electricity is one of the largest operating costs for Karachi's factories, mills, cold storages and commercial buildings. A well-engineered solar plant turns your idle rooftop into a power station that cuts daytime energy costs for decades.",
      "Mat Energy delivers commercial and industrial (C&I) solar as a complete EPC service: load profiling, feasibility and ROI analysis, structural assessment, engineering design, procurement of tier-1 equipment, installation, commissioning, net-metering and long-term operations & maintenance.",
    ],
    highlights: [
      {
        title: "Detailed cost analysis",
        text: "Load profile study, generation simulation, payback period and lifetime savings before you commit.",
      },
      {
        title: "Engineered for scale",
        text: "String design, cable sizing, protection coordination and structural checks for large sheds and RCC roofs.",
      },
      {
        title: "Minimal downtime",
        text: "Installation is phased around your production schedule so operations keep running.",
      },
      {
        title: "Monitoring & O&M",
        text: "Remote plant monitoring, scheduled panel cleaning and preventive maintenance contracts.",
      },
    ],
    includes: [
      "Energy audit and load-profile analysis",
      "Feasibility study with ROI and payback period",
      "Structural assessment of RCC / steel-shed roofs",
      "Engineering design and single-line diagrams",
      "Tier-1 panels and string / central inverters",
      "Optional battery energy storage (BESS)",
      "Generator and grid synchronisation",
      "Net-metering with K-Electric",
      "Remote monitoring, O&M and cleaning contracts",
    ],
    idealFor: [
      "Factories in SITE, Korangi, Landhi, North Karachi and Port Qasim",
      "Textile, garments, plastics and food-processing units",
      "Warehouses and cold storages",
      "Offices, banks, schools, hospitals and hotels",
    ],
    faqs: [
      {
        q: "What is the payback period for an industrial solar system in Karachi?",
        a: "With current commercial and industrial tariffs, well-designed C&I solar plants in Karachi commonly pay back in roughly 2–4 years, depending on daytime load, roof conditions and financing. We share a site-specific payback calculation in the feasibility report.",
      },
      {
        q: "Can solar work alongside our generators?",
        a: "Yes. We integrate solar inverters with your diesel or gas generators using a controller that prevents reverse power and reduces fuel consumption during daytime operation.",
      },
      {
        q: "Can our factory roof carry a solar plant?",
        a: "Most RCC roofs and steel sheds can. We carry out a structural assessment and design the mounting system for your roof type, including purlin-clamp and non-penetrating options for sheds.",
      },
      {
        q: "Do you offer financing for commercial solar?",
        a: "Several Pakistani banks offer solar financing for businesses. We prepare the technical proposal and documentation your bank needs and coordinate with them during the process.",
      },
    ],
  },
  {
    slug: "net-metering-karachi",
    title: "Net Metering in Karachi (K-Electric)",
    shortTitle: "Net Metering",
    icon: "meter",
    segment: "both",
    metaTitle: "Net Metering in Karachi | K-Electric Solar Net Metering Service",
    metaDescription:
      "Get your solar system net-metered with K-Electric. Mat Energy handles the application, documentation, NEPRA licence, inspection and bi-directional meter installation in Karachi.",
    summary:
      "We handle the complete K-Electric net-metering process, from application to bi-directional meter.",
    intro: [
      "Net metering lets your solar system export surplus electricity to the K-Electric grid, with exported units credited against the units you import. It is what turns a good solar system into a great investment.",
      "The process involves an application to K-Electric, technical documentation, site inspection, a generation licence from NEPRA and installation of a bi-directional (green) meter. Mat Energy prepares and follows up the whole file for you.",
    ],
    highlights: [
      {
        title: "End-to-end paperwork",
        text: "Application forms, single-line diagram, equipment datasheets and NEPRA licence documentation.",
      },
      {
        title: "Follow-up with K-Electric",
        text: "We coordinate inspections and track the file until the green meter is installed.",
      },
      {
        title: "Compliant installation",
        text: "Inverters, protection and earthing that meet utility interconnection requirements.",
      },
      {
        title: "Clear guidance",
        text: "Net-metering rules and buy-back rates are set by NEPRA and have changed recently. We explain the current rules for your connection before you invest.",
      },
    ],
    includes: [
      "Eligibility check for your connection and sanctioned load",
      "Application and document preparation",
      "Single-line diagram and technical specifications",
      "NEPRA generation licence filing",
      "Coordination of K-Electric inspection",
      "Bi-directional meter installation follow-up",
    ],
    idealFor: [
      "New on-grid and hybrid solar systems",
      "Existing solar systems not yet net-metered",
      "Residential, commercial and industrial K-Electric consumers",
    ],
    faqs: [
      {
        q: "How long does net metering take in Karachi?",
        a: "Timelines vary with K-Electric's workload and file completeness, but typically range from a few weeks to a few months. A complete, accurate file is the best way to avoid delays, which is why we prepare it for you.",
      },
      {
        q: "Can I get net metering for an existing solar system?",
        a: "Usually yes, provided your inverter is grid-tied and approved and the installation meets the utility's technical requirements. We inspect the system and advise on any changes needed.",
      },
      {
        q: "Is net metering still worth it after the policy changes?",
        a: "Policy and buy-back rates for exported units are decided by the government and NEPRA and have been revised. Solar remains valuable because every unit you consume directly from your panels avoids the full retail tariff. We size systems to maximise self-consumption so the economics hold up under the current rules.",
      },
    ],
  },
  {
    slug: "hybrid-off-grid-solar-battery",
    title: "Hybrid & Off-Grid Solar with Battery Backup",
    shortTitle: "Hybrid & Battery Backup",
    icon: "battery",
    segment: "both",
    metaTitle: "Hybrid Solar System with Lithium Battery in Karachi | Off-Grid Solar",
    metaDescription:
      "Hybrid and off-grid solar systems with lithium battery backup in Karachi. Keep power on during load-shedding. Huawei, Growatt, GoodWe, Solis, BYD and Pylontech solutions.",
    summary:
      "Solar plus lithium batteries for uninterrupted power through load-shedding, or full independence from the grid.",
    intro: [
      "Load-shedding is a fact of life in many parts of Karachi. A hybrid solar system stores solar energy in lithium batteries so lights, fans, internet, refrigeration and selected ACs keep running when the grid goes down, and switches over automatically.",
      "For farmhouses, remote sites and telecom or pumping applications with no reliable grid, we design fully off-grid systems sized for autonomy.",
    ],
    highlights: [
      {
        title: "Seamless switchover",
        text: "Automatic transfer in milliseconds, so most appliances don't notice an outage.",
      },
      {
        title: "Lithium (LiFePO4) batteries",
        text: "Long cycle life, deep discharge and low maintenance compared with lead-acid.",
      },
      {
        title: "Smart energy management",
        text: "Prioritise solar, battery or grid by time of day to maximise savings.",
      },
      {
        title: "Expandable",
        text: "Start with what you need and add battery capacity later.",
      },
    ],
    includes: [
      "Backup load assessment",
      "Hybrid or off-grid inverter",
      "Lithium battery bank sizing and installation",
      "Essential-load distribution board",
      "Generator integration (optional)",
      "App-based monitoring",
    ],
    idealFor: [
      "Homes in areas with frequent load-shedding",
      "Clinics, offices and shops needing uninterrupted power",
      "Farmhouses and sites without a reliable grid",
    ],
    faqs: [
      {
        q: "How long will batteries run my house?",
        a: "Backup time depends on battery capacity and what you run. For example, a 10 kWh lithium bank can typically run fans, lights, a fridge, Wi-Fi and one inverter AC for several hours. We size the bank to your outage pattern.",
      },
      {
        q: "Lithium or lead-acid / tubular batteries?",
        a: "Lithium (LiFePO4) costs more upfront but lasts several times longer, can be discharged deeper, charges faster and needs no maintenance, so it is usually cheaper over the system's life.",
      },
    ],
  },
  {
    slug: "energy-audit",
    title: "Home & Business Energy Audits",
    shortTitle: "Energy Audit",
    icon: "audit",
    segment: "both",
    metaTitle: "Energy Audit in Karachi | Home & Industrial Energy Efficiency Audit",
    metaDescription:
      "Find where your electricity is going. Mat Energy's energy audits for homes, offices and factories in Karachi identify savings before and alongside solar.",
    summary:
      "Find where your electricity goes and the quickest ways to cut waste, before and alongside solar.",
    intro: [
      "The cheapest unit of electricity is the one you don't use. Our energy audits analyse your bills, measure major loads and identify practical ways to reduce consumption, from inefficient ACs and motors to poor power factor and wasteful schedules.",
      "An audit also gives us accurate data to size your solar system correctly, so you don't overpay for capacity you don't need.",
    ],
    highlights: [
      {
        title: "Bill & tariff analysis",
        text: "Understand your units, peak/off-peak split, sanctioned load and charges.",
      },
      {
        title: "Load measurement",
        text: "Identify the appliances and machines driving your bill.",
      },
      {
        title: "Actionable report",
        text: "Prioritised recommendations with estimated savings and costs.",
      },
      {
        title: "Right-sized solar",
        text: "Accurate data means a correctly sized, better-value solar system.",
      },
    ],
    includes: [
      "12-month bill and tariff review",
      "On-site walkthrough and load listing",
      "Power quality and power factor check (C&I)",
      "Efficiency recommendations",
      "Solar sizing recommendation",
    ],
    idealFor: [
      "Homes with unexpectedly high bills",
      "Factories and offices planning solar",
      "Businesses with power-factor penalties",
    ],
    faqs: [
      {
        q: "Is the energy audit free?",
        a: "A basic bill review and site survey is free for anyone considering solar. Detailed industrial energy audits with measurement are quoted separately based on site size.",
      },
    ],
  },
  {
    slug: "solar-maintenance-after-sales",
    title: "Solar Maintenance & After-Sales Service",
    shortTitle: "Maintenance & After-Sales",
    icon: "wrench",
    segment: "both",
    metaTitle: "Solar Panel Cleaning & Maintenance in Karachi | After-Sales Service",
    metaDescription:
      "Solar panel cleaning, inspection, inverter troubleshooting and maintenance contracts in Karachi. Keep your system producing at its best with Mat Energy after-sales support.",
    summary:
      "Panel cleaning, health checks, inverter troubleshooting and maintenance contracts that keep output high.",
    intro: [
      "Karachi's dust, smog and salty sea air can cut a solar system's output noticeably if panels aren't cleaned regularly. Loose connections and tripped protection can silently stop generation altogether.",
      "Mat Energy's after-sales team keeps your system performing, whether we installed it or not, with scheduled cleaning, inspections, monitoring and fast fault response.",
    ],
    highlights: [
      {
        title: "Scheduled cleaning",
        text: "Safe panel cleaning that restores lost generation.",
      },
      {
        title: "Health checks",
        text: "Thermal and electrical inspection of panels, cabling, breakers and earthing.",
      },
      {
        title: "Inverter support",
        text: "Fault diagnosis, firmware updates and warranty claims with manufacturers.",
      },
      {
        title: "Responsive support",
        text: "A dedicated support line for our customers when something isn't right.",
      },
    ],
    includes: [
      "Panel cleaning (one-off or contract)",
      "Visual, electrical and thermal inspection",
      "Monitoring review and performance report",
      "Inverter and battery troubleshooting",
      "Warranty claim handling",
      "System upgrades and expansions",
    ],
    idealFor: [
      "Existing solar owners whose output has dropped",
      "Commercial plants needing an O&M contract",
      "Systems installed by other companies",
    ],
    faqs: [
      {
        q: "How often should solar panels be cleaned in Karachi?",
        a: "Every 2–4 weeks is typical in Karachi because of dust and coastal salt, more often near construction or industrial areas. Monitoring your daily generation shows when cleaning is due.",
      },
      {
        q: "Do you service systems installed by other companies?",
        a: "Yes. We inspect, repair and maintain systems regardless of the original installer.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
