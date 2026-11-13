"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { CarouselExample } from "@/components/ai-examples-data"

export function AIExamplesCarousel({ examples, title }: { examples: CarouselExample[]; title: string }) {
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
        <h4 className="ai-examples-carousel-title" id="ai-examples-carousel-title">
          {title}
        </h4>

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
                  preload="none"
                  poster={activeExample.poster}
                >
                  <source src={activeExample.src} type="video/mp4" />
                  Dein Browser unterstützt dieses Video nicht.
                </video>
              ) : (
                <Image
                  alt={activeExample.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 700px) 88vw, 850px"
                  unoptimized
                  src={activeExample.src}
                />
              )}
            </div>
            <figcaption>{activeExample.caption}</figcaption>
          </figure>

          <button aria-label="Vorheriges Beispiel" className="ai-examples-carousel-arrow is-previous" onClick={showPrevious} type="button" title="Vorheriges Beispiel">
            <ChevronLeft aria-hidden="true" size={22} />
          </button>
          <button aria-label="Nächstes Beispiel" className="ai-examples-carousel-arrow is-next" onClick={showNext} type="button" title="Nächstes Beispiel">
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
