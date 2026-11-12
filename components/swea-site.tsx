"use client"

import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  HardDrive,
  Heart,
  Image as ImageIcon,
  Music2,
  Video,
  Leaf,
  MapPin,
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

type PageId = "start" | "edv" | "studio" | "waldbaden" | "kontakt"

const navigation: { id: PageId; label: string; badge?: string }[] = [
  { id: "start", label: "Startseite" },
  { id: "edv", label: "EDV & IT-Service" },
  { id: "studio", label: "KI-Studio", badge: "Aktion" },
  { id: "waldbaden", label: "Waldbaden" },
  { id: "kontakt", label: "Fernzugriff & Kontakt" },
]

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

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button aria-label="SWEA – zur Startseite" className="brand brand-button" data-page-nav="start" type="button">
          <span className="brand-mark"><Image alt="" fill priority sizes="39px" src={antonIconSrc} /></span>
          <span className="brand-copy">
            <strong>SWEA</strong>
            <span aria-hidden="true" className="brand-divider">|</span>
            <small>Uwe Christian · Schorndorf</small>
          </span>
        </button>
        <button aria-expanded="false" aria-label="Menü öffnen" className="mobile-menu-toggle" data-menu-toggle type="button">
          <Menu aria-hidden="true" data-menu-icon="open" size={22} />
          <X aria-hidden="true" data-menu-icon="close" size={22} />
        </button>
        <nav aria-label="Hauptnavigation" className="main-nav">
          {navigation.map((item) => (
            <button aria-current={item.id === "start" ? "page" : undefined} className={item.id === "start" ? "is-active" : ""} data-page-nav={item.id} key={item.id} type="button">
              <span>{item.label}</span>
              {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
            </button>
          ))}
        </nav>
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
            Persönliche IT-Unterstützung für Zuhause und Unternehmen – und neue Kraft durch Achtsamkeit in der Natur.
          </p>
          <div className="hero-actions">
            <button className="button button-light" data-page-nav="edv" type="button">IT-Leistungen entdecken <ArrowRight aria-hidden="true" size={17} /></button>
            <button className="button button-outline-light" data-page-nav="waldbaden" type="button">Waldbaden genießen</button>
          </div>
          <div className="hero-proof"><MapPin aria-hidden="true" size={16} /> Persönlich für Sie da in Schorndorf und Umgebung</div>
        </div>
        <div className="hero-visual" aria-label="Die zwei Bereiche von SWEA">
          <button aria-label="EDV-Service ansehen" className="hero-image-card hero-image-it" data-page-nav="edv" type="button">
            <div className="image-card-caption"><span>Technik</span><ArrowUpRight aria-hidden="true" size={16} /></div>
            <Image alt="Uwe Christian – EDV-Dienstleistungen" src="/swea/edv-large.png" width={1024} height={680} priority />
          </button>
          <button aria-label="Waldbaden ansehen" className="hero-image-card hero-image-nature" data-page-nav="waldbaden" type="button">
            <div className="image-card-caption"><span>Achtsamkeit</span><ArrowUpRight aria-hidden="true" size={16} /></div>
            <Image alt="Uwe Christian – EDV-Erholung und Achtsamkeit" src="/swea/waldbaden-large.png" width={1024} height={680} />
          </button>
          <div className="hero-note"><Leaf aria-hidden="true" size={17} /><span>Digital gut aufgestellt.<br />Im Alltag wieder durchatmen.</span></div>
        </div>
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
                Hinter jedem beeindruckenden Bild, Video oder individuellen Song steckt moderne generative KI – präzise gesteuert mit unserem IT-Know-how. Ob als einzigartiges Weihnachtsgeschenk mit dem Gesicht Ihrer Liebsten, als persönlicher Song oder als kreatives Motiv für Ihr Unternehmen: Wir zeigen, was heute digital möglich ist.
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
                Auch für Firmenlogos &amp; ganzjährige Anlässe <ArrowUpRight aria-hidden="true" size={15} />
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
              <span className="seasonal-audio-caption">Ein Jingle für Ihren Webauftritt oder für Ihre Firma</span>
              <audio aria-label="Jingle für Ihren Webauftritt oder Ihre Firma abspielen" controls preload="metadata">
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
        <p>Selbstverständlich erstellen wir Motive auch ohne weihnachtlichen Bezug, zum Beispiel mit Ihren Liebsten, einem Firmenlogo oder anderen Motiven.</p>
        <p>Es gelten die oben genannten Einschränkungen.</p>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="section section-services" id="dienstleistungen">
      <div className="page-wrap">
        <SectionIntro eyebrow="EDV-Dienstleistungen" title="IT, die für Sie arbeitet.">
          EDV-Service, IT-Support und Computerhilfe in Schorndorf, Miedelsbach und Umgebung. Wir unterstützen Privatpersonen und Unternehmen bei Computerproblemen, Netzwerk- und WLAN-Einrichtung, Hardware-Kaufberatung, mobilen Endgeräten und Datensicherung.
        </SectionIntro>

        <div className="service-grid">
          <article className="service-card service-card-featured">
            <div className="service-card-top"><span className="service-icon"><Router aria-hidden="true" size={21} /></span></div>
            <h3>Infrastrukturprojekte</h3>
            <p>Verbindungsprobleme im Haus? Kein Empfang im WLAN? Wir haben viel Erfahrung damit, auf bestehenden Leitungen wie Satelliten- oder Telefonleitungen aufzusetzen und darüber Netzwerke bis in den Gigabit-Bereich zu ermöglichen.</p>
            <p>Wir kennen WLAN-Geräte, Router und Access Points verschiedener Hersteller, um das vorhandene Netz zu ergänzen, zu verstärken oder zu ersetzen.</p>
            <div className="service-detail"><Wifi aria-hidden="true" size={16} /><span>WLAN, Haus- und Garten-Automatisierung sowie WLAN-fähige Schalter und Messgeräte – wir beraten Sie gerne.</span></div>
          </article>

          <article className="service-card">
            <div className="service-card-top"><span className="service-icon"><MonitorCog aria-hidden="true" size={21} /></span></div>
            <h3>EDV-Service</h3>
            <p>Hilfe vor Ort oder per Fernzugriff – verständlich und persönlich.</p>
            <ul className="check-list">
              <li><Check aria-hidden="true" size={16} />Probleme mit Windows und Windows-Software lösen</li>
              <li><Check aria-hidden="true" size={16} />Beratung beim Neukauf</li>
              <li><Check aria-hidden="true" size={16} />Unterstützung bei mobilen Endgeräten</li>
              <li><Check aria-hidden="true" size={16} />Cloud-Datensicherung und Datensicherheit</li>
              <li><Check aria-hidden="true" size={16} />Hilfe bei Datenverlust oder Datenträgerausfall</li>
            </ul>
          </article>

          <article className="service-card service-card-wide">
            <div className="service-card-top"><span className="service-icon"><Code2 aria-hidden="true" size={21} /></span></div>
            <h3>Webseitenerstellung &amp; Webdesign</h3>
            <p>Rundum-Service von der Beratung zum Provider über Domain-Namensgebung und Reservierung bis zur E-Mail-Anbindung und zur Erstellung responsiver HTML-Webseiten für Browser, Tablet und Handy.</p>
            <p>Als Tool zur Erstellung setzen wir auf flexible KI-Lösungen für Webseitengenerierung, Änderungen, Erstellung von Elementen wie Bilder und Filme, selbstverständlich auf Basis Ihrer Vorgaben und Daten.</p>
            <p>Standardmäßig entstehen Seiten ohne PHP-Basis, die somit üblicherweise sehr sicher gegen Angriffe aus dem Internet sind.</p>
            <p>Externe Tools wie Buchungsportale lassen sich bei Bedarf einbinden. Übliche Dinge wie Bilder-Diashows, Eventlistings und Onlineshops sind machbar.</p>
            <p>Sprechen Sie uns auf die Möglichkeiten an. Wir beraten umfassend auf Basis unserer jahrzehntelangen Erfahrung.</p>
            <div className="projects-block">
              <span className="eyebrow">Webseiten-Referenzprojekte</span>
              <div className="project-links">
                <a href="https://burg-waldenstein.de/" rel="noopener noreferrer" target="_blank">Hotel Garni &amp; Events Burg Waldenstein <ExternalLink aria-hidden="true" size={13} /></a>
                <a href="https://mrvermietung.com/" rel="noopener noreferrer" target="_blank">MR-Vermietung, Rudersberg <ExternalLink aria-hidden="true" size={13} /></a>
                <a href="https://pferdefahrpraxis.de/" rel="noopener noreferrer" target="_blank">Pferdefahrpraxis Altdorf <ExternalLink aria-hidden="true" size={13} /></a>
                <a href="https://www.miedelsbach.de" rel="noopener noreferrer" target="_blank">Miedelsbach, Ortsteil von Schorndorf <ExternalLink aria-hidden="true" size={13} /></a>
              </div>
            </div>
          </article>

          <article className="service-card">
            <div className="service-card-top"><span className="service-icon"><Smartphone aria-hidden="true" size={21} /></span></div>
            <h3>Individualprogrammierung</h3>
            <p>Passende kleine Lösungen für Ihre Arbeitsabläufe.</p>
            <ul className="check-list">
              <li><Check aria-hidden="true" size={16} />Access-Anwendungen, zum Beispiel LexWare-Daten per REST-API in Access importieren und für die weitere Bearbeitung bereitstellen</li>
              <li><Check aria-hidden="true" size={16} />Word- und Excel-Makros</li>
            </ul>
          </article>

          <article className="service-card recovery-card">
            <div className="service-card-top"><span className="service-icon"><HardDrive aria-hidden="true" size={21} /></span></div>
            <h3>Datenrettung &amp; Wiederherstellung</h3>
            <p>Erstanalyse und möglicherweise Soforthilfe direkt über uns – etwa mit einer Softwarelösung. Wenn weitere Unterstützung nötig ist, bieten wir gemeinsam mit einem der weltweit führenden Partner die Analyse von Datenträgern aller Art: von SD-Karten und Handys bis zu RAID-Systemen.</p>
            <ul className="check-list compact-list">
              <li><Check aria-hidden="true" size={16} />Kostenloser, unverbindlicher Diagnoseservice</li>
              <li><Check aria-hidden="true" size={16} />Übersicht der rekonstruierbaren Daten und Diagnosebericht vor Ihrer Entscheidung</li>
              <li><Check aria-hidden="true" size={16} />Erfolgsquote des Partners: bis zu 90%</li>
              <li><Check aria-hidden="true" size={16} />Faire Preise, auch für Privatpersonen; Analyse gratis</li>
              <li><Check aria-hidden="true" size={16} />Staffelpreise je nach Datenträger-Art und Dringlichkeit</li>
            </ul>
            <div className="partner-inline">
              <span>Als Partnerunternehmen können wir günstige Preise an Sie weitergeben.</span>
              <a aria-label="DatenPhoenix Website öffnen" href="http://www.datenphoenix.de/" rel="noreferrer" target="_blank">
                <Image alt="DatenPhoenix – Partner für Datenrettung" height={50} src="/swea/datenphoenix.svg" width={142} />
                <ExternalLink aria-hidden="true" size={14} />
              </a>
            </div>
          </article>
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
          <h2 id="ki-crosslink-title">Bilder und Videos mit Ihrer persönlichen Idee.</h2>
          <p>Individuelle KI-Produktion für Firmenlogos, Geschenke und saisonale Aktionen – nach Ihren Vorgaben gestaltet.</p>
        </div>
        <button className="button button-dark" data-page-nav="studio" type="button">Zum KI-Studio <ArrowRight aria-hidden="true" size={17} /></button>
      </section>
    </>
  )
}

