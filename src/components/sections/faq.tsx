import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"
import { FAQ_ITEMS } from "@/content/faqs"

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
