import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Target } from "lucide-react"

export default function KepalangmerahanPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/images/palangmerah.jpg"
                  alt="Logo Game Kepalangmerahan"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Game Kepalangmerahan</h1>
              <p className="text-xl text-muted-foreground">Belajar Nilai Kemanusiaan Melalui Permainan</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Gamepad2 className="h-6 w-6" />
                    Tentang Game Kepalangmerahan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    GP (Game Kepalangmerahan) adalah salah satu bidang di PMR yang bertujuan untuk mengajarkan
                    nilai-nilai kepalangmerahan kepada anggota PMR melalui metode permainan. Bidang ini mencakup
                    berbagai jenis permainan edukatif yang dirancang untuk mengembangkan pemahaman, keterampilan, dan
                    sikap kepalangmerahan.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Pemahaman</h3>
                    <p className="text-sm text-muted-foreground">
                      Mengembangkan pemahaman mendalam tentang nilai-nilai kepalangmerahan
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gamepad2 className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Keterampilan</h3>
                    <p className="text-sm text-muted-foreground">
                      Melatih keterampilan praktis melalui permainan edukatif yang menyenangkan
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Sikap</h3>
                    <p className="text-sm text-muted-foreground">
                      Membentuk sikap dan karakter yang sesuai dengan prinsip kepalangmerahan
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
