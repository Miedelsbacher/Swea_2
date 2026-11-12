"use client"

import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  ExternalLink,
  HardDrive,
  Heart,
  Image as ImageIcon,
  Music2,
  Video,
  Leaf,
  MapPin,
  Mail,
  Menu,
  MonitorCog,
  Phone,
  Router,
  ShieldCheck,
  Smartphone,
  Wifi,
  X,
} from "lucide-react"
import { AIExamplesCarousel } from "@/components/ai-examples-carousel"
import { SiteInteractions } from "@/components/site-interactions"

const antonIconSrc = "/swea/anton.jpg"

type PageId = "start" | "edv" | "studio" | "waldbaden" | "about" | "kontakt"

type NavigationLink = {
  label: string
  page: PageId
  targetId: string
}

type NavigationItem = NavigationLink & {
  children?: NavigationLink[]
}

const navigation: NavigationItem[] = [
  { page: "start", label: "Startseite", targetId: "start" },
  {
    page: "edv",
    label: "IT & EDV-Service",
    targetId: "dienstleistungen",
    children: [
      { page: "edv", label: "Computerhilfe", targetId: "computerhilfe" },
      { page: "edv", label: "Netzwerke", targetId: "netzwerke" },
      { page: "edv", label: "Datenrettung", targetId: "datenrettung" },
    ],
  },
  {
    page: "studio",
    label: "KI-Studio",
    targetId: "ki-studio-title",
    children: [
      { page: "studio", label: "KI-Angebote", targetId: "ki-studio-title" },
      { page: "studio", label: "Saisonale Angebote & Aktionen", targetId: "weihnachtsgeschenke" },
    ],
  },
  {
    page: "waldbaden",
    label: "Waldbaden",
    targetId: "kursdetails",
    children: [
      { page: "waldbaden", label: "Termine anfragen", targetId: "termine" },
      { page: "waldbaden", label: "Kursdetails", targetId: "kursdetails" },
    ],
  },
  {
    page: "about",
    label: "Über SWEA",
    targetId: "ueber-swea",
    children: [
      { page: "about", label: "Person", targetId: "about-person" },
      { page: "about", label: "Arbeitsweise", targetId: "about-arbeitsweise" },
      { page: "about", label: "Erfahrung", targetId: "about-erfahrung" },
    ],
  },
  { page: "kontakt", label: "Kontakt", targetId: "kontakt" },
]

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button aria-label="SWEA – zur Startseite" className="brand brand-button" data-page-nav="start" data-nav-top data-target-id="start" type="button">
          <span className="brand-mark"><Image alt="" fill priority sizes="39px" src={antonIconSrc} /></span>
          <span className="brand-copy">
            <strong>SWEA</strong>
            <span aria-hidden="true" className="brand-divider">|</span>
            <small>Uwe Christian · Schorndorf</small>
          </span>
        </button>
        <button aria-controls="primary-navigation" aria-expanded="false" aria-label="Menü öffnen" className="mobile-menu-toggle" data-menu-toggle type="button">
          <Menu aria-hidden="true" data-menu-icon="open" size={22} />
          <X aria-hidden="true" data-menu-icon="close" size={22} />
        </button>
        <nav aria-label="Hauptnavigation" className="main-nav" id="primary-navigation">
          {navigation.map((item) => item.children ? (
            <details className="nav-dropdown" data-nav-group={item.page} key={item.page}>
              <summary className="nav-trigger inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-2 text-[13px] font-semibold text-emerald-950 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                {item.label}<ChevronDown aria-hidden="true" size={15} />
              </summary>
              <div className="nav-submenu">
                {item.children.map((child) => (
                  <button className="nav-submenu-link" data-nav-subitem data-page-nav={child.page} data-target-id={child.targetId} key={child.targetId} type="button">{child.label}</button>
                ))}
              </div>
            </details>
          ) : (
            <button aria-current={item.page === "start" ? "page" : undefined} className="nav-link inline-flex items-center rounded-md px-2 py-2 text-[13px] font-semibold text-emerald-950 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700" data-nav-top data-page-nav={item.page} data-target-id={item.targetId} key={item.page} type="button">
              {item.label}
            </button>
          ))}
        </nav>
        <button className="header-contact-cta inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-emerald-800 px-3 text-xs font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 sm:px-4 sm:text-sm" data-page-nav="kontakt" data-target-id="kontakt" type="button">
          Kontakt<ArrowRight aria-hidden="true" size={15} />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="start">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-inner page-wrap">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light"><span className="status-dot" /> EDV-Service &amp; Waldbaden · Schorndorf</span>
          <h1>Technik, die hilft.<br /><em>Ruhe, die bleibt.</em></h1>
          <p className="hero-description">
            Persönlicher IT-Service, Computerhilfe, Netzwerke &amp; Webdesign – sowie neue Kraft durch Waldbaden in Schorndorf.
          </p>
          <div className="hero-actions">
            <button className="button button-light" data-page-nav="edv" type="button">SWEA Technik entdecken <ArrowRight aria-hidden="true" size={17} /></button>
            <button className="button button-outline-light" data-page-nav="waldbaden" type="button">SWEA Natur entdecken</button>
          </div>
          <div className="hero-proof"><MapPin aria-hidden="true" size={16} /> Persönlich für Sie da in Schorndorf und Umgebung</div>
        </div>
        <figure className="hero-visual">
          <div className="hero-portrait-frame">
            <Image alt="Uwe Christian, persönlicher IT-Serviceanbieter in Schorndorf" src="/swea/uwe-christian-portrait.png" fill priority sizes="(max-width: 700px) 100vw, 46vw" />
          </div>
          <figcaption className="hero-note"><span className="hero-note-mark"><Check aria-hidden="true" size={15} /></span><span><strong>Uwe Christian</strong><br />Ihr persönlicher Ansprechpartner</span></figcaption>
        </figure>
      </div>
      <a aria-label="Weiter zu den Leistungen" className="hero-scroll" href="#bereiche"><ArrowDown aria-hidden="true" size={18} /></a>
    </section>
  )
}

