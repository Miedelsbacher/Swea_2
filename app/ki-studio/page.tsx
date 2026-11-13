import type { Metadata } from "next"
import { KIStudioPageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "KI-Studio in Schorndorf – digitale Bilder, Videos & Songs",
  description:
    "Individuelle digitale Bilder und Grafiken, Videos, Songs und Jingles aus dem SWEA KI-Studio in Schorndorf. Umfang und Gestaltung werden individuell abgestimmt, die Ergebnisse digital übergeben.",
  alternates: { canonical: "/ki-studio" },
}

export default function KIStudioPage() {
  return <KIStudioPageContent />
}
