import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Jose Boullosa | Search Platform Architect',
  description: 'Jose Boullosa diseña plataformas de búsqueda, sistemas de datos y soluciones de observabilidad.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