function WellbeingSection() {
  return (
    <section className="section section-wellbeing" id="waldbaden">
      <div className="wellbeing-top page-wrap">
        <SectionIntro eyebrow="EDV-Erholung" title="Weniger Tempo. Mehr bei sich.">
          Im anspruchsvollen EDV-Alltag braucht es Momente zum Innehalten. Mit Achtsamkeit und Waldbaden entstehen neue Wege, Stress zu bewältigen und Entschleunigung in den Alltag mitzunehmen.
        </SectionIntro>
        <div className="appointment-note"><span className="appointment-dot" /><div><strong>Waldbaden-Termine</strong><p>Nächster Termin auf Anfrage – auch individuelle Buchungen und Kleingruppen bis 8 Personen, etwa für Geburtstage oder Teambuilding.</p></div></div>
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
        <div><span className="eyebrow">Angebote</span><h3>Ein guter Impuls für Ihr Team.</h3><p>Für Firmenevents wie Teambuilding oder Mitarbeiterschulungen – auf Wunsch auch online. Geeignet als kurzer Programmpunkt als aktive Pause, zum Tagesstart oder -abschluss. Oder auch als Halbtagesprogramm. Unser Angebot passt für kleinere Gruppen direkt im Wald oder als Vortrag für größere Belegschaften. Zögern Sie nicht – wir finden eine Lösung.</p></div>
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
    <section className="section section-contact" id="kontakt">
      <div className="page-wrap contact-layout">
        <div className="contact-intro">
          <span className="eyebrow eyebrow-light">Kontakt</span>
          <h2>Am besten direkt per E-Mail.</h2>
          <p>Bitte nehmen Sie am besten per Mail Kontakt auf. Wählen Sie den passenden Bereich – wir melden uns bei Ihnen.</p>
          <div className="contact-address"><MapPin aria-hidden="true" size={17} /><span>Freiburgstr. 12<br />73614 Schorndorf</span></div>
        </div>
        <div className="contact-options">
          <article className="contact-card">
            <span className="contact-card-icon"><MonitorCog aria-hidden="true" size={19} /></span>
            <span className="eyebrow">EDV-Dienstleistungen</span>
            <div className="contact-method"><a href="mailto:edv@swea.de">edv@swea.de</a></div>
          </article>
          <article className="contact-card">
            <span className="contact-card-icon contact-card-icon-leaf"><Leaf aria-hidden="true" size={19} /></span>
            <span className="eyebrow">EDV-Erholung &amp; Waldbaden</span>
            <div className="contact-method"><a href="mailto:wb@swea.de">wb@swea.de</a></div>
          </article>
          <div className="contact-phone-note"><Phone aria-hidden="true" size={17} /><p>Telefonisch erreichen Sie uns gegebenenfalls über den Anrufbeantworter. Wir rufen zurück. Die Kontaktdaten finden Sie im Impressum.</p><a href="#impressum">Zum Impressum <ArrowRight aria-hidden="true" size={14} /></a></div>
        </div>
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-main">
        <div className="footer-profile">
          <button aria-label="SWEA – zur Startseite" className="brand brand-button footer-brand" data-page-nav="start" type="button">
            <span className="brand-mark"><Image alt="" fill sizes="34px" src={antonIconSrc} /></span>
            <span className="brand-copy"><strong>SWEA</strong><span aria-hidden="true" className="brand-divider">|</span><small>Uwe Christian · Schorndorf</small></span>
          </button>
          <p>Persönlicher IT-Service und Achtsamkeit in der Natur.</p>
        </div>
        <nav aria-label="Fußnavigation" className="footer-links">
          {navigation.map((item) => (
            <button data-page-nav={item.id} key={item.id} type="button">{item.label}</button>
          ))}
          <button data-page-nav="kontakt" data-target-id="impressum" type="button">Impressum</button>
        </nav>
        <div className="footer-contact">
          <span className="eyebrow">Direktkontakt</span>
          <a href="mailto:edv@swea.de">edv@swea.de</a>
          <a href="mailto:wb@swea.de">wb@swea.de</a>
          <a href="tel:+497181253148">07181 / 253148</a>
          <span>Freiburgstr. 12 · 73614 Schorndorf</span>
        </div>
      </div>
      <div className="page-wrap footer-bottom"><span>© 2026 Uwe Christian · www.swea.de</span></div>
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
        <div className="site-page-view" data-page-view="studio" hidden><HolidayGiftSection /><AlternativeMotifsSection /><AIExamplesCarousel /></div>
        <div className="site-page-view" data-page-view="waldbaden" hidden><WellbeingSection /></div>
        <div className="site-page-view" data-page-view="kontakt" hidden><RemoteSection /><ContactSection /><LegalSection /></div>
      </main>
      <Footer />
    </SiteInteractions>
  )
}
