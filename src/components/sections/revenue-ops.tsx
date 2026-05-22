import { Reveal } from "@/components/reveal"

const OPS = [
  {
    name: "Instant Engagement",
    desc: "Every inbound lead contacted within minutes. Automated, consistent, zero delay. No lead goes cold.",
  },
  {
    name: "Persistent Pursuit",
    desc: "Multi-channel AI follow-up that never drops a lead. Email, SMS, and voice until they convert or opt out.",
  },
  {
    name: "Conversational AI",
    desc: "Intelligent agents that qualify, nurture, and book, performing at the level of your best representative.",
  },
]

export function RevenueOps() {
  return (
    <section className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            THE ENGINE
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-10 max-w-[22ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Most firms build AI. We build revenue.
          </h2>
        </Reveal>

        <div>
          {OPS.map((item, i) => (
            <Reveal key={item.name} delay={200 + i * 100}>
              <div className="flex flex-col gap-2 border-t border-border py-6 last:border-b md:flex-row md:items-baseline md:justify-between md:gap-8">
                <span className="shrink-0 font-body text-lg font-medium text-bv-text-primary md:min-w-[260px]">
                  {item.name}
                </span>
                <span className="flex-1 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                  {item.desc}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
