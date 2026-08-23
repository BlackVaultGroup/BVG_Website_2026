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

export type RegionalCityFocus = {
  name: string
  focus: string
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
      "BlackVault is based in Virginia Beach and serves fit-based businesses throughout Hampton Roads and across the United States. When an on-site working session or process review will help, we can come to your business. Our work stays focused on useful operating results: helping teams respond faster, keep work moving, and spend less time on repeated tasks.",
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
]

export const REGIONAL_CITY_FOCUSES: RegionalCityFocus[] = [
  { name: "Norfolk", focus: "Better handoffs for teams coordinating customers, operations, and field work." },
  { name: "Chesapeake", focus: "Automation for dispatch, estimates, scheduling, and field-service follow-up." },
  { name: "Hampton", focus: "Reliable systems for process-heavy operations with clear human review." },
  { name: "Newport News", focus: "Operational visibility for teams managing jobs, updates, and customer communication." },
  { name: "Williamsburg", focus: "Consistent customer response during busy visitor and service periods." },
]

export function getServiceArea(slug: string | undefined) {
  return SERVICE_AREAS.find((area) => area.slug === slug)
}
