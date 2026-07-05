import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, buildServiceSchema, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/schema"

const pageSchemas = [
  organizationSchema,
  buildServiceSchema({
    name: "Voice AI Systems",
    description:
      "AI voice agents trained on your business that handle inbound calls, qualify leads, and run appointment scheduling without live staff. Deployed with full call analytics and escalation logic.",
    url: "/voice-ai-systems",
    serviceType: "Voice AI and Conversational Automation",
  }),
  buildWebPageSchema({
    name: "Voice AI Systems — BlackVault Group",
    description:
      "AI voice agents trained on your business that answer inbound calls, qualify leads, and book appointments automatically, 24/7, without adding staff.",
    url: "/voice-ai-systems",
    breadcrumb: [
      { name: "Home", url: "/" },
      { name: "Voice AI Systems", url: "/voice-ai-systems" },
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Voice AI Systems", url: "/voice-ai-systems" },
  ]),
]

const content: ServicePageContent = {
  eyebrow: "VOICE AI SYSTEMS",
  headlineLine1: "Every call answered.",
  headlineLine2: "Every lead captured.",
  subtext: "AI voice agents trained on your business that handle inbound calls, qualify leads, and run appointment workflows without live staff intervention.",
  paragraphs: [
    "Inbound call volume is a bottleneck that grows with your business. Every missed call is a missed opportunity and hiring staff to answer phones, qualify callers, and schedule appointments is expensive, inconsistent, and does not scale.",
    "We build voice AI agents trained specifically on your business — your services, your qualification criteria, your scheduling logic, and your escalation rules. The agent answers every call, gathers the right information, and routes or books based on the outcome, 24 hours a day, without supervision.",
    "Every voice system we deploy includes full analytics on call volume, qualification rates, conversion, and drop-off. You see exactly how the system performs and where to optimize.",
  ],
  leftCaption: "Call flow architecture and agent training",
  rightCaption: "Escalation logic and performance analytics",
  leftImage: "/how-it-works-hero-v2.webp",
  rightImage: "/strategy-roadmap.webp",
  heroImage: "/vault-hero.webp",
  includedItems: [
    {
      title: "Call Flow Architecture",
      description: "A structured design of how inbound calls are handled, from greeting through qualification, scheduling, and escalation.",
    },
    {
      title: "Voice Agent Training",
      description: "Your AI agent is trained on your specific services, offers, and business rules so every conversation sounds and operates on-brand.",
    },
    {
      title: "Escalation and Handoff Logic",
      description: "Clear rules for when the agent transfers to a live team member, so high-value situations always get a human response.",
    },
    {
      title: "Analytics and Optimization",
      description: "Ongoing tracking of call volume, conversion, qualification rate, and drop-off to continuously improve system performance.",
    },
  ],
  ctaHeadline: "Stop letting calls go unanswered.",
  ctaSubtext: "We build voice AI systems that work every hour your business is open.",
}

export function VoiceAISystemsPage() {
  return (
    <>
      <PageSEO
        title="Voice AI Systems — AI Answering Service for Small Business | BlackVault Group"
        description="AI voice agents trained on your business that answer inbound calls, qualify leads, and book appointments automatically, 24/7, without adding staff."
        canonicalPath="/voice-ai-systems"
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
