import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { HeartPulse, ClipboardCheck, Sparkles, Activity, CheckCircle2 } from "lucide-react"
import { CDN_IMAGES } from "@/lib/cdn-images"

export default function UKSPage() {
  const tasks = [
    {
      text: "Mengelola daftar piket layanan kesehatan UKS harian.",
      icon: <ClipboardCheck className="w-5 h-5 text-primary" />,
      category: "Scheduling"
    },
    {
      text: "Menjaga sterilisasi alat medis, kebersihan ruangan, dan stok obat UKS.",
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      category: "Sanitation"
    },
    {
      text: "Menyusun dan menugaskan petugas pertolongan pertama saat upacara atau kegiatan besar sekolah.",
      icon: <Activity className="w-5 h-5 text-primary" />,
      category: "Field Duty"
    }
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
              src={CDN_IMAGES.uks}
              alt="Unit Kesehatan Sekolah"
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
              <HeartPulse className="w-3.5 h-3.5 text-primary" />
              School Healthcare
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-slate-900 dark:text-white leading-none font-heading uppercase">
              Sekbid <span className="font-semibold text-primary">UKS</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Unit Kesehatan Sekolah. Pusat pelayanan medis pertama bagi seluruh civitas akademika di SMKN 1 Purwokerto.
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
                  <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Healthcare</span>
                </div>
                
                <h2 className="text-4xl font-light tracking-tighter text-slate-900 dark:text-white leading-tight font-heading uppercase">
                  Layanan Kesehatan & Sanitasi
                </h2>
                
                <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  SEKBID UKS (Seksi Bidang Usaha Kesehatan Sekolah) bertanggung jawab penuh menjaga fasilitas penanganan pasien darurat sekolah. Kami merancang jadwal piket harian anggota, memastikan kebersihan fasilitas rawat sementara, mengawasi ketersediaan obat-obatan P3K, serta sigap memberikan tindakan penanganan cedera ringan bagi siswa.
                </p>
              </div>

              {/* Right Column: Tugas Grid */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <h3 className="text-2xl font-light tracking-tighter text-slate-900 dark:text-white uppercase font-heading">
                    Manajemen & Layanan UKS
                  </h3>
                </div>

                <div className="grid gap-4">
                  {tasks.map((task, index) => (
                    <div 
                      key={index} 
                      className="p-6 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl flex gap-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-300 animate-fade-in shadow-sm"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                        {task.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary">{task.category}</span>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mt-1">
                          {task.text}
                        </p>
                      </div>
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