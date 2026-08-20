export type ArticleSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  table?: { headers: string[]; rows: string[][] }
}

export type Article = {
  slug: string
  title: string
  description: string
  category: string
  image: string
  imageAlt: string
  published: string
  modified: string
  readingTime: string
  directAnswer: string
  sections: ArticleSection[]
  relatedServices: { label: string; path: string }[]
}

export const ARTICLES: Article[] = [
  {
    slug: "ai-consulting-cost-small-business",
    title: "How Much Does AI Consulting Cost for a Small Business?",
    description: "Learn what shapes AI consulting and implementation costs, how common engagement models differ, and what to review before approving a proposal.",
    category: "AI Buying Guide",
    image: "/articles/ai-consulting-cost-small-business.png",
    imageAlt: "Abstract blueprint showing connected workflow stages and planning layers",
    published: "2026-08-19",
    modified: "2026-08-19",
    readingTime: "7 min read",
    directAnswer: "There is no responsible one-price answer for AI consulting. The cost is shaped by the business problem, the number of systems involved, data readiness, risk controls, testing, and support. Compare proposals by separating advice, implementation, software, and ongoing operation rather than looking at one headline number.",
    sections: [
      { heading: "Consulting cost is not the same as total project cost", paragraphs: ["Consulting may cover diagnosis, priorities, and an implementation roadmap. A build adds configuration or development, integrations, testing, documentation, and training. Software subscriptions and usage fees continue after launch, while monitoring and maintenance may be handled internally or through ongoing support.", "Ask vendors to show these categories separately. That makes competing proposals easier to compare and helps prevent a low initial quote from hiding recurring dependencies."] },
      { heading: "The main cost drivers", bullets: ["Process complexity and the number of exceptions a system must handle", "The number and quality of CRM, phone, scheduling, email, and data integrations", "Whether the required data is available, accurate, and permitted for the intended use", "Human review, escalation, security, and regulatory requirements", "Testing across normal, failure, and edge-case scenarios", "Documentation, training, monitoring, and post-launch support"] },
      { heading: "Common engagement structures", paragraphs: ["An audit or strategy project defines the opportunity before a build. A focused pilot tests one measurable workflow. An implementation project delivers an approved system and handoff. Ongoing advisory or support covers measurement, maintenance, and carefully scoped improvements.", "The right structure depends on uncertainty. If the process or value is unclear, a smaller diagnostic step can be more responsible than committing to a large build."] },
      { heading: "What a useful proposal should include", bullets: ["The problem, users, systems, and boundaries in scope", "Deliverables, milestones, acceptance criteria, and client responsibilities", "Software and usage costs shown separately from professional services", "Data access, credential ownership, security, and human escalation", "Testing, documentation, training, maintenance, and exit or handoff terms"] },
      { heading: "Hidden costs and ownership questions", paragraphs: ["Account for staff time, data cleanup, software minimums, usage growth, exception handling, and future changes to connected systems. Confirm who owns the accounts, code, prompts, documentation, and data produced during the engagement."] },
      { heading: "When to delay spending", paragraphs: ["Wait when the process changes every week, nobody owns the outcome, required data is missing, or success cannot be measured. Also check whether a policy change, a standard software feature, or a simpler automation can solve the problem first."] },
    ],
    relatedServices: [{ label: "AI Strategy Consulting", path: "/executive-ai-strategy" }, { label: "Operational AI Systems", path: "/operational-ai-systems" }],
  },
  {
    slug: "what-an-ai-consultant-should-deliver",
    title: "What Should an AI Consultant Deliver to Your Business?",
    description: "Use this practical checklist to evaluate AI consulting deliverables, implementation scope, testing, documentation, ownership, and post-launch support.",
    category: "Consultant Evaluation",
    image: "/articles/what-an-ai-consultant-should-deliver.png",
    imageAlt: "Abstract system documentation, testing gates, and secure handoff workflow",
    published: "2026-08-19",
    modified: "2026-08-19",
    readingTime: "8 min read",
    directAnswer: "An AI consultant should leave you with more than recommendations or a working demo. You should receive a prioritized opportunity map, an approved scope, documented architecture and ownership, tested workflows, safeguards, training, measurement criteria, and a clear plan for support or independent operation.",
    sections: [
      { heading: "1. Discovery and an operational assessment", paragraphs: ["The consultant should document the current process, the people involved, delays, failure points, data sources, existing tools, and the business result that matters. Discovery should test assumptions with the people who actually perform or manage the work."] },
      { heading: "2. A prioritized opportunity map", paragraphs: ["Not every task should use AI. Opportunities should be ranked by expected operational value, feasibility, risk, dependencies, and effort. The output should also explain what should be improved manually, handled with standard automation, purchased, built, piloted, or postponed."] },
      { heading: "3. Architecture, scope, and acceptance criteria", bullets: ["A build-versus-buy recommendation with tradeoffs", "A data-flow or system diagram showing inputs, decisions, outputs, and owners", "What is in scope, out of scope, and dependent on the client", "Observable acceptance criteria for normal and failure scenarios", "A rollout plan that identifies approvals and responsible people"] },
      { heading: "4. Testing and failure handling", paragraphs: ["Testing should cover realistic inputs, missing data, duplicates, unavailable services, unexpected responses, permission failures, and human escalation. A demo that only works on a prepared example is not production evidence."] },
      { heading: "5. Security, permissions, and ownership", paragraphs: ["You should know which systems the solution can access, why each permission is needed, where credentials are stored, and who can revoke them. Browser code and public repositories must not contain private API keys. The business should own or control the production accounts unless another arrangement is explicitly documented."] },
      { heading: "6. Training, handoff, and measurement", bullets: ["Operating instructions for users and administrators", "Architecture, configuration, dependencies, and recovery documentation", "Known limitations and a process for reporting problems", "A measurement plan tied to the original operating result", "Support terms, maintenance responsibilities, and an exit path"] },
      { heading: "Red flags in a proposal", bullets: ["The recommendation starts with a favorite tool instead of the business problem", "There are no written success criteria or failure tests", "Ownership, credentials, and handoff are vague", "ROI, savings, or performance are guaranteed without evidence", "Critical software, data, or staffing dependencies are hidden"] },
    ],
    relatedServices: [{ label: "How Our Process Works", path: "/how-it-works" }, { label: "Executive AI Strategy", path: "/executive-ai-strategy" }],
  },
  {
    slug: "ai-consultant-vs-in-house",
    title: "AI Consultant vs. In-House Team: Which Does a Small Business Need?",
    description: "Compare an AI consultant, internal team, developer, software vendor, and hybrid approach using scope, speed, ownership, and ongoing workload.",
    category: "Operating Model",
    image: "/articles/ai-consultant-vs-in-house.png",
    imageAlt: "Balanced external specialist and internal team connected by a shared system",
    published: "2026-08-19",
    modified: "2026-08-19",
    readingTime: "8 min read",
    directAnswer: "Use a consultant when you need a fast, cross-functional diagnosis or a defined implementation without creating a permanent role. Build in-house when the workload is continuous, strategically central, and substantial enough to manage every week. A hybrid model often works when an outside team delivers the first system and internal staff assume ownership.",
    sections: [
      { heading: "What each option provides", paragraphs: ["A consultant brings temporary, cross-functional experience around diagnosis, architecture, implementation, and adoption. An internal hire or team provides day-to-day context and continuous ownership. A focused developer is useful when requirements are already clear. A software vendor provides a product within its boundaries rather than a neutral operating assessment."] },
      { heading: "A practical comparison", table: { headers: ["Option", "Best fit", "Primary tradeoff"], rows: [["Consultant", "Defined diagnosis, pilot, or implementation", "Requires an intentional handoff"], ["In-house team", "Continuous strategic workload", "Hiring and management commitment"], ["Focused developer", "Clear technical requirements", "May not own process or adoption"], ["Software vendor", "Standard problem served by an existing product", "Limited to product capabilities"], ["Hybrid", "External delivery with internal ownership", "Roles must be explicit"]] } },
      { heading: "When a consultant is the better fit", bullets: ["The problem crosses operations, sales, service, data, and technology", "You need to start before a permanent team can be hired", "The work has a defined outcome rather than a permanent weekly queue", "You need an independent build-versus-buy assessment"] },
      { heading: "When an internal hire or team is the better fit", bullets: ["AI systems are central to the company’s product or durable advantage", "There is enough ongoing work for a sustained role or team", "The business can recruit, manage, secure, and retain the required skills", "Deep daily context and rapid internal iteration matter more than short-term speed"] },
      { heading: "When a developer or vendor is enough", paragraphs: ["Choose a developer when the workflow, requirements, architecture, and ownership are already defined. Choose a vendor when a standard product solves the problem without heavy customization. Do not pay for a broad strategy engagement when the decision and scope are already settled."] },
      { heading: "When a hybrid model makes sense", paragraphs: ["A consultant can map and deliver the initial system, document it, train the team, and support early operation. An internal owner then manages the workflow, measures performance, and decides when to request improvements. The handoff date, permissions, documentation, and support boundary should be agreed before launch."] },
      { heading: "Questions to answer before deciding", bullets: ["Is this a one-time build, an uncertain diagnosis, or a permanent stream of work?", "Who will own the business result and approve exceptions?", "How quickly must work begin, and what can the team manage now?", "Which systems and sensitive data require access?", "Who should own accounts, documentation, maintenance, and future changes?"] },
    ],
    relatedServices: [{ label: "AI Strategy Consulting", path: "/executive-ai-strategy" }],
  },
]

export function getArticle(slug: string | undefined) {
  return ARTICLES.find((article) => article.slug === slug)
}
