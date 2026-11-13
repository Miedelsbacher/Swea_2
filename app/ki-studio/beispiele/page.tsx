import type { Metadata } from "next"
import { KIStudioExamplesPageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "Beispiele aus dem KI-Studio – Bilder, Videos & Hörproben",
  description:
    "Beispiele aus dem SWEA KI-Studio in Schorndorf: digitale Bilder, Videos, Song-Hörproben, Jingle und vollständiger Songtext.",
  alternates: { canonical: "/ki-studio/beispiele" },
}

export default function KIStudioBeispielePage() {
  return <KIStudioExamplesPageContent />
}
