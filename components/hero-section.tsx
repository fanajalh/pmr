"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"
import { CDN_IMAGES } from "@/lib/cdn-images"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[650px] max-h-[1000px] bg-slate-50/50 dark:bg-[#0c1a30] text-slate-900 dark:text-white overflow-hidden select-none">

      {/* Hero Image — full-width on mobile, right side on desktop */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-[1]">
        <Image
          src={CDN_IMAGES.heroBg}
          alt="PMR Wira kegiatan"
          fill
          className="object-cover opacity-30 lg:opacity-20 dark:opacity-40 lg:dark:opacity-100"
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        {/* Desktop Left fade */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent dark:from-[#0c1a30] dark:via-[#0c1a30]/80 dark:to-transparent z-10" />
        {/* Desktop Bottom fade */}
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-slate-50 to-transparent dark:from-[#0c1a30] dark:to-transparent z-10" />
        
        {/* Mobile Full screen overlay (soft overlay to keep text readable but keep background details visible) */}
        <div className="block lg:hidden absolute inset-0 bg-slate-50/70 dark:bg-[#0c1a30]/75 z-10" />
      </div>

      {/* Background Grid Pattern (premium subtle grid lines with no glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] z-[2] pointer-events-none opacity-60" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-20 pt-28 md:pt-36 pb-8 md:pb-12">

        {/* Hero Text */}
        <div className="flex-grow flex items-center">
          <div className="max-w-[600px] space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1] tracking-tight uppercase">
              <span className="text-slate-900 dark:text-white">SAF-C</span>
              <br />
              <span className="text-slate-500 dark:text-white/60">WIRA</span>
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-white/60 font-light max-w-xs leading-relaxed">
              Palang Merah Remaja SMKN 1 Purwokerto
            </p>

            <div className="flex gap-3">
              <Link
                href="#bulletin"
                className="bg-[#0c1a30] text-white hover:bg-[#0c1a30]/90 dark:bg-white dark:text-[#0c1a30] dark:hover:bg-white/90 px-5 sm:px-7 py-2.5 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full transition-colors active:scale-95 shrink-0"
              >
                Lihat Program
              </Link>
              <Link
                href="/kepengurusan"
                className="border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10 px-5 sm:px-7 py-2.5 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full transition-colors active:scale-95 shrink-0"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Floating card — displayed on mobile for layout balance */}
        <div className="absolute bottom-[20%] right-6 lg:bottom-[18%] lg:right-[10%] z-30 block">
          <div className="bg-white/70 dark:bg-white/[0.06] backdrop-blur-md border border-slate-200 dark:border-white/[0.08] rounded-2xl p-4 w-[170px] sm:w-[190px]">
            <p className="text-[10px] font-semibold text-slate-800 dark:text-white/80 leading-snug">Kami membentuk nilai,</p>
            <p className="text-[10px] text-slate-600 dark:text-white/60 leading-snug">bukan sekadar organisasi.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-end justify-between w-full">
          <div className="flex items-center gap-4 text-slate-400 dark:text-white/20">
            <Link href="https://www.instagram.com/pmrwirasmecone_/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 dark:hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="http://www.youtube.com/@pmrwirasmkn1purwokerto75" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 dark:hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Giant watermark */}
      <span className="absolute bottom-[-5%] right-[5%] text-[18vw] font-black uppercase text-slate-900/[0.03] dark:text-white/[0.03] leading-none tracking-wide z-[2] pointer-events-none select-none">
        SAF-C
      </span>

    </section>
  )
}