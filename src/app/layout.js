import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://joboufra.es').replace(/\/+$/, '')
const siteName = 'Jose Boullosa'
const pageTitle = 'Jose Boullosa | Lead Search Architect — Portfolio'
const pageDescription = 'Lead Search Architect especializado en búsqueda, datos y soluciones IA.'
const socialImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Jose Boullosa, Lead Search Architect especializado en plataformas de búsqueda y datos',
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: siteName,
    url: siteUrl,
    jobTitle: 'Lead Search Architect',
    description: pageDescription,
    knowsAbout: [
      'Arquitectura de búsqueda',
      'Elasticsearch',
      'Coveo',
      'Datos',
      'Observabilidad',
      'Inteligencia artificial',
      'Liderazgo técnico',
    ],
    sameAs: [
      'https://github.com/joboufra',
      'https://www.linkedin.com/in/jboullosa/',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: pageDescription,
    inLanguage: 'es-ES',
    publisher: { '@id': `${siteUrl}/#person` },
  },
]

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/',
    siteName,
    locale: 'es_ES',
    type: 'website',
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [socialImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={spaceGrotesk.className}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
