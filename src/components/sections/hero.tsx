import { useEffect, useState } from "react"
import { useScheduleCall } from "@/components/schedule-call-provider"

function useClock() {
  const [time, setTime] = useState(() => {
    const now = new Date()
    return now.toTimeString().slice(0, 8)
  })

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date()
      setTime(now.toTimeString().slice(0, 8))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

const metaStyle: React.CSSProperties = {
  fontFamily: "'Jost', 'Outfit', sans-serif",
  fontSize: "0.65rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "#A1A1AA",
  lineHeight: "1.8",
}

const animBase: React.CSSProperties = {
  opacity: 0,
  transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
}

export function Hero() {
  const time = useClock()
  const { openModal } = useScheduleCall()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(id)
  }, [])

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0F0F0F",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle 500px at 35% 65%, rgba(196,177,156,0.12) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="hidden md:block"
        style={{
          ...metaStyle,
          ...animBase,
          position: "absolute",
          top: "40%",
          left: "3rem",
          opacity: mounted ? 1 : 0,
          transitionDelay: "0ms",
        }}
      >
        <div>BLACKVAULT GROUP LLC</div>
        <div>MODE: ACTIVE</div>
        <div>LOCATION: UNITED STATES</div>
        <div>SERVING: SMALL &amp; MID-SIZE BUSINESSES</div>
      </div>

      <div
        className="hidden md:block"
        style={{
          ...metaStyle,
          ...animBase,
          position: "absolute",
          top: "40%",
          right: "3rem",
          textAlign: "right",
          opacity: mounted ? 1 : 0,
          transitionDelay: "150ms",
        }}
      >
        <div>STATUS: OPERATIONAL</div>
        <div>RESPONSE TIME: 1 BUSINESS DAY</div>
        <div>NEW BUILDS: FIVE PER MONTH</div>
        <div>TIME ACCESSED: {time}</div>
      </div>

      <div
        style={{
          ...animBase,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: "0 1.5rem",
          opacity: mounted ? 1 : 0,
          transitionDelay: "300ms",
        }}
      >
        <h1
          style={{
            fontFamily: "'Bodoni Moda', 'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
            margin: 0,
            marginBottom: "1.5rem",
            textAlign: "center",
            maxWidth: "18ch",
          }}
        >
          Never miss another lead.
        </h1>

        <p
          style={{
            fontFamily: "'Jost', 'Outfit', sans-serif",
            fontSize: "clamp(0.95rem, 1.4vw, 1.125rem)",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            marginBottom: "2.25rem",
            textAlign: "center",
            maxWidth: "54ch",
          }}
        >
          BlackVault Group builds AI systems for small and mid-size businesses —
          phone answering, lead follow-up, and workflow automation that run 24/7.
        </p>

        <button
          onClick={openModal}
          style={{
            backgroundColor: "#C19A6B",
            color: "#0F0B0A",
            border: "none",
            borderRadius: "2px",
            padding: "1rem 2.25rem",
            fontFamily: "'Jost', 'Outfit', sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background-color 0.2s, transform 0.15s",
            marginBottom: "1.25rem",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#D4B483"; e.currentTarget.style.transform = "translateY(-1px)" }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C19A6B"; e.currentTarget.style.transform = "translateY(0)" }}
        >
          Schedule a Strategy Call
        </button>

        <p
          style={{
            ...metaStyle,
            fontSize: "0.7rem",
            margin: 0,
            textAlign: "center",
          }}
        >
          ENGAGEMENTS FROM $2,000 — FIXED QUOTE BEFORE ANY WORK BEGINS
        </p>
      </div>

      <div
        style={{
          ...metaStyle,
          ...animBase,
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.75rem",
          letterSpacing: "0.18em",
          fontWeight: 400,
          whiteSpace: "nowrap",
          opacity: mounted ? 1 : 0,
          transitionDelay: "450ms",
        }}
      >
        BLACKVAULT GROUP — STRATEGIC AI SYSTEMS FOR BUSINESSES
      </div>
    </section>
  )
}
