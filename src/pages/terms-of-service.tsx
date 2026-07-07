import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: "Acceptance of These Terms",
    body: [
      'By accessing blackvaultgroup.com (the \u201cSite\u201d), you agree to these Terms of Service. If you do not agree, please do not use the Site. BlackVault Group LLC (\u201cBlackVault Group,\u201d \u201cwe,\u201d \u201cus\u201d) may update these terms from time to time; continued use of the Site after changes are posted constitutes acceptance.',
    ],
  },
  {
    h: "The Site Is Informational",
    body: [
      "Content on this Site describes our services and approach. It is provided for general information only and does not constitute business, legal, financial, or technical advice. Submitting our contact form or scheduling a call does not create a client relationship.",
    ],
  },
  {
    h: "Client Engagements",
    body: [
      "All consulting and build engagements are governed by a separate written agreement (such as a proposal, statement of work, or services agreement) signed by both parties. If there is any conflict between these Terms and a signed engagement agreement, the engagement agreement controls.",
    ],
  },
  {
    h: "Intellectual Property",
    body: [
      "The Site and its content — including text, design, graphics, and branding — are owned by BlackVault Group LLC and protected by applicable intellectual property laws. You may not copy, reproduce, or distribute Site content for commercial purposes without our written permission.",
    ],
  },
  {
    h: "Disclaimer of Warranties",
    body: [
      'The Site is provided on an \u201cas is\u201d and \u201cas available\u201d basis without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted or error-free.',
    ],
  },
  {
    h: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, BlackVault Group LLC will not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of the Site. Our total liability arising from use of the Site will not exceed one hundred US dollars ($100). Liability arising from client engagements is addressed in the applicable engagement agreement.",
    ],
  },
  {
    h: "Third-Party Links and Services",
    body: [
      "The Site may reference or link to third-party websites and services. We are not responsible for their content, policies, or practices.",
    ],
  },
  {
    h: "Governing Law",
    body: [
      "These Terms are governed by the laws of the Commonwealth of Virginia, without regard to conflict-of-law principles. Any dispute arising from these Terms or the Site will be brought in the state or federal courts located in Virginia.",
    ],
  },
  {
    h: "Contact",
    body: [
      "Questions about these Terms can be sent to karsten@blackvaultgroupllc.com.",
    ],
  },
]

export function TermsOfServicePage() {
  return (
    <>
      <PageSEO
        title="Terms of Service — BlackVault Group"
        description="The terms that govern use of the BlackVault Group website."
        canonicalPath="/terms-of-service"
      />
      <Navigation />
      <main style={{ minHeight: "100vh", backgroundColor: "#0C0A08", paddingTop: "72px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(4rem, 8vw, 6rem) 1.5rem clamp(4rem, 8vw, 7rem)" }}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
              fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
              fontWeight: 400,
              color: "#F2EDE6",
              textAlign: "center",
              margin: 0,
              marginBottom: "0.75rem",
            }}
          >
            Terms of Service
          </h1>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 300,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8A7E6E",
              textAlign: "center",
              margin: 0,
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Effective July 5, 2026
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: "#F2EDE6",
                    margin: 0,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.h}
                </h2>
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "#B5AA9A",
                      margin: 0,
                      marginBottom: i < s.body.length - 1 ? "0.75rem" : 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
