import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { RelatedSystems } from "@/components/related-systems"
import { organizationSchema, buildServiceSchema, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/schema"

const pageSchemas = [
  organizationSchema,
  buildServiceSchema({
    name: "Client Response Infrastructure",
    description:
      "AI-driven intake, follow-up automation, and routing systems that ensure every lead receives a fast, qualified response. Designed for businesses that need to scale communication without adding staff.",
    url: "/client-response-infrastructure",
    serviceType: "Communication Automation and Lead Response Systems",
  }),
  buildWebPageSchema({
    name: "Client Response Infrastructure — BlackVault Group",
    description:
      "AI-powered intake, follow-up, and routing systems that ensure every lead gets a fast, qualified response, without adding headcount or manual work to your team.",
    url: "/client-response-infrastructure",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Client Response Infrastructure", url: "/client-response-infrastructure" },
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Client Response Infrastructure", url: "/client-response-infrastructure" },
  ]),
]

const content: ServicePageContent = {
  eyebrow: "CLIENT RESPONSE SYSTEMS",
  headlineLine1: "Faster response.",
  headlineLine2: "No added overhead.",
  subtext: "AI-driven systems that handle client communication, intake, and follow-up without adding headcount or slowing your team down.",
  paragraphs: [
    "Slow follow-up is a revenue problem. A lead that does not hear back within minutes is a lead that has already moved on. Most businesses lose deals not because of their product or pricing, but because their response infrastructure is not built to keep up with demand.",
    "We design and deploy the systems that close that gap, AI-powered intake flows, automated follow-up sequences, and intelligent routing logic that ensures every inquiry gets a qualified, timely response, regardless of when it arrives or how many come in at once.",
    "The result is a client-facing operation that feels premium and responsive at scale, without the staffing overhead. Your team engages when it matters. The system handles everything else.",
  ],
  leftCaption: "Response workflow audit and intake mapping",
  rightCaption: "Automation build and CRM integration",
  leftImage: "/advisory-sessions.webp",
  rightImage: "/advisory-decisions.webp",
  heroImage: "/hero-executive-advisory.webp",
  includedItems: [
    {
      title: "Response Workflow Audit",
      description: "A full review of how leads and client inquiries currently move through your business: where they come from, where they stall, and what it costs you.",
    },
    {
      title: "Intake Automation",
      description: "Structured intake systems that capture, qualify, and route new inquiries automatically, without manual intervention from your team.",
    },
    {
      title: "Follow-Up Systems",
      description: "Automated follow-up sequences built around your specific sales cycle, designed to stay active until a decision is made.",
    },
    {
      title: "CRM and Pipeline Integration",
      description: "Every system integrates cleanly into your existing CRM and pipeline tools so nothing falls through the cracks and your data stays current.",
    },
  ],
  ctaHeadline: "Never lose a lead to slow follow-up again.",
  ctaSubtext: "We build the infrastructure that keeps your pipeline moving.",
}

export function ClientResponseInfrastructurePage() {
  return (
    <>
      <PageSEO
        title="Client Response Infrastructure — BlackVault Group"
        description="AI-powered intake, follow-up, and routing systems that ensure every lead gets a fast, qualified response, without adding headcount or manual work to your team."
        canonicalPath="/client-response-infrastructure"
      />
      <JsonLd schema={pageSchemas} />
      <Navigation />
      <div style={{ paddingTop: "72px" }}>
        <ServicePageLayout content={content} />
        <RelatedSystems
          heading="RELATED COMMUNICATION SYSTEMS"
          items={[
            {
              label: "Voice AI Systems",
              description: "Extends your client response infrastructure to inbound calls — every call answered, qualified, and routed without live staff intervention.",
              path: "/voice-ai-systems",
            },
            {
              label: "Intelligent Workflows",
              description: "The workflow automation layer that powers your intake sequences, follow-up logic, and CRM routing from first contact to closed deal.",
              path: "/intelligent-workflows",
            },
            {
              label: "Operational AI Systems",
              description: "When client response infrastructure is part of a larger operational build, we design and integrate all components as a unified system.",
              path: "/operational-ai-systems",
            },
          ]}
        />
        <Footer />
      </div>
    </>
  )
}
