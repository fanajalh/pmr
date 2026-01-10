import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, HeartPulse, LifeBuoy, ShieldAlert, Map, Zap } from "lucide-react"

export default function ASBPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-zinc-950 text-foreground overflow-x-hidden">
      <Navigation />

      <main className="flex-grow">
        {/* ================= HERO SECTION (IMERSIVE) ================= */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image dengan Zoom Effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/background.jpg"
              alt="Tim PMR dalam simulasi bencana"
              fill
              priority
              className="object-cover object-center scale-110 animate-[ken-burns_20s_ease_infinite]"
            />
            {/* Multi-layered Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-zinc-950" />
          </div>

          <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 backdrop-blur-md text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
              <ShieldAlert className="w-4 h-4" />
              Emergency Preparedness
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl leading-[1.1]">
              Ayo Siaga <span className="text-red-500">Bencana</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
              Kesiapsiagaan dan Mitigasi Risiko untuk Komunitas <span className="text-white font-medium italic">PMR Wira</span>
            </p>
          </div>
          
          {/* Decorative Bottom Wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 120L0 0L1200 120Z" className="fill-zinc-50 dark:fill-zinc-950"></path>
            </svg>
          </div>
        </section>

        {/* ================= CONTENT SECTION ================= */}
        <section className="relative py-24">
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(239,68,68,0.03)_0%,transparent_100%)] -z-10" />

          <div className="container mx-auto px-4 max-w-6xl">
            
            {/* ABOUT SECTION (ASIMETRIS) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="relative group">
                <div className="absolute -inset-4 bg-red-500/10 rounded-[2rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-zinc-800">
                  <Image
                    src="/images/background.jpg"
                    alt="Anggota PMR sedang berlatih"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-1.5 bg-red-600 rounded-full" />
                <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                   Membangun Ketangguhan <br/>Sejak Dini
                </h2>
                <Card className="border-none bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md shadow-xl shadow-red-500/5">
                  <CardContent className="pt-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      “Ayo Siaga Bencana PMR” adalah program komprehensif yang membekali anggota Palang Merah Remaja
                      dengan pengetahuan dan keterampilan menghadapi situasi darurat. Program ini berfokus pada tiga pilar utama:
                      <span className="block mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-sm"># Identifikasi Ancaman</span>
                        <span className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-sm"># Mitigasi & Pencegahan</span>
                        <span className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-sm"># Respon Cepat</span>
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FEATURE GRID (PILLAR) */}
            <div className="space-y-12">
              <div className="text-center space-y-2">
                <h2 className="text-4xl font-black uppercase tracking-tighter text-primary">
                  Pilar Kesiapsiagaan
                </h2>
                <p className="text-muted-foreground">Framework standar dalam menghadapi kondisi darurat</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* CARD 1 */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-orange-500 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                    <Card className="relative h-full text-center border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white dark:bg-zinc-900 overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-2 bg-orange-500" />
                      <CardContent className="p-10">
                        <div className="w-20 h-20 bg-orange-50 dark:bg-orange-950/30 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                          <Map className="h-10 w-10 text-orange-600" />
                        </div>
                        <h3 className="font-bold text-2xl mb-4">Identifikasi Ancaman</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Mengenali potensi bahaya dan menyusun peta risiko lingkungan sekolah secara akurat.
                        </p>
                      </CardContent>
                    </Card>
                </div>

                {/* CARD 2 */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                    <Card className="relative h-full text-center border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white dark:bg-zinc-900 overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-2 bg-blue-500" />
                      <CardContent className="p-10">
                        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-950/30 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                          <LifeBuoy className="h-10 w-10 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-2xl mb-4">Mitigasi & Pencegahan</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Langkah strategis untuk mengurangi dampak bencana dan meningkatkan ketahanan lingkungan.
                        </p>
                      </CardContent>
                    </Card>
                </div>

                {/* CARD 3 */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-red-500 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                    <Card className="relative h-full text-center border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white dark:bg-zinc-900 overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-2 bg-red-500" />
                      <CardContent className="p-10">
                        <div className="w-20 h-20 bg-red-50 dark:bg-red-950/30 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                          <Zap className="h-10 w-10 text-red-600" />
                        </div>
                        <h3 className="font-bold text-2xl mb-4">Respon Cepat (P3K)</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Penanganan awal yang cepat dan efektif dalam situasi darurat untuk menyelamatkan nyawa.
                        </p>
                      </CardContent>
                    </Card>
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