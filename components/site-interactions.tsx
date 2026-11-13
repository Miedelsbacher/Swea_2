"use client"

import { useEffect, type ReactNode } from "react"

export function SiteInteractions({ children }: { children: ReactNode }) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const legalTrigger = target.closest<HTMLButtonElement>("[data-legal-modal-trigger]")
      if (legalTrigger) {
        const dialogId = legalTrigger.dataset.legalModalTrigger
        const dialog = dialogId ? document.getElementById(dialogId) : null
        if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal()
        return
      }

      const menuToggle = target.closest<HTMLButtonElement>("[data-menu-toggle]")
      if (menuToggle) {
        const isOpen = menuToggle.getAttribute("aria-expanded") !== "true"
        const mainNav = document.querySelector(".main-nav")
        menuToggle.setAttribute("aria-expanded", String(isOpen))
        menuToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen")
        mainNav?.classList.toggle("is-open", isOpen)
        return
      }

      const navigationTrigger = target.closest<HTMLElement>("[data-page-nav]")
      const page = navigationTrigger?.dataset.pageNav
      if (!navigationTrigger || !page) return

      event.preventDefault()
      document.querySelectorAll<HTMLElement>("[data-page-view]").forEach((view) => {
        view.hidden = view.dataset.pageView !== page
      })

      document.querySelectorAll<HTMLButtonElement>('.main-nav [data-nav-top]').forEach((button) => {
        const isCurrentPage = button.dataset.pageNav === page
        button.classList.toggle("is-active", isCurrentPage)
        if (isCurrentPage) {
          button.setAttribute("aria-current", "page")
        } else {
          button.removeAttribute("aria-current")
        }
      })

      document.querySelectorAll<HTMLDetailsElement>(".main-nav [data-nav-group]").forEach((group) => {
        const isCurrentPage = group.dataset.navGroup === page
        const trigger = group.querySelector("summary")
        group.toggleAttribute("data-active", isCurrentPage)
        if (isCurrentPage) {
          trigger?.setAttribute("aria-current", "page")
        } else {
          trigger?.removeAttribute("aria-current")
        }
        group.open = false
      })

      const menuToggleButton = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
      const mainNav = document.querySelector(".main-nav")
      menuToggleButton?.setAttribute("aria-expanded", "false")
      menuToggleButton?.setAttribute("aria-label", "Menü öffnen")
      mainNav?.classList.remove("is-open")

      const targetId = navigationTrigger.dataset.targetId
      if (targetId) {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
          })
        })
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return <>{children}</>
}
