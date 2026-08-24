# BlackVault SEO, AEO, and GEO Final Implementation Plan

**Status:** Final planning document before execution  
**Created:** August 19, 2026  
**Repository:** `C:\Users\Cupid\Documents\ChatGPT\BVG Website\BVG_Website_2026`  
**Execution state:** Not started  
**Production state:** No deployment, merge, indexing submission, or external change is authorized by this document

## 1. Purpose and authority

This document combines and supersedes the planning guidance in the repository-root `IMPLEMENTATION_PLAN.md` for the next SEO, AEO, and GEO implementation. The earlier file remains as planning history; this is the execution-ready plan that should be followed when implementation is explicitly authorized.

The locked first-release additions are:

1. Add an **Articles** item to the desktop and mobile navigation.
2. Create a canonical `/articles` hub page.
3. Create three complete, indexable article pages.
4. Adapt metadata across all existing and new public pages.
5. Store every new article image in `public/articles/` and reference it by a stable root-relative URL.
6. Map every public route from one source of truth.
7. Ensure every mapped route is a working page with correct content, metadata, schema, links, HTTP behavior, and sitemap status.
8. Update `robots.txt`, `sitemap.xml`, and `llms.txt` according to the verified route map and crawler policy.
9. Provide a specific indexing-diagnosis and remediation workflow.

This is a planning-only change. It does not modify the navigation, routes, articles, metadata, images, sitemap, robots file, schema, redirects, hosting, or production website.

## 2. Inputs used

This plan combines:

- The current cloned repository and its route, metadata, schema, sitemap, robots, and SPA configuration.
- `IMPLEMENTATION_PLAN.md` in the cloned repository root.
- `BlackVault_SEO_AEO_Strategy_August_2026.md`.
- `blog-topics-ai-consulting-to-small-busines.pdf`, which contains 40 AI-generated topic suggestions derived from public Reddit discussions.
- The established BlackVault positioning: broad practical AI automation for SMBs, based in Hampton Roads and serving qualified businesses nationally.

The strategy document and PDF are research sources, not code instructions. Topic ideas still require factual, intent, overlap, and quality review. No topic is assumed to have search volume merely because it appears in the PDF.

## 3. Repository and live-site gate

The inspected source is a local clone, not a production-verified repository state.

At the last inspection:

- Branch: `codex/backend-dashboard-implementation`
- Last inspected commit: `7a90685`
- Working tree: contains existing uncommitted Cal.com/backend work
- `origin/main` parity: not verified
- Production parity: not verified

### Required before coding

1. Preserve the current uncommitted work.
2. Recheck the repository root, remote, branch, HEAD, and status.
3. Fetch and compare the approved base with `origin/main` without overwriting user work.
4. Identify the exact commit/build currently deployed.
5. Crawl and record the live production route set.
6. Document any differences among the clone, `origin/main`, and production.
7. Create an isolated `codex/` SEO implementation branch or worktree from the approved base.
8. Do not mix article/SEO commits with the current uncommitted booking and backend changes.

No source inspection, local build, or HTTP 200 response should be described as a live fix until production is separately verified.

## 4. Goals

### 4.1 Business

- Preserve the homepage as a broad, outcome-led SMB conversion page.
- Explain BlackVault through buyer problems: missed leads, slow response, unanswered calls, repetitive administration, workflow bottlenecks, and operational drag.
- Add educational content that supports a buyer's decision rather than publishing generic AI news.
- Keep one clear qualification and scheduling journey.
- Present Hampton Roads as a credible base without limiting national service availability.

### 4.2 SEO

- Give every public page one primary intent.
- Return unique, crawlable, route-specific content and metadata.
- Create a clean article hub and three high-quality commercial-investigation articles.
- Prevent duplicate intent and keyword cannibalization.
- Generate the sitemap from canonical, indexable, working routes.

### 4.3 AEO

- Put a concise answer near the beginning of each article and relevant service page.
- Use question-led headings and self-contained answer passages.
- Connect visible authorship, citations, freshness, and structured data.
- Keep FAQ content and FAQ schema synchronized from the same data.

### 4.4 GEO

- Present one consistent `BlackVault Group LLC` entity.
- Connect the organization, founders, services, location, articles, and verified external profiles.
- Publish evidence-backed explanations that other systems can cite accurately.
- Keep on-site entity work distinct from off-site reputation, reviews, directories, and third-party mentions.

## 5. Non-goals and safeguards

The implementation will not:

- Guarantee rankings, indexing, rich results, citations, recommendations, leads, or revenue.
- Publish all 40 PDF topics as thin articles.
- Create city-page clones.
- Invent prices, client results, savings, timelines, affiliations, credentials, case studies, testimonials, or compliance claims.
- Add structured data that is unsupported by visible content.
- Change `dateModified` or sitemap `lastmod` merely because the site was rebuilt.
- Change the booking flow, Supabase integration, database, or dashboard.
- Deploy, merge, submit a sitemap, request indexing, or modify external profiles without explicit approval.

