import { useEffect, useRef } from "react"

export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    const children = el.querySelectorAll("[data-reveal]")
    children.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
