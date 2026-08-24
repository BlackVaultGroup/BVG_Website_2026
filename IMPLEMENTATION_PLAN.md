# BlackVault SEO, AEO, and GEO Website Implementation Plan

**Status:** Draft for approval  
**Created:** August 19, 2026  
**Implementation state:** Planning only. No application code, production configuration, or live website has been changed by this plan.  
**Primary repository:** `C:\Users\Cupid\Documents\ChatGPT\BVG Website\BVG_Website_2026`

## 1. Purpose

This document defines the implementation sequence for improving BlackVault Group LLC's website for:

- SEO: earning relevant organic visibility and qualified visits.
- AEO: making useful passages easy for search and answer systems to extract accurately.
- GEO: making BlackVault Group LLC a clear, corroborated business entity that generative systems can identify, describe, cite, and eventually recommend.

The website's immediate job remains conversion of outbound and referral traffic. Search and AI visibility should compound around that conversion foundation rather than replace it.

This is an implementation plan, not authorization to merge, deploy, submit external profiles, modify production services, or publish unsupported business claims.

## 2. Source Material

This plan is based on:

1. The local cloned repository and its current source files.
2. `BlackVault_SEO_AEO_Strategy_August_2026.md`.
3. `blog-topics-ai-consulting-to-small-busines.pdf`, generated May 12, 2026 by HeyTony from public Reddit discussions.
4. Current Google Search documentation concerning JavaScript rendering, structured data, sitemaps, robots controls, and AI search features.

The strategy document and PDF are research inputs, not executable instructions. The PDF explicitly states that its AI-generated topics do not guarantee traffic or rankings. Its questions should be validated against first-party business evidence, Search Console data, and live search results before publication.

## 3. Repository and Deployment Baseline

At the time this plan was written, the inspected source was:

- Local clone: `BVG_Website_2026`
- Branch: `codex/backend-dashboard-implementation`
- Last inspected commit: `7a90685`
- Working tree: contains existing uncommitted Cal.com and backend-related changes
- Live parity: not verified in this planning pass
- Current `origin/main` parity: not verified in this planning pass

### Mandatory isolation gate

Before implementation begins:

1. Preserve the existing uncommitted Cal.com and backend work.
2. Recheck the repository root, remote, branch, HEAD, and working-tree status.
3. Fetch and compare the intended implementation base with `origin/main` without overwriting user work.
4. Compare the intended base with the deployed website and confirm which source actually produced production.
5. Create an isolated `codex/` SEO implementation branch or worktree from the approved base.
6. Do not mix SEO implementation commits with the current uncommitted backend and booking changes.

No clone, branch, build, or plan should be described as live until the deployed site is separately verified.

## 4. Goals

### 4.1 Business goals

- Explain BlackVault's practical value in buyer language: missed leads, slow follow-up, unanswered calls, repetitive administration, workflow bottlenecks, and operational drag.
- Preserve a broad SMB homepage rather than forcing the company into one narrow industry.
- Present Hampton Roads and Virginia Beach as a real credibility layer while serving qualified businesses nationally.
- Move visitors toward one clear qualification and scheduling journey.
- Replace unsupported proof with verifiable process, demonstrations, examples, diagrams, pricing guidance, and real outcomes where available.

### 4.2 SEO goals

- Give each indexable URL one clear intent and prevent topic cannibalization.
- Serve unique, crawlable, route-specific HTML and metadata.
- Build a focused commercial and informational content architecture.
- Strengthen contextual internal links between services, articles, the About page, and the Hampton Roads page.
- Generate an accurate sitemap from the same route/content source used by the application.

### 4.3 AEO goals

- Give direct answers near the beginning of relevant pages.
- Use natural question headings and concise, self-contained answer passages.
- Tie citations, dates, authorship, and structured data to visible content.
- Make FAQ and article content reusable without duplicating schema data manually.
- Track answer-engine citation separately from traditional ranking.

### 4.4 GEO goals

- Establish one unambiguous `BlackVault Group LLC` entity.
- Connect the organization, founders, services, service area, contact path, and verified external profiles consistently.
- Separate on-site entity work from off-site reputation work.
- Never manufacture client proof, reviews, citations, partnerships, or third-party mentions.

## 5. Non-Goals

This implementation will not:

- Guarantee rankings, rich results, AI citations, recommendations, leads, or revenue.
- Create thin city pages for Norfolk, Virginia Beach, Chesapeake, Hampton, Newport News, Portsmouth, or Suffolk.
- Publish dozens of lightly differentiated articles to meet a volume target.
- Add schema that is not supported by visible page content.
- Automatically update publication or modification dates without a material content change.
- Invent case studies, testimonials, client counts, pricing, savings, timelines, affiliations, locations, compliance claims, or performance metrics.
- Change production hosting, deploy the site, submit Search Console changes, or create external business profiles without explicit approval.
- Alter the booking flow, Supabase configuration, database schema, or backend behavior as part of SEO work unless separately scoped and authorized.

