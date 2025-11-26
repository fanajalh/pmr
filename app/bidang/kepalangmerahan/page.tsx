import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Target } from "lucide-react"

export default function KepalangmerahanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-grow">

        {/* ================= HERO SECTION ================= */}
        <section className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/palangmerah.jpg" 
            alt="Game Kepalangmerahan"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

          <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-4xl">
            <div className="w-20 h-1 bg-white/70 mx-auto mb-6 rounded-full" />

            {/* Logo bulat */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-600/90 shadow-2xl flex items-center justify-center border-4 border-white/80 overflow-hidden">
              <Image
                src="/images/palangmerah.jpg"
                alt="Logo GP"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-xl">
              Game Kepalangmerahan
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-light">
              Belajar Nilai Kemanusiaan Melalui Permainan
            </p>
          </div>
        </section>

        {/* ================= DIVIDER IMAGE ================= */}
        <div className="mt-6 p-0">
          <div className="relative w-full aspect-video md:max-w-5xl overflow-hidden mx-auto rounded-none md:rounded-xl shadow-2xl border border-border/50">
            <Image
              src="/images/palangmerah.jpg"
              alt="Game GP"
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
                  <Gamepad2 className="h-7 w-7 text-red-600" />
                  Tentang Game Kepalangmerahan
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Game Kepalangmerahan adalah bidang PMR yang menggunakan permainan edukatif
                  untuk mengajarkan prinsip, nilai, dan keterampilan kepalangmerahan. 
                  Melalui metode belajar aktif dan menyenangkan, anggota PMR dapat memahami 
                  nilai kemanusiaan dengan lebih mendalam.
                </p>
              </CardContent>
            </Card>

            {/* FEATURE GRID */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-10 text-primary">
                Tujuan Game Kepalangmerahan
              </h2>

              <div className="grid md:grid-cols-3 gap-8">

                {/* CARD 1 */}
                <Card className="text-center shadow-lg border border-red-200/40 bg-card/50 backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Pemahaman</h3>
                    <p className="text-sm text-muted-foreground">
                      Memahami nilai dan prinsip kepalangmerahan dengan metode belajar interaktif.
                    </p>
                  </CardContent>
                </Card>

                {/* CARD 2 */}
                <Card className="text-center shadow-lg border border-red-200/40 bg-card/50 backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Gamepad2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Keterampilan</h3>
                    <p className="text-sm text-muted-foreground">
                      Melatih keterampilan sosial, analisis, dan kerja sama melalui permainan.
                    </p>
                  </CardContent>
                </Card>

                {/* CARD 3 */}
                <Card className="text-center shadow-lg border border-red-200/40 bg-card/50 backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Sikap</h3>
                    <p className="text-sm text-muted-foreground">
                      Membentuk karakter dan sikap kemanusiaan yang kuat dan sesuai prinsip PMR.
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
