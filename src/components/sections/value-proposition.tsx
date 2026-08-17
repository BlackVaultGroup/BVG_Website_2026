import { Reveal } from "@/components/reveal"

const VALUES = [
  {
    title: "Strategic Clarity",
    desc: "We begin with your business problem, not a tool. Every engagement starts with a precise diagnosis.",
  },
  {
    title: "Precision Execution",
    desc: "No handoffs to junior teams. Senior-level architects build and deploy every system.",
  },
  {
    title: "Measurable Outcomes",
    desc: "We define success metrics before we start. If we miss them, we stay until we don't.",
  },
]

export function ValueProposition() {
  return (
    <section id="about" className="bg-bv-bg-primary py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            THE DIFFERENCE
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-10 max-w-[22ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            We don&apos;t sell AI. We architect outcomes.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          {VALUES.map((item, i) => (
            <Reveal key={item.title} delay={200 + i * 100}>
              <div className="border-t-2 border-bv-accent pt-8">
                <h3 className="mb-4 font-body text-base font-medium text-bv-text-primary">
                  {item.title}
                </h3>
                <p className="max-w-[65ch] font-body text-base font-light leading-[1.75] text-bv-text-secondary">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
