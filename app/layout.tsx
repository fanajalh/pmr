import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "PMR WIRA SMKN 1 Purwokerto",
  description: "Palang Merah Remaja WIRA SMKN 1 Purwokerto",
  icons: {
    icon: "/logo1.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`dark ${poppins.variable} font-sans antialiased`}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}