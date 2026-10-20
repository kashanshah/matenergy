import type { Faq } from "./services";

// The questions are the ones on the live site's FAQ section.
export const generalFaqs: Faq[] = [
  {
    q: "What papers are needed for a solar installation?",
    a: "For the installation itself we only need access to your roof and a recent electricity bill so we can size the system. If you also apply for net metering with K-Electric, the application usually needs the registered consumer's CNIC, a recent paid bill and proof of ownership (or the owner's consent if you rent). We'll confirm the current list for your connection during the site visit.",
  },
  {
    q: "How do you evaluate the cost of a solar repair?",
    a: "We inspect the system first (panels, wiring, inverter, batteries and protection devices) and find the actual fault. You get a quote for parts and labour before any work starts. Faults covered by a manufacturer's warranty are claimed through the brand.",
  },
  {
    q: "What is the per-square-foot cost of panel installation?",
    a: "Solar isn't priced per square foot. The cost depends on the system size in kilowatts, the panel, inverter and battery brands you choose, and the mounting structure your roof needs. As a guide, each kilowatt of modern panels needs roughly 60–70 sq ft of shade-free roof. We quote each project after seeing the site.",
  },
  {
    q: "When should we check the battery connections?",
    a: "Have the terminals checked and tightened at every maintenance visit, roughly every six months. Check them straight away if backup time drops, the inverter shows a battery error, or the terminals look corroded or feel hot.",
  },
  {
    q: "How much backup time do we get from solar panels?",
    a: "Panels on their own don't give backup. Backup comes from the batteries in a hybrid or off-grid system. Backup time is roughly the usable battery capacity divided by the load you run: a 5 kWh battery powering 1 kW of fans, lights and a fridge lasts about five hours. We size the battery bank to the loads you want to keep on.",
  },
];
