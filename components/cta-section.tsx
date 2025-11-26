import { Button } from "@/components/ui/button"
import { Youtube, Instagram, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CallToActionSection() {
  return (
    // Latar Belakang Gradien Multi-warna yang lebih cerah
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-indigo-600 via-primary to-red-600 text-white overflow-hidden">
      
      {/* Latar Belakang Gradien Radial (memberikan kedalaman) - Warna disesuaikan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-pink-400/20 rounded-full mix-blend-overlay blur-2xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-overlay blur-2xl bottom-1/3 right-1/3 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Teks dan Tombol CTA */}
          <div className="text-center md:text-left animate-slide-in-left max-w-lg md:max-w-none mx-auto">
            {/* Ikon penarik perhatian */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/30 rounded-full mb-6 text-white shadow-xl">
              <ArrowRight className="h-8 w-8 animate-pulse-fast" />
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold font-playfair mb-4 leading-tight drop-shadow-lg">
              Ayo Berkontribusi & Bersinar Bersama PMR WIRA
            </h2>
            <p className="text-xl mb-8 opacity-90 font-source-sans leading-relaxed">
              Jangan lewatkan momen seru dan informasi terbaru dari PMR WIRA SMKN 1 Purwokerto. Ikuti kami di media sosial favoritmu!
            </p>

            {/* Tombol CTA: Warna disesuaikan dengan Brand Media Sosial */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              {/* Tombol YouTube (Aksen Merah Solid) */}
              <Button asChild size="lg" className="group bg-red-600 hover:bg-red-700 text-white shadow-xl transition duration-300">
                <Link href="http://www.youtube.com/@pmrwirasmkn1purwokerto75" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  YouTube Channel
                </Link>
              </Button>
              
              {/* Tombol Instagram (Aksen Ungu Gradien) */}
              <Button
                asChild
                size="lg"
                variant="outline"
                // Menggunakan gradien yang menyerupai warna Instagram pada hover
                className="border-white text-white hover:border-transparent hover:text-white group bg-transparent shadow-xl transition duration-300 relative overflow-hidden"
              >
                <Link href="https://www.instagram.com/pmrwirasmecone_/" target="_blank" rel="noopener noreferrer">
                    {/* Efek gradien saat hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="flex items-center relative z-10">
                        <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Instagram Feed
                    </span>
                </Link>
              </Button>
            </div>

            <div className="text-sm opacity-80 font-source-sans">
              <p>Jadilah bagian dari semangat kemanusiaan kami dan wujudkan aksi nyata!</p>
            </div>
          </div>

          {/* Kolom Kanan: Ilustrasi Smartphone (Bingkai lebih kontras) */}
          <div className="relative flex justify-center items-center h-full animate-fade-in-up">
            <div className="relative w-72 h-[450px] bg-gray-950 rounded-[2.5rem] shadow-4xl border-8 border-gray-700 flex items-center justify-center overflow-hidden">
              {/* Layar Smartphone (Placeholder dengan latar belakang gradien Instagram) */}
              <div className="absolute inset-0.5 rounded-[2rem] bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 opacity-60 animate-pulse-slow"></div>
              
              <div className="absolute inset-0.5 rounded-[2rem] flex flex-col items-center justify-center text-center p-4 backdrop-blur-sm">
                <Instagram className="w-16 h-16 text-white/90 mb-4 drop-shadow-md" />
                <p className="text-white/90 text-xl font-semibold drop-shadow-md">@pmrwirasmecone_</p>
                <p className="text-white/70 text-sm mt-1">Lihat kegiatan kami!</p>
                <Link href="https://www.instagram.com/pmrwirasmecone_/" target="_blank" rel="noopener noreferrer" className="mt-4 px-5 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition shadow-lg">Kunjungi Profil</Link>
              </div>

              {/* Tombol fisik di samping */}
              <div className="absolute w-1.5 h-10 bg-gray-600 rounded-r-sm top-20 -right-2"></div>
              <div className="absolute w-1.5 h-16 bg-gray-600 rounded-r-sm top-36 -right-2"></div>
              <div className="absolute w-1.5 h-10 bg-gray-600 rounded-l-sm top-28 -left-2"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}