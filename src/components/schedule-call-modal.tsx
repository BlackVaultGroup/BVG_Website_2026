import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { supabase } from "@/lib/supabase"

interface ScheduleCallModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type Step = "form" | "success"

const COMPANY_SIZES = ["solo", "2-10", "11-20", "21-40", "41-60", "61-80"]
const INQUIRY_TYPES = [
  { value: "ai-strategy", label: "AI Strategy & Roadmapping" },
  { value: "workflow-automation", label: "Workflow Automation" },
  { value: "custom-integration", label: "Custom AI Integration" },
  { value: "executive-advisory", label: "Strategic AI Partnership" },
  { value: "general", label: "General Inquiry" },
]

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(193,154,107,0.2)",
  borderRadius: "2px",
  padding: "0.75rem 1rem",
  fontFamily: "'Jost', sans-serif",
  fontSize: "0.9rem",
  fontWeight: 300,
  color: "#F2EDE6",
  outline: "none",
  transition: "border-color 0.2s",
}

const labelStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "0.7rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "rgba(193,154,107,0.75)",
  marginBottom: "0.4rem",
  display: "block",
}

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0",
}

export function ScheduleCallModal({ open, onOpenChange }: ScheduleCallModalProps) {
  const [step, setStep] = useState<Step>("form")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)

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

    setStep("success")
  }

  function handleClose(open: boolean) {
    if (!open) {
      setTimeout(() => {
        setStep("form")
        setForm({
          full_name: "",
          business_name: "",
          email: "",
          phone: "",
          company_size: "",
          inquiry_type: "",
          preferred_meeting_time: "",
          notes: "",
        })
        setError(null)
      }, 300)
    }
    onOpenChange(open)
  }

  const getFocusStyle = (name: string): React.CSSProperties =>
    focused === name
      ? { borderColor: "rgba(193,154,107,0.7)" }
      : {}

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="p-0 gap-0 overflow-hidden border-0"
        style={{
          backgroundColor: "#120E0C",
          maxWidth: "min(680px, calc(100vw - 2rem))",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: "2px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(193,154,107,0.12)",
        }}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {/* Header bar */}
        <div
          style={{
            padding: "1.75rem 2rem 1.5rem",
            borderBottom: "1px solid rgba(193,154,107,0.1)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(193,154,107,0.6)",
              marginBottom: "0.6rem",
            }}
          >
            BlackVault Group — Strategy Call Request
          </div>
          <DialogHeader>
            <DialogTitle
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
                fontWeight: 300,
                color: "#F2EDE6",
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
              }}
              className="text-left"
            >
              Begin Your Engagement
            </DialogTitle>
            <DialogDescription
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 300,
                color: "rgba(161,161,170,0.85)",
                lineHeight: 1.65,
                marginTop: "0.4rem",
              }}
              className="text-left"
            >
              We review every submission personally. Expect a response within one business day.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: "auto", flex: 1, padding: "1.75rem 2rem 2rem" }}>
          {step === "success" ? (
            <SuccessState onClose={() => handleClose(false)} />
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                {/* Row: Name + Business */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="grid-cols-1 sm:grid-cols-2">
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Full Name <span style={{ color: "#C19A6B" }}>*</span></label>
                    <input
                      type="text"
                      value={form.full_name}
                      onChange={(e) => handleChange("full_name", e.target.value)}
                      onFocus={() => setFocused("full_name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Jane Smith"
                      style={{ ...inputStyle, ...getFocusStyle("full_name") }}
                      required
                    />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Business Name <span style={{ color: "#C19A6B" }}>*</span></label>
                    <input
                      type="text"
                      value={form.business_name}
                      onChange={(e) => handleChange("business_name", e.target.value)}
                      onFocus={() => setFocused("business_name")}
                      onBlur={() => setFocused(null)}
                      placeholder="BlackVault Group"
                      style={{ ...inputStyle, ...getFocusStyle("business_name") }}
                      required
                    />
                  </div>
                </div>

                {/* Row: Email + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="grid-cols-1 sm:grid-cols-2">
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Email <span style={{ color: "#C19A6B" }}>*</span></label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="john@blackvaultgroupllc.com"
                      style={{ ...inputStyle, ...getFocusStyle("email") }}
                      required
                    />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      placeholder="+1 (555) 000-0000"
                      style={{ ...inputStyle, ...getFocusStyle("phone") }}
                    />
                  </div>
                </div>

                {/* Row: Company Size + Inquiry Type */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="grid-cols-1 sm:grid-cols-2">
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Company Size <span style={{ color: "#C19A6B" }}>*</span></label>
                    <select
                      value={form.company_size}
                      onChange={(e) => handleChange("company_size", e.target.value)}
                      onFocus={() => setFocused("company_size")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle,
                        ...getFocusStyle("company_size"),
                        appearance: "none",
                        cursor: "pointer",
                        color: form.company_size ? "#F2EDE6" : "rgba(161,161,170,0.5)",
                      }}
                      required
                    >
                      <option value="" disabled style={{ backgroundColor: "#1A1510" }}>Select size</option>
                      {COMPANY_SIZES.map((s) => (
                        <option key={s} value={s} style={{ backgroundColor: "#1A1510", color: "#F2EDE6" }}>{s} employees</option>
                      ))}
                    </select>
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Area of Interest <span style={{ color: "#C19A6B" }}>*</span></label>
                    <select
                      value={form.inquiry_type}
                      onChange={(e) => handleChange("inquiry_type", e.target.value)}
                      onFocus={() => setFocused("inquiry_type")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle,
                        ...getFocusStyle("inquiry_type"),
                        appearance: "none",
                        cursor: "pointer",
                        color: form.inquiry_type ? "#F2EDE6" : "rgba(161,161,170,0.5)",
                      }}
                      required
                    >
                      <option value="" disabled style={{ backgroundColor: "#1A1510" }}>Select service</option>
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t.value} value={t.value} style={{ backgroundColor: "#1A1510", color: "#F2EDE6" }}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Time */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Preferred Meeting Time</label>
                  <input
                    type="text"
                    value={form.preferred_meeting_time}
                    onChange={(e) => handleChange("preferred_meeting_time", e.target.value)}
                    onFocus={() => setFocused("preferred_meeting_time")}
                    onBlur={() => setFocused(null)}
                    placeholder="e.g. Weekday mornings EST, or a specific date"
                    style={{ ...inputStyle, ...getFocusStyle("preferred_meeting_time") }}
                  />
                </div>

                {/* Notes */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Additional Context</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    onFocus={() => setFocused("notes")}
                    onBlur={() => setFocused(null)}
                    placeholder="Briefly describe your current situation and what you're looking to solve..."
                    rows={4}
                    style={{
                      ...inputStyle,
                      ...getFocusStyle("notes"),
                      resize: "vertical",
                      minHeight: "100px",
                    }}
                  />
                </div>

                {/* Error */}
                {error && (
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(239,68,68,0.9)",
                      margin: 0,
                    }}
                  >
                    {error}
                  </p>
                )}

                {/* Submit */}
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
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: submitting ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s, opacity 0.2s, transform 0.15s",
                    marginTop: "0.25rem",
                  }}
                  onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = "#D4B483" }}
                  onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = "#C19A6B" }}
                >
                  {submitting ? "Submitting..." : "Request Strategy Call"}
                </button>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    color: "rgba(113,113,122,0.8)",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  We take on a limited number of engagements per quarter.
                </p>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem 1rem",
        gap: "1.5rem",
      }}
    >
      {/* Checkmark */}
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
          <path
            d="M4.5 11.5L9 16L17.5 7"
            stroke="#C19A6B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>
        <h3
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "1.5rem",
            fontWeight: 300,
            color: "#F2EDE6",
            marginBottom: "0.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          Request Received
        </h3>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "rgba(161,161,170,0.85)",
            lineHeight: 1.7,
            maxWidth: "38ch",
            margin: "0 auto",
          }}
        >
          We review every submission personally. You will hear from us within one business day.
        </p>
      </div>

      <div
        style={{
          width: "40px",
          height: "1px",
          backgroundColor: "rgba(193,154,107,0.3)",
        }}
      />

      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 300,
          letterSpacing: "0.06em",
          color: "rgba(113,113,122,0.7)",
          textTransform: "uppercase",
        }}
      >
        BlackVault Group
      </p>

      <button
        onClick={onClose}
        style={{
          backgroundColor: "transparent",
          border: "1px solid rgba(193,154,107,0.3)",
          borderRadius: "2px",
          padding: "0.65rem 1.75rem",
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.8rem",
          fontWeight: 400,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(193,154,107,0.75)",
          cursor: "pointer",
          transition: "border-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(193,154,107,0.7)"
          e.currentTarget.style.color = "#C19A6B"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(193,154,107,0.3)"
          e.currentTarget.style.color = "rgba(193,154,107,0.75)"
        }}
      >
        Close
      </button>
    </div>
  )
}
