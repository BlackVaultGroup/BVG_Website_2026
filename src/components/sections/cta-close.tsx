import { Reveal } from "@/components/reveal"
import { CTAButton } from "@/components/cta-button"

export function CTAClose() {
  return (
    <section
      id="contact"
      className="border-y border-[rgba(193,154,107,0.3)] bg-bv-bg-secondary py-16 md:py-32 text-center"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <h2 className="mx-auto mb-6 max-w-[28ch] font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] tracking-[-0.01em] text-bv-text-primary">
            The gap between where you are and where you could be is operational.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mb-10 max-w-[55ch] font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
            If leads are going cold, calls are going unanswered, and your team's week is eaten by manual follow-up, that's an operational problem. We build the systems that close that gap.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <CTAButton />
        </Reveal>
      </div>
    </section>
  )
}
