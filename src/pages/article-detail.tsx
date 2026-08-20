import { Link, useParams } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { PageSEO } from "@/components/page-seo"
import { JsonLd } from "@/components/json-ld"
import { getArticle } from "@/content/articles"
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema"
import { NotFoundPage } from "@/pages/not-found"

export function ArticleDetailPage() {
  const { slug } = useParams()
  const article = getArticle(slug)
  if (!article) return <NotFoundPage />
  const path = `/articles/${article.slug}`
  return <>
    <PageSEO title={article.title} description={article.description} canonicalPath={path} ogImage={article.image} type="article" publishedTime={article.published} modifiedTime={article.modified} />
    <JsonLd schema={[buildArticleSchema(article), buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Articles", url: "/articles" }, { name: article.title, url: path }])]} />
    <Navigation />
    <main className="min-h-screen bg-bv-bg-primary pt-[72px]">
      <article>
        <header className="mx-auto max-w-[900px] px-6 pb-12 pt-16 md:pt-24">
          <nav aria-label="Breadcrumb" className="mb-8 font-body text-sm text-bv-text-muted"><Link className="text-bv-text-muted" to="/">Home</Link> <span aria-hidden="true">/</span> <Link className="text-bv-text-muted" to="/articles">Articles</Link></nav>
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.16em] text-bv-accent">{article.category}</p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.03] text-bv-text-primary">{article.title}</h1>
          <p className="mt-6 max-w-[70ch] font-body text-lg font-light leading-[1.75] text-bv-text-secondary">{article.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 font-body text-sm text-bv-text-muted"><span>By BlackVault Group LLC</span><span>•</span><time dateTime={article.published}>August 19, 2026</time><span>•</span><span>{article.readingTime}</span></div>
        </header>
        <div className="mx-auto max-w-[1100px] px-6"><img src={article.image} alt={article.imageAlt} width="1200" height="630" className="aspect-[1200/630] w-full rounded-sm border border-border object-cover" /></div>
        <div className="mx-auto max-w-[780px] px-6 py-14 md:py-20">
          <aside className="mb-14 border-l-2 border-bv-accent bg-bv-bg-secondary p-7"><p className="font-body text-base font-light leading-[1.8] text-bv-text-primary"><strong className="font-medium">Direct answer:</strong> {article.directAnswer}</p></aside>
          {article.sections.map((section) => <section key={section.heading} className="mb-12">
            <h2 className="mb-5 font-display text-[clamp(1.8rem,4vw,2.5rem)] font-normal leading-[1.15] text-bv-text-primary">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mb-5 font-body text-base font-light leading-[1.85] text-bv-text-secondary">{paragraph}</p>)}
            {section.bullets && <ul className="space-y-3 pl-6 font-body text-base font-light leading-[1.75] text-bv-text-secondary">{section.bullets.map((item) => <li className="list-disc" key={item}>{item}</li>)}</ul>}
            {section.table && <div className="overflow-x-auto"><table className="w-full border-collapse font-body text-sm text-bv-text-secondary"><thead><tr>{section.table.headers.map((h) => <th key={h} className="border border-border bg-bv-bg-secondary p-3 text-left font-medium text-bv-text-primary">{h}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell} className="border border-border p-3 align-top font-light">{cell}</td>)}</tr>)}</tbody></table></div>}
          </section>)}
          <aside className="mt-16 rounded-sm border border-border bg-bv-bg-secondary p-8"><h2 className="font-display text-2xl text-bv-text-primary">Related BlackVault resources</h2><div className="mt-5 flex flex-wrap gap-4">{article.relatedServices.map((service) => <Link key={service.path} className="text-bv-accent" to={service.path}>{service.label} →</Link>)}</div></aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
}
