import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"

const content: ServicePageContent = {
  eyebrow: "AI STRATEGY & ROADMAPPING",
  headlineLine1: "Clarity before",
  headlineLine2: "commitment.",
  subtext: "We map where AI creates real leverage in your business before a single decision is made.",
  paragraphs: [
    "If you are looking to understand where AI actually fits in your business, this is where every engagement starts. We audit your workflows, revenue gaps, and operational structure before recommending anything.",
    "Most firms sell you tools first and figure out the fit later. We work the other way. Every recommendation we make is grounded in a precise diagnosis of your specific operation, not a generic AI playbook.",
    "By the end of the strategy engagement, you will have a clear roadmap that tells you exactly where AI creates leverage, what to build first, and what to avoid entirely.",
  ],
  leftCaption: "Operational audit and gap analysis",
  rightCaption: "AI opportunity mapping and prioritization",
  leftImage: "/strategy-audit.webp",
  rightImage: "/strategy-roadmap.webp",
  includedItems: [
    {
      title: "Operational Audit",
      description: "A deep review of your current workflows, tools, and processes to identify where friction and inefficiency live.",
    },
    {
      title: "AI Opportunity Map",
      description: "A prioritized list of where AI creates the highest leverage in your specific business, ranked by impact and feasibility.",
    },
    {
      title: "Build vs. Buy Analysis",
      description: "Clear guidance on what to build custom, what to purchase off the shelf, and what to avoid entirely.",
    },
    {
      title: "90-Day Roadmap",
      description: "A concrete action plan with sequenced priorities, resource requirements, and success metrics defined upfront.",
    },
  ],
  heroImage: "/hero-ai-strategy.webp",
  ctaHeadline: "Ready to see where AI fits?",
  ctaSubtext: "We start every engagement with strategy. No exceptions.",
}

export function AIStrategyPage() {
  return (
    <>
      <Navigation />
      <div style={{ paddingTop: "72px" }}>
        <ServicePageLayout content={content} />
        <Footer />
      </div>
    </>
  )
}
