import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    number: "01",
    name: "Discover",
    desc: "We map your current lead flow, call patterns, and manual workflows. We identify where leads, calls, and time are being lost and agree on what success looks like before any work begins.",
  },
  {
    number: "02",
    name: "Build",
    desc: "We design and deploy the system around your stack and your team. Senior-level architects handle the build. No handoffs to junior staff.",
  },
  {
    number: "03",
    name: "Validate",
    desc: "We test the system against the success criteria we defined together. If something is not working as agreed, we fix it before moving forward.",
  },
  {
    number: "04",
    name: "Handoff and maintain",
    desc: "We hand off a system your team can rely on, then stay available to maintain and improve it as your business changes.",
  },
]

export function EngagementProcess() {
  return (
    <section id="how-it-works" className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            How an engagement works
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-12 max-w-[28ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            A clear process from first conversation to a system you own.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={200 + i * 100}>
              <div
                className="border-t-2 border-bv-accent pt-6"
                style={{
                  paddingBottom: "2rem",
                  paddingRight: i < STEPS.length - 1 ? undefined : undefined,
                }}
              >
                <p className="mb-4 font-display text-[2.5rem] font-light leading-none text-[rgba(193,154,107,0.12)]">
                  {step.number}
                </p>
                <h3 className="mb-3 font-body text-base font-medium text-bv-text-primary">
                  {step.name}
                </h3>
                <p className="max-w-[36ch] font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
