import { describe, expect, it } from "vitest"

import { normalizeCalLink } from "@/config/cal"

describe("normalizeCalLink", () => {
  it("accepts an event-type path", () => {
    expect(normalizeCalLink("blackvault/strategy-call")).toBe("blackvault/strategy-call")
  })

  it("normalizes a full Cal.com URL", () => {
    expect(normalizeCalLink("https://cal.com/blackvault/strategy-call/")).toBe("blackvault/strategy-call")
  })

  it("rejects missing, placeholder, and unsafe values", () => {
    expect(normalizeCalLink(undefined)).toBeNull()
    expect(normalizeCalLink("your-cal-username/strategy-call")).toBeNull()
    expect(normalizeCalLink("https://example.com/blackvault/strategy-call")).toBeNull()
    expect(normalizeCalLink("blackvault/strategy-call?email=person@example.com")).toBeNull()
  })
})

