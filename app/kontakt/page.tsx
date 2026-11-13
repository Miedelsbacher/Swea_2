import type { Metadata } from "next"
import { ContactPageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "Kontakt zu SWEA in Schorndorf",
  description:
    "Kontaktieren Sie Herrn Christian in Schorndorf: direkt per Telefon, E-Mail oder über das Anfrageformular für IT-Service, KI-Studio und Waldbaden.",
  alternates: { canonical: "/kontakt" },
}

export default function KontaktPage() {
  return <ContactPageContent />
}
