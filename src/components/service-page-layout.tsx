import { useEffect, useRef, useState } from "react"
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

function RevealBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export interface ServicePageContent {
  eyebrow: string
  headlineLine1: string
  headlineLine2: string
  subtext: string
  paragraphs: [string, string, string]
  leftCaption: string
  rightCaption: string
  leftImage: string
  rightImage: string
  heroImage?: string
  includedItems: { title: string; description: string }[]
  ctaHeadline: string
  ctaSubtext: string
}

export function ServicePageLayout({ content }: { content: ServicePageContent }) {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0C0A08", color: "#F2EDE6" }}>
      <HeroBanner content={content} />
      <DescriptionBlock paragraphs={content.paragraphs} />
      <FeatureImages leftCaption={content.leftCaption} rightCaption={content.rightCaption} leftImage={content.leftImage} rightImage={content.rightImage} />
      <WhatsIncluded items={content.includedItems} />
      <ClosingCTA headline={content.ctaHeadline} subtext={content.ctaSubtext} />
    </main>
  )
}

function HeroBanner({ content }: { content: ServicePageContent }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#1A1510",
        position: "relative",
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "clamp(4rem, 10vw, 8rem) 1.25rem",
        borderBottom: "1px solid rgba(184,134,26,0.2)",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {content.heroImage && (
        <img
          src={content.heroImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          width="1400"
          height="840"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.35,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      )}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#B8861A",
            marginBottom: "1.5rem",
          }}
        >
          {content.eyebrow}
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1,
            color: "#F2EDE6",
            marginBottom: "0.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          {content.headlineLine1}
        </h1>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: "#B8861A",
            letterSpacing: "-0.01em",
            marginBottom: "2rem",
          }}
        >
          {content.headlineLine2}
        </p>
        <div
          style={{
            width: "80px",
            height: "1px",
            backgroundColor: "rgba(184,134,26,0.2)",
            marginBottom: "2rem",
          }}
        />
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            color: "#9A8E7E",
            maxWidth: "600px",
            lineHeight: 1.75,
          }}
        >
          {content.subtext}
        </p>
      </div>
    </div>
  )
}

function DescriptionBlock({ paragraphs }: { paragraphs: [string, string, string] }) {
  return (
    <RevealBlock>
      <div
        style={{
          backgroundColor: "#0C0A08",
          maxWidth: "860px",
          margin: "0 auto",
          padding: "clamp(3rem, 8vw, 7.5rem) 1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#9A8E7E",
              margin: 0,
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </RevealBlock>
  )
}

function FeatureImages({ leftCaption, rightCaption, leftImage, rightImage }: { leftCaption: string; rightCaption: string; leftImage: string; rightImage: string }) {
  return (
    <RevealBlock>
      <div style={{ backgroundColor: "#1A1510" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "2px",
          }}
        >
          <div>
            <img
              src={leftImage}
              alt={leftCaption}
              loading="lazy"
              decoding="async"
              width="800"
              height="533"
              style={{ width: "100%", display: "block", aspectRatio: "3/2", objectFit: "cover" }}
            />
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 400,
                color: "#9A8E7E",
                padding: "1rem",
                margin: 0,
              }}
            >
              {leftCaption}
            </p>
          </div>
          <div>
            <img
              src={rightImage}
              alt={rightCaption}
              loading="lazy"
              decoding="async"
              width="800"
              height="533"
              style={{ width: "100%", display: "block", aspectRatio: "3/2", objectFit: "cover" }}
            />
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 400,
                color: "#9A8E7E",
                padding: "1rem",
                margin: 0,
              }}
            >
              {rightCaption}
            </p>
          </div>
        </div>
      </div>
    </RevealBlock>
  )
}

function WhatsIncluded({ items }: { items: { title: string; description: string }[] }) {
  return (
    <RevealBlock>
      <div
        style={{
          backgroundColor: "#0C0A08",
          padding: "clamp(3rem, 8vw, 7.5rem) 1.25rem",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#B8861A",
              marginBottom: "1rem",
            }}
          >
            WHAT'S INCLUDED
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
              fontSize: "2.5rem",
              fontWeight: 300,
              color: "#F2EDE6",
              lineHeight: 1.15,
              marginBottom: "3rem",
              letterSpacing: "-0.01em",
            }}
          >
            Everything you need. Nothing you don't.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
              gap: "2rem",
            }}
          >
            {items.map((item) => (
              <div key={item.title} style={{ borderTop: "1px solid #B8861A", paddingTop: "1rem" }}>
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#F2EDE6",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "#9A8E7E",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealBlock>
  )
}

function ClosingCTA({ headline, subtext }: { headline: string; subtext: string }) {
  const { openModal } = useScheduleCall()
  return (
    <RevealBlock>
      <div
        style={{
          backgroundColor: "#1A1510",
          padding: "clamp(3rem, 8vw, 7.5rem) 1.25rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div style={{ height: "1px", backgroundColor: "rgba(184,134,26,0.2)", marginBottom: "3rem" }} />
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              fontWeight: 300,
              color: "#F2EDE6",
              lineHeight: 1.1,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            {headline}
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "#9A8E7E",
              marginBottom: "2.5rem",
            }}
          >
            {subtext}
          </p>
          <button
            onClick={openModal}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              color: "#0C0A08",
              backgroundColor: "#B8861A",
              border: "none",
              borderRadius: "2px",
              padding: "14px 32px",
              cursor: "pointer",
              display: "inline-block",
              transition: "opacity 0.2s, background-color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#D4A030" }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#B8861A" }}
          >
            Schedule a Strategy Call
          </button>
          <div style={{ height: "1px", backgroundColor: "rgba(184,134,26,0.2)", marginTop: "3rem" }} />
        </div>
      </div>
    </RevealBlock>
  )
}
