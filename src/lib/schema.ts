const BASE_URL = "https://blackvaultgroupllc.com"
import { ARTICLES, type Article } from "@/content/articles"
import { FAQ_ITEMS } from "@/content/faqs"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "BlackVault Group LLC",
  alternateName: "BlackVault Group",
  url: BASE_URL,
  description:
    "BlackVault Group LLC designs and deploys operational AI systems for small and mid-sized businesses. We specialize in workflow automation, lead follow-up automation, voice AI, and executive AI strategy.",
  foundingLocation: {
    "@type": "Place",
    name: "Hampton Roads, Virginia",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "Operational AI Systems",
    "Workflow Automation",
    "Business Process Automation",
    "AI Integration",
    "Voice AI",
    "Executive AI Strategy",
    "Lead Follow-Up Automation",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    url: `${BASE_URL}/#contact`,
    availableLanguage: ["English"],
  },
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

export function buildFAQSchema() {
  return buildFAQPageSchema(FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a })))
}

export function buildFAQPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function buildCollectionPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/articles#collection`,
    url: `${BASE_URL}/articles`,
    name: "AI Automation Articles for Small Business",
    description: "Practical guides for evaluating AI consulting, implementation, delivery, and ownership.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntity: { "@type": "ItemList", itemListElement: ARTICLES.map((article, index) => ({ "@type": "ListItem", position: index + 1, url: `${BASE_URL}/articles/${article.slug}`, name: article.title })) },
  }
}

export function buildArticleSchema(article: Article) {
  const url = `${BASE_URL}/articles/${article.slug}`
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    image: `${BASE_URL}${article.image}`,
    datePublished: article.published,
    dateModified: article.modified,
    author: { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: "BlackVault Group LLC" },
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    url,
    inLanguage: "en-US",
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
