import type { Metadata } from "next"
import { WebdesignPageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "Webdesign, Website-Überarbeitung und Wartung",
  description:
    "Persönlich geplante Websites von SWEA: neue Website mit Domain, E-Mail und Gestaltung, Redesign bestehender Webseiten und Wartungsverträge für die langfristige Betreuung.",
  alternates: { canonical: "/webdesign" },
}

export default function WebdesignPage() {
  return <WebdesignPageContent />
}
