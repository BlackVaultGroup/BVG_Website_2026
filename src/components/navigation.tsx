import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type PageId = "home" | "how-it-works" | "ai-strategy" | "workflow-automation" | "custom-integration" | "executive-advisory"

interface NavigationProps {
  onHowItWorks?: () => void
  onNavigate?: (page: PageId) => void
}

const SERVICE_DROPDOWN_ITEMS = [
  { label: "AI Strategy & Roadmapping", page: "ai-strategy" as PageId },
  { label: "Workflow Automation", page: "workflow-automation" as PageId },
  { label: "Custom AI Integration", page: "custom-integration" as PageId },
  { label: "Strategic AI Partnership", page: "executive-advisory" as PageId },
]

function ServicesDropdown({ onNavigate }: { onNavigate?: (page: PageId) => void }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="border-none bg-transparent font-body text-sm font-normal tracking-[0.04em] text-bv-text-secondary transition-colors duration-200 hover:text-bv-text-primary cursor-pointer p-0"
      >
        Services
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        <div className="w-[220px] rounded-sm border border-[rgba(184,134,26,0.15)] bg-[#1A1510] py-2 shadow-[0_16px_40px_rgba(0,0,0,0.8)]" style={{ backgroundColor: "#1A1510" }}>
          {SERVICE_DROPDOWN_ITEMS.map((item, i) => (
            <div key={item.page}>
              {i > 0 && <div className="mx-0 my-0 h-px bg-[rgba(255,255,255,0.05)]" />}
              <button
                onClick={() => {
                  setOpen(false)
                  onNavigate?.(item.page)
                }}
                className="block w-full cursor-pointer border-none bg-transparent px-5 py-2.5 text-left font-body text-[0.8125rem] font-light text-[#F2EDE6] transition-all duration-150 hover:bg-[rgba(184,134,26,0.08)] hover:text-[#B8861A]"
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Navigation({ onHowItWorks, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-100 border-b border-transparent transition-all duration-300",
        scrolled && "bg-bv-bg-primary border-b-[rgba(255,255,255,0.06)]"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6">
        <button
          onClick={() => onNavigate?.("home")}
          className="cursor-pointer border-none bg-transparent font-body text-[0.8125rem] font-medium tracking-[0.08em] text-bv-text-primary hover:opacity-85 p-0"
        >
          BLACKVAULT GROUP
        </button>

        <div className="hidden items-center gap-10 md:flex">
          <button
            onClick={onHowItWorks}
            className="border-none bg-transparent font-body text-sm font-normal tracking-[0.04em] text-bv-text-secondary transition-colors duration-200 hover:text-bv-text-primary cursor-pointer p-0"
          >
            How it Works
          </button>
          <ServicesDropdown onNavigate={onNavigate} />
          <a
            href="#contact"
            className="font-body text-sm font-normal tracking-[0.04em] text-bv-text-secondary no-underline transition-colors duration-200 hover:text-bv-text-primary"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="inline-block rounded-sm border border-bv-accent bg-transparent px-6 py-2 font-body text-sm font-medium tracking-[0.06em] text-bv-accent no-underline transition-all duration-200 hover:-translate-y-px hover:bg-bv-accent hover:text-bv-bg-primary active:translate-y-0"
          >
            Schedule a Call
          </a>
        </div>

        <button
          className="flex flex-col gap-[5px] border-none bg-none p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block h-px w-5 bg-white transition-transform duration-200 origin-center",
              menuOpen && "translate-y-[3px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-white transition-opacity duration-200",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-white transition-transform duration-200 origin-center",
              menuOpen && "-translate-y-[3px] -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-[72px] z-90 flex-col gap-8 border-t border-[rgba(255,255,255,0.06)] bg-bv-bg-primary px-6 pt-12 transition-opacity duration-200",
          menuOpen ? "flex opacity-100 pointer-events-auto" : "hidden opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => { setMenuOpen(false); onHowItWorks?.() }}
          className="border-none bg-transparent font-body text-lg font-normal text-bv-text-secondary text-left transition-colors duration-200 hover:text-bv-text-primary cursor-pointer p-0"
        >
          How it Works
        </button>

        <div>
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="border-none bg-transparent font-body text-lg font-normal text-bv-text-secondary text-left transition-colors duration-200 hover:text-bv-text-primary cursor-pointer p-0"
          >
            Services {mobileServicesOpen ? "-" : "+"}
          </button>
          {mobileServicesOpen && (
            <div className="mt-4 flex flex-col gap-3 pl-4 border-l border-[rgba(184,134,26,0.15)]">
              {SERVICE_DROPDOWN_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); onNavigate?.(item.page) }}
                  className="border-none bg-transparent font-body text-base font-light text-[#F2EDE6] text-left transition-colors duration-150 hover:text-[#B8861A] cursor-pointer p-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="font-body text-lg font-normal text-bv-text-secondary no-underline transition-colors duration-200 hover:text-bv-text-primary"
        >
          Contact
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 inline-block self-start rounded-sm border border-bv-accent bg-transparent px-6 py-2 font-body text-sm font-medium tracking-[0.06em] text-bv-accent no-underline transition-all duration-200 hover:bg-bv-accent hover:text-bv-bg-primary"
        >
          Schedule a Call
        </a>
      </div>
    </nav>
  )
}
