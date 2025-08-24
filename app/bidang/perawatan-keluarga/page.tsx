import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Heart } from "lucide-react"

export default function PerawatanKeluargaPage() {
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
                  src="/images/perawatan-keluarga.jpg"
                  alt="Logo Perawatan Keluarga"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Perawatan Keluarga</h1>
              <p className="text-xl text-muted-foreground">Merawat dengan Kasih Sayang di Rumah</p>
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
                    <Home className="h-6 w-6" />
                    Tentang Perawatan Keluarga
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Pada materi ini siswa-siswi diajarkan merawat anggota keluarga menggunakan perawatan yang ada di
                    rumah secara sederhana dengan tanpa mengabaikan kenyamanan pasien. Tentu materi ini sangatlah
                    kompleks, seperti mulai dari mempersiapkan alat, mempersiapkan pasien, cara memberikan tindakan, dan
                    cara agar kita tidak lupa tindakan apa saja yang sudah diberikan.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Aspek Perawatan
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Mempersiapkan alat perawatan</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Mempersiapkan kondisi pasien</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Cara memberikan tindakan yang tepat</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4">Prinsip Utama</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="text-sm font-medium text-primary mb-1">Kenyamanan Pasien</p>
                        <p className="text-xs text-muted-foreground">
                          Mengutamakan kenyamanan dan keamanan pasien dalam setiap tindakan perawatan
                        </p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="text-sm font-medium text-primary mb-1">Dokumentasi</p>
                        <p className="text-xs text-muted-foreground">
                          Mencatat setiap tindakan yang diberikan untuk memantau perkembangan
                        </p>
                      </div>
                    </div>
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
