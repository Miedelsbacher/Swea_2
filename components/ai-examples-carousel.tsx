"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const examples = [
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_a2d15da5-A1LgawnFkKpW61Ww6j1g789nyYkPfH.jpg",
    alt: "Aufwendig verziertes Reiterhof-Wappen mit Pferden, Löwen und grünen sowie goldenen Logo-Varianten auf dunklem Holz",
    caption: "Logo- und Markenvarianten für einen Reiterhof",
  },
  {
    type: "video",
    src: "/swea/ai-examples/video-cf140fc6.mp4",
    alt: "Video mit bunt bedruckten, verpackten Mitgebseln und der Aufschrift Happy 59 Uwe",
    caption: "Personalisierte Mitgebsel zum Geburtstag",
  },
  {
    type: "image",
    src: "/swea/ai-examples/elf-portrait.jpeg",
    alt: "Porträt einer Elfe mit Flügeln in einem sonnigen, blühenden Wald",
    caption: "Elfenporträt im Märchenwald",
  },
  {
    type: "image",
    src: "/swea/ai-examples/fairy-dance-solo.jpg",
    alt: "Tanzende Fee in einem magischen, blau beleuchteten Wald",
    caption: "Eine Fee im Lichterwald",
  },
  {
    type: "image",
    src: "/swea/ai-examples/fairy-raised-arms.jpg",
    alt: "Fee mit goldenen Flügeln und erhobenen Armen in einem verwunschenen Wald",
    caption: "Tanz der Elfe im Zauberwald",
  },
  {
    type: "image",
    src: "/swea/ai-examples/fairy-dance-group.jpg",
    alt: "Gruppe von Feen, die in einem leuchtenden Wald miteinander tanzen",
    caption: "Tanzende Feen im Zauberwald",
  },
  {
    type: "image",
    src: "/swea/ai-examples/fairy-dark-dragon.jpg",
    alt: "Fee in einem Wald neben einem großen dunklen Drachen",
    caption: "Fee und Drache im Wald",
  },
  {
    type: "image",
    src: "/swea/ai-examples/fairy-ice-dragon.jpeg",
    alt: "Fantasy-Szene mit einer Fee und einem eisblauen Drachen im Wald",
    caption: "Fee und Eisdrache",
  },
  {
    type: "image",
    src: "/swea/ai-examples/fairy-ice-dragon-green.jpg",
    alt: "Fee vor einem großen grünen Drachen in einem verwunschenen Wald",
    caption: "Fee und grüner Drache",
  },
  {
    type: "video",
    src: "/swea/ai-examples/video-aad466b5.mp4",
    alt: "Animation einer Fee, die einem großen Eisdrache im Wald begegnet",
    caption: "Animation: Fee und Eisdrache",
  },
  {
    type: "image",
    src: "/swea/ai-examples/forest-castle.jpg",
    alt: "Geheimnisvolle Burg in einem dunklen Wald unter dem Mond",
    caption: "Eine Burg im Zauberwald",
  },
  {
    type: "image",
    src: "/swea/ai-examples/hourglass-dragon.jpg",
    alt: "Magische Sanduhr in einer nächtlichen Landschaft mit einem Drachen",
    caption: "Drachen und magische Sanduhr",
  },
  {
    type: "image",
    src: "/swea/ai-examples/knight-hourglass.jpg",
    alt: "Ritter mit Schwert neben einer magischen Sanduhr in einer Fantasy-Landschaft",
    caption: "Ritter am Tor der Zeit",
  },
  {
    type: "video",
    src: "/swea/ai-examples/video-d74304dd.mp4",
    alt: "Video mit einem Hirsch in einem herbstlichen Wald",
    caption: "Ein Hirsch im Herbstwald",
  },
  {
    type: "image",
    src: "/swea/ai-examples/lion-construction.jpg",
    alt: "Humorvolles Savannenmotiv mit einem Löwen, einem Maulwurf mit Schutzhelm und einem Vogel",
    caption: "Der König auf der Baustelle",
  },
  {
    type: "image",
    src: "/swea/ai-examples/lion-bird.jpg",
    alt: "Ruhender Löwe in der Savanne mit einem kleinen Vogel",
    caption: "Ein ruhiger Moment in der Savanne",
  },
  {
    type: "image",
    src: "/swea/ai-examples/boule-evening.jpeg",
    alt: "Boulebahn in der Abenddämmerung mit Kugeln und bunten Markierungen",
    caption: "Ein Bouleplatz im Abendlicht",
  },
]

export function AIExamplesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeExample = examples[activeIndex]

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + examples.length) % examples.length)
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % examples.length)
  }

  return (
    <section aria-labelledby="ai-examples-carousel-title" aria-roledescription="Karussell" className="ai-examples-carousel-section">
      <div className="page-wrap ai-examples-carousel-content">
        <h2 className="ai-examples-carousel-title" id="ai-examples-carousel-title">
          Weitere Beispiele für Logos, KI-Kunst, Videos und was wir sonst noch so machen
        </h2>

        <div className="ai-examples-carousel-frame">
          <figure aria-label={`Medium ${activeIndex + 1} von ${examples.length}`} className="ai-examples-carousel-card">
            <div className="ai-examples-carousel-media">
              {activeExample.type === "video" ? (
                <video
                  aria-label={activeExample.alt}
                  className="ai-examples-carousel-video"
                  controls
                  key={activeExample.src}
                  playsInline
                  preload="metadata"
                >
                  <source src={activeExample.src} type="video/mp4" />
                  Dein Browser unterstützt dieses Video nicht.
                </video>
              ) : (
                <Image
                  alt={activeExample.alt}
                  fill
                  sizes="(max-width: 700px) 88vw, 850px"
                  unoptimized
                  src={activeExample.src}
                />
              )}
            </div>
            <figcaption>{activeExample.caption}</figcaption>
          </figure>

          <button aria-label="Vorheriges Beispiel" className="ai-examples-carousel-arrow is-previous" onClick={showPrevious} type="button">
            <ChevronLeft aria-hidden="true" size={22} />
          </button>
          <button aria-label="Nächstes Beispiel" className="ai-examples-carousel-arrow is-next" onClick={showNext} type="button">
            <ChevronRight aria-hidden="true" size={22} />
          </button>
        </div>

        <div aria-label="Medium auswählen" className="ai-examples-carousel-pagination" role="group">
          {examples.map((example, index) => (
            <button
              aria-current={activeIndex === index ? "true" : undefined}
              aria-label={`Medium ${index + 1}: ${example.caption}`}
              className="ai-examples-carousel-dot"
              key={example.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <p className="ai-examples-carousel-status" role="status">Medium {activeIndex + 1} von {examples.length}</p>
      </div>
    </section>
  )
}
