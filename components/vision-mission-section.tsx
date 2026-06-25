import { Target, ListChecks, HeartPulse } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="relative py-32 bg-background overflow-hidden border-b border-border/20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 dark:from-primary/10 to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10 bg-primary" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Foundation</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-none uppercase font-heading">
                Visi & <span className="font-semibold text-primary">Misi</span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-sm font-light leading-relaxed border-l border-primary/20 pl-6 italic">
              "Menjadi organisasi kepalangmerahan yang unggul, responsif, dan berkarakter kemanusiaan di sekolah maupun masyarakat."
            </p>
          </div>

          {/* Visi & Misi Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* --- VISI (Kiri) --- */}
            <div className="lg:col-span-5 group">
              <div className="h-full p-10 md:p-12 bg-card dark:bg-white/[0.01] rounded-2xl border border-border/40 dark:border-white/5 transition-all duration-500 hover:border-primary/20 relative overflow-hidden shadow-sm">
                {/* Huge Background Number */}
                <span className="absolute -top-6 -right-6 text-[10rem] font-bold text-primary/5 select-none font-heading leading-none">01</span>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 bg-primary/10 text-primary border border-primary/20 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-105">
                      <Target className="w-5 h-5" />
                    </div>
                    
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 text-slate-900 dark:text-white font-heading">Visi Utama</h3>
                    <p className="text-lg md:text-xl leading-relaxed font-light text-slate-600 dark:text-slate-300 italic">
                      Mewujudkan PMR Wira SMKN 1 Purwokerto sebagai ekstrakurikuler yang <span className="text-primary font-medium">aktif, tanggap, dan transformatif</span>, berlandaskan 7 Prinsip Dasar Kepalangmerahan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- MISI (Kanan) --- */}
            <div className="lg:col-span-7 group">
              <div className="h-full p-10 md:p-12 bg-slate-950 border border-white/5 rounded-2xl text-white relative overflow-hidden transition-all duration-500 hover:border-primary/20 shadow-xl">
                 {/* Huge Background Number */}
                 <span className="absolute -top-6 -right-6 text-[10rem] font-bold text-white/[0.02] select-none font-heading leading-none">02</span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-105">
                    <ListChecks className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 font-heading">Misi Strategis</h3>
                  
                  <div className="space-y-8">
                    {[
                      { 
                        title: "Edukasi Kepalangmerahan", 
                        desc: "Menyelenggarakan pelatihan dan edukasi pertolongan pertama secara berkala untuk seluruh anggota.",
                        icon: HeartPulse
                      },
                      { 
                        title: "Kolaborasi Tim", 
                        desc: "Meningkatkan solidaritas, profesionalitas manajemen, dan kedisiplinan kerja organisasi secara berkelanjutan.",
                        icon: UsersIcon 
                      },
                      { 
                        title: "Aksi Nyata Kemanusiaan", 
                        desc: "Berperan aktif dalam kegiatan sosial, siaga bencana, dan layanan kesehatan sekolah untuk reputasi positif.",
                        icon: Target
                      },
                    ].map((misi, i) => (
                      <div key={i} className="flex gap-5 group/item">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold transition-all group-hover/item:border-primary group-hover/item:text-primary">
                          {i + 1}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-base font-bold uppercase tracking-wide text-white">{misi.title}</h4>
                          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">{misi.desc}</p>
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

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}