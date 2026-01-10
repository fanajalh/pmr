"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Calendar, Camera, Heart, Droplets, Leaf, 
  ArrowUpRight, Users, Handshake, Star, X, Info 
} from "lucide-react"
import { useState } from "react"

export default function ProgramKerjaPage() {
  // State untuk mengontrol Modal
  const [selectedProgram, setSelectedProgram] = useState<any>(null)

  const programs = [
    {
      title: "Anjangsana sini SPYDER X SAF-C",
      description: "Program kunjungan dan kolaborasi dengan organisasi PMR lainnya untuk berbagi pengalaman, teknik kepalangmerahan, dan mempererat tali persaudaraan antar Wira.",
      longDescription: "Kegiatan ini merupakan ajang silaturahmi antara PMR Wira SMKN 1 Purwokerto (SAF-C) dengan unit PMR sekolah lain. Fokus utamanya adalah pertukaran materi teknis seperti bongkar pasang tandu, pertolongan pertama, dan manajemen organisasi unit.",
      icon: Handshake,
      images: ["/spyc.jpg", "/spyc (2).jpg"],
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      date: "Oktober 2024",
      location: "SMKN 1 Purwokerto"
    },
    {
      title: "Anjangsini FAIKING SOKA X SAF-C",
      description: "Kegiatan pertukaran ilmu dan simulasi lapangan bersama PMR FAIKING SOKA dalam rangka memperkuat kesiapsiagaan bencana.",
      longDescription: "Kolaborasi intensif yang melibatkan simulasi penanganan korban massal dan dapur umum. Peserta dilatih untuk berkoordinasi dalam situasi darurat antar unit PMR yang berbeda wilayah.",
      icon: Users,
      images: ["/anjangsini1.jpg", "/anjangsini2.jpg"],
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      date: "November 2024",
      location: "Outdoor Area"
    },
    {
      title: "Bakti Sosial",
      description: "Aksi nyata pengabdian masyarakat melalui penyaluran bantuan dan edukasi kesehatan untuk menerapkan 7 Prinsip Dasar Palang Merah.",
      longDescription: "Bentuk kepedulian anggota PMR terhadap masyarakat sekitar yang membutuhkan. Selain pembagian sembako, dilakukan juga pemeriksaan kesehatan gratis seperti cek tensi dan edukasi pola hidup bersih sehat (PHBS).",
      icon: Heart,
      images: ["/baktisosial1.jpg", "/baktisosial2.jpg"],
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/30",
      date: "Desember 2024",
      location: "Desa Binaan"
    },
    {
      title: "SAF-C GOES TO UTD",
      description: "Edukasi langsung ke Unit Transfusi Darah untuk memahami alur donor darah dari hulu ke hilir.",
      longDescription: "Anggota PMR diajak melihat langsung proses pengolahan darah di PMI, mulai dari screening awal, pengambilan darah, hingga pemisahan komponen darah di laboratorium.",
      icon: Droplets,
      images: ["/utd.jpg", "/utd1.jpg"],
      color: "text-rose-600 dark:text-rose-400",
      bgColor: "bg-rose-100 dark:bg-rose-900/30",
      date: "Januari 2025",
      location: "UTD PMI Kabupaten"
    },
    {
      title: "SAF-C Green Action",
      description: "Inisiatif pelestarian lingkungan melalui penanaman pohon dan kampanye bebas sampah plastik.",
      longDescription: "Gerakan peduli lingkungan yang berfokus pada penghijauan area sekolah dan pengelolaan sampah mandiri. Program ini mendukung pilar kebersihan dan kesehatan dalam Tri Bakti PMR.",
      icon: Leaf,
      images: ["/green.jpg", "/green1.jpg"],
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
      date: "Februari 2025",
      location: "Lingkungan Sekolah"
    },
  ]

  const stats = [
    { label: "Program Utama", value: "5+", icon: Star },
    { label: "Anggota Aktif", value: "100+", icon: Users },
    { label: "Kolaborasi", value: "3+", icon: Handshake },
    { label: "Tahun Aktif", value: "50+", icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      
      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] -z-10" />
          <div className="container mx-auto px-6 text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase">
              Program <span className="text-primary not-italic">Kerja</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Membangun karakter relawan muda melalui aksi nyata dan pengabdian masyarakat.
            </p>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="py-12 -mt-12 relative z-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="bg-card border p-6 rounded-[2rem] shadow-xl flex flex-col items-center justify-center text-center space-y-2 hover:border-primary transition-colors group">
                  <div className="p-3 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-black tracking-tight">{stat.value}</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROGRAMS LIST ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-24">
              {programs.map((program, index) => {
                const IconComponent = program.icon
                return (
                  <div key={index} className="group relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                        <div className={`inline-flex p-4 rounded-3xl ${program.bgColor} ${program.color} shadow-inner`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight group-hover:text-primary transition-colors">
                          {program.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                          "{program.description}"
                        </p>
                        {/* Tombol Lihat Detail yang memicu Modal */}
                        <button 
                          onClick={() => setSelectedProgram(program)}
                          className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-primary hover:gap-4 transition-all"
                        >
                          Lihat Detail <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {program.images.map((image, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            onClick={() => setSelectedProgram(program)}
                            className={`relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer ${imgIndex === 1 ? "mt-8" : "-mt-8"}`}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={program.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ================= POPUP MODAL ================= */}
      {selectedProgram && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProgram(null)}
          />
          
          <Card className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden border-none shadow-2xl rounded-[2.5rem] animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProgram(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              <div className="grid md:grid-cols-2">
                {/* Bagian Gambar di Modal */}
                <div className="relative h-64 md:h-full min-h-[400px]">
                  <Image 
                    src={selectedProgram.images[0]} 
                    alt={selectedProgram.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>

                {/* Bagian Info di Modal */}
                <div className="p-8 md:p-12 space-y-8">
                  <div className="space-y-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${selectedProgram.bgColor} ${selectedProgram.color} text-xs font-bold uppercase tracking-widest`}>
                      <Info className="w-3 h-3" /> Detail Program
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter">{selectedProgram.title}</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-8 text-sm border-y py-4">
                      <div>
                        <p className="text-muted-foreground font-medium uppercase tracking-tighter">Waktu</p>
                        <p className="font-bold">{selectedProgram.date}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground font-medium uppercase tracking-tighter">Lokasi</p>
                        <p className="font-bold">{selectedProgram.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-muted-foreground font-light">
                      {selectedProgram.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 italic text-sm text-primary font-bold">
                    <span>#PMRWira</span>
                    <span>#Kemanusiaan</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  )
}