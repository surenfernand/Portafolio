export const services = [
  {
    icon: "▤",
    title: "Business websites",
    description:
      "Give your business a clear, confident home online. Built around your story and the next step you want visitors to take.",
    points: [
      "Custom, responsive design",
      "Services, portfolios & landing pages",
      "Contact & enquiry journeys",
      "Search-friendly page structure",
    ],
  },
  {
    icon: "▱",
    title: "Online stores",
    description:
      "Make discovering, choosing, and ordering your products feel simple, whether you sell ten pieces or a growing collection.",
    points: [
      "Product & collection pages",
      "Cart & checkout experiences",
      "Inventory & order management",
      "Payment & delivery integrations",
    ],
  },
  {
    icon: "⌘",
    title: "Custom web applications",
    description:
      "Bring a specific idea to life. Useful tools that fit the way your business operates, with the details worked out together.",
    points: [
      "Admin dashboards & portals",
      "Booking & request workflows",
      "Database & API integrations",
      "Ongoing improvements & support",
    ],
  },
] as const;

export const projects = [
  {
    slug: "meraki-arts",
    origin: "independent",
    title: "MeRaki Arts",
    caption: "Artist website",
    category: "website",
    description:
      "A creative digital space showcasing original artwork, curated collections, and personalized art commissions through an elegant, easy-to-explore website.",
    features:
      "Gallery filters, artwork lightboxes, and a shopping bag stay in the browser. Prices are shown in LKR, and the pages do not take payment. The repository includes five visual themes.",
    service: "Business website",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: null,
    images: {
      desktop: "/projects/meraki-arts/showcase.webp",
    },
    alt: "Laptop, tablet, and phone showing the MeRaki Arts homepage",
  },
  {
    slug: "car-service",
    origin: "independent",
    title: "AutoService",
    caption: "Service dashboard",
    category: "app",
    description:
      "A modern service management dashboard designed to simplify automotive workshop operations, from customer and vehicle records to appointment scheduling.",
    features:
      "The interface ships with sample records, including the customer, vehicle, and revenue figures on the dashboard. It is not connected to a public website.",
    service: "Custom web application",
    technologies: ["React", "TypeScript", "Vite"],
    live: null,
    images: {
      desktop: "/projects/car-service/showcase.webp",
    },
    alt: "Laptop, tablet, and phone showing the AutoService dashboard",
  },
  {
    slug: "butchers-online",
    origin: "independent",
    title: "Butchers Online",
    caption: "Online butcher shop",
    category: "store",
    description:
      "A digital platform connecting customers with local butcher shops through location-based search, detailed business profiles, and convenient discovery tools.",
    features:
      "The public site searches verified butcher shops by postal code, city, meat specialty, or business name.",
    service: "Online store",
    technologies: ["Next.js", "TypeScript", "Payload", "PostgreSQL"],
    live: "https://butchersonline.ca",
    images: {
      desktop: "/projects/butchers-online/showcase.webp",
    },
    alt: "Laptop, tablet, and phone showing a butcher shop directory with search and shop filters",
  },
  {
    slug: "mygroup-iq",
    origin: "professional",
    title: "MyGroupIQ",
    caption: "Benefits benchmarking",
    category: "app",
    description:
      "Helped enhance a benefits benchmarking platform that enables businesses to assess their group benefits and explore insights for more informed decisions.",
    features:
      "The homepage invites companies to compare a benefits plan with similar employers. WordPress is the verified platform.",
    service: "Custom web application",
    technologies: ["WordPress"],
    live: "https://www.mygroupiq.com",
    images: {
      desktop: "/projects/professional/mygroup-iq/showcase.webp",
    },
    alt: "Laptop, tablet, and phone showing the MyGroupIQ homepage",
  },
  {
    slug: "sha-rent-a-car",
    origin: "professional",
    title: "Sha Rent a Car",
    caption: "Car rental",
    category: "booking",
    description:
      "Worked on a car rental website that showcases available vehicles and helps travelers explore convenient rental options across Sri Lanka.",
    features:
      "The homepage introduces the rental service and a way to reserve a vehicle. The site technology was not exposed on the public page, so no technology is listed.",
    service: "Business website",
    technologies: [],
    live: null,
    images: {
      desktop: "/projects/professional/sha-rent-a-car/showcase.webp",
    },
    alt: "Laptop, tablet, and phone showing the Sha Rent a Car homepage",
  },
  {
    slug: "drink-and-drive",
    origin: "professional",
    title: "Drink and Drive",
    caption: "Chauffeur service",
    category: "booking",
    description:
      "Contributed to a chauffeur-service website focused on connecting customers with professional drivers through a straightforward booking experience.",
    features:
      "The homepage introduces the driver service and a way to book a ride. Next.js is the verified platform.",
    service: "Business website",
    technologies: ["Next.js"],
    live: null,
    images: {
      desktop: "/projects/professional/drink-and-drive/desktop.webp",
      mobile: "/projects/professional/drink-and-drive/mobile.webp",
    },
    alt: "Drink and Drive homepage introducing a driver service in Sri Lanka, with book and WhatsApp actions",
  },
  {
    slug: "advisor-capital",
    origin: "professional",
    title: "Advisor Capital",
    caption: "Advisory practices",
    category: "website",
    description:
      "Contributed to this website for financial advisors in Canada who want to buy, sell, or finance a practice.",
    features:
      "The public site presents valuation tools, guidance, and resources for buying or selling an advisory practice. WordPress is the verified platform.",
    service: "Business website",
    technologies: ["WordPress"],
    live: "https://www.advisorcapital.ca",
    images: {
      desktop: "/projects/professional/advisor-capital/showcase.png",
    },
    alt: "Advisor Capital homepage for buying or selling a financial advisory practice",
  },
  {
    slug: "appetit-go",
    origin: "professional",
    title: "Appétit Go",
    caption: "Online grocery",
    category: "store",
    description:
      "Contributed to Appétit Go, an online grocery. The public homepage currently announces that the store has closed.",
    features:
      "The live page is the grocery homepage, and it now carries a closure notice. WordPress is the verified platform.",
    service: "Online store",
    technologies: ["WordPress"],
    live: "https://www.appetitgo.ca",
    images: {
      desktop: "/projects/professional/appetit-go/showcase.png",
    },
    alt: "Appétit Go online grocery homepage",
  },
  {
    slug: "arctaiga",
    origin: "professional",
    title: "Arctaiga",
    caption: "Business insights",
    category: "website",
    description:
      "Contributed to the Arctaiga website. The homepage presents insights and technology for complex business challenges.",
    features:
      "The public homepage introduces insights and technology for complex business challenges. WordPress is the verified platform.",
    service: "Business website",
    technologies: ["WordPress"],
    live: "https://www.arctaiga.com",
    images: {
      desktop: "/projects/professional/arctaiga/showcase.png",
    },
    alt: "Arctaiga homepage about insights and technology for business challenges",
  },
  {
    slug: "empower-nfp",
    origin: "professional",
    title: "Empower NFP",
    caption: "Nonprofit solutions",
    category: "website",
    description:
      "Contributed to the Empower NFP website, which presents data-driven solutions for nonprofits.",
    features:
      "The public site introduces scalable, data-driven solutions for nonprofits. WordPress is the verified platform.",
    service: "Business website",
    technologies: ["WordPress"],
    live: "https://www.empowernfp.com",
    images: {
      desktop: "/projects/professional/empower-nfp/showcase.png",
    },
    alt: "Empower NFP homepage for nonprofit solutions",
  },
  {
    slug: "envision-arc",
    origin: "professional",
    title: "EnvisionArc",
    caption: "Data platform",
    category: "website",
    description:
      "Contributed to the EnvisionArc website. The homepage introduces data that is envisioned, connected, and activated.",
    features:
      "The public homepage presents the data platform. WordPress is the verified platform.",
    service: "Business website",
    technologies: ["WordPress"],
    live: "https://envisionarc.com",
    images: {
      desktop: "/projects/professional/envision-arc/showcase.png",
    },
    alt: "EnvisionArc homepage introducing a connected data platform",
  },
  {
    slug: "fg-wealth",
    origin: "professional",
    title: "FG Wealth",
    caption: "Wealth solutions",
    category: "website",
    description:
      "Contributed to the FG Wealth website, which presents investment and insurance wealth solutions.",
    features:
      "The public homepage introduces the firm’s investment and insurance services. WordPress is the verified platform.",
    service: "Business website",
    technologies: ["WordPress"],
    live: "https://www.fgwealth.ca",
    images: {
      desktop: "/projects/professional/fg-wealth/showcase.png",
    },
    alt: "FG Wealth homepage for investment and insurance solutions",
  },
  {
    slug: "filet-gourmet",
    origin: "professional",
    title: "FiletGourmet",
    caption: "Butcher and grocery",
    category: "store",
    description:
      "Contributed to FiletGourmet, an online shop for a butcher and fine grocery, with prepared dishes and subscriptions.",
    features:
      "The public homepage leads to the shop and subscriptions. WordPress is the verified platform.",
    service: "Online store",
    technologies: ["WordPress"],
    live: "https://www.filetgourmet.ca",
    images: {
      desktop: "/projects/professional/filet-gourmet/showcase.png",
    },
    alt: "FiletGourmet homepage for a butcher and fine grocery shop",
  },
  {
    slug: "maison-rolland",
    origin: "professional",
    title: "Maison Rolland",
    caption: "Pâtisserie",
    category: "website",
    description:
      "Contributed to the Maison Rolland website for the pâtisserie, which has operated since 1940.",
    features:
      "The public homepage presents the French pâtisserie and its history since 1940. WordPress is the verified platform.",
    service: "Business website",
    technologies: ["WordPress"],
    live: "https://patisserie-rolland.empowerdigitaldata.com",
    images: {
      desktop: "/projects/professional/maison-rolland/showcase.png",
    },
    alt: "Maison Rolland homepage for a French pâtisserie",
  },
  {
    slug: "monel-bookkeeping",
    origin: "professional",
    title: "Monel Bookkeeping",
    caption: "Bookkeeping",
    category: "website",
    description:
      "Contributed to the Monel Book Keeping website for the bookkeeping practice.",
    features:
      "The public site is the Monel Book Keeping homepage. WordPress is the verified platform.",
    service: "Business website",
    technologies: ["WordPress"],
    live: "https://mbk.empowerdigitaldata.com",
    images: {
      desktop: "/projects/professional/monel-bookkeeping/showcase.png",
    },
    alt: "Monel Book Keeping homepage",
  },
  {
    slug: "studio-111",
    origin: "professional",
    title: "Studio 111",
    caption: "Bookings",
    category: "booking",
    description:
      "Contributed to Studio 111 Bookings, a practitioner sign-in for scheduling time.",
    features:
      "The public page asks an approved practitioner to request a sign-in link. The site technology was not exposed on the page, so no technology is listed.",
    service: "Business website",
    technologies: [],
    live: "https://studio111.empowerdigitaldata.com",
    images: {
      desktop: "/projects/professional/studio-111/showcase.png",
    },
    alt: "Studio 111 bookings page",
  },
  {
    slug: "tlc-coaching",
    origin: "professional",
    title: "TLC Coaching",
    caption: "Member portal",
    category: "app",
    description:
      "Contributed to the TLC Coaching member portal for chiropractic professionals.",
    features:
      "The public page introduces practice tools, events, a resource library, and member or admin sign-in. The site technology was not exposed on the page, so no technology is listed.",
    service: "Custom web application",
    technologies: [],
    live: "https://devtlc.empowerdigitaldata.com",
    images: {
      desktop: "/projects/professional/tlc-coaching/showcase.png",
    },
    alt: "TLC Coaching member portal",
  },
] as const;

