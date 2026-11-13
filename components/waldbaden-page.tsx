import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Eye,
  ExternalLink,
  Hourglass,
  Leaf,
  Sunset,
  TreePine,
  Users,
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
            <a className={primaryButton} href="#fuer-wen">
              Mehr über das Angebot erfahren <ArrowRight aria-hidden="true" size={17} />
            </a>
            <Link className={secondaryButton} data-nav-link href={inquiryHref}>
              Interesse am Waldbaden?
            </Link>
          </div>
        </div>

        <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-area-deep shadow-xl md:aspect-[4/5]">
          <Image
            alt="Sonnenlicht fällt durch hohe Bäume auf einen Waldweg im Grünen"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/swea/waldbaden-sunlit-forest.webp"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-area-deep/85 via-area-deep/5 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-white sm:p-6">
            Durchatmen und den Wald bewusst erleben.
          </figcaption>
        </figure>
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
    { icon: TreePine, title: "Angeleitete Zeit im Wald", text: "Die Natur bildet den Rahmen für eine gemeinsame Achtsamkeitserfahrung – ohne sportlichen Leistungsdruck." },
    { icon: Eye, title: "Mit allen Sinnen wahrnehmen", text: "Den Wald aufmerksam erleben und den Arbeitstag dabei bewusst ausklingen lassen." },
    { icon: Users, title: "Kleine Gruppe", text: "Mit maximal acht Teilnehmenden bleibt das Angebot überschaubar und persönlich." },
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
            Beim Waldbaden geht es nicht um eine gewöhnliche Wanderung oder darum, möglichst viele Kilometer zurückzulegen. Sie erleben den Wald bewusst und in Ihrem eigenen Tempo.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
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
        <p className="mt-5 max-w-3xl text-sm leading-6 text-area-muted">
          Waldbaden ist keine Therapie und ersetzt keine ärztliche oder therapeutische Behandlung.
        </p>
      </div>
    </section>
  )
}

function AboutInstructor() {
  return (
    <section aria-labelledby="kursleiter-title" className="section bg-area-surface" id="kursleiter">
      <div className="page-wrap grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <figure className="relative mx-auto aspect-[11/10] w-full max-w-sm overflow-hidden rounded-[1.75rem] bg-area-deep shadow-lg md:mx-0">
          <Image
            alt="Uwe Christian im grünen Wald mit einem Schild für Waldbaden und Achtsamkeit"
            className="object-cover object-center"
            fill
            sizes="(max-width: 767px) 90vw, 30vw"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-K3uSI96ngLGPfVNg9oNnP1FTJkzmNU.webp"
            unoptimized
          />
        </figure>

        <div>
          <Eyebrow>Über den Kursleiter</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="kursleiter-title">
            Uwe Christian – aus eigener Erfahrung.
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-base leading-7 text-area-muted">
            <p>
              Seit über 30 Jahren arbeite ich in der IT. Aus eigener Erfahrung kenne ich anspruchsvolle Arbeitstage und den Wunsch, bewusst in den Feierabend zu wechseln. Daraus entstand die Idee zum After-Work-Waldbaden.
            </p>
            <p>
              Ausgebildet wurde ich im August 2023 an der Deutschen Akademie für Waldbaden und Gesundheit zum Kursleiter für Waldbaden (klassik intensiv). Ergänzend habe ich einen Outdoor-Erste-Hilfe-Kurs bei den Johannitern absolviert.
            </p>
          </div>

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
          <Eyebrow>Termine &amp; Organisation</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="organisation-title">
            Gut vorbereitet in den Wald.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6" id="termine">
            <h3 className="text-lg font-semibold text-area-deep">Termine &amp; Veranstaltungsorte</h3>
            <p className="mt-2 text-sm leading-6 text-area-muted">
              Aktuelle Termine und Informationen erhalten Sie auf Anfrage. Für private Freundes-, Familien- und kleine Gruppen finden wir einen passenden Termin. Veranstaltungsorte in der Umgebung von Schorndorf werden nur genutzt, wenn Forst oder Eigentümer dem jeweiligen Termin zugestimmt haben.
            </p>
          </article>
          <article className="rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6" id="mitbringen">
            <h3 className="text-lg font-semibold text-area-deep">Ausrüstung</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-6 text-area-muted">
              <li>Bequeme, wettergerechte Kleidung</li>
              <li>Geeignetes Schuhwerk</li>
              <li>Gegebenenfalls etwas zu trinken</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6" id="wetter">
            <h3 className="text-lg font-semibold text-area-deep">Wetter &amp; Sicherheit</h3>
            <p className="mt-2 text-sm leading-6 text-area-muted">
              Die Durchführung richtet sich nach Wetter und Sicherheitsbedingungen. Bei besonderen Gefahren kann ein Termin angepasst oder abgesagt werden.
            </p>
          </article>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] bg-area-subtle px-6 py-7 sm:px-8 sm:py-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-semibold text-area-deep">Interesse am After-Work-Waldbaden?</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-area-muted">Fragen Sie aktuelle Termine und weitere Informationen direkt an.</p>
          </div>
          <Link className={primaryButton} data-nav-link href={inquiryHref}>
            Waldbaden anfragen <ArrowRight aria-hidden="true" size={17} />
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
      <Audience />
      <Expectations />
      <AboutInstructor />
      <Organization />
    </>
  )
}
