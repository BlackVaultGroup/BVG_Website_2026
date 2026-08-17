import { Reveal } from "@/components/reveal"

const PROBLEMS = [
  {
    title: "Missed leads",
    desc: "New inquiries sit in an inbox or form queue while you are busy with other work. By the time someone follows up, the lead has moved on or chosen a competitor who answered first.",
  },
  {
    title: "Slow follow-up",
    desc: "Manual follow-up means relying on people to remember, prioritize, and find time. When follow-up is inconsistent, qualified leads slip through the cracks.",
  },
  {
    title: "Unanswered calls",
    desc: "Every call that goes to voicemail during business hours, after hours, or when your team is on the other line is a potential customer who may not call back.",
  },
  {
    title: "Disconnected manual work",
    desc: "Your team copies data between tools, sends the same emails by hand, and repeats tasks that a system could handle. That is time taken away from work that actually grows the business.",
  },
]

export function ProblemRecognition() {
  return (
    <section className="bg-bv-bg-primary py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
            The problem
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="m-0 mb-12 max-w-[30ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
            Revenue walks out the door every day in ways you can fix.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {PROBLEMS.map((item, i) => (
            <Reveal key={item.title} delay={200 + i * 100}>
              <div
                className="border-t border-border py-8 sm:py-10"
                style={{
                  paddingRight: i % 2 === 0 ? undefined : undefined,
                }}
              >
                <h3 className="mb-3 font-body text-lg font-medium text-bv-text-primary">
                  {item.title}
                </h3>
                <p className="max-w-[52ch] font-body text-[0.9375rem] font-light leading-[1.75] text-bv-text-secondary">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
