// All page copy lives here so text can be edited without touching components.
// [Bracketed placeholders] are intentional — fill them in with real content before launch.

import content from "*.webp";

export const site = {
  name: "Four Band Agency",
  logo: "/logo.png",
  domain: "fourbandagency.com",
  url: "https://fourbandagency.com",
  email: "hello@mail.fourbandagency.com",
  calendlyUrl: "[CALENDLY LINK]",
  // Official business X profile. Team photos link here once this is a real https:// URL.
  xUrl: "[X PROFILE URL]",
};

export const bookingModal = {
  title: "Book a free call",
  intro:
    "Tell us a little about your project and when suits you. We reply within 24 hours to confirm a time.",
  submit: "Send request",
  submitting: "Sending…",
  successTitle: "Request sent",
  successText:
    "Thanks, we've got your details. We'll be in touch within 24 hours to confirm your call.",
  close: "Close",
};

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
  ],
  cta: "Contact us",
};

export const hero = {
  headingSegments: [
    {
      type: "text" as const,
      text: "The design & dev team that turns your idea into a ",
    },
    { type: "word" as const, text: "product", variant: "dark" as const },
    { type: "text" as const, text: ", " },
    { type: "word" as const, text: "website", variant: "dark" as const },
    { type: "text" as const, text: " or " },
    { type: "word" as const, text: "store", variant: "lime" as const },
    { type: "text" as const, text: " people love." },
  ],
  subtext:
    "Strategy, UI/UX design and development under one roof, for startups and growing companies that need to ship fast without cutting corners.",
  primaryCta: "Book a free call",
  secondaryCta: "View our work",
};

export const logos = {
  text: "Trusted by founders and brands worldwide",
  // Add a `logo` path (e.g. "/logos/supaquery.svg") to show the real logo instead of the text wordmark.
  clients: [
    { name: "Supaquery" },
    { name: "Many" },
    { name: "FastIQ" },
    { name: "NGN Games" },
    { name: "Wootella" },
  ] as { name: string; logo?: string }[],
};

export type Stat =
  | {
      target: number;
      format: (n: number) => string;
      label: string;
      lime?: boolean;
    }
  | { display: string; label: string; lime?: boolean };

export const results: { stats: Stat[] } = {
  stats: [
    { target: 15, format: (n) => `${n}+`, label: "Projects shipped" },
    { target: 5, format: (n) => `${n}+`, label: "Years of experience" },
    { display: "50%", label: "Best client result" },
    {
      target: 4,
      format: (n) => `${n} wks`,
      label: "Avg. time to launch",
      lime: true,
    },
  ],
};

