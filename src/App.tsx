import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { WindowReveal } from "@/components/sections/window-reveal"
import { Services } from "@/components/sections/services"
import { RevenueOps } from "@/components/sections/revenue-ops"
import { Outcomes } from "@/components/sections/outcomes"
import { FAQ } from "@/components/sections/faq"
import { CTAClose } from "@/components/sections/cta-close"
import { Footer } from "@/components/sections/footer"
import { SectionSeparator } from "@/components/section-separator"
import { HowItWorksPage } from "@/pages/how-it-works"
import { AIStrategyPage } from "@/pages/ai-strategy"
import { WorkflowAutomationPage } from "@/pages/workflow-automation"
import { CustomIntegrationPage } from "@/pages/custom-integration"
import { ExecutiveAdvisoryPage } from "@/pages/executive-advisory"

type PageId = "home" | "how-it-works" | "ai-strategy" | "workflow-automation" | "custom-integration" | "executive-advisory"

export function App() {
  const [page, setPage] = useState<PageId>("home")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  if (page === "how-it-works") {
    return <HowItWorksPage onBack={() => setPage("home")} onNavigate={(p) => setPage(p as PageId)} />
  }

  if (page === "ai-strategy") {
    return <AIStrategyPage onNavigate={(p) => setPage(p as PageId)} />
  }

  if (page === "workflow-automation") {
    return <WorkflowAutomationPage onNavigate={(p) => setPage(p as PageId)} />
  }

  if (page === "custom-integration") {
    return <CustomIntegrationPage onNavigate={(p) => setPage(p as PageId)} />
  }

  if (page === "executive-advisory") {
    return <ExecutiveAdvisoryPage onNavigate={(p) => setPage(p as PageId)} />
  }

  return (
    <>
      <Navigation
        onHowItWorks={() => setPage("how-it-works")}
        onNavigate={(p) => setPage(p as PageId)}
      />
      <Hero />
      <WindowReveal />
      <SectionSeparator />
      <Services onNavigate={(p) => setPage(p as PageId)} />
      <SectionSeparator />
      <RevenueOps />
      <SectionSeparator />
      <Outcomes />
      <SectionSeparator />
      <FAQ />
      <CTAClose />
      <Footer onNavigate={(p) => setPage(p as PageId)} />
    </>
  )
}

export default App
