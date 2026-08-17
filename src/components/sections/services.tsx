import { Link } from "react-router-dom"
import { Reveal } from "@/components/reveal"
import { ArrowRight } from "lucide-react"

const SERVICES = [
  {
    name: "Lead-response automation",
    desc: "When a new lead comes in, the system follows up immediately by text or email, qualifies them, and routes them to the right person. No lead waits for someone to notice.",
    path: "/services/lead-follow-up-automation",
  },
  {
    name: "AI phone answering",
    desc: "Every inbound call is answered, qualified, and routed by a voice agent trained on your business. Calls you would otherwise miss get handled without adding staff.",
    path: "/services/voice-ai-systems",
  },
  {
    name: "Workflow automation",
    desc: "The repetitive work between your tools and your team, automated. Data moves where it needs to, follow-ups send on schedule, and your team stops copying things by hand.",
    path: "/services/intelligent-workflows",
  },
]

export function Services() {
  return (
    <section id="systems" className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            What we build
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-12 max-w-[30ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Three systems that close the gap between interest and revenue.
          </h2>
        </Reveal>

        <div>
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={200 + i * 100}>
              <Link
                to={service.path}
                className="group relative flex w-full cursor-pointer flex-col gap-2 border-t border-border py-6 pl-0 no-underline transition-all duration-200 last:border-b md:flex-row md:items-baseline md:justify-between md:gap-8 md:hover:border-l-2 md:hover:border-l-bv-accent md:hover:bg-bv-bg-secondary md:hover:pl-6"
              >
                <span className="shrink-0 font-body text-lg font-medium text-bv-text-primary md:min-w-[280px]">
                  {service.name}
                </span>
                <span className="flex-1 font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                  {service.desc}
                </span>
                <ArrowRight className="hidden shrink-0 text-bv-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block" size={20} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
