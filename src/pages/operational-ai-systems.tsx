import { Link } from "react-router-dom"
import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"

const content: ServicePageContent = {
  eyebrow: "OPERATIONAL AI SYSTEMS",
  headlineLine1: "Systems that run",
  headlineLine2: "your operation.",
  subtext: "We build AI infrastructure designed around how your business actually works — not how a generic platform assumes it does.",
  paragraphs: [
    "Off-the-shelf AI tools are engineered for the average business. If your operation has specific data flows, non-standard processes, or a stack that predates the AI wave, generic solutions will either underperform or layer more complexity on top of what already exists.",
    "We analyze your entire operational structure — tools, data, handoffs, and decision logic — before designing anything. The result is AI infrastructure that integrates cleanly into your existing environment, accelerates the work your team already does, and scales without becoming a liability.",
    "Every system we build is documented, handed off with full context, and designed to be owned by your team — not dependent on a vendor relationship to keep running.",
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
            <Link to="/intelligent-workflows" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem", color: "#9A8E7E", textDecoration: "none", borderBottom: "1px solid rgba(184,134,26,0.3)", paddingBottom: "2px" }}>Intelligent Workflows</Link>
            <Link to="/executive-ai-strategy" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem", color: "#9A8E7E", textDecoration: "none", borderBottom: "1px solid rgba(184,134,26,0.3)", paddingBottom: "2px" }}>Executive AI Strategy</Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