## 6. Factual claim approval gate

Before metadata or article copy is finalized, classify every material claim as:

- Verified and approved
- Accurate with required qualification
- Planned or illustrative only
- Unsupported and prohibited

Claims requiring evidence include:

- `$2,000` starting engagements or any `$60,000+` range.
- Typical 30-to-60-day results.
- Guarantees to remain until outcomes or milestones are achieved.
- `100%` milestone completion.
- Five new builds per month.
- International or named-market operating experience.
- NDA, data-sharing, model-training, privacy, and security promises.
- Client counts, time saved, revenue captured, response-time gains, or ROI.
- Founder identities, biographies, roles, and external profile links.
- Legal business name, public contact information, and service-area wording.

Unverified outcomes must be rewritten as process, capability, or evaluation guidance. They must not be placed in titles, descriptions, schema, FAQs, articles, or social images.

## 7. Locked information architecture

### 7.1 Primary navigation

Planned desktop order:

1. How It Works
2. Services
3. Articles
4. Primary contact/scheduling CTA

Planned mobile order:

1. How It Works
2. Services and its existing service links
3. Articles
4. Primary contact/scheduling CTA

Requirements:

- `Articles` links to `/articles` using a crawlable router link that renders as an anchor.
- The Articles item appears in both desktop and mobile navigation.
- Navigation remains keyboard accessible.
- Active/current-page state is visually clear and accessible.
- The Articles item does not become a large dropdown in the first release.
- The footer includes the Articles hub. Individual article links may appear in a Featured Articles group if the footer remains readable.
- Existing scheduling behavior is not changed by this work.

### 7.2 Complete first-release route map

| Route | Type | Primary intent | Nav | Index | Sitemap | Canonical | Planned schema |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Home | AI automation for small and mid-sized businesses | Logo/Home | Yes | Yes | Self | Organization, WebSite, WebPage; FAQPage only for visible FAQs |
| `/how-it-works` | Process | How BlackVault evaluates, designs, builds, tests, and supports systems | Main | Yes | Yes | Self | WebPage, BreadcrumbList |
| `/operational-ai-systems` | Service | Custom AI systems and integrations | Services | Yes | Yes | Self | Service, WebPage, BreadcrumbList |
| `/lead-follow-up-automation` | Service | Faster lead response, qualification, routing, and follow-up | Services | Yes | Yes | Self | Service, WebPage, BreadcrumbList |
| `/intelligent-workflows` | Service | Workflow and business-process automation | Services | Yes | Yes | Self | Service, WebPage, BreadcrumbList |
| `/voice-ai-systems` | Service | AI phone answering, qualification, scheduling, and escalation | Services | Yes | Yes | Self | Service, WebPage, BreadcrumbList |
| `/executive-ai-strategy` | Service | AI audit, roadmap, and build-vs.-buy guidance | Services | Yes | Yes | Self | Service, WebPage, BreadcrumbList |
| `/about` | Entity | Company, founders, approach, and service area | Footer or main if retained | Yes | Yes | Self | AboutPage, Organization, Person, BreadcrumbList |
| `/articles` | Article hub | Practical AI automation guidance for SMB buyers | Main | Yes | Yes | Self | CollectionPage, BreadcrumbList |
| `/articles/ai-consulting-cost-small-business` | Article | AI consulting and implementation cost factors | Hub/internal | Yes | Yes | Self | BlogPosting, BreadcrumbList, Person, Organization |
| `/articles/what-an-ai-consultant-should-deliver` | Article | Expected consulting and implementation deliverables | Hub/internal | Yes | Yes | Self | BlogPosting, BreadcrumbList, Person, Organization |
| `/articles/ai-consultant-vs-in-house` | Article | Consultant vs. employee/team/developer decision | Hub/internal | Yes | Yes | Self | BlogPosting, BreadcrumbList, Person, Organization |
| `/privacy-policy` | Legal | Privacy disclosures | Footer | Yes unless legal review says otherwise | Yes if indexable | Self | WebPage if used |
| `/terms-of-service` | Legal | Site terms | Footer | Yes unless legal review says otherwise | Yes if indexable | Self | WebPage if used |
| `/not-found` or hosting 404 | Error | Help users recover from invalid URLs | No | No | No | None | None |

### 7.3 Legacy redirects

The following legacy routes should return server-level 301 responses rather than relying only on client-side navigation:

| Legacy route | Destination |
| --- | --- |
| `/client-response-infrastructure` | `/lead-follow-up-automation` |
| `/ai-strategy` | `/executive-ai-strategy` |
| `/workflow-automation` | `/intelligent-workflows` |
| `/custom-ai-integration` | `/operational-ai-systems` |
| `/strategic-ai-partnership` | `/executive-ai-strategy` |