## 6. Governing Principles

1. **Facts before amplification.** A claim must be approved before it is repeated in metadata, page copy, structured data, articles, or off-site profiles.
2. **Visible content before schema.** Structured data describes the page; it does not substitute for useful content.
3. **One intent per URL.** Closely related questions should be consolidated into strong pages rather than split into thin pages.
4. **Answer first.** Pages targeting questions should give a plain answer in the first useful passage, usually within 40 to 60 words.
5. **Commercial clarity before content volume.** Existing service pages should answer buyer objections before a large article program begins.
6. **Real freshness only.** `dateModified`, visible update dates, and sitemap `lastmod` values change only after substantive review or revision.
7. **National positioning with local credibility.** Hampton Roads should be one substantive layer, not the boundary of the company or a template-page strategy.
8. **Eligibility is not citation. Citation is not recommendation.** Measure these separately.
9. **Preserve conversion.** Search additions must not bury the primary value proposition or create competing calls to action.
10. **No deployment by implication.** Local implementation, build success, and source inspection do not prove production behavior.

## 7. Current-State Audit

### 7.1 Existing strengths

The cloned repository already contains:

- Route-level titles, descriptions, canonicals, robots meta, Open Graph, and X metadata through `src/components/page-seo.tsx`.
- JSON-LD utilities for Organization, WebSite, Service, WebPage, BreadcrumbList, and FAQPage in `src/lib/schema.ts`.
- Five commercial service routes.
- A homepage FAQ section.
- `public/sitemap.xml`.
- `public/robots.txt` with a sitemap declaration.
- `public/llms.txt` with links to public routes.
- Lazy-loaded React routes and an existing navigation/footer system.

### 7.2 Confirmed gaps and risks

| Area | Current condition | Risk |
| --- | --- | --- |
| Rendering | Vite/React client-rendered SPA | Route content and metadata depend on JavaScript execution; non-JavaScript consumers receive the shared shell. |
| HTTP behavior | Netlify catch-all serves `index.html` with status 200 | Nonexistent paths can become soft 404s. |
| 404 route | No wildcard route or verified server 404 | Invalid URLs may have empty UI or indexable 200 responses. |
| Redirects | Old paths redirect inside React | Crawlers may receive a 200 shell before a client-side redirect instead of a server 301. |
| FAQ data | Visible FAQ and FAQ schema use separate arrays | The two sources have already drifted and can become misleading. |
| Sitemap | Hand-maintained dates, priorities, and frequencies | Dates become stale; route changes can be missed; Google ignores priority and change frequency. |
| Metadata | Some long or generic titles/descriptions | Search intent may be diluted and snippets may be rewritten. |
| Articles | No article hub, template, author system, or article schema | No scalable content or freshness workflow exists. |
| Local credibility | No substantive Hampton Roads page | The company lacks a dedicated local entity/credibility page. |
| Internal links | Service pages rely heavily on global navigation/footer | Weak topical relationships and shallow buyer journeys. |
| Entity data | Founders are represented only by first name in schema | Weak disambiguation and limited Person entity support. |
| External profiles | `sameAs` URLs exist in code but were not verified in this pass | Broken or inaccurate entity anchors could weaken trust. |
| Proof | Several pricing, timeline, experience, guarantee, and performance claims require confirmation | Unsupported claims could be amplified in search and AI answers. |
| Live parity | Clone and deployed site were not reconciled | Work could be planned against stale or non-production source. |

## 8. Factual Claim Approval Gate

Create a claim register before rewriting copy. Each claim should include:

- Claim text
- Current URL and source-file location
- Claim category
- Evidence owner
- Evidence location
- Approval status
- Approved wording and necessary qualification
- Where the claim is allowed to appear

### Claims requiring explicit review

- Engagements beginning at `$2,000`.
- Engagements ranging to `$60,000+`.
- Typical results within 30 to 60 days.
- Any promise to stay engaged until milestones or outcomes are achieved.
- `100%` milestone completion rate.
- Five new builds per month.
- Years of prior operating experience.
- Work across Arizona, California, Bali, Dubai, or other international markets.
- Mutual NDA coverage before information is shared.
- Statements about never training on or sharing client data.
- Any client count, savings, response-time improvement, ROI, conversion rate, or revenue result.
- Any industry, regulatory, security, or compliance expertise.
- Founder names, titles, biographies, and external profile URLs.
- Legal business name, service area, phone, address policy, and contact details.

