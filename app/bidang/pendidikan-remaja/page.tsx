import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, HandHeart } from "lucide-react"

export default function PendidikanRemajaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-grow">

        {/* ================= HERO SECTION ================= */}
        <section className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <Image
            src="/images/background.jpg"
            alt="Pendidikan Remaja Sebaya"
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

            {/* Logo */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-600/90 shadow-2xl flex items-center justify-center border-4 border-white/80 overflow-hidden">
              <Image
                src="/images/prs.png"
                alt="Logo PRS"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-xl">
              Pendidikan Remaja Sebaya
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Membangun Perubahan Melalui Pendekatan Sebaya
            </p>
          </div>
        </section>

        {/* ================= DIVIDER IMAGE ================= */}
        <div className="mt-6 p-0">
          <div className="relative w-full aspect-video md:max-w-5xl overflow-hidden mx-auto rounded-none md:rounded-xl shadow-2xl border border-border/50">

            <Image
              src="/images/background.jpg"
              alt="PMR dalam kegiatan PRS"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* ================= CONTENT SECTION ================= */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl space-y-14">

            {/* About Card */}
            <Card className="border border-white/20 bg-card/50 backdrop-blur-md shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-red-600 flex items-center gap-3">
                  <Users className="h-7 w-7" />
                  Tentang Pendidikan Remaja Sebaya
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  PRS (Pendidikan Remaja Sebaya) adalah pendekatan yang memanfaatkan hubungan sesama remaja 
                  untuk membangun perubahan perilaku yang positif. PRS menekankan nilai 
                  <span className="font-medium text-foreground"> kesetiakawanan</span>,
                  <span className="font-medium text-foreground"> empati</span>,
                  dan <span className="font-medium text-foreground"> komunikasi sebaya</span> 
                  sebagai modal utama dalam menciptakan lingkungan remaja yang saling mendukung.
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-10 text-primary">
                Nilai Utama PRS
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                {/* CARD 1 */}
                <Card className="text-center shadow-lg border border-red-200/40 bg-card/50 backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <HandHeart className="h-8 w-8 text-red-600 dark:text-red-300" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Kesetiakawanan</h3>
                    <p className="text-sm text-muted-foreground">
                      Saling membantu, peduli, dan hadir untuk teman sebaya dalam berbagai situasi.
                    </p>
                  </CardContent>
                </Card>

                {/* CARD 2 */}
                <Card className="text-center shadow-lg border border-blue-200/40 bg-card/50 backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Senasib Sepenanggungan</h3>
                    <p className="text-sm text-muted-foreground">
                      Remaja merasa dekat karena mengalami tantangan dan perjalanan yang serupa.
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
