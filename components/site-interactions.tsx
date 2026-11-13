"use client"

import { useEffect, type ReactNode } from "react"

export function SiteInteractions({ children }: { children: ReactNode }) {
  useEffect(() => {
    const closeMobileNavigation = () => {
      const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
      const mainNav = document.querySelector<HTMLElement>(".main-nav")
      menuToggle?.setAttribute("aria-expanded", "false")
      menuToggle?.setAttribute("aria-label", "Menü öffnen")
      mainNav?.classList.remove("is-open")
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const menuToggle = target.closest<HTMLButtonElement>("[data-menu-toggle]")
      if (menuToggle) {
        const isOpen = menuToggle.getAttribute("aria-expanded") !== "true"
        const mainNav = document.querySelector<HTMLElement>(".main-nav")
        menuToggle.setAttribute("aria-expanded", String(isOpen))
        menuToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen")
        mainNav?.classList.toggle("is-open", isOpen)
        return
      }

      if (target.closest<HTMLAnchorElement>("[data-nav-link]")) closeMobileNavigation()
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return <>{children}</>
}
