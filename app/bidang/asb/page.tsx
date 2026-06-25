import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldAlert, Map, LifeBuoy, Zap } from "lucide-react"
import { CDN_IMAGES } from "@/lib/cdn-images"

export default function ASBPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100">
      <Navigation />

      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-100/30 dark:bg-slate-950/20 pt-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 select-none">
            <Image
              src={CDN_IMAGES.asb}
              alt="Tim PMR dalam simulasi bencana"
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
              <ShieldAlert className="w-3.5 h-3.5 text-primary" />
              Emergency Preparedness
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-slate-900 dark:text-white leading-none font-heading uppercase">
              Ayo Siaga <span className="font-semibold text-primary">Bencana</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Membentuk relawan kemanusiaan yang tanggap, cakap, dan siaga menghadapi risiko bencana di lingkungan sekolah.
            </p>
          </div>
        </section>

        {/* ================= CONTENT SECTION ================= */}
        <section className="py-32">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Split Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
              
              {/* Left Column: Text & Image */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-[1px] w-10 bg-primary" />
                    <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">About ASB</span>
                  </div>
                  <h2 className="text-4xl font-light tracking-tighter text-slate-900 dark:text-white leading-tight font-heading uppercase">
                    Membangun Ketangguhan <br/>Sejak Dini
                  </h2>
                  <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    “Ayo Siaga Bencana” adalah program komprehensif PMR Wira untuk melatih kesiapsiagaan dan mengurangi risiko bencana. Kami membekali anggota dengan kesadaran mitigasi, pemetaan risiko mandiri, dan kesiapan mental bertindak cepat saat keadaan darurat terjadi.
                  </p>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden border border-border/40 dark:border-white/5">
                  <Image
                    src={CDN_IMAGES.asb}
                    alt="Anggota PMR sedang berlatih"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Pilar Grid */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl font-light tracking-tighter text-slate-900 dark:text-white uppercase font-heading">
                    Pilar Kesiapsiagaan
                  </h3>
                  <p className="text-xs text-slate-400">Kerangka kerja standar dalam menghadapi kondisi darurat.</p>
                </div>

                {/* Card 1 */}
                <div className="p-6 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl flex gap-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-300 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <Map className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white font-heading">Identifikasi Ancaman</h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light mt-1">
                      Mengenali potensi bahaya di lingkungan sekitar dan menyusun peta risiko secara akurat.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl flex gap-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-300 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <LifeBuoy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white font-heading">Mitigasi & Pencegahan</h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light mt-1">
                      Langkah taktis meminimalkan dampak bencana serta meningkatkan ketahanan mandiri komunitas sekolah.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl flex gap-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-300 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white font-heading">Respon Cepat</h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light mt-1">
                      Penanganan awal yang taktis, tenang, dan efektif saat kondisi darurat untuk menyelamatkan jiwa.
                    </p>
                  </div>
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