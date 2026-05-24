import { useNavigate } from "react-router-dom"
import { Reveal } from "@/components/reveal"
import { ArrowRight } from "lucide-react"

const SERVICES = [
  {
    name: "Operational AI Systems",
    desc: "We rebuild the systems your operation actually runs on — designed around your data, stack, and workflows.",
    path: "/operational-ai-systems",
  },
  {
    name: "Client Response Systems",
    desc: "Never lose a lead to slow follow-up again. AI-driven intake and response systems that work around the clock.",
    path: "/client-response-infrastructure",
  },
  {
    name: "Intelligent Workflows",
    desc: "Eliminate the manual work between your tools and your team. Logic-driven automation that runs without supervision.",
    path: "/intelligent-workflows",
  },
  {
    name: "Voice AI Systems",
    desc: "Every inbound call answered, qualified, and routed automatically — without adding staff.",
    path: "/voice-ai-systems",
  },
  {
    name: "Executive AI Strategy",
    desc: "A clear picture of where AI fits your business before a single dollar is committed.",
    path: "/executive-ai-strategy",
  },
]

export function Services() {
  const navigate = useNavigate()

  return (
    <section id="services" className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            Capabilities
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-10 font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Designed to improve how businesses operate.
          </h2>
        </Reveal>

        <div>
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={200 + i * 100}>
              <button
                onClick={() => navigate(service.path)}
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
