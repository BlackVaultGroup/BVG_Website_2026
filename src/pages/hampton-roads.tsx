import { SimplePage } from "@/components/simple-page"

export function HamptonRoadsPage() {
  return (
    <SimplePage
      title="Hampton Roads — BlackVault Group"
      description="BlackVault Group serves small and mid-size businesses in the Hampton Roads region with practical AI systems: lead follow-up automation, voice AI, and workflow automation."
      canonicalPath="/hampton-roads"
      eyebrow="Hampton Roads"
      heading="Practical AI systems for Hampton Roads businesses."
    >
      <div className="max-w-[65ch]">
        <p className="font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
          BlackVault Group works with small and mid-size businesses across the Hampton Roads region. Whether you're in Virginia Beach, Norfolk, Chesapeake, Newport News, or the surrounding area, the operational problems are the same: leads going cold, calls going unanswered, and weeks eaten by manual follow-up.
        </p>
        <p className="mt-6 font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
          We build the systems that close that gap — and we define success before we start. If we don't hit the agreed outcomes, we stay until we do.
        </p>
      </div>
    </SimplePage>
  )
}
