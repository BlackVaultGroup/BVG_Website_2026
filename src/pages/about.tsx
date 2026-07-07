import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"

const PARAGRAPHS = [
  "BlackVault Group was founded by Aidan and Karsten, two operators who believe small and mid-size businesses deserve the same operational infrastructure that large companies use. Before opening our doors to the public, we spent years building behind the scenes. Designing the systems and automations that quietly power growing companies.",
  "Our work has taken us across industries and borders. We have built and scaled operations for multiple private companies in Arizona, California, Bali, Dubai, and other international markets. We worked with marketing and media firms, real estate ventures, consumer brands, and companies in the robotics industry. Different industries, same pattern: growth stalls wherever operations cannot keep up. Leads go cold waiting for a reply. Owners spend their evenings on work a system should be doing.",
  "That experience shaped how we operate. We do not start with technology. We start with a diagnosis of your business: where revenue leaks, where time disappears, and where a system improve. Only then do we build.",
]

const WHY_PARAGRAPHS = [
  "Because the businesses that win the next decade will not necessarily be the ones with the biggest teams — they will be the ones with the best systems. Our job is to make that level of operational leverage available to businesses that could never justify an in-house automation team.",
  "Every engagement starts with success criteria defined in writing, and we stay engaged until the milestones we agreed on are met. We take on five new builds per month so that every client gets senior attention from the two people whose names are on the company.",
]

export function AboutPage() {
  return (
    <>
      <PageSEO
        title="About Us — BlackVault Group"
        description="BlackVault Group was founded by Aidan and Karsten. We build AI systems and automations for small and mid-size businesses, with experience across the US, Dubai, and international markets."
        canonicalPath="/about"
      />
      <Navigation />
      <main style={{ minHeight: "100vh", backgroundColor: "#0C0A08", paddingTop: "72px" }}>
        <div
          style={{
            maxWidth: "1060px",
            margin: "0 auto",
            padding: "clamp(4rem, 8vw, 6.5rem) 1.5rem clamp(4rem, 8vw, 7rem)",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "#F2EDE6",
              textAlign: "center",
              margin: 0,
              marginBottom: "clamp(2.5rem, 6vw, 4.5rem)",
              textTransform: "uppercase",
            }}
          >
            About Us
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "#B5AA9A",
                  margin: 0,
                }}
              >
                {p}
              </p>
            ))}

            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.0625rem",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#B8861A",
                margin: 0,
              }}
            >
              Why BlackVault?
            </p>

            {WHY_PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "#B5AA9A",
                  margin: 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}