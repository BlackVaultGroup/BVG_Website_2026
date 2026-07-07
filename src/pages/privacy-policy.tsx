import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: "Who We Are",
    body: [
      'BlackVault Group LLC (\u201cBlackVault Group,\u201d \u201cwe,\u201d \u201cus\u201d) operates blackvaultgroup.com. We design and deploy operational AI systems for small and mid-size businesses. This policy explains what information we collect through this website, how we use it, and the choices you have.',
    ],
  },
  {
    h: "Information We Collect",
    body: [
      "When you submit our strategy call request form, we collect the information you provide: your full name, business name, email address, phone number (optional), company size, area of interest, preferred meeting time (optional), and any notes you include.",
      "Like most websites, our hosting infrastructure may automatically log basic technical information such as IP address, browser type, and pages visited. We do not use advertising cookies or cross-site tracking.",
    ],
  },
  {
    h: "How We Use Your Information",
    body: [
      "We use the information you submit to respond to your inquiry, schedule and prepare for consultations, deliver services you request, and maintain our business records. We do not sell, rent, or trade your personal information to third parties.",
    ],
  },
  {
    h: "Where Your Information Is Stored",
    body: [
      "Form submissions are stored securely in our database, hosted by Supabase. Our website fonts are delivered by Google Fonts, which may log the IP address of requests as part of serving those files. We use service providers only to operate this website and our business, and each processes data on our behalf.",
    ],
  },
  {
    h: "Data Retention",
    body: [
      "We retain inquiry information for as long as needed to respond to you and maintain our business records. You may request deletion of your information at any time using the contact below, and we will honor the request unless we are required to keep the information for legal or accounting purposes.",
    ],
  },
  {
    h: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you. To make a request, email us at karsten@blackvaultgroupllc.com and we will respond within a reasonable timeframe.",
    ],
  },
  {
    h: "Confidentiality of Client Engagements",
    body: [
      "Client engagements are covered by mutual non-disclosure agreements before any business information is shared. We never use client data to train AI models and never share it with third parties outside the tools required to deliver the engagement.",
    ],
  },
  {
    h: "Children's Privacy",
    body: [
      "This website is intended for business audiences and is not directed to children under 13. We do not knowingly collect personal information from children.",
    ],
  },
  {
    h: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. The effective date below reflects the latest revision. Material changes will be posted on this page.",
    ],
  },
  {
    h: "Contact",
    body: [
      "BlackVault Group LLC — karsten@blackvaultgroupllc.com",
    ],
  },
]

export function PrivacyPolicyPage() {
  return (
    <>
      <PageSEO
        title="Privacy Policy — BlackVault Group"
        description="How BlackVault Group collects, uses, and protects your information."
        canonicalPath="/privacy-policy"
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
            Privacy Policy
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
