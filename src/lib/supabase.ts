import { createClient } from "@supabase/supabase-js"

// Guarded: a missing env var must never take down the whole site.
// The contact form is the only feature that needs Supabase.
const configuredUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const configuredAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const isSupabaseConfigured = Boolean(configuredUrl && configuredAnonKey)

const supabaseUrl = configuredUrl || "https://placeholder.supabase.co"
const supabaseAnonKey = configuredAnonKey || "placeholder-anon-key"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
