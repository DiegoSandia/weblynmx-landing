import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WeblynMX — Webs que convierten. Negocios que crecen.',
  description: 'Diseñamos páginas web estratégicas que generan confianza, autoridad y ventas reales para tu negocio.',
  openGraph: {
    title: 'WeblynMX — Webs que convierten. Negocios que crecen.',
    description: 'Diseñamos páginas web estratégicas que generan confianza, autoridad y ventas reales para tu negocio.',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
