import { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    number: "01",
    name: "Discover",
    desc: "We audit your workflows, data systems, and revenue gaps before recommending anything. Every engagement starts with a precise diagnosis -- not a pitch deck.",
  },
  {
    number: "02",
    name: "Architect",
    desc: "A precise system blueprint. Every component mapped, every integration specified, every outcome defined -- before a single line of code is written.",
  },
  {
    number: "03",
    name: "Build",
    desc: "Senior-level execution from start to finish. No junior handoffs. No offshore teams. The architects who designed your system are the ones who build it.",
  },
  {
    number: "04",
    name: "Deploy & Optimize",
    desc: "Launch is the beginning, not the end. We monitor performance, refine every system, and optimize until the metrics we defined together are met.",
  },
]

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const windowH = window.innerHeight
    const start = windowH * 0.85
    const end = windowH * 0.15
    const raw = (start - rect.top) / (start - end)
    setProgress(Math.max(0, Math.min(1, raw)))
  }, [ref])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return progress
}

function BoxReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const progress = useScrollProgress(containerRef)

  const clipTop = 50 - progress * 50
  const clipBottom = 50 + progress * 50
  const borderOpacity = 0.15 + progress * 0.25

  return (
    <div ref={containerRef} className="relative">
      <div
        className="pointer-events-none absolute inset-0 rounded-sm transition-none"
        style={{
          border: `1px solid rgba(193, 154, 107, ${borderOpacity})`,
          opacity: progress > 0.01 ? 1 : 0,
        }}
      />
      <div
        className="overflow-hidden transition-none"
        style={{
          clipPath: `inset(${clipTop}% 0 ${100 - clipBottom}% 0)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            HOW IT WORKS
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-20 max-w-[22ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            A disciplined process.<br />
            No shortcuts.
          </h2>
        </Reveal>

        <BoxReveal>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className={cn(
                  "relative p-6 md:p-10 lg:p-14",
                  i < 2 && "border-b border-border",
                  i % 2 === 0 && "md:border-r md:border-border"
                )}
              >
                <p className="mb-6 font-display text-[clamp(3rem,6vw,5rem)] italic font-light leading-none text-[rgba(193,154,107,0.08)]">
                  {step.number}
                </p>
                <h3 className="mb-4 font-display text-[clamp(1.5rem,3vw,2rem)] font-normal leading-[1.15] tracking-[-0.01em] text-bv-text-primary">
                  {step.name}
                </h3>
                <p className="max-w-[50ch] font-body text-base font-light leading-[1.75] text-bv-text-secondary">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </BoxReveal>
      </div>
    </section>
  )
}
