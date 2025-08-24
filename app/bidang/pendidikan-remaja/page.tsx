import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, HandHeart } from "lucide-react"

export default function PendidikanRemajaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image src="/images/prs.png" alt="Logo PRS" fill className="object-contain rounded-full" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Pendidikan Remaja Sebaya</h1>
              <p className="text-xl text-muted-foreground">Membangun Perubahan Melalui Pendekatan Sebaya</p>
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
                    <Users className="h-6 w-6" />
                    Tentang Pendidikan Remaja Sebaya
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    PRS (Pendidikan Remaja Sebaya) adalah bidang di PMR yang mempelajari tentang pentingnya peran sesama
                    teman sebaya untuk perubahan sikap dan perilaku remaja. Melalui pendekatan penjabaran dari rasa
                    kesetiakawanan, perasaan senasib sepenanggungan.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <HandHeart className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-primary">Kesetiakawanan</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Membangun rasa kebersamaan dan saling mendukung antar sesama remaja dalam menghadapi berbagai
                      tantangan.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-primary">Senasib Sepenanggungan</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mengembangkan empati dan pemahaman bahwa setiap remaja memiliki pengalaman dan tantangan yang
                      serupa.
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
