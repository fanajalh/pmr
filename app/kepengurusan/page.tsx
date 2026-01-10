"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Crown, FileText, DollarSign, X, CheckCircle2, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function KepengurusanPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const sections = [
    {
      role: "Pimpinan Inti",
      icon: Crown,
      description: "Pemegang amanah tertinggi dalam pengambilan kebijakan dan arah gerak organisasi.",
      members: [
        { name: "Syafiyah", title: "Ketua", image: "/ringga.jpg" },
        { name: "Fathurahman Rizqi", title: "Wakil Ketua", image: "/fathur.jpg" },
        { name: "Armelita Purwita Sari", title: "Ketua Koordinasi", image: "/armelita.jpg" },
      ],
    },
    {
      role: "Sekretariat",
      icon: FileText,
      description: "Pusat pengelolaan data, dokumentasi, dan birokrasi internal PMR Wira.",
      members: [
        { name: "Aisha Berliana Hidayat", title: "Sekretaris I", image: "/aisha.jpg" },
        { name: "Nauvaltha Brynastiar", title: "Sekretaris II", image: "/nauval.jpg" },
      ],
    },
    {
      role: "Kebendaharaan",
      icon: DollarSign,
      description: "Bertanggung jawab atas transparansi sirkulasi keuangan dan anggaran kegiatan.",
      members: [
        { name: "Aprillianti Bunga Haryoto", title: "Bendahara I", image: "/april.jpg" },
        { name: "Nusrotin Najwa", title: "Bendahara II", image: "/najwa.jpg" },
      ],
    },
  ]

  return (
    // Background utama Putih (Light Mode) dengan transisi ke Dark Mode jika user mengaktifkannya
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 selection:bg-blue-100">
      <Navigation />
      
      <main>
        {/* ================= HERO SECTION (LIGHT THEME) ================= */}
       {/* ================= HERO SECTION (CENTERED) ================= */}
        <section className="pt-44 pb-24 bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-100 dark:border-slate-800 relative overflow-hidden">
          {/* Ornamen halus untuk mempercantik posisi tengah */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center"> {/* Ditambahkan mx-auto dan text-center */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-3 text-blue-700 dark:text-blue-400 font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8"
              >
                <span className="w-8 h-[1px] bg-blue-700/30 dark:bg-blue-400/30"></span>
                Executive Committee
                <span className="w-8 h-[1px] bg-blue-700/30 dark:bg-blue-400/30"></span>
              </motion.div>
              
              <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-[#1e293b] dark:text-white mb-8 leading-[1.1]">
                Struktur <br />
                <span className="text-blue-700 dark:text-blue-500 italic font-light">Kepengurusan.</span>
              </h1>
              
              <div className="w-20 h-1 bg-blue-700 mx-auto mb-8 rounded-full opacity-20"></div> {/* Divider tengah */}

              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed Poppins">
                Mengenal jajaran manajemen inti <span className="font-medium text-slate-900 dark:text-slate-200 uppercase tracking-wide">PMR Wira SMKN 1 Purwokerto</span> periode 2024-2025 yang berdedikasi tinggi dalam misi kemanusiaan.
              </p>
            </div>
          </div>
        </section>

        {/* ================= MEMBERS SECTION ================= */}
        <section className="py-24 bg-white dark:bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-32">
              {sections.map((section, idx) => (
                <div key={idx} className="grid lg:grid-cols-12 gap-12">
                  
                  {/* Info Per Divisi (Sticky) */}
                  <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
                    <div className="inline-flex p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                      <section.icon className="w-8 h-8 text-blue-700 dark:text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] dark:text-white underline underline-offset-8 decoration-blue-700/20">
                      {section.role}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed italic Poppins">
                      "{section.description}"
                    </p>
                    <div className="pt-4 flex items-center gap-3 text-sm font-semibold text-blue-700 dark:text-blue-400">
                       <CheckCircle2 className="w-5 h-5" />
                       <span>Periode Aktif 2024 - 2025</span>
                    </div>
                  </div>

                  {/* Foto Anggota (Ramping Grid) */}
                  <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
                    {section.members.map((member, mIdx) => (
                      <motion.div
                        key={mIdx}
                        whileHover={{ y: -12 }}
                        onClick={() => setSelectedImage(member.image)}
                        className="group cursor-pointer"
                      >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          
                          {/* Overlay Gradient Dark Blue (Hanya di bagian bawah) */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                          
                          {/* Label Nama (Muncul saat Hover) */}
                          <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-blue-300 text-xs font-bold tracking-[0.3em] uppercase mb-2">
                              {member.title}
                            </p>
                            <h4 className="text-white text-2xl font-bold tracking-tight Poppins leading-tight">
                              {member.name}
                            </h4>
                          </div>

                          {/* Icon Panah (Styling Ramping) */}
                          <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="text-white w-5 h-5" />
                          </div>
                        </div>

                        {/* Nama Terlihat di Bawah (Saat tidak hover) */}
                        <div className="mt-6 space-y-1 group-hover:opacity-0 transition-opacity">
                           <h4 className="text-lg font-bold text-[#1e293b] dark:text-white Poppins">{member.name}</h4>
                           <p className="text-sm text-blue-700 dark:text-blue-400 font-medium tracking-wide uppercase">{member.title}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= THREE PILLARS SECTION (DARK BLUE THEME) ================= */}
        <section className="py-24 bg-[#1e3a8a] dark:bg-[#172554] text-white relative overflow-hidden">
          {/* Efek Dekoratif Latar Belakang */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
              {[
                { 
                  icon: Crown, 
                  title: "Integritas", 
                  desc: "Menjaga kejujuran dan ketulusan dalam setiap tindakan kemanusiaan." 
                },
                { 
                  icon: FileText, 
                  title: "Profesional", 
                  desc: "Tata kelola administrasi yang rapi, disiplin, dan terukur secara sistematis." 
                },
                { 
                  icon: DollarSign, 
                  title: "Transparan", 
                  desc: "Keterbukaan penuh dalam pengelolaan amanah dana dan sumber daya organisasi." 
                },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  key={i} 
                  className="text-center space-y-6 group"
                >
                  {/* Ikon dengan Frame Ramping */}
                  <div className="mx-auto w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:rotate-6 transition-all duration-500 border border-white/10 shadow-xl">
                    <item.icon className="w-10 h-10 text-blue-200" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight Poppins uppercase group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h3>
                    {/* Garis Dekoratif Ramping */}
                    <div className="w-8 h-[1px] bg-blue-400 mx-auto group-hover:w-16 transition-all duration-500" />
                    <p className="text-blue-100/70 font-light italic leading-relaxed Poppins text-sm md:text-base px-4">
                      "{item.desc}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* MODAL IMAGE PREVIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-xl w-full aspect-[4/5] shadow-2xl">
              <Image src={selectedImage} alt="Preview" fill className="object-cover rounded-3xl" />
              <button className="absolute -top-16 right-0 text-slate-900 dark:text-white flex items-center gap-2 font-bold tracking-widest uppercase text-xs bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg">
                Close <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}