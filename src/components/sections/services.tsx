import { Reveal } from "@/components/reveal"
import { ArrowRight } from "lucide-react"

type PageId = "ai-strategy" | "workflow-automation" | "custom-integration" | "executive-advisory"

const SERVICES: { name: string; desc: string; page: PageId }[] = [
  {
    name: "AI Strategy & Roadmapping",
    desc: "Clarity before commitment. We map your AI opportunity before a single line of code is written.",
    page: "ai-strategy",
  },
  {
    name: "Workflow Automation",
    desc: "Manual processes are a liability. We eliminate them with precision-built automation systems.",
    page: "workflow-automation",
  },
  {
    name: "Custom AI Integration",
    desc: "Your existing stack, made intelligent. Seamless integration with no disruption to operations.",
    page: "custom-integration",
  },
  {
    name: "Strategic AI Partnership",
    desc: "Direct access to senior AI strategy for leadership teams making high-stakes decisions.",
    page: "executive-advisory",
  },
]

interface ServicesProps {
  onNavigate?: (page: PageId) => void
}

export function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            WHAT WE DO
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-10 font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Four disciplines. One firm.
          </h2>
        </Reveal>

        <div>
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={200 + i * 100}>
              <button
                onClick={() => onNavigate?.(service.page)}
                className="group relative flex w-full cursor-pointer flex-col gap-2 border-t border-border bg-transparent py-6 pl-0 text-left no-underline transition-all duration-200 last:border-b md:flex-row md:items-baseline md:justify-between md:gap-8 md:hover:border-l-2 md:hover:border-l-bv-accent md:hover:bg-bv-bg-secondary md:hover:pl-6"
              >
                <span className="shrink-0 font-body text-lg font-medium text-bv-text-primary md:min-w-[260px]">
                  {service.name}
                </span>
                <span className="flex-1 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                  {service.desc}
                </span>
                <ArrowRight className="hidden shrink-0 text-bv-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block" size={20} />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
