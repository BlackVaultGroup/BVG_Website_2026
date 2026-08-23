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
      "AI voice agents and AI phone systems for answering common calls, collecting details, qualifying inquiries, scheduling next steps, and escalating to your team when needed.",
    url: "/voice-ai-systems",
    serviceType: "Voice AI and Conversational Automation",
  }),
  buildWebPageSchema({
    name: "Voice AI Systems | BlackVault Group",
    description:
      "Voice AI for business: answer common calls, capture lead details, support appointment workflows, and make it easy to reach a person for important or unusual requests.",
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
  subtext: "AI phone agents that support first-call response, lead qualification, appointment workflows, and clear human escalation.",
  paragraphs: [
    "Calls are often where a new customer decides whether to move forward. When the team is busy, a missed call, slow response, or unclear handoff can leave a good opportunity without a next step.",
    "We design voice AI around your services, qualification questions, scheduling rules, and escalation path. The system can handle defined first-call tasks, collect useful details, and route the right cases to your team. It should not make promises, guess, or handle sensitive and unusual situations without a person.",
    "A useful voice AI system gives you a clear view of what happened on calls, which requests need follow-up, and where people take over. You can review the result and improve the process over time.",
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
      description: "Your AI phone agent is configured around your services, business rules, and approved answers so it can handle defined first-call tasks consistently.",
    },
    {
      title: "Escalation and Handoff Logic",
      description: "Clear rules for when a person takes over, including important questions, unusual cases, customer promises, and sensitive information.",
    },
    {
      title: "Analytics and Optimization",
      description: "Review the call flow, follow-up needs, and handoff points so your team can improve the system with real call evidence.",
    },
  ],
  ctaHeadline: "Make the first call easier to handle.",
  ctaSubtext: "Start with the call types your team repeats most often and decide where a person should take over.",
}

export function VoiceAISystemsPage() {
  return (
    <>
      <PageSEO
        title="AI Voice Agents and Phone Systems for Business | BlackVault Group"
        description="Use AI voice agents for common calls, lead qualification, appointment workflows, and clear human escalation when a customer needs a person."
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
