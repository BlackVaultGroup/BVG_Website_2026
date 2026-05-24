import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useScheduleCall } from "@/components/schedule-call-provider"

const SERVICE_DROPDOWN_ITEMS = [
  { label: "Operational AI Systems", path: "/operational-ai-systems" },
  { label: "Client Response Infrastructure", path: "/client-response-infrastructure" },
  { label: "Intelligent Workflows", path: "/intelligent-workflows" },
  { label: "Voice AI Systems", path: "/voice-ai-systems" },
  { label: "Executive AI Strategy", path: "/executive-ai-strategy" },
]

function ServicesDropdown() {
  const navigate = useNavigate()
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
        aria-expanded={open}
        aria-haspopup="true"
      >
        Services
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        <div className="w-[270px] rounded-sm border border-[rgba(184,134,26,0.15)] bg-[#1A1510] py-2 shadow-[0_16px_40px_rgba(0,0,0,0.8)]" style={{ backgroundColor: "#1A1510" }}>
          {SERVICE_DROPDOWN_ITEMS.map((item, i) => (
            <div key={item.path}>
              {i > 0 && <div className="mx-0 my-0 h-px bg-[rgba(255,255,255,0.05)]" />}
              <button
                onClick={() => {
                  setOpen(false)
                  navigate(item.path)
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

export function Navigation() {
  const { openModal } = useScheduleCall()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const navigate = useNavigate()

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
        <Link
          to="/"
          className="cursor-pointer border-none bg-transparent font-body text-[0.8125rem] font-medium tracking-[0.08em] text-bv-text-primary hover:opacity-85 p-0 no-underline"
        >
          BLACKVAULT GROUP
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link
            to="/how-it-works"
            className="font-body text-sm font-normal tracking-[0.04em] text-bv-text-secondary no-underline transition-colors duration-200 hover:text-bv-text-primary"
          >
            How it Works
          </Link>
          <ServicesDropdown />
          <a
            href="/#contact"
            className="font-body text-sm font-normal tracking-[0.04em] text-bv-text-secondary no-underline transition-colors duration-200 hover:text-bv-text-primary"
          >
            Contact
          </a>
          <button
            onClick={openModal}
            className="inline-block rounded-sm border border-bv-accent bg-transparent px-6 py-2 font-body text-sm font-medium tracking-[0.06em] text-bv-accent transition-all duration-200 hover:-translate-y-px hover:bg-bv-accent hover:text-bv-bg-primary active:translate-y-0 cursor-pointer"
          >
            Start Now
          </button>
        </div>

        <button
          className="flex flex-col gap-[5px] border-none bg-none p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
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
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-0 top-[72px] z-90 flex-col gap-8 border-t border-[rgba(255,255,255,0.06)] bg-bv-bg-primary px-6 pt-12 transition-opacity duration-200",
          menuOpen ? "flex opacity-100 pointer-events-auto" : "hidden opacity-0 pointer-events-none"
        )}
      >
        <Link
          to="/how-it-works"
          onClick={() => setMenuOpen(false)}
          className="font-body text-lg font-normal text-bv-text-secondary no-underline transition-colors duration-200 hover:text-bv-text-primary"
        >
          How it Works
        </Link>

        <div>
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            aria-expanded={mobileServicesOpen}
            aria-haspopup="true"
            className="border-none bg-transparent font-body text-lg font-normal text-bv-text-secondary text-left transition-colors duration-200 hover:text-bv-text-primary cursor-pointer p-0"
          >
            Services {mobileServicesOpen ? "-" : "+"}
          </button>
          {mobileServicesOpen && (
            <div className="mt-4 flex flex-col gap-3 pl-4 border-l border-[rgba(184,134,26,0.15)]">
              {SERVICE_DROPDOWN_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); navigate(item.path) }}
                  className="border-none bg-transparent font-body text-base font-light text-[#F2EDE6] text-left transition-colors duration-150 hover:text-[#B8861A] cursor-pointer p-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <a
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="font-body text-lg font-normal text-bv-text-secondary no-underline transition-colors duration-200 hover:text-bv-text-primary"
        >
          Contact
        </a>
        <button
          onClick={() => { setMenuOpen(false); openModal() }}
          className="mt-4 inline-block self-start rounded-sm border border-bv-accent bg-transparent px-6 py-2 font-body text-sm font-medium tracking-[0.06em] text-bv-accent transition-all duration-200 hover:bg-bv-accent hover:text-bv-bg-primary cursor-pointer"
        >
          Start Now
        </button>
      </div>
    </nav>
  )
}
