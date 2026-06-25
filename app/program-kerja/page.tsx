"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Calendar, Users, Handshake, Star, X, Info, ArrowUpRight 
} from "lucide-react"
import { useState } from "react"
import { CDN_IMAGES } from "@/lib/cdn-images"

export default function ProgramKerjaPage() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null)

  const programs = [
    {
      title: "Anjangsana SPYDER X SAF-C",
      description: "Program kunjungan dan kolaborasi dengan organisasi PMR lainnya untuk berbagi pengalaman, teknik kepalangmerahan, dan mempererat tali persaudaraan.",
      longDescription: "Kegiatan ini merupakan ajang silaturahmi antara PMR Wira SMKN 1 Purwokerto (SAF-C) dengan unit PMR sekolah lain. Fokus utamanya adalah pertukaran materi teknis seperti bongkar pasang tandu darurat, pertolongan pertama, dan manajemen organisasi unit.",
      icon: Handshake,
      images: [CDN_IMAGES.programSpyc1, CDN_IMAGES.programSpyc2],
      color: "text-primary",
      bgColor: "bg-primary/10",
      border: "border-primary/20",
      date: "Oktober 2024",
      location: "SMKN 1 Purwokerto"
    },
    {
      title: "Anjangsini FAIKING SOKA X SAF-C",
      description: "Kegiatan pertukaran ilmu dan simulasi lapangan bersama PMR FAIKING SOKA dalam rangka memperkuat kesiapsiagaan bencana.",
      longDescription: "Kolaborasi intensif yang melibatkan simulasi penanganan korban massal dan dapur umum. Anggota dilatih untuk berkoordinasi secara taktis dalam situasi darurat antar unit PMR yang berbeda wilayah.",
      icon: Users,
      images: [CDN_IMAGES.programAnjang1, CDN_IMAGES.programAnjang2],
      color: "text-primary",
      bgColor: "bg-primary/10",
      border: "border-primary/20",
      date: "November 2024",
      location: "Outdoor Area"
    },
    {
      title: "Bakti Sosial",
      description: "Aksi nyata pengabdian masyarakat melalui penyaluran bantuan sosial dan edukasi kesehatan dasar untuk menerapkan Tri Bakti PMR.",
      longDescription: "Bentuk kepedulian anggota PMR terhadap masyarakat sekitar yang membutuhkan bantuan logistik. Selain pembagian sembako, dilakukan juga pemeriksaan kesehatan gratis seperti cek tekanan darah dan edukasi PHBS.",
      icon: Users,
      images: [CDN_IMAGES.programBaksos1, CDN_IMAGES.programBaksos2],
      color: "text-primary",
      bgColor: "bg-primary/10",
      border: "border-primary/20",
      date: "Desember 2024",
      location: "Desa Binaan"
    },
    {
      title: "SAF-C GOES TO UTD",
      description: "Edukasi langsung ke Unit Transfusi Darah PMI untuk memahami alur pengelolaan dan screening donor darah.",
      longDescription: "Anggota PMR diajak melihat langsung proses pengolahan darah di PMI, mulai dari screening awal pendonor, pengambilan darah secara steril, hingga pemisahan komponen darah di laboratorium UTD.",
      icon: Star,
      images: [CDN_IMAGES.programUtd1, CDN_IMAGES.programUtd2],
      color: "text-primary",
      bgColor: "bg-primary/10",
      border: "border-primary/20",
      date: "Januari 2025",
      location: "UTD PMI Kabupaten"
    },
    {
      title: "SAF-C Green Action",
      description: "Inisiatif pelestarian lingkungan sekolah melalui penanaman bibit pohon dan kampanye pengurangan sampah plastik.",
      longDescription: "Gerakan peduli lingkungan yang berfokus pada penghijauan area sekolah dan tata kelola sampah mandiri. Program ini mendukung pilar kebersihan dan kesehatan dalam mewujudkan Tri Bakti PMR.",
      icon: Star,
      images: [CDN_IMAGES.programGreen1, CDN_IMAGES.programGreen2],
      color: "text-primary",
      bgColor: "bg-primary/10",
      border: "border-primary/20",
      date: "Februari 2025",
      location: "Lingkungan Sekolah"
    },
  ]

  const stats = [
    { label: "Program Kerja", value: "5+", icon: Star },
    { label: "Anggota Aktif", value: "100+", icon: Users },
    { label: "Kolaborasi Mitra", value: "3+", icon: Handshake },
    { label: "Tahun Berdiri", value: "50+", icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100">
      <Navigation />
      
      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="pt-40 pb-20 bg-slate-100/30 dark:bg-slate-950/20 border-b border-border/20 relative overflow-hidden">

          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
            <div className="flex items-center justify-center gap-3 text-primary font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6">
              <span className="w-8 h-[1px] bg-primary/30"></span>
              PMR Wira Activity
              <span className="w-8 h-[1px] bg-primary/30"></span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-slate-900 dark:text-white mb-6 leading-none font-heading uppercase">
              Program <span className="text-primary font-semibold">Kerja</span>
            </h1>
            
            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Membentuk karakter kepemimpinan, kepedulian sosial, dan kematangan emosional relawan Wira melalui aksi nyata pengabdian masyarakat.
            </p>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="py-16 bg-background border-b border-border/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 bg-card border border-border/40 rounded-xl flex flex-col items-center justify-center text-center space-y-3 hover:border-primary/20 transition-all duration-300 group shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold tracking-tight text-foreground font-heading">{stat.value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROGRAMS LIST ================= */}
        <section className="py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto space-y-36">
              {programs.map((program, index) => {
                const IconComponent = program.icon
                return (
                  <div key={index} className="group">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                      
                      {/* Left: Info */}
                      <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${program.bgColor} ${program.color} border ${program.border}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 dark:text-white font-heading uppercase group-hover:text-primary transition-colors">
                          {program.title}
                        </h2>
                        <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                          {program.description}
                        </p>
                        <button 
                          onClick={() => setSelectedProgram(program)}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-[#0ea5e9] transition-colors pt-2"
                        >
                          Lihat Detail <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Right: Images Grid */}
                      <div className="grid grid-cols-2 gap-6">
                        {program.images.map((image, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            onClick={() => setSelectedProgram(program)}
                            className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border/40 dark:border-white/5 bg-card dark:bg-white/[0.01] cursor-pointer shadow-md"
                          >
                            <Image
                              src={image}
                              alt={program.title}
                              fill
                              className="object-cover transition-transform duration-750 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-fade-in">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedProgram(null)}
          />
          
          <Card className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden border border-white/10 shadow-2xl rounded-2xl bg-[#0f172a] text-white">
            <button 
              onClick={() => setSelectedProgram(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              <div className="grid md:grid-cols-2">
                
                {/* Image Side */}
                <div className="relative h-64 md:h-full min-h-[400px]">
                  <Image 
                    src={selectedProgram.images[0]} 
                    alt={selectedProgram.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Info Side */}
                <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                      <Info className="w-3.5 h-3.5" /> Detail Program
                    </div>
                    <h2 className="text-3xl font-light tracking-tight text-white font-heading uppercase">{selectedProgram.title}</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-8 text-xs border-y border-white/10 py-4 font-light text-slate-400">
                      <div>
                        <p className="uppercase tracking-widest text-[10px] font-bold">Waktu</p>
                        <p className="font-semibold text-white mt-1">{selectedProgram.date}</p>
                      </div>
                      <div>
                        <p className="uppercase tracking-widest text-[10px] font-bold">Lokasi</p>
                        <p className="font-semibold text-white mt-1">{selectedProgram.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm md:text-base leading-relaxed text-slate-300 font-light">
                      {selectedProgram.longDescription}
                    </p>
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