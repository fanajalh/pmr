"use client"

import Link from "next/link"
import { Youtube, Instagram, MapPin } from "lucide-react"
import Image from "next/image"
import { CDN_IMAGES } from "@/lib/cdn-images"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-white/5 font-sans">
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
                <Image 
                  src={CDN_IMAGES.logo} 
                  alt="PMR WIRA Logo" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-[0.2em] uppercase text-white">
                  PMR WIRA
                </h3>
                <p className="text-white/40 text-[10px] tracking-widest uppercase">SMKN 1 Purwokerto</p>
              </div>
            </div>
            
            <p className="text-white/60 font-light leading-relaxed max-w-sm text-sm">
              Palang Merah Remaja WIRA SMKN 1 Purwokerto - Wadah pengembangan jiwa kemanusiaan, empati sosial, kesukarelaan, dan ketangkasan pertolongan pertama relawan muda.
            </p>

            <div className="flex items-center space-x-3 text-white/50 text-xs font-light max-w-sm">
              <MapPin className="h-5 w-5 text-primary/70 shrink-0" />
              <span>
                Jl. Dr. Soeparno No.1, Kec. Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah 53116
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white border-b border-white/10 pb-3">Navigasi</h4>
            <div className="space-y-3">
              <Link
                href="/kepengurusan"
                className="block text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-light"
              >
                Kepengurusan
              </Link>
              <Link
                href="/program-kerja"
                className="block text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-light"
              >
                Program Kerja
              </Link>
              <Link
                href="/bidang/pertolongan-pertama"
                className="block text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-light"
              >
                Pertolongan Pertama
              </Link>
              <Link
                href="/bidang/donor-darah"
                className="block text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-light"
              >
                Donor Darah
              </Link>
              <Link
                href="/sekbid/uks"
                className="block text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 font-light"
              >
                Unit Kesehatan Sekolah
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white border-b border-white/10 pb-3">Ikuti Kami</h4>
            <div className="space-y-4">
              <Link
                href="http://www.youtube.com/@pmrwirasmkn1purwokerto75"
                className="flex items-center space-x-3 text-white/60 hover:text-white group transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all">
                  <Youtube className="h-4 w-4 text-white/70 group-hover:text-red-400 transition-colors" />
                </div>
                <span className="text-sm font-light group-hover:translate-x-1 transition-transform">YouTube</span>
              </Link>
              <Link
                href="https://www.instagram.com/pmrwirasmecone_/"
                className="flex items-center space-x-3 text-white/60 hover:text-white group transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-pink-500/20 group-hover:border-pink-500/30 transition-all">
                  <Instagram className="h-4 w-4 text-white/70 group-hover:text-pink-400 transition-colors" />
                </div>
                <span className="text-sm font-light group-hover:translate-x-1 transition-transform">Instagram</span>
              </Link>
            </div>

            <div className="pt-4 mt-6 border-t border-white/5">
              <p className="text-[11px] text-white/40 uppercase tracking-widest font-bold mb-3">Pendaftaran</p>
              <Link
                href="https://forms.gle/H5FGhYbxy6s1x5hW9"
                target="_blank"
                className="inline-flex justify-center items-center w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-95"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-white/40 font-light">
          <p>© 2026 PMR WIRA SMKN 1 Purwokerto. Semua hak dilindungi.</p>
          <div className="flex items-center space-x-2">
            <span>Dibuat dengan ❤️ untuk kemanusiaan</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