Redirect sources must not appear in the sitemap, canonical map, navigation, article links, or `llms.txt`.

### 7.4 Future routes not included in the first article release

The combined strategy still recommends one substantive Hampton Roads page. It should remain a future route until its facts, content, and scope are approved. It must not be added to navigation, the sitemap, or `llms.txt` as a placeholder.

No Norfolk, Virginia Beach, Chesapeake, Hampton, Newport News, Portsmouth, Suffolk, Williamsburg, Yorktown, or other city clones should be created.

## 8. Articles hub plan

### 8.1 Route

`/articles`

### 8.2 Purpose

The hub organizes practical decision content for small-business owners. It is not a company-news feed and should not publish generic AI trend summaries.

### 8.3 Required sections

1. Breadcrumbs.
2. One H1: practical AI automation articles for small businesses.
3. A concise introduction stating who the articles are for and what decisions they help with.
4. A three-card article grid.
5. Each card includes:
   - Article image
   - Article title
   - Short description
   - Author
   - Published or updated date
   - Crawlable link to the article
6. A restrained CTA to assess where AI automation fits.
7. Standard navigation and footer.

### 8.4 Hub behavior

- All three article links work without client-side-only button handlers.
- Cards remain usable by keyboard and screen reader.
- Images have descriptive alt text unless purely decorative.
- The page has unique metadata, canonical, CollectionPage schema, and breadcrumbs.
- The hub is included in the main navigation, internal link graph, sitemap, and `llms.txt`.

## 9. Three locked articles

### 9.1 Article 1: AI consulting cost

**Route:** `/articles/ai-consulting-cost-small-business`  
**Working H1:** How Much Does AI Consulting Cost for a Small Business?  
**Primary intent:** Understand cost drivers, engagement models, implementation costs, and proposal evaluation.  
**Commercial connection:** Executive AI Strategy and Operational AI Systems.

#### Content brief

1. Direct answer in the first 40 to 60 words without inventing a BlackVault price.
2. Difference between consulting, implementation, software, and ongoing operating costs.
3. Primary cost drivers:
   - Process complexity
   - Number of systems/integrations
   - Data readiness
   - Human review and risk controls
   - Testing and monitoring
   - Documentation and support
4. Common engagement structures:
   - Audit/strategy project
   - Focused pilot
   - Implementation project
   - Ongoing support or advisory
5. What a useful proposal should include.
6. Hidden costs and ownership questions.
7. When a business should delay spending.
8. A transparent CTA to discuss scope, not a guaranteed quote.

#### Claim guardrail

Do not publish exact BlackVault ranges until pricing is approved. Industry price ranges require current, credible sources and clear qualification.

### 9.2 Article 2: Consultant deliverables

**Route:** `/articles/what-an-ai-consultant-should-deliver`  
**Working H1:** What Should an AI Consultant Deliver to Your Business?  
**Primary intent:** Give buyers a practical deliverables and ownership checklist.  
**Commercial connection:** How It Works and Executive AI Strategy.

#### Content brief

1. Direct answer near the top.
2. Discovery and operational assessment.
3. Prioritized opportunity map.
4. Build-vs.-buy recommendation.
5. Architecture and data-flow documentation.
6. Implementation scope and acceptance criteria.
7. Testing, failure handling, and human escalation.
8. Security, permissions, and credential ownership.
9. Training, handoff, and maintenance documentation.
10. Measurement plan and post-launch support.
11. Red flags:
    - Tool-first recommendations
    - No success criteria
    - No ownership/handoff plan
    - Unsupported ROI promises
    - Hidden dependencies
12. CTA to review an operational problem or proposal.

### 9.3 Article 3: Consultant vs. in-house

**Route:** `/articles/ai-consultant-vs-in-house`  
**Working H1:** AI Consultant vs. In-House Team: Which Does a Small Business Need?  
**Primary intent:** Help buyers choose between outside consulting, a full-time hire/team, a developer, a software vendor, or a hybrid approach.  
**Commercial connection:** Executive AI Strategy.

#### Content brief

1. Direct decision summary near the top.
2. What each option actually provides.
3. Decision factors:
   - Frequency of ongoing work
   - Need for cross-functional diagnosis
   - Implementation complexity
   - Speed to start
   - Internal management capacity
   - Security and access requirements
   - Long-term ownership
4. When a consultant is the better fit.
5. When an internal hire or team is the better fit.
6. When a focused developer or vendor is sufficient.
7. When a hybrid model makes sense.
8. A comparison table with factual, non-promotional criteria.
9. Questions to answer before deciding.
10. CTA to assess the required operating model.

## 10. Article template standard

Every article page should render:

