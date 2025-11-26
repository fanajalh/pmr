import { Target, ListChecks } from "lucide-react" // Lucide Icons untuk estetika

export function VisionMissionSection() {
  return (
    // Latar Belakang Dasar: Netral, siap untuk Dark/Light Mode
    <section className="relative py-20 md:py-28 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      
      {/* Efek Latar Belakang Geometris (Hanya muncul di belakang pilar) */}
      <div className="absolute inset-0 z-0">
        {/* Blob 1: Merah/Primary */}
        <div className="absolute w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl top-1/4 left-1/4 animate-blob dark:bg-primary/20"></div>
        {/* Blob 2: Biru/Aksen */}
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl bottom-1/3 right-1/4 animate-blob animation-delay-2000 dark:bg-blue-500/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Judul Utama */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-extrabold font-playfair mb-3 text-gray-900 dark:text-white leading-none drop-shadow-sm">
              Visi & Misi Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-source-sans">
              Landasan dan arah pergerakan PMR WIRA SMKN 1 Purwokerto
            </p>
          </div>

          {/* Grid Split Pillar (Glassmorphism & Border pada Dark Mode) */}
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl dark:shadow-black/40">
            
            {/* 1. Kolom Visi: Primary Accent */}
            <div className="p-10 lg:p-12 
              bg-white/90 dark:bg-black/20 
              backdrop-blur-sm dark:backdrop-blur-md 
              border-r border-gray-200 dark:border-white/10
              animate-fade-in transition-colors duration-300">
              <div className="space-y-6">
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  
                  {/* Angka Penanda Besar '01' */}
                  <div className="mb-4">
                    <span className="text-8xl lg:text-9xl font-extrabold opacity-5 dark:opacity-10 font-playfair leading-none text-gray-900 dark:text-white">01</span>
                  </div>
                  
                  <h3 className="text-3xl font-extrabold font-playfair mb-4 border-b-2 border-primary/50 pb-2 text-primary dark:text-primary/90">
                    Visi
                  </h3>
                  
                  {/* Konten Visi */}
                  <p className="text-lg leading-relaxed font-source-sans text-gray-700 dark:text-indigo-100/90">
                    Mewujudkan PMR Wira SMKN 1 Purwokerto sebagai ekstrakurikuler yang **aktif dan transformatif**,
                    sehingga dapat membawa perubahan yang lebih baik dengan tetap berlandaskan **7 Prinsip Dasar Palang Merah** dan **Tri Bakti PMR**.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Kolom Misi: Secondary Accent */}
            <div className="p-10 lg:p-12 
              bg-white/90 dark:bg-black/20 
              backdrop-blur-sm dark:backdrop-blur-md 
              animate-fade-in transition-colors duration-300">
              <div className="space-y-6">
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  
                  {/* Angka Penanda Besar '02' */}
                  <div className="mb-4">
                    <span className="text-8xl lg:text-9xl font-extrabold opacity-5 dark:opacity-10 font-playfair leading-none text-gray-900 dark:text-white">02</span>
                  </div>
                  
                  <h3 className="text-3xl font-extrabold font-playfair mb-4 border-b-2 border-blue-500/50 pb-2 text-blue-600 dark:text-blue-300">
                    Misi
                  </h3>
                  
                  {/* Konten Misi (Daftar yang Lebih Rapi) */}
                  <ol className="text-lg leading-relaxed space-y-4 list-decimal list-inside pl-4 font-source-sans text-gray-700 dark:text-indigo-100/90">
                    <li className="pl-2">
                      <span className="font-semibold text-gray-900 dark:text-white">Edukasi Kepalangmerahan:</span> Menjadikan anggota PMR yang dapat memberikan informasi dan edukasi kepalangmerahan kepada seluruh siswa.
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold text-gray-900 dark:text-white">Kolaborasi Tim:</span> Meningkatkan kinerja serta kerja sama sesama anggota PMR WIRA secara berkelanjutan.
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold text-gray-900 dark:text-white">Reputasi Positif:</span> Mewujudkan PMR Wira SMKN 1 Purwokerto sebagai ekstrakurikuler yang terpandang baik di sekolah maupun masyarakat.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}