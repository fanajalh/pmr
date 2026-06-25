"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Users, Crown, FileText, DollarSign, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CDN_IMAGES } from "@/lib/cdn-images"

export default function KepengurusanPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const sections = [
    {
      role: "Pimpinan Inti",
      icon: Crown,
      description: "Pemegang amanah tertinggi dalam pengambilan kebijakan strategis dan penentu arah gerak organisasi PMR Wira.",
      groupImage: "https://cdn.jsdelivr.net/gh/fabian-pratama/safc40-assets/sekbid/ketua.jpeg",
      members: [
        { name: "Putri Syafiyah Nur Alifah", title: "Ketua" },
        { name: "Fahri Nuansa Ramadhan", title: "Wakil Ketua" },
        { name: "Nayla Nurul Ikhsana", title: "Ketua Koordinasi" },
      ],
    },
    {
      role: "Sekretariat",
      icon: FileText,
      description: "Pusat pengelolaan data administratif, korespondensi surat menyurat, dan tata arsip internal PMR.",
      groupImage: "https://cdn.jsdelivr.net/gh/fabian-pratama/safc40-assets/sekbid/sekretaris.jpeg",
      members: [
        { name: "Muhammad Aldi Sadikin", title: "Sekretaris I" },
        { name: "Nadia Anastasia Ramadani", title: "Sekretaris II" },
      ],
    },
    {
      role: "Kebendaharaan",
      icon: DollarSign,
      description: "Bertanggung jawab atas sirkulasi kas, laporan pertanggungjawaban keuangan, serta transparansi anggaran.",
      groupImage: "https://cdn.jsdelivr.net/gh/fabian-pratama/safc40-assets/sekbid/bendahara.jpeg",
      members: [
        { name: "Lili Imaniati", title: "Bendahara I" },
        { name: "Salsabila", title: "Bendahara II" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100">
      <Navigation />
      
      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="pt-40 pb-20 bg-slate-50/50 dark:bg-white/[0.01] border-b border-border/20 relative overflow-hidden">

          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 text-primary font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6"
            >
              <span className="w-8 h-[1px] bg-primary/30"></span>
              Executive Committee
              <span className="w-8 h-[1px] bg-primary/30"></span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-slate-900 dark:text-white mb-6 leading-none font-heading uppercase">
              Struktur <br />
              <span className="text-primary font-semibold">Kepengurusan</span>
            </h1>
            
            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Manajemen inti periode 2024-2025 yang berdedikasi tinggi, berintegritas, dan bersinergi dalam menakhodai kontingen SAF-C WIRA SMKN 1 Purwokerto.
            </p>
          </div>
        </section>

        {/* ================= MEMBERS SECTION ================= */}
        <section className="py-32 bg-white dark:bg-[#020617] border-b border-border/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-36">
              {sections.map((section, idx) => (
                <div key={idx} className="grid lg:grid-cols-12 gap-16 items-center">
                  
                  {/* Info Per Divisi (Left Column - 5/12 Width) */}
                  <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                        <section.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-3xl font-light tracking-tighter text-slate-900 dark:text-white uppercase font-heading">
                        {section.role}
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed italic text-sm md:text-base border-l border-primary/20 pl-6">
                        "{section.description}"
                      </p>
                    </div>

                    {/* Members List */}
                    <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-white/5">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">Anggota Kepengurusan</h4>
                      <div className="space-y-3">
                        {section.members.map((member, mIdx) => (
                          <div 
                            key={mIdx} 
                            className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/[0.01] border border-border/40 dark:border-white/5 hover:border-primary/20 hover:bg-slate-100/50 dark:hover:bg-white/[0.02] transition-all duration-300"
                          >
                            <span className="text-slate-800 dark:text-slate-200 font-medium text-sm md:text-base">{member.name}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                              {member.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Foto Bersama (Right Column - 7/12 Width) */}
                  <div className="lg:col-span-7">
                    <div
                      onClick={() => setSelectedImage(section.groupImage)}
                      className="group cursor-pointer relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/40 dark:border-white/5 bg-slate-50 dark:bg-white/[0.01] shadow-lg hover:shadow-primary/5 transition-all duration-500"
                    >
                      <Image
                        src={section.groupImage}
                        alt={`Foto Bersama ${section.role}`}
                        fill
                        className="object-cover transition-transform duration-[750ms] ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                      
                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                        <div>
                          <p className="text-[10px] text-primary font-bold tracking-widest uppercase mb-1">DOKUMENTASI KEPENGURUSAN</p>
                          <h4 className="text-white text-xl font-bold tracking-tight font-heading uppercase">{section.role}</h4>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <Crown className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= THREE PILLARS SECTION ================= */}
        <section className="py-32 bg-slate-50 dark:bg-[#020617] border-b border-border/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                { 
                  icon: Crown, 
                  title: "Integritas", 
                  desc: "Menjaga keikhlasan, komitmen, dan ketulusan niat dalam setiap misi aksi kemanusiaan." 
                },
                { 
                  icon: FileText, 
                  title: "Profesional", 
                  desc: "Tata kelola organisasi, rapat evaluasi, dan penyusunan administrasi yang terstruktur." 
                },
                { 
                  icon: DollarSign, 
                  title: "Transparan", 
                  desc: "Keterbukaan informasi keuangan kas dan akuntabilitas dana secara konsisten." 
                },
              ].map((item, i) => (
                <div key={i} className="space-y-6 text-center group">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 transition-all duration-500 group-hover:scale-105">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight uppercase text-slate-900 dark:text-white font-heading">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed text-xs md:text-sm px-4">
                      "{item.desc}"
                    </p>
                  </div>
                </div>
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
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-lg w-full aspect-[4/5] shadow-2xl overflow-hidden rounded-xl border border-white/10">
              <Image src={selectedImage} alt="Preview" fill className="object-cover" />
              <button className="absolute top-5 right-5 text-white w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}