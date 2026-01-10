"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Code2, Terminal, Cpu, ArrowUpRight } from "lucide-react"

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
      desc: "Fokus pada desain modern berbasis glassmorphism, layout clean, dan pengalaman pengguna yang smooth.",
      img: "/",
      tags: ["Motion UI", "Figma", "React"]
    },
    {
      name: "Fabian Rndra Pratama",
      role: "System Analyst",
      desc: "mencari informasi dan data, memastikan performa sistem cepat, aman, dan stabil dengan arsitektur modern.",
      img: "/",
      tags: ["Node.js", "CloudFare"]
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] font-poppins">
      <Navigation />

      {/* 1. HERO HEADER: Editorial Style */}
      <section className="pt-44 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-10 bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">The Minds Behind</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-gray-900 dark:text-white leading-none uppercase italic">
              Arsitek <span className="font-black not-italic text-primary">Digital</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl font-light leading-relaxed italic border-t border-gray-100 dark:border-white/5 pt-6">
              Bertemu dengan tim kreatif di balik layar yang membangun ekosistem digital PMR Wira dengan presisi dan estetika.
            </p>
          </div>
        </div>
        {/* Background Decorative Text */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-black text-gray-50 dark:text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
          CREATORS
        </span>
      </section>

      {/* 2. PROGRAMMER CARDS: Asymmetric & Modern */}
      <section className="py-20 bg-gray-50 dark:bg-white/[0.01]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {programmers.map((dev, i) => (
              <div key={i} className="group">
                <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-3">
                  <Image
                    src={dev.img}
                    alt={dev.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-black tracking-widest uppercase text-primary mb-2">
                      {dev.role}
                    </span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4 group-hover:italic transition-all">
                      {dev.name}
                    </h2>
                    <p className="text-sm text-gray-300 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
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

      {/* 3. TECH STACK: Minimalist Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2rem] overflow-hidden shadow-xl">
            {[
              { 
                icon: Code2, 
                title: "Next.js 14", 
                desc: "Framework modern dengan App Router untuk performa render secepat kilat." 
              },
              { 
                icon: Cpu, 
                title: "Tailwind 4", 
                desc: "Sistem utility-first yang memastikan desain tetap ramping dan responsif." 
              },
              { 
                icon: Terminal, 
                title: "TypeScript", 
                desc: "Menjamin keamanan kode dan skalabilitas jangka panjang sistem." 
              },
            ].map((tech, i) => (
              <div key={i} className="p-12 bg-white dark:bg-[#020617] group hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
                <tech.icon className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" strokeWidth={1} />
                <h3 className="text-lg font-black uppercase tracking-tight dark:text-white mb-3">{tech.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed italic">
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