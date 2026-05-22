import { useEffect, useRef, useState } from "react"


function useInView(ref: React.RefObject<Element | null>, threshold = 0.25) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])

  return inView
}

const fadeIn = (inView: boolean, delay: number): React.CSSProperties => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(20px)",
  transition: `opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
})

interface WindowRevealProps {
  onHowItWorks?: () => void
}

export function WindowReveal({ onHowItWorks }: WindowRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, 0.15)

  const metaLabelStyle: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.85rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "rgba(193,154,107,0.7)",
    marginBottom: "1.5rem",
  }

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#0F0F0F",
      }}
    >
      <div className="flex flex-col md:flex-row md:min-h-screen">
        {/* Left column — text */}
        <div
          className="flex items-center px-6 py-16 md:py-20 md:px-16 lg:px-20 relative z-[1]"
          style={{ flex: "0 0 40%" }}
        >
          {/* Subtle radial glow behind text */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(193,154,107,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            {/* Meta label */}
            <div style={{ ...fadeIn(inView, 0) }}>
              <p style={metaLabelStyle}>What we do</p>
            </div>

            {/* Headline */}
            <div style={{ ...fadeIn(inView, 100) }}>
              <h2
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  margin: 0,
                  marginBottom: "1.75rem",
                }}
              >
                Less Chaos
                <br />
                More Leverage
                <br />
                Real Results
              </h2>
            </div>

            {/* Body text */}
            <div style={{ ...fadeIn(inView, 200) }}>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.45)",
                  maxWidth: "360px",
                  margin: 0,
                  marginBottom: "2.25rem",
                  letterSpacing: "0.01em",
                }}
              >
                BlackVault Group helps businesses improve operations, reduce wasted time, and implement systems that scale efficiently.
              </p>
            </div>

            {/* Learn More button */}
            <div style={{ ...fadeIn(inView, 300) }}>
              <button
                onClick={onHowItWorks}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(193,154,107,0.35)",
                  borderRadius: "2px",
                  padding: "0.6875rem 1.5rem",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(193,154,107,0.8)",
                  cursor: "pointer",
                  transition: "border-color 0.2s, color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(193,154,107,0.7)"
                  e.currentTarget.style.color = "#C19A6B"
                  e.currentTarget.style.transform = "translateY(-1px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(193,154,107,0.35)"
                  e.currentTarget.style.color = "rgba(193,154,107,0.8)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right column — vault image */}
        <div
          className="relative overflow-hidden"
          style={{ flex: "0 0 60%", minHeight: "300px" }}
        >
          {/* Left-edge gradient blend — only on md+ */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "220px",
              height: "100%",
              background: "linear-gradient(to right, #0F0F0F 0%, rgba(15,15,15,0.6) 50%, transparent 100%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Bottom gradient on mobile for text readability */}
          <div
            className="block md:hidden"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80px",
              background: "linear-gradient(to bottom, transparent, #0F0F0F)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <img
            src="/vault-hero.webp"
            alt="BlackVault secure foundations"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  )
}
