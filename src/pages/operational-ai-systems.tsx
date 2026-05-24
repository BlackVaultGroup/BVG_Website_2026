import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, buildServiceSchema, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/schema"

const pageSchemas = [
  organizationSchema,
  buildServiceSchema({
    name: "Operational AI Systems",
    description:
      "Custom AI infrastructure built around your existing tools, data flows, and operational structure. We design, integrate, and document systems that run your operation without adding complexity or vendor dependency.",
    url: "/operational-ai-systems",
    serviceType: "AI System Integration and Deployment",
  }),
  buildWebPageSchema({
    name: "Operational AI Systems — BlackVault Group",
    description:
      "AI systems designed around your actual workflows and existing stack. We build, integrate, and document custom AI infrastructure that scales with your operation.",
    url: "/operational-ai-systems",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Operational AI Systems", url: "/operational-ai-systems" },
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Operational AI Systems", url: "/operational-ai-systems" },
  ]),
]

const content: ServicePageContent = {
  eyebrow: "OPERATIONAL AI SYSTEMS",
  headlineLine1: "Systems that run",
  headlineLine2: "your operation.",
  subtext: "We build custom systems designed around how your business actually works. Not how a generic platform assumes it does.",
  paragraphs: [
    "We build custom infrastructure tailored to your workflows, communication patterns, internal processes, and operational requirements.",
    "We analyze your entire operational structure — tools, data, handoffs, and decision logic — before designing anything. The result is AI infrastructure that integrates cleanly into your existing environment, accelerates the work your team already does, and scales without becoming a liability.",
    "Every build is scoped around the operational objective first, then engineered to support scalability, usability, and long-term ownership. Most engagements include workflow automation and client response components built as part of the same unified system.",
  ],
  leftCaption: "Stack analysis and integration planning",
  rightCaption: "Custom build and operational deployment",
  leftImage: "/integration-stack.webp",
  rightImage: "/integration-build.webp",
  heroImage: "/hero-custom-integration.webp",
  includedItems: [
    {
      title: "Operational Systems Audit",
      description: "A full review of your tools, data infrastructure, workflows, and technical environment before any build begins.",
    },
    {
      title: "Architecture Design",
      description: "A custom-designed system blueprint showing exactly what gets built, how it connects to your existing stack, and what it replaces.",
    },
    {
      title: "Integration Build",
      description: "AI solutions built specifically for your operation and deployed cleanly into your environment with zero disruption.",
    },
    {
      title: "Handoff and Scaling Documentation",
      description: "Full documentation of every system we build so your team understands, maintains, and scales it independently.",
    },
  ],
  ctaHeadline: "Your stack. Made intelligent.",
  ctaSubtext: "We build what fits your operation. Nothing extra.",
}

export function OperationalAISystemsPage() {
  return (
    <>
      <PageSEO
        title="Operational AI Systems — BlackVault Group"
        description="AI systems designed around your actual workflows and existing stack. We build, integrate, and document custom AI infrastructure that scales with your operation."
        canonicalPath="/operational-ai-systems"
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
