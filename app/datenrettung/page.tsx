import type { Metadata } from "next"
import { DataRecoveryPageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "Datenrettung mit Partner DataPhoenix",
  description:
    "Datenrettung für Festplatten, USB-Sticks und Handys: SWEA organisiert Diagnose und Datenrettung mit dem Partner DataPhoenix. Ablauf in neun Schritten, 40-Euro-Aufwandspauschale und Ihre Zustimmung vor jeder kostenpflichtigen Beauftragung.",
  alternates: { canonical: "/datenrettung" },
}

export default function DatenrettungPage() {
  return <DataRecoveryPageContent />
}