const uweSongLyrics = `Am Router blinkt kein Licht im Stillen,
Wo Uwe IT-Fehler hebt.
Mit Fachverstand und festem Willen
Wird hier der Kundendienst gelebt.
Von der Stirne heiß
Rinnen muss der Schweiß,
Soll PC und Netz perfekt gelingen –
Uwes Hände das Werk vollbringen!

Der Uwe kann’s, der Uwe macht’s,
Er schuftet gern, er packt’s und lacht!
Wird niemals krank, bleibt stets in Schwung,
Ein Mann von Tat und Begeisterung!

Ob Datenrettung, Webseiten-Bau,
Ob Waldbaden mit Achtsamkeit –
Der Uwe weiß es ganz genau
Und steht im Forst und Raum bereit.
Ob Motorsäge, Trimmer-Schall,
Ob Dübel, Wasserrohr und Wand –
Als Handwerker an jedem Fall
Nimmt er das Hausgut in die Hand.

Der Uwe kann’s, der Uwe macht’s,
Er schuftet gern, er packt’s und lacht!
Wird niemals krank, bleibt stets in Schwung,
Ein Mann von Tat und Begeisterung!

Als Schiedsrichter beim Boule am Platz
Achtet er streng auf Maß und Pflicht.
Doch wirft er selbst zum kleinen Schatz,
Trifft seine Kugel mit Gewicht.
Vom Schuppen bis zum Rasengrün,
Vom Rechner bis zur Natur im Hain,
Sieht man ihn voller Tatkraft blühn –
Der Uwe bringt sich überall ein!

Der Uwe kann’s, der Uwe macht’s,
Er schuftet gern, er packt’s und lacht!
Wird niemals krank, bleibt stets in Schwung,
Ein Mann von Tat und Begeisterung!`

function QuickLinks() {
  return (
    <section aria-label="Unsere Bereiche" className="quick-links page-wrap" id="bereiche">
      <button className="quick-link" data-page-nav="edv" type="button">
        <span className="quick-link-icon"><MonitorCog aria-hidden="true" size={21} /></span>
        <span><strong>EDV-Dienstleistungen:</strong><small>Technik, die den Alltag leichter macht</small></span>
        <ArrowUpRight aria-hidden="true" className="quick-arrow" size={18} />
      </button>
      <button className="quick-link" data-page-nav="waldbaden" type="button">
        <span className="quick-link-icon quick-link-nature"><Leaf aria-hidden="true" size={21} /></span>
        <span><strong>EDV-Erholung:</strong><small>Achtsamkeit und Waldbaden</small></span>
        <ArrowUpRight aria-hidden="true" className="quick-arrow" size={18} />
      </button>
    </section>
  )
}

