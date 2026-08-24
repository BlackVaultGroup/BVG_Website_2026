import { useEffect, useId, useRef, useState } from "react"

import {
  CAL_NAMESPACE,
  calEmbedEnabled,
  calExternalUrl,
  calLink,
} from "@/config/cal"
import { getNamespacedCalApi, loadCalEmbed } from "@/lib/cal-embed"

interface CalBookingEmbedProps {
  name: string
  email: string
}

type EmbedState = "loading" | "ready" | "error" | "unconfigured" | "booked"

const LOAD_TIMEOUT_MS = 12_000

export function CalBookingEmbed({ name, email }: CalBookingEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reactId = useId().replace(/[^a-z0-9]/gi, "")
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<EmbedState>(calEmbedEnabled ? "loading" : "unconfigured")

  useEffect(() => {
    if (!calEmbedEnabled || !calLink || !containerRef.current) {
      setState("unconfigured")
      return
    }

    let active = true
    const namespace = `${CAL_NAMESPACE}-${reactId}-${attempt}`
    const container = containerRef.current
    container.replaceChildren()
    setState("loading")

    const timeout = window.setTimeout(() => {
      if (active) setState("error")
    }, LOAD_TIMEOUT_MS)

    void loadCalEmbed()
      .then((cal) => {
        if (!active) return
        const api = getNamespacedCalApi(cal, namespace)
        const listen = (action: string, callback: () => void) => {
          api("on", {
            action,
            callback: () => {
              if (active) callback()
            },
          })
        }

        const markReady = () => {
          window.clearTimeout(timeout)
          setState("ready")
        }
        listen("linkReady", markReady)
        listen("bookerReady", markReady)
        listen("linkFailed", () => {
          window.clearTimeout(timeout)
          setState("error")
        })
        listen("bookingSuccessfulV2", () => {
          window.clearTimeout(timeout)
          setState("booked")
        })

        api("ui", {
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#C19A6B",
              "cal-bg": "#0F0B0A",
              "cal-bg-emphasis": "#221D1B",
              "cal-border": "rgba(193,154,107,0.22)",
              "cal-text": "#FFFFFF",
              "cal-text-emphasis": "#FFFFFF",
              "cal-text-subtle": "#A1A1AA",
            },
            dark: {
              "cal-brand": "#C19A6B",
              "cal-bg": "#0F0B0A",
              "cal-bg-emphasis": "#221D1B",
              "cal-border": "rgba(193,154,107,0.22)",
              "cal-text": "#FFFFFF",
              "cal-text-emphasis": "#FFFFFF",
              "cal-text-subtle": "#A1A1AA",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        })
        api("inline", {
          elementOrSelector: container,
          calLink,
          config: {
            name,
            email,
            layout: "month_view",
            theme: "dark",
          },
        })
      })
      .catch(() => {
        if (active) {
          window.clearTimeout(timeout)
          setState("error")
        }
      })

    return () => {
      active = false
      window.clearTimeout(timeout)
      container.replaceChildren()
    }
  }, [attempt, email, name, reactId])

  const showOverlay = state === "loading" || state === "error" || state === "unconfigured"

  return (
    <div>
      {state === "booked" && (
        <div
          role="status"
          style={{
            marginBottom: "1rem",
            border: "1px solid rgba(193,154,107,0.3)",
            backgroundColor: "rgba(193,154,107,0.08)",
            padding: "0.875rem 1rem",
            color: "#F2EDE6",
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.875rem",
          }}
        >
          Your booking was submitted. Please keep the Cal.com confirmation for your records.
        </div>
      )}

      <div
        style={{
          position: "relative",
          minHeight: "min(760px, 72vh)",
          backgroundColor: "#0F0B0A",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div ref={containerRef} style={{ width: "100%", minHeight: "min(760px, 72vh)" }} />

        {showOverlay && (
          <div
            role={state === "loading" ? "status" : "alert"}
            aria-live="polite"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#0F0B0A",
              fontFamily: "'Jost', sans-serif",
              color: "#A1A1AA",
            }}
          >
            {state === "loading" ? (
              <>
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[rgba(193,154,107,0.25)] border-t-[#C19A6B]" />
                <p style={{ margin: 0 }}>Loading available times…</p>
              </>
            ) : (
              <>
                <p style={{ margin: 0, maxWidth: "42ch", lineHeight: 1.65 }}>
                  {state === "unconfigured"
                    ? "Your request was saved, but online scheduling is not configured yet. We will contact you within one business day."
                    : "Your request was saved, but the calendar could not load. You can retry or open Cal.com directly."}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
                  {state === "error" && (
                    <button
                      type="button"
                      onClick={() => setAttempt((value) => value + 1)}
                      className="rounded-sm border border-bv-accent bg-transparent px-5 py-2.5 font-body text-sm font-medium text-bv-accent transition-colors hover:bg-bv-accent hover:text-bv-bg-primary"
                    >
                      Retry calendar
                    </button>
                  )}
                  {calExternalUrl && (
                    <a
                      href={calExternalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm bg-bv-accent px-5 py-2.5 font-body text-sm font-medium text-bv-bg-primary no-underline transition-colors hover:bg-bv-accent-hover"
                    >
                      Open Cal.com
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
