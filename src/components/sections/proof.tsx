import { Reveal } from "@/components/reveal"

export function Proof() {
  return (
    <section className="bg-bv-bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            Our Standard
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-10 max-w-[28ch] font-display text-[clamp(1.75rem,3vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.01em] text-bv-text-primary">
            We define success before we start. If we miss it, we stay until we don't.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="max-w-[70ch] font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-muted">
            Every engagement begins with clearly defined success criteria. We don't walk away at deployment — we stay engaged until the outcomes we agreed upon are realized.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
