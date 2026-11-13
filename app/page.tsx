import type { Metadata } from "next"
import { HomePageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "Technik, die hilft. Ruhe, die bleibt.",
  description:
    "SWEA verbindet persönlichen IT-Service, ein kreatives KI-Studio und Waldbaden in Schorndorf. Lernen Sie Uwe Christian und die Angebote vor Ort kennen.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <div className="brand-area brand-area-base">
      <HomePageContent />
    </div>
  )
}
