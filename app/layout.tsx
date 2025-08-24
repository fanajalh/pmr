import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3, Playfair_Display } from "next/font/google"
import "./globals.css"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "PMR WIRA SMKN 1 Purwokerto",
  description: "Palang Merah Remaja WIRA SMKN 1 Purwokerto - Ekstrakurikuler kemanusiaan untuk siswa",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${sourceSans.variable} ${playfairDisplay.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
