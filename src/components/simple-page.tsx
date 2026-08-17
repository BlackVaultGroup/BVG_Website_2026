import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { CTAButton } from "@/components/cta-button"
import { buildWebPageSchema } from "@/lib/schema"

interface SimplePageProps {
  title: string
  description: string
  canonicalPath: string
  eyebrow?: string
  heading: string
  children?: React.ReactNode
}

export function SimplePage({
  title,
  description,
  canonicalPath,
  eyebrow,
  heading,
  children,
}: SimplePageProps) {
  const pageSchema = buildWebPageSchema({
    name: title,
    description,
    url: canonicalPath,
  })

  return (
    <>
      <PageSEO title={title} description={description} canonicalPath={canonicalPath} />
      <JsonLd schema={[pageSchema]} />
      <Navigation />
      <main className="min-h-screen bg-bv-bg-primary pt-[72px]">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-32 lg:px-12">
          {eyebrow && (
            <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="m-0 mb-8 max-w-[28ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            {heading}
          </h1>
          {children}
          <div className="mt-12">
            <CTAButton />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
