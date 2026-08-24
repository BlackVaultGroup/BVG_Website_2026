export const CAL_NAMESPACE = "blackvault-book-call"
export const CAL_ORIGIN = "https://cal.com"

const PLACEHOLDER_LINK = "your-cal-username/strategy-call"

export function normalizeCalLink(value: string | undefined): string | null {
  const normalized = value?.trim().replace(/^https?:\/\/(?:www\.)?cal\.com\//i, "").replace(/^\/+|\/+$/g, "")

  if (!normalized || normalized === PLACEHOLDER_LINK) return null
  if (!/^[a-z0-9][a-z0-9_-]*(?:\/[a-z0-9][a-z0-9_-]*)+$/i.test(normalized)) return null

  return normalized
}

export const calLink = normalizeCalLink(import.meta.env.VITE_CAL_LINK)
export const calEmbedEnabled = import.meta.env.VITE_CAL_EMBED_ENABLED === "true" && calLink !== null
export const calExternalUrl = calLink ? `${CAL_ORIGIN}/${calLink}` : null

