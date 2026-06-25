import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { CDN_IMAGES } from "@/lib/cdn-images"

export function BidangSection() {
  const bidangItems = [
    { name: "Pertolongan Pertama", image: CDN_IMAGES.pertolonganPertama, description: "Keterampilan vital penanganan kegawatdaruratan medis dan cedera fisik.", href: "/bidang/pertolongan-pertama" },
    { name: "Pendidikan Remaja Sebaya", image: CDN_IMAGES.prs, description: "Membentuk konselor sebaya untuk isu kesehatan remaja dan sosial.", href: "/bidang/pendidikan-remaja" },
    { name: "Perawatan Keluarga", image: CDN_IMAGES.perawatanKeluarga, description: "Pengetahuan praktis merawat anggota keluarga yang sakit di rumah.", href: "/bidang/perawatan-keluarga" },
    { name: "Game Kepalangmerahan", image: CDN_IMAGES.kepalangmerahan, description: "Menanamkan 7 prinsip dasar melalui simulasi edukatif dan permainan kelompok.", href: "/bidang/kepalangmerahan" },
    { name: "Donor Darah Sukarela", image: CDN_IMAGES.donorDarah, description: "Edukasi dan sosialisasi pentingnya donor darah demi keselamatan sesama.", href: "/bidang/donor-darah" },
    { name: "Ayo Siaga Bencana", image: CDN_IMAGES.asb, description: "Edukasi kesiapsiagaan menghadapi kondisi darurat dan bencana alam.", href: "/bidang/asb" },
  ]

  return (
    <section className="py-32 bg-background font-sans overflow-hidden border-b border-border/20">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section: Editorial Style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-10 bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Core Pillars</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-none uppercase font-heading">
              Pilar <span className="font-semibold text-primary">Kegiatan</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-sm font-light leading-relaxed border-l border-primary/20 pl-6 italic">
            Enam fokus utama pengembangan karakter dan kompetensi teknis relawan Wira SMKN 1 Purwokerto.
          </p>
        </div>

        {/* Grid Kartu: Modern Minimalist (2 columns on mobile, 3 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {bidangItems.map((item, index) => (
            <Link key={item.name} href={item.href} className="group">
              <Card className="relative h-[240px] sm:h-[340px] md:h-[420px] overflow-hidden rounded-xl border border-border/40 dark:border-white/5 bg-card dark:bg-white/[0.01]">
                {/* Image Layer */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 dark:opacity-40 group-hover:opacity-80 dark:group-hover:opacity-60"
                />
                
                {/* Dark Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />
 
                {/* Content Layer */}
                <CardContent className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end text-white">
                  <div className="space-y-2 sm:space-y-4 translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    
                    {/* Index Number */}
                    <span className="text-3xl sm:text-6xl font-light opacity-10 select-none absolute top-2 right-4 sm:top-4 sm:right-8 font-heading">0{index + 1}</span>
                    
                    <h3 className="text-sm sm:text-2xl font-bold tracking-tight uppercase leading-tight group-hover:text-primary transition-colors font-heading">
                      {item.name}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
                      {item.description}
                    </p>
 
                    <div className="flex items-center gap-1 sm:gap-2 pt-1 sm:pt-2 text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-white transition-colors">
                      Learn More <ArrowUpRight className="w-3.5 h-3.5" />
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