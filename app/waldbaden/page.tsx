import type { Metadata } from "next"
import { WaldbadenPageContent } from "@/components/swea-site"

export const metadata: Metadata = {
  title: "After-Work-Waldbaden in Schorndorf – Achtsamkeit im Wald",
  description:
    "After Work – Waldbaden und Achtsamkeit: die kleine Auszeit nach der Arbeit. Achtsamkeit im Wald in Schorndorf und im Rems-Murr-Kreis, in kleinen Gruppen geleitet von Uwe Christian.",
  alternates: { canonical: "/waldbaden" },
}

export default function WaldbadenPage() {
  return <WaldbadenPageContent />
}
