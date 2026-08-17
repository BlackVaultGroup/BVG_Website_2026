import { lazy, Suspense, useEffect } from "react"
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

const ServicesPage = lazy(() => import("@/pages/services").then(m => ({ default: m.ServicesPage })))
const PricingPage = lazy(() => import("@/pages/pricing").then(m => ({ default: m.PricingPage })))
const HamptonRoadsPage = lazy(() => import("@/pages/hampton-roads").then(m => ({ default: m.HamptonRoadsPage })))
const ResourcesPage = lazy(() => import("@/pages/resources").then(m => ({ default: m.ResourcesPage })))
const ContactPage = lazy(() => import("@/pages/contact").then(m => ({ default: m.ContactPage })))
const HowItWorksPage = lazy(() => import("@/pages/how-it-works").then(m => ({ default: m.HowItWorksPage })))
const OperationalAISystemsPage = lazy(() => import("@/pages/operational-ai-systems").then(m => ({ default: m.OperationalAISystemsPage })))
const ClientResponseInfrastructurePage = lazy(() => import("@/pages/client-response-infrastructure").then(m => ({ default: m.ClientResponseInfrastructurePage })))
const IntelligentWorkflowsPage = lazy(() => import("@/pages/intelligent-workflows").then(m => ({ default: m.IntelligentWorkflowsPage })))
const VoiceAISystemsPage = lazy(() => import("@/pages/voice-ai-systems").then(m => ({ default: m.VoiceAISystemsPage })))
const ExecutiveAIStrategyPage = lazy(() => import("@/pages/executive-ai-strategy").then(m => ({ default: m.ExecutiveAIStrategyPage })))
const AboutPage = lazy(() => import("@/pages/about").then(m => ({ default: m.AboutPage })))
const PrivacyPolicyPage = lazy(() => import("@/pages/privacy-policy").then(m => ({ default: m.PrivacyPolicyPage })))
const TermsOfServicePage = lazy(() => import("@/pages/terms-of-service").then(m => ({ default: m.TermsOfServicePage })))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const homePageSchema = buildWebPageSchema({
  name: "BlackVault Group — Practical AI Systems for Small Business",
  description:
    "BlackVault Group builds practical systems that stop leads from going cold, catch calls you'd otherwise miss, and cut the manual follow-up work eating your week.",
  url: "/",
})

const faqSchema = buildFAQSchema()

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0F0B0A",
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
        title="BlackVault Group — Practical AI Systems for Small Business"
        description="BlackVault Group builds practical systems that stop leads from going cold, catch calls you'd otherwise miss, and cut the manual follow-up work eating your week."
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

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Primary navigation routes */}
        <Route
          path="/services"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="/pricing"
          element={
            <Suspense fallback={<PageLoader />}>
              <PricingPage />
            </Suspense>
          }
        />
        <Route
          path="/hampton-roads"
          element={
            <Suspense fallback={<PageLoader />}>
              <HamptonRoadsPage />
            </Suspense>
          }
        />
        <Route
          path="/resources"
          element={
            <Suspense fallback={<PageLoader />}>
              <ResourcesPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          }
        />

        {/* Secondary routes */}
        <Route
          path="/how-it-works"
          element={
            <Suspense fallback={<PageLoader />}>
              <HowItWorksPage />
            </Suspense>
          }
        />
        <Route
          path="/services/operational-ai-systems"
          element={
            <Suspense fallback={<PageLoader />}>
              <OperationalAISystemsPage />
            </Suspense>
          }
        />
        <Route
          path="/services/lead-follow-up-automation"
          element={
            <Suspense fallback={<PageLoader />}>
              <ClientResponseInfrastructurePage />
            </Suspense>
          }
        />
        <Route
          path="/services/intelligent-workflows"
          element={
            <Suspense fallback={<PageLoader />}>
              <IntelligentWorkflowsPage />
            </Suspense>
          }
        />
        <Route
          path="/services/voice-ai-systems"
          element={
            <Suspense fallback={<PageLoader />}>
              <VoiceAISystemsPage />
            </Suspense>
          }
        />
        <Route
          path="/services/executive-ai-strategy"
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
        <Route path="/operational-ai-systems" element={<Navigate to="/services/operational-ai-systems" replace />} />
        <Route path="/lead-follow-up-automation" element={<Navigate to="/services/lead-follow-up-automation" replace />} />
        <Route path="/client-response-infrastructure" element={<Navigate to="/services/lead-follow-up-automation" replace />} />
        <Route path="/intelligent-workflows" element={<Navigate to="/services/intelligent-workflows" replace />} />
        <Route path="/voice-ai-systems" element={<Navigate to="/services/voice-ai-systems" replace />} />
        <Route path="/executive-ai-strategy" element={<Navigate to="/services/executive-ai-strategy" replace />} />
        <Route path="/ai-strategy" element={<Navigate to="/services/executive-ai-strategy" replace />} />
        <Route path="/workflow-automation" element={<Navigate to="/services/intelligent-workflows" replace />} />
        <Route path="/custom-ai-integration" element={<Navigate to="/services/operational-ai-systems" replace />} />
        <Route path="/strategic-ai-partnership" element={<Navigate to="/services/executive-ai-strategy" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
