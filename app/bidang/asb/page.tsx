import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, HeartPulse, LifeBuoy } from "lucide-react"

export default function ASBPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-grow">

        {/* ================= HERO SECTION ================= */}
        <section className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <Image
            src="/images/background.jpg"
            alt="Tim PMR dalam simulasi bencana"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-4xl">

            {/* Line */}
            <div className="w-20 h-1 bg-white/70 mx-auto mb-6 rounded-full" />

            {/* Logo Image */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-600/90 shadow-2xl flex items-center justify-center border-4 border-white/80 overflow-hidden">
              <Image
                src="/images/diklat.jpeg"
                alt="Logo PMR Wira"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-xl">
              Ayo Siaga Bencana
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Kesiapsiagaan dan Mitigasi Risiko untuk Komunitas PMR Wira
            </p>
          </div>
        </section>

        {/* ================= DIVIDER IMAGE ================= */}
        <div className="mt-6 p-0">
          <div className="relative w-full aspect-video md:max-w-5xl overflow-hidden mx-auto rounded-none md:rounded-xl shadow-2xl border border-border/50">

            <Image
              src="/images/background.jpg"
              alt="Anggota PMR sedang berlatih"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* ================= CONTENT SECTION ================= */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl space-y-14">

            {/* ABOUT CARD */}
            <Card className="border border-white/20 bg-card/50 backdrop-blur-md shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-red-600 flex items-center gap-3">
                  <AlertTriangle className="h-7 w-7" />
                  Tentang Ayo Siaga Bencana
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  “Ayo Siaga Bencana PMR” adalah program komprehensif yang membekali anggota Palang Merah Remaja
                  dengan pengetahuan dan keterampilan menghadapi situasi darurat. Program ini berfokus pada tiga pilar utama:
                  <span className="font-medium text-foreground"> Identifikasi Ancaman</span>,
                  <span className="font-medium text-foreground"> Mitigasi & Pencegahan</span>, dan
                  <span className="font-medium text-foreground"> Respon Cepat Pertolongan Pertama</span>.
                </p>
              </CardContent>
            </Card>

            {/* FEATURE GRID */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-10 text-primary">
                Pilar Kesiapsiagaan
              </h2>

              <div className="grid md:grid-cols-3 gap-8">

                {/* CARD 1 */}
                <Card className="text-center shadow-lg border border-orange-200/40 bg-card/50 backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertTriangle className="h-8 w-8 text-orange-600 dark:text-orange-300" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Identifikasi Ancaman</h3>
                    <p className="text-sm text-muted-foreground">
                      Mengenali potensi bahaya dan menyusun peta risiko lingkungan sekolah.
                    </p>
                  </CardContent>
                </Card>

                {/* CARD 2 */}
                <Card className="text-center shadow-lg border border-blue-200/40 bg-card/50 backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <LifeBuoy className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Mitigasi & Pencegahan</h3>
                    <p className="text-sm text-muted-foreground">
                      Langkah strategis untuk mengurangi dampak bencana dan meningkatkan ketahanan lingkungan.
                    </p>
                  </CardContent>
                </Card>

                {/* CARD 3 */}
                <Card className="text-center shadow-lg border border-red-200/40 bg-card/50 backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <HeartPulse className="h-8 w-8 text-red-600 dark:text-red-300" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Respon Cepat (P3K)</h3>
                    <p className="text-sm text-muted-foreground">
                      Penanganan awal yang cepat dan efektif dalam situasi darurat untuk menyelamatkan nyawa.
                    </p>
                  </CardContent>
                </Card>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
