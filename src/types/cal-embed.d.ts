interface CalApi {
  (...args: unknown[]): void
  q?: unknown[][]
  ns?: Record<string, CalApi>
  loaded?: boolean
}

interface Window {
  Cal?: CalApi
}

