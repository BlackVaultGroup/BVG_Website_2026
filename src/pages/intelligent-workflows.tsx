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
      "AI workflow automation and business process automation for repeated work, delayed handoffs, and manual updates. We map your process, build the right logic, and keep people in control of important decisions.",
    url: "/intelligent-workflows",
    serviceType: "Business Process Automation",
  }),
  buildWebPageSchema({
    name: "Intelligent Workflows | BlackVault Group",
    description:
      "Build practical workflow automation around the way your business works. Improve repeated tasks, routing, updates, and handoffs without adding tools that your team cannot manage.",
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
  subtext: "Business automation and custom AI systems for repeated work, clear handoffs, and better operational follow-through.",
  paragraphs: [
    "Most operational drag does not come from a lack of tools. It comes from how work moves between them: approval chains that stall, data that is entered more than once, and routine decisions that take attention away from customers and higher-value work.",
    "We map the handoffs, triggers, and decision points in a workflow before we build anything. Then we decide whether a clearer rule, standard workflow automation, or an AI-assisted system will help. Important decisions and unusual cases should always have a clear human review point.",
    "We build for durability. Your team should understand what the workflow does, who owns it, how it is measured, and how to handle an exception. That is how operational automation stays useful as your business changes.",
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
      description: "We translate repeated decisions into clear logic, with human review and escalation where judgment is still needed.",
    },
    {
      title: "Automation Build",
      description: "We build practical workflow automation around your current tools, so your team receives a system they can use and manage.",
    },
    {
      title: "Monitoring and Iteration",
      description: "After deployment we track performance, identify gaps, and refine systems as your operational needs evolve.",
    },
  ],
  ctaHeadline: "Make repeated work easier to run.",
  ctaSubtext: "Start with the process that costs your team the most time or creates the most delay.",
}

export function IntelligentWorkflowsPage() {
  return (
    <>
      <PageSEO
        title="AI Workflow Automation for Business | BlackVault Group"
        description="Improve repeated work, handoffs, and manual updates with practical AI workflow automation and business process automation built around your team."
        canonicalPath="/intelligent-workflows"
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
