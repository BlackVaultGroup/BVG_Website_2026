import { Link, useLocation } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { getServiceArea, REGIONAL_CITY_FOCUSES } from "@/content/service-areas"
import { buildFAQPageSchema, buildServiceSchema, buildWebPageSchema } from "@/lib/schema"
import { useScheduleCall } from "@/components/schedule-call-provider"
import { NotFoundPage } from "@/pages/not-found"

const SERVICE_LINKS = [
  { label: "Operational AI Systems", path: "/operational-ai-systems" },
  { label: "Lead Follow-Up Automation", path: "/lead-follow-up-automation" },
  { label: "Intelligent Workflows", path: "/intelligent-workflows" },
  { label: "Voice AI Systems", path: "/voice-ai-systems" },
]

function ContactButton() {
  const { openModal } = useScheduleCall()
  return <button type="button" onClick={openModal} className="rounded-sm bg-bv-accent px-6 py-3 font-body text-sm font-medium text-bv-bg-primary transition-colors hover:bg-bv-accent-hover">Request a strategy call</button>
}

export function ServiceAreaPage() {
  const { pathname } = useLocation()
  const slug = pathname.split("/").filter(Boolean).at(-1)
  const area = getServiceArea(slug)
  if (!area) return <NotFoundPage />

  const path = `/${area.slug}`
  const isHub = area.slug === "hampton-roads-ai-consulting"
  const schemas = [
    buildServiceSchema({ name: `AI Consulting and Automation in ${area.name}`, description: area.description, url: path, serviceType: "AI Consulting and Business Automation", areaServed: `${area.name}, Virginia` }),
    buildWebPageSchema({ name: area.title, description: area.description, url: path, breadcrumb: [{ name: "Home", url: "/" }, ...(isHub ? [] : [{ name: "Hampton Roads AI Consulting", url: "/hampton-roads-ai-consulting" }]), { name: area.name, url: path }] }),
    buildFAQPageSchema(area.faqs),
  ]

  return <>
    <PageSEO title={area.title} description={area.description} canonicalPath={path} />
    <JsonLd schema={schemas} />
    <Navigation />
    <main className="min-h-screen bg-bv-bg-primary pt-[72px]">
      <header className="border-b border-border bg-bv-bg-secondary">
        <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28">
          <nav aria-label="Breadcrumb" className="mb-8 font-body text-sm text-bv-text-muted"><Link to="/" className="text-bv-text-muted">Home</Link>{!isHub && <><span aria-hidden="true"> / </span><Link to="/hampton-roads-ai-consulting" className="text-bv-text-muted">Hampton Roads</Link></>}<span aria-hidden="true"> / </span><span>{area.name}</span></nav>
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.16em] text-bv-accent">{area.eyebrow}</p>
          <h1 className="max-w-[900px] font-display text-[clamp(2.8rem,6vw,5.3rem)] font-normal leading-[1.02] text-bv-text-primary">{area.headline}</h1>
          <p className="mt-7 max-w-[780px] font-body text-lg font-light leading-[1.8] text-bv-text-secondary">{area.directAnswer}</p>
          <div className="mt-9"><ContactButton /></div>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1100px] gap-12 px-6 py-20 md:grid-cols-[1.3fr_.7fr] md:py-28">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.12] text-bv-text-primary">Start with the work, not the tool.</h2>
          {area.introduction.map((paragraph) => <p key={paragraph} className="mt-6 font-body text-base font-light leading-[1.85] text-bv-text-secondary">{paragraph}</p>)}
        </div>
        <aside className="h-fit border border-border bg-bv-bg-secondary p-7">
          <p className="font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">Relevant services</p>
          <nav className="mt-5 flex flex-col gap-3" aria-label="Relevant services">
            {SERVICE_LINKS.map((service) => <Link key={service.path} to={service.path} className="font-body text-sm text-bv-text-primary no-underline transition-colors hover:text-bv-accent">{service.label} <span aria-hidden="true">→</span></Link>)}
          </nav>
        </aside>
      </section>

      <section className="border-y border-border bg-bv-bg-secondary">
        <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28">
          <p className="font-body text-xs font-medium uppercase tracking-[0.16em] text-bv-accent">LOCAL CONTEXT</p>
          <h2 className="mt-4 max-w-[760px] font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.12] text-bv-text-primary">{area.localHeading}</h2>
          <p className="mt-6 max-w-[850px] font-body text-base font-light leading-[1.85] text-bv-text-secondary">{area.localContext}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border-t border-bv-accent pt-4"><h3 className="font-body text-sm font-medium text-bv-text-primary">Business types this page considers</h3><ul className="mt-4 space-y-2 pl-5 font-body text-sm font-light leading-[1.7] text-bv-text-secondary">{area.industries.map((industry) => <li key={industry} className="list-disc">{industry}</li>)}</ul></div>
            <div className="border-t border-bv-accent pt-4"><h3 className="font-body text-sm font-medium text-bv-text-primary">Common operational friction</h3><ul className="mt-4 space-y-2 pl-5 font-body text-sm font-light leading-[1.7] text-bv-text-secondary">{area.problems.map((problem) => <li key={problem} className="list-disc">{problem}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-20 md:py-28">
        <p className="font-body text-xs font-medium uppercase tracking-[0.16em] text-bv-accent">LOCAL FAQ</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.12] text-bv-text-primary">Questions businesses ask before they invest.</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {area.faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none pr-8 font-body text-base font-medium text-bv-text-primary">{faq.question}<span className="float-right text-bv-accent group-open:hidden" aria-hidden="true">+</span><span className="float-right text-bv-accent hidden group-open:inline" aria-hidden="true">−</span></summary><p className="mt-4 max-w-[75ch] font-body text-base font-light leading-[1.8] text-bv-text-secondary">{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="border-t border-border bg-bv-bg-secondary"><div className="mx-auto max-w-[900px] px-6 py-20 text-center"><h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-normal text-bv-text-primary">Find the first useful improvement.</h2><p className="mx-auto mt-5 max-w-[660px] font-body text-base font-light leading-[1.8] text-bv-text-secondary">Bring the process that is creating the most friction. We will help you decide whether AI, automation, a clearer rule, or a better use of your current tools is the right next step.</p><div className="mt-8"><ContactButton /></div></div></section>

      {isHub && <section className="mx-auto max-w-[1100px] px-6 py-20 md:py-28"><p className="font-body text-xs font-medium uppercase tracking-[0.16em] text-bv-accent">HOW THE REGION WORKS</p><h2 className="mt-4 max-w-[800px] font-display text-[clamp(2rem,4vw,3rem)] font-normal text-bv-text-primary">Different cities. Different operational pressure.</h2><p className="mt-5 max-w-[760px] font-body text-base font-light leading-[1.8] text-bv-text-secondary">The goal is not to force every business into the same AI system. It is to understand the work your team repeats and build the right level of support around it.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{REGIONAL_CITY_FOCUSES.map((city) => <article key={city.name} className="border border-border bg-bv-bg-secondary p-5"><p className="font-body text-base font-medium text-bv-text-primary">{city.name}</p><p className="mt-3 font-body text-sm font-light leading-[1.7] text-bv-text-secondary">{city.focus}</p></article>)}</div></section>}
    </main>
    <Footer />
  </>
}
