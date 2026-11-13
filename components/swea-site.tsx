import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
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
  MonitorCog,
  Phone,
  Router,
  ShieldCheck,
  Smartphone,
  Wifi,
} from "lucide-react"
import { AIExamplesCarousel } from "@/components/ai-examples-carousel"
import { ContactInquiryForm } from "@/components/contact-inquiry-form"
import { WaldbadenPage } from "@/components/waldbaden-page"

function Hero() {
  return (
    <section className="hero" id="start">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-inner page-wrap">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light"><span className="status-dot" /> EDV-Service &amp; Waldbaden · Schorndorf</span>
          <h1>SWEA –<br />Technik, die hilft.<br /><em>Ruhe, die bleibt.</em></h1>
          <p className="hero-description">
            Persönliche Technikhilfe für Zuhause – von PC- und WLAN-Problemen bis zu Datenrettung, Smartphones und Smart Home. Vor Ort in Schorndorf und Umgebung oder per Fernzugriff; dazu Waldbaden zum Auftanken.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/kontakt">IT-Problem schildern <ArrowRight aria-hidden="true" size={17} /></Link>
            <Link className="button button-outline-light" href="/waldbaden">Waldbaden entdecken</Link>
          </div>
          <div className="hero-proof"><MapPin aria-hidden="true" size={16} /> Persönlich für Sie da in Schorndorf und Umgebung</div>
        </div>
        <figure className="hero-visual">
          <div className="hero-portrait-frame">
            <Image alt="Uwe Christian, persönlicher IT-Serviceanbieter in Schorndorf" src="/swea/uwe-christian-home.png" fill priority sizes="(max-width: 700px) 100vw, 46vw" />
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
      <Link className="quick-link brand-area brand-area-technik" data-nav-link href="/it-service">
        <span className="quick-link-icon"><MonitorCog aria-hidden="true" size={21} /></span>
        <span><strong>IT-Service:</strong><small>Technik, die den Alltag leichter macht</small></span>
        <ArrowUpRight aria-hidden="true" className="quick-arrow" size={18} />
      </Link>
      <Link className="quick-link brand-area brand-area-natur" data-nav-link href="/waldbaden">
        <span className="quick-link-icon quick-link-nature"><Leaf aria-hidden="true" size={21} /></span>
        <span><strong>Waldbaden:</strong><small>Achtsamkeit in der Natur</small></span>
        <ArrowUpRight aria-hidden="true" className="quick-arrow" size={18} />
      </Link>
      <Link className="quick-link brand-area brand-area-ki" data-nav-link href="/ki-studio">
        <span className="quick-link-icon quick-link-creative"><ImageIcon aria-hidden="true" size={21} /></span>
        <span><strong>KI-Studio:</strong><small>Bilder, Videos und persönliche Songs</small></span>
        <ArrowUpRight aria-hidden="true" className="quick-arrow" size={18} />
      </Link>
    </section>
  )
}

export function HomePageContent() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <section aria-labelledby="seasonal-action-title" className="seasonal-action-wrap page-wrap">
        <div className="seasonal-action-card brand-area brand-area-ki">
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
              <Link className="button button-action" data-nav-link href="/ki-studio">
                Beispiele &amp; Weihnachtsaktion entdecken <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link className="seasonal-action-secondary" data-nav-link href="/ki-studio">
                Lieblingsmotive &amp; persönliche Anlässe <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
          <div className="seasonal-action-collage" aria-label="Vorschau zu KI-Bild, Video und Song">
            <figure className="seasonal-preview seasonal-preview-portrait">
              <picture>
                <Image alt="Uwe Christian in seinem Büro am Schreibtisch" fill loading="lazy" sizes="(max-width: 900px) 48vw, 22vw" src="/swea/uwe-christian-home.png" />
              </picture>
              <figcaption>Persönliches KI-Porträt</figcaption>
            </figure>
            <figure className="seasonal-preview seasonal-preview-video">
              <video aria-label="Persönlicher Video-Gruß" controls playsInline preload="none" poster="/swea/video-gruss-poster.webp" src="/swea/video-gruss.mp4" />
              <figcaption>Video-Gruß</figcaption>
            </figure>
            <div className="seasonal-preview seasonal-preview-audio">
              <span className="seasonal-audio-label"><Music2 aria-hidden="true" size={15} /> Jingles</span>
              <div className="seasonal-audio-wave" aria-hidden="true">
                {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
              </div>
              <span className="seasonal-audio-caption">Persönlicher Song oder Jingle für Ihren Lieblingsmoment</span>
              <audio aria-label="Persönlichen Song oder Jingle abspielen" controls preload="none">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recording-00_08-EwnUnfEJYWHvA2WdNbv57q2zNqEeaY.mp3" type="audio/mpeg" />
                Ihr Browser unterstützt die Audiowiedergabe nicht.
              </audio>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
    </>
  )
}

