import { createClient } from "@supabase/supabase-js"

// Guarded: a missing env var must never take down the whole site.
// The contact form is the only feature that needs Supabase.
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || "https://placeholder.supabase.co"
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "placeholder-anon-key"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
