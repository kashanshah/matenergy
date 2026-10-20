// Copy taken from the live matenergy.com.pk site, lightly edited for grammar.

export const intro =
  "At MAT Energy, we deliver smart, sustainable solar solutions for homes and businesses. From personalised Home Energy Audits to comprehensive Commercial Solar Systems, our expert team is here to help you harness clean energy, cut costs, and take control of your power. Join us in building a future powered by the sun.";

export const about = {
  title: "Empowering lives with smarter energy solutions",
  text: "MAT Energy leads in solar solutions, offering tailored On-Grid and Off-Grid residential options, including Home Energy Audits. For businesses, our Commercial Solar Solutions come with detailed cost analyses. Post-installation, our commitment continues with dedicated After Sales Services, ensuring sustained efficiency and client satisfaction. We are your go-to for innovative, efficient, and sustainable energy solutions.",
  specialties: ["Reduced energy expenses", "Eco-friendly power", "Boost your home's value", "Freedom from energy bills"],
};

export const whyUs = {
  title: "Reasons to choose MAT Energy",
  paragraphs: [
    "MAT Energy (Pvt.) Ltd. specialises in delivering cost-effective and sustainable solar energy solutions. Our experienced professionals are dedicated to providing innovative solar technology tailored to your unique energy needs.",
    "We offer customisable solar solutions that not only save you money but also simplify your life. From design to installation, our team ensures long-term cost savings while reducing your environmental impact. Our user-friendly, low-maintenance solar panels, coupled with exceptional customer service, guarantee a seamless experience.",
  ],
  points: [
    {
      title: "Expert installation",
      text: "Our certified technicians ensure seamless, safe and efficient solar installations, tailored to your property for maximum performance.",
    },
    {
      title: "Low-cost operation",
      text: "Switching to solar cuts your energy bills significantly. Our systems are designed for long-term savings with minimal maintenance.",
    },
    {
      title: "Expert solar workers",
      text: "Our team is made up of experienced solar professionals who bring precision, knowledge and a passion for clean energy to every project.",
    },
    {
      title: "Modern technology",
      text: "We use the latest solar technology to deliver smarter, faster and more reliable energy solutions.",
    },
  ],
};

// Figures shown on the live site. TODO: confirm with MAT Energy before launch.
export const stats = [
  { value: "20+", label: "Solar experts for installation & repair" },
  { value: "5,000+", label: "Installations completed" },
  { value: "100%", label: "Client satisfaction" },
];

export const methodology = {
  title: "Our methodology",
  intro:
    "We apply best practices at every stage, ensuring smooth execution and reliable results. Daily updates from our team keep you informed and confident throughout the project.",
  steps: [
    {
      title: "Survey & engineering design",
      text: "Our team thoroughly examines project details, considering site survey data and engineering design.",
    },
    {
      title: "Project plan",
      text: "A project plan is crafted from the available data, assessing feasibility and challenges.",
    },
    {
      title: "Proposal",
      text: "The final proposal is submitted to you for consideration and approval.",
    },
    {
      title: "Execution",
      text: "Our well-organised project management team follows proven technical and management practices to deliver the project.",
    },
    {
      title: "Daily progress reports",
      text: "Your Project Manager or Site Engineer sends daily progress reports until the system is handed over.",
    },
  ],
};

export type Testimonial = { name: string; company: string; title: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: "Arsalan Bhatti",
    company: "Habib Metropolitan Bank",
    title: "Excellent customer service",
    quote:
      "They have a very professional team of experienced individuals and their after-sales service has been excellent. They are always a call away whenever I call.",
  },
  {
    name: "Junaid Hasan",
    company: "NKR Cooling Tower",
    title: "Customisable solutions",
    quote:
      "The MAT Energy team was very helpful in designing a customised solar solution for our needs, to deal with hefty bills and the load-shedding issues in our area. As promised, they had the system up and running within the stated time. I will highly recommend them to anyone planning to go solar.",
  },
];

export const companyVideo = { youtubeId: "V04Zirfn0bM", title: "MAT Energy company video" };
