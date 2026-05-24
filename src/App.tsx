import { lazy, Suspense, useEffect } from "react"
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
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, websiteSchema, buildWebPageSchema, buildFAQSchema } from "@/lib/schema"

const HowItWorksPage = lazy(() => import("@/pages/how-it-works").then(m => ({ default: m.HowItWorksPage })))
const OperationalAISystemsPage = lazy(() => import("@/pages/operational-ai-systems").then(m => ({ default: m.OperationalAISystemsPage })))
const ClientResponseInfrastructurePage = lazy(() => import("@/pages/client-response-infrastructure").then(m => ({ default: m.ClientResponseInfrastructurePage })))
const IntelligentWorkflowsPage = lazy(() => import("@/pages/intelligent-workflows").then(m => ({ default: m.IntelligentWorkflowsPage })))
const VoiceAISystemsPage = lazy(() => import("@/pages/voice-ai-systems").then(m => ({ default: m.VoiceAISystemsPage })))
const ExecutiveAIStrategyPage = lazy(() => import("@/pages/executive-ai-strategy").then(m => ({ default: m.ExecutiveAIStrategyPage })))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const homePageSchema = buildWebPageSchema({
  name: "BlackVault Group — Operational AI Systems for Founders and Operators",
  description:
    "BlackVault Group designs and deploys operational AI systems for small and mid-size businesses. We build workflow automation, client response infrastructure, voice AI, and custom integrations that improve how operations run.",
  url: "/",
})

const faqSchema = buildFAQSchema()

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0C0A08",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Loading page"
    />
  )
}

function HomePage() {
  return (
    <>
      <PageSEO
        title="BlackVault Group — Operational AI Systems for Founders and Operators"
        description="BlackVault Group designs and deploys operational AI systems for small and mid-size businesses. We build workflow automation, client response infrastructure, voice AI, and custom integrations that improve how operations run."
        canonicalPath="/"
      />
      <JsonLd schema={[organizationSchema, websiteSchema, homePageSchema, faqSchema]} />
      <Navigation />
      <main>
        <Hero />
        <WindowReveal />
        <SectionSeparator />
        <Services />
        <SectionSeparator />
        <RevenueOps />
        <SectionSeparator />
        <FAQ />
        <CTAClose />
      </main>
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
        <Route
          path="/how-it-works"
          element={
            <Suspense fallback={<PageLoader />}>
              <HowItWorksPage />
            </Suspense>
          }
        />

        {/* Primary service routes */}
        <Route
          path="/operational-ai-systems"
          element={
            <Suspense fallback={<PageLoader />}>
              <OperationalAISystemsPage />
            </Suspense>
          }
        />
        <Route
          path="/client-response-infrastructure"
          element={
            <Suspense fallback={<PageLoader />}>
              <ClientResponseInfrastructurePage />
            </Suspense>
          }
        />
        <Route
          path="/intelligent-workflows"
          element={
            <Suspense fallback={<PageLoader />}>
              <IntelligentWorkflowsPage />
            </Suspense>
          }
        />
        <Route
          path="/voice-ai-systems"
          element={
            <Suspense fallback={<PageLoader />}>
              <VoiceAISystemsPage />
            </Suspense>
          }
        />
        <Route
          path="/executive-ai-strategy"
          element={
            <Suspense fallback={<PageLoader />}>
              <ExecutiveAIStrategyPage />
            </Suspense>
          }
        />

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
