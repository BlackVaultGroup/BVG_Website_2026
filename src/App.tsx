import { Suspense, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { WindowReveal } from "@/components/sections/window-reveal"
import { Services } from "@/components/sections/services"
import { RevenueOps } from "@/components/sections/revenue-ops"
import { Proof } from "@/components/sections/proof"
import { FAQ } from "@/components/sections/faq"
import { CTAClose } from "@/components/sections/cta-close"
import { Footer } from "@/components/sections/footer"
import { SectionSeparator } from "@/components/section-separator"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, websiteSchema, buildWebPageSchema, buildFAQSchema } from "@/lib/schema"
import { HowItWorksPage } from "@/pages/how-it-works"
import { OperationalAISystemsPage } from "@/pages/operational-ai-systems"
import { ClientResponseInfrastructurePage } from "@/pages/client-response-infrastructure"
import { IntelligentWorkflowsPage } from "@/pages/intelligent-workflows"
import { VoiceAISystemsPage } from "@/pages/voice-ai-systems"
import { ExecutiveAIStrategyPage } from "@/pages/executive-ai-strategy"
import { AboutPage } from "@/pages/about"
import { PrivacyPolicyPage } from "@/pages/privacy-policy"
import { TermsOfServicePage } from "@/pages/terms-of-service"
import { ArticlesPage } from "@/pages/articles"
import { ArticleDetailPage } from "@/pages/article-detail"
import { ServiceAreaPage } from "@/pages/service-area"
import { NotFoundPage } from "@/pages/not-found"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const homePageSchema = buildWebPageSchema({
  name: "AI Automation for Small Business | BlackVault Group",
  description:
    "BlackVault Group designs practical AI systems for lead response, phone answering, repetitive workflows, and operational bottlenecks in small and mid-sized businesses.",
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
        title="AI Automation for Small Business | BlackVault Group"
        description="BlackVault Group designs practical AI systems for lead response, phone answering, repetitive workflows, and operational bottlenecks in small and mid-sized businesses."
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
        <Proof />
        <SectionSeparator />
        <FAQ />
        <CTAClose />
      </main>
      <Footer />
    </>
  )
}

export function AppRoutes() {
  return (
    <>
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
          path="/lead-follow-up-automation"
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

        <Route
          path="/about"
          element={
            <Suspense fallback={<PageLoader />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route path="/articles" element={<Suspense fallback={<PageLoader />}><ArticlesPage /></Suspense>} />
        <Route path="/articles/:slug" element={<Suspense fallback={<PageLoader />}><ArticleDetailPage /></Suspense>} />
        <Route path="/hampton-roads-ai-consulting" element={<Suspense fallback={<PageLoader />}><ServiceAreaPage /></Suspense>} />
        <Route path="/ai-consulting-virginia-beach" element={<Suspense fallback={<PageLoader />}><ServiceAreaPage /></Suspense>} />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <Suspense fallback={<PageLoader />}>
              <TermsOfServicePage />
            </Suspense>
          }
        />

        {/* Redirects from old URLs */}
        <Route path="/client-response-infrastructure" element={<Navigate to="/lead-follow-up-automation" replace />} />
        <Route path="/ai-strategy" element={<Navigate to="/executive-ai-strategy" replace />} />
        <Route path="/workflow-automation" element={<Navigate to="/intelligent-workflows" replace />} />
        <Route path="/custom-ai-integration" element={<Navigate to="/operational-ai-systems" replace />} />
        <Route path="/strategic-ai-partnership" element={<Navigate to="/executive-ai-strategy" replace />} />
        <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFoundPage /></Suspense>} />
      </Routes>
    </>
  )
}

export function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}

export default App
