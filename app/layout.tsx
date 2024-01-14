import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Varela_Round } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-inter'
})
const valeraRound = Varela_Round({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: '--font-varela-round'
});
const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'ECX website',
  description: 'This is the official ECX website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${valeraRound.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
