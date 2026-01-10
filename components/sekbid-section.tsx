"use client" // Wajib ada agar gaya CSS & interaksi hover terbaca

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function SekbidSection() {
  const sekbidItems = [
    { name: "UKS", image: "/images/uks.jpeg", href: "/sekbid/uks", description: "Unit Kesehatan Sekolah" },
    { name: "DIKLAT", image: "/images/diklat.jpeg", href: "/sekbid/diklat", description: "Pendidikan dan Latihan" },
    { name: "HUMAS", image: "/images/humas.jpeg", href: "/sekbid/humas", description: "Hubungan Masyarakat" },
    { name: "KREATIVITAS", image: "/images/kreativitas.jpeg", href: "/sekbid/kreativitas", description: "Bidang Kreativitas" },
    { name: "PERKAP", image: "/images/perkap.jpeg", href: "/sekbid/perkap", description: "Perlengkapan" },
  ]

  // Gandakan item agar loop tidak terputus
  const marqueeItems = [...sekbidItems, ...sekbidItems]

  return (
    <section className="py-24 bg-background overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase mb-4 text-foreground">
          Seksi <span className="text-primary not-italic">Bidang</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          Pilar operasional yang menjalankan roda organisasi PMR WIRA SMKN 1 Purwokerto.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Kontainer Marquee dengan class CSS kustom */}
        <div className="marquee-content flex py-4">
          {marqueeItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="px-4 shrink-0">
              <Link href={item.href}>
                <Card className="w-[240px] bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 group rounded-[2rem] overflow-hidden shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="relative w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-500 ease-out">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-full border-2 border-background shadow-md relative z-10"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="font-black text-lg tracking-tight uppercase group-hover:text-primary transition-colors text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] leading-none">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        {/* Gradasi Overlay Kiri & Kanan */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      {/* CSS Langsung di dalam file */}
      <style jsx>{`
        .marquee-content {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}