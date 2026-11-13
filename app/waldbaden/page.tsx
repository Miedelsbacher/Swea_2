import type { Metadata } from "next"
import { WaldbadenPageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "Waldbaden in Schorndorf – Shinrin-Yoku & Achtsamkeit",
  description:
    "Zertifiziertes Waldbaden in Schorndorf: Shinrin-Yoku und Achtsamkeit in der Natur, persönlich geleitet von Uwe Christian. Kleine Gruppen mit maximal 8 Personen.",
  alternates: { canonical: "/waldbaden" },
}

export default function WaldbadenPage() {
  return <WaldbadenPageContent />
}
