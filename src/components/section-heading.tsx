import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  className?: string
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow && (
        <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.14em] text-bv-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="m-0 max-w-[28ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-bv-text-primary">
        {title}
      </h2>
    </div>
  )
}
