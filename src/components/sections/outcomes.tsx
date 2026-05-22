import { Reveal } from "@/components/reveal"

const OUTCOMES = [
  {
    tag: "Operations",
    metric: "63%",
    context: "Reduction in manual processing time for a multi-location operations firm.",
  },
  {
    tag: "Revenue Operations",
    metric: "4 min",
    context: "Average lead response time, down from 3 hours, for a professional services firm.",
  },
  {
    tag: "Growth",
    metric: "$2.4M",
    context: "In recovered pipeline from AI-driven re-engagement sequences over 90 days.",
  },
]

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            CLIENT OUTCOMES
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-10 font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Results speak without names.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
          {OUTCOMES.map((item, i) => (
            <Reveal key={item.tag} delay={200 + i * 100}>
              <div
                className={
                  "py-10 md:px-10 md:py-0" +
                  (i === 0 ? " md:pl-0" : "") +
                  (i === OUTCOMES.length - 1 ? " md:pr-0" : "") +
                  (i > 0 ? " border-t border-border md:border-t-0 md:border-l" : "")
                }
              >
                <p className="mb-6 font-body text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-bv-text-muted">
                  {item.tag}
                </p>
                <p className="mb-4 font-display text-[clamp(2.5rem,5vw,3.5rem)] font-normal leading-none tracking-[-0.02em] text-bv-accent">
                  {item.metric}
                </p>
                <p className="font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                  {item.context}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
