import { useEffect, useRef, useState } from "react"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/navigation"
import { useScheduleCall } from "@/components/schedule-call-provider"

function useInView(ref: React.RefObject<Element | null>, threshold = 0.15) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, threshold])
  return inView
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const SERVICES = [
  {
    eyebrow: "STRATEGY",
    heading: "AI Strategy & Roadmapping",
    body: "If you are looking to understand where AI actually fits in your business, this is where we start. We audit your workflows, revenue gaps, and operational structure before recommending anything. Every engagement begins with a precise diagnosis, not a pitch.",
    cta: "Schedule a Strategy Call",
    image: "/ai-strategy.webp",
    imageLeft: true,
  },
  {
    eyebrow: "AUTOMATION",
    heading: "Workflow Automation Architecture",
    body: "For operators spending time on work that shouldn't require human attention, we design the system that removes it. We map your existing processes, identify what can be automated, and build the architecture to make it permanent.",
    cta: "See How We Work",
    image: "/workflow-automation.webp",
    imageLeft: false,
  },
  {
    eyebrow: "INTEGRATION",
    heading: "Custom AI Integration",
    body: "Off-the-shelf AI tools are built for the average business. If your operation has specific needs, we build solutions that fit exactly and integrate cleanly with your existing stack without disruption.",
    cta: "Learn More",
    image: "/custom-integration.webp",
    imageLeft: true,
  },
  {
    eyebrow: "ADVISORY",
    heading: "Executive AI Advisory",
    body: "For founders and executives who need a strategic partner rather than a vendor, we work directly alongside your leadership. We help you make AI decisions with confidence and stay ahead of what's coming.",
    cta: "Start a Conversation",
    image: "/executive-advisory.webp",
    imageLeft: false,
  },
]

export function HowItWorksPage() {
  const { openModal } = useScheduleCall()
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, 0.1)

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0F0F0F", color: "#fff" }}>
      <Navigation />

      <div
        ref={heroRef}
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "calc(72px + clamp(5rem, 12vw, 10rem))",
          paddingBottom: "clamp(5rem, 12vw, 10rem)",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
          opacity: heroInView ? 1 : 0,
          transform: heroInView ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <img
          src="/how-it-works-hero.webp"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.35,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#C4B19C",
            marginBottom: "1.5rem",
          }}
        >
          How it Works
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 300,
            lineHeight: 1,
            color: "#fff",
            marginBottom: "0.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          We don't sell AI.
        </h1>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: "#C4B19C",
            letterSpacing: "-0.01em",
          }}
        >
          We architect outcomes.
        </p>
        </div>
      </div>

      <RevealSection>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "clamp(3rem, 6vw, 5rem) 2rem",
            textAlign: "center",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "#A1A1AA",
              marginBottom: "1.5rem",
            }}
          >
            Most businesses already know they need AI. What they don't have is a firm that understands their operation well enough to implement it without breaking what already works.
          </p>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "#A1A1AA",
            }}
          >
            Black Vault Group works alongside operators and executives to identify where AI creates real leverage, then builds, integrates, and deploys it. No bloated retainers. No generic tools. No wasted motion.
          </p>
        </div>
      </RevealSection>

      <ServicesGrid />

      <RevealSection>
        <div
          style={{
            backgroundColor: "#1A1A1A",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(4rem, 8vw, 7rem) 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Ready to architect your advantage?
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "#A1A1AA",
              marginBottom: "2.5rem",
            }}
          >
            We take on a limited number of engagements each quarter.
          </p>
          <button
            onClick={openModal}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              color: "#0F0F0F",
              backgroundColor: "#C4B19C",
              border: "none",
              borderRadius: "2px",
              padding: "1.00625rem 2.875rem",
              cursor: "pointer",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88" }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1" }}
          >
            Schedule a Strategy Call
          </button>
        </div>
      </RevealSection>

      <Footer />
    </div>
  )
}

function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.05)

  return (
    <div
      ref={ref}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 5rem) 1.25rem",
        }}
      >
        {SERVICES.map((service) => (
          <ServiceCard key={service.eyebrow} service={service} />
        ))}
      </div>
    </div>
  )
}

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const { openModal } = useScheduleCall()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={service.image}
        alt={service.heading}
        style={{
          width: "100%",
          aspectRatio: "4/3",
          objectFit: "cover",
          display: "block",
          marginBottom: "1.3125rem",
        }}
      />

      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#C4B19C",
          marginBottom: "0.45rem",
        }}
      >
        {service.eyebrow}
      </p>

      <h3
        style={{
          fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
          fontWeight: 300,
          lineHeight: 1.15,
          color: "#fff",
          marginBottom: "0.75rem",
          letterSpacing: "-0.01em",
        }}
      >
        {service.heading}
      </h3>

      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.9375rem",
          fontWeight: 300,
          lineHeight: 1.8,
          color: "#A1A1AA",
          marginBottom: "1.3125rem",
          flexGrow: 1,
        }}
      >
        {service.body}
      </p>

      <button
        onClick={openModal}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.8125rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          color: "#0F0F0F",
          backgroundColor: "#C4B19C",
          border: "none",
          display: "inline-block",
          textAlign: "center",
          padding: "0.875rem 1.25rem",
          minWidth: "84.5px",
          borderRadius: "2px",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85" }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1" }}
      >
        {service.cta}
      </button>
    </div>
  )
}
