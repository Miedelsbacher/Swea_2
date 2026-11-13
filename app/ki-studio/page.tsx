import type { Metadata } from "next"
import { KIStudioPageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "KI-Studio in Schorndorf – Porträts, Videos & Songs",
  description:
    "Individuelle KI-Porträts, persönliche Videos und Songs aus dem SWEA KI-Studio in Schorndorf. Porträts ab 15 €, weitere Projekte nach individuellem Angebot.",
  alternates: { canonical: "/ki-studio" },
}

export default function KIStudioPage() {
  return <KIStudioPageContent />
}
