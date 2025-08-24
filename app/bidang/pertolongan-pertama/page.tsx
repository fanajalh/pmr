import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield } from "lucide-react"

export default function PertolonganPertamaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/images/pertolongan-pertama.png"
                  alt="Logo Pertolongan Pertama"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Pertolongan Pertama</h1>
              <p className="text-xl text-muted-foreground">Bidang Utama PMR - Jantung Kegiatan Kemanusiaan</p>
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
                    <Heart className="h-6 w-6 text-red-500" />
                    Tentang Pertolongan Pertama
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Merupakan salah satu bidang di PMR yang memiliki peran paling utama atau bisa disebut sebagai
                    jantung di dalam PMR. Setiap anggota yang memilih PP akan mendapatkan pelatihan lebih detail tentang
                    cara menangani luka pada korban, prosedur menghubungi ambulans yang baik, macam-macam penyakit dan
                    cara mencegah penyakit.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Penanganan Luka</h3>
                    <p className="text-sm text-muted-foreground">
                      Pelatihan detail cara menangani berbagai jenis luka pada korban
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Prosedur Darurat</h3>
                    <p className="text-sm text-muted-foreground">
                      Prosedur menghubungi ambulans dan penanganan situasi darurat
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Pencegahan Penyakit</h3>
                    <p className="text-sm text-muted-foreground">
                      Pengetahuan tentang macam-macam penyakit dan cara pencegahannya
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
