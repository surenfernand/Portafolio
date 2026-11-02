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
    title: "Meraki Arts",
    caption: "Artist portfolio · Concept design",
    category: "website",
    description:
      "An artist portfolio concept that gives pencil drawings room to shine and makes custom portrait enquiries easy to start.",
    features:
      "Proposed scope: artwork gallery, individual artwork pages, availability labels, and a custom commission enquiry journey.",
    service: "Business website",
  },
  {
    title: "Daily Goods",
    caption: "Lifestyle store · Concept design",
    category: "store",
    description:
      "An illustrative lifestyle store concept built around product discovery, thoughtful collections, and an approachable shopping experience.",
    features:
      "Proposed scope: product listings, collection filters, product details, cart, and checkout. These are concept features, not a working store in this template.",
    service: "Online store",
  },
  {
    title: "Studio Desk",
    caption: "Client portal · Concept design",
    category: "app",
    description:
      "An illustrative client workspace concept for keeping project requests, progress, and important information in one place.",
    features:
      "Proposed scope: authenticated client access, project overview, request management, and progress updates. This preview shows the proposed direction only.",
    service: "Custom web application",
  },
] as const;

export const projectFilters = [
  { id: "all", label: "All concepts" },
  { id: "website", label: "Business websites" },
  { id: "store", label: "Online stores" },
  { id: "app", label: "Web applications" },
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
