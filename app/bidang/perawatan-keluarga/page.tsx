import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Heart, Stethoscope, ClipboardCheck, Thermometer } from "lucide-react"
import { CDN_IMAGES } from "@/lib/cdn-images"

export default function PerawatanKeluargaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100">
      <Navigation />

      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-100/30 dark:bg-slate-950/20 pt-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 select-none">
            <Image
              src={CDN_IMAGES.perawatanKeluarga}
              alt="Perawatan Keluarga"
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
              <Home className="w-3.5 h-3.5 text-primary" />
              Home Care Program
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-slate-900 dark:text-white leading-none font-heading uppercase">
              Perawatan <span className="font-semibold text-primary">Keluarga</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Memberikan kenyamanan dan perawatan terbaik dengan kasih sayang di lingkungan rumah menggunakan peralatan sederhana.
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
                    <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">About PK</span>
                  </div>
                  <h2 className="text-4xl font-light tracking-tighter text-slate-900 dark:text-white leading-tight font-heading uppercase">
                    Ketulusan dalam Merawat
                  </h2>
                  <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    Materi Perawatan Keluarga (PK) membekali anggota PMR dengan keterampilan medis praktis non-klinis untuk merawat anggota keluarga yang terbaring sakit di rumah. Kami melatih standar sanitasi, pengukuran tanda vital pasien, pemenuhan nutrisi, dan pencatatan perkembangan harian pasien secara terukur.
                  </p>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden border border-border/40 dark:border-white/5">
                  <Image
                    src={CDN_IMAGES.perawatanKeluarga}
                    alt="Praktek PK"
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
                    Prinsip Utama PK
                  </h3>
                  <p className="text-xs text-slate-400">Pilar dasar dalam proses pelayanan perawatan pasien di rumah.</p>
                </div>

                {/* Card 1 */}
                <div className="p-6 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl flex gap-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-300 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white font-heading">Kenyamanan Pasien</h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light mt-1">
                      Menjamin keamanan fisik, kebersihan tubuh, dan stabilitas kondisi psikologis pasien di tempat tidur.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl flex gap-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-300 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <ClipboardCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white font-heading">Dokumentasi Harian</h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light mt-1">
                      Pencatatan perkembangan harian pasien (suhu tubuh, denyut nadi, asupan makanan) secara berkala dan terperinci.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-xl flex gap-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-300 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <Thermometer className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white font-heading">Tindakan Tepat</h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light mt-1">
                      Melakukan tindakan penanganan sederhana secara sigap, steril, dan aman demi mempercepat pemulihan pasien.
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