import { KWH_PER_KW_MONTH, PANEL_WATTS, SQFT_PER_KW } from "./solar";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "link"; text: string; href: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  /** Illustrative thumbnail, generated with Higgsfield; not a photo of a MAT Energy job. */
  image: { src: string; alt: string };
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "what-size-solar-system-do-i-need-karachi",
    title: "What size solar system do I need in Karachi?",
    description:
      "Work out the solar system size for your Karachi home or business from your K-Electric bill: units, kilowatts, panels and roof space, step by step.",
    date: "2026-10-20",
    readingMinutes: 5,
    image: {
      src: "/images/blog/what-size-solar-system.jpg",
      alt: "A K-Electric style electricity bill beside a calculator and a solar panel model on a desk",
    },
    body: [
      {
        type: "p",
        text: "The right solar system size starts with one document you already have: your electricity bill. Size from what you actually use, not from a package someone wants to sell, and the system pays for itself faster.",
      },
      { type: "h2", text: "Step 1: find your monthly units" },
      {
        type: "p",
        text: "Your K-Electric bill shows the units (kWh) you used each month, usually with a 12-month history. Take an average across the year, because Karachi summers use far more power than winters. If you only know the amount you paid, divide the bill by your cost per unit to estimate the units.",
      },
      { type: "h2", text: "Step 2: turn units into kilowatts" },
      {
        type: "p",
        text: `In Karachi, each kilowatt of well-installed panels produces roughly ${KWH_PER_KW_MONTH} units a month after normal system losses. Divide the units you want to cover by ${KWH_PER_KW_MONTH} to get the system size in kilowatts.`,
      },
      {
        type: "ul",
        items: [
          `600 units a month ÷ ${KWH_PER_KW_MONTH} ≈ 4.6 kW, so a 5 kW system`,
          `1,000 units a month ÷ ${KWH_PER_KW_MONTH} ≈ 7.7 kW, so an 8 kW system`,
          `2,500 units a month ÷ ${KWH_PER_KW_MONTH} ≈ 19 kW, so a 20 kW system`,
        ],
      },
      { type: "h2", text: "Step 3: count panels and roof space" },
      {
        type: "p",
        text: `With ${PANEL_WATTS} W panels, a 5 kW system needs about 9 panels. Allow roughly ${SQFT_PER_KW} sq ft of shade-free roof per kilowatt, so 5 kW needs around ${5 * SQFT_PER_KW} sq ft. Water tanks, stair towers and parapet walls cast shadows, so the usable area is often smaller than the roof itself.`,
      },
      {
        type: "tip",
        text: "Short on roof space? An elevated steel structure lets the panels sit above tanks and shade, and keeps the roof usable underneath.",
      },
      { type: "h2", text: "Step 4: decide whether you need batteries" },
      {
        type: "p",
        text: "Sizing the panels covers your bill. If you also want power during load-shedding, you need a hybrid or off-grid system with batteries, sized separately to the loads you want to keep running and for how long.",
      },
      { type: "link", text: "Try the solar savings calculator with your own bill", href: "/solar-calculator/" },
      {
        type: "p",
        text: "A calculator gives a good first estimate. A site survey confirms it: we check the roof, shading, wiring and your load pattern before recommending a final size.",
      },
    ],
  },
  {
    slug: "on-grid-vs-hybrid-vs-off-grid-solar-karachi",
    title: "On-grid vs hybrid vs off-grid solar in Karachi",
    description:
      "How on-grid, hybrid and off-grid solar systems differ in cost, savings and load-shedding backup, and which one fits a home or business in Karachi.",
    date: "2026-10-20",
    readingMinutes: 6,
    image: {
      src: "/images/blog/on-grid-hybrid-off-grid.jpg",
      alt: "A hybrid inverter and lithium battery bank mounted on a wall in a Karachi home",
    },
    body: [
      {
        type: "p",
        text: "Before choosing a panel brand, choose the type of system. The three options behave very differently when K-Electric's supply goes off, and they cost very different amounts.",
      },
      { type: "h2", text: "On-grid: the lowest cost per unit" },
      {
        type: "p",
        text: "An on-grid system connects your panels to the grid through a grid-tied inverter. During the day the house runs on solar first and draws from the grid only for the rest. There are no batteries, so it is the cheapest way to cut a bill.",
      },
      {
        type: "ul",
        items: [
          "Best when most of your use happens in daylight hours",
          "Shuts down during load-shedding, as a safety requirement",
          "Can export surplus units if you have net metering",
        ],
      },
      { type: "h2", text: "Hybrid: savings plus backup" },
      {
        type: "p",
        text: "A hybrid system adds a hybrid inverter and batteries. It still uses the grid, but stores solar energy for the evening and keeps chosen loads running through outages, much like a UPS that charges itself from the sun.",
      },
      {
        type: "ul",
        items: [
          "Keeps fans, lights, fridge and internet on during load-shedding",
          "Uses stored solar in the evening, when the grid is often most expensive",
          "Costs more than on-grid because of the batteries",
        ],
      },
      { type: "h2", text: "Off-grid: independent of the grid" },
      {
        type: "p",
        text: "An off-grid system runs entirely on panels and batteries, sometimes with a generator as a second backup. It suits farmhouses and sites where the grid is unreliable or absent, but needs a larger battery bank to cover cloudy days and nights.",
      },
      {
        type: "tip",
        text: "Most Karachi homes with regular load-shedding choose hybrid. Homes with steady supply and high daytime use often choose on-grid.",
      },
      { type: "h2", text: "How to choose" },
      {
        type: "ul",
        items: [
          "Cutting the bill is the only goal: on-grid",
          "You also want power during outages: hybrid",
          "There is no reliable grid connection: off-grid",
        ],
      },
      { type: "link", text: "Compare the three systems side by side", href: "/solar-systems/" },
    ],
  },
  {
    slug: "elevated-solar-structure-karachi-roof",
    title: "Elevated solar structures: keep your Karachi roof usable",
    description:
      "Why many Karachi solar installations raise panels on steel frames, what an elevated structure involves, and when it is worth the extra cost.",
    date: "2026-10-20",
    readingMinutes: 4,
    image: {
      src: "/images/blog/elevated-solar-structure.jpg",
      alt: "Solar panels raised on a galvanised steel frame above a flat Karachi rooftop with space underneath",
    },
    body: [
      {
        type: "p",
        text: "On a Karachi roof, space is rarely empty. Water tanks, stair towers, washing lines and family gatherings all compete for it. An elevated structure puts the panels above all of that instead of on top of it.",
      },
      { type: "h2", text: "What an elevated structure is" },
      {
        type: "p",
        text: "Instead of low frames fixed close to the roof slab, the panels sit on a raised steel frame, often several feet up and sometimes much higher. One of our installations in Gulshan-e-Iqbal sits on a 20 ft structure with a walkway for cleaning and inspection.",
      },
      { type: "h2", text: "Why people choose it" },
      {
        type: "ul",
        items: [
          "The roof stays usable as shaded space underneath",
          "Panels clear water tanks and parapet walls that would cast shadows",
          "More panels fit when the usable flat area is small",
          "Shade below keeps the top floor noticeably cooler",
        ],
      },
      { type: "h2", text: "What to check before building one" },
      {
        type: "ul",
        items: [
          "The roof slab and columns must carry the extra load safely",
          "Steel should be galvanised or properly coated against Karachi's salty air",
          "The frame must be designed for strong coastal winds",
          "A walkway or ladder makes cleaning safe on higher structures",
        ],
      },
      {
        type: "tip",
        text: "An elevated structure costs more than a standard frame. It pays back when roof space is tight or when you would lose the use of the roof otherwise.",
      },
      { type: "link", text: "See elevated systems we have installed", href: "/projects/" },
    ],
  },
  {
    slug: "lithium-vs-tubular-battery-solar-pakistan",
    title: "Lithium or tubular batteries for solar backup?",
    description:
      "Lithium and tubular (lead-acid) batteries for hybrid and off-grid solar in Pakistan compared: lifespan, usable capacity, maintenance and cost.",
    date: "2026-10-20",
    readingMinutes: 5,
    image: {
      src: "/images/blog/lithium-vs-tubular-battery.jpg",
      alt: "A wall-mounted lithium battery beside a row of tubular lead-acid batteries in a utility room",
    },
    body: [
      {
        type: "p",
        text: "In a hybrid or off-grid system, the batteries decide how long the lights stay on during load-shedding. The two common choices are lithium and tubular lead-acid, and they suit different budgets and homes.",
      },
      { type: "h2", text: "Tubular lead-acid batteries" },
      {
        type: "ul",
        items: [
          "Lower upfront price",
          "Only about half the rated capacity should be used regularly, to protect battery life",
          "Need distilled water topped up and terminals cleaned",
          "Heavy, and need a ventilated space",
        ],
      },
      { type: "h2", text: "Lithium batteries" },
      {
        type: "ul",
        items: [
          "Higher upfront price",
          "Most of the rated capacity is usable every day",
          "Many more charge cycles, so a much longer working life",
          "No water topping; compact and wall-mountable",
        ],
      },
      { type: "h2", text: "Which works out cheaper?" },
      {
        type: "p",
        text: "Compare cost per usable unit over the battery's life, not the shelf price. Because lithium delivers more usable capacity and lasts many more cycles, it often costs less over the life of the system, even though it costs more on the day you buy it.",
      },
      {
        type: "tip",
        text: "Backup time is roughly usable battery capacity divided by the load. A 5 kWh usable battery running 1 kW of fans, lights and a fridge lasts about five hours.",
      },
      { type: "h2", text: "Looking after either type" },
      {
        type: "p",
        text: "Have the battery terminals checked and tightened at each maintenance visit, roughly every six months, and straight away if backup time drops or the inverter shows a battery error.",
      },
      { type: "link", text: "Read about hybrid systems with battery backup", href: "/solar-systems/#hybrid" },
    ],
  },
  {
    slug: "solar-panel-cleaning-maintenance-karachi",
    title: "Solar panel cleaning and maintenance in Karachi",
    description:
      "How dust, sea air and bird droppings affect solar output in Karachi, how often to clean panels, and the checks that keep a system producing.",
    date: "2026-10-20",
    readingMinutes: 4,
    image: {
      src: "/images/blog/solar-panel-cleaning.jpg",
      alt: "A technician cleaning rooftop solar panels with a soft brush and water in early morning light",
    },
    body: [
      {
        type: "p",
        text: "Karachi is hard on solar panels. Fine dust, salty sea air and bird droppings settle on the glass and quietly cut how much power the system makes. Regular cleaning and a few simple checks keep output where it should be.",
      },
      { type: "h2", text: "How often to clean" },
      {
        type: "p",
        text: "In dusty months panels can lose noticeable output within a couple of weeks. Most rooftops benefit from cleaning every two to four weeks, and more often near construction, main roads or the coast. If your inverter app shows output falling on clear days, the panels probably need cleaning.",
      },
      { type: "h2", text: "How to clean safely" },
      {
        type: "ul",
        items: [
          "Clean early in the morning or late afternoon, when the glass is cool",
          "Use plain water and a soft brush or sponge",
          "Avoid detergents, abrasive pads and high-pressure jets",
          "Never stand or walk on the panels",
        ],
      },
      { type: "h2", text: "Checks beyond cleaning" },
      {
        type: "ul",
        items: [
          "Inverter alerts and daily generation in the monitoring app",
          "Loose or corroded cable connections and battery terminals",
          "Earthing and lightning protection",
          "Rust on the structure, especially near the coast",
        ],
      },
      {
        type: "tip",
        text: "A maintenance plan combines scheduled cleaning with these checks, so problems are caught before they cost you units.",
      },
      { type: "link", text: "See our after-sales and maintenance service", href: "/services/after-sales-services/" },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
