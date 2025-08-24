"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Crown, FileText, DollarSign, Camera, X } from "lucide-react"
import { useState } from "react"

export default function KepengurusanPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const pengurus = [
{
      role: "Ketua, Wakil Ketua, Ketua Koordinasi",
      names: "Ringga Ayu Ramdhani (Ketua), Fathurahman Rizqi (Wakil Ketua), Armelita Purwita Sari (Ketua Koordinasi)",
      description: "Bertanggung jawab atas kepemimpinan, pendampingan, dan koordinasi lintas seksi.",
      icon: Crown,
      image: "/ketua.jpg",
      color: "blue",
    },
    {
      role: "Sekretaris I & II",
      names: "Aisha Berliana Hidayat (Sekretaris I), Nauvaltha Brynastiar (Sekretaris II)",
      description: "Mengelola administrasi surat, arsip, jadwal rapat, dan publikasi internal.",
      icon: FileText,
      image: "/sekretaris.jpg",
      color: "blue",
    },
    {
      role: "Bendahara I & II",
      names: "Aprillianti Bunga Haryoto (Bendahara I), Nusrotin Najwa (Bendahara II)",
      description: "Mengatur keuangan, pencatatan, dan pelaporan keuangan organisasi.",
      icon: DollarSign,
      image: "/bendahara.jpg",
      color: "blue",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-900/50 rounded-full mb-8 animate-bounce">
                <Users className="h-10 w-10 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Kepengurusan Organisasi</h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Struktur kepemimpinan PMR WIRA SMKN 1 Purwokerto periode 2024-2025
              </p>
            </div>
          </div>
        </section>

<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto space-y-16">
      {pengurus.map((item, index) => {
        const IconComponent = item.icon
        const isEven = index % 2 === 0

        return (
          <Card
            key={index}
            className="overflow-hidden border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-800 group"
          >
            <CardContent className="p-0">
              <div className={`grid lg:grid-cols-2 ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Gambar */}
                <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-64 lg:h-80">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.role}
                      fill
                      className="object-cover rounded-2xl m-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 90vw, 45vw"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Konten */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? "lg:col-start-1" : ""}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse hover:animate-spin transition-all duration-300 hover:bg-blue-800/50">
                      <IconComponent className="h-6 w-6 text-blue-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.role}</h3>
                      <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-200 leading-relaxed">{item.names}</h4>
                    <p className="text-slate-300 leading-relaxed text-base">{item.description}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                      <span>Periode 2024-2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  </div>
</section>


        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Tentang Kepengurusan</h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Tiga pilar utama dalam menjalankan organisasi PMR WIRA
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Crown,
                    title: "Kepemimpinan",
                    description: "Memimpin dengan integritas dan visi yang jelas untuk kemajuan organisasi",
                    color: "blue",
                  },
                  {
                    icon: FileText,
                    title: "Administrasi",
                    description: "Mengelola dokumentasi dan administrasi organisasi dengan tertib dan profesional",
                    color: "blue",
                  },
                  {
                    icon: DollarSign,
                    title: "Keuangan",
                    description: "Mengelola keuangan organisasi dengan transparan dan akuntabel",
                    color: "blue",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-8 border border-slate-700 shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900 group hover:-translate-y-2"
                  >
                    <CardContent className="p-0 text-center">
                      <div
                        className={`w-16 h-16 bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-blue-800/50 group-hover:rotate-12 group-hover:scale-110`}
                      >
                        <item.icon
                          className={`h-8 w-8 text-blue-400 transition-all duration-300 group-hover:text-blue-300`}
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Full size image"
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
