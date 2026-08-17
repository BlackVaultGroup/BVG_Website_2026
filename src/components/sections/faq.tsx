import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

const FAQ_ITEMS = [
  {
    q: "What Can an AI Consultant Actually Do for My Small Business?",
    a: "We help businesses understand what should be improved, what should be automated, and where the greatest opportunities for operational improvement exist. The work ranges from lead follow-up automation to workflow automation to voice AI systems.",
  },
  {
    q: "How Do You Price Your Services?",
    a: "Scope drives the price: which systems we build, how many tools we integrate, and what it costs to run them. You receive a fixed quote before any work begins — no hourly billing, no surprises. See our Pricing page for the engagement tiers we offer.",
  },
  {
    q: "How Long Does It Take to See Results?",
    a: "It depends on scope. We define what success looks like before we start, so there is no ambiguity about what we're working toward. Timelines are agreed upon as part of the engagement.",
  },
  {
    q: "How Do You Handle Data Security and Confidentiality?",
    a: "Every engagement is covered by a mutual NDA before any information is shared. Your data is yours. We never train on client data or share it with third parties.",
  },
  {
    q: "What If the System Doesn't Perform as Expected?",
    a: "We define success before we start. If agreed milestones are not met, we stay engaged until they are. That is our standard.",
  },
  {
    q: "How Do I Know If My Business Has Operational Bottlenecks?",
    a: "If progress depends on specific people, leads are slipping, or teams spend significant time on manual work, operational bottlenecks may exist. A strategy audit can identify where the greatest opportunities are.",
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
                If we don't hit the metrics, we stay until we do.
              </h3>
              <p className="mb-10 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                Every engagement begins with clearly defined success criteria. We don't walk away at deployment, we stay engaged until the outcomes we agreed upon are realized.
              </p>
              <div className="mb-10 h-px w-10 bg-bv-accent" />
              <p className="font-body text-[0.8125rem] font-light text-bv-text-muted">
                No hourly billing. No vague deliverables. Fixed scope, fixed price, defined outcomes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
