"use client"

import Link from "next/link"
import { Youtube, Instagram, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Image src="/images/logo.png" alt="PMR WIRA Logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  PMR WIRA
                </h3>
                <p className="text-gray-400 text-sm">SMKN 1 Purwokerto</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Palang Merah Remaja WIRA SMKN 1 Purwokerto - Ekstrakurikuler kemanusiaan untuk mengembangkan jiwa sosial,
              kepedulian, dan keterampilan pertolongan pertama siswa.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="hidden md:flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm">
                  Jl. Dr. Soeparno No.1, Kec. Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah 53116
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">Navigasi</h4>
            <div className="space-y-3">
              <Link
                href="/kepengurusan"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                Kepengurusan
              </Link>
              <Link
                href="/program-kerja"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                Program Kerja
              </Link>
              <Link
                href="/bidang/pertolongan-pertama"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                Pertolongan Pertama
              </Link>
              <Link
                href="/bidang/donor-darah"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                Donor Darah
              </Link>
              <Link
                href="/sekbid/uks"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                Unit Kesehatan Sekolah
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">Ikuti Kami</h4>
            <div className="space-y-4">
              <Link
                href="http://www.youtube.com/@pmrwirasmkn1purwokerto75"
                className="flex items-center space-x-3 text-gray-300 hover:text-white group transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                  <Youtube className="h-5 w-5 text-red-400" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">YouTube</span>
              </Link>
              <Link
                href="https://www.instagram.com/pmrwirasmecone_/"
                className="flex items-center space-x-3 text-gray-300 hover:text-white group transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                  <Instagram className="h-5 w-5 text-pink-400" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Instagram</span>
              </Link>
            </div>

            <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-300 mb-2">Tertarik bergabung?</p>
              <Link
                href="https://forms.gle/H5FGhYbxy6s1x5hW9"
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 PMR WIRA SMKN 1 Purwokerto. Semua hak dilindungi.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Dibuat dengan ❤️ untuk kemanusiaan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
