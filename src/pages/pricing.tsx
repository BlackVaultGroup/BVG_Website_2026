import { SimplePage } from "@/components/simple-page"

export function PricingPage() {
  return (
    <SimplePage
      title="Pricing — BlackVault Group"
      description="BlackVault Group pricing: fixed-scope engagements with no hourly billing. You receive a fixed quote before any work begins."
      canonicalPath="/pricing"
      eyebrow="Pricing"
      heading="Fixed scope. Fixed price. Defined outcomes."
    >
      <div className="max-w-[65ch]">
        <p className="font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
          Scope drives the price: which systems we build, how many tools we integrate, and what it costs to run them. You receive a fixed quote before any work begins — no hourly billing, no surprises.
        </p>
        <p className="mt-6 font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
          We offer three engagement tiers:
        </p>
        <div className="mt-8 space-y-6">
          <div className="border-t border-border pt-6">
            <h3 className="font-body text-lg font-medium text-bv-text-primary">Strategy Audit</h3>
            <p className="mt-2 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
              A focused operational audit that identifies where leads, calls, and time are being lost, with a clear AI roadmap for what to build next. Fixed scope, fixed price, quoted upfront.
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="font-body text-lg font-medium text-bv-text-primary">System Build</h3>
            <p className="mt-2 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
              Design and deployment of a specific system — lead follow-up automation, voice AI, or workflow automation — built around your stack and your team. Fixed scope, fixed price, quoted upfront.
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="font-body text-lg font-medium text-bv-text-primary">Operational Build-Out</h3>
            <p className="mt-2 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
              A full operational engagement spanning multiple systems and integrations. Scope and price are defined together as part of the strategy audit. Fixed scope, fixed price, quoted upfront.
            </p>
          </div>
        </div>
        <p className="mt-8 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-muted">
          Every engagement begins with a conversation. We'll scope your specific needs and provide a fixed quote before any work begins.
        </p>
      </div>
    </SimplePage>
  )
}
