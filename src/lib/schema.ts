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
