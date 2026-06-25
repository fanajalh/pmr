import React from "react";
import { CDN_IMAGES } from "@/lib/cdn-images";

const HeartHandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const ShieldUserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
  </svg>
);

export function AboutSection() {
  return (
    <section className="relative py-32 bg-background overflow-hidden font-sans border-b border-border/20">
      
      {/* Background Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-end mb-20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10 bg-primary" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Who We Are</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-none uppercase font-heading">
                Integritas <br />
                <span className="font-semibold text-primary not-italic">& Kemanusiaan</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed border-l border-primary/20 pl-6 italic">
              "Membentuk generasi relawan muda yang tidak hanya terampil dalam teknis kepalangmerahan, tetapi juga memiliki empati tinggi terhadap sesama."
            </p>
          </div>

          {/* Content Cards: Asymmetric Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Kartu 1: PMR (Kiri) */}
            <div className="lg:col-span-7 group">
              <div className="relative h-full p-10 md:p-12 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-2xl transition-all duration-500 hover:border-primary/20 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 text-primary border border-primary/20 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <HeartHandIcon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase font-heading">Palang Merah Remaja</h3>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      PMR adalah wadah bagi pelajar untuk mengasah <span className="text-primary font-medium">keterampilan pertolongan pertama</span>, kepemimpinan, dan edukasi kesehatan. Kami menyiapkan anggota menjadi relawan masa depan yang kompeten dan berjiwa sosial tinggi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu 2: SAF-C (Kanan) */}
            <div className="lg:col-span-5 group">
              <div className="relative h-full p-10 md:p-12 bg-slate-950 border border-white/5 rounded-2xl text-white transition-all duration-500 hover:border-primary/20 shadow-xl">
                <div className="space-y-8 relative z-10">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <ShieldUserIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight uppercase font-heading">Kontingen <br /> SAF-C WIRA</h3>
                    <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed italic">
                      Nama kebanggaan kami yang melambangkan kedisiplinan, keterampilan teknis tinggi, dan kepemimpinan berkarakter di SMKN 1 Purwokerto.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}