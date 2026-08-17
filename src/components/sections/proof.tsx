import { Reveal } from "@/components/reveal"

const INDUSTRIES = [
  "Real Estate & Hospitality",
  "Marketing & Media",
  "Robotics",
  "Consumer Products",
  "Financial Services",
]

export function Proof() {
  return (
    <section className="bg-bv-bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            Selected Work
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-10 max-w-[24ch] font-display text-[clamp(1.75rem,3vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.01em] text-bv-text-primary">
            Built for operators across industries.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8">
            {INDUSTRIES.map((name) => (
              <span key={name} className="font-body text-[0.9375rem] font-light tracking-[0.02em] text-bv-text-secondary">
                {name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 max-w-[70ch] font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-muted">
            Including work with Hierarchy Media and Sabai Glampground — operational systems for
            marketing and hospitality businesses that run on speed of response.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