function KIStudioShowcase() {
  const cardClass = "flex h-full flex-col overflow-hidden rounded-2xl border border-area-border bg-area-surface shadow-sm transition-shadow hover:shadow-lg"
  const inquiryClass = "ki-studio-inquiry mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-area-deep px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-area-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2"

  return (
    <section aria-labelledby="ki-studio-title" className="bg-area-soft py-14 sm:py-20">
      <div className="page-wrap">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="eyebrow">KI-Studio · Schorndorf</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="ki-studio-title">
            KI-Studio – Kreative Ideen, individuell umgesetzt.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-area-muted">
            Personalisierte Medienproduktion von Uwe Christian in Schorndorf.
          </p>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
          <article className={cardClass}>
            <div className="relative aspect-[16/10] overflow-hidden bg-area-subtle">
              <Image
                alt="Fee in einem geheimnisvollen Wald neben einem großen grünen Drachen"
                className="object-cover transition-transform duration-500 hover:scale-105"
                fill
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 33vw"
                src="/swea/ai-examples/ki-studio-image-dragon.jpg"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-area-primary"><ImageIcon aria-hidden="true" size={18} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Bild &amp; Design</span></div>
              <h3 className="h-14 text-xl font-semibold leading-7 text-area-deep">KI-Bilder &amp; Porträts</h3>
              <p className="mt-2 h-5 text-sm font-semibold text-area-primary">ab 9€</p>
              <p className="mb-6 mt-2 text-sm leading-6 text-area-muted">Personalisierte Porträts, Motive mit Familie oder Haustieren und individuelle Lieblingsbilder – abgestimmt auf Ihre Idee.</p>
              <Link className={inquiryClass} href="/kontakt" aria-label="Kreativprojekt anfragen: KI-Bilder und Porträts">
                Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </article>

          <article className={cardClass}>
            <div className="relative aspect-[16/10] overflow-hidden bg-area-deep">
              <video
                aria-label="Beispiel eines personalisierten KI-Videoclips"
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="none"
                poster="/swea/ai-examples/ki-studio-video-poster-happy-59.png"
              >
                <source src="/swea/ai-examples/video-cf140fc6.mp4" type="video/mp4" />
                Ihr Browser unterstützt die Videowiedergabe nicht.
              </video>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-area-primary"><Video aria-hidden="true" size={18} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Bewegtbild</span></div>
              <h3 className="h-14 text-xl font-semibold leading-7 text-area-deep">KI-Videos</h3>
              <p className="mt-2 h-5 text-sm font-semibold text-area-primary">ab 15€</p>
              <p className="mb-6 mt-2 text-sm leading-6 text-area-muted">Persönliche Videogrüße und kurze Clips, die besondere Momente, Ideen oder Ihre Marke in Szene setzen.</p>
              <Link className={inquiryClass} href="/kontakt" aria-label="Kreativprojekt anfragen: KI-Videos">
                Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </article>

          <article className={cardClass}>
            <div className="flex aspect-[16/10] flex-col justify-between bg-area-deep p-5 text-white sm:p-6">
              <div className="flex items-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80"><Music2 aria-hidden="true" size={17} /> SWEA Audio Studio</span>
              </div>
              <div aria-hidden="true" className="flex h-12 items-center justify-center gap-1.5">
                {[18, 30, 22, 40, 27, 36, 16, 31, 44, 23, 34, 18, 39, 25, 15, 32, 21, 40, 27, 16, 34, 23, 38, 19].map((height, index) => (
                  <span className="w-1 rounded-full bg-area-accent-light/80" key={index} style={{ height }} />
                ))}
              </div>
              <audio aria-label="KI-generierter Jingle als Hörprobe" className="w-full accent-area-accent" controls preload="none">
                <source src="/swea/ai-examples/ki-studio-jingle.mp3" type="audio/mpeg" />
                Ihr Browser unterstützt die Audiowiedergabe nicht.
              </audio>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-area-primary"><Music2 aria-hidden="true" size={18} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Audio &amp; Musik</span></div>
              <h3 className="h-14 text-xl font-semibold leading-7 text-area-deep">Individuelle Songs &amp; Jingles</h3>
              <p className="mt-2 h-5 text-sm font-semibold text-area-primary">ab 20€</p>
              <p className="mb-6 mt-2 text-sm leading-6 text-area-muted">Persönliche Songs, kleine Jingles und Musikgeschenke – hören Sie in eine echte Hörprobe rein.</p>
              <Link className={inquiryClass} href="/kontakt" aria-label="Kreativprojekt anfragen: Songs und Jingles">
                Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function KIStudioClosingCTA() {
  return (
    <section aria-labelledby="ki-closing-title" className="page-wrap ki-crosslink brand-area brand-area-ki">
      <div>
        <span className="eyebrow">Ihr nächster Schritt</span>
        <h2 id="ki-closing-title">Sie haben eine Idee für ein persönliches Kreativprojekt?</h2>
        <p>Schildern Sie kurz Ihren Anlass – Uwe Christian bespricht mit Ihnen, was sich daraus gestalten lässt.</p>
      </div>
      <Link className="button button-dark min-h-12" href="/kontakt">
        Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={17} />
      </Link>
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
              <Image alt="Illustration eines lächelnden Mannes als weihnachtlicher Elf im verschneiten Wald" height={1024} loading="lazy" sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_9fpkh09fpkh09fpk-u46EuM8FAmxDDJLVBAyrfhZ7DpMmQp.jpeg" width={768} />
              <figcaption>Ein persönliches Weihnachts-Elfenporträt</figcaption>
            </figure>
            <figure className="holiday-example-card">
              <Image alt="Grünes, zotteliges Wesen mit Weihnachtsmütze neben einem festlich geschmückten Weihnachtsbaum" height={1024} loading="lazy" sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_2e7ew72e7ew72e7e-5JvNidQs7Az5bmt39FO5wAn0wu9e5w.jpeg" width={768} />
              <figcaption>Ein augenzwinkerndes Weihnachtsmotiv</figcaption>
            </figure>
  <figure className="holiday-example-card">
  <Image alt="Weihnachtsmann legt Geschenke vor einem geschmückten Baum und Kamin ab" height={1024} loading="lazy" sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_2yjiwu2yjiwu2yji-qs4gsrL98qp5pHHERuqd4n8IcKQ1Bo.jpeg" width={768} />
  <figcaption>Ein festlicher Moment für die Bescherung</figcaption>
  </figure>
  <figure className="holiday-example-card">
  <Image alt="Wohnzimmer mit personalisiertem Weihnachtsmannmotiv auf Decke und Kissen, gerahmtem Bild und Tasse" height={1024} loading="lazy" sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_okqsgpokqsgpokqs-xLEInkCXyCv5HxEyRvcmhaUAvkY8Jk.jpeg" width={768} />
  <figcaption>Personalisierte Weihnachtsmotive auf Decke, Kissen und Tasse</figcaption>
  </figure>
  </div>
        </div>

        <div aria-labelledby="holiday-video-title" className="holiday-video">
          <h3 id="holiday-video-title">Beispielvideo</h3>
          <video aria-label="Beispielvideo mit weihnachtlichem Motiv" controls playsInline preload="none" poster="/swea/ai-examples/ki-studio-example-video-poster.webp">
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
  const cardClass = "flex h-full scroll-mt-24 flex-col rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
  const iconClass = "grid size-12 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary"
  const actionClass = "mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-area-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2"

  return (
    <section aria-labelledby="edv-services-title" className="section section-services" id="dienstleistungen">
      <div className="page-wrap">
        <div className="mb-9 max-w-3xl">
          <span className="eyebrow">EDV-Hilfe für Zuhause · Schorndorf &amp; Umgebung</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="edv-services-title">Technikhilfe für Zuhause – persönlich und verständlich</h1>
          <p className="mt-4 text-base leading-7 text-area-muted">Für Privatpersonen, Hausbesitzer und Haushalte in Schorndorf und Umgebung. Freundliche Unterstützung vor Ort oder per Fernzugriff – passend zu Ihrem Anliegen.</p>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-2">
          <article className={cardClass} id="computerhilfe">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><MonitorCog aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">PC &amp; Windows</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Computerhilfe &amp; Windows-Probleme</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Schnelle, geduldige Hilfe bei PC-Störungen, Windows-Fehlern und Installationen. Direkt bei Ihnen vor Ort oder, wenn es passt, per Fernzugriff.</p>
            <Link aria-label="Computerproblem schildern" className={actionClass} data-nav-link href="/kontakt">IT-Problem schildern <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>

          <article className={cardClass} id="netzwerke">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><Wifi aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">WLAN im ganzen Haus</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">WLAN &amp; Heimnetzwerke</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Router einrichten, Funklöcher schließen und Geräte zuverlässig verbinden. Je nach Verkabelung lassen sich vorhandene Telefon- oder Koaxialleitungen – etwa Sat-Leitungen – mit geeigneten Adaptern fürs Heimnetz nutzen.</p>
            <Link aria-label="WLAN- oder Netzwerkproblem schildern" className={actionClass} data-nav-link href="/kontakt">WLAN-Problem schildern <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>

          <article className={cardClass} id="datenrettung-karte">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><HardDrive aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Kostenlose Ersteinschätzung</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Datenrettung</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Verlorene Daten von Festplatten, USB-Sticks und Handys einschätzen lassen. Sie erfahren unverbindlich, welche nächsten Schritte für Ihr Gerät sinnvoll sind.</p>
            <Link aria-label="Datenrettung anfragen" className={actionClass} data-nav-link href="/kontakt">Ersteinschätzung anfragen <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>

          <article className={cardClass} id="smartphones-smart-home">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><Smartphone aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Alltag &amp; Zuhause</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Smartphones, Tablets &amp; Smart Home</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Geduldige Unterstützung beim Einrichten, Verbinden und Bedienen Ihrer Geräte des täglichen Lebens – von Smartphone und Tablet bis zu Smart-Home-Geräten.</p>
            <Link aria-label="Hilfe zu Smartphone, Tablet oder Smart Home anfragen" className={actionClass} data-nav-link href="/kontakt">Hilfe anfragen <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>

          <article className={cardClass} id="hardwarehilfe">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><HardDrive aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Geräte &amp; Komponenten</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Hardware-Hilfe</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Unterstützung bei passenden Ersatzteilen, Anschluss und Einrichtung von Geräten sowie der Einschätzung, ob sich eine Reparatur lohnt.</p>
            <Link aria-label="Hilfe bei Hardware anfragen" className={actionClass} data-nav-link href="/kontakt">Hardware-Hilfe anfragen <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>
        </div>

        <div className="mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl bg-area-deep px-6 py-5 text-white sm:flex-row sm:items-center sm:px-8">
          <div>
            <h3 className="text-lg font-semibold">Sie brauchen Unterstützung bei Ihrer Technik?</h3>
            <p className="mt-1 text-sm leading-6 text-white/80">Schildern Sie kurz Ihr Problem – wir besprechen gemeinsam den passenden nächsten Schritt.</p>
          </div>
          <Link className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-area-accent px-5 py-2.5 text-sm font-semibold text-area-accent-foreground transition-colors hover:bg-area-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-area-accent" data-nav-link href="/kontakt">Jetzt Hilfe anfordern <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

function DataRecoverySection() {
  const steps = [
    {
      title: "Datenträger ausschalten und nicht weiter nutzen",
      description: "Bei einem defekten Gerät möglichst sofort die Stromzufuhr trennen, sofern das sicher möglich ist.",
    },
    {
      title: "Keine Reparaturversuche starten",
      description: "Vermeiden Sie weitere Startversuche, Rettungssoftware und das Öffnen des Geräts.",
    },
    {
      title: "Unverändert lassen und Kontakt aufnehmen",
      description: "Beschreiben Sie kurz, was passiert ist. Gemeinsam klären wir den nächsten sinnvollen Schritt.",
    },
  ]

  return (
    <section aria-labelledby="datenrettung-title" className="section bg-area-soft" id="datenrettung">
      <div className="page-wrap grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start lg:gap-12">
        <div className="max-w-2xl">
          <span className="eyebrow">Datenrettung</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="datenrettung-title">
            Professionelle Datenrettung – Wenn es brenzlig wird.
          </h2>
          <p className="mt-4 text-base leading-7 text-area-muted">
            Bei unterstützten Datenträgern und geeigneten Schadensbildern können unsere spezialisierten Partner Erfolgsquoten von bis zu 90 % erreichen. Das beschreibt die Möglichkeiten unserer Partner in passenden Fällen – es ist keine Garantie für den Erfolg beim einzelnen Gerät. Die tatsächliche Erfolgsaussicht klärt die Diagnose.
          </p>
          <p className="mt-3 text-sm leading-6 text-area-muted">
            Ob Festplatte, USB-Stick oder Handy: Sie erhalten eine klare Einschätzung, bevor Sie über weitere Schritte entscheiden.
          </p>
        </div>

        <aside aria-labelledby="datenrettung-warning-title" className="rounded-3xl border border-warning-border bg-warning-soft p-5 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-warning-subtle text-warning-foreground">
              <HardDrive aria-hidden="true" size={21} />
            </span>
            <div>
              <h3 className="text-lg font-semibold leading-snug text-area-deep sm:text-xl" id="datenrettung-warning-title">
                Datenträger defekt? Erst einmal nichts weiter ausprobieren.
              </h3>
              <p className="mt-2 text-sm leading-6 text-area-muted">
                Weitere Startversuche, Reparaturprogramme oder das Öffnen des Geräts können den Schaden verschlimmern. Lassen Sie den Datenträger möglichst unverändert.
              </p>
            </div>
          </div>

          <h4 className="mt-6 text-sm font-semibold text-area-deep">Erste Hilfe bei Datenverlust</h4>
          <ol aria-label="Erste Hilfe bei Datenverlust in drei Schritten" className="mt-3 grid gap-3">
            {steps.map((step, index) => (
              <li className="flex gap-3 rounded-xl border border-warning-border bg-area-surface p-4" key={step.title}>
                <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-warning-subtle text-sm font-bold text-warning-deep">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-area-deep">{step.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-area-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-5 text-sm leading-6 text-area-muted">Wenn eine Laborprüfung nötig ist, erhalten Sie vor einer kostenpflichtigen Rettung ein individuelles Kostenangebot des spezialisierten Partners. Erst nach Ihrer Zustimmung wird weitergearbeitet.</p>

          <Link className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-area-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2" data-nav-link href="/kontakt">
            Datenträger prüfen lassen <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </aside>
      </div>
    </section>
  )
}

function WebsiteDesignSection() {
  const benefits = [
    {
      icon: Check,
      title: "Alles aus einer Hand",
      description: "Von der Idee bis zum Start: Domain, E-Mail, Gestaltung und Umsetzung passend zu Ihrem Vorhaben.",
    },
    {
      icon: Smartphone,
      title: "Mobilfreundlich",
      description: "Ihre Website passt sich Smartphone, Tablet und Computer an – klar lesbar und einfach zu bedienen.",
    },
    {
      icon: ShieldCheck,
      title: "Zuverlässig & sicher",
      description: "Sorgfältige Einrichtung und verständliche Pflege helfen, Ihre Website zuverlässig und sicher zu halten.",
    },
    {
      icon: Heart,
      title: "Persönlich betreut",
      description: "Uwe Christian ist Ihr direkter Ansprechpartner – von der ersten Idee bis zu Fragen nach dem Start.",
    },
  ]

  return (
    <section aria-labelledby="webseiten-webdesign-title" className="section bg-area-soft/60" id="webseiten-webdesign">
      <div className="page-wrap grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="max-w-2xl">
          <span className="eyebrow">Webseiten &amp; Webdesign</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="webseiten-webdesign-title">
            Ihre Website. Persönlich geplant und professionell umgesetzt.
          </h2>
          <p className="mt-4 text-base leading-7 text-area-muted">
            Von der ersten Idee über Domain, E-Mail und Gestaltung bis zur fertigen Website – und langfristige Betreuung.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-area-muted">
            Alles aus einer Hand: Uwe Christian begleitet Sie persönlich durch jeden Schritt. Sie behalten einen festen Ansprechpartner und müssen sich nicht mit technischen Details beschäftigen.
          </p>
          <Link className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-area-primary px-5 text-sm font-semibold text-white transition hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2" data-nav-link href="/kontakt">
            Website-Projekt besprechen <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="flex h-full gap-3 rounded-2xl border border-area-border bg-area-surface p-4 shadow-sm sm:p-5" key={title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary">
                <Icon aria-hidden="true" size={20} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-area-deep">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-area-muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function EdvView() {
  return (
    <>
      <ServicesSection />
      <DataRecoverySection />
      <WebsiteDesignSection />
      <RemoteSection />
      <section className="page-wrap ki-crosslink brand-area brand-area-ki" aria-labelledby="ki-crosslink-title">
        <div>
          <span className="eyebrow">KI-Studio &amp; Aktionen</span>
          <h2 id="ki-crosslink-title">Kreative Ideen für Menschen und Familien.</h2>
          <p>Persönliche KI-Bilder, Videos und Geschenke – individuell gestaltet und passend zu Ihrer Idee oder zum Anlass.</p>
        </div>
        <Link className="button button-dark" data-nav-link href="/ki-studio">Zum KI-Studio <ArrowRight aria-hidden="true" size={17} /></Link>
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

function RemoteSection() {
  const options = [
    { name: "RustDesk", description: "Fernzugriff für Windows, macOS, Linux und mobile Geräte.", url: "https://rustdesk.com/download", label: "rustdesk.com/download" },
    { name: "TeamViewer", description: "Fernwartung und Unterstützung mit TeamViewer.", url: "https://www.teamviewer.com/de/download/windows/", label: "teamviewer.com" },
    { name: "Google Remote Desktop", description: "Unterstützung über den Google Chrome Remote Desktop.", url: "https://remotedesktop.google.com/support", label: "remotedesktop.google.com" },
  ]
  const steps = [
    { title: "Vorher abstimmen", description: "Wir vereinbaren zuerst, ob Fernzugriff für Ihr Anliegen sinnvoll ist und welches Programm Sie verwenden." },
    { title: "Sitzung selbst freigeben", description: "Sie öffnen das vereinbarte Programm und teilen den einmaligen Sitzungscode erst, wenn Sie bereit sind." },
    { title: "Alles im Blick behalten", description: "Sie bleiben am Computer, sehen alle Schritte und können die Verbindung jederzeit beenden." },
  ]

  return (
    <section aria-labelledby="remote-access-title" className="section section-remote" id="fernzugriff">
      <div className="page-wrap">
        <div className="mb-8 max-w-3xl">
          <span className="eyebrow">IT-Support · Ihre Sicherheit</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="remote-access-title">Sicherheit &amp; Fernzugriff</h2>
          <p className="mt-4 text-base leading-7 text-area-muted">Wenn Hilfe aus der Ferne sinnvoll ist, stimmen wir den Ablauf vorher gemeinsam ab. Sie öffnen das vereinbarte Programm und entscheiden selbst, wann eine Sitzung beginnt und endet.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-start">
          <aside aria-labelledby="remote-steps-title" className="rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary"><ShieldCheck aria-hidden="true" size={20} /></span>
              <h3 className="pt-1 text-lg font-semibold text-area-deep" id="remote-steps-title">So läuft eine Fernsitzung ab</h3>
            </div>
            <ol className="mt-5 grid gap-4">
              {steps.map((step, index) => (
                <li className="flex gap-3" key={step.title}>
                  <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-area-subtle text-sm font-bold text-area-deep">{index + 1}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-area-deep">{step.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-area-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-area-border bg-area-soft p-4 text-area-deep" role="note">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-area-subtle text-area-primary"><ShieldCheck aria-hidden="true" size={18} /></span>
              <div>
                <p className="text-sm font-semibold leading-6">Fernzugriffe (TeamViewer/RustDesk) erfolgen ausschließlich nach vorheriger telefonischer Absprache und Ihrer ausdrücklichen Zustimmung.</p>
                <p className="mt-1 text-xs leading-5 text-area-muted">Sie behalten während der gesamten Sitzung die Kontrolle und können die Verbindung jederzeit beenden.</p>
              </div>
            </div>
          </aside>

          <div>
            <h3 className="text-lg font-semibold text-area-deep">Mögliche Fernzugriff-Programme</h3>
            <p className="mt-2 text-sm leading-6 text-area-muted">Nutzen Sie nur das Programm, das wir vorher gemeinsam vereinbart haben. Laden Sie es selbst über die jeweilige Originalseite herunter.</p>
            <div className="mt-4 grid gap-3">
              {options.map((option) => (
                <a className="group flex flex-col rounded-xl border border-area-border bg-area-surface p-4 transition hover:border-area-accent hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary" href={option.url} key={option.name} rel="noopener noreferrer" target="_blank">
                  <h4 className="text-sm font-semibold text-area-deep">{option.name}</h4>
                  <p className="mt-1 text-sm leading-6 text-area-muted">{option.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-area-primary">{option.label} <ExternalLink aria-hidden="true" size={14} /></span>
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-area-muted">Beenden Sie die Sitzung nach der Unterstützung. Dauerhafte Zugänge werden nicht ohne Ihre ausdrückliche Absprache eingerichtet.</p>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl bg-area-deep px-5 py-5 text-white sm:flex-row sm:items-center sm:px-7">
          <div>
            <h3 className="text-lg font-semibold">Sie brauchen Hilfe mit Ihrem Computer oder Netzwerk?</h3>
            <p className="mt-1 text-sm leading-6 text-white/80">Schildern Sie Ihr IT-Problem direkt – gemeinsam finden wir den passenden nächsten Schritt.</p>
          </div>
          <Link className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-area-accent px-5 py-3 text-sm font-semibold text-area-accent-foreground transition-colors hover:bg-area-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-area-accent sm:w-auto" data-nav-link href="/kontakt">
            IT-Problem schildern <ArrowRight aria-hidden="true" size={17} />
          </Link>
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
            <span className="inline-flex rounded-full border border-area-border/25 bg-area-subtle/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">Kontakt in Schorndorf</span>
            <h1 id="contact-title" className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">Lassen Sie uns ins Gespräch kommen.</h1>
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/75">Ob IT-Frage, Webprojekt oder Waldbaden – Sie erreichen Uwe Christian direkt.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a href="tel:+497181253147" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-area-surface/[0.06] p-4 transition hover:bg-area-surface/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-accent">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-area-subtle/10 text-white/80"><Phone aria-hidden="true" size={18} /></span>
              <span className="min-w-0"><span className="block text-xs text-white/70">Telefon</span><span className="block break-words text-sm font-semibold text-white">+49 7181 253147</span></span>
            </a>
            <a href="mailto:edv@swea.de" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-area-surface/[0.06] p-4 transition hover:bg-area-surface/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-accent">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-area-subtle/10 text-white/80"><Mail aria-hidden="true" size={18} /></span>
              <span className="min-w-0"><span className="block text-xs text-white/70">E-Mail</span><span className="block break-words text-sm font-semibold text-white">edv@swea.de</span></span>
            </a>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-area-border/10 bg-area-deep/25 p-4 text-white/85">
            <Clock3 aria-hidden="true" className="mt-0.5 shrink-0 text-area-accent-light" size={18} />
            <div><p className="text-sm font-semibold text-white">Erreichbarkeit</p><p className="mt-1 text-sm leading-6">Nach Vereinbarung. Wenn Sie uns telefonisch nicht erreichen, hinterlassen Sie gern eine Nachricht – wir rufen zurück.</p></div>
          </div>

          <div className="flex items-start gap-3 border-l-2 border-area-border/65 pl-4 text-sm leading-6 text-white/80">
            <MapPin aria-hidden="true" className="mt-1 shrink-0 text-area-accent-light" size={18} />
            <p>Direkter Kontakt zu Uwe Christian – ohne anonyme Hotline und unnötige Umwege in Schorndorf.</p>
          </div>
        </div>

        <ContactInquiryForm />
      </div>
    </section>
  )
}

function AboutSection() {
  const cardClass = "scroll-mt-24 rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6"

  return (
    <section aria-labelledby="about-title" className="section bg-area-soft" id="ueber-swea">
      <div className="page-wrap">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <span className="eyebrow">Über SWEA · Schorndorf</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="about-title">Persönlich beraten. Verständlich begleiten.</h2>
          <p className="mt-4 text-base leading-7 text-area-muted">SWEA verbindet persönlichen IT-Service mit kreativen digitalen Angeboten und achtsamer Zeit in der Natur.</p>
        </div>

        <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-6">
          <figure className="about-profile relative min-h-[22rem] overflow-hidden rounded-2xl bg-area-deep shadow-sm sm:min-h-[28rem]">
            <Image
              alt="Uwe Christian in seinem Büro in Schorndorf"
              className="object-cover object-[center_31%]"
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              src="/swea/uwe-christian-home.png"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-area-deep/85 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 text-white sm:p-6">
              <strong className="text-lg font-semibold">Uwe Christian</strong>
              <span className="text-sm text-white/85">Ihr persönlicher Ansprechpartner in Schorndorf</span>
            </figcaption>
          </figure>

          <div className="about-card grid min-w-0 gap-4 sm:grid-cols-2">
            <article className={cardClass} id="about-person">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Person</span>
              <h3 className="mt-3 text-lg font-semibold text-area-deep">Uwe Christian</h3>
              <p className="mt-2 text-sm leading-6 text-area-muted">Ihr direkter Ansprechpartner in Schorndorf – vom ersten Gespräch bis zur passenden Unterstützung.</p>
            </article>
            <article className={cardClass} id="about-arbeitsweise">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Arbeitsweise</span>
              <h3 className="mt-3 text-lg font-semibold text-area-deep">Klar, persönlich, lösungsorientiert</h3>
              <p className="mt-2 text-sm leading-6 text-area-muted">Erst verstehen, dann verständlich erklären und gemeinsam praktikable nächste Schritte finden.</p>
            </article>
            <article className={`${cardClass} sm:col-span-2`} id="about-erfahrung">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Erfahrung</span>
              <h3 className="mt-3 text-lg font-semibold text-area-deep">Technik und Natur im Blick</h3>
              <p className="mt-2 text-sm leading-6 text-area-muted">Von Computerhilfe, Netzwerken und Webprojekten bis zum zertifizierten Waldbaden mit Outdoor-Erste-Hilfe.</p>
            </article>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-area-deep px-5 py-5 text-white sm:flex-row sm:items-center sm:px-7">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-area-accent-light">Direkt mit Uwe sprechen</span>
            <h3 className="mt-1 text-lg font-semibold">Was können wir für Sie tun?</h3>
            <p className="mt-1 text-sm leading-6 text-white/80">Beschreiben Sie Ihr Anliegen – wir finden gemeinsam den passenden nächsten Schritt.</p>
          </div>
          <Link className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-area-accent px-5 py-3 text-sm font-semibold text-area-accent-foreground transition-colors hover:bg-area-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-area-accent sm:w-auto" data-nav-link href="/kontakt">
            Kontakt aufnehmen <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}


export function ITServicePageContent() {
  return (
    <div className="brand-area brand-area-technik">
      <EdvView />
    </div>
  )
}

export function WaldbadenPageContent() {
  return (
    <div className="brand-area brand-area-natur">
      <WaldbadenPage />
    </div>
  )
}

export function KIStudioPageContent() {
  return (
    <div className="brand-area brand-area-ki">
      <KIStudioShowcase />
      <HolidayGiftSection />
      <AlternativeMotifsSection />
      <AIExamplesCarousel />
      <KIStudioClosingCTA />
    </div>
  )
}

export function ContactPageContent() {
  return (
    <div className="brand-area brand-area-base">
      <ContactSection />
    </div>
  )
}
