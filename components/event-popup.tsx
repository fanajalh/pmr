"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, ArrowRight, Bell, Sparkles } from "lucide-react"
import Image from "next/image"

export const EventPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Cek apakah sudah muncul di sesi ini
    const hasSeenPopup = sessionStorage.getItem("hasSeenEventPopup")
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1200) // Delay sedikit agar dramatis
      return () => clearTimeout(timer)
    }
  }, [])

  const closePopup = () => {
    setIsOpen(false)
    sessionStorage.setItem("hasSeenEventPopup", "true")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Background Overlay Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Container Iklan */}
          <motion.div 
            initial={{ scale: 0.7, opacity: 0, rotateX: 20 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateX: -20 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative w-full max-w-[420px] bg-[#0f172a] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(30,58,138,0.5)] border border-blue-500/30"
          >
            {/* Tombol Close Pojok Atas */}
            <button 
              onClick={closePopup}
              className="absolute top-5 right-5 z-30 w-10 h-10 bg-white/10 hover:bg-red-500/80 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all duration-300 group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>

            {/* Banner Atas */}
            <div className="relative h-[280px] w-full">
              <Image 
                src="/images/background.jpg" // PASTIKAN FILE ADA DI /public/event-banner.jpg
                alt="ML Style Event"
                fill
                className="object-cover"
              />
              {/* Efek Gradient ala Game */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/20" />
              
              {/* Badge "NEW EVENT" */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-yellow-500 text-black text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-sm skew-x-[-15deg] shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                <Sparkles className="w-3 h-3 fill-current" />
                Limited Event
              </div>
            </div>

            {/* Konten Detail */}
            <div className="p-8 pt-2 text-center">
              <div className="mb-6">
                <h3 className="text-3xl font-black text-white italic tracking-tighter Poppins uppercase italic">
                  Latihan Gabungan
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2 text-blue-400 font-bold text-sm tracking-widest">
                  <Calendar className="w-4 h-4 text-yellow-500" />
                  <span>20 FEB 2024 • SMKN 1 PURWOKERTO</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm font-light leading-relaxed Poppins mb-8 px-4">
                "Jadilah bagian dari aksi kemanusiaan terbesar tahun ini. Persiapkan fisik dan mentalmu!"
              </p>

              {/* Tombol Glow ala Mobile Legend */}
              <button 
                onClick={closePopup}
                className="relative w-full overflow-hidden group rounded-xl p-[2px]"
              >
                {/* Efek Cahaya Belakang Tombol */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 animate-gradient-x" />
                
                <div className="relative bg-[#1e3a8a] group-hover:bg-blue-800 py-4 rounded-[10px] flex items-center justify-center gap-3 transition-all">
                  <span className="text-white font-black tracking-[0.2em] uppercase text-sm">
                    OKe
                  </span>
                  <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
              
              <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest font-medium">
                Ketuk Oke untuk menutup
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}