1. Navigation.
2. Breadcrumbs with visible links.
3. Article category or topical label.
4. One H1.
5. Short description/deck.
6. Full author name and link to a substantive About/founder section where available.
7. Published date.
8. Last-updated date only after a material update.
9. Hero image from `/public/articles/`.
10. Direct answer paragraph.
11. Semantic article body with logical H2/H3 hierarchy.
12. Tables/lists only where they improve understanding.
13. Human-readable sources and external links.
14. Related service link(s).
15. Related article links.
16. One appropriate CTA.
17. Footer.
18. Route-specific metadata and BlogPosting JSON-LD.

Article content must be available in the initial HTML, not only after client-side JavaScript runs.

## 11. Article content data

Use one maintainable, typed source for article metadata and content. Markdown or MDX with validated front matter is preferred if a compatibility spike confirms it works cleanly with the existing Vite/React stack and static rendering.

Required fields:

- `title`
- `slug`
- `description`
- `primaryQuestion`
- `authorId`
- `reviewerId` when used
- `datePublished`
- `dateModified`
- `reviewDue`
- `canonicalPath`
- `heroImage`
- `heroImageAlt`
- `socialImage`
- `index`
- `sources`
- `relatedServices`
- `relatedArticles`

Validation must fail the build for:

- Duplicate slugs
- Duplicate canonicals
- Missing titles or descriptions
- Missing image files
- Missing alt text for informative images
- Invalid dates
- Future publication dates unless explicitly scheduled
- Missing author records
- Broken related-route references
- Draft content marked indexable

## 12. Image plan

### 12.1 Required location

All new article images must be stored under:

`public/articles/`

Planned assets:

- `public/articles/ai-consulting-cost-small-business.webp`
- `public/articles/what-an-ai-consultant-should-deliver.webp`
- `public/articles/ai-consultant-vs-in-house.webp`
- Optional shared hub/social asset: `public/articles/articles-hub-og.webp`

### 12.2 Image requirements

- Use stable, lowercase, hyphenated filenames.
- Prefer WebP unless transparency or another requirement justifies PNG/SVG.
- Article social images should use a consistent 1200x630 composition.
- Visible article images should have intrinsic width and height.
- Use `loading="lazy"` below the fold; the article hero may load eagerly if it is the largest-contentful element.
- Provide descriptive alt text for informative images.
- Do not repeat the article title as meaningless alt text when the visual has different information.
- Avoid text-heavy generated images whose words become unreadable on cards.
- Confirm every referenced image exists in `public/` before build completion.
- Remove unused duplicate images only under a separately reviewed cleanup; do not delete existing assets during this feature by assumption.

### 12.3 Image acceptance

- Every article card and detail hero loads locally and in the production build.
- No broken URLs, layout shifts, or oversized uncompressed assets.
- Social preview URLs are absolute in metadata.
- All image URLs use the canonical production origin when emitted in JSON-LD or social metadata.

## 13. Metadata plan

### 13.1 Metadata system changes

The central page metadata model should support:

- Title
- Description
- Canonical path
- Index/noindex
- Open Graph type
- Open Graph image
- X image/card
- Article author
- Published date
- Modified date

Metadata must be generated in the initial route HTML. `index.html` homepage defaults must not be the only metadata returned for deep routes.

### 13.2 Proposed metadata matrix

Final wording must be checked against live query intent and approved claims before implementation.

| Route | Proposed title | Proposed description |
| --- | --- | --- |
| `/` | AI Automation for Small Business \| BlackVault Group | BlackVault Group designs practical AI systems for lead response, phone answering, repetitive workflows, and operational bottlenecks in small and mid-sized businesses. |
| `/how-it-works` | How Our AI Automation Process Works \| BlackVault Group | See how BlackVault assesses operations, identifies worthwhile automation opportunities, designs systems, tests them, and prepares teams for ownership. |
| `/operational-ai-systems` | Custom AI Systems for Small Business \| BlackVault Group | Custom AI systems designed around your existing workflows, tools, data, and operating requirements, with clear integration and handoff planning. |
| `/lead-follow-up-automation` | Lead Follow-Up Automation for Small Business \| BlackVault Group | Improve lead intake, response, qualification, routing, and follow-up with systems designed around your existing sales process and CRM. |
| `/intelligent-workflows` | Workflow Automation for Small Business \| BlackVault Group | Reduce repetitive work and operational delays by mapping business processes and building reliable workflow automation around the way your team works. |
| `/voice-ai-systems` | AI Phone Answering for Small Business \| BlackVault Group | Explore AI phone systems for answering calls, gathering information, qualifying inquiries, scheduling appointments, and escalating to a person when needed. |
| `/executive-ai-strategy` | AI Strategy Consulting for Small Business \| BlackVault Group | Assess where AI fits, what to prioritize, and whether to build, buy, pilot, or wait before committing budget to an implementation. |
| `/about` | About BlackVault Group LLC \| AI Automation Consultants | Learn how BlackVault Group LLC approaches practical AI automation for small and mid-sized businesses from Hampton Roads to qualified clients nationwide. |
| `/articles` | AI Automation Articles for Small Business \| BlackVault Group | Practical guides for evaluating AI consultants, implementation costs, automation opportunities, delivery expectations, and build-versus-hire decisions. |
| `/articles/ai-consulting-cost-small-business` | How Much Does AI Consulting Cost for a Small Business? | Learn what shapes AI consulting and implementation costs, how common engagement models differ, and what to review before approving a proposal. |
| `/articles/what-an-ai-consultant-should-deliver` | What Should an AI Consultant Deliver to Your Business? | Use this practical checklist to evaluate AI consulting deliverables, implementation scope, testing, documentation, ownership, and post-launch support. |
| `/articles/ai-consultant-vs-in-house` | AI Consultant vs. In-House Team: Which Do You Need? | Compare an AI consultant, internal team, developer, software vendor, and hybrid approach using scope, speed, ownership, and ongoing workload. |
| `/privacy-policy` | Privacy Policy \| BlackVault Group LLC | Read how BlackVault Group LLC describes website inquiries, scheduling information, service providers, data handling, and privacy choices. |
| `/terms-of-service` | Terms of Service \| BlackVault Group LLC | Review the terms that govern use of the BlackVault Group LLC website and its general informational content. |

