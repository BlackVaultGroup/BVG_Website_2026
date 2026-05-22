import { Reveal } from "@/components/reveal"
import { useScheduleCall } from "@/components/schedule-call-provider"

export function CTAClose() {
  const { openModal } = useScheduleCall()

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
            Most businesses are 90 days away from a fundamentally different operation. The question is whether they move first.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <button
            onClick={openModal}
            className="inline-block rounded-sm bg-bv-accent px-6 py-4 font-body text-sm font-medium tracking-[0.06em] text-bv-bg-primary transition-all duration-200 hover:-translate-y-px hover:bg-bv-accent-hover active:translate-y-0 cursor-pointer border-none"
          >
            Schedule a Strategy Call
          </button>
        </Reveal>
      </div>
    </section>
  )
}
