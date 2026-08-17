import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  className?: string
  children?: React.ReactNode
  to?: string
}

export function CTAButton({ className, children, to = "/contact" }: CTAButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-block rounded-sm border border-bv-accent bg-transparent px-6 py-3 font-body text-sm font-medium tracking-[0.06em] text-bv-accent transition-all duration-200 hover:-translate-y-px hover:bg-bv-accent hover:text-bv-bg-primary active:translate-y-0",
        className
      )}
    >
      {children ?? "Talk through your workflow"}
    </Link>
  )
}
