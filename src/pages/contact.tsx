import { useState } from "react"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { buildWebPageSchema } from "@/lib/schema"
import { supabase } from "@/lib/supabase"

const COMPANY_SIZES = ["solo", "2-10", "11-20", "21-40", "41-60", "61-80"]
const INQUIRY_TYPES = [
  { value: "lead-follow-up-automation", label: "Lead Follow-Up Automation" },
  { value: "voice-ai-systems", label: "Voice AI Systems" },
  { value: "intelligent-workflows", label: "Intelligent Workflows" },
  { value: "operational-ai-systems", label: "Operational AI Systems" },
  { value: "executive-ai-strategy", label: "Executive AI Strategy" },
  { value: "general", label: "General Inquiry" },
]

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(193,154,107,0.2)",
  borderRadius: "2px",
  padding: "0.75rem 1rem",
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.9rem",
  fontWeight: 300,
  color: "#F2EDE6",
  outline: "none",
  transition: "border-color 0.2s",
}

const labelStyle: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.7rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "rgba(193,154,107,0.75)",
  marginBottom: "0.4rem",
  display: "block",
}

export function ContactPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [website, setWebsite] = useState("")
  const [form, setForm] = useState({
    full_name: "",
    business_name: "",
    email: "",
    phone: "",
    company_size: "",
    inquiry_type: "",
    preferred_meeting_time: "",
    notes: "",
  })

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.full_name || !form.business_name || !form.email || !form.inquiry_type || !form.company_size) {
      setError("Please fill in all required fields.")
      return
    }
    if (website) {
      setSubmitted(true)
      return
    }
    setSubmitting(true)
    setError(null)

    const { error: dbError } = await supabase.from("discovery_call_requests").insert({
      full_name: form.full_name,
      business_name: form.business_name,
      email: form.email,
      phone: form.phone || null,
      company_size: form.company_size,
      inquiry_type: form.inquiry_type,
      preferred_meeting_time: form.preferred_meeting_time || null,
      notes: form.notes || null,
      status: "new",
    })

    setSubmitting(false)

    if (dbError) {
      setError("Something went wrong. Please try again.")
      return
    }

    setSubmitted(true)
  }

  const pageSchema = buildWebPageSchema({
    name: "Contact — BlackVault Group",
    description: "Talk through your workflow with BlackVault Group. Tell us about your business and what you're looking to solve.",
    url: "/contact",
  })

  return (
    <>
      <PageSEO
        title="Contact — BlackVault Group"
        description="Talk through your workflow with BlackVault Group. Tell us about your business and what you're looking to solve."
        canonicalPath="/contact"
      />
      <JsonLd schema={[pageSchema]} />
      <Navigation />
      <main className="min-h-screen bg-bv-bg-primary pt-[72px]">
        <div className="mx-auto max-w-[680px] px-6 py-16 md:py-32">
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            Contact
          </p>
          <h1 className="m-0 mb-6 font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Talk through your workflow
          </h1>
          <p className="mb-10 max-w-[55ch] font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
            Tell us about your business and what you're looking to solve. We review every submission personally and respond within one business day.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-6 py-12 text-center">
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: "1px solid rgba(193,154,107,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4.5 11.5L9 16L17.5 7" stroke="#C19A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="mb-3 font-display text-2xl font-normal text-bv-text-primary">Request received</h2>
                <p className="max-w-[38ch] font-body text-[0.9375rem] font-light leading-[1.7] text-bv-text-secondary">
                  We review every submission personally. You will hear from us within one business day.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0, pointerEvents: "none" }}
              />
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label style={labelStyle}>Full Name <span style={{ color: "#C19A6B" }}>*</span></label>
                    <input
                      type="text"
                      value={form.full_name}
                      onChange={(e) => handleChange("full_name", e.target.value)}
                      placeholder="John Doe"
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Business Name <span style={{ color: "#C19A6B" }}>*</span></label>
                    <input
                      type="text"
                      value={form.business_name}
                      onChange={(e) => handleChange("business_name", e.target.value)}
                      placeholder="Your Business"
                      style={inputStyle}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label style={labelStyle}>Email <span style={{ color: "#C19A6B" }}>*</span></label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@business.com"
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label style={labelStyle}>Company Size <span style={{ color: "#C19A6B" }}>*</span></label>
                    <select
                      value={form.company_size}
                      onChange={(e) => handleChange("company_size", e.target.value)}
                      style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: form.company_size ? "#F2EDE6" : "rgba(161,161,170,0.5)" }}
                      required
                    >
                      <option value="" disabled style={{ backgroundColor: "#1A1510" }}>Select size</option>
                      {COMPANY_SIZES.map((s) => (
                        <option key={s} value={s} style={{ backgroundColor: "#1A1510", color: "#F2EDE6" }}>{s} employees</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Area of Interest <span style={{ color: "#C19A6B" }}>*</span></label>
                    <select
                      value={form.inquiry_type}
                      onChange={(e) => handleChange("inquiry_type", e.target.value)}
                      style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: form.inquiry_type ? "#F2EDE6" : "rgba(161,161,170,0.5)" }}
                      required
                    >
                      <option value="" disabled style={{ backgroundColor: "#1A1510" }}>Select service</option>
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t.value} value={t.value} style={{ backgroundColor: "#1A1510", color: "#F2EDE6" }}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Preferred Meeting Time</label>
                  <input
                    type="text"
                    value={form.preferred_meeting_time}
                    onChange={(e) => handleChange("preferred_meeting_time", e.target.value)}
                    placeholder="e.g. Weekday mornings EST"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Additional Context</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    placeholder="Briefly describe your current situation and what you're looking to solve..."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                  />
                </div>

                {error && (
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "rgba(239,68,68,0.9)", margin: 0 }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: "100%",
                    backgroundColor: submitting ? "rgba(193,154,107,0.5)" : "#C19A6B",
                    color: "#0F0B0A",
                    border: "none",
                    borderRadius: "2px",
                    padding: "0.9375rem 2rem",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: submitting ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  {submitting ? "Submitting..." : "Request Strategy Call"}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
