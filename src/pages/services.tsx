import { SimplePage } from "@/components/simple-page"

export function ServicesPage() {
  return (
    <SimplePage
      title="Services — BlackVault Group"
      description="BlackVault Group builds practical systems for small and mid-size businesses: lead follow-up automation, voice AI, workflow automation, operational AI systems, and executive AI strategy."
      canonicalPath="/services"
      eyebrow="What We Build"
      heading="Systems that solve the problems costing you revenue."
    >
      <div className="max-w-[65ch]">
        <p className="font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
          We lead with the business problem, not the AI. If leads are going cold, calls are going unanswered, and your team's week is eaten by manual follow-up, we build the systems that close that gap.
        </p>
        <p className="mt-6 font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
          Our work spans five areas:
        </p>
        <ul className="mt-6 space-y-4 font-body text-[1rem] font-light leading-[1.75] text-bv-text-secondary">
          <li><strong className="font-medium text-bv-text-primary">Lead Follow-Up Automation</strong> — Automated intake, follow-up, and routing so every lead gets a fast, qualified response.</li>
          <li><strong className="font-medium text-bv-text-primary">Voice AI Systems</strong> — Every inbound call answered, qualified, and routed automatically.</li>
          <li><strong className="font-medium text-bv-text-primary">Intelligent Workflows</strong> — Logic-driven automation that runs between your tools and your team without supervision.</li>
          <li><strong className="font-medium text-bv-text-primary">Operational AI Systems</strong> — Custom AI infrastructure built around your data, stack, and workflows.</li>
          <li><strong className="font-medium text-bv-text-primary">Executive AI Strategy</strong> — A precise operational audit and AI roadmap before committing to technology.</li>
        </ul>
      </div>
    </SimplePage>
  )
}
