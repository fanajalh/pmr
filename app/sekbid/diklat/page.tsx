import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react"
import { CDN_IMAGES } from "@/lib/cdn-images"

export default function DiklatPage() {
  const tasks = [
    "Membuat materi kepalangmerahan dan menyampaikannya secara interaktif kepada anggota.",
    "Mengkoordinasikan kegiatan latihan, simulasi lapangan, dan forum diskusi.",
    "Mengadakan simulasi ketangkasan penanganan korban kecelakaan atau bencana.",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100">
      <Navigation />
      
      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-100/30 dark:bg-slate-950/20 pt-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 select-none">
            <Image
              src={CDN_IMAGES.diklat}
              alt="Pendidikan dan Latihan"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60 dark:opacity-50 scale-100"
            />
            {/* Multi-layered Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
          </div>

          <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05] text-slate-800 dark:text-slate-300 text-xs font-medium tracking-wide mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-primary" />
              Internal Department
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-slate-900 dark:text-white leading-none font-heading uppercase">
              Sekbid <span className="font-semibold text-primary">DIKLAT</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Pendidikan dan Latihan. Wadah utama pengembangan kompetensi teknis medis, pengetahuan dasar, dan mental relawan.
            </p>
          </div>
        </section>

        {/* ================= CONTENT SECTION ================= */}
        <section className="py-32">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Split Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Tentang */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-10 bg-primary" />
                  <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Education</span>
                </div>
                
                <h2 className="text-4xl font-light tracking-tighter text-slate-900 dark:text-white leading-tight font-heading uppercase">
                  Mengembangkan Kompetensi Relawan
                </h2>
                
                <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  SEKBID DIKLAT (Seksi Bidang Pendidikan dan Latihan) bertanggung jawab penuh atas kurikulum pembelajaran, pelatihan fisik, koordinasi materi kepalangmerahan, dan simulasi penanganan pertama guna membentuk kesiapan operasional setiap anggota PMR Wira SMKN 1 Purwokerto.
                </p>
              </div>

              {/* Right Column: Tugas Grid */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="text-primary w-6 h-6" />
                  <h3 className="text-2xl font-light tracking-tighter text-slate-900 dark:text-white uppercase font-heading">
                    Tugas & Tanggung Jawab
                  </h3>
                </div>

                <div className="grid gap-4">
                  {tasks.map((task, index) => (
                    <div 
                      key={index} 
                      className="p-6 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl flex gap-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-300 shadow-sm"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                        {task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}