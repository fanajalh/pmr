"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Activity, Shield, Users, Calendar, Droplets, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-black font-poppins">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/background.jpg" 
          alt="PMR WIRA" 
          fill 
          className="object-cover opacity-50 scale-105 animate-slow-zoom" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* --- KOLOM KIRI: Konten Utama --- */}
        <div className="space-y-10 animate-fade-in-left">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-xs font-medium tracking-[0.5em] text-primary uppercase">
              Official Bulletin Board
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter text-white leading-none">
              SAF<span className="font-bold text-primary">-</span>C
            </h1>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight text-gray-300">
              Palang Merah Remaja <span className="font-medium text-white">Wira</span>
            </h2>
          </div>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed font-light italic border-l-2 border-primary/30 pl-6">
            Menyatukan kemanusiaan, ketangkasan, dan kepedulian dalam satu platform informasi digital SMKN 1 Purwokerto.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 transition-all">
              <Link href="#bulletin" className="flex items-center gap-2 font-semibold tracking-wide uppercase text-xs">
                Lihat Program <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent px-8 h-14 backdrop-blur-sm transition-all text-xs font-semibold uppercase tracking-wide"
            >
              <Link href="/kepengurusan">Tentang Kami</Link>
            </Button>
          </div>
        </div>

        {/* --- KOLOM KANAN: Visual Balance (5 Elements) --- */}
        <div className="hidden lg:flex relative h-[600px] justify-center items-center animate-fade-in-right">
          
          {/* 1. Stats Card (Users) */}
          <div className="absolute top-10 right-10 p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl w-56 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl z-20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-xl"><Users className="text-primary w-5 h-5" /></div>
              <div>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Anggota</p>
                <p className="text-lg font-bold text-white">100+ Aktif</p>
              </div>
            </div>
          </div>

          {/* 2. Mission Card (Shield) */}
          <div className="absolute bottom-10 left-0 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] w-64 -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-2xl z-20">
             <Shield className="text-primary w-8 h-8 mb-3" />
             <p className="text-sm font-light text-gray-300 leading-relaxed italic">
                Berdedikasi pada <span className="text-white font-bold">7 Prinsip</span> Palang Merah.
             </p>
          </div>

          {/* 3. NEW: Upcoming Event (Calendar) */}
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl w-52 rotate-6 hover:rotate-0 transition-all duration-500 z-10 opacity-80">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-blue-400 w-4 h-4" />
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">Event Terdekat</p>
            </div>
            <p className="text-sm font-semibold text-white">LATGAB</p>
            <p className="text-[10px] text-gray-400 mt-1">14 Feb 2026 • SMKN 1</p>
          </div>

          {/* 4. NEW: Pulse Activity (Heart Rate) */}
          <div className="absolute top-0 left-20 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl w-40 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <Activity className="text-red-500 w-6 h-6 animate-pulse" />
            <div className="h-8 w-full bg-[url('https://www.svgrepo.com/show/444703/heart-rate.svg')] bg-repeat-x opacity-30 invert" />
            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest text-center">Live Activity</p>
          </div>

          {/* 5. NEW: Blood Info (Droplets) */}
          <div className="absolute bottom-32 right-12 p-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center gap-2 animate-bounce-slow opacity-80">
            <Droplets className="text-primary w-4 h-4" />
            <span className="text-[10px] font-black text-white uppercase">Siaga Kemanusiaan</span>
          </div>

          {/* Background Decorative Shapes */}
          <div className="w-[450px] h-[450px] border border-white/5 rounded-full absolute animate-spin-slow pointer-events-none" />
          <div className="w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] absolute pointer-events-none" />
        </div>

      </div>

      <style jsx global>{`
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        
        .animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite alternate; }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        
        .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 1.2s ease-out forwards; }

        @keyframes fade-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </section>
  )
}