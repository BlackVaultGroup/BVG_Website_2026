import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"
import { Link } from "react-router-dom"

const FAQ_ITEMS = [
  {
    q: "How much does it cost?",
    a: "Scope drives the price: which systems we build, how many tools we integrate, and what it costs to run them. You receive a fixed quote before any work begins. No hourly billing, no surprises. See our pricing page for the engagement tiers we offer.",
  },
  {
    q: "How long until the system is live?",
    a: "It depends on scope. We agree on a timeline as part of the engagement. A single lead-response system is faster than a full operational build-out spanning multiple systems and integrations. We tell you the timeline before we start.",
  },
  {
    q: "What if the system does not work as expected?",
    a: "We define success criteria before we start. If agreed milestones are not met, we stay engaged until they are. That is our standard, not a sales promise.",
  },
  {
    q: "Do I need to change my existing tools?",
    a: "No. We build around your current stack. If a tool is holding you back, we will say so and explain why, but we do not require you to switch platforms to work with us.",
  },
  {
    q: "How do you handle data security?",
    a: "Every engagement is covered by a mutual NDA before any information is shared. Your data is yours. We never train on client data or share it with third parties.",
  },
  {
    q: "Is this a good fit for my business?",
    a: "If you rely on leads coming in, calls coming in, or manual follow-up to close business, the systems we build are relevant. We work with small and mid-sized businesses across industries. Book a call and we will tell you honestly whether we can help.",
  },
]

export function FAQ() {
  return (
    <section className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            Common questions
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-12 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Questions buyers actually ask.
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
                Our commitment
              </p>
              <h3 className="mb-6 font-display text-2xl font-normal leading-[1.2] tracking-[-0.01em] text-bv-text-primary">
                If we do not hit the metrics, we stay until we do.
              </h3>
              <p className="mb-10 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                Every engagement begins with clearly defined success criteria. We do not walk away at deployment. We stay engaged until the outcomes we agreed upon are realized.
              </p>
              <div className="mb-10 h-px w-10 bg-bv-accent" />
              <p className="mb-2 font-body text-[0.8125rem] font-light text-bv-text-muted">
                No hourly billing. No vague deliverables. Fixed scope, fixed price, defined outcomes.
              </p>
              <p className="mt-6 font-body text-[0.8125rem] font-light text-bv-text-muted">
                See{" "}
                <Link to="/pricing" className="text-bv-accent underline-offset-4 hover:underline">
                  pricing
                </Link>{" "}
                for engagement tiers.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
