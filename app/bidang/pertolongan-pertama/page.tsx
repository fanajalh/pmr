import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield } from "lucide-react"

export default function PertolonganPertamaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-grow">

        {/* ============== HERO SECTION ============== */}
        <section className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden">
          
          {/* Background */}
          <Image
            src="/images/pertolongan-pertama.png"
            alt="Pertolongan Pertama"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-4xl">

            <div className="w-20 h-1 bg-white/70 mx-auto mb-6 rounded-full" />

            {/* Logo bulat */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-600/90 shadow-2xl 
              flex items-center justify-center border-4 border-white/80 overflow-hidden">
              <Image
                src="/images/pertolongan-pertama.png"
                alt="Pertolongan Pertama"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-xl">
              Pertolongan Pertama
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-light">
              Bidang Utama PMR – Jantung Kegiatan Kemanusiaan
            </p>

          </div>
        </section>

        {/* ============== DIVIDER IMAGE ============== */}
        <div className="mt-6 p-0">
          <div className="relative w-full aspect-video md:max-w-5xl overflow-hidden mx-auto 
            rounded-none md:rounded-xl shadow-2xl border border-border/50">
            
            <Image
              src="/images/pertolongan-pertama.png"
              alt="Pertolongan Pertama"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* ============== CONTENT SECTION ============== */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl space-y-14">

            {/* ABOUT CARD */}
            <Card className="border border-white/20 bg-card/50 backdrop-blur-md shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-red-600 flex items-center gap-3">
                  <Heart className="h-7 w-7" />
                  Tentang Pertolongan Pertama
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pertolongan Pertama adalah salah satu bidang utama dalam PMR yang bertugas memberikan penanganan awal 
                  kepada korban sebelum tenaga medis profesional tiba. Anggota PP mendapatkan materi mengenai penanganan luka, 
                  prosedur pemanggilan bantuan, serta pengetahuan dasar penyakit dan pencegahannya.
                </p>
              </CardContent>
            </Card>

            {/* GRID SECTION */}
            <div className="grid md:grid-cols-2 gap-10">

              {/* Card 1 */}
              <Card className="shadow-lg border border-red-200/40 bg-card/50 backdrop-blur-md 
                transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl text-primary mb-6 flex items-center gap-2">
                    <Heart className="h-6 w-6" />
                    Fokus Pelatihan
                  </h3>

                  <div className="space-y-4">

                    <div className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <p className="text-muted-foreground text-sm">Penanganan luka ringan dan berat</p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <p className="text-muted-foreground text-sm">Cara menghubungi ambulans dengan benar</p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <p className="text-muted-foreground text-sm">Identifikasi kondisi darurat</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="shadow-lg border border-red-200/40 bg-card/50 backdrop-blur-md 
                transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl text-primary mb-6">
                    Prinsip Utama
                  </h3>

                  <div className="space-y-5">
                    
                    <div className="p-4 bg-primary/5 rounded-xl">
                      <p className="text-primary font-semibold mb-1">Kesiapan & Ketelitian</p>
                      <p className="text-sm text-muted-foreground">
                        Setiap penanganan membutuhkan ketelitian tinggi dan pengerjaan yang aman agar tidak memperburuk kondisi korban.
                      </p>
                    </div>

                    <div className="p-4 bg-primary/5 rounded-xl">
                      <p className="text-primary font-semibold mb-1">Pencegahan</p>
                      <p className="text-sm text-muted-foreground">
                        Anggota PP diajarkan cara mengenali gejala penyakit dan cara mencegahnya sejak dini.
                      </p>
                    </div>

                  </div>
                </CardContent>

              </Card>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
