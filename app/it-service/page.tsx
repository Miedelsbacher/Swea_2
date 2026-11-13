import type { Metadata } from "next"
import { ITServicePageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "IT-Service für Zuhause in Schorndorf",
  description:
    "Persönliche Computerhilfe, Hardware-Support und WLAN für Zuhause in Schorndorf. Heimnetz über geeignete Telefon- oder Sat-Leitungen, Datenrettung mit Partnerangebot und verständliche Beratung.",
  alternates: { canonical: "/it-service" },
}

export default function ITServicePage() {
  return <ITServicePageContent />
}
