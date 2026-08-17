import { Reveal } from "@/components/reveal"
import { Link } from "react-router-dom"

export function CTAClose() {
  return (
    <section
      id="contact"
      className="border-y border-[rgba(193,154,107,0.3)] bg-bv-bg-secondary py-16 md:py-32 text-center"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <h2 className="mx-auto mb-6 max-w-[28ch] font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] tracking-[-0.01em] text-bv-text-primary">
            Tell us where leads, calls, or time are slipping.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mb-10 max-w-[55ch] font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
            Book a call. We will listen to how your business handles leads and follow-up today, and tell you honestly whether we can help. No pitch deck, no pressure.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Link
            to="/contact"
            className="inline-block rounded-sm bg-bv-accent px-8 py-4 font-body text-sm font-medium tracking-[0.06em] text-bv-bg-primary transition-all duration-200 hover:-translate-y-px hover:bg-bv-accent-hover active:translate-y-0"
          >
            Talk through your workflow
          </Link>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/services" className="font-body text-sm font-light text-bv-text-muted underline-offset-4 hover:text-bv-text-secondary hover:underline">
              Services
            </Link>
            <Link to="/pricing" className="font-body text-sm font-light text-bv-text-muted underline-offset-4 hover:text-bv-text-secondary hover:underline">
              Pricing
            </Link>
            <Link to="/hampton-roads" className="font-body text-sm font-light text-bv-text-muted underline-offset-4 hover:text-bv-text-secondary hover:underline">
              Hampton Roads
            </Link>
            <Link to="/resources" className="font-body text-sm font-light text-bv-text-muted underline-offset-4 hover:text-bv-text-secondary hover:underline">
              Resources
            </Link>
            <Link to="/contact" className="font-body text-sm font-light text-bv-text-muted underline-offset-4 hover:text-bv-text-secondary hover:underline">
              Contact
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