Claims that cannot be substantiated should be removed or rewritten as process descriptions rather than outcomes.

## 9. Audience Question Research

### 9.1 Research hierarchy

Use question sources in this order:

1. Real objections and questions from BlackVault calls, proposals, outreach replies, DMs, and current clients.
2. Google Search Console queries and page-level impressions, if sufficient data exists.
3. Google autocomplete, People Also Ask, related searches, Bing, YouTube, and relevant community discussions.
4. The supplied Reddit-derived PDF.
5. Third-party keyword and question tools such as Semrush, Ahrefs, AlsoAsked, AnswerThePublic, or QuestionDB.

Do not treat a third-party topic suggestion as proof of search volume or buyer intent.

### 9.2 Consolidated question clusters

The 40 supplied topics should be consolidated as follows:

| Cluster | Examples from the PDF | Intended destination |
| --- | --- | --- |
| Pricing and budgeting | Consultant cost, integration cost, budgeting, hourly vs. project vs. retainer | One pricing/cost article plus concise verified guidance on relevant commercial pages |
| Consultant vs. hiring | Consultant vs. in-house, developer, fractional, part-time, additional staff | One comparison article with links to Executive AI Strategy |
| Capabilities and use cases | What consultants do, problems solved, workflow automation, daily tasks, support | Service pages first; supporting use-case articles only where demand is distinct |
| Readiness and getting started | Business readiness, first steps, data needed, no prior experience | One readiness guide and a pilot-project guide |
| Timeline, ROI, and measurement | Time to results, implementation duration, savings, success measurement | One evidence-based ROI/measurement guide plus How It Works answers |
| Selecting a consultant | How to choose, questions to ask, red flags, proposal evaluation | One buyer's guide or closely linked two-part guide |
| Scope and deliverables | Consulting vs. implementation, expected deliverables, first meeting | How It Works, Executive AI Strategy, and one comparison article |
| Adoption and risk | Mistakes, security, team buy-in, training, support, scaling | Supporting sections/articles based on validated demand and genuine expertise |
| Industry and location | Best-fit industries, service businesses, nearby vs. remote | Broad national positioning, one Hampton Roads page, later vertical tests only when justified |

### 9.3 Proposed buyer-intent question set

The following questions should be evaluated first because they support commercial decisions:

1. How much does AI consulting and implementation cost for a small business?
2. What should an AI consultant actually deliver?
3. Should a small business hire a consultant, an employee, or a developer?
4. How do I know whether my business is ready for AI automation?
5. How should a small business run an AI pilot project?
6. How do you calculate and measure AI automation ROI?
7. What questions should I ask before hiring an AI consultant?
8. What are the red flags when evaluating an AI consultant?
9. What is the difference between AI consulting and AI implementation?
10. What should a business automate first?
11. How do AI automations integrate with an existing CRM, phone system, inbox, and calendar?
12. What happens when an automation fails, and when does a person take over?

## 10. Information Architecture

### 10.1 Existing route map

| Route | Primary intent | Planned role |
| --- | --- | --- |
| `/` | AI automation partner for SMBs | Broad conversion page and primary entity introduction |
| `/how-it-works` | Process, risk, scope, and delivery | Explain audit, design, implementation, testing, handoff, and ongoing support |
| `/operational-ai-systems` | Custom AI systems and integrations | Commercial service page for custom operational infrastructure |
| `/lead-follow-up-automation` | Slow response and lost leads | Commercial page for lead capture, qualification, routing, and follow-up |
| `/intelligent-workflows` | Repetitive processes and bottlenecks | Commercial workflow automation page |
| `/voice-ai-systems` | Missed calls and call handling | Commercial voice AI page with human-handoff and risk details |
| `/executive-ai-strategy` | AI audit, roadmap, and build-vs.-buy decisions | Commercial strategy/advisory page |
| `/about` | Company and founder credibility | Organization and Person entity page |
| `/privacy-policy` | Privacy disclosures | Legal page; not a commercial content target |
| `/terms-of-service` | Site terms | Legal page; not a commercial content target |

### 10.2 Proposed new route groups

Final paths depend on query validation. Proposed structure:

- `/insights` or `/resources`: article and buyer-guide hub.
- One substantive Hampton Roads page, such as `/hampton-roads-ai-automation`.
- Initial commercial-investigation articles:
  - AI consulting and implementation cost for small businesses.
  - AI consultant vs. in-house team or developer.
  - What an AI consultant should deliver.
  - How to know whether a business is ready for AI.
  - How to run a measured AI pilot project.
  - How to calculate and measure automation ROI.
  - Questions and red flags when hiring an AI consultant.
  - AI consulting vs. AI implementation.

