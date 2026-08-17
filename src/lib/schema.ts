const BASE_URL = "https://blackvaultgroup.com"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "BlackVault Group",
  alternateName: "BlackVault Group LLC",
  url: BASE_URL,
  description:
    "BlackVault Group builds practical AI systems for small and mid-size businesses: lead follow-up automation, voice AI, workflow automation, and custom integrations.",
  areaServed: [
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  knowsAbout: [
    "Lead Follow-Up Automation",
    "Voice AI Systems",
    "Workflow Automation",
    "AI Integration",
    "Executive AI Strategy",
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
    q: "What Can an AI Consultant Actually Do for My Small Business?",
    a: "We help businesses understand what should be improved, what should be automated, and where the greatest opportunities for operational improvement exist. The work ranges from lead follow-up automation to workflow automation to voice AI systems.",
  },
  {
    q: "How Do You Price Your Services?",
    a: "Scope drives the price: which systems we build, how many tools we integrate, and what it costs to run them. You receive a fixed quote before any work begins — no hourly billing, no surprises. See our Pricing page for the engagement tiers we offer.",
  },
  {
    q: "How Long Does It Take to See Results?",
    a: "It depends on scope. We define what success looks like before we start, so there is no ambiguity about what we're working toward. Timelines are agreed upon as part of the engagement.",
  },
  {
    q: "How Do You Handle Data Security and Confidentiality?",
    a: "Every engagement is covered by a mutual NDA before any information is shared. Your data is yours. We never train on client data or share it with third parties.",
  },
  {
    q: "What If the System Doesn't Perform as Expected?",
    a: "We define success before we start. If agreed milestones are not met, we stay engaged until they are. That is our standard.",
  },
  {
    q: "How Do I Know If My Business Has Operational Bottlenecks?",
    a: "If progress depends on specific people, leads are slipping, or teams spend significant time on manual work, operational bottlenecks may exist. A strategy audit can identify where the greatest opportunities are.",
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