export const projectFilters = [
  { id: "all", label: "All projects" },
  { id: "store", label: "E-commerce" },
  { id: "website", label: "Business websites" },
  { id: "booking", label: "Booking" },
  { id: "app", label: "Web applications" },
] as const;

export const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Payload",
] as const;

export type ProjectFilter = (typeof projectFilters)[number]["id"];

export const steps = [
  {
    number: "01 /",
    title: "Understand",
    description:
      "We talk about your business, your audience, and what your website needs to achieve. Then we agree on the scope.",
  },
  {
    number: "02 /",
    title: "Design",
    description:
      "We map the pages and create a visual direction. You review the experience before development begins.",
  },
  {
    number: "03 /",
    title: "Build & refine",
    description:
      "The design becomes a working website. We check the agreed features, content, and layouts across screen sizes.",
  },
  {
    number: "04 /",
    title: "Launch & hand over",
    description:
      "We connect the domain, prepare the launch, and show you how to manage your site. Ongoing care is optional.",
  },
] as const;

export const principles = [
  {
    title: "Clear communication",
    detail: "Scope and decisions in plain language.",
  },
  {
    title: "Thoughtful details",
    detail: "Designed for the people using it.",
  },
  {
    title: "A practical foundation",
    detail: "Room to grow as your needs change.",
  },
  {
    title: "A proper handover",
    detail: "Understand what you’re getting.",
  },
] as const;

