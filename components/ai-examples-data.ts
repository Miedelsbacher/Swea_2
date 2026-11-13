export type ImageExample = { type: "image"; src: string; alt: string; caption: string }
export type VideoExample = { type: "video"; src: string; poster: string; alt: string; caption: string }
export type CarouselExample = ImageExample | VideoExample

const allExamples: CarouselExample[] = [
  {
    type: "image",
    src: "/swea/ai-examples/ki-studio-image-dragon.jpg",
    alt: "Digitales Bild einer Fee in einem geheimnisvollen Wald neben einem großen grünen Drachen",
    caption: "Fee und grüner Drache im Wald",
  },
  {
    type: "image",
    src: "/swea/medien/ki-carousel-image.jpg",
    alt: "Aufwendig verziertes Reiterhof-Wappen mit Pferden, Löwen und grünen sowie goldenen Logo-Varianten auf dunklem Holz",
    caption: "Logo- und Markenvarianten für einen Reiterhof",
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
    type: "video",
    src: "/swea/ai-examples/video-aad466b5.mp4",
    poster: "/swea/ai-examples/ki-medium-10-ice-dragon.webp",
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
    poster: "/swea/ai-examples/ki-medium-14-deer.webp",
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

export const aiExampleImages = allExamples.filter((example): example is ImageExample => example.type === "image")
export const aiExampleVideos = allExamples.filter((example): example is VideoExample => example.type === "video")
