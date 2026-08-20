import { Link } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { ARTICLES } from "@/content/articles"
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/schema"

export function ArticlesPage() {
  return <>
    <PageSEO title="AI Automation Articles for Small Business | BlackVault Group" description="Practical guides for evaluating AI consultants, implementation costs, automation opportunities, delivery expectations, and build-versus-hire decisions." canonicalPath="/articles" />
    <JsonLd schema={[buildCollectionPageSchema(), buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Articles", url: "/articles" }])]} />
    <Navigation />
    <main className="min-h-screen bg-bv-bg-primary pt-[72px]">
      <header className="mx-auto max-w-[1100px] px-6 pb-12 pt-20 md:pb-16 md:pt-28">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.16em] text-bv-accent">Practical AI guidance</p>
        <h1 className="max-w-[900px] font-display text-[clamp(2.7rem,6vw,5rem)] font-normal leading-[1.02] text-bv-text-primary">Articles for making better AI decisions.</h1>
        <p className="mt-6 max-w-[70ch] font-body text-lg font-light leading-[1.8] text-bv-text-secondary">Clear answers for small and mid-sized businesses evaluating consulting, implementation, ownership, and the right operating model.</p>
      </header>
      <section className="mx-auto grid max-w-[1100px] gap-8 px-6 pb-24 md:grid-cols-3 md:pb-32">
        {ARTICLES.map((article) => <article key={article.slug} className="overflow-hidden rounded-sm border border-border bg-bv-bg-secondary">
          <Link to={`/articles/${article.slug}`} className="block no-underline">
            <img src={article.image} alt={article.imageAlt} width="1200" height="630" className="aspect-[1200/630] w-full object-cover" loading="lazy" />
            <div className="p-7">
              <p className="mb-3 font-body text-[0.7rem] font-medium uppercase tracking-[0.14em] text-bv-accent">{article.category}</p>
              <h2 className="font-display text-2xl font-normal leading-[1.18] text-bv-text-primary">{article.title}</h2>
              <p className="mt-4 font-body text-sm font-light leading-[1.7] text-bv-text-secondary">{article.description}</p>
              <span className="mt-6 inline-block font-body text-sm text-bv-accent">Read article →</span>
            </div>
          </Link>
        </article>)}
      </section>
    </main>
    <Footer />
  </>
}
