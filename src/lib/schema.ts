const BASE_URL = "https://blackvaultgroup.com"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "BlackVault Group",
  alternateName: "BlackVault Group LLC",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 400,
    height: 80,
  },
  description:
    "BlackVault Group designs and deploys operational AI systems for founders and operators. We specialize in workflow automation, client response infrastructure, voice AI, and executive AI strategy.",
  areaServed: [
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "AdministrativeArea",
      name: "Virginia",
    },
    {
      "@type": "AdministrativeArea",
      name: "Arizona",
    },
  ],
  knowsAbout: [
    "Operational AI Systems",
    "Workflow Automation",
    "Business Process Automation",
    "AI Integration",
    "Voice AI",
    "Executive AI Strategy",
    "Client Response Infrastructure",
    "Revenue Operations",
  ],
  sameAs: [
    "https://www.linkedin.com/company/blackvaultgroup",
    "https://twitter.com/BlackVaultGroup",
  ],
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "BlackVault Group",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  inLanguage: "en-US",
}

interface ServiceSchemaOptions {
  name: string
  description: string
  url: string
  serviceType: string
  areaServed?: string
}

export function buildServiceSchema(opts: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}${opts.url}#service`,
    name: opts.name,
    description: opts.description,
    url: `${BASE_URL}${opts.url}`,
    serviceType: opts.serviceType,
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: opts.areaServed ?? "United States",
    audience: {
      "@type": "Audience",
      audienceType: "Business owners, founders, and executives",
    },
  }
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}

const FAQ_ITEMS = [
  {
    q: "How is BlackVault different from other AI agencies?",
    a: "We are a strategic consultancy. We do not sell tools or templates. We architect custom systems around your specific business problems and revenue goals.",
  },
  {
    q: "How long does it take to see results?",
    a: "Depending on scope, most clients see measurable operational impact within 30 to 60 days of deployment. We define what success looks like before we start, so there is no ambiguity.",
  },
  {
    q: "Do you work with businesses that have never used AI before?",
    a: "Yes. In fact, most of our most impactful engagements start from zero. A clean foundation often produces better results than inheriting a poorly implemented system.",
  },
  {
    q: "Will this disrupt our current operations?",
    a: "No. Our integration methodology is designed around your existing stack and workflows. Disruption is a sign of poor planning. We plan precisely.",
  },
  {
    q: "How do you handle data security and confidentiality?",
    a: "Every engagement is covered by a mutual NDA before any information is shared. Your data is yours. We never train on client data or share it with third parties.",
  },
  {
    q: "What if the system doesn\u2019t perform as expected?",
    a: "We define success before we start. If agreed milestones are not met, we stay engaged until they are. That is our standard.",
  },
  {
    q: "What size businesses do you work with?",
    a: "We work with businesses generating between $5M and $70M in annual revenue. Our engagements are not suited for pre-revenue companies. We build on existing operations, not speculation.",
  },
]

export function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }
}

export function buildWebPageSchema(opts: {
  name: string
  description: string
  url: string
  breadcrumb?: BreadcrumbItem[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}${opts.url}#webpage`,
    url: `${BASE_URL}${opts.url}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-US",
    ...(opts.breadcrumb
      ? { breadcrumb: buildBreadcrumbSchema(opts.breadcrumb) }
      : {}),
  }
}
