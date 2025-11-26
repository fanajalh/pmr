import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function BidangSection() {
  const bidangItems = [
    {
      name: "Pertolongan Pertama",
      image: "/images/pertolongan-pertama.png",
      description: "Keterampilan vital penanganan kegawatdaruratan dan cedera.",
      href: "/bidang/pertolongan-pertama",
    },
    {
      name: "Pendidikan Remaja Sebaya",
      image: "/images/prs.png",
      description: "Membentuk pendidik sebaya untuk isu kesehatan dan sosial.",
      href: "/bidang/pendidikan-remaja",
    },
    {
      name: "Perawatan Keluarga",
      image: "/images/perawatan-keluarga.jpg",
      description: "Pengetahuan dasar merawat anggota keluarga yang sakit di rumah.",
      href: "/bidang/perawatan-keluarga",
    },
    {
      name: "Game Kepalangmerahan",
      image: "/images/palangmerah.jpg",
      description: "Belajar prinsip-prinsip Palang Merah melalui simulasi dan permainan.",
      href: "/bidang/kepalangmerahan",
    },
    {
      name: "Donor Darah Sukarela",
      image: "/images/donor.jpg",
      description: "Sosialisasi pentingnya donor darah untuk kemanusiaan.",
      href: "/bidang/donor-darah",
    },
    {
      name: "Ayo Siaga Bencana",
      image: "/images/pertolongan-pertama.png", // Menggunakan gambar yang sama sebagai placeholder
      description: "Kesiapsiagaan menghadapi berbagai jenis bencana alam dan non-alam.",
      href: "/bidang/asb",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        
        {/* Judul Utama */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-extrabold font-playfair mb-3 text-gray-900 dark:text-white leading-none">
            Pilar Kegiatan PMR WIRA
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-source-sans">
            Enam bidang utama yang menjadi fokus pengembangan keterampilan dan jiwa kemanusiaan anggota PMR WIRA.
          </p>
        </div>

        {/* Grid Kartu Gambar Baru */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bidangItems.map((item, index) => (
            <Link key={item.name} href={item.href} className="block h-full">
              {/* Card Style: Overflow hidden untuk efek zoom gambar, rounded besar, lift effect */}
              <Card className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 h-full">
                
                {/* 1. Area Gambar (Tinggi Tetap) */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`Gambar ${item.name}`}
                    // Menggunakan object-cover dan efek zoom pada hover
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* 2. Overlay Gradien (Untuk Keterbacaan Judul) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* 3. Judul di atas Gambar (Header) */}
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-extrabold text-white drop-shadow-md">
                      {item.name}
                    </h3>
                  </div>
                </div>
                
                {/* 4. Area Konten (Deskripsi) */}
                <CardContent className="p-6 flex flex-col justify-between">
                  {/* Deskripsi: Teks Pendukung */}
                  <p className="text-base text-gray-600 dark:text-gray-400 font-source-sans">
                    {item.description}
                  </p>
                  
                  {/* Link / CTA Kecil */}
                  <div className="mt-4 text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors flex items-center">
                    Lihat Detail 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}