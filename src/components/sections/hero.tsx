import { useEffect, useState } from "react"

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
  fontFamily: "'Outfit', sans-serif",
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
        <div>CURRENT OBJECTIVE: ARCHITECT OUTCOMES</div>
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
        <div>ACCESS LEVEL: VERIFIED</div>
        <div>AUTHORIZED: EXECUTIVES ONLY</div>
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
          opacity: mounted ? 1 : 0,
          transitionDelay: "300ms",
        }}
      >
        <h1
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontWeight: 300,
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: "1.0",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          <span style={{ display: "block" }}>STRATEGIC AI SOLUTIONS</span>
          <span style={{ display: "block", textAlign: "center" }}>FOR BUSINESSES</span>
        </h1>
      </div>

      <div
        style={{
          ...metaStyle,
          ...animBase,
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.9rem",
          letterSpacing: "0.18em",
          fontWeight: 400,
          whiteSpace: "nowrap",
          opacity: mounted ? 1 : 0,
          transitionDelay: "450ms",
        }}
      >
         BlackVault Group
      </div>
    </section>
  )
}