export const services = {
  eyebrow: "Services",
  heading: "One team from the first {{idea}} to {{production.}}",
  aside:
    "We don't stop at the website. We design, build and run complete digital products: marketing sites, web apps, AI features, data systems and the infrastructure underneath, built for real users from day one.",
  cards: [
    {
      number: "01",
      title: "Design",
      icon: "design" as const,
      dark: false,
      items: [
        "Product & UX design",
        "UI design for websites and apps",
        "Website design & redesign",
        "Responsive layouts for every screen",
        "Design systems & component libraries",
        "Visual design & brand graphics",
      ],
    },
    {
      number: "02",
      title: "Websites & Frontend",
      icon: "development" as const,
      dark: true,
      items: [
        "Business websites & landing pages",
        "React & Next.js development",
        "TypeScript, JavaScript & Tailwind CSS",
        "Forms, WhatsApp, social & Maps integrations",
        "Speed & mobile optimization",
        "Testing, deployment & launch",
      ],
    },
    {
      number: "03",
      title: "Web Apps & SaaS",
      icon: "apps" as const,
      dark: false,
      items: [
        "SaaS platforms & marketplaces",
        "User accounts, roles & permissions",
        "Subscriptions & one-time payments",
        "Billing webhooks, reconciliation & plan access",
        "Realtime apps with live updates",
        "Multiplayer games & matchmaking",
        "Third-party API integrations",
      ],
    },
    {
      number: "04",
      title: "Product Engineering",
      icon: "product" as const,
      dark: true,
      items: [
        "Product discovery & technical scoping",
        "0→1 builds: from rough idea to working software",
        "Full-stack development, front to back",
        "Backend & API development",
        "Database design & data modelling",
        "System design & technical strategy",
        "End-to-end ownership, from scope to production",
      ],
    },
    {
      number: "05",
      title: "AI & Automation",
      icon: "ai" as const,
      dark: true,
      items: [
        "AI features built into your product",
        "AI agents that handle multi-step tasks",
        "Smarter search, classification & ranking",
        "Structured data from unstructured content",
        "AI across multiple providers, with fallbacks",
        "Workflow automation & background jobs",
        "Retries & failure handling, so nothing gets dropped",
      ],
    },
    {
      number: "06",
      title: "Data, Search & Analytics",
      icon: "data" as const,
      dark: false,
      items: [
        "Product analytics & event tracking",
        "Funnels, conversion & retention insights",
        "Realtime dashboards",
        "Turning anonymous visitors into known customers",
        "Search with indexing & relevance ranking",
        "Large-scale data ingestion & cleanup",
        "Deduplication & matching records across sources",
      ],
    },
    {
      number: "07",
      title: "Infrastructure & Reliability",
      icon: "infra" as const,
      dark: true,
      items: [
        "Fast, serverless hosting at the edge",
        "Cloudflare databases, storage & queues",
        "Event-driven systems & caching",
        "CI/CD with automated tests & type checks",
        "Verified deployments on every release",
        "Production monitoring & debugging",
      ],
    },
    {
      number: "08",
      title: "Content & Growth",
      icon: "growth" as const,
      dark: false,
      items: [
        "Website & landing page copy",
        "Blog, B2B & social media content",
        "Technical documentation",
        "Technical & on-page SEO",
        "Content strategy & organic growth",
        "Lead generation & prospecting systems",
      ],
    },
  ],
  retainer: {
    text: "Need a team on call? Monthly product & engineering partnership for founders who'd rather not hire in-house.",
    cta: "Ask about retainers",
  },
};

export const caseStudies = {
  eyebrow: "Work",
  heading: "Work that {{moved the needle.}}",
  cta: "All projects",
};

export const industries = {
  eyebrow: "Industries",
  heading: "Industries we {{know inside out}}",
  text: "We partner with ambitious teams across fintech, education, real estate, productivity, and consumer technology. Whether you’re launching something new or improving an existing product, we focus on turning complex ideas into simple, thoughtful digital experiences that people actually want to use.",
  tags: [
    { label: "EdTech" },
    { label: "Fintech", lime: true },
    { label: "AI products" },
    { label: "Fashion & E-commerce" },
    { label: "SaaS" },
    { label: "Media" },
    { label: "Early-stage startups" },
  ],
};

export const about = {
  eyebrow: "About",
  heading: "Senior people. {{On every project.}}",
  text: "We believe the people who do the work should be the people you work with. That’s why senior talent is involved directly in every project from the first conversation to the final details. No unnecessary account layers, no handoffs, just experienced people focused on understanding your goals, solving the right problems, and delivering work that moves your business forward.",
};

export const process = {
  eyebrow: "Process",
  heading: "How we {{work together}}",
  steps: [
    { step: "STEP 01", title: "Discovery call" },
    { step: "STEP 02", title: "Strategy & design" },
    { step: "STEP 03", title: "Development" },
    { step: "STEP 04", title: "Launch & grow" },
  ],
};

export const testimonialsSection = {
  eyebrow: "Testimonials",
  heading: "What Our Clients {{Say}}",
  text: "Don't just take our word for it. Here's what clients have to say about working with us.",
};

export const cta = {
  heading: "Ready to build {{something good?}}",
  subtext:
    "Tell us what you're working on. We reply within 24 hours with next steps, not a sales pitch.",
  primaryCta: "Book a free call",
};

export const footer = {
  brandBlurb: "Based in Nigeria, working worldwide.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "Design", href: "#services" },
        { label: "Product Engineering", href: "#services" },
        { label: "AI & Automation", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  follow: [
    { label: "X", href: "https://x.com/fourbandagency?s=11" },
    { label: "LinkedIn", href: "" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
