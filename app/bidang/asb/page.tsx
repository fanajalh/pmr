import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle } from "lucide-react"

export default function ASBPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/images/pertolongan-pertama.png"
                  alt="Logo ASB"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Ayo Siaga Bencana</h1>
              <p className="text-xl text-muted-foreground">Bersiap Menghadapi dan Mengurangi Risiko Bencana</p>
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
                    <Shield className="h-6 w-6 text-orange-500" />
                    Tentang Ayo Siaga Bencana
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    "Ayo Siaga Bencana PMR" adalah ajakan untuk anggota Palang Merah Remaja (PMR) untuk bersiap
                    menghadapi bencana. Ini mencakup pemahaman tentang berbagai jenis bencana, tindakan pencegahan,
                    serta cara memberikan pertolongan pertama. PMR memiliki peran penting dalam pengurangan risiko
                    bencana, termasuk mengidentifikasi ancaman dan kerentanan di lingkungan sekitar.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Identifikasi Ancaman</h3>
                    <p className="text-sm text-muted-foreground">
                      Mengenali berbagai jenis bencana dan ancaman yang mungkin terjadi di lingkungan sekitar
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Tindakan Pencegahan</h3>
                    <p className="text-sm text-muted-foreground">
                      Mempelajari langkah-langkah pencegahan dan mitigasi risiko bencana
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Pertolongan Pertama</h3>
                    <p className="text-sm text-muted-foreground">
                      Memberikan pertolongan pertama dan bantuan darurat saat terjadi bencana
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
