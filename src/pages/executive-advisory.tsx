import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"

const content: ServicePageContent = {
  eyebrow: "STRATEGIC AI PARTNERSHIP",
  headlineLine1: "A strategic partner.",
  headlineLine2: "Not a vendor.",
  subtext: "Strategic guidance for operators navigating AI in the real world.",
  paragraphs: [
    "Most AI vendors want to sell you a product. We sit alongside your leadership team and help you make decisions, without an agenda tied to any specific tool or platform.",
    "Whether you are evaluating a major AI investment, navigating a vendor decision, or trying to build an internal AI capability from scratch, we provide the senior strategic guidance that most firms can only get from hiring an expensive full-time executive.",
    "This is for operators and founders who think in outcomes and need a partner who operates at the same level.",
  ],
  leftCaption: "Executive strategy sessions and briefings",
  rightCaption: "Decision support and vendor evaluation",
  leftImage: "/advisory-sessions.webp",
  rightImage: "/advisory-decisions.webp",
  includedItems: [
    {
      title: "Strategic Briefings",
      description: "Regular sessions with senior advisors to align AI decisions with your broader business strategy and goals.",
    },
    {
      title: "Vendor Evaluation",
      description: "Independent assessment of AI vendors, tools, and platforms, with no financial relationship to any of them.",
    },
    {
      title: "Decision Support",
      description: "Real-time guidance on high-stakes AI decisions including build vs buy, team structure, and investment prioritization.",
    },
    {
      title: "Board and Leadership Prep",
      description: "Support preparing your leadership team and board for AI strategy presentations, questions, and long-term planning.",
    },
  ],
  heroImage: "/hero-executive-advisory.webp",
  ctaHeadline: "Ready to make better AI decisions?",
  ctaSubtext: "We take on a limited number of advisory engagements each quarter.",
}

export function ExecutiveAdvisoryPage() {
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
