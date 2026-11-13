import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Menu, Phone, ShieldCheck, X } from "lucide-react"
import { LegalModalTrigger } from "@/components/legal-modals"

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

const footerContactLinkClass =
  "inline-flex min-h-11 max-w-full items-center break-all text-[0.9375rem] font-semibold text-brand-deep underline decoration-brand-border underline-offset-4 transition hover:text-brand-primary hover:decoration-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded"

const footerLegalLinkClass =
  "inline-flex min-h-11 items-center rounded px-1 text-sm font-semibold text-brand-primary underline decoration-brand-primary/40 underline-offset-4 transition hover:text-brand-deep hover:decoration-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"

const footerContactItems = [
  { icon: Phone, label: "Telefon", value: "+49 7181 253147", href: "tel:+497181253147" },
  { icon: Mail, label: "E-Mail", value: "edv@swea.de", href: "mailto:edv@swea.de" },
  { icon: Mail, label: "Weitere E-Mail", value: "wb@swea.de", href: "mailto:wb@swea.de" },
  { icon: MapPin, label: "Anschrift", value: "Freiburgstr. 12, 73614 Schorndorf" },
] as const

const legalLinks = [
  { dialogId: "imprint-modal", label: "Impressum" },
  { dialogId: "privacy-modal", label: "Datenschutz" },
  { dialogId: "agb-modal", label: "AGB" },
  { dialogId: "withdrawal-modal", label: "Widerrufsbelehrung" },
] as const

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap grid gap-10 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-12 lg:py-12">
        <div className="flex min-w-0 flex-col items-start gap-4">
          <Link aria-label="SWEA – zur Startseite" className="brand brand-button footer-brand" data-nav-link href="/">
            <span className="brand-mark"><Image alt="" fill sizes="34px" src={antonIconSrc} /></span>
            <span className="brand-copy"><strong>SWEA</strong><span aria-hidden="true" className="brand-divider">|</span><small>Uwe Christian · Schorndorf</small></span>
          </Link>
          <p className="max-w-xs text-sm leading-6 text-brand-muted">IT-Service, KI-Studio und Waldbaden in Schorndorf.</p>
          <span className="inline-flex max-w-sm items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-3 py-1.5 text-xs font-semibold leading-4 text-brand-deep">
            <ShieldCheck aria-hidden="true" className="shrink-0" size={16} />
            Fernwartung verschlüsselt und nur mit Ihrer aktiven Freigabe
          </span>
          <nav aria-label="Seiten" className="mt-2">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className="inline-flex min-h-11 items-center rounded text-sm font-medium text-brand-muted transition hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" data-nav-link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <address className="min-w-0 not-italic">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">Kontakt</h2>
          <p className="mt-3 text-lg font-semibold text-brand-deep">Uwe Christian</p>
          <ul className="mt-4 divide-y divide-brand-border overflow-hidden rounded-xl border border-brand-border bg-brand-surface">
            {footerContactItems.map((item) => {
              const Icon = item.icon
              return (
                <li className="flex min-w-0 items-start gap-3 px-4 py-3" key={item.label}>
                  <Icon aria-hidden="true" className="mt-3 shrink-0 text-brand-primary" size={18} />
                  <div className="flex min-w-0 flex-col">
                    <span className="text-xs font-medium uppercase tracking-[0.08em] text-brand-muted">{item.label}</span>
                    {"href" in item ? (
                      <a className={footerContactLinkClass} href={item.href}>{item.value}</a>
                    ) : (
                      <span className="flex min-h-11 items-center text-[0.9375rem] font-semibold leading-6 text-brand-deep">{item.value}</span>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </address>
      </div>

      <div className="border-t border-brand-border">
        <div className="page-wrap flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Rechtliche Informationen">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {legalLinks.map((link) => (
                <li key={link.dialogId}>
                  <LegalModalTrigger className={footerLegalLinkClass} dialogId={link.dialogId}>{link.label}</LegalModalTrigger>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2 text-sm leading-6 text-brand-muted sm:flex-row sm:items-center sm:gap-4 lg:text-right">
            <p className="text-brand-deep">© {new Date().getFullYear()} Uwe Christian. Alle Rechte vorbehalten.</p>
            <span aria-hidden="true" className="hidden h-4 w-px bg-brand-border sm:block" />
            <p>Kleinunternehmerregelung nach § 19 UStG: Es wird keine Umsatzsteuer ausgewiesen.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
