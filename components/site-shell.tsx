import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu, ShieldCheck, X } from "lucide-react"

const navigation = [
  { href: "/", label: "Startseite" },
  { href: "/it-service", label: "IT-Service" },
  { href: "/waldbaden", label: "Waldbaden" },
  { href: "/ki-studio", label: "KI-Studio" },
  { href: "/kontakt", label: "Kontakt" },
]

const antonIconSrc = "/swea/anton.jpg"

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link aria-label="SWEA – zur Startseite" className="brand brand-button" data-nav-link href="/">
          <span className="brand-mark"><Image alt="" fill priority sizes="39px" src={antonIconSrc} /></span>
          <span className="brand-copy">
            <strong>SWEA</strong>
            <span aria-hidden="true" className="brand-divider">|</span>
            <small>Uwe Christian · Schorndorf</small>
          </span>
        </Link>
        <button aria-controls="primary-navigation" aria-expanded="false" aria-label="Menü öffnen" className="mobile-menu-toggle" data-menu-toggle type="button">
          <Menu aria-hidden="true" data-menu-icon="open" size={22} />
          <X aria-hidden="true" data-menu-icon="close" size={22} />
        </button>
        <nav aria-label="Hauptnavigation" className="main-nav" id="primary-navigation">
          {navigation.map((item) => (
            <Link className="nav-link inline-flex items-center rounded-md px-2 py-2 text-[13px] font-semibold text-area-deep transition hover:bg-area-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary" data-nav-link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-contact-cta inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-area-primary px-3 text-xs font-semibold text-white transition hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2 sm:px-4 sm:text-sm" data-nav-link href="/kontakt">
          Kontakt<ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap grid gap-6 border-b border-brand-border py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-center lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,.8fr)] lg:gap-8">
        <div>
          <Link aria-label="SWEA – zur Startseite" className="brand brand-button footer-brand" data-nav-link href="/">
            <span className="brand-mark"><Image alt="" fill sizes="34px" src={antonIconSrc} /></span>
            <span className="brand-copy"><strong>SWEA</strong><span aria-hidden="true" className="brand-divider">|</span><small>Uwe Christian · Schorndorf</small></span>
          </Link>
          <p className="mt-2 max-w-xs text-sm leading-5 text-area-muted">IT-Service, KI-Studio und Waldbaden in Schorndorf.</p>
          <span className="mt-3 inline-flex max-w-sm items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-3 py-1.5 text-xs font-semibold leading-4 text-brand-deep">
            <ShieldCheck aria-hidden="true" className="shrink-0" size={16} />
            Fernwartung verschlüsselt und nur mit Ihrer aktiven Freigabe
          </span>
        </div>
        <address className="flex flex-col items-start gap-0.5 not-italic text-sm text-area-muted sm:justify-self-end sm:w-full sm:max-w-sm">
          <h2 className="mb-0 text-sm font-semibold text-area-deep">Kontakt</h2>
          <p className="font-medium text-area-deep">Uwe Christian</p>
          <a className="inline-flex min-h-9 items-center font-medium text-area-deep transition hover:text-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary" href="tel:+497181253147">07181 / 253147</a>
          <a className="inline-flex min-h-9 items-center font-medium text-area-deep transition hover:text-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary" href="mailto:edv@swea.de">edv@swea.de</a>
          <a className="inline-flex min-h-9 items-center font-medium text-area-deep transition hover:text-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary" href="mailto:wb@swea.de">wb@swea.de</a>
          <p className="leading-5">Freiburgstr. 12 · 73614 Schorndorf</p>
          <a className="inline-flex min-h-9 items-center font-medium text-area-deep underline decoration-area-border underline-offset-4 transition hover:text-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary" href="https://www.swea.de/">www.swea.de</a>
        </address>
      </div>
      <div className="page-wrap footer-bottom flex-col items-start sm:flex-row sm:items-center">
        <div className="flex flex-col gap-0.5 text-sm text-brand-deep sm:gap-1">
          <span>© {new Date().getFullYear()} Uwe Christian. Alle Rechte vorbehalten.</span>
          <span className="text-xs font-medium text-brand-muted sm:text-sm">Kleinunternehmerregelung nach § 19 UStG: Es wird keine Umsatzsteuer ausgewiesen.</span>
        </div>
        <nav aria-label="Seiten" className="flex flex-wrap gap-x-2 gap-y-1">
          {navigation.map((item) => (
            <Link className="inline-flex min-h-10 items-center rounded px-1 text-xs font-medium text-brand-muted underline decoration-brand-border underline-offset-4 transition hover:text-brand-deep hover:decoration-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" data-nav-link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Rechtliche Informationen" className="flex flex-wrap gap-x-3 gap-y-1">
          <button className="inline-flex min-h-9 items-center rounded px-1 text-sm font-semibold text-brand-primary underline decoration-brand-border underline-offset-4 transition hover:text-brand-deep hover:decoration-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" data-legal-modal-trigger="imprint-modal" type="button">Impressum</button>
          <button className="inline-flex min-h-9 items-center rounded px-1 text-sm font-semibold text-brand-primary underline decoration-brand-border underline-offset-4 transition hover:text-brand-deep hover:decoration-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" data-legal-modal-trigger="privacy-modal" type="button">Datenschutz</button>
          <button className="inline-flex min-h-9 items-center rounded px-1 text-sm font-semibold text-brand-primary underline decoration-brand-border underline-offset-4 transition hover:text-brand-deep hover:decoration-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" data-legal-modal-trigger="agb-modal" type="button">AGB</button>
          <button className="inline-flex min-h-9 items-center rounded px-1 text-sm font-semibold text-brand-primary underline decoration-brand-border underline-offset-4 transition hover:text-brand-deep hover:decoration-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" data-legal-modal-trigger="withdrawal-modal" type="button">Widerrufsbelehrung</button>
        </nav>
      </div>
    </footer>
  )
}
