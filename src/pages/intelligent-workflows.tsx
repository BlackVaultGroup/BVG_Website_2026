import { Link } from "react-router-dom"
import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, buildServiceSchema, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/schema"

const pageSchemas = [
  organizationSchema,
  buildServiceSchema({
    name: "Intelligent Workflows",
    description:
      "End-to-end workflow automation that eliminates manual steps, approval delays, and repeated decisions. We map your processes, build the automation logic, and deploy systems that execute without supervision.",
    url: "/intelligent-workflows",
    serviceType: "Business Process Automation",
  }),
  buildWebPageSchema({
    name: "Intelligent Workflows — BlackVault Group",
    description:
      "We redesign how work moves through your business by mapping bottlenecks, automating decisions, and deploying workflow systems that eliminate execution lag permanently.",
    url: "/intelligent-workflows",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Intelligent Workflows", url: "/intelligent-workflows" },
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Intelligent Workflows", url: "/intelligent-workflows" },
  ]),
]

const content: ServicePageContent = {
  eyebrow: "INTELLIGENT WORKFLOWS",
  headlineLine1: "Work that runs",
  headlineLine2: "itself.",
  subtext: "We redesign how work moves through your business so your team stops managing processes and starts driving outcomes.",
  paragraphs: [
    "Most operational drag does not come from a lack of tools. It comes from how work moves between them. Approval chains that stall. Data that has to be re-entered manually. Decisions that get made the same way hundreds of times a week by people who should be focused on something else.",
    "We map every handoff, trigger, and decision point in your critical workflows, then design the logic that eliminates the manual steps. The result is not just automation. It is a fundamentally leaner operation where execution happens at the speed of the trigger, not the speed of whoever is available.",
    "We build for durability. Every workflow we design is documented, monitored after deployment, and iterated as your operation evolves. No black boxes. No fragile dependencies.",
  ],
  leftCaption: "Process mapping and bottleneck analysis",
  rightCaption: "Automation architecture and deployment",
  leftImage: "/automation-process.webp",
  rightImage: "/automation-architecture.webp",
  heroImage: "/hero-workflow-automation.webp",
  includedItems: [
    {
      title: "Workflow Mapping",
      description: "A complete diagram of your current processes showing every step, handoff, decision point, and delay that costs your operation time or money.",
    },
    {
      title: "Decision Logic Design",
      description: "We translate your repeating decisions into structured logic that runs automatically, consistently, and without human intervention.",
    },
    {
      title: "Automation Build",
      description: "We build and deploy the workflow systems, not just design them. Your team receives working solutions, not blueprints.",
    },
    {
      title: "Monitoring and Iteration",
      description: "After deployment we track performance, identify gaps, and refine systems as your operational needs evolve.",
    },
  ],
  ctaHeadline: "Stop paying for manual work.",
  ctaSubtext: "We build the systems that give your team their time back.",
}

const linkStyle: React.CSSProperties = {
  color: "#9A8E7E",
  textDecoration: "none",
  borderBottom: "1px solid rgba(184,134,26,0.25)",
}

export function IntelligentWorkflowsPage() {
  return (
    <>
      <PageSEO
        title="Intelligent Workflows — BlackVault Group"
        description="We redesign how work moves through your business by mapping bottlenecks, automating decisions, and deploying workflow systems that eliminate execution lag permanently."
        canonicalPath="/intelligent-workflows"
      />
      <JsonLd schema={pageSchemas} />
      <Navigation />
      <div style={{ paddingTop: "72px" }}>
        <ServicePageLayout content={content} />
        <div
          style={{
            backgroundColor: "#0C0A08",
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 1.25rem 4rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#9A8E7E",
              margin: 0,
            }}
          >
            Workflow automation is frequently paired with{" "}
            <Link to="/client-response-infrastructure" style={linkStyle}>
              client response infrastructure
            </Link>{" "}
            — together they remove the manual steps between inbound inquiry and qualified follow-up. Both are built as part of a broader{" "}
            <Link to="/operational-ai-systems" style={linkStyle}>
              operational AI system
            </Link>{" "}
            when your needs extend beyond a single process.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}
