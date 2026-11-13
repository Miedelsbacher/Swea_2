import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { LegalModals } from '@/components/legal-modals'
import { SiteInteractions } from '@/components/site-interactions'
import { SiteFooter, SiteHeader } from '@/components/site-shell'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

const siteUrl = 'https://www.swea.de'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SWEA – Technik, die hilft. Ruhe, die bleibt.',
    template: '%s | SWEA in Schorndorf',
  },
  description:
    'Persönlicher IT-Service für Zuhause, kreative KI-Porträts, Videos und Songs sowie zertifiziertes Waldbaden in Schorndorf. Uwe Christian – SWEA.',
  generator: 'SWEA',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SWEA – Technik, die hilft. Ruhe, die bleibt.',
    description:
      'Persönlicher IT-Service, KI-Studio und zertifiziertes Waldbaden in Schorndorf und Umgebung. Mit Uwe Christian.',
    url: '/',
    siteName: 'SWEA',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/swea/edv-large.png',
        width: 1024,
        height: 680,
        alt: 'SWEA EDV-Dienstleistungen in Schorndorf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/swea/edv-large.png'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f5f0',
}

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#business`,
  name: 'SWEA – Uwe Christian',
  url: siteUrl,
  image: `${siteUrl}/swea/edv-large.png`,
  telephone: '+49 7181 253147',
  faxNumber: '+49 7181 253151',
  email: 'edv@swea.de',
  description:
    'Persönlicher EDV-Service und IT-Support in Schorndorf, Miedelsbach und Umgebung. Webseitenerstellung, Netzwerk- und WLAN-Beratung, Datensicherung und Datenrettung.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Freiburgstr. 12',
    addressLocality: 'Schorndorf',
    addressRegion: 'Baden-Württemberg',
    postalCode: '73614',
    addressCountry: 'DE',
  },
  areaServed: [
    { '@type': 'City', name: 'Schorndorf' },
    { '@type': 'Place', name: 'Miedelsbach' },
  ],
  serviceType: [
    'EDV-Service und IT-Support',
    'Computer- und Hardwareberatung',
    'Netzwerk- und WLAN-Einrichtung',
    'Webseitenerstellung und Webdesign',
    'Datensicherung und Datenrettung',
    'Waldbaden und Achtsamkeitskurse',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <SiteInteractions>
          <SiteHeader />
          <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-area-surface focus:px-4 focus:py-2 focus:text-area-deep focus:shadow-lg" href="#main-content">Zum Inhalt springen</a>
          <main id="main-content">{children}</main>
          <SiteFooter />
          <LegalModals />
        </SiteInteractions>
      </body>
    </html>
  )
}
