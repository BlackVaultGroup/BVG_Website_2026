import { ServicePageLayout, type ServicePageContent } from "@/components/service-page-layout"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"

const content: ServicePageContent = {
  eyebrow: "WORKFLOW AUTOMATION",
  headlineLine1: "Manual work is",
  headlineLine2: "a liability.",
  subtext: "We identify what your team shouldn\u2019t be doing and build the systems to eliminate it.",
  paragraphs: [
    "If your team is spending time on repetitive tasks, manual data entry, or work that follows a predictable pattern, that is time and money leaving your business every single day.",
    "We map your existing processes end to end, identify every step that can be automated, and design the architecture to remove it permanently. Not workarounds. Not duct tape. Proper systems built to last.",
    "The result is a leaner operation where your team focuses on work that actually requires human judgment, and everything else runs on its own.",
  ],
  leftCaption: "Process mapping and bottleneck analysis",
  rightCaption: "Automation architecture and deployment",
  leftImage: "/automation-process.webp",
  rightImage: "/automation-architecture.webp",
  includedItems: [
    {
      title: "Process Mapping",
      description: "A complete diagram of your current workflows showing every step, handoff, and decision point.",
    },
    {
      title: "Automation Architecture",
      description: "A custom-designed system blueprint showing exactly what gets automated, how, and with which tools.",
    },
    {
      title: "Build and Deployment",
      description: "We build and deploy the automation systems, not just design them. Your team receives working solutions.",
    },
    {
      title: "Ongoing Optimization",
      description: "After deployment we monitor performance, identify gaps, and refine the systems as your operation evolves.",
    },
  ],
  heroImage: "/hero-workflow-automation.webp",
  ctaHeadline: "Stop paying for manual work.",
  ctaSubtext: "We build the systems that give your team their time back.",
}

export function WorkflowAutomationPage() {
  return (
    <>
      <Navigation />
      <div style={{ paddingTop: "72px" }}>
        <ServicePageLayout content={content} />
        <Footer />
      </div>
    </>
  )
}
