import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { WindowReveal } from "@/components/sections/window-reveal"
import { Services } from "@/components/sections/services"
import { RevenueOps } from "@/components/sections/revenue-ops"
import { FAQ } from "@/components/sections/faq"
import { CTAClose } from "@/components/sections/cta-close"
import { Footer } from "@/components/sections/footer"
import { SectionSeparator } from "@/components/section-separator"
import { HowItWorksPage } from "@/pages/how-it-works"
import { AIStrategyPage } from "@/pages/ai-strategy"
import { WorkflowAutomationPage } from "@/pages/workflow-automation"
import { CustomIntegrationPage } from "@/pages/custom-integration"
import { ExecutiveAdvisoryPage } from "@/pages/executive-advisory"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <WindowReveal />
      <SectionSeparator />
      <Services />
      <SectionSeparator />
      <RevenueOps />
      <SectionSeparator />
      <FAQ />
      <CTAClose />
      <Footer />
    </>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/ai-strategy" element={<AIStrategyPage />} />
        <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
        <Route path="/custom-ai-integration" element={<CustomIntegrationPage />} />
        <Route path="/strategic-ai-partnership" element={<ExecutiveAdvisoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
