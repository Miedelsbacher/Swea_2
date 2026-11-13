import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Eye,
  ExternalLink,
  Hourglass,
  Leaf,
  MapPin,
  ShieldCheck,
  Sunset,
  TreePine,
  Users,
  Wind,
} from "lucide-react"

const inquiryHref = "/kontakt?bereich=waldbaden"

const primaryButton =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-area-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2 sm:w-auto"

const secondaryButton =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-area-primary/30 bg-transparent px-5 py-3 text-sm font-semibold text-area-primary transition-colors hover:bg-area-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2 sm:w-auto"

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">{children}</span>
  )
}

function WaldbadenHero() {
  return (
    <section aria-labelledby="waldbaden-title" className="section section-wellbeing" id="waldbaden">
      <div className="page-wrap grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-area-subtle px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-area-deep">
            <Leaf aria-hidden="true" size={14} /> Waldbaden &amp; Achtsamkeit
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl lg:text-5xl" id="waldbaden-title">
            After Work – Waldbaden und Achtsamkeit
          </h1>
          <p className="mt-3 text-xl font-medium text-area-primary">Die kleine Auszeit nach der Arbeit.</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-area-muted">
            Der Arbeitstag ist geschafft – aber die Gedanken sind noch mittendrin? Manchmal braucht es einen bewussten Abstand, um wieder bei sich anzukommen. Beim After-Work-Waldbaden nehmen Sie sich Zeit, den Alltag hinter sich zu lassen und die Natur aufmerksam und mit allen Sinnen wahrzunehmen.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className={primaryButton} href="#angebot">
              Mehr über das Angebot erfahren <ArrowRight aria-hidden="true" size={17} />
            </a>
            <Link className={secondaryButton} data-nav-link href={inquiryHref}>
              Interesse am Waldbaden?
            </Link>
          </div>
        </div>

        <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-area-deep shadow-xl md:aspect-[4/5]">
          <Image
            alt="Wald und Streuobstwiesen am Frauenberg in Schorndorf"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/swea/waldbaden-frauenberg.jpg"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-area-deep/85 via-area-deep/5 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 text-white sm:p-6">
            <span className="flex items-center gap-2 text-sm font-semibold"><MapPin aria-hidden="true" size={16} /> Frauenberg · Schorndorf</span>
            <span className="text-xs leading-5 text-white/85">
              Foto: <a href="https://commons.wikimedia.org/wiki/File:Autumn_Frauenberg_Schorndorf_2014.jpg" rel="noreferrer" target="_blank">Maxim Beniashvili / Wikimedia Commons</a>
              {" · "}<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license noreferrer" target="_blank">CC BY-SA 4.0</a> · Web-Zuschnitt
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function WhyAfterWork() {
  return (
    <section aria-labelledby="warum-title" className="section bg-area-surface" id="warum-after-work">
      <div className="page-wrap grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <div>
          <Eyebrow>Warum After Work?</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="warum-title">
            Zwischen Feierabend und Zuhause ankommen.
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-base leading-7 text-area-muted">
          <p>
            Der Übergang vom Berufsleben in die Freizeit gelingt nicht immer von selbst. Der Kopf arbeitet weiter, während zu Hause schon die nächsten Aufgaben warten.
          </p>
          <p>
            Waldbaden ist hier eine bewusste Unterbrechung: Die Natur bietet den Rahmen, das eigene Tempo zu reduzieren und die Aufmerksamkeit neu auszurichten. Nicht, um etwas zu leisten, sondern um den Arbeitstag Schritt für Schritt hinter sich zu lassen.
          </p>
        </div>
      </div>
    </section>
  )
}

function Audience() {
  const situations = [
    {
      icon: Sunset,
      title: "Nach einem fordernden Arbeitstag",
      text: "Für alle, die abends gern bewusst abschalten möchten, statt den Tag gedanklich mit nach Hause zu nehmen.",
    },
    {
      icon: Hourglass,
      title: "Bei Zeit- und Leistungsdruck",
      text: "Für Menschen, deren Alltag oft von Terminen, Erwartungen und Verantwortung geprägt ist.",
    },
    {
      icon: Users,
      title: "Mit Verantwortung für andere",
      text: "Für Beschäftigte und Führungskräfte, die im Beruf wie privat viel tragen und sich selbst eine Pause gönnen möchten.",
    },
  ]

  return (
    <section aria-labelledby="zielgruppe-title" className="section bg-area-soft" id="fuer-wen">
      <div className="page-wrap">
        <div className="mb-8 max-w-3xl">
          <Eyebrow>Für wen?</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="zielgruppe-title">
            Für berufstätige Menschen, die zur Ruhe kommen möchten.
          </h2>
          <p className="mt-4 text-base leading-7 text-area-muted">
            Das Angebot richtet sich besonders an Berufstätige um die 40 und darüber hinaus – eine Altersgrenze gibt es nicht. Sie müssen weder sportlich sein noch Vorkenntnisse im Waldbaden mitbringen.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {situations.map(({ icon: Icon, title, text }) => (
            <li className="rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6" key={title}>
              <span className="grid size-10 place-items-center rounded-xl bg-area-subtle text-area-primary"><Icon aria-hidden="true" size={20} /></span>
              <h3 className="mt-4 text-lg font-semibold text-area-deep">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-area-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Expectations() {
  const items = [
    { icon: TreePine, title: "Eine bewusste Auszeit in der Natur", text: "Zeit im Wald, ohne Programmdruck und ohne Ziel, das erreicht werden muss." },
    { icon: Sunset, title: "Abstand vom Berufsalltag", text: "Den Arbeitstag gedanklich hinter sich lassen und innerlich ankommen." },
    { icon: Eye, title: "Achtsames Wahrnehmen", text: "Die Umgebung aufmerksam und mit allen Sinnen erleben." },
    { icon: Wind, title: "Ruhe und Entschleunigung", text: "Das eigene Tempo reduzieren und den gegenwärtigen Moment bewusst wahrnehmen." },
    { icon: Leaf, title: "Zeit für sich selbst", text: "Ein Stück Raum, das nur Ihnen gehört – mitten im vollen Alltag." },
    { icon: Users, title: "Gemeinsames Erleben", text: "Eine überschaubare Gruppe, in der niemand etwas leisten oder erklären muss." },
  ]

  return (
    <section aria-labelledby="erwartung-title" className="section bg-area-surface" id="was-sie-erwartet">
      <div className="page-wrap">
        <div className="mb-8 max-w-3xl">
          <Eyebrow>Was Sie erwartet</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="erwartung-title">
            Eine angeleitete Natur- und Achtsamkeitserfahrung.
          </h2>
          <p className="mt-4 text-base leading-7 text-area-muted">
            Wie genau Sie durch die Zeit im Wald begleitet werden, erleben Sie vor Ort. So bleibt der Moment für Sie unverstellt – und das Angebot persönlich.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <li className="flex gap-4 rounded-2xl border border-area-border bg-area-soft p-5" key={title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-area-subtle text-area-primary"><Icon aria-hidden="true" size={19} /></span>
              <div>
                <h3 className="text-base font-semibold text-area-deep">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-area-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl border border-area-border bg-area-subtle/60 p-5 sm:p-6">
          <h3 className="text-base font-semibold text-area-deep">Mehr als ein Spaziergang – und doch kein Training</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-area-muted">
            Es geht nicht darum, möglichst viele Kilometer zurückzulegen oder sportliche Leistung zu erbringen. Waldbaden ist keine gewöhnliche Wanderung und keine Therapie, sondern eine angeleitete Erfahrung, bei der bewusstes Wahrnehmen, Entschleunigung und Achtsamkeit im Vordergrund stehen.
          </p>
        </div>
      </div>
    </section>
  )
}

function SmallGroup() {
  return (
    <section aria-labelledby="gruppe-title" className="section bg-area-soft" id="kleine-gruppe">
      <div className="page-wrap">
        <div className="grid items-center gap-6 rounded-[1.75rem] bg-area-deep px-6 py-8 text-white sm:px-10 sm:py-10 md:grid-cols-[auto_1fr] md:gap-10">
          <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-0">
            <span aria-hidden="true" className="text-6xl font-semibold leading-none tracking-tight text-area-accent-light">8</span>
            <span className="text-sm font-medium text-white/80">Teilnehmende<br className="hidden md:block" /> höchstens</span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl" id="gruppe-title">Kleine Gruppe, persönliche Atmosphäre.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Waldbaden findet in kleinen Gruppen mit maximal 8 Personen statt. Das schafft Ruhe, lässt Raum für jede und jeden Einzelnen und macht es leicht, sich auf den Moment einzulassen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutInstructor() {
  return (
    <section aria-labelledby="kursleiter-title" className="section bg-area-surface" id="kursleiter">
      <div className="page-wrap grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <figure className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[1.75rem] bg-area-deep shadow-lg md:mx-0">
          <Image
            alt="Uwe Christian, Kursleiter für Waldbaden und Achtsamkeit"
            className="object-cover object-[center_30%]"
            fill
            sizes="(max-width: 767px) 90vw, 30vw"
            src="/swea/uwe-christian-portrait.png"
          />
        </figure>

        <div>
          <Eyebrow>Über den Kursleiter</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="kursleiter-title">
            Uwe Christian – aus eigener Erfahrung.
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-base leading-7 text-area-muted">
            <p>
              Seit über 30 Jahren arbeite ich in der IT – in einem Umfeld, in dem Tempo, Erreichbarkeit und Verantwortung zum Alltag gehören. Ich weiß aus eigener Erfahrung, wie viel Energie ein anspruchsvoller Arbeitstag kosten kann, und wie gut es tut, ihn bewusst hinter sich zu lassen.
            </p>
            <p>
              Aus dieser Erfahrung ist die Idee zum After-Work-Waldbaden entstanden: ein Angebot, das den Feierabend nicht noch voller macht, sondern Ruhe hineinbringt.
            </p>
            <p>
              Ausgebildet wurde ich im August 2023 an der Deutschen Akademie für Waldbaden und Gesundheit zum Kursleiter für Waldbaden (klassik intensiv). Ergänzend habe ich einen Outdoor-Erste-Hilfe-Kurs bei den Johannitern absolviert.
            </p>
          </div>

          <p className="mt-6 flex items-start gap-3 rounded-xl border border-area-border bg-area-soft p-4 text-sm font-semibold leading-6 text-area-primary">
            <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0" size={18} />
            Wir arbeiten ausschließlich an Orten, die uns vom Forst oder den Besitzern für den jeweiligen Termin gestattet wurden.
          </p>

          <a
            className="mt-5 inline-flex items-center gap-4 rounded-xl border border-area-border bg-white p-3 pr-5 text-sm font-semibold text-area-muted transition-colors hover:border-area-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary"
            href="https://waldbaden-akademie.com/"
            rel="noreferrer"
            target="_blank"
          >
            <Image alt="Deutsche Akademie für Waldbaden und Gesundheit" className="size-16 object-contain" height={219} src="/swea/waldbaden-akademie.jpg" width={225} />
            <span className="flex items-center gap-2">Ausgebildet durch die Akademie <ExternalLink aria-hidden="true" size={14} /></span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Organization() {
  return (
    <section aria-labelledby="organisation-title" className="section bg-area-soft" id="organisatorisches">
      <div className="page-wrap">
        <div className="mb-8 max-w-3xl">
          <Eyebrow>Organisatorisches</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="organisation-title">
            Termine, Mitbringsel und gute Planung.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6" id="termine">
            <h3 className="text-lg font-semibold text-area-deep">Termine &amp; Anfrage</h3>
            <p className="mt-2 text-sm leading-6 text-area-muted">
              Aktuelle Termine und weitere Informationen erhalten Sie gerne auf Anfrage. Für private Freundes-, Familien- und kleine Gruppen finden wir gemeinsam einen passenden Termin und einen ruhigen Ort in der Umgebung von Schorndorf.
            </p>
          </article>
          <article className="rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6" id="mitbringen">
            <h3 className="text-lg font-semibold text-area-deep">Was Sie mitbringen</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-6 text-area-muted">
              <li>Bequeme, wettergerechte Kleidung</li>
              <li>Geeignetes Schuhwerk</li>
              <li>Gegebenenfalls etwas zu trinken</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6" id="wetter">
            <h3 className="text-lg font-semibold text-area-deep">Wetter &amp; Sicherheit</h3>
            <p className="mt-2 text-sm leading-6 text-area-muted">
              Die Durchführung hängt von den jeweiligen Wetter- und Sicherheitsbedingungen ab. Bei besonderen Gefahren kann ein Termin angepasst oder abgesagt werden.
            </p>
          </article>
        </div>

        <p className="mt-5 max-w-3xl text-xs leading-5 text-area-muted">
          Waldbaden ist ein präventives Natur- und Achtsamkeitsangebot. Es gibt kein Heilversprechen und ersetzt keine ärztliche oder therapeutische Behandlung.
        </p>
      </div>
    </section>
  )
}

function ClosingCTA() {
  return (
    <section aria-labelledby="waldbaden-cta-title" className="section bg-area-surface" id="anfrage">
      <div className="page-wrap">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-area-subtle px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-area-surface text-area-accent"><Leaf aria-hidden="true" size={22} /></span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-area-deep sm:text-3xl" id="waldbaden-cta-title">
              Manchmal braucht es gar nicht viel.
            </h2>
            <p className="mt-3 text-base leading-7 text-area-muted">
              Manchmal braucht es gar nicht viel, um wieder bei sich anzukommen: etwas Zeit, ein Stück Natur und die Bereitschaft, den Moment bewusst wahrzunehmen.
            </p>
          </div>
          <Link className={primaryButton} data-nav-link href={inquiryHref}>
            After-Work-Waldbaden anfragen <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function WaldbadenPage() {
  return (
    <>
      <WaldbadenHero />
      <WhyAfterWork />
      <Audience />
      <Expectations />
      <SmallGroup />
      <AboutInstructor />
      <Organization />
      <ClosingCTA />
    </>
  )
}