### 13.3 Metadata QA

- Titles and descriptions are unique.
- Titles describe the page before the brand suffix.
- Descriptions do not promise rankings, savings, timelines, or prices.
- Canonicals use `https://blackvaultgroupllc.com` and the exact route.
- Every social image exists.
- Article routes emit article-specific Open Graph values.
- Legal pages use accurate descriptions consistent with their visible text.
- Redirect routes emit no independent canonical metadata.
- The 404 page is noindex and has no sitemap entry.

## 14. Page and route registry

Create one typed registry that controls:

- Route path
- Page type
- Navigation/footer status
- Primary intent
- Metadata
- Canonical
- Indexing state
- Sitemap inclusion
- `lastmod` source
- Schema builders
- Social image
- Related routes

Application routing, navigation, sitemap generation, `llms.txt`, and route tests should consume the registry or the same validated content source.

### Registry invariants

- Every route is unique.
- Every indexable route has one canonical.
- Every sitemap route exists and returns 200.
- Redirect sources are not indexable and are not sitemap entries.
- Noindex routes are not sitemap entries.
- Every navigation link resolves.
- Every article in the hub has a working detail route.
- Every article route is linked from the hub.
- No page is orphaned.

## 15. Rendering, status, and crawlability

### 15.1 Required outcome

Every indexable route must provide its essential content in the initial HTML response:

- Title
- Description
- Canonical
- Robots meta
- H1
- Main body text
- Crawlable internal links
- JSON-LD

Preferred implementation direction: retain the existing React/Vite interface and add maintained build-time static rendering for all public content routes. If a compatibility spike shows that this cannot reliably support article content, metadata, and routing, evaluate a framework migration as a separate decision.

### 15.2 HTTP behavior

- Canonical pages return 200.
- Legacy routes return 301.
- Unknown routes return a real 404.
- Server errors return appropriate 5xx responses rather than the homepage shell.
- No invalid route returns the homepage with a 200 status.

### 15.3 Working-page definition

A page is working only when:

1. The URL loads directly, not only after navigating from the homepage.
2. Refreshing the URL works.
3. The initial HTML contains route-specific content and metadata.
4. The H1 and visible content are unique.
5. Canonical and schema use the correct production URL.
6. Navigation, footer, breadcrumbs, related links, and CTA work.
7. Images load from valid public URLs.
8. The page is accessible by keyboard and on mobile.
9. It returns the intended HTTP status.
10. Its sitemap/indexing state matches the route registry.

## 16. On-page content and FAQ work

### 16.1 Existing pages

- Preserve the homepage's broad SMB focus.
- Add concise answer-first passages to service pages where needed.
- Replace generic headings with natural buyer questions where appropriate.
- Add page-specific FAQs rather than putting every question on the homepage.
- Explain fit, non-fit, process, integration, ownership, monitoring, failure handling, and human escalation.
- Add contextual links to the three new articles.
- Keep one primary CTA.

### 16.2 FAQ synchronization

The current visible FAQ and FAQ schema use different arrays and have already drifted. Replace them with one shared data source.

Requirements:

- Only visible Q&A content appears in FAQPage schema.
- Answer wording has the same meaning in the UI and JSON-LD.
- Unverified prices, timelines, guarantees, or data promises are removed or approved.
- Article-specific FAQs remain on their article and are not duplicated site-wide.
- FAQ schema is treated as semantic support, not a guaranteed rich-result feature.

## 17. Structured data matrix

