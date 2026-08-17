import { SimplePage } from "@/components/simple-page"

export function ResourcesPage() {
  return (
    <SimplePage
      title="Resources — BlackVault Group"
      description="Resources and guides from BlackVault Group on lead follow-up automation, voice AI, workflow automation, and practical AI for small and mid-size businesses."
      canonicalPath="/resources"
      eyebrow="Resources"
      heading="Guides and explanations for operators."
    >
      <div className="max-w-[65ch]">
        <p className="font-body text-[1.0625rem] font-light leading-[1.75] text-bv-text-secondary">
          We're building a library of practical resources for business owners and operators who want to understand where AI can actually help — and where it can't. Check back soon for guides on lead follow-up, voice AI, workflow automation, and more.
        </p>
      </div>
    </SimplePage>
  )
}
