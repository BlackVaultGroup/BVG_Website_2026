import { useNavigate } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

const NAV_LINKS = [
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "Process", sectionId: "how-it-works" },
  { label: "Contact", sectionId: "contact" },
]

const SERVICE_LINKS = [
  { label: "Operational AI", path: "/operational-ai-systems" },
  { label: "Client Response", path: "/client-response-infrastructure" },
  { label: "Workflows", path: "/intelligent-workflows" },
  { label: "Voice AI", path: "/voice-ai-systems" },
  { label: "AI Strategy", path: "/executive-ai-strategy" },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function Footer() {
  const navigate = useNavigate()

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
              Strategic AI consulting for operators who think in outcomes.
            </p>
          </div>

          {/* Navigate column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] text-bv-accent">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="w-fit cursor-pointer border-none bg-transparent p-0 text-left font-body text-sm font-light text-bv-text-muted transition-colors duration-200 hover:text-bv-text-secondary"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] text-bv-accent">
              Services
            </h3>
            <nav className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="w-fit cursor-pointer border-none bg-transparent p-0 text-left font-body text-sm font-light text-bv-text-muted transition-colors duration-200 hover:text-bv-text-secondary"
                >
                  {link.label}
                </button>
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
            <a
              href="#"
              className="font-body text-xs font-light text-bv-text-muted no-underline transition-colors duration-200 hover:text-bv-text-secondary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs font-light text-bv-text-muted no-underline transition-colors duration-200 hover:text-bv-text-secondary"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
