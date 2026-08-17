import { Reveal } from "@/components/reveal"

const OPS = [
  {
    name: "Stop Leads Going Cold",
    desc: "Automated intake, follow-up, and routing so every lead gets a fast, qualified response — around the clock.",
  },
  {
    name: "Catch Calls You'd Otherwise Miss",
    desc: "Every inbound call answered, qualified, and routed automatically by a voice agent trained on your business.",
  },
  {
    name: "Cut Manual Follow-Up Work",
    desc: "Logic-driven workflow automation that runs between your tools and your team without supervision.",
  },
]

export function RevenueOps() {
  return (
    <section className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            THE PROBLEM
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-10 max-w-[28ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Most businesses lose revenue to slow response and manual follow-up.
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
