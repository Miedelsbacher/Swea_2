import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

const siteUrl = 'https://www.swea.de'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SWEA – EDV-Service, KI-Studio & Waldbaden in Schorndorf',
  description:
    'Persönlicher IT-Service, KI-Bilder und Videos, individuelle Songs sowie Waldbaden und Achtsamkeit in Schorndorf. Uwe Christian – SWEA.',
  generator: 'SWEA',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SWEA – EDV-Service, KI-Studio & Waldbaden in Schorndorf',
    description:
      'IT-Service, persönliche KI-Produktion und Waldbaden in Schorndorf und Umgebung. Mit Uwe Christian.',
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
  themeColor: '#f7f6f0',
}

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#business`,
  name: 'SWEA – Uwe Christian',
  url: siteUrl,
  image: `${siteUrl}/swea/edv-large.png`,
  telephone: '+49 7181 253148',
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
        {children}
      </body>
    </html>
  )
}
