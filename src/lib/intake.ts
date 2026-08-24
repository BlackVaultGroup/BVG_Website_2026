import { z } from "zod"

export const COMPANY_SIZES = ["solo", "2-10", "11-20", "21-40", "41-60", "61-80"] as const

export const INQUIRY_TYPES = [
  "operational-ai-systems",
  "lead-follow-up-automation",
  "intelligent-workflows",
  "voice-ai-systems",
  "executive-ai-strategy",
  "general",
] as const

const optionalTrimmedString = (maximum: number) =>
  z
    .string()
    .trim()
    .max(maximum)
    .transform((value) => value || null)

export const strategyCallRequestSchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  business_name: z.string().trim().min(1).max(160),
  email: z.string().trim().toLowerCase().email().max(254),
  phone: optionalTrimmedString(40),
  company_size: z.enum(COMPANY_SIZES),
  inquiry_type: z.enum(INQUIRY_TYPES),
  notes: optionalTrimmedString(2_000),
}).strict()

export type StrategyCallRequest = z.infer<typeof strategyCallRequestSchema>
