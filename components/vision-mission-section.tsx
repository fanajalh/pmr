import { Target, ListChecks, ArrowRight, ShieldCheck, HeartPulse } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-[#030712] overflow-hidden">
      
      {/* 1. Background Elements - Soft Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 dark:from-primary/10 to-transparent opacity-50" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* 2. Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <ShieldCheck className="w-4 h-4" /> Foundation
              </div>
              <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter text-gray-900 dark:text-white leading-none uppercase italic">
                Visi & <span className="font-black not-italic text-primary">Misi</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-sm font-light italic leading-snug">
              "Menjadi garda terdepan kemanusiaan di lingkungan sekolah dan masyarakat."
            </p>
          </div>

          {/* 3. Visi & Misi Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* --- VISI (Kiri) --- */}
            <div className="lg:col-span-5 group">
              <div className="h-full p-10 md:p-14 bg-gray-50 dark:bg-white/[0.03] rounded-[3rem] border border-gray-100 dark:border-white/5 transition-all duration-500 hover:border-primary/30 relative overflow-hidden">
                {/* Huge Background Number */}
                <span className="absolute -top-10 -right-10 text-[15rem] font-black text-primary/5 dark:text-primary/[0.02] leading-none pointer-events-none">01</span>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-primary/20 rotate-3 group-hover:rotate-6 transition-transform">
                    <Target className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-6 text-gray-900 dark:text-white">Visi Utama</h3>
                  <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-700 dark:text-gray-300 italic">
                    Mewujudkan PMR Wira SMKN 1 Purwokerto sebagai ekstrakurikuler yang <span className="text-primary font-black">aktif dan transformatif</span>, berlandaskan 7 Prinsip Dasar Palang Merah.
                  </p>
                </div>
              </div>
            </div>

            {/* --- MISI (Kanan) --- */}
            <div className="lg:col-span-7 group">
              <div className="h-full p-10 md:p-14 bg-gray-900 dark:bg-white/[0.05] rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                 {/* Huge Background Number */}
                 <span className="absolute -top-10 -right-10 text-[15rem] font-black text-white/[0.03] leading-none pointer-events-none">02</span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white text-gray-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl -rotate-3 group-hover:-rotate-6 transition-transform">
                    <ListChecks className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl font-black uppercase tracking-tight mb-8">Misi Strategis</h3>
                  
                  <div className="space-y-8">
                    {[
                      { 
                        title: "Edukasi Kepalangmerahan", 
                        desc: "Menjadi pusat informasi dan edukasi kesehatan bagi seluruh siswa.",
                        icon: HeartPulse
                      },
                      { 
                        title: "Kolaborasi Tim", 
                        desc: "Meningkatkan sinergi dan profesionalitas antar anggota secara berkelanjutan.",
                        icon: UsersIcon 
                      },
                      { 
                        title: "Reputasi Positif", 
                        desc: "Membangun citra organisasi yang inspiratif di mata sekolah dan masyarakat.",
                        icon: ShieldCheck
                      },
                    ].map((misi, i) => (
                      <div key={i} className="flex gap-5 group/item">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-bold group-hover/item:bg-primary group-hover/item:border-primary transition-all">
                          {i + 1}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-bold uppercase tracking-wide">{misi.title}</h4>
                          <p className="text-white/60 font-light leading-relaxed">{misi.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

// Helper Icon for Mapping
function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}