| Page type | Schema |
| --- | --- |
| Home | Organization, WebSite, WebPage; FAQPage only for visible approved FAQs |
| Service | Service, WebPage, BreadcrumbList, Organization reference |
| How It Works | WebPage, BreadcrumbList |
| About | AboutPage, Organization, approved Person entities, BreadcrumbList |
| Articles hub | CollectionPage, BreadcrumbList |
| Article detail | BlogPosting, BreadcrumbList, Person author, Organization publisher |
| Legal | WebPage only where useful |
| 404 | No indexable structured data |

### 17.1 BlogPosting requirements

- `headline`
- `description`
- `image`
- `datePublished`
- `dateModified`
- `author`
- `publisher`
- `mainEntityOfPage`
- `inLanguage`

Schema must reference absolute, canonical production URLs and exactly match visible author/date/content information.

### 17.2 Entity requirements

- Use `BlackVault Group LLC` consistently.
- Use full approved founder names rather than first names alone.
- Add only verified `sameAs` profiles.
- Confirm the logo URL and public service-area wording.
- Avoid LocalBusiness schema until NAP details and eligibility are approved.
- Do not emit duplicate or conflicting BreadcrumbList objects.

## 18. Sitemap plan

Generate `sitemap.xml` from the route/article registry.

### Include

- All canonical, public, indexable, 200-status pages in the locked route table.
- Accurate `lastmod` only when the content has materially changed.

### Exclude

- Redirect sources
- 404 routes
- Draft articles
- Noindex routes
- Query/parameter duplicates
- Preview/staging URLs
- Future Hampton Roads or other placeholder pages not yet implemented

### Rules

- Use the canonical HTTPS origin.
- Omit `priority` and `changefreq` unless a documented non-Google requirement exists.
- The sitemap must never include a route that fails the direct-load test.
- Article publication and modification dates come from validated content metadata.
- Add an automated sitemap-to-route parity test.

## 19. robots.txt plan

Because the intended public site is crawlable, the safest simple baseline is:

```text
User-agent: *
Allow: /

Sitemap: https://blackvaultgroupllc.com/sitemap.xml
```

This general rule already permits compliant crawlers. Before implementation, review the current official documentation for any explicitly named crawler.

### Crawler-policy requirements

- Distinguish search/retrieval crawling from model-training controls.
- Review `OAI-SearchBot` separately from `GPTBot`.
- Do not describe `Google-Extended` as controlling Google Search or AI Overviews.
- Add crawler-specific groups only if BlackVault wants a policy different from the general allow rule or wants the policy documented explicitly.
- Do not block CSS, JavaScript, article images, or other resources required to render public pages.
- Do not use robots.txt to remove a page from search; use a real `noindex`, authentication, or deletion/404/410 strategy as appropriate.
- Do not claim that allowing a crawler guarantees indexing, citation, or recommendation.

## 20. llms.txt plan

- Keep `llms.txt` factual and concise.
- Use literal Markdown links to canonical routes.
- Add the `/articles` hub and the three article routes after they are real and working.
- Generate or validate links against the route registry.
- Exclude redirects, drafts, placeholders, noindex pages, and 404 routes.
- Do not describe `llms.txt` as a Google ranking or AI Overview requirement.

## 21. Internal linking plan

- Main navigation links to `/articles`.
- Homepage links to the Articles hub in an appropriate supporting location, not above the primary CTA.
- Articles hub links to all three articles.
- Every article links to at least one relevant service page.
- Relevant service pages link back to the corresponding article.
- Articles link to each other only when contextually useful.
- About/author links make authorship and entity relationships clear.
- Breadcrumbs use crawlable anchors.
- Footer links to `/articles`.
- No article is orphaned.
- Avoid generic anchor text such as `click here`.

### Recommended article-to-service links

| Article | Primary service link | Secondary link |
| --- | --- | --- |
| AI consulting cost | Executive AI Strategy | Operational AI Systems |
| Consultant deliverables | How It Works | Executive AI Strategy |
| Consultant vs. in-house | Executive AI Strategy | About |

## 22. Freshness and editorial governance

- Set honest `datePublished` values at launch.
- Initially set `dateModified` to the publication date only if the content system requires it.
- Change `dateModified` only after a material revision.
- Do not update every page date during a build or deploy.
- Review the three articles approximately every 90 days.
- Check cited statistics, external links, platform references, business claims, and CTAs during review.
- Record editorial changes so the public update date can be justified.
- Add new articles only when real buyer questions or search data show a distinct information gap.

## 23. Indexing diagnosis and remediation

Indexing is not guaranteed. If a page is not indexed, diagnose the specific state before changing content or repeatedly requesting indexing.

### 23.1 Baseline diagnostic sequence

