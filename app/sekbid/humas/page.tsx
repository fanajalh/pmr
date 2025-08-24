import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export default function HumasPage() {
  const tasks = [
    "Mengelola akun media sosial resmi PMR",
    "Menjalin kerja sama yang baik dengan organisasi lain",
    "Menyampaikan informasi dalam bentuk surat kepada masyarakat dan pihak lain yang terkait",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image src="/images/humas.jpeg" alt="Logo HUMAS" fill className="object-contain rounded-full" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Sekbid HUMAS</h1>
              <p className="text-xl text-muted-foreground">Hubungan Masyarakat</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Tentang Sekbid HUMAS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    SEKBID HUMAS (SEKSI BIDANG HUBUNGAN MASYARAKAT) adalah sebagai media pembangun dan memelihara
                    hubungan baik antara PMR dengan masyarakat dan berbagai pihak yang terkait.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <MessageCircle className="h-6 w-6" />
                    Tugas Sekbid HUMAS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{task}</p>
                      </div>
                    ))}
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
