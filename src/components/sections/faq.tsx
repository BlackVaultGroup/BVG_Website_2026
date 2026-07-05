import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

const FAQ_ITEMS = [
  {
    q: "How Much Does an AI Consultant Cost for Small Businesses?",
    a: "Most BlackVault Group engagements range from $2,000 for a focused strategy audit to $60,000+ for a full operational build-out. Scope drives the price: which systems we build, how many tools we integrate, and what it costs to run them. You receive a fixed quote before any work begins — no hourly billing, no surprises.",
  },
  {
    q: "How Long Does It Take to See Results from AI Implementation?",
    a: "Depending on scope, most clients see measurable operational impact within 30 to 60 days of deployment. We define what success looks like before we start, so there is no ambiguity.",
  },
  {
    q: "What Can an AI Consultant Actually Do for a Small Business?",
    a: "We help businesses understand what should be improved, what should be automated, and where the greatest opportunities for growth exist.",
  },
  {
    q: "Can AI Consulting Help Me Save Money?",
    a: "Absolutely. Depending on the opportunity, AI can reduce operational costs, increase team capacity, improve response times, and help capture revenue that may otherwise be lost.",
  },
  {
    q: "How do you handle data security and confidentiality?",
    a: "Every engagement is covered by a mutual NDA before any information is shared. Your data is yours. We never train on client data or share it with third parties.",
  },
  {
    q: "What if the system doesn’t perform as expected?",
    a: "We define success before we start. If agreed milestones are not met, we stay engaged until they are. That is our standard.",
  },
  {
    q: "How Do I Know If My Business Has Operational Bottlenecks?",
    a: "If progress depends on specific people, leads are slipping, or teams spend significant time on manual work, operational bottlenecks may exist.",
  },
]

export function FAQ() {
  return (
    <section className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            COMMON QUESTIONS
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-10 font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Answered directly.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-32">
          <Reveal delay={200}>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b-0 border-t border-border last:border-b"
                >
                  <AccordionTrigger className="py-6 text-left font-body text-base font-medium text-bv-text-primary hover:no-underline [&>svg]:text-bv-accent">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="max-w-[65ch] font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={300}>
            <div className="sticky top-[120px] rounded-sm border border-border bg-bv-bg-secondary p-10">
              <p className="mb-6 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
                OUR COMMITMENT
              </p>
              <h3 className="mb-6 font-display text-2xl font-normal leading-[1.2] tracking-[-0.01em] text-bv-text-primary">
                If we don&apos;t hit the metrics, we stay until we do.
              </h3>
              <p className="mb-10 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                Every engagement begins with clearly defined success criteria. We don&apos;t walk away at deployment, we stay engaged until the outcomes we agreed upon are realized.
              </p>
              <div className="mb-10 h-px w-10 bg-bv-accent" />
              <p className="mb-2 font-display text-[2rem] font-normal leading-none text-bv-accent">
                100%
              </p>
              <p className="font-body text-[0.8125rem] font-light text-bv-text-muted">
                Milestone completion rate across all engagements
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
