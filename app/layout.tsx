import type React from "react"
import type { Metadata } from "next"
// Ganti font yang diimpor di sini
import { Inter, Roboto_Slab } from "next/font/google" 
import "./globals.css"

// Ganti konfigurasi font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans", // Pertahankan nama variabel CSS jika diinginkan
})

// Ganti konfigurasi font
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-playfair", // Pertahankan nama variabel CSS jika diinginkan
})

export const metadata: Metadata = {
  title: "PMR WIRA SMKN 1 Purwokerto",
  description:
    "Palang Merah Remaja WIRA SMKN 1 Purwokerto - Ekstrakurikuler kemanusiaan untuk siswa",
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      // Ganti variabel font yang digunakan di class
      className={`${inter.variable} ${robotoSlab.variable} antialiased`} 
    >
      <body>{children}</body>
    </html>
  )
}