export type AreaFaq = {
  question: string
  answer: string
}

export type ServiceArea = {
  slug: string
  name: string
  title: string
  description: string
  eyebrow: string
  headline: string
  directAnswer: string
  introduction: string[]
  localHeading: string
  localContext: string
  industries: string[]
  problems: string[]
  faqs: AreaFaq[]
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "hampton-roads-ai-consulting",
    name: "Hampton Roads",
    title: "AI Consulting and Automation in Hampton Roads | BlackVault Group",
    description: "BlackVault Group provides practical AI consulting, workflow automation, voice AI, and operational systems for fit-based businesses across Hampton Roads.",
    eyebrow: "HAMPTON ROADS AI CONSULTING",
    headline: "Practical AI systems for Hampton Roads businesses.",
    directAnswer: "BlackVault Group helps Hampton Roads businesses find the work that slows growth, then design practical AI, automation, and voice systems around it. We begin with the business result, such as faster lead response, fewer missed calls, or less repeated admin work, before choosing any tool.",
    introduction: [
      "Hampton Roads businesses work across a connected regional economy. A customer may call from Virginia Beach, a team may work from Norfolk, and a field crew may serve the Peninsula. Important details can get lost when leads, calls, notes, and follow-up live in different places.",
      "BlackVault is based in Virginia Beach and serves fit-based businesses throughout Hampton Roads and across the United States. Our work stays focused on useful operating results: helping teams respond faster, keep work moving, and spend less time on repeated tasks.",
    ],
    localHeading: "A regional system needs clear handoffs",
    localContext: "Hampton Roads has businesses tied to professional services, visitor-facing work, logistics, skilled trades, health services, manufacturing, and public-facing operations. The industries differ, but the operational problems are often familiar: missed inquiries, scattered records, delayed updates, and too much manual follow-up. A good system gives the right person the right context at the right time.",
    industries: ["Professional and business services", "Field and home services", "Visitor-facing businesses", "Logistics and operations teams", "Health and client service teams", "Manufacturing and skilled trades"],
    problems: ["New leads wait too long for a response", "Calls and web inquiries are handled in separate places", "Staff re-enter the same information across tools", "Follow-up depends on someone remembering every next step", "Customers need answers when the team is busy"],
    faqs: [
      { question: "What does an AI consultant do for a Hampton Roads business?", answer: "An AI consultant helps you find a business problem worth fixing, map the current process, choose the simplest useful solution, and set a clear way to measure the result. The goal is not to add AI everywhere. It is to improve a process that matters." },
      { question: "Can BlackVault work with a business outside Virginia Beach?", answer: "Yes. BlackVault serves fit-based businesses throughout Hampton Roads and can work with businesses elsewhere in the United States. The first step is to understand the operating problem, current tools, and people who will own the result." },
      { question: "What should we automate first?", answer: "Start with a repeatable process that costs time, causes delays, loses leads, or creates mistakes. Common first projects include lead routing, call summaries, record updates, follow-up reminders, and human-reviewed message drafts." },
    ],
  },
  {
    slug: "ai-consulting-virginia-beach",
    name: "Virginia Beach",
    title: "AI Consulting and Automation in Virginia Beach | BlackVault Group",
    description: "Virginia Beach AI consulting for businesses that need clearer lead follow-up, workflow automation, voice AI, and practical operational systems.",
    eyebrow: "VIRGINIA BEACH AI CONSULTING",
    headline: "AI systems built around how Virginia Beach businesses work.",
    directAnswer: "BlackVault Group is based in Virginia Beach and helps local businesses use AI, workflow automation, and voice systems to improve real operations. We start with the work that affects profit, response speed, or team capacity, then build only what your business can use and manage.",
    introduction: [
      "Virginia Beach businesses can serve residents, visitors, property owners, and customers across the wider region. That can mean uneven demand, busy phone lines, fast-changing schedules, and a team that has to keep service personal while work keeps moving.",
      "BlackVault helps you turn that pressure into a clearer process. We look at where new inquiries arrive, how they are routed, where follow-up stops, and what repeated work keeps your staff from the work that needs judgment.",
    ],
    localHeading: "Built for a broad local business mix",
    localContext: "Virginia Beach has a diverse business base that includes visitor-facing businesses, professional services, technology, logistics, manufacturing, retail, and local service companies. We do not use one generic system for all of them. We look for a focused workflow that matches your customer journey, your team, and the tools you already use.",
    industries: ["Home and field services", "Hospitality and visitor services", "Professional services", "Property and real estate teams", "Retail and customer service", "Operations and logistics"],
    problems: ["After-hours calls do not receive a useful first response", "New inquiries sit while staff are serving current customers", "Appointment, estimate, or intake details are copied by hand", "Marketing and follow-up lose momentum during busy weeks", "Owners cannot see where leads or tasks are getting stuck"],
    faqs: [
      { question: "Is BlackVault based in Virginia Beach?", answer: "Yes. BlackVault Group is based in Virginia Beach and serves businesses throughout Hampton Roads as well as fit-based businesses across the United States." },
      { question: "Can AI answer calls for a Virginia Beach business?", answer: "A voice AI system can answer common questions, collect basic information, route a caller, or schedule a next step when the process is clearly defined. Important or unusual situations should always have a clear way to reach a person." },
      { question: "How do we know whether automation will help our business?", answer: "Start by measuring one repeated problem. If it happens often, follows a pattern, and affects time, response speed, revenue, or mistakes, it may be a good candidate for automation or an AI-assisted workflow." },
    ],
  },
  {
    slug: "ai-consulting-norfolk",
    name: "Norfolk",
    title: "AI Consulting and Automation in Norfolk | BlackVault Group",
    description: "Norfolk AI consulting for businesses that want practical workflow automation, voice AI, better lead response, and clearer operating systems.",
    eyebrow: "NORFOLK AI CONSULTING",
    headline: "Clearer operations for Norfolk businesses.",
    directAnswer: "BlackVault Group helps Norfolk businesses use AI and automation to make everyday work easier to manage. We focus on the points where inquiries, service requests, data, and decisions slow down, then create a practical system with clear human ownership.",
    introduction: [
      "Norfolk businesses often operate in a fast-moving regional environment. Office teams, client-facing staff, vendors, and field crews may all need the same information at different times. When the handoff is unclear, customers wait and staff have to chase updates.",
      "An AI project should not make that harder. BlackVault starts by mapping the work that already happens, identifying the delay or repeated task, and deciding whether a simple automation, an AI-assisted workflow, or a better process is the right answer.",
    ],
    localHeading: "Keep service moving without losing the human handoff",
    localContext: "Norfolk is a regional center for commerce, professional services, health services, transportation, customer-facing teams, and public-facing work. These businesses often need reliable routing, fast updates, and a clear record of what has already happened. We build systems that support the people responsible for the next decision.",
    industries: ["Professional and business services", "Health and client service teams", "Logistics and transportation", "Property and facilities teams", "Field service operations", "Customer support teams"],
    problems: ["A customer has to repeat information after changing channels", "Team members cannot see the latest status of a request", "New leads are not routed to the right person quickly", "Routine updates take time away from customer work", "A busy phone line hides valuable service opportunities"],
    faqs: [
      { question: "What can AI automation improve for a Norfolk business?", answer: "AI automation can help with work such as sorting an inquiry, summarizing a call, creating a first draft, updating a record, or reminding the right person about a next step. The best starting point is a repeated process with a clear business cost." },
      { question: "Will automation replace our staff?", answer: "The goal is usually to remove repeated low-value steps, not replace the people who know your customers and operation. Your team should remain in control of important decisions, promises, and unusual cases." },
      { question: "Do we need new software before starting?", answer: "Not always. A first review should look at the tools you already use. Sometimes a clearer process or a standard feature solves the problem before a new AI tool is needed." },
    ],
  },
  {
    slug: "ai-consulting-chesapeake",
    name: "Chesapeake",
    title: "AI Consulting and Automation in Chesapeake | BlackVault Group",
    description: "Chesapeake AI consulting for businesses that need workflow automation, voice AI, lead follow-up systems, and practical operating improvements.",
    eyebrow: "CHESAPEAKE AI CONSULTING",
    headline: "Less manual chasing. More work that moves forward.",
    directAnswer: "BlackVault Group helps Chesapeake businesses improve the repeatable work that slows teams down. We use practical automation and AI where they fit, from lead follow-up and call handling to task routing and record updates, while keeping people responsible for key decisions.",
    introduction: [
      "For a business with staff in the office, on the road, or at a customer site, small gaps can grow quickly. A missed call, an estimate waiting for follow-up, or a task without a clear owner can cost more than the few minutes it first appears to take.",
      "BlackVault helps Chesapeake businesses find those gaps and address them in a manageable order. We work from the current process, not a generic technology checklist, so the first improvement can be useful without disrupting the whole operation.",
    ],
    localHeading: "Start with the work your team repeats",
    localContext: "Chesapeake businesses include field-service providers, construction and trade teams, logistics operations, property services, professional offices, and customer-facing companies. Many need better coordination between inquiry, scheduling, dispatch, job status, and follow-up. A well-designed workflow can make that path visible and easier to manage.",
    industries: ["Home and field services", "Construction and trade teams", "Logistics and dispatch", "Property services", "Professional offices", "Customer-facing local businesses"],
    problems: ["A lead is not contacted until the crew is back in the office", "Estimate requests are tracked in messages, notes, and memory", "A job update does not reach the next person on time", "Dispatch or scheduling work is copied across systems", "Customers call for a status update that the team has to search for"],
    faqs: [
      { question: "What should a Chesapeake field-service business automate first?", answer: "Start with the repeated step that causes the most delay or lost work. That may be new lead intake, estimate follow-up, appointment reminders, job-status updates, or moving information from a form into the system your team uses." },
      { question: "Can voice AI schedule appointments?", answer: "A voice AI system can collect information and offer or request an appointment when the schedule rules are clear. It should hand off unusual requests, pricing questions, and important customer decisions to a person." },
      { question: "How long does a first automation project take?", answer: "The timeline depends on the process, systems, data, and testing needed. A narrow pilot is usually the safest place to start because it creates a clear result without trying to change everything at once." },
    ],
  },
  {
    slug: "ai-consulting-hampton",
    name: "Hampton",
    title: "AI Consulting and Automation in Hampton | BlackVault Group",
    description: "Hampton AI consulting for practical workflow automation, voice AI, operational systems, and human-reviewed business process improvements.",
    eyebrow: "HAMPTON AI CONSULTING",
    headline: "Practical AI for work that needs to run reliably.",
    directAnswer: "BlackVault Group helps Hampton businesses apply AI and automation to real operational problems, such as delayed follow-up, repeated data work, missed calls, and unclear handoffs. The right system should make work more reliable while giving your team control over the decisions that matter.",
    introduction: [
      "Hampton businesses can have detailed processes, skilled teams, and work that cannot afford careless errors. That makes a careful first project important. The goal is not to automate every decision. It is to reduce repeated work and make the next action easier to see.",
      "BlackVault begins with the business outcome you want to improve. We then map the process, identify what needs human review, and decide where AI or simpler automation can support the team without creating a new layer of confusion.",
    ],
    localHeading: "Designed for process-heavy operations",
    localContext: "Hampton's economic development priorities include advanced manufacturing, aerospace, defense-related work, logistics, health services, professional services, hospitality, and technology. Those fields have different requirements, but they all benefit from clear records, defined approvals, and a dependable way to escalate exceptions to a person.",
    industries: ["Advanced manufacturing", "Aerospace and defense-adjacent services", "Logistics and operations", "Healthcare and client services", "Professional services", "Hospitality and visitor services"],
    problems: ["Important details are buried in calls, email, or notes", "Approval steps are unclear or happen too late", "Staff spend time compiling routine updates", "A customer request requires several manual handoffs", "Teams need a safer way to handle exceptions and sensitive information"],
    faqs: [
      { question: "Is AI safe for process-heavy work?", answer: "It can be useful when the workflow has clear boundaries, access is limited, and people review important decisions. Before building, define what the system can do, what it cannot do, and when it must hand the work to a person." },
      { question: "Can BlackVault help us map a process before choosing a tool?", answer: "Yes. Process mapping is often the right first step. It shows where work begins, what information is needed, who owns each decision, and where automation would create value or risk." },
      { question: "What happens if an AI system is unsure?", answer: "A responsible system should not guess in important situations. It should flag the case, keep the available context, and route the work to the right person for review." },
    ],
  },
  {
    slug: "ai-consulting-newport-news",
    name: "Newport News",
    title: "AI Consulting and Automation in Newport News | BlackVault Group",
    description: "Newport News AI consulting for businesses that need better workflow automation, lead response, voice AI, and operational visibility.",
    eyebrow: "NEWPORT NEWS AI CONSULTING",
    headline: "Systems that help Newport News teams stay ahead of the next step.",
    directAnswer: "BlackVault Group helps Newport News businesses use AI and automation to make routine operations easier to track and act on. We focus on practical results, including faster responses, fewer manual updates, clearer ownership, and better handoffs between people and systems.",
    introduction: [
      "When a business manages jobs, service requests, vendors, customers, and internal updates, the work can become hard to see in one place. People may be doing the right things, but the next step still waits because the information is scattered or the handoff is unclear.",
      "BlackVault helps Newport News teams make that work more visible. We start with one repeated workflow, such as inquiry handling, update requests, document summaries, or task routing, and create a controlled way to improve it.",
    ],
    localHeading: "Make operational details easier to use",
    localContext: "Newport News has businesses connected to manufacturing, maritime and industrial work, professional services, health services, education, skilled trades, and customer-facing operations. These teams often need dependable coordination between the people doing the work and the people communicating with customers. The right system should reduce searching, copying, and waiting.",
    industries: ["Manufacturing and industrial services", "Skilled trades and field operations", "Professional services", "Healthcare and client services", "Education and training teams", "Property and facilities operations"],
    problems: ["Job, customer, and status information is spread across several tools", "Staff have to write the same update more than once", "A customer waits because the right person does not see the request", "Supervisors spend time gathering routine information", "Teams need a clear audit trail for what happened next"],
    faqs: [
      { question: "Can AI help us summarize calls, notes, or job updates?", answer: "AI can create a first summary when the source information is available and the team reviews the result. The summary should be easy to correct, linked to the original context, and kept within the right access controls." },
      { question: "What is the difference between workflow automation and AI?", answer: "Workflow automation follows fixed rules, such as creating a task after a form is submitted. AI can help when the work includes varied text, summaries, classification, or draft content. Many useful systems use both, but only where each one adds value." },
      { question: "Will we own the system and accounts?", answer: "Ownership should be clear before a project starts. Your business should know who controls the production accounts, access, documentation, data, and future changes." },
    ],
  },
  {
    slug: "ai-consulting-williamsburg",
    name: "Williamsburg",
    title: "AI Consulting and Automation in Williamsburg | BlackVault Group",
    description: "Williamsburg AI consulting for practical automation, voice AI, customer response, and operational systems built around your business.",
    eyebrow: "WILLIAMSBURG AI CONSULTING",
    headline: "Better customer response for Williamsburg businesses.",
    directAnswer: "BlackVault Group helps Williamsburg businesses use AI and automation to improve customer response, follow-up, and repeatable operations. We start with a specific business problem, then design a system that supports the people who deliver the customer experience.",
    introduction: [
      "Williamsburg businesses often balance customer service with work that changes by season, event, schedule, or demand. A missed inquiry or slow reply can matter when a customer is deciding where to stay, what to book, who to hire, or whether to return.",
      "BlackVault helps businesses build a more dependable response process. That can mean routing a new inquiry, preparing a human-reviewed follow-up, summarizing a call, updating a record, or making sure an important task does not get lost during a busy day.",
    ],
    localHeading: "Support the experience your customers remember",
    localContext: "Williamsburg's economy is shaped by tourism, hospitality, retail, education, professional services, health services, and local businesses that serve both residents and visitors. These teams need systems that help them respond consistently without turning every interaction into a generic script. Automation should protect the human experience, not erase it.",
    industries: ["Hospitality and lodging", "Restaurants and visitor services", "Retail and destination businesses", "Education and training", "Professional services", "Health and wellness services"],
    problems: ["A busy period makes it hard to answer every inquiry quickly", "Staff repeat the same booking or service questions", "Follow-up varies depending on who is working", "Customer details are not easy to find before a conversation", "Marketing and customer communication stop when operations get busy"],
    faqs: [
      { question: "Can AI help a Williamsburg hospitality or visitor-facing business?", answer: "AI can help prepare responses, sort common inquiries, summarize calls, and make follow-up more consistent. The system should clearly hand off special requests, complaints, accessibility needs, and decisions that need a person." },
      { question: "Can automation make our customer experience feel less personal?", answer: "It can if it is used without care. A good workflow handles repeated admin steps in the background so your team has more time and context for the conversations that need a human response." },
      { question: "What is a good first project for a small Williamsburg business?", answer: "Choose one repeated customer or team problem with a clear cost. Examples include inquiry routing, appointment reminders, basic call intake, review requests after a completed service, or moving form details into the system your team already uses." },
    ],
  },
]

export function getServiceArea(slug: string | undefined) {
  return SERVICE_AREAS.find((area) => area.slug === slug)
}