export const serviceOptions = [
  "Business website",
  "Online store",
  "Custom web application",
  "Website redesign",
  "Not sure yet",
] as const;

export const packageOptions = [
  "Help me decide",
  "Launch",
  "Business",
  "Growth",
  "Online Store",
  "Custom Software",
  "Website Hosting & Maintenance",
] as const;

export const whatsapp = {
  display: "+94 75 826 8265",
  href: "https://wa.me/94758268265",
} as const;

export const plans = [
  {
    name: "Launch",
    highlight: "1 page · Up to 6 sections",
    price: "From LKR 8,999",
    service: "Business website",
    featured: false,
    icon: "launch",
  },
  {
    name: "Business",
    highlight: "Up to 5 pages · Enquiry form",
    price: "From LKR 19,999",
    service: "Business website",
    featured: true,
    icon: "business",
  },
  {
    name: "Growth",
    highlight: "Up to 8 pages · Content admin",
    price: "From LKR 39,999",
    service: "Business website",
    featured: false,
    icon: "growth",
  },
  {
    name: "Online Store",
    highlight: "Up to 30 products · Cart & checkout",
    price: "From LKR 69,999",
    service: "Online store",
    featured: false,
    icon: "store",
  },
  {
    name: "Custom Software",
    highlight: "Dashboards · Portals · Integrations",
    price: "Request a quote",
    service: "Custom web application",
    featured: false,
    icon: "custom",
  },
] as const;

export const faqs = [
  {
    question: "Can you work with my existing website?",
    answer:
      "Yes. Start with a review of your current site and goals. The proposal can cover focused improvements, a redesign, or a rebuild depending on what is practical.",
  },
  {
    question: "How long does a website take?",
    answer:
      "The timeline depends on the page count, features, content readiness, and feedback. A schedule is agreed after scoping, rather than promising the same turnaround for every project.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "If self-management is part of the scope, the site can include an admin area for the content you need to change. Training and access are included in the agreed handover.",
  },
  {
    question: "Do you offer hosting and ongoing maintenance?",
    answer:
      "Hosting and care can be included as separate services. The quotation should specify backups, updates, support limits, renewal costs, and what is covered.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A description of your business, your goals, a rough budget, and any preferred launch date. Existing branding, copy, images, and example websites are helpful too.",
  },
] as const;
