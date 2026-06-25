import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ClipboardList, ShoppingBag, ShieldCheck, Box } from "lucide-react"
import { CDN_IMAGES } from "@/lib/cdn-images"

export default function PerkapPage() {
  const tasks = [
    {
      text: "Membuat ataupun membeli barang/alat medis & konsumsi yang diperlukan dalam acara PMR.",
      icon: <ShoppingBag className="w-5 h-5 text-primary" />,
      tag: "Procurement"
    },
    {
      text: "Mendata seluruh inventaris perlengkapan secara tertata dan mengupayakan pengadaannya.",
      icon: <ClipboardList className="w-5 h-5 text-primary" />,
      tag: "Inventory"
    },
    {
      text: "Bertanggung jawab atas perawatan, penyimpanan, dan pengembalian perlengkapan acara.",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      tag: "Maintenance"
    },
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
              src={CDN_IMAGES.perkap}
              alt="Perlengkapan"
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
              <Box className="w-3.5 h-3.5 text-primary" />
              Logistics & Operations
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-slate-900 dark:text-white leading-none font-heading uppercase">
              Sekbid <span className="font-semibold text-primary">PERKAP</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Perlengkapan. Penanggung jawab logistik, operasional barang, dan inventarisasi aset yang menjamin kelancaran setiap program PMR.
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
                  <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Logistics</span>
                </div>
                
                <h2 className="text-4xl font-light tracking-tighter text-slate-900 dark:text-white leading-tight font-heading uppercase">
                  Manajemen Aset Operasional
                </h2>
                
                <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  SEKBID PERKAP (Seksi Bidang Perlengkapan) bertugas mengelola seluruh aset fisik kepalangmerahan, tenda darurat, obat-obatan, dan logistik acara. Kami merencanakan pengadaan barang, menjaga kelayakan pakai peralatan, serta mengoordinasikan distribusi logistik secara rapi.
                </p>
              </div>

              {/* Right Column: Tugas Grid */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <ClipboardList className="text-primary w-6 h-6" />
                  <h3 className="text-2xl font-light tracking-tighter text-slate-900 dark:text-white uppercase font-heading">
                    Manajemen & Tugas
                  </h3>
                </div>

                <div className="grid gap-4">
                  {tasks.map((task, index) => (
                    <div 
                      key={index} 
                      className="p-6 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl flex gap-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-300 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                        {task.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary">{task.tag}</span>
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