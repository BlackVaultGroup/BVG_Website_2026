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
    slug: "what-should-my-business-automate-first",
    title: "What Should My Business Automate First?",
    description: "Use a simple profit-first framework to choose the first workflow to automate instead of chasing tools, trends, or the most impressive demo.",
    category: "Automation Priorities",
    image: "/articles/what-should-my-business-automate-first.png",
    imageAlt: "Three business profit paths converging on one prioritized workflow",
    published: "2026-08-20",
    modified: "2026-08-20",
    readingTime: "7 min read",
    directAnswer: "Automate the repeatable process that has the clearest effect on profit. Start by asking whether the process can help you gain customers, increase the value of each customer, or lower operating costs. Then choose one narrow workflow that happens often, wastes time, causes delays, or loses opportunities. Measure the current result before changing it.",
    sections: [
      {
        heading: "Start with profit, not AI",
        paragraphs: [
          "Your business does not need AI for its own sake. It needs to become more profitable, reliable, and easier to run. AI can support those goals, but the tool itself is not the goal.",
          "Starting with a tool can lead you to solve the wrong problem. An impressive demo can still have little value in your daily work. Start with the result your business needs, then decide whether AI is the right way to reach it.",
        ],
      },
      {
        heading: "Use the three-part profit framework",
        paragraphs: [
          "Every business can improve profit in three basic ways. You can gain more customers, make each customer worth more, or lower the cost of doing the work. A useful automation project should support at least one of these paths.",
        ],
        bullets: [
          "Gain more customers by improving lead response, follow-up, qualification, or consistent outreach.",
          "Increase customer value through better onboarding, renewals, useful add-on services, or timely follow-up.",
          "Lower operating costs by reducing repeated data entry, manual routing, reporting work, and avoidable mistakes.",
        ],
      },
      {
        heading: "Find the biggest point of friction",
        paragraphs: [
          "Look for work in your business that happens often and affects one of the three profit paths. Ask where your leads wait, where your staff copy the same information, where work gets forgotten, and where customers need a faster answer.",
          "Do not try to improve all three paths at once. Pick the area with the clearest pain and the easiest result to measure. A small win gives your team proof and helps you learn before the project grows.",
        ],
      },
      {
        heading: "Score possible workflows before choosing",
        bullets: [
          "Frequency: Does this work happen every day or every week?",
          "Value: Does a delay, mistake, or missed step affect revenue or cost?",
          "Repeatability: Does the process follow a pattern most of the time?",
          "Readiness: Are the needed data, tools, and owners available?",
          "Risk: Can a person review sensitive or unusual cases?",
          "Measurement: Can you compare time, response speed, errors, or completed work before and after?",
        ],
      },
      {
        heading: "Examples of useful first projects",
        paragraphs: [
          "If your leads are going cold, start with intake, routing, or follow-up. If your team is buried in administration, start with summaries, data movement, reminders, or routine reports. If your marketing stops whenever work gets busy, create a system that turns approved ideas into first drafts for your team to review.",
          "The goal is not to replace the people who know your business. The goal is to remove low-value steps so they can spend more time on judgment, customers, and growth.",
        ],
      },
      {
        heading: "Do not automate a broken or unclear process",
        paragraphs: [
          "If your team cannot explain the current process, automation may only make the confusion move faster. Map the steps first. Decide who owns the result, which cases need human judgment, and what a correct outcome looks like.",
          "Sometimes the right first move is a clearer rule, a better form, or a standard software feature. Use AI only when it adds value that simpler automation cannot provide.",
        ],
      },
      {
        heading: "Define a small first win",
        paragraphs: [
          "Choose one workflow, one owner, one starting measurement, and one review date. A first project should be small enough to test safely but important enough to matter. If it works, document it and expand with care. If it does not, you have learned without placing the whole operation at risk.",
        ],
      },
    ],
    relatedServices: [{ label: "Operational AI Systems", path: "/operational-ai-systems" }, { label: "Workflow Automation", path: "/intelligent-workflows" }],
  },
  {
    slug: "where-to-start-with-ai-automation",
    title: "Where Should a Small Business Start With AI Automation?",
    description: "Follow a clear starting process: find one business bottleneck, map the work, choose the simplest solution, run a small pilot, and measure the result.",
    category: "Getting Started",
    image: "/articles/where-to-start-with-ai-automation.png",
    imageAlt: "A clear path from business bottleneck to measured automation result",
    published: "2026-08-20",
    modified: "2026-08-20",
    readingTime: "8 min read",
    directAnswer: "Start with one business problem that happens often and has a clear cost. Map how the work is done today, decide whether it needs AI or simple automation, and test one narrow workflow. Keep a person in control of important decisions. Measure the result before you add more tools or automate more of the business.",
    sections: [
      {
        heading: "Step 1: Write down the problems you already feel",
        paragraphs: [
          "Do not begin by shopping for an AI agent. Spend one week noting where work slows down, gets repeated, or falls through the cracks. Look for missed leads, delayed replies, repeated data entry, scattered notes, manual reminders, and reports that take too long.",
          "Use plain business language. Write down the problem, who handles it, how often it happens, and what it costs in time, money, or missed opportunities.",
        ],
      },
      {
        heading: "Step 2: Pick one narrow bottleneck",
        paragraphs: [
          "Choose a process that happens often, follows a pattern, and can be measured. Avoid starting with a rare task or a process that changes every day. Also avoid high-risk decisions until your team has experience with smaller systems.",
          "A good first project may be routing new inquiries, creating a first draft of a follow-up message, summarizing calls, updating records, or reminding the right person when work is waiting.",
        ],
      },
      {
        heading: "Step 3: Map the current process",
        bullets: [
          "What starts the process?",
          "What information is needed?",
          "Which person or system handles each step?",
          "Where do delays and mistakes happen?",
          "Which cases need human judgment?",
          "What does a correct finished result look like?",
        ],
      },
      {
        heading: "Step 4: Decide if the process needs AI",
        paragraphs: [
          "Simple automation is best when the rules are fixed. For example, a form submission can create a record and notify a team member without AI. AI becomes useful when the work includes messy text, summaries, classification, drafts, or information that varies from case to case.",
          "The simplest reliable solution is usually the best place to start. Adding AI to every step can increase cost, risk, and maintenance without improving the result.",
        ],
      },
      {
        heading: "Step 5: Set a human review point",
        paragraphs: [
          "Decide where a person should review, approve, correct, or take over. Customer promises, payments, legal matters, private data, and unusual cases deserve extra care. The system should make escalation easy and give your team the context they need.",
        ],
      },
      {
        heading: "Step 6: Measure the starting point",
        bullets: [
          "How long does the process take now?",
          "How quickly does a customer or lead get a response?",
          "How many steps require manual work?",
          "How often are items missed or corrected?",
          "How many completed results does your team produce?",
        ],
      },
      {
        heading: "Step 7: Run a small pilot",
        paragraphs: [
          "Test the workflow with a limited group, a limited number of cases, or an internal review period. Include normal examples, missing information, duplicate requests, system outages, and unusual cases. A pilot should prove that the workflow is useful and safe, not just that it can run once.",
        ],
      },
      {
        heading: "Step 8: Document ownership and maintenance",
        paragraphs: [
          "Write down who owns the accounts, permissions, data, instructions, and future changes. Your team should know how to pause the system, report a problem, and handle work when a connected tool is unavailable.",
          "After the pilot, compare the result with the starting measurement. Keep what works, fix what does not, and expand only when the first workflow is stable.",
        ],
      },
      {
        heading: "A clear starting point lowers fear",
        paragraphs: [
          "AI can feel confusing when the conversation starts with tools and technical terms. It becomes easier to understand when your team can see one problem, one process, one owner, and one useful result. Clarity builds trust because everyone knows what the system will do and where people remain in control.",
        ],
      },
    ],
    relatedServices: [{ label: "How Our Process Works", path: "/how-it-works" }, { label: "AI Strategy Consulting", path: "/executive-ai-strategy" }],
  },
  {
    slug: "ai-consulting-cost-small-business",
    title: "How Much Does AI Consulting Cost for a Small Business?",
    description: "Learn what shapes AI consulting and implementation costs, how common engagement models differ, and what to review before approving a proposal.",
    category: "AI Buying Guide",
    image: "/articles/ai-consulting-cost-small-business.png",
    imageAlt: "Abstract blueprint showing connected workflow stages and planning layers",
    published: "2026-08-19",
    modified: "2026-08-20",
    readingTime: "7 min read",
    directAnswer: "There is no single responsible price for AI consulting. Your cost depends on the business problem, the number of connected systems, data readiness, risk controls, testing, and support. Compare proposals by separating advice, implementation, software, and ongoing operation instead of relying on one headline number.",
    sections: [
      { heading: "Consulting cost is not the same as total project cost", paragraphs: ["Your total cost may include several parts. Consulting can cover diagnosis, priorities, and an implementation roadmap. A build can add configuration, development, integrations, testing, documentation, and training. Software fees may continue after launch. Your team or an outside provider will also need to handle monitoring and maintenance.", "Before you approve a proposal, ask the provider to show each category separately. This makes proposals easier to compare and helps you spot recurring costs that may be hidden behind a low starting price."] },
      { heading: "The main cost drivers", bullets: ["Process complexity and the number of exceptions a system must handle", "The number and quality of CRM, phone, scheduling, email, and data integrations", "Whether the required data is available, accurate, and permitted for the intended use", "Human review, escalation, security, and regulatory requirements", "Testing across normal, failure, and edge-case scenarios", "Documentation, training, monitoring, and post-launch support"] },
      { heading: "Common ways to structure the work", paragraphs: ["You can begin with an audit or strategy project to define the opportunity before a build. A focused pilot can test one measurable workflow. An implementation project can deliver an approved system and handoff. Ongoing support can cover measurement, maintenance, and carefully scoped improvements.", "Choose the structure based on what you already know. If the process or value is unclear, a smaller diagnostic step is often safer than committing to a large build."] },
      { heading: "What a useful proposal should include", bullets: ["The problem, users, systems, and boundaries in scope", "Deliverables, milestones, acceptance criteria, and your team's responsibilities", "Software and usage costs shown separately from professional services", "Data access, credential ownership, security, and human escalation", "Testing, documentation, training, maintenance, and exit or handoff terms"] },
      { heading: "Hidden costs and ownership questions", paragraphs: ["Include your staff's time, data cleanup, software minimums, usage growth, exception handling, and future changes to connected systems. Confirm that you know who owns the accounts, code, instructions, documentation, and data created during the project."] },
      { heading: "When to delay spending", paragraphs: ["Delay the project when the process changes every week, nobody owns the result, required data is missing, or success cannot be measured. First check whether a clearer policy, a standard software feature, or a simpler automation can solve the problem."] },
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
    modified: "2026-08-20",
    readingTime: "8 min read",
    directAnswer: "Your business should receive more than recommendations or a working demo. A complete consulting project should give you clear priorities, an approved scope, documented system ownership, tested workflows, safeguards, training, success measures, and a plan for support or independent operation.",
    sections: [
      { heading: "1. A clear view of your current operation", paragraphs: ["A useful discovery phase should show you how the work happens today. It should cover the people involved, delays, failure points, data sources, existing tools, and the business result that matters. The people who perform or manage the work should be included so the plan reflects daily reality."] },
      { heading: "2. A prioritized opportunity map", paragraphs: ["Not every task in your business should use AI. Each opportunity should be ranked by value, difficulty, risk, dependencies, and effort. The final map should explain what to improve by hand, handle with standard automation, buy, build, test, or postpone."] },
      { heading: "3. Architecture, scope, and acceptance criteria", bullets: ["A build-versus-buy recommendation with clear tradeoffs", "A system diagram showing inputs, decisions, outputs, and owners", "What is in scope, out of scope, and dependent on your team", "Clear acceptance criteria for normal and failure scenarios", "A rollout plan that names each approval and responsible person"] },
      { heading: "4. Testing and failure handling", paragraphs: ["Your test plan should include realistic inputs, missing data, duplicates, unavailable services, unexpected responses, permission failures, and human escalation. A demo that only works with a prepared example does not prove that the system is ready for daily use."] },
      { heading: "5. Security, permissions, and ownership", paragraphs: ["You should know which systems the solution can access, why each permission is needed, where credentials are stored, and who can revoke them. Browser code and public repositories must not contain private API keys. Your business should own or control the production accounts unless another arrangement is clearly documented."] },
      { heading: "6. Training, handoff, and measurement", bullets: ["Clear operating instructions for your users and administrators", "Documentation for the system, settings, dependencies, and recovery steps", "Known limits and a process for reporting problems", "A measurement plan tied to the business result you chose", "Support terms, maintenance responsibilities, and an exit path"] },
      { heading: "Red flags to watch for", bullets: ["The recommendation starts with a favorite tool instead of your business problem", "There are no written success criteria or failure tests", "Ownership, credentials, and handoff are vague", "ROI, savings, or performance are guaranteed without evidence", "Important software, data, or staffing needs are hidden"] },
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
    modified: "2026-08-20",
    readingTime: "8 min read",
    directAnswer: "Use a consultant when your business needs a focused diagnosis or a defined implementation without adding a permanent role. Build an in-house team when the work is central to your company and large enough to manage every week. A hybrid model can work when outside specialists deliver the first system and your staff take ownership.",
    sections: [
      { heading: "What each option gives your business", paragraphs: ["A consultant can give your business short-term help with diagnosis, system design, implementation, and adoption. An internal hire or team brings daily context and ongoing ownership. A focused developer is useful when you already know exactly what needs to be built. A software vendor gives you a product with set limits, not a neutral review of your operation."] },
      { heading: "A practical comparison", table: { headers: ["Option", "Best fit", "Primary tradeoff"], rows: [["Consultant", "Defined diagnosis, pilot, or implementation", "Requires an intentional handoff"], ["In-house team", "Continuous strategic workload", "Hiring and management commitment"], ["Focused developer", "Clear technical requirements", "May not own process or adoption"], ["Software vendor", "Standard problem served by an existing product", "Limited to product capabilities"], ["Hybrid", "External delivery with internal ownership", "Roles must be explicit"]] } },
      { heading: "Choose a consultant when", bullets: ["Your problem crosses operations, sales, service, data, and technology", "You need to start before you can hire a permanent team", "The work has a defined result instead of a permanent weekly queue", "You need an independent build-versus-buy review"] },
      { heading: "Build an internal team when", bullets: ["AI systems are central to your product or long-term advantage", "You have enough ongoing work for a full-time role or team", "Your business can recruit, manage, secure, and retain the required skills", "Daily context and fast internal changes matter more than short-term speed"] },
      { heading: "When a developer or vendor is enough", paragraphs: ["Choose a developer when the workflow, requirements, architecture, and ownership are already defined. Choose a vendor when a standard product solves the problem without heavy customization. Do not pay for a broad strategy engagement when the decision and scope are already settled."] },
      { heading: "Use a hybrid model when both sides add value", paragraphs: ["An outside specialist can map and deliver the first system, document it, train your team, and support the early stages. A person inside your business can then manage the workflow, measure performance, and decide when improvements are needed. Agree on the handoff date, permissions, documentation, and support limits before launch."] },
      { heading: "Questions to answer before deciding", bullets: ["Is this a one-time build, an uncertain diagnosis, or a permanent stream of work?", "Who will own the business result and approve exceptions?", "How quickly must work begin, and what can your team manage now?", "Which systems and sensitive data require access?", "Who should own accounts, documentation, maintenance, and future changes?"] },
    ],
    relatedServices: [{ label: "AI Strategy Consulting", path: "/executive-ai-strategy" }],
  },
]

export function getArticle(slug: string | undefined) {
  return ARTICLES.find((article) => article.slug === slug)
}
