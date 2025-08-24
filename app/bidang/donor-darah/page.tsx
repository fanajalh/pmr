import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Heart } from "lucide-react"

export default function DonorDarahPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image src="/images/donor.jpg" alt="Logo Donor Darah" fill className="object-contain rounded-full" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Donor Darah Sukarela</h1>
              <p className="text-xl text-muted-foreground">Berbagi Kehidupan Melalui Kerelaan Hati</p>
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
                    <Droplets className="h-6 w-6 text-red-500" />
                    Tentang Donor Darah Sukarela
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Donor Darah Sukarela (DORAS) adalah bidang di PMR yang mempelajari materi ketentuan-ketentuan untuk
                    donor darah sukarela. DORAS juga bertanggung jawab mengelola kegiatan donor darah sukarela yang
                    diadakan di sekolah yang bekerjasama dengan PMI.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      Peran DORAS
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Mempelajari ketentuan dan syarat donor darah sukarela
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Mengelola kegiatan donor darah di sekolah</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Bekerjasama dengan PMI dalam pelaksanaan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4">Manfaat Donor Darah</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm font-medium text-red-700 mb-1">Menyelamatkan Nyawa</p>
                        <p className="text-xs text-muted-foreground">
                          Satu kantong darah dapat menyelamatkan hingga 3 nyawa manusia
                        </p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm font-medium text-red-700 mb-1">Kesehatan Donor</p>
                        <p className="text-xs text-muted-foreground">
                          Donor darah rutin dapat membantu menjaga kesehatan pendonor
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
