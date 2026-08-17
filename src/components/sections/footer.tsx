import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

const NAV_LINKS = [
  { label: "About", href: "/about", internal: true },
  { label: "Services", href: "/#services", internal: false },
  { label: "Process", href: "/#how-it-works", internal: false },
  { label: "Contact", href: "/#contact", internal: false },
]

const SERVICE_LINKS = [
  { label: "Operational AI Systems", path: "/operational-ai-systems" },
  { label: "Lead Follow-Up Automation", path: "/lead-follow-up-automation" },
  { label: "Intelligent Workflows", path: "/intelligent-workflows" },
  { label: "Voice AI Systems", path: "/voice-ai-systems" },
  { label: "Executive AI Strategy", path: "/executive-ai-strategy" },
]

export function Footer() {
  return (
    <footer className="bg-bv-bg-primary">
      <Separator className="bg-border" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 py-16 sm:grid-cols-[1fr_1fr_1fr] sm:gap-x-8 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
            <p className="font-display text-lg font-light tracking-[-0.01em] text-bv-text-primary">
              BlackVault Group
            </p>
            <p className="max-w-[28ch] font-body text-sm font-light leading-relaxed text-bv-text-muted">
              Operational AI systems for founders and operators who build to scale.
            </p>
          </div>

          {/* Navigate column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] text-bv-accent">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Site navigation">
              {NAV_LINKS.map((link) =>
                link.internal ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="w-fit font-body text-sm font-light text-bv-text-muted no-underline transition-colors duration-200 hover:text-bv-text-secondary"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-fit font-body text-sm font-light text-bv-text-muted no-underline transition-colors duration-200 hover:text-bv-text-secondary"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] text-bv-accent">
              Services
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Services navigation">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="w-fit font-body text-sm font-light text-bv-text-muted no-underline transition-colors duration-200 hover:text-bv-text-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="bg-border" />

        <div className="flex flex-col items-start gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs font-light text-bv-text-muted">
            &copy; 2026 BlackVault Group LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="font-body text-xs font-light text-bv-text-muted no-underline transition-colors duration-200 hover:text-bv-text-secondary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="font-body text-xs font-light text-bv-text-muted no-underline transition-colors duration-200 hover:text-bv-text-secondary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
