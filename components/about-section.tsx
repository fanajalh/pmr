import React from "react";

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
    <section className="relative py-32 bg-white dark:bg-[#020617] overflow-hidden font-poppins">
      
      {/* Background Decorative - Ramping & Halus */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -left-[5%] w-[20%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header: Tipografi Ramping & Bold */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10 bg-primary" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Who We Are</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter text-gray-900 dark:text-white leading-none uppercase italic">
                Integritas <br />
                <span className="font-black not-italic text-primary">& Kemanusiaan</span>
              </h2>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed border-l border-gray-200 dark:border-white/10 pl-8 italic">
              "Membentuk generasi relawan muda yang tidak hanya terampil dalam teknis, tetapi juga memiliki empati tinggi terhadap sesama."
            </p>
          </div>

          {/* Content Cards: Asymmetric Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Kartu 1: PMR (Kiri - Lebih Lebar) */}
            <div className="lg:col-span-7 group">
              <div className="relative h-full p-12 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                      <HeartHandIcon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">Palang Merah Remaja</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      PMR adalah wadah bagi pelajar untuk mengasah <span className="text-primary font-medium">Keterampilan Pertolongan Pertama</span> dan edukasi kesehatan. Kami menyiapkan anggota menjadi relawan masa depan yang kompeten dan berjiwa sosial tinggi.
                    </p>
                  </div>
                </div>
                {/* Background Decor */}
                <div className="absolute -bottom-12 -right-12 text-[12rem] font-black text-primary/[0.03] pointer-events-none tracking-tighter italic">PMR</div>
              </div>
            </div>

            {/* Kartu 2: SAF-C (Kanan - Lebih Ramping) */}
            <div className="lg:col-span-5 group">
              <div className="relative h-full p-12 bg-gray-900 dark:bg-primary text-white rounded-[3rem] border border-gray-800 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl">
                <div className="space-y-8 relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:-rotate-6 transition-transform">
                    <ShieldUserIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight uppercase">Kontingen <br /> SAF-C WIRA</h3>
                    <p className="text-md text-white/70 font-light leading-relaxed italic">
                      Nama kebanggaan kami yang melambangkan kedisiplinan, keterampilan teknis, dan kepemimpinan di SMKN 1 Purwokerto.
                    </p>
                  </div>
                </div>
                {/* Background Decor */}
                <div className="absolute -bottom-12 -right-12 text-[10rem] font-black text-white/[0.05] pointer-events-none tracking-tighter">SAF-C</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}