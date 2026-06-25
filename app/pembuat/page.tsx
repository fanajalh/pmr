"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Code2, Terminal, Cpu } from "lucide-react"
import { CDN_IMAGES } from "@/lib/cdn-images"

interface Programmer {
  name: string
  role: string
  desc: string
  img: string
  tags: string[]
}

export default function PembuatPage() {
  const programmers: Programmer[] = [
    {
      name: "Muhammad Fachri Arfan",
      role: "Frontend UI/UX Designer",
      desc: "Fokus pada desain modern berbasis minimalis, layout bersih, tipografi elegan, dan transisi micro-interactions yang responsif.",
      img: CDN_IMAGES.fachri,
      tags: ["Motion UI", "Figma", "React"]
    },
    {
      name: "Fabian Rendra Pratama",
      role: "System Analyst",
      desc: "Menganalisis sistem, menstrukturisasi data, dan memastikan performa sistem tetap prima, cepat, aman, dan stabil.",
      img: CDN_IMAGES.fabian,
      tags: ["Node.js", "Cloudflare", "TypeScript"]
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100">
      <Navigation />

      {/* ================= HERO SECTION ================= */}
      <section className="pt-40 pb-20 bg-slate-50/50 dark:bg-white/[0.01] border-b border-border/20 relative overflow-hidden">

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-3 text-primary font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6">
            <span className="w-8 h-[1px] bg-primary/30"></span>
            The Minds Behind
            <span className="w-8 h-[1px] bg-primary/30"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-slate-900 dark:text-white mb-6 leading-none font-heading uppercase">
            Arsitek <span className="text-primary font-semibold">Digital</span>
          </h1>
          
          <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Tim kreatif yang mendesain dan mengimplementasikan ekosistem digital PMR Wira SMKN 1 Purwokerto dengan sentuhan estetika premium.
          </p>
        </div>
      </section>

      {/* ================= MEMBERS SECTION ================= */}
      <section className="py-32 bg-white dark:bg-[#020617] border-b border-border/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {programmers.map((dev, i) => (
              <div key={i} className="group space-y-6">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-border/40 dark:border-white/5 bg-slate-50 dark:bg-white/[0.01] shadow-md">
                  <Image
                    src={dev.img}
                    alt={dev.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2">
                      {dev.role}
                    </span>
                    <h2 className="text-3xl font-bold uppercase tracking-tight leading-none mb-3 font-heading">
                      {dev.name}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {dev.desc}
                    </p>
                    <div className="flex gap-2">
                      {dev.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold px-3 py-1 bg-white/10 backdrop-blur-md rounded-full uppercase tracking-widest border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-32 bg-slate-50 dark:bg-[#020617] border-b border-border/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Code2, 
                title: "Next.js 14", 
                desc: "Framework React modern dengan server-side rendering untuk optimasi SEO dan performa tinggi." 
              },
              { 
                icon: Cpu, 
                title: "Tailwind v4", 
                desc: "Sistem utilitas CSS terbaru untuk menjaga konfigurasi desain tetap ramping dan responsif." 
              },
              { 
                icon: Terminal, 
                title: "TypeScript", 
                desc: "Menjamin keamanan tipe data, stabilitas kode, serta skalabilitas sistem jangka panjang." 
              },
            ].map((tech, i) => (
              <div key={i} className="p-10 bg-white dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl group hover:border-primary/20 transition-all duration-300">
                <tech.icon className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-bold uppercase tracking-tight text-slate-950 dark:text-white mb-3 font-heading">{tech.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}