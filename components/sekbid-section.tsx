"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CDN_IMAGES } from "@/lib/cdn-images"

export function SekbidSection() {
  const sekbidItems = [
    { name: "UKS", image: "/images/uks.jpeg", href: "/sekbid/uks", description: "Unit Kesehatan Sekolah" },
    { name: "DIKLAT", image: "/images/diklat.jpeg", href: "/sekbid/diklat", description: "Pendidikan dan Latihan" },
    { name: "HUMAS", image: "/images/humas.jpeg", href: "/sekbid/humas", description: "Hubungan Masyarakat" },
    { name: "KREATIVITAS", image: "/images/kreativitas.jpeg", href: "/sekbid/kreativitas", description: "Bidang Kreativitas" },
    { name: "PERKAP", image: "/images/perkap.jpeg", href: "/sekbid/perkap", description: "Perlengkapan" },
    { name: "SEDAN", image: CDN_IMAGES.sedan, href: "/sekbid/sedan", description: "SAF - C usaha dana" },
  ]

  const marqueeItems = [...sekbidItems, ...sekbidItems]

  return (
    <section className="py-24 bg-background overflow-hidden border-b border-border/20">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-4 text-slate-900 dark:text-white font-heading">
          Seksi <span className="text-primary font-semibold">Bidang</span>
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Pilar operasional yang menjalankan roda kepengurusan organisasi PMR WIRA SMKN 1 Purwokerto secara sistematis.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Marquee Content */}
        <div className="marquee-content flex py-4 select-none">
          {marqueeItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="px-4 shrink-0">
              <Link href={item.href}>
                <Card className="w-[260px] bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 hover:border-primary/20 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all duration-500 group rounded-xl overflow-hidden shadow-none">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="relative w-20 h-20 mx-auto group-hover:scale-105 transition-transform duration-500 ease-out">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        loading="lazy"
                        className="object-cover rounded-full border border-border/40"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg tracking-tight uppercase group-hover:text-primary transition-colors text-slate-900 dark:text-white font-heading">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.1em] leading-none">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        {/* Gradient Overlay left & right */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      <style jsx>{`
        .marquee-content {
          display: flex;
          width: fit-content;
          animation: marquee 35s linear infinite;
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