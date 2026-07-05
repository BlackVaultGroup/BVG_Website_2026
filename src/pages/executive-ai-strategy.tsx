import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, buildServiceSchema, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/schema"

const pageSchemas = [
  organizationSchema,
  buildServiceSchema({
    name: "Executive AI Strategy",
    description:
      "A senior-level AI strategy engagement for founders and executives. We audit your operation, identify where AI creates real leverage, and deliver a clear roadmap before any technology is selected or budget committed.",
    url: "/executive-ai-strategy",
    serviceType: "AI Strategy Consulting",
  }),
  buildWebPageSchema({
    name: "Executive AI Strategy — BlackVault Group",
    description:
      "Senior AI strategy for founders and operators making high-stakes decisions. We assess your operation and map exactly where AI creates leverage before a single dollar is committed.",
    url: "/executive-ai-strategy",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Executive AI Strategy", url: "/executive-ai-strategy" },
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Executive AI Strategy", url: "/executive-ai-strategy" },
  ]),
]

const content: ServicePageContent = {
  eyebrow: "EXECUTIVE AI STRATEGY",
  headlineLine1: "Strategy first.",
  headlineLine2: "Every time.",
  subtext: "We assess your operation before recommending anything. No vendor agenda. No generic playbook.",
  paragraphs: [
    "Most businesses approach AI backwards. They adopt tools first and figure out the fit afterward. The result is fragmented systems, redundant subscriptions, and an operation that is more complex than it was before.",
    "We start with a precise diagnosis of your business: where revenue leaks, where decisions stall, where your team spends time on work that should not require them. Every recommendation comes out of that audit, not a template, not a trend.",
    "Whether you need a clear 90-day roadmap, guidance on a high-stakes AI investment, or a senior partner to advise your leadership team, this engagement gives you the strategic clarity that most operators only get by making expensive mistakes first.",
  ],
  leftCaption: "Operational audit and gap analysis",
  rightCaption: "AI opportunity mapping and decision support",
  leftImage: "/strategy-audit.webp",
  rightImage: "/advisory-decisions.webp",
  heroImage: "/hero-ai-strategy.webp",
  includedItems: [
    {
      title: "Operational Audit",
      description: "A deep review of your workflows, tools, and revenue structure to identify exactly where friction and inefficiency live.",
    },
    {
      title: "AI Opportunity Map",
      description: "A prioritized list of where AI creates the highest leverage in your specific business, ranked by impact and feasibility.",
    },
    {
      title: "Build vs. Buy Analysis",
      description: "Clear guidance on what to build custom, what to license off the shelf, and what to avoid entirely.",
    },
    {
      title: "90-Day Roadmap",
      description: "A concrete action plan with sequenced priorities, resource requirements, and success metrics defined upfront.",
    },
    {
      title: "Vendor Evaluation",
      description: "Independent assessment of AI tools and platforms with no financial relationship to any of them.",
    },
    {
      title: "Board and Leadership Prep",
      description: "Support preparing your leadership team for AI strategy presentations, investment decisions, and long-term planning.",
    },
  ],
  ctaHeadline: "Ready to see where AI fits?",
  ctaSubtext: "We start every engagement with strategy. No exceptions.",
}

export function ExecutiveAIStrategyPage() {
  return (
    <>
      <PageSEO
        title="Executive AI Strategy — AI Audit & Roadmap for Small Business | BlackVault Group"
        description="Senior AI strategy for founders and operators making high-stakes decisions. We assess your operation and map exactly where AI creates leverage before a single dollar is committed."
        canonicalPath="/executive-ai-strategy"
      />
      <JsonLd schema={pageSchemas} />
      <Navigation />
      <div style={{ paddingTop: "72px" }}>
        <ServicePageLayout content={content} />
        <Footer />
      </div>
    </>
  )
}
