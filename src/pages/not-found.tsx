import { Link } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"

export function NotFoundPage() {
  return <><PageSEO title="Page Not Found | BlackVault Group" description="The requested page could not be found." canonicalPath="/404" noIndex /><Navigation /><main className="flex min-h-[75vh] flex-col items-center justify-center bg-bv-bg-primary px-6 pt-[72px] text-center"><p className="font-body text-xs uppercase tracking-[0.16em] text-bv-accent">404</p><h1 className="mt-4 font-display text-5xl text-bv-text-primary">This page is not in the vault.</h1><p className="mt-5 font-body font-light text-bv-text-secondary">The address may have changed, or the page may no longer exist.</p><Link to="/" className="mt-8 text-bv-accent">Return home →</Link></main><Footer /></>
}
