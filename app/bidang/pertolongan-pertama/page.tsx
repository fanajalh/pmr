import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Ambulance, Clock, Activity, AlertCircle } from "lucide-react"

export default function PertolonganPertamaPage() {
  const trainingFocus = [
    { title: "Penanganan Luka", desc: "Teknik membalut dan merawat luka ringan hingga berat secara steril." },
    { title: "Bantuan Medis", desc: "Prosedur pemanggilan bantuan dan koordinasi dengan ambulans." },
    { title: "Kondisi Darurat", desc: "Identifikasi cepat gejala pingsan, syok, hingga henti jantung." }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-foreground">
      <Navigation />

      <main className="flex-grow">
        {/* ============== HERO SECTION (EMERGENCY STYLE) ============== */}
        <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/pertolongan-pertama.png"
            alt="Pertolongan Pertama"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          {/* Stronger Overlay for Heroic Feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />

          <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 shadow-lg shadow-red-500/50 animate-pulse">
              <Shield className="w-4 h-4 fill-white" />
              <span className="text-xs font-black uppercase tracking-widest">Core Competency</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter leading-none italic uppercase">
              Pertolongan <br />
              <span className="text-red-500 not-italic">Pertama</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-200 font-light max-w-2xl mx-auto">
              "Jantung Kegiatan Kemanusiaan: Bertindak Cepat, Tepat, dan Berani Menyelamatkan."
            </p>
          </div>
        </section>

        {/* ============== CONTENT SECTION ============== */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            
            {/* GRID 1: ABOUT & IMAGE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
              <div className="lg:col-span-6 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-red-600" />
                  <span className="font-bold text-red-600 uppercase tracking-widest">Definition</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 leading-tight italic">
                  Tindakan Awal <br /> Penyelamat Nyawa.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Pertolongan Pertama (PP) adalah garda terdepan dalam situasi darurat. Kami melatih anggota untuk tetap tenang di bawah tekanan, memberikan perawatan luka, dan memastikan korban stabil sebelum dievakuasi.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center gap-3">
                      <Clock className="text-red-600" />
                      <span className="font-bold text-sm">Respon Cepat</span>
                   </div>
                   <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center gap-3">
                      <Activity className="text-red-600" />
                      <span className="font-bold text-sm">Akurasi Medis</span>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative group">
                <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-3xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-zinc-100 dark:border-zinc-800">
                  <Image
                    src="/images/pertolongan-pertama.png"
                    alt="PP Action"
                    width={600}
                    height={400}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* GRID 2: FOCUS & PRINCIPLES */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* TRAINING FOCUS */}
              <Card className="lg:col-span-2 border-none shadow-none bg-transparent space-y-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter italic">Fokus Pelatihan</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {trainingFocus.map((item, i) => (
                    <div key={i} className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-xl border border-zinc-100 dark:border-zinc-800 hover:bg-red-600 group transition-all duration-500">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                        <AlertCircle className="text-red-600" />
                      </div>
                      <h4 className="font-black text-lg mb-3 uppercase group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-sm text-muted-foreground group-hover:text-red-50 transition-colors leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* PRINCIPLES */}
              <div className="bg-zinc-900 dark:bg-red-600 rounded-[2.5rem] p-10 text-white space-y-8 flex flex-col justify-center shadow-2xl">
                <h3 className="text-3xl font-black italic uppercase">Prinsip Utama</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="font-black text-xl uppercase tracking-widest text-red-500 dark:text-white">01. Kesiapan</p>
                    <p className="text-sm text-zinc-400 dark:text-red-100 italic font-light">Ketelitian tinggi dalam setiap tindakan medis awal.</p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="space-y-2">
                    <p className="font-black text-xl uppercase tracking-widest text-red-500 dark:text-white">02. Keamanan</p>
                    <p className="text-sm text-zinc-400 dark:text-red-100 italic font-light">Pastikan kondisi aman bagi penolong, korban, dan lingkungan.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Ambulance className="w-16 h-16 opacity-20" />
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