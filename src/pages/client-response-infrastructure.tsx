import { Link } from "react-router-dom"
import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"

const content: ServicePageContent = {
  eyebrow: "CLIENT RESPONSE INFRASTRUCTURE",
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
      description: "A full review of how leads and client inquiries currently move through your business — where they come from, where they stall, and what it costs you.",
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
        description="AI-powered intake, follow-up, and routing systems that ensure every lead gets a fast, qualified response — without adding headcount or manual work to your team."
        canonicalPath="/client-response-infrastructure"
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
            <Link to="/operational-ai-systems" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem", color: "#9A8E7E", textDecoration: "none", borderBottom: "1px solid rgba(184,134,26,0.3)", paddingBottom: "2px" }}>Operational AI Systems</Link>
            <Link to="/voice-ai-systems" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem", color: "#9A8E7E", textDecoration: "none", borderBottom: "1px solid rgba(184,134,26,0.3)", paddingBottom: "2px" }}>Voice AI Systems</Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
