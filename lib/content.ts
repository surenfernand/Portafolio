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

export const plans = [
  {
    kicker: "A confident first step.",
    name: "Launch",
    prefix: "STARTING FROM",
    price: "8,999",
    currency: true,
    period: "One-time development fee",
    description:
      "One focused page to introduce your business and start conversations.",
    features: [
      "One page, up to 6 sections",
      "Responsive mobile layout",
      "Contact details & WhatsApp button",
      "1 revision round",
    ],
    cta: "Start with Launch",
    service: "Business website",
    featured: false,
    custom: false,
  },
  {
    kicker: "Built for small businesses.",
    name: "Business",
    prefix: "STARTING FROM",
    price: "19,999",
    currency: true,
    period: "One-time development fee",
    description:
      "A complete business website that makes your services easy to explore.",
    features: [
      "Up to 5 pages",
      "Working enquiry form",
      "Services & gallery sections",
      "Basic SEO setup",
      "2 revision rounds",
    ],
    cta: "Choose Business",
    service: "Business website",
    featured: true,
    tag: "POPULAR",
    custom: false,
  },
  {
    kicker: "More control. Room to grow.",
    name: "Growth",
    prefix: "STARTING FROM",
    price: "39,999",
    currency: true,
    period: "One-time development fee",
    description:
      "Manage your content and keep your website moving with your business.",
    features: [
      "Up to 8 pages",
      "Admin panel for agreed content",
      "Gallery or blog",
      "Analytics setup & training",
      "2 revision rounds",
    ],
    cta: "Explore Growth",
    service: "Business website",
    featured: false,
    custom: false,
  },
  {
    kicker: "Turn browsing into buying.",
    name: "Online Store",
    prefix: "STARTING FROM",
    price: "69,999",
    currency: true,
    period: "One-time development fee",
    description:
      "A standard online store with the essentials to sell and manage orders.",
    features: [
      "Up to 30 products",
      "Cart & checkout",
      "Product & order management",
      "One payment gateway integration",
      "Store management handover",
    ],
    cta: "Plan my store",
    service: "Online store",
    featured: false,
    custom: false,
  },
  {
    kicker: "For ideas beyond a website.",
    name: "Custom Software",
    prefix: "SCOPED AROUND YOU",
    price: "Request a quote",
    currency: false,
    period: "Custom quotation after discovery",
    description:
      "A solution shaped around your business needs, users, and workflows.",
    features: [
      "Customer portals & dashboards",
      "Booking systems & workflows",
      "Database & API integrations",
      "Features & milestones agreed together",
      "Quote after discovery",
    ],
    cta: "Discuss my idea",
    service: "Custom web application",
    featured: false,
    custom: true,
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