1. Confirm the deployed URL is the intended canonical.
2. Confirm the URL returns 200 and is not a soft 404.
3. Check `robots.txt` access.
4. Check the robots meta/X-Robots-Tag for `noindex`.
5. Check the canonical tag and Google's selected canonical in Search Console.
6. Confirm the URL is present once in the sitemap.
7. Confirm crawlable internal links point to the URL.
8. Inspect initial HTML for title, H1, body, links, and schema without JavaScript.
9. Use Search Console URL Inspection and the live test.
10. Compare the page with other pages for duplication or thin content.
11. Check hosting/CDN logs and response failures where available.

### 23.2 Issue-specific fixes

| Search Console/indexing state | Likely action |
| --- | --- |
| Blocked by robots.txt | Remove the unintended block, redeploy, retest access, then request recrawl. |
| Excluded by `noindex` | Remove `noindex` only if the route should be public and indexable; redeploy and retest. |
| Page with redirect | Ensure the redirect is intentional, remove the source from sitemap/internal links, and index the destination. |
| Redirect error | Simplify chains/loops, use one server 301, and update all internal links to the final URL. |
| Soft 404 | Add substantive content if the page should exist or return a real 404/410 if it should not. |
| Not found 404 | Restore the route only if it is intended; otherwise remove links/sitemap entries or redirect a genuine replacement. |
| Duplicate without user-selected canonical | Add a correct self-canonical or consolidate/redirect duplicates; align sitemap and internal links. |
| Google chose a different canonical | Compare content and signals, remove duplication, strengthen self-canonical and internal links, or accept/consolidate to Google's better URL. |
| Crawled - currently not indexed | Improve uniqueness, intent match, usefulness, proof, internal links, and rendering; consolidate thin overlap instead of resubmitting unchanged. |
| Discovered - currently not indexed | Strengthen internal links, verify sitemap and server reliability, remove crawl traps, and allow time after deployment. |
| Server error 5xx | Fix hosting/build/runtime failures, confirm stable 200 responses, then retest. |
| Page requires JavaScript to reveal content | Pre-render or server-render essential content and metadata. |
| Duplicate article intent | Merge the stronger content, redirect the weaker URL, and update all links/canonical/sitemap entries. |

### 23.3 After a verified fix

1. Deploy only after approval.
2. Confirm the live response and rendered page.
3. Re-run URL Inspection live test.
4. Request indexing for representative important pages, not every URL repeatedly.
5. Resubmit or refresh the sitemap if its contents changed.
6. Monitor Page Indexing and crawl data over subsequent days/weeks.
7. Record the issue, fix, deployment commit, and observed result.

For Bing and other supported engines, submit the sitemap through their webmaster tools and consider their supported update mechanisms separately. Do not assume a submission protocol is supported by Google.

## 24. Measurement

### Before implementation

- Export current Search Console pages, queries, impressions, clicks, exclusions, and selected canonicals if available.
- Record live HTTP status, title, canonical, H1, body-content signature, and schema for every public route.
- Run a clean-profile Lighthouse baseline.
- Record GA4 organic and AI referral behavior if configured.
- Run a fixed buyer-intent question baseline across selected answer systems.
- Record entity-accuracy responses for `What is BlackVault Group LLC?`

### After approved deployment

Track separately:

- Indexed pages
- Search impressions and clicks
- Article entrances
- Organic and AI-referred conversions
- Page citation rate
- Brand mention rate
- Entity accuracy
- Recommendation appearances
- Qualified form submissions and bookings

Indexed, cited, mentioned, recommended, visited, and converted are separate states.

## 25. Execution phases

### Phase 0: Verify, preserve, and isolate

- Preserve uncommitted Cal/backend work.
- Reconcile clone, `origin/main`, and production.
- Capture live baseline.
- Create isolated branch/worktree.
- Approve claim register and author identity.

**Exit:** implementation base and allowed claims are approved.

### Phase 1: Route registry, rendering, redirects, and 404

- Implement validated route/content registry.
- Add static/pre-rendered initial HTML.
- Add server 301 redirects.
- Add real 404 behavior.
- Add route/status/HTML tests.

**Exit:** every existing route passes the working-page definition.

### Phase 2: Articles navigation and content system

- Add Articles to desktop/mobile navigation and footer.
- Add `/articles` hub.
- Add typed article metadata/content source.
- Add the three article routes and templates.
- Add all article images under `public/articles/`.

**Exit:** hub and all three articles load directly, render initially, link correctly, and pass accessibility checks.

### Phase 3: Content, metadata, FAQs, schema, and internal links

- Draft and fact-check all three articles.
- Adapt metadata on all existing and new pages.
- Centralize FAQs.
- Implement article and page schema matrix.
- Add contextual article/service links.
- Review homepage/service claims and preserve conversion hierarchy.

**Exit:** all visible content, metadata, dates, schema, and claims agree.

### Phase 4: Sitemap, robots.txt, and llms.txt

- Generate sitemap from validated route/article data.
- Apply accurate `lastmod` values.
- Apply approved robots policy.
- Update `llms.txt` from working canonical routes.
- Add parity tests.

