import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Hampton Roads", path: "/hampton-roads" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

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

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

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

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-body text-sm font-normal tracking-[0.04em] no-underline transition-colors duration-200",
                pathname === link.path
                  ? "text-bv-text-primary"
                  : "text-bv-text-secondary hover:text-bv-text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-block rounded-sm border border-bv-accent bg-transparent px-6 py-2 font-body text-sm font-medium tracking-[0.06em] text-bv-accent transition-all duration-200 hover:-translate-y-px hover:bg-bv-accent hover:text-bv-bg-primary active:translate-y-0"
          >
            Talk through your workflow
          </Link>
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
          "fixed inset-0 top-[72px] z-90 flex-col gap-6 border-t border-[rgba(255,255,255,0.06)] bg-bv-bg-primary px-6 pt-8 transition-opacity duration-200",
          menuOpen ? "flex opacity-100 pointer-events-auto" : "hidden opacity-0 pointer-events-none"
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "font-body text-lg font-normal no-underline transition-colors duration-200",
              pathname === link.path
                ? "text-bv-text-primary"
                : "text-bv-text-secondary hover:text-bv-text-primary"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="mt-4 inline-block self-start rounded-sm border border-bv-accent bg-transparent px-6 py-2 font-body text-sm font-medium tracking-[0.06em] text-bv-accent transition-all duration-200 hover:bg-bv-accent hover:text-bv-bg-primary"
        >
          Talk through your workflow
        </Link>
      </div>
    </nav>
  )
}
