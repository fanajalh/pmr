import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    // Mengubah min-h-[80vh] menjadi h-screen untuk tampilan penuh (Full Viewport Height)
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Menggunakan object-cover untuk memastikan gambar menutupi seluruh area */}
        <Image 
          src="/images/background.jpg" 
          alt="PMR WIRA Group Photo" 
          fill 
          className="object-cover" 
          priority 
        />
        {/* Overlay - Menggunakan yang asli: bg-primary/60 */}
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Menambahkan padding vertikal di sini untuk memastikan konten terlihat baik 
            meskipun menggunakan h-screen, terutama di layar yang lebih kecil */}
        <div className="py-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">SAF-C</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold">BULETIN BOARD</span> — Berita, program kerja, dan pengumuman PMR Wira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="#bulletin">Lihat Program</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/kepengurusan">Tentang Kami</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}