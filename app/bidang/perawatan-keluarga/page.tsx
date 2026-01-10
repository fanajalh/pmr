import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Heart, Stethoscope, ClipboardCheck, Thermometer, UserPlus } from "lucide-react"

export default function PerawatanKeluargaPage() {
  const steps = [
    { title: "Persiapan Alat", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Persiapan Pasien", icon: <UserPlus className="w-5 h-5" /> },
    { title: "Tindakan Tepat", icon: <Thermometer className="w-5 h-5" /> },
    { title: "Dokumentasi", icon: <ClipboardCheck className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-foreground">
      <Navigation />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/perawatan-keluarga.jpg"
            alt="Perawatan Keluarga"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />

          <div className="relative z-20 container mx-auto px-4 text-left text-white max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/90 backdrop-blur-md shadow-xl text-sm font-bold uppercase tracking-widest">
                <Home className="w-4 h-4" />
                Home Care Program
              </div>

              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                MERAWAT <br />
                <span className="text-red-500 underline decoration-white/20 underline-offset-8">KELUARGA</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-200 font-light max-w-xl italic border-l-4 border-red-500 pl-6">
                "Memberikan kenyamanan dan perawatan terbaik dengan kasih sayang di lingkungan rumah."
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTENT SECTION ================= */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* LEFT COLUMN: ABOUT & STEPS */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 uppercase">
                    Tentang <span className="text-red-600">PK</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Materi ini membekali anggota PMR dengan keterampilan praktis untuk merawat anggota keluarga yang sakit menggunakan 
                    peralatan sederhana tanpa mengabaikan standar kesehatan.
                  </p>
                </div>

                {/* Steps Horizontal List */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {steps.map((step, i) => (
                    <div key={i} className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-xl text-red-600">
                        {step.icon}
                      </div>
                      <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{step.title}</span>
                    </div>
                  ))}
                </div>

                <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
                  <Image
                    src="/images/perawatan-keluarga.jpg"
                    alt="Praktek PK"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: PRINCIPLES (STIKY) */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
                <Card className="bg-red-600 border-none rounded-[2.5rem] p-4 shadow-2xl shadow-red-500/20">
                  <CardHeader className="text-white">
                    <CardTitle className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                      <Heart className="fill-white" />
                      Prinsip Utama
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white group hover:bg-white hover:text-red-600 transition-all duration-500">
                      <h4 className="font-black text-xl mb-2">Kenyamanan Pasien</h4>
                      <p className="text-sm leading-relaxed opacity-90">
                        Menjamin keamanan dan kondisi psikologis pasien tetap terjaga selama proses perawatan berlangsung.
                      </p>
                    </div>

                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white group hover:bg-white hover:text-red-600 transition-all duration-500">
                      <h4 className="font-black text-xl mb-2">Sistem Dokumentasi</h4>
                      <p className="text-sm leading-relaxed opacity-90">
                        Pencatatan perkembangan pasien secara berkala untuk memudahkan konsultasi dengan tenaga medis profesional.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Small Tip Box */}
                <div className="p-8 bg-zinc-900 dark:bg-zinc-800 rounded-[2rem] text-zinc-400">
                  <p className="text-sm italic">
                    "Kunci dari Perawatan Keluarga bukan hanya pada obat, tapi pada kebersihan dan ketulusan sang perawat."
                  </p>
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