Do not finalize slugs until primary intent, overlap, and live SERP language are reviewed.

### 10.3 Content placement rules

- Homepage FAQs answer company-level buying objections only.
- Service-specific questions belong on their relevant service page.
- Questions requiring detailed explanation, comparisons, calculations, or cited research become articles.
- Legal and security disclosures live on appropriate dedicated pages and are summarized accurately elsewhere.
- The Hampton Roads page contains unique regional context and service relevance, not copied city-name substitutions.

## 11. Page Content Standard

Every primary service page should contain:

1. A clear H1 aligned with the page's primary intent.
2. A direct answer/definition near the top.
3. The business problem in buyer language.
4. What BlackVault does and does not provide.
5. Who the service fits and who it does not fit.
6. A plain-language delivery process.
7. Integration, ownership, monitoring, maintenance, and human-handoff expectations.
8. Verified timeline and pricing guidance where approved.
9. Evidence, demonstration, diagram, or real case study where available.
10. Page-specific FAQs drawn from validated questions.
11. Contextual links to related services and supporting articles.
12. One primary call to action.

### 11.1 Homepage

- Preserve the broad SMB positioning.
- Lead with missed opportunities and operational friction rather than tool names.
- Keep one primary CTA.
- Retain only a concise set of high-value, company-level FAQs.
- Remove or qualify unsupported pricing, timing, guarantee, and performance statements.
- Include a short, factual Hampton Roads/national service-area statement.
- Keep the homepage focused on conversion rather than turning it into a full article.

### 11.2 Service pages

- Replace generic template-only sections with page-specific question headings.
- Add direct answers that can stand alone when quoted.
- Explain failure states and human escalation where relevant.
- Add service-specific FAQs from a shared content source.
- Add related-service and related-article links in the main content, not only the footer.
- Avoid repeating the same paragraphs across all service pages.

### 11.3 How It Works

- Explain the distinction between strategy, implementation, testing, deployment, and support.
- Clarify what the client must provide.
- Explain change control, documentation, ownership, failure handling, and human approval.
- Address first-meeting and deliverable questions from the PDF.
- Use verified timelines only.

### 11.4 About

- Use the full legal entity name consistently.
- Add approved founder full names, roles, biographies, and profile links.
- Replace broad experience claims with substantiated, specific descriptions.
- Link the organization and founders through visible content and structured data.
- Add a real logo asset and consistent organization description.

### 11.5 Hampton Roads page

