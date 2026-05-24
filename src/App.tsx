import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { WindowReveal } from "@/components/sections/window-reveal"
import { Services } from "@/components/sections/services"
import { RevenueOps } from "@/components/sections/revenue-ops"
import { FAQ } from "@/components/sections/faq"
import { CTAClose } from "@/components/sections/cta-close"
import { Footer } from "@/components/sections/footer"
import { SectionSeparator } from "@/components/section-separator"
import { PageSEO } from "@/components/page-seo"
import { HowItWorksPage } from "@/pages/how-it-works"
import { OperationalAISystemsPage } from "@/pages/operational-ai-systems"
import { ClientResponseInfrastructurePage } from "@/pages/client-response-infrastructure"
import { IntelligentWorkflowsPage } from "@/pages/intelligent-workflows"
import { VoiceAISystemsPage } from "@/pages/voice-ai-systems"
import { ExecutiveAIStrategyPage } from "@/pages/executive-ai-strategy"

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
      <PageSEO
        title="BlackVault Group — AI Consulting & Operational Systems for SMBs"
        description="BlackVault Group designs and deploys AI systems that improve how businesses operate. Strategy, automation, voice AI, and custom integration for founders and operators."
        canonicalPath="/"
      />
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

        {/* Primary service routes */}
        <Route path="/operational-ai-systems" element={<OperationalAISystemsPage />} />
        <Route path="/client-response-infrastructure" element={<ClientResponseInfrastructurePage />} />
        <Route path="/intelligent-workflows" element={<IntelligentWorkflowsPage />} />
        <Route path="/voice-ai-systems" element={<VoiceAISystemsPage />} />
        <Route path="/executive-ai-strategy" element={<ExecutiveAIStrategyPage />} />

        {/* Redirects from old URLs */}
        <Route path="/ai-strategy" element={<Navigate to="/executive-ai-strategy" replace />} />
        <Route path="/workflow-automation" element={<Navigate to="/intelligent-workflows" replace />} />
        <Route path="/custom-ai-integration" element={<Navigate to="/operational-ai-systems" replace />} />
        <Route path="/strategic-ai-partnership" element={<Navigate to="/executive-ai-strategy" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
