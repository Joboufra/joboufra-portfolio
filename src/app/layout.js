import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Jose Boullosa | Portfolio',
  description: 'DevOps Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
