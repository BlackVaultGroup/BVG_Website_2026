import { describe, expect, it } from "vitest"

import { strategyCallRequestSchema } from "@/lib/intake"

const validRequest = {
  full_name: "  Alex Morgan  ",
  business_name: "  Example Company  ",
  email: "  ALEX@EXAMPLE.COM  ",
  phone: "  ",
  company_size: "2-10",
  inquiry_type: "lead-follow-up-automation",
  notes: "  Needs faster lead response.  ",
}

describe("strategyCallRequestSchema", () => {
  it("normalizes a valid public request", () => {
    const parsed = strategyCallRequestSchema.parse(validRequest)

    expect(parsed).toEqual({
      full_name: "Alex Morgan",
      business_name: "Example Company",
      email: "alex@example.com",
      phone: null,
      company_size: "2-10",
      inquiry_type: "lead-follow-up-automation",
      notes: "Needs faster lead response.",
    })
  })

  it("rejects unsupported enum values", () => {
    const result = strategyCallRequestSchema.safeParse({
      ...validRequest,
      company_size: "1000+",
    })

    expect(result.success).toBe(false)
  })

  it("rejects client-controlled operational fields", () => {
    const result = strategyCallRequestSchema.safeParse({
      ...validRequest,
      status: "closed_won",
    })

    expect(result.success).toBe(false)
  })

  it("rejects oversized notes", () => {
    const result = strategyCallRequestSchema.safeParse({
      ...validRequest,
      notes: "x".repeat(2_001),
    })

    expect(result.success).toBe(false)
  })
})
