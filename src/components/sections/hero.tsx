export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0F0B0A" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 55%, rgba(193,154,107,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(193,154,107,0.25), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative flex max-w-[640px] flex-col items-center px-6 py-24 text-center">
        <p className="mb-6 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
          Practical AI systems for small and mid-sized businesses
        </p>
        <h1
          className="m-0 mb-6 font-display text-[clamp(2rem,5.5vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-bv-text-primary"
        >
          Respond to new leads while they are still ready to talk.
        </h1>
        <p className="mb-8 max-w-[480px] font-body text-[clamp(1rem,1.4vw,1.0625rem)] font-light leading-[1.75] text-bv-text-secondary">
          BlackVault builds lead-response, phone-answering, and workflow automation systems that help small and mid-sized businesses follow up faster and reduce repetitive work.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-sm bg-bv-accent px-8 py-4 font-body text-sm font-medium tracking-[0.06em] text-bv-bg-primary transition-all duration-200 hover:-translate-y-px hover:bg-bv-accent-hover active:translate-y-0"
        >
          Talk through your workflow
        </a>
      </div>
    </section>
  )
}
