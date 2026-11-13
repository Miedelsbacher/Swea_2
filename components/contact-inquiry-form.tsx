"use client"

import { useEffect, useRef, type FormEvent } from "react"
import { ArrowRight } from "lucide-react"

const interestByTopic: Record<string, string> = {
  waldbaden: "Waldbaden",
}

export function ContactInquiryForm() {
  const interestRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("bereich")
    const interest = topic ? interestByTopic[topic] : undefined
    if (interest && interestRef.current) interestRef.current.value = interest
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const interest = String(formData.get("interest") ?? "")
    const message = String(formData.get("message") ?? "")
    const recipient = interest === "Waldbaden" ? "wb@swea.de" : "edv@swea.de"
    const subject = encodeURIComponent(`SWEA-Anfrage: ${interest}`)
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\nBereich: ${interest}\n\n${message}`)

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <form
      className="grid gap-5 rounded-2xl border border-area-border bg-area-surface p-5 text-area-deep shadow-2xl shadow-black/10 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-area-primary">Schreiben Sie uns</span>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-area-deep">Was können wir für Sie tun?</h2>
        <p className="mt-2 text-sm leading-6 text-area-muted">Wählen Sie ein Thema und schildern Sie kurz Ihr Anliegen.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-area-deep">
          <span>Name</span>
          <input className="min-h-11 w-full rounded-lg border border-area-border bg-area-surface px-3 text-sm outline-none transition placeholder:text-area-muted focus:border-area-primary focus:ring-2 focus:ring-area-primary/20" name="name" type="text" autoComplete="name" placeholder="Ihr Name" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-area-deep">
          <span>E-Mail</span>
          <input className="min-h-11 w-full rounded-lg border border-area-border bg-area-surface px-3 text-sm outline-none transition placeholder:text-area-muted focus:border-area-primary focus:ring-2 focus:ring-area-primary/20" name="email" type="email" autoComplete="email" placeholder="name@beispiel.de" required />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-area-deep">
        <span>Bereich</span>
        <select className="min-h-11 w-full rounded-lg border border-area-border bg-area-surface px-3 text-sm outline-none transition focus:border-area-primary focus:ring-2 focus:ring-area-primary/20" name="interest" defaultValue="" ref={interestRef} required>
          <option value="" disabled>Bitte wählen</option>
          <option value="IT-Service">IT-Service</option>
          <option value="Datenrettung">Datenrettung</option>
          <option value="Webseiten &amp; Webdesign">Webseiten &amp; Webdesign</option>
          <option value="KI-Studio">KI-Studio</option>
          <option value="Waldbaden">Waldbaden</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-area-deep">
        <span>Nachricht</span>
        <textarea className="min-h-32 w-full resize-y rounded-lg border border-area-border bg-area-surface px-3 py-3 text-sm leading-6 outline-none transition placeholder:text-area-muted focus:border-area-primary focus:ring-2 focus:ring-area-primary/20" name="message" placeholder="Worum geht es?" maxLength={5000} required />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-area-muted">Beim Absenden öffnet sich Ihr E-Mail-Programm mit den Angaben.</p>
        <button className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-area-primary px-5 text-sm font-semibold text-white transition hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2" type="submit">Nachricht senden <ArrowRight aria-hidden="true" size={16} /></button>
      </div>
    </form>
  )
}
