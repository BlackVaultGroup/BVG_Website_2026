const BASE_URL = "https://blackvaultgroup.com"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "BlackVault Group",
  alternateName: "BlackVault Group LLC",
  url: BASE_URL,
  description:
    "BlackVault Group builds lead-response, phone-answering, and workflow automation systems for small and mid-sized businesses.",
  areaServed: [
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  knowsAbout: [
    "Lead Response Automation",
    "AI Phone Answering",
    "Workflow Automation",
    "Business Process Automation",
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
      audienceType: "Small and mid-size business owners and operators",
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
    q: "How much does it cost?",
    a: "Scope drives the price: which systems we build, how many tools we integrate, and what it costs to run them. You receive a fixed quote before any work begins. No hourly billing, no surprises. See our pricing page for the engagement tiers we offer.",
  },
  {
    q: "How long until the system is live?",
    a: "It depends on scope. We agree on a timeline as part of the engagement. A single lead-response system is faster than a full operational build-out spanning multiple systems and integrations. We tell you the timeline before we start.",
  },
  {
    q: "What if the system does not work as expected?",
    a: "We define success criteria before we start. If agreed milestones are not met, we stay engaged until they are. That is our standard, not a sales promise.",
  },
  {
    q: "Do I need to change my existing tools?",
    a: "No. We build around your current stack. If a tool is holding you back, we will say so and explain why, but we do not require you to switch platforms to work with us.",
  },
  {
    q: "How do you handle data security?",
    a: "Every engagement is covered by a mutual NDA before any information is shared. Your data is yours. We never train on client data or share it with third parties.",
  },
  {
    q: "Is this a good fit for my business?",
    a: "If you rely on leads coming in, calls coming in, or manual follow-up to close business, the systems we build are relevant. We work with small and mid-sized businesses across industries. Book a call and we will tell you honestly whether we can help.",
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
