/**
 * Icon untuk PMR (Tangan Memeluk Hati - Solid)
 */
const HeartHandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M11 5.372c-.172-.195-.4-.368-.65-.526C9.91 4.5 9 4 8 4a5 5 0 00-5 5c0 1.25.337 2.47 1.05 3.555L12 21l7.95-8.445C20.663 11.47 21 10.25 21 9a5 5 0 00-5-5c-1 0-1.91.5-2.35 1.022a3.003 3.003 0 01-1.65.526 3.003 3.003 0 01-1.65-.526zM12 21l-7.95-8.445C3.337 11.47 3 10.25 3 9a5 5 0 0110-3c.45.522.84 1.127 1.233 1.761a2 2 0 001.534.877c.54 0 1.057-.184 1.534-.877C18.16 7.127 18.55 6.522 19 6c0 0 0 0 0 0a5 5 0 01-5 5c0 1.25-.337 2.47-1.05 3.555L12 21z" clipRule="evenodd" />
  </svg>
);

/**
 * Icon untuk SAF-C (Perisai Pelindung - Solid)
 */
const ShieldUserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M12 1.5l8.75 4.375V18l-8.75 4.5-8.75-4.5V5.875L12 1.5zm-2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM12 15a6.5 6.5 0 00-6.5 6.5h13A6.5 6.5 0 0012 15z" clipRule="evenodd" />
  </svg>
);


// ---------- Komponen Utama ----------

export function AboutSection() {
  return (
    // Background lebih gelap, kontras lebih tinggi
    <section className="relative py-28 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      
      {/* Efek Latar Belakang Geometris (Blob Blur) - Warna diperkuat */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red-400/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-400/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Judul Utama: Text Shadow untuk penekanan */}
          <div className="text-center animate-slide-up relative z-20">
            <h2 className="text-6xl md:text-7xl font-extrabold font-playfair mb-5 text-gray-900 dark:text-white drop-shadow-lg leading-none">
              Integritas & Kemanusiaan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-source-sans tracking-wider mt-4">
              PMR WIRA: Membentuk Generasi Relawan Muda yang Tangguh dan Penuh Kepedulian.
            </p>
          </div>

          {/* Grid Konten (Kartu Glassmorphism yang Jelas) */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-20">
            
            {/* Kartu 1: Tentang PMR */}
            <div className="animate-fade-in p-10 border border-primary/30 bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl backdrop-blur-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out cursor-pointer group transform hover:-translate-y-1">
              <div className="flex flex-col items-start space-y-5">
                
                {/* ICON PMR: Heart Hand */}
                <div className="p-4 bg-primary text-white rounded-xl shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                  <HeartHandIcon className="w-8 h-8" />
                </div>
                
                {/* SUB-JUDUL: Lebih Berani, Keterbacaan Lebih Tinggi */}
                <h3 className="text-3xl font-extrabold font-playfair text-gray-900 dark:text-white leading-tight">
                  Palang Merah Remaja (PMR)
                </h3>
                
                {/* TEKS: Warna Jelas, Spasi Baris Lebih Rileks */}
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-source-sans mt-2">
                  PMR adalah platform bagi pelajar untuk aktif dalam kegiatan kemanusiaan, meliputi 
                  **Keterampilan Pertolongan Pertama**, **Edukasi Kesehatan Remaja**, dan inisiatif 
                  **Sosial Kemasyarakatan**. Kami menyiapkan anggota sebagai **Relawan Masa Depan** yang kompeten dan berjiwa sosial tinggi.
                </p>
              </div>
            </div>

            {/* Kartu 2: Tentang SAF-C */}
            <div className="animate-fade-in p-10 border border-secondary/30 bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl backdrop-blur-lg hover:shadow-secondary/50 transition-all duration-300 ease-in-out cursor-pointer group transform hover:-translate-y-1">
              <div className="flex flex-col items-start space-y-5">
                
                {/* ICON SAF-C: Shield User */}
                <div className="p-4 bg-secondary text-white rounded-xl shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                  <ShieldUserIcon className="w-8 h-8" />
                </div>

                {/* SUB-JUDUL: Lebih Berani, Keterbacaan Lebih Tinggi */}
                <h3 className="text-3xl font-extrabold font-playfair text-gray-900 dark:text-white leading-tight">
                  Kontingen SAF-C WIRA
                </h3>
                
                {/* TEKS: Warna Jelas, Spasi Baris Lebih Rileks */}
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-source-sans mt-2">
                  **Smecone Aiders Fans Club (SAF-C)** adalah nama kebanggaan kontingen kami. Fokusnya adalah pada 
                  **Kedisiplinan**, **Keterampilan Teknis**, dan **Public Speaking**. 
                  Kami adalah unit yang terlatih untuk tanggap darurat dan memimpin kegiatan amal, 
                  menciptakan lingkungan yang aman dan suportif di SMKN 1 Purwokerto.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}