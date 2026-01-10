import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export function BidangSection() {
  const bidangItems = [
    { name: "Pertolongan Pertama", image: "/images/pertolongan-pertama.png", description: "Keterampilan vital penanganan kegawatdaruratan dan cedera.", href: "/bidang/pertolongan-pertama" },
    { name: "Pendidikan Remaja Sebaya", image: "/images/prs.png", description: "Membentuk pendidik sebaya untuk isu kesehatan dan sosial.", href: "/bidang/pendidikan-remaja" },
    { name: "Perawatan Keluarga", image: "/images/perawatan-keluarga.jpg", description: "Pengetahuan dasar merawat anggota keluarga yang sakit di rumah.", href: "/bidang/perawatan-keluarga" },
    { name: "Game Kepalangmerahan", image: "/images/palangmerah.jpg", description: "Belajar prinsip-prinsip Palang Merah melalui simulasi dan permainan.", href: "/bidang/kepalangmerahan" },
    { name: "Donor Darah Sukarela", image: "/images/donor.jpg", description: "Sosialisasi pentingnya donor darah untuk kemanusiaan.", href: "/bidang/donor-darah" },
    { name: "Ayo Siaga Bencana", image: "/images/pertolongan-pertama.png", description: "Kesiapsiagaan menghadapi berbagai jenis bencana alam dan non-alam.", href: "/bidang/asb" },
  ]

  return (
    <section className="py-32 bg-white dark:bg-[#020617] font-poppins overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section: Editorial Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-10 bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Core Pillars</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter text-gray-900 dark:text-white leading-none uppercase italic">
              Pilar <span className="font-black not-italic text-primary">Kegiatan</span>
            </h2>
          </div>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-sm font-light leading-relaxed italic border-r-2 border-primary/20 pr-8 text-right">
            Enam fokus utama pengembangan karakter dan keterampilan teknis relawan Wira.
          </p>
        </div>

        {/* Grid Kartu: Modern Minimalist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {bidangItems.map((item, index) => (
            <Link key={item.name} href={item.href} className="group">
              <Card className="relative h-[450px] overflow-hidden rounded-[2.5rem] border-none shadow-none bg-gray-100 dark:bg-white/[0.02]">
                {/* Image Layer */}
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                
                {/* Dark Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Content Layer */}
                <CardContent className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="space-y-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    
                    {/* Index Number */}
                    <span className="text-5xl font-black opacity-10 italic absolute top-0 right-8">0{index + 1}</span>
                    
                    <h3 className="text-2xl font-bold tracking-tight uppercase leading-tight group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    
                    <p className="text-sm text-gray-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 pt-2 text-[10px] font-black tracking-[0.2em] uppercase text-white/50 group-hover:text-white transition-colors">
                      Learn More <ArrowUpRight className="w-4 h-4" />
                    </div>
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