- Explain that BlackVault is based in Hampton Roads, a combination of all the closeby cities (Hampton, Newport News, Yorktown, Williamsburg, Virginia Beach, Norfolk, Sussesex, Suffolk, etc.  and serves businesses nationally when there is a fit.
- Include real regional context relevant to BlackVault's services.
- Avoid unsupported industry expertise or affiliations.
- Link to appropriate services and the About page.

## 12. Article System

### 12.1 Technical requirements

Implement a maintainable article source with typed metadata. Markdown or MDX with front matter is preferred if it can be added without destabilizing the existing Vite application. A short compatibility spike should decide the exact implementation.

Required fields:

- Title
- Slug
- Description
- Primary question/intent
- Author identifier
- Reviewer identifier when applicable
- Date published
- Date modified
- Review-due date
- Canonical URL
- Social image
- Indexing status
- Source/citation list
- Related services
- Related articles

### 12.2 Article content requirements

- Answer the primary question in the first useful paragraph.
- Use question-led sections where natural.
- Distinguish evidence, BlackVault process, examples, and opinion.
- Cite primary or authoritative sources for statistics and changing claims.
- Include original examples, calculations, diagrams, screenshots, or practical decision frameworks when possible.
- State limitations and situations where AI automation is not the right answer.
- Do not present hypothetical results as client results.
- End with a relevant next step rather than a generic CTA on every article.

### 12.3 Initial content release

Publish a small set of high-quality articles, then measure before expanding. Recommended initial order:

1. AI consulting and implementation cost for small businesses.
2. What an AI consultant should deliver.
3. AI consultant vs. in-house team or developer.
4. Is your business ready for AI automation?
5. How to run a small, measurable AI pilot.
6. How to calculate and measure automation ROI.
7. Questions and red flags when hiring an AI consultant.
8. AI consulting vs. AI implementation.

The final order should be adjusted using Search Console, real buyer objections, query evidence, and production capacity.

## 13. Freshness System

Freshness must reflect real editorial work.

### 13.1 Rules

- Show `Published` and `Last updated` dates on articles.
- Add visible update dates to evergreen service pages only when useful and not distracting.
- Update `dateModified` only after material content changes.
- Generate sitemap `lastmod` from the same trusted content metadata.
- Never set all pages to the build or deployment date.
- Review cornerstone content approximately every 90 days, but do not change the public date if no meaningful revision is made.

### 13.2 Review checklist

- Are cited statistics still current?
- Are product, platform, and legal references still accurate?
- Does the page answer the query directly?
- Are claims still approved?
- Are all internal and external links valid?
- Has BlackVault gained real evidence, examples, or case studies that improve the page?
- Does the page overlap with another URL?
- Is the CTA still appropriate?
- Did the review materially change the content enough to update `dateModified`?

## 14. Technical Architecture

### 14.1 Central route registry

Create one typed source of truth for public routes. It should control:

- Path
- Page type
- Title
- Meta description
- Canonical path
- Index/noindex state
- Sitemap inclusion
- Navigation/footer inclusion
- Social image
- Published/modified dates where relevant
- Structured-data builders

Application routes, sitemap generation, `llms.txt`, and route-level validation should derive from this registry or from the same underlying content metadata.

### 14.2 Build-time rendering

Preferred direction: keep the existing React/Vite interface and add maintained build-time static rendering for all public content routes unless a compatibility spike proves that approach unsafe.

Required output for every indexable route:

- Unique HTML file or server-rendered response
- Correct `<title>`
- Correct meta description
- Correct canonical
- Correct robots meta
- Correct Open Graph and X metadata
- Visible H1 and main text in the initial HTML
- JSON-LD matching visible content
- Crawlable internal links

If a minimal pre-render approach cannot support the article system reliably, evaluate a broader framework migration as a separate decision. Do not combine a framework migration with content rewriting unless it is necessary.

### 14.3 Redirect and 404 behavior

- Implement permanent server-level redirects for legacy routes.
- Remove reliance on client-only `<Navigate>` for SEO-critical migrations where hosting supports 301 responses.
- Return a real 404 status for nonexistent URLs.
- Provide a useful branded 404 page with links back to main services.
- Confirm that invalid URLs are excluded from the sitemap and carry no indexable canonical to the homepage.

### 14.4 Internal links

- Use crawlable `<a href>` or router link elements that render as anchors.
- Add relevant links within main content sections.
- Connect each article to one primary service and selected related articles.
- Connect service pages to relevant process, proof, and educational pages.
- Avoid orphan pages and generic `click here` anchor text.

## 15. Metadata Implementation

### 15.1 Requirements

- One unique title per indexable URL.
- One useful, manually reviewed meta description per indexable URL.
- One canonical URL per page using the production origin.
- Route-specific Open Graph and X metadata in initial HTML.
- `og:type="article"` and article dates/authors where appropriate.
- Branded social images for major services and articles where practical.
- Correct favicon and logo assets instead of the default Vite icon.
- `noindex` for non-public utilities, previews, or thin transitional pages.

Titles and descriptions should be optimized for relevance and clarity rather than forced into rigid character limits. Snippet previews should still be reviewed for likely truncation.

### 15.2 Metadata audit outputs

The implementation should produce a route matrix containing:

- Path
- Primary intent
- H1
- Title
- Description
- Canonical
- Indexing directive
- Social image
- Schema types
- Sitemap status

## 16. Structured Data

### 16.1 Implementation rules

- Generate JSON-LD from shared page/content data.
- Use stable `@id` values to connect entities.
- Do not duplicate Organization data inconsistently across pages.
- Do not embed one complete BreadcrumbList object inside WebPage and also emit a second conflicting BreadcrumbList.
- Keep visible FAQs and FAQPage schema byte-for-byte equivalent in meaning.
- Validate syntax and semantic accuracy.
- Treat structured data as entity clarification, not a rich-result guarantee.

### 16.2 Schema matrix

| Page type | Recommended schema |
| --- | --- |
| Home | Organization, WebSite, WebPage; FAQPage only for visible approved FAQs |
| Service | Service, WebPage, BreadcrumbList, Organization reference |
| How It Works | WebPage, BreadcrumbList; no HowTo unless the visible content genuinely meets the type |
| About | AboutPage, Organization, Person entities, BreadcrumbList |
| Hampton Roads | WebPage and appropriate Service/Organization references; avoid LocalBusiness until NAP and eligibility are verified |
| Article | Article or BlogPosting, Person author, Organization publisher, BreadcrumbList |
| Insight hub | CollectionPage or WebPage, BreadcrumbList |
| Legal | WebPage where useful; no unnecessary rich-result markup |
| 404 | No indexable schema; `noindex` and real 404 response |

### 16.3 Entity requirements

- Use `BlackVault Group LLC` consistently as the legal organization name.
- Use the approved public brand name as `alternateName` where appropriate.
- Add full founder names only after approval.
- Add only verified `sameAs` profiles.
- Confirm service area and location wording.
- Add a valid logo URL and contact method.
- Keep contact, privacy, and data-handling statements consistent across visible pages and schema.

## 17. Sitemap, Robots, and AI Discovery Files

### 17.1 Sitemap gatekeeping

Generate `sitemap.xml` from the route and article registry.

Include only URLs that are:

- Canonical
- Public
- Indexable
- Expected to return 200
- Substantively useful

Exclude:

- Redirect sources
- 404 URLs
- Preview or staging URLs
- Duplicate parameter URLs
- Noindex pages
- Thin or unfinished drafts

Use accurate `lastmod` values. Omit `priority` and `changefreq` unless a non-Google consumer provides a documented reason to retain them.

### 17.2 Robots.txt

- Keep the general file simple and readable.
- Point to the fully qualified production sitemap URL.
- Do not use robots.txt as the mechanism for removing pages from search; use real access controls or `noindex` as appropriate.
- Review each explicitly named AI crawler against current official documentation and BlackVault's policy.
- Distinguish search/retrieval crawling from model-training controls.
- Review `OAI-SearchBot` and `GPTBot` separately.
- Document that `Google-Extended` does not control Google Search or AI Overviews.
- Do not claim that allowing a crawler guarantees citation or recommendation.

### 17.3 llms.txt

- Keep it factual and concise.
- Use literal Markdown links to real canonical pages.
- Generate or validate the page list from the same route registry.
- Do not list redirects, nonexistent pages, drafts, or duplicate shells.
- Do not position `llms.txt` as a Google ranking or AI Overview lever.

## 18. On-Site GEO Entity Foundation

### 18.1 Website work

- Normalize the legal name, brand name, service area, founder relationships, and organization description.
- Add complete founder pages or substantive founder sections if enough verified information is available.
- Link organization and founder entities through visible content and JSON-LD.
- Publish real case studies only after engagements produce publishable evidence and permission.
- Use consistent descriptions across the website and approved external profiles.

### 18.2 Off-site workstream

This plan may identify but does not authorize external changes. Later, with approval:

- Verify or create a LinkedIn company page.
- Align founder profiles.
- Verify Google Business Profile eligibility and service-area configuration.
- Evaluate relevant directories and partner/expert programs.
- Pursue genuine reviews, case studies, podcast appearances, guest articles, and community participation.
- Monitor entity confusion with unrelated businesses using similar names.

Off-site GEO should follow real delivery and earned credibility. It should not be simulated through purchased mentions, fake reviews, or mass directory spam.

## 19. Measurement Framework

### 19.1 Baseline before implementation

Capture:

- Search Console indexed pages, exclusions, impressions, clicks, queries, CTR, and average position.
- Current canonical selections and crawl status for every public route.
- Route-specific title, canonical, H1, visible text, HTML similarity, and HTTP status.
- Lighthouse and Core Web Vitals baseline using a clean browser profile.
- Existing GA4 acquisition and conversion events, if configured.
- Existing branded and non-branded search visibility.
- A buyer-intent prompt baseline across selected answer engines.
- Current brand/entity accuracy responses for `What is BlackVault Group LLC?`

Use exports or supervised access where needed. Do not place account credentials, tokens, API keys, or private analytics data in the repository.

### 19.2 Ongoing metrics

#### SEO

- Indexed canonical pages
- Commercial query impressions and clicks
- Non-branded clicks
- CTR by query and page type
- Qualified form starts/submissions and bookings from organic search
- Crawl errors, soft 404s, duplicate canonicals, and Core Web Vitals

#### AEO

- Page citation rate on a fixed buyer-intent prompt set
- Which passage/page is cited
- Whether the extracted answer is accurate
- Citation volatility over time
- AI referral sessions and conversions where measurable

#### GEO

- Brand mention rate
- Citation rate
- Share of model versus named competitors
- Entity accuracy and confusion rate
- Growth in real third-party mentions and reviews

Track indexed, cited, mentioned, recommended, visited, and converted as different states.

## 20. Implementation Phases

### Phase 0: Verify and isolate

**Tasks**

- Preserve the dirty working tree.
- Verify Git remote, branch, HEAD, and approved base.
- Reconcile clone, `origin/main`, and deployed production.
- Crawl the live website and capture baseline evidence.
- Create the factual claim register.
- Collect first-party question inputs and available Search Console exports.
- Create an isolated implementation branch/worktree.

**Exit criteria**

- Approved implementation base identified.
- Existing work safely isolated.
- Live-vs-source differences documented.
- Claim statuses assigned.
- Baseline captured.

### Phase 1: Rendering, route registry, redirects, and 404

**Tasks**

- Create the typed route registry.
- Select and implement the build-time rendering approach.
- Produce route-specific initial HTML.
- Implement server 301 redirects.
- Implement a real 404 response and noindex error page.
- Add automated HTML/status tests.

**Exit criteria**

- Every indexable route has unique initial HTML, metadata, H1, main text, and JSON-LD.
- Legacy paths return intended 301 responses.
- Unknown paths return 404.
- No route depends on JavaScript for its essential indexable text.

### Phase 2: Existing on-page content and FAQ upgrades

**Tasks**

- Complete the question-to-route map.
- Rewrite/qualify claims based on the claim register.
- Add answer-first passages and question-led sections.
- Centralize FAQ content and schema data.
- Add page-specific FAQs.
- Strengthen contextual internal links.
- Update Home, service pages, How It Works, and About.

**Exit criteria**

- Each page has one approved primary intent.
- Visible and structured FAQ content match.
- Unsupported proof is removed or qualified.
- Commercial pages answer key buyer objections.
- One primary CTA remains clear.

### Phase 3: Hampton Roads and article foundation

**Tasks**

- Build the substantive Hampton Roads page.
- Add the insight/resource hub.
- Implement article data, templates, author data, dates, citations, and related content.
- Draft the approved initial article set.
- Add editorial and factual review gates.

**Exit criteria**

- Hampton Roads page is unique and nationally compatible.
- Articles are statically rendered and indexable.
- Authorship, sources, dates, and internal links are visible.
- No thin city or near-duplicate article pages exist.

### Phase 4: Metadata and structured-data completion

**Tasks**

- Finalize the metadata matrix.
- Connect metadata to the route/content registry.
- Implement the schema matrix.
- Add verified Organization, Person, Service, and Article relationships.
- Validate all structured data against visible content.
- Add final social assets and branded favicon/logo references.

**Exit criteria**

- Titles, descriptions, canonicals, robots directives, and social metadata are unique and correct.
- JSON-LD parses without errors and matches visible content.
- Entity identifiers and references are consistent.
- No unverified `sameAs`, Person, address, logo, or claim data is published.

### Phase 5: Sitemap, robots.txt, llms.txt, and crawl QA

**Tasks**

- Generate the sitemap from canonical route/article data.
- Use truthful last-modified dates.
- Review crawler policy and update robots.txt.
- Generate or validate llms.txt from real canonical routes.
- Run route/status/canonical/sitemap consistency tests.

**Exit criteria**

- Sitemap contains only canonical, indexable, 200-status routes.
- Redirects, noindex pages, drafts, and 404s are excluded.
- Robots file points to the correct sitemap.
- AI crawler comments and directives are factually accurate.
- llms.txt contains only real, unique routes.

### Phase 6: Full local verification

**Tasks**

- Run formatting/linting if configured.
- Run typecheck, unit tests, and production build.
- Validate every route without client-side JavaScript.
- Validate 301, 404, robots, sitemap, canonicals, and structured data.
- Inspect desktop and mobile layouts.
- Run accessibility and Lighthouse checks in a clean browser profile.
- Review all copy against the claim register.
- Review the final diff for accidental backend/Cal changes.

**Exit criteria**

- All automated checks pass.
- No material visual regressions.
- No factual or schema mismatch.
- Diff contains only approved SEO/AEO/GEO scope.
- Local work remains unmerged and undeployed pending approval.

### Phase 7: Approved deployment and production verification

This phase requires explicit deployment approval.

**Tasks after approval**

- Merge/release through the approved process.
- Verify production routes and assets.
- Test live HTTP statuses, HTML, canonicals, schema, sitemap, robots, and 404 behavior.
- Submit or refresh the sitemap in Search Console.
- Use URL Inspection on representative routes.
- Record the production baseline date and release commit.

**Exit criteria**

- Production behavior matches the approved implementation.
- Search Console can fetch representative routes.
- Sitemap is accepted or any errors are documented.
- Deployment commit and verification evidence are recorded.

### Phase 8: Measurement and iteration

**Tasks**

- Review indexing and crawl data.
- Track qualified search and AI-referred conversions.
- Re-run the fixed buyer-intent prompt set monthly.
- Refresh or consolidate content based on evidence.
- Add real case studies and off-site entity signals as the business earns them.

**Exit criteria**

- Reporting distinguishes ranking, citation, brand mention, traffic, lead, booking, SQL, and closed-won states.
- Decisions are driven by data rather than content volume.
- New content is approved only when it fills a demonstrated query or buyer-information gap.

## 21. Verification Matrix

| Test | Local requirement | Production requirement |
| --- | --- | --- |
| Typecheck | Pass | Release built from passing commit |
| Unit tests | Pass | Same test commit deployed |
| Production build | Pass | Hosting build succeeds |
| Route HTML | Unique title, canonical, H1, body, and schema before hydration | Same unique content in live response |
| Redirects | Expected routes mapped | Real 301 responses |
| 404 | Unknown path test | Real 404 response and noindex page |
| Sitemap | Valid XML and registry parity | 200 response, correct canonical URLs, accepted by Search Console |
| Robots | Valid directives and correct sitemap URL | 200 response at `/robots.txt` |
| llms.txt | Literal links to real routes | All linked routes unique and crawlable |
| Structured data | Parse and content match | Rich Results Test/validator check on representative pages |
| Metadata | Matrix uniqueness check | Live source and social preview verification |
| Internal links | No orphan pages or broken links | Crawl confirms graph and status codes |
| Accessibility | Keyboard, headings, labels, contrast | Representative live smoke test |
| Performance | Clean-profile Lighthouse | Production field/lab baseline recorded |
| Conversion | CTA and qualification flow still work locally | Approved live form and booking verification performed separately |

A passing build or HTTP 200 is not proof of correct persistence, booking, indexing, citation, or production behavior.

## 22. Acceptance Criteria

The website implementation is ready for deployment review when:

1. The implementation branch is isolated from unrelated backend/Cal work.
2. Source and production baselines have been reconciled.
3. Every public route has one approved intent.
4. Essential text and metadata are present in initial HTML.
5. Unknown URLs return a real 404.
6. Legacy URLs use approved permanent redirects.
7. Claims are approved, qualified, or removed.
8. FAQs render from the same source as FAQ schema.
9. Articles have visible authorship, citations, and honest freshness metadata.
10. Structured data matches visible content and passes validation.
11. The sitemap is generated from canonical indexable routes.
12. Robots and AI-crawler policy are accurate.
13. The Hampton Roads page is substantive and no city clones exist.
14. Contextual internal links connect commercial and informational content.
15. Typecheck, tests, build, crawl checks, and visual QA pass.
16. No deployment or external profile changes occur without approval.

## 23. Required Business Inputs

Before final copy and schema approval, BlackVault should provide or approve:

- Exact legal business name and public brand name.
- Approved Hampton Roads/service-area wording.
- Founder full names, roles, short bios, and public profile links.
- Correct logo and social-image assets.
- Current offer, engagement model, and pricing language.
- Realistic delivery timelines and support boundaries.
- Data-handling, NDA, privacy, security, and vendor statements.
- Evidence for experience and performance claims.
- Approved public case studies, examples, screenshots, or demonstrations.
- Current Search Console and analytics exports where available.
- The desired crawler policy for search retrieval and model training.

Do not place secrets, passwords, mailbox access, tokens, API keys, or private credentials in documentation or the repository.

## 24. Risk Register

| Risk | Mitigation |
| --- | --- |
| SEO work mixes with dirty backend/Cal changes | Isolate work before implementation and review final diff by scope. |
| Clone is not the deployed source | Reconcile Git, source, hosting, and live output in Phase 0. |
| SPA content is delayed or missed by crawlers | Produce route-specific initial HTML and test without JavaScript. |
| Invalid URLs return 200 | Implement and verify a real 404. |
| FAQ schema contradicts visible answers | Use one shared FAQ data source. |
| Sitemap becomes stale | Generate it from the canonical route/content registry. |
| Unsupported claims become AI answers | Enforce the claim register before copy and schema changes. |
| Forty topic suggestions become thin content | Consolidate into buyer-intent clusters and validate before publishing. |
| Pages compete for the same query | Maintain a query-to-URL map and consolidate overlaps. |
| Freshness dates are inflated | Update dates only after material editorial changes. |
| Local positioning narrows national reach | Use one substantive Hampton Roads page and national core pages. |
| Schema is treated as an AEO shortcut | Require visible useful content first and validate exact correspondence. |
| Off-site GEO becomes spam | Use only genuine profiles, reviews, directories, mentions, and earned proof. |
| Search work harms conversion | Preserve one CTA and review conversion paths after each content change. |

## 25. Definition of Done

This initiative is complete only when the approved scope has been implemented, locally verified, explicitly approved for release, deployed through the approved process, and then verified on production.

Completion does not mean that BlackVault is guaranteed to rank, be cited, or be recommended. Those are measured outcomes that develop after publication. The implementation is complete when the website is technically eligible, factually trustworthy, structurally clear, measurable, and capable of supporting ongoing content and entity growth without manual drift.