function HomeView() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <section aria-labelledby="seasonal-action-title" className="seasonal-action-wrap page-wrap">
        <div className="seasonal-action-card">
          <div className="seasonal-action-content">
            <div className="seasonal-action-copy">
              <span className="seasonal-action-badge">EDV-Sparte · Saisonales KI-Special</span>
              <h2 id="seasonal-action-title">Moderne KI-Technik, persönlich für Sie inszeniert.</h2>
              <p className="seasonal-action-description">
                Hinter jedem beeindruckenden Bild, Video oder individuellen Song steckt moderne generative KI – präzise gesteuert mit unserem IT-Know-how. Ob als einzigartiges Weihnachtsgeschenk mit dem Gesicht Ihrer Liebsten, als persönlicher Song oder als persönliches Motiv für Ihr Zuhause, Ihre Familie oder ein Geschenk: Wir zeigen, was heute digital möglich ist.
              </p>
            </div>
            <ul className="seasonal-action-highlights" aria-label="Möglichkeiten im KI-Studio">
              <li>
                <span className="seasonal-highlight-icon"><ImageIcon aria-hidden="true" size={17} /></span>
                <span><strong>KI-Bildwelten &amp; Porträts</strong><small>Individuell erstellt für Drucke, Tassen oder Kissen.</small></span>
              </li>
              <li>
                <span className="seasonal-highlight-icon"><Video aria-hidden="true" size={17} /></span>
                <span><strong>Persönliche KI-Videos</strong><small>Emotionale Videogrüße und kreative Kurzclips.</small></span>
              </li>
              <li>
                <span className="seasonal-highlight-icon"><Music2 aria-hidden="true" size={17} /></span>
                <span><strong>Maßgeschneiderte Songs</strong><small>Eigener Liedtext und Musikstil nach Ihren Vorgaben.</small></span>
              </li>
            </ul>
            <div className="seasonal-action-actions">
              <button className="button button-action" data-page-nav="studio" type="button">
                Beispiele &amp; Weihnachtsaktion entdecken <ArrowRight aria-hidden="true" size={17} />
              </button>
              <button className="seasonal-action-secondary" data-page-nav="studio" type="button">
                Lieblingsmotive &amp; persönliche Anlässe <ArrowUpRight aria-hidden="true" size={15} />
              </button>
            </div>
          </div>
          <div className="seasonal-action-collage" aria-label="Vorschau zu KI-Bild, Video und Song">
            <figure className="seasonal-preview seasonal-preview-portrait">
              <picture>
                <Image alt="Uwe Christian in seinem Büro am Schreibtisch" fill sizes="(max-width: 900px) 48vw, 22vw" src="/swea/uwe-christian-portrait.png" />
              </picture>
              <figcaption>Persönliches KI-Porträt</figcaption>
            </figure>
            <figure className="seasonal-preview seasonal-preview-video">
              <video aria-label="Persönlicher Video-Gruß" controls playsInline preload="metadata" src="/swea/video-gruss.mp4" poster="/swea/video-gruss-poster.png" />
              <figcaption>Video-Gruß</figcaption>
            </figure>
            <div className="seasonal-preview seasonal-preview-audio">
              <span className="seasonal-audio-label"><Music2 aria-hidden="true" size={15} /> Jingles</span>
              <div className="seasonal-audio-wave" aria-hidden="true">
                {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
              </div>
              <span className="seasonal-audio-caption">Persönlicher Song oder Jingle für Ihren Lieblingsmoment</span>
              <audio aria-label="Persönlichen Song oder Jingle abspielen" controls preload="metadata">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recording-00_08-EwnUnfEJYWHvA2WdNbv57q2zNqEeaY.mp3" type="audio/mpeg" />
                Ihr Browser unterstützt die Audiowiedergabe nicht.
              </audio>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function KIStudioShowcase() {
  const cardClass = "flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
  const inquiryClass = "ki-studio-inquiry mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"

  return (
    <section aria-labelledby="ki-studio-title" className="bg-slate-100/80 py-14 sm:py-20">
      <div className="page-wrap">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="eyebrow">KI-Studio · Schorndorf</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl" id="ki-studio-title">
            KI-Studio – Kreative Ideen, individuell umgesetzt.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Personalisierte Medienproduktion von Uwe Christian in Schorndorf.
          </p>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
          <article className={cardClass}>
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
              <Image
                alt="Beispiel eines individuell gestalteten KI-Porträts im Märchenwald"
                className="object-cover transition-transform duration-500 hover:scale-105"
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                src="/swea/ai-examples/elf-portrait.jpeg"
              />
              <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-emerald-900 shadow-sm">
                Ab 30 €
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-emerald-800"><ImageIcon aria-hidden="true" size={18} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Bild &amp; Design</span></div>
              <h3 className="text-xl font-semibold text-slate-900">KI-Bilder &amp; Porträts</h3>
              <p className="mb-6 mt-2 text-sm leading-6 text-slate-600">Personalisierte Porträts, Motive mit Familie oder Haustieren und individuelle Lieblingsbilder – abgestimmt auf Ihre Idee.</p>
              <a className={inquiryClass} href="mailto:edv@swea.de?subject=Kreativprojekt%3A%20KI-Bilder%20%26%20Portr%C3%A4ts" aria-label="Kreativprojekt anfragen: KI-Bilder und Porträts">
                Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
          </article>

          <article className={cardClass}>
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <video
                aria-label="Beispiel eines personalisierten KI-Videoclips"
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/swea/ai-examples/video-cf140fc6.mp4" type="video/mp4" />
                Ihr Browser unterstützt die Videowiedergabe nicht.
              </video>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-emerald-800"><Video aria-hidden="true" size={18} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Bewegtbild</span></div>
              <h3 className="text-xl font-semibold text-slate-900">KI-Videos</h3>
              <p className="mb-6 mt-2 text-sm leading-6 text-slate-600">Persönliche Videogrüße und kurze Clips, die besondere Momente, Ideen oder Ihre Marke in Szene setzen.</p>
              <a className={inquiryClass} href="mailto:edv@swea.de?subject=Kreativprojekt%3A%20KI-Videos" aria-label="Kreativprojekt anfragen: KI-Videos">
                Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
          </article>

          <article className={cardClass}>
            <div className="flex aspect-[16/10] flex-col justify-between bg-slate-900 p-5 text-white sm:p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-200"><Music2 aria-hidden="true" size={17} /> SWEA Audio Studio</span>
                <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-200">Hörprobe</span>
              </div>
              <div aria-hidden="true" className="flex h-12 items-center justify-center gap-1.5">
                {[18, 30, 22, 40, 27, 36, 16, 31, 44, 23, 34, 18, 39, 25, 15, 32, 21, 40, 27, 16, 34, 23, 38, 19].map((height, index) => (
                  <span className="w-1 rounded-full bg-emerald-300/80" key={index} style={{ height }} />
                ))}
              </div>
              <audio aria-label="KI-generierter Song als Hörprobe" className="w-full accent-emerald-400" controls preload="metadata">
                <source src="/swea/recording-03_13.mp3" type="audio/mpeg" />
                Ihr Browser unterstützt die Audiowiedergabe nicht.
              </audio>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-emerald-800"><Music2 aria-hidden="true" size={18} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Audio &amp; Musik</span></div>
              <h3 className="text-xl font-semibold text-slate-900">Individuelle Songs &amp; Jingles</h3>
              <p className="mb-6 mt-2 text-sm leading-6 text-slate-600">Persönliche Songs, kleine Jingles und Musikgeschenke – hören Sie in eine echte Hörprobe rein.</p>
              <a className={inquiryClass} href="mailto:edv@swea.de?subject=Kreativprojekt%3A%20Songs%20%26%20Jingles" aria-label="Kreativprojekt anfragen: Songs und Jingles">
                Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function HolidayGiftSection() {
  return (
    <section aria-labelledby="holiday-gift-title" className="holiday-gift-section" id="weihnachtsgeschenke">
      <div aria-hidden="true" className="holiday-snow" />
      <div className="page-wrap holiday-gift-content">
        <div className="holiday-gift-copy">
          <span className="holiday-gift-eyebrow">Persönlich gestaltet · mit weihnachtlichem Zauber</span>
          <span className="holiday-gift-eyebrow">KI-Bilder, Videos &amp; eigene Songs</span>
          <h2 id="holiday-gift-title">Das ultimative persönliche Weihnachtsgeschenk</h2>
          <p>Persönliche KI-Bilder und Videos mit Ihrer Idee und den Menschen, die Sie beschenken möchten – auf Wunsch auch als individuelles Lied.</p>
          <p>Als Geschenk, als Bild zum Aufhängen oder auf Tassen, Kissen und anderen individuellen Produkten. Ihre Vorstellungen besprechen wir gemeinsam.</p>
          <div className="holiday-gift-terms">
            <h3>Hinweise &amp; Voraussetzungen</h3>
            <ul>
              <li>Wir beginnen erst nach schriftlichem Auftrag und der Einwilligung der abgebildeten Person.</li>
              <li>Sexualisierte oder gewaltbeinhaltende Inhalte erstellen wir nicht. Wir prüfen jeden Auftrag individuell.</li>
              <li>Die Bezahlung erfolgt im Voraus. Für individuell angefertigte Produkte ist eine Erstattung ausgeschlossen.</li>
              <li>Sie erhalten eine Rechnung ohne ausgewiesene Mehrwertsteuer aufgrund der Kleinunternehmerregelung.</li>
              <li>Beispiele und angefertigte Motive unterliegen dem Urheberrecht; Nutzungsrechte werden individuell vereinbart.</li>
            </ul>
          </div>
        </div>

        <div aria-labelledby="holiday-examples-title" className="holiday-examples">
          <h3 id="holiday-examples-title">Beispiele:</h3>
          <div className="holiday-example-grid">
            <figure className="holiday-example-card">
              <Image alt="Illustration eines lächelnden Mannes als weihnachtlicher Elf im verschneiten Wald" height={1024} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_9fpkh09fpkh09fpk-u46EuM8FAmxDDJLVBAyrfhZ7DpMmQp.jpeg" width={768} />
              <figcaption>Ein persönliches Weihnachts-Elfenporträt</figcaption>
            </figure>
            <figure className="holiday-example-card">
              <Image alt="Grünes, zotteliges Wesen mit Weihnachtsmütze neben einem festlich geschmückten Weihnachtsbaum" height={1024} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_2e7ew72e7ew72e7e-5JvNidQs7Az5bmt39FO5wAn0wu9e5w.jpeg" width={768} />
              <figcaption>Ein augenzwinkerndes Weihnachtsmotiv</figcaption>
            </figure>
  <figure className="holiday-example-card">
  <Image alt="Weihnachtsmann legt Geschenke vor einem geschmückten Baum und Kamin ab" height={1024} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_2yjiwu2yjiwu2yji-qs4gsrL98qp5pHHERuqd4n8IcKQ1Bo.jpeg" width={768} />
  <figcaption>Ein festlicher Moment für die Bescherung</figcaption>
  </figure>
  <figure className="holiday-example-card">
  <Image alt="Wohnzimmer mit personalisiertem Weihnachtsmannmotiv auf Decke und Kissen, gerahmtem Bild und Tasse" height={1024} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_okqsgpokqsgpokqs-xLEInkCXyCv5HxEyRvcmhaUAvkY8Jk.jpeg" width={768} />
  <figcaption>Personalisierte Weihnachtsmotive auf Decke, Kissen und Tasse</figcaption>
  </figure>
  </div>
        </div>

        <div aria-labelledby="holiday-video-title" className="holiday-video">
          <h3 id="holiday-video-title">Beispielvideo</h3>
          <video aria-label="Beispielvideo mit weihnachtlichem Motiv" controls playsInline preload="metadata">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gemini_generated_video_77d5f778-sMKmnjJYAQSuujDbiD1O9RztT92LSZ.mp4" type="video/mp4" />
            Ihr Browser unterstützt die Videowiedergabe nicht.
          </video>
        </div>

        <section aria-labelledby="holiday-song-title" className="holiday-song">
          <h3 id="holiday-song-title">Oder darf es ein individuelles Lied sein?</h3>
          <div className="holiday-song-grid">
            <div className="holiday-song-left-column">
              <div className="holiday-song-panel">
                <h4>Der Uwe machts - Folk-Version</h4>
                <audio aria-label="Song Der Uwe machts - Folk-Version abspielen" controls preload="none">
                  <source src="/swea/recording-03_13.mp3" type="audio/mpeg" />
                  Ihr Browser unterstützt die Audiowiedergabe nicht.
                </audio>
              </div>
              <div className="holiday-song-panel">
                <h4>Der Uwe machts - Schlagerversion</h4>
                <audio aria-label="Song Der Uwe machts - Schlagerversion abspielen" controls preload="none">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Der%20Uwe%20machts%20SCHLAGER-cOeHT2pVFhOJl0tGyMux94SueVdG0R.mp3" type="audio/mpeg" />
                  Ihr Browser unterstützt die Audiowiedergabe nicht.
                </audio>
              </div>
              <div className="holiday-song-panel">
                <h4>Der Uwe machts - Hardrockversion</h4>
                <audio aria-label="Song Der Uwe machts - Hardrockversion abspielen" controls preload="none">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Der%20Uwe%20machts%20HARDROCK-1X0kBybCGXA9ixuaEXo4Fi9tJqLtqJ.mp3" type="audio/mpeg" />
                  Ihr Browser unterstützt die Audiowiedergabe nicht.
                </audio>
              </div>
              <article aria-labelledby="holiday-custom-song-title" className="holiday-song-panel holiday-custom-song">
                <h4 id="holiday-custom-song-title">Ihr individueller Lebens-Song</h4>
                <p>Von der Lieferung von Lebensstationen über die Erstellung des Songtextes bis hin zu Ihrem Wunsch, wie es klingen soll - ein komplett eigenes Lied für eine liebe Person. Oder zu jedem anderen Anlass.</p>
              </article>
            </div>
            <div className="holiday-song-panel holiday-lyrics-panel">
              <h4>Songtext</h4>
              <div className="holiday-lyrics-frame">
                <div aria-label="Songtext zu Der Uwe machts" className="holiday-song-lyrics" role="region" tabIndex={0}>
                  <pre>{uweSongLyrics}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <p className="holiday-gift-rights">Diese Beispiele sind Eigentum des Webseitenbetreibers und dürfen weder heruntergeladen noch per Hardcopy oder Foto oder auf anderen Wegen dupliziert oder verbreitet werden.</p>
      </div>
    </section>
  )
}

function AlternativeMotifsSection() {
  return (
    <section aria-label="Motive ohne weihnachtlichen Bezug" className="alternative-motifs-section">
      <div className="page-wrap alternative-motifs-content">
        <p>Selbstverständlich erstellen wir Motive auch ohne weihnachtlichen Bezug, zum Beispiel mit Ihren Liebsten, Ihrem Haustier, Ihrem Hobby oder einem anderen persönlichen Motiv.</p>
        <p>Es gelten die oben genannten Einschränkungen.</p>
      </div>
    </section>
  )
}

function ServicesSection() {
  const cardClass = "flex h-full scroll-mt-24 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
  const iconClass = "grid size-12 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-800"
  const actionClass = "mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-lg px-3 pt-6 text-sm font-semibold text-emerald-900 transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"

  return (
    <section aria-labelledby="edv-services-title" className="section section-services" id="dienstleistungen">
      <div className="page-wrap">
        <div className="mb-9 max-w-3xl">
          <span className="eyebrow">EDV-Hilfe für Zuhause · Schorndorf &amp; Umgebung</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl" id="edv-services-title">Technikhilfe für Zuhause – persönlich und verständlich</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Für Privatpersonen, Hausbesitzer und Haushalte in Schorndorf und Umgebung. Freundliche Unterstützung vor Ort oder per Fernzugriff – passend zu Ihrem Anliegen.</p>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-2">
          <article className={cardClass} id="computerhilfe">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><MonitorCog aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">PC &amp; Windows</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-900">Computerhilfe &amp; Windows-Probleme</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-600">Schnelle, geduldige Hilfe bei PC-Störungen, Windows-Fehlern und Installationen. Direkt bei Ihnen vor Ort oder, wenn es passt, per Fernzugriff.</p>
            <button aria-label="Computerproblem schildern" className={actionClass} data-page-nav="kontakt" data-target-id="kontakt" type="button">Problem schildern <ArrowRight aria-hidden="true" size={16} /></button>
          </article>

          <article className={cardClass} id="netzwerke">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><Wifi aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">WLAN im ganzen Haus</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-900">WLAN &amp; Heimnetzwerke</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-600">Router einrichten, Funklöcher schließen und Geräte zuverlässig verbinden. Vorhandene Leitungen und Kabel lassen sich oft clever weiternutzen – für eine starke Verbindung im ganzen Zuhause.</p>
            <button aria-label="WLAN- oder Netzwerkproblem schildern" className={actionClass} data-page-nav="kontakt" data-target-id="kontakt" type="button">Problem schildern <ArrowRight aria-hidden="true" size={16} /></button>
          </article>

          <article className={cardClass} id="datenrettung">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><HardDrive aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">Kostenlose Ersteinschätzung</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-900">Datenrettung</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-600">Verlorene Daten von Festplatten, USB-Sticks und Handys einschätzen lassen. Sie erfahren unverbindlich, welche nächsten Schritte für Ihr Gerät sinnvoll sind.</p>
            <button aria-label="Datenrettung anfragen" className={actionClass} data-page-nav="kontakt" data-target-id="kontakt" type="button">Ersteinschätzung anfragen <ArrowRight aria-hidden="true" size={16} /></button>
          </article>

          <article className={cardClass} id="smartphones-smart-home">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><Smartphone aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">Alltag &amp; Zuhause</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-900">Smartphones, Tablets &amp; Smart Home</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-600">Geduldige Unterstützung beim Einrichten, Verbinden und Bedienen Ihrer Geräte des täglichen Lebens – von Smartphone und Tablet bis zu Smart-Home-Geräten.</p>
            <button aria-label="Hilfe zu Smartphone, Tablet oder Smart Home anfragen" className={actionClass} data-page-nav="kontakt" data-target-id="kontakt" type="button">Hilfe anfragen <ArrowRight aria-hidden="true" size={16} /></button>
          </article>
        </div>

        <div className="mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-white sm:flex-row sm:items-center sm:px-8">
          <div>
            <h3 className="text-lg font-semibold">Sie brauchen Unterstützung bei Ihrer Technik?</h3>
            <p className="mt-1 text-sm leading-6 text-slate-300">Schildern Sie kurz Ihr Problem – wir besprechen gemeinsam den passenden nächsten Schritt.</p>
          </div>
          <button className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300" data-page-nav="kontakt" data-target-id="kontakt" type="button">Jetzt Hilfe anfordern <ArrowRight aria-hidden="true" size={17} /></button>
        </div>
      </div>
    </section>
  )
}

function EdvView() {
  return (
    <>
      <ServicesSection />
      <section className="page-wrap ki-crosslink" aria-labelledby="ki-crosslink-title">
        <div>
          <span className="eyebrow">KI-Studio &amp; Aktionen</span>
          <h2 id="ki-crosslink-title">Kreative Ideen für Menschen und Familien.</h2>
          <p>Persönliche KI-Bilder, Videos und Geschenke – individuell gestaltet und passend zu Ihrer Idee oder zum Anlass.</p>
        </div>
        <button className="button button-dark" data-page-nav="studio" type="button">Zum KI-Studio <ArrowRight aria-hidden="true" size={17} /></button>
      </section>
    </>
  )
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <div className="section-lead">{children}</div> : null}
    </div>
  )
}

function WellbeingSection() {
  return (
    <section className="section section-wellbeing" id="waldbaden">
      <div className="page-wrap grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-14">
        <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-emerald-950 shadow-xl md:aspect-[4/5]">
          <Image
            alt="Wald und Streuobstwiesen am Frauenberg in Schorndorf"
            className="object-cover"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/swea/waldbaden-frauenberg.jpg"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/5 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 text-white sm:p-6">
            <span className="flex items-center gap-2 text-sm font-semibold"><MapPin aria-hidden="true" size={16} /> Frauenberg · Schorndorf</span>
            <span className="text-xs leading-5 text-white/85">
              Foto: <a href="https://commons.wikimedia.org/wiki/File:Autumn_Frauenberg_Schorndorf_2014.jpg" rel="noreferrer" target="_blank">Maxim Beniashvili / Wikimedia Commons</a>
              {" · "}<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license noreferrer" target="_blank">CC BY-SA 4.0</a> · Web-Zuschnitt
            </span>
          </figcaption>
        </figure>

        <div className="rounded-[1.75rem] border border-emerald-950/10 bg-[#fffdf8] p-6 shadow-sm sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-900"><Leaf aria-hidden="true" size={14} /> Waldbaden &amp; Achtsamkeit</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">Mit Shinrin-Yoku im Wald ankommen.</h2>
          <p className="mt-4 text-base leading-7 text-stone-700">Shinrin-Yoku – das bewusste Eintauchen in die Atmosphäre des Waldes – lädt dazu ein, mit allen Sinnen langsamer zu werden. In achtsamen Übungen nehmen wir die Natur wahr und schaffen Raum für Ruhe, neue Klarheit und Abstand vom Alltag.</p>
          <p className="mt-3 text-sm leading-6 text-stone-600">Uwe Christian ist zertifizierter Kursleiter bei der Akademie für Waldbaden. Mit seiner Qualifikation in Outdoor-Erste-Hilfe ist er auf die besonderen Anforderungen geführter Angebote in der Natur vorbereitet.</p>

          <dl className="mt-6 divide-y divide-emerald-950/10 rounded-xl border border-emerald-950/10 bg-[#f4f2e9] px-4 sm:px-5" id="kursdetails">
            <div className="grid gap-1 py-3 sm:grid-cols-[100px_1fr] sm:gap-3"><dt className="text-sm font-semibold text-emerald-950">Gruppen</dt><dd className="text-sm leading-6 text-stone-700">Kleine Gruppen mit maximal 8 Personen</dd></div>
            <div className="grid gap-1 py-3 sm:grid-cols-[100px_1fr] sm:gap-3"><dt className="text-sm font-semibold text-emerald-950">Zielgruppe</dt><dd className="text-sm leading-6 text-stone-700">Für Einsteiger, Einzelpersonen sowie Freundes- und Familiengruppen</dd></div>
            <div className="grid gap-1 py-3 sm:grid-cols-[100px_1fr] sm:gap-3"><dt className="text-sm font-semibold text-emerald-950">Leitung</dt><dd className="text-sm leading-6 text-stone-700">Zertifizierter Kursleiter mit Outdoor-Erste-Hilfe</dd></div>
          </dl>

          <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2 sm:w-auto" data-page-nav="kontakt" data-target-id="kontakt" id="termine" type="button">
            Unverbindlichen Termin anfragen <ArrowRight aria-hidden="true" size={17} />
          </button>
        </div>
      </div>

      <div className="page-wrap wellbeing-grid">
        <article className="wellbeing-card">
          <span className="wellbeing-icon"><Heart aria-hidden="true" size={20} /></span>
          <h3>Stressbewältigung</h3>
          <p>Um im harten EDV-Alltag zu bestehen, ist es notwendig, aufkommenden Stress zu bewältigen. Durch diverse Übungen vermitteln wir Techniken, die sich im Alltag nutzen und integrieren lassen.</p>
        </article>
        <article className="wellbeing-card">
          <span className="wellbeing-icon"><Leaf aria-hidden="true" size={20} /></span>
          <h3>Waldbaden</h3>
          <p>Als zertifizierter Kursleiter für Waldbaden und Achtsamkeit in der Natur biete ich Termine für gemeinsames und erholsames Waldbaden an.</p>
        </article>
        <article className="wellbeing-card">
          <span className="wellbeing-icon"><ArrowDown aria-hidden="true" size={20} /></span>
          <h3>Entschleunigung</h3>
          <p>In der schnelllebigen Zeit der EDV biete ich Möglichkeiten, im Arbeitsalltag Entschleunigung zu erfahren und für den Arbeitsalltag zu konservieren.</p>
        </article>
        <article className="wellbeing-card">
          <span className="wellbeing-icon"><ShieldCheck aria-hidden="true" size={20} /></span>
          <h3>Achtsamkeit</h3>
          <p>Das eigene Ich als sein wichtigstes Werkzeug zu begreifen und zu ergreifen ist die zentrale Technik, um Problemen entgegenzutreten. Lernen Sie mit mir, dies zu schaffen.</p>
        </article>
      </div>

      <div className="page-wrap qualification-wrap">
        <div className="qualification-copy">
          <span className="eyebrow">Qualifikation &amp; Haltung</span>
          <h3>Mit Erfahrung und Verantwortung in der Natur.</h3>
          <p>Der Kursleiter, Herr Uwe Christian, ist zertifizierter Kursleiter für Waldbaden und Achtsamkeit. Die abgeschlossene Ausbildung wurde bei der Akademie für Waldbaden durchgeführt.</p>
          <p>Ergänzend wurde ein Erste-Hilfe-Kurs Outdoor bei den Johannitern absolviert und abgeschlossen. Dazu kommt praktische Erfahrung aus diversen selbst besuchten und abgehaltenen Kursen.</p>
          <p className="permission-note"><ShieldCheck aria-hidden="true" size={17} />Wir arbeiten ausschließlich an Orten, die uns vom Forst oder den Besitzern für den jeweiligen Termin gestattet wurden.</p>
        </div>
        <a className="academy-card" href="https://waldbaden-akademie.com/" rel="noreferrer" target="_blank">
          <Image alt="Ausgebildet durch die Deutsche Akademie für Waldbaden und Gesundheit" height={219} src="/swea/waldbaden-akademie.jpg" width={225} />
          <span>Ausgebildet durch die Akademie <ExternalLink aria-hidden="true" size={14} /></span>
        </a>
      </div>

      <div className="page-wrap offer-card">
        <div className="offer-mark"><Leaf aria-hidden="true" size={22} /></div>
        <div><span className="eyebrow">Angebote</span><h3>Ein wohltuender Impuls für Ihre Gruppe.</h3><p>Für private Freundes-, Familien- und kleine Gruppen – auf Wunsch auch online. Das Waldbaden passt als kurze aktive Pause, zum Tagesstart oder -abschluss oder als Halbtagesprogramm. Gemeinsam finden wir einen passenden Termin und einen ruhigen Ort in der Umgebung.</p></div>
        <button className="button button-dark" data-page-nav="kontakt" type="button">Anfrage per E-Mail <ArrowUpRight aria-hidden="true" size={16} /></button>
      </div>
    </section>
  )
}

function RemoteSection() {
  const options = [
    { name: "RustDesk", description: "Open-Source-Fernzugriff für Windows, macOS, Linux und mobile Geräte.", url: "https://rustdesk.com/download", label: "rustdesk.com/download" },
    { name: "TeamViewer", description: "Fernwartung und Remote-Support mit TeamViewer.", url: "https://www.teamviewer.com/de/download/windows/", label: "teamviewer.com" },
    { name: "Google Remote Desktop", description: "Unterstützung über den Google Chrome Remote Desktop.", url: "https://remotedesktop.google.com/support", label: "remotedesktop.google.com" },
  ]

  return (
    <section className="section section-remote" id="fernzugriff">
      <div className="page-wrap">
        <SectionIntro eyebrow="Fernzugriff" title="Hilfe, auch wenn wir nicht vor Ort sind.">
          Für die Unterstützung per Fernzugriff benötigen Sie gegebenenfalls eines der folgenden Programme. Bitte stimmen Sie den Einsatz vorab mit uns ab.
        </SectionIntro>
        <div className="remote-grid">
          {options.map((option) => (
            <a className="remote-card" href={option.url} key={option.name} rel="noreferrer" target="_blank">
              <h3>{option.name}</h3>
              <p>{option.description}</p>
              <span className="remote-link">{option.label} <ExternalLink aria-hidden="true" size={14} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="section section-contact" id="kontakt" aria-labelledby="contact-title">
      <div className="page-wrap grid items-start gap-8 md:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="flex flex-col gap-7">
          <div>
            <span className="inline-flex rounded-full border border-emerald-200/25 bg-emerald-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">Kontakt in Schorndorf</span>
            <h2 id="contact-title" className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">Lassen Sie uns ins Gespräch kommen.</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-emerald-50/75">Ob IT-Frage, Webprojekt oder Waldbaden – Sie erreichen Uwe Christian direkt.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a href="tel:+497181253148" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-emerald-100/10 text-emerald-100"><Phone aria-hidden="true" size={18} /></span>
              <span className="min-w-0"><span className="block text-xs text-emerald-100/70">Telefon</span><span className="block break-words text-sm font-semibold text-white">+49 7181 253148</span></span>
            </a>
            <a href="mailto:edv@swea.de" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-emerald-100/10 text-emerald-100"><Mail aria-hidden="true" size={18} /></span>
              <span className="min-w-0"><span className="block text-xs text-emerald-100/70">E-Mail</span><span className="block break-words text-sm font-semibold text-white">edv@swea.de</span></span>
            </a>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-emerald-100/10 bg-emerald-950/25 p-4 text-emerald-50/85">
            <Clock3 aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-200" size={18} />
            <div><p className="text-sm font-semibold text-white">Erreichbarkeit</p><p className="mt-1 text-sm leading-6">Nach Vereinbarung. Wenn Sie uns telefonisch nicht erreichen, hinterlassen Sie gern eine Nachricht – wir rufen zurück.</p></div>
          </div>

          <div className="flex items-start gap-3 border-l-2 border-emerald-200/65 pl-4 text-sm leading-6 text-emerald-50/80">
            <MapPin aria-hidden="true" className="mt-1 shrink-0 text-emerald-200" size={18} />
            <p>Direkter Kontakt zu Uwe Christian – ohne anonyme Hotline und unnötige Umwege in Schorndorf.</p>
          </div>
        </div>

        <form
          className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl shadow-black/10 sm:p-8"
          onSubmit={(event) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const name = String(formData.get("name"))
            const email = String(formData.get("email"))
            const interest = String(formData.get("interest"))
            const message = String(formData.get("message"))
            const recipient = interest === "Waldbaden" ? "wb@swea.de" : "edv@swea.de"
            const subject = encodeURIComponent(`SWEA-Anfrage: ${interest}`)
            const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\nBereich: ${interest}\n\n${message}`)
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
          }}
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">Schreiben Sie uns</span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Was können wir für Sie tun?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Wählen Sie ein Thema und schildern Sie kurz Ihr Anliegen.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-800">
              <span>Name</span>
              <input className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20" name="name" type="text" autoComplete="name" placeholder="Ihr Name" required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-800">
              <span>E-Mail</span>
              <input className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20" name="email" type="email" autoComplete="email" placeholder="name@beispiel.de" required />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-slate-800">
            <span>Bereich</span>
            <select className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20" name="interest" defaultValue="" required>
              <option value="" disabled>Bitte wählen</option>
              <option value="IT-Service">IT-Service</option>
              <option value="Webdesign">Webdesign</option>
              <option value="KI-Studio">KI-Studio</option>
              <option value="Waldbaden">Waldbaden</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-800">
            <span>Nachricht</span>
            <textarea className="min-h-32 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20" name="message" placeholder="Worum geht es?" maxLength={5000} required />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-slate-500">Beim Absenden öffnet sich Ihr E-Mail-Programm mit den Angaben.</p>
            <button className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-800 px-5 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2" type="submit">Nachricht senden <ArrowRight aria-hidden="true" size={16} /></button>
          </div>
        </form>
      </div>
    </section>
  )
}

function LegalSection() {
  return (
    <section className="legal-section page-wrap" id="impressum">
      <div className="legal-heading"><span className="eyebrow">Rechtliches</span><h2>Impressum</h2></div>
      <div className="legal-grid">
        <div className="legal-details">
          <h3>Angaben gemäß § 5 DDG</h3>
          <p>Uwe Christian<br />Freiburgstr. 12<br />73614 Schorndorf</p>
          <div className="legal-contact-line"><span>Telefon</span><div><a href="tel:+497181253148">+49 7181 253148</a></div></div>
          <div className="legal-contact-line"><span>Telefax</span><div><a href="tel:+497181253151">+49 7181 253151</a></div></div>
          <div className="legal-contact-line"><span>E-Mail</span><div><a href="mailto:edv@swea.de">edv@swea.de</a></div></div>
          <div className="legal-contact-line"><span>Internet</span><a href="https://www.swea.de/">www.swea.de</a></div>
          <p><strong>Vertretungsberechtigter:</strong> Uwe Christian</p>
          <p><strong>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:</strong> Uwe Christian</p>
        </div>
        <div className="legal-notes">
          <h3>Haftungshinweis</h3>
          <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
          <h3>Umsatzsteuer</h3>
          <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br /><strong>DE352438907</strong></p>
          <h3>Bildnachweise</h3>
          <p>Urheber und Bildquelle: Uwe Christian. Alle Bilder stehen unter Copyright: Uwe Christian.</p>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const cardClass = "scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"

  return (
    <section aria-labelledby="about-title" className="section bg-[#f8f7f2]" id="ueber-swea">
      <div className="page-wrap">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Über SWEA · Schorndorf</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl" id="about-title">Persönlich beraten. Verständlich begleiten.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">SWEA verbindet persönlichen IT-Service mit kreativen digitalen Angeboten und achtsamer Zeit in der Natur.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className={cardClass} id="about-person">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">Person</span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">Uwe Christian</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Ihr direkter Ansprechpartner in Schorndorf – vom ersten Gespräch bis zur passenden Unterstützung.</p>
          </article>
          <article className={cardClass} id="about-arbeitsweise">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">Arbeitsweise</span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">Klar, persönlich, lösungsorientiert</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Erst verstehen, dann verständlich erklären und gemeinsam praktikable nächste Schritte finden.</p>
          </article>
          <article className={cardClass} id="about-erfahrung">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">Erfahrung</span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">Technik und Natur im Blick</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Von Computerhilfe, Netzwerken und Webprojekten bis zum zertifizierten Waldbaden mit Outdoor-Erste-Hilfe.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-wrap grid gap-8 border-b border-stone-300 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:grid-cols-[minmax(180px,.85fr)_minmax(0,2fr)_minmax(180px,.85fr)]">
        <div>
          <button aria-label="SWEA – zur Startseite" className="brand brand-button footer-brand" data-page-nav="start" data-target-id="start" type="button">
            <span className="brand-mark"><Image alt="" fill sizes="34px" src={antonIconSrc} /></span>
            <span className="brand-copy"><strong>SWEA</strong><span aria-hidden="true" className="brand-divider">|</span><small>Uwe Christian · Schorndorf</small></span>
          </button>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">Persönlicher IT-Service und Achtsamkeit in der Natur.</p>
        </div>
        <nav aria-label="Fußnavigation" className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3">
          {navigation.map((item) => (
            <div key={item.page}>
              <button className="mb-2 text-left text-sm font-semibold text-emerald-950 transition hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700" data-page-nav={item.page} data-target-id={item.targetId} type="button">
                {item.label}
              </button>
              {item.children ? (
                <ul className="grid list-none gap-1.5 p-0">
                  {item.children.map((child) => (
                    <li key={child.targetId}>
                      <button className="text-left text-xs leading-5 text-slate-600 transition hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700" data-page-nav={child.page} data-target-id={child.targetId} type="button">{child.label}</button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </nav>
        <address className="flex flex-col items-start gap-2 not-italic text-sm text-slate-600">
          <span className="eyebrow">Direktkontakt</span>
          <a className="font-medium text-emerald-900 hover:text-emerald-700" href="mailto:edv@swea.de">edv@swea.de</a>
          <a className="font-medium text-emerald-900 hover:text-emerald-700" href="mailto:wb@swea.de">wb@swea.de</a>
          <a className="font-medium text-emerald-900 hover:text-emerald-700" href="tel:+497181253148">07181 / 253148</a>
          <span>Freiburgstr. 12 · 73614 Schorndorf</span>
        </address>
      </div>
      <div className="page-wrap footer-bottom">
        <span>© 2026 Uwe Christian · www.swea.de</span>
        <button className="text-xs font-semibold text-emerald-900 transition hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700" data-page-nav="kontakt" data-target-id="impressum" type="button">Impressum</button>
      </div>
    </footer>
  )
}

export function SweaSite() {
  return (
    <SiteInteractions>
      <Header />
      <main id="main-content">
        <div className="site-page-view" data-page-view="start"><HomeView /></div>
        <div className="site-page-view" data-page-view="edv" hidden><EdvView /></div>
        <div className="site-page-view" data-page-view="studio" hidden><KIStudioShowcase /><HolidayGiftSection /><AlternativeMotifsSection /><AIExamplesCarousel /></div>
        <div className="site-page-view" data-page-view="waldbaden" hidden><WellbeingSection /></div>
        <div className="site-page-view" data-page-view="about" hidden><AboutSection /></div>
        <div className="site-page-view" data-page-view="kontakt" hidden><RemoteSection /><ContactSection /><LegalSection /></div>
      </main>
      <Footer />
    </SiteInteractions>
  )
}
