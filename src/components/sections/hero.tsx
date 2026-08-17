export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0F0B0A",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle 600px at 50% 60%, rgba(193,154,107,0.10) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem 1.5rem",
          maxWidth: "800px",
        }}
      >
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(193,154,107,0.7)",
            marginBottom: "1.75rem",
          }}
        >
          BlackVault Group LLC
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: "1.75rem",
          }}
        >
          Stop losing leads to slow follow-up.
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(161,161,170,0.85)",
            maxWidth: "520px",
            margin: 0,
            marginBottom: "2.5rem",
          }}
        >
          We build practical systems that catch the calls you'd otherwise miss, keep leads from going cold, and cut the manual follow-up work eating your week.
        </p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            borderRadius: "2px",
            border: "1px solid rgba(193,154,107,0.35)",
            backgroundColor: "transparent",
            padding: "0.875rem 2rem",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: "#C19A6B",
            textDecoration: "none",
            transition: "border-color 0.2s, background-color 0.2s, color 0.2s",
          }}
        >
          Talk through your workflow
        </a>
      </div>
    </section>
  )
}