**Exit:** no redirect, draft, noindex, placeholder, or 404 route appears in discovery files.

### Phase 5: Full local verification

- Run typecheck, tests, and production build.
- Test every route directly and after refresh.
- Test 200, 301, 404, robots, sitemap, and `llms.txt`.
- Test initial HTML without JavaScript.
- Validate structured data.
- Check images, metadata, links, keyboard behavior, responsive layout, and Lighthouse.
- Review diff for accidental backend/Cal changes.

**Exit:** all automated and manual acceptance checks pass; work remains unmerged and undeployed.

### Phase 6: Approved deployment and indexing verification

Requires explicit deployment approval.

- Release through the approved process.
- Verify the exact production commit/build.
- Recheck every live route, status, image, metadata, canonical, schema, sitemap, robots file, and 404.
- Submit/refresh sitemap in Search Console.
- Inspect representative URLs.
- Record production evidence.

**Exit:** production matches the approved build and indexing systems can access representative routes.

### Phase 7: Measure and iterate

- Monitor indexing states and crawl errors.
- Track article impressions, clicks, citations, and conversions.
- Refresh material content honestly.
- Add the future Hampton Roads page only after its facts and scope are approved.
- Add more articles only when evidence supports a distinct intent.

## 26. Verification matrix

| Test | Requirement |
| --- | --- |
| Git isolation | Article/SEO diff does not contain unrelated booking/backend changes |
| Route registry | All canonical, redirect, noindex, and sitemap states are internally consistent |
| Direct route loading | Every public route loads directly and on refresh |
| Initial HTML | Unique title, canonical, H1, body, links, and schema exist before hydration |
| Navigation | Articles appears on desktop and mobile and is keyboard accessible |
| Article hub | Exactly three complete cards link to three working articles |
| Article details | Author, dates, image, answer-first text, sources, related links, and CTA render |
| Images | Every article image exists under `public/articles/` and loads without layout shift |
| Metadata | Unique title/description/canonical/social metadata for all public pages |
| Structured data | Parses, uses absolute canonical URLs, and matches visible content |
| FAQ | Visible content and FAQPage data match |
| Redirects | Legacy URLs return one-hop 301 responses |
| 404 | Unknown URL returns real 404 and noindex error content |
| Sitemap | Valid XML; includes every indexable canonical 200 page exactly once |
| Robots | Returns 200, allows approved public crawling, and points to sitemap |
| llms.txt | Contains literal links only to real canonical routes |
| Internal links | No broken links or orphan pages |
| Accessibility | Correct headings, focus, keyboard use, labels, alt text, and contrast |
| Build | Typecheck, tests, and production build pass |
| Conversion | Existing qualification and scheduling journey still works |
| Production | Live output matches approved implementation after authorized release |

## 27. Acceptance criteria

The implementation is ready for deployment review only when:

1. The work is isolated from unrelated uncommitted changes.
2. Clone and live differences are documented.
3. Articles appears in desktop/mobile navigation and links to `/articles`.
4. `/articles` contains exactly three complete article cards.
5. All three article URLs are complete, unique, useful, and directly loadable.
6. Every current and new public route is represented in the route/metadata map.
7. Every indexable route returns unique initial HTML.
8. Every new image resides in `public/articles/` and loads correctly.
9. Metadata is unique and accurate on all existing and new pages.
10. Unsupported claims are removed, qualified, or approved.
11. FAQ UI and schema use one source.
12. BlogPosting and other schema match visible content.
13. Legacy redirects are server 301s.
14. Invalid URLs return a real 404.
15. Sitemap, robots, and `llms.txt` reflect only real working routes.
16. Typecheck, tests, build, crawl tests, schema validation, responsive QA, and accessibility checks pass.
17. The booking/qualification flow is unchanged and still works.
18. No merge, deployment, Search Console submission, or external change occurs without explicit approval.

## 28. Required approvals and inputs

Before article copy and schema are finalized:

- Confirm the public author full name and role.
- Confirm whether one or both founders are article authors.
- Approve founder/profile links.
- Approve organization and service-area wording.
- Approve or reject current pricing/timeline/performance claims.
- Approve data-handling and security language.
- Approve final article images and alt text.
- Provide Search Console exports if available.
- Confirm the crawler policy if it should differ from general public access.

Do not provide or commit passwords, mailbox access, `.env` contents, API keys, tokens, or other secrets.

## 29. Definition of done

Planning is complete when this document is approved for execution.

Implementation is complete only after the approved scope is coded in isolation, fully verified locally, explicitly approved for release, deployed through the approved process, and verified again on production.

Completion means the website is factually trustworthy, technically crawlable, correctly mapped, internally consistent, and measurable. It does not mean that search engines or generative systems are guaranteed to index, rank, cite, or recommend BlackVault.
