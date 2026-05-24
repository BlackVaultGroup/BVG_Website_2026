import { Link } from "react-router-dom"
import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"

const content: ServicePageContent = {
  eyebrow: "EXECUTIVE AI STRATEGY",
  headlineLine1: "Strategy first.",
  headlineLine2: "Every time.",
  subtext: "We audit your operation before recommending anything. No vendor agenda. No generic playbook.",
  paragraphs: [
    "Most businesses approach AI backwards — they adopt tools first and figure out the fit afterward. The result is fragmented systems, redundant subscriptions, and an operation that is more complex than it was before.",
    "We start with a precise diagnosis of your business: where revenue leaks, where decisions stall, where your team spends time on work that should not require them. Every recommendation comes out of that audit — not a template, not a trend.",
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
        title="Executive AI Strategy — BlackVault Group"
        description="Senior AI strategy for founders and operators making high-stakes decisions. We audit your operation and map exactly where AI creates leverage before a single dollar is committed."
        canonicalPath="/executive-ai-strategy"
      />
      <Navigation />
      <div style={{ paddingTop: "72px" }}>
        <ServicePageLayout content={content} />
        <div
          style={{
            backgroundColor: "#0C0A08",
            padding: "2rem 1.25rem 3rem",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8861A", marginBottom: "1rem" }}>
            RELATED SERVICES
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link to="/operational-ai-systems" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem", color: "#9A8E7E", textDecoration: "none", borderBottom: "1px solid rgba(184,134,26,0.3)", paddingBottom: "2px" }}>Operational AI Systems</Link>
            <Link to="/intelligent-workflows" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem", color: "#9A8E7E", textDecoration: "none", borderBottom: "1px solid rgba(184,134,26,0.3)", paddingBottom: "2px" }}>Intelligent Workflows</Link>
            <Link to="/voice-ai-systems" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem", color: "#9A8E7E", textDecoration: "none", borderBottom: "1px solid rgba(184,134,26,0.3)", paddingBottom: "2px" }}>Voice AI Systems</Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
