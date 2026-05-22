import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"

const content: ServicePageContent = {
  eyebrow: "CUSTOM AI INTEGRATION",
  headlineLine1: "Built for your",
  headlineLine2: "operation. Not theirs.",
  subtext: "Off-the-shelf AI tools were not designed for how your business actually runs.",
  paragraphs: [
    "Generic AI tools are built for the average business. If your operation has specific needs, specific data, or a specific way of working, generic tools will either underperform or create more complexity than they solve.",
    "We build AI solutions that fit exactly into your existing stack. No disruption to current operations. No forced changes to how your team works. Just intelligent capability added where it creates the most value.",
    "Every integration we build is designed to scale with your business, not become a bottleneck as you grow.",
  ],
  leftCaption: "Stack analysis and integration planning",
  rightCaption: "Custom build and seamless deployment",
  leftImage: "/integration-stack.webp",
  rightImage: "/integration-build.webp",
  includedItems: [
    {
      title: "Stack Assessment",
      description: "A full review of your existing tools, data infrastructure, and technical environment before any build begins.",
    },
    {
      title: "Custom Development",
      description: "AI solutions built specifically for your operation, designed around your data, your workflows, and your team.",
    },
    {
      title: "Seamless Integration",
      description: "Every solution integrates cleanly into your existing stack with zero disruption to current operations.",
    },
    {
      title: "Documentation and Handoff",
      description: "Full documentation of every system we build so your team understands, maintains, and scales it independently.",
    },
  ],
  heroImage: "/hero-custom-integration.webp",
  ctaHeadline: "Your stack. Made intelligent.",
  ctaSubtext: "We build what fits. Nothing extra.",
}

interface CustomIntegrationPageProps {
  onNavigate: (page: string) => void
}

export function CustomIntegrationPage({ onNavigate }: CustomIntegrationPageProps) {
  return (
    <>
      <Navigation
        onHowItWorks={() => onNavigate("how-it-works")}
        onNavigate={onNavigate}
      />
      <div style={{ paddingTop: "72px" }}>
        <ServicePageLayout content={content} />
        <Footer />
      </div>
    </>
  )
}
