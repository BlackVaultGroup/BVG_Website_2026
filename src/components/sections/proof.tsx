import { Reveal } from "@/components/reveal"
import { Link } from "react-router-dom"

const PROOF_POINTS = [
  {
    title: "Transparent process",
    desc: "Every engagement starts with a discovery call where we map your current workflow and agree on what success looks like. You see the plan before we build. You see the system before we hand off.",
  },
  {
    title: "Clear scope",
    desc: "You receive a fixed scope and a fixed price before any work begins. No hourly billing, no vague deliverables, no surprise invoices. If the scope changes, we discuss it and re-quote before proceeding.",
  },
  {
    title: "Defined outcomes",
    desc: "We define success criteria before we start. If agreed milestones are not met, we stay engaged until they are. That is our standard, not a promise we make in the sales call and forget after deployment.",
  },
]

const TECH = [
  "OpenAI",
  "Anthropic",
  "Twilio",
  "Vapi",
  "Make",
  "n8n",
  "Supabase",
  "Zapier",
]

export function Proof() {
  return (
    <section className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            Why believe us
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-12 max-w-[32ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            We would rather show you the work than ask you to trust the pitch.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          {PROOF_POINTS.map((item, i) => (
            <Reveal key={item.title} delay={200 + i * 100}>
              <div className="border-t-2 border-bv-accent pt-6">
                <h3 className="mb-4 font-body text-base font-medium text-bv-text-primary">
                  {item.title}
                </h3>
                <p className="max-w-[52ch] font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-16 border-t border-border pt-10">
            <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
              Tools and platforms we build on
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {TECH.map((name) => (
                <span
                  key={name}
                  className="font-body text-[0.9375rem] font-light text-bv-text-secondary"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-[65ch] font-body text-[0.875rem] font-light leading-[1.75] text-bv-text-muted">
              We choose tools based on what fits your stack and your budget, not what is newest. See our{" "}
              <Link to="/pricing" className="text-bv-accent underline-offset-4 hover:underline">
                pricing
              </Link>{" "}
              for how engagements are scoped, or{" "}
              <Link to="/resources" className="text-bv-accent underline-offset-4 hover:underline">
                resources
              </Link>{" "}
              for more on how we approach the work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
