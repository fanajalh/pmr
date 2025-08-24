import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Camera, Heart, Droplets, Leaf } from "lucide-react"

export default function ProgramKerjaPage() {
  const programs = [
    {
      title: "Anjangsana sini SPYDER X SAF-C",
      description:
        "Program kunjungan dan kolaborasi dengan organisasi PMR lainnya untuk berbagi pengalaman dan pengetahuan.",
      icon: Heart,
      images: ["/spyc.jpg", "/spyc (2).jpg"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Anjangsini FAIKING SOKA X SAF-C",
      description:
        "Kegiatan kunjungan dan pertukaran ilmu dengan PMR FAIKING SOKA dalam rangka memperkuat jaringan kepalangmerahan.",
      icon: Heart,
      images: ["/anjangsini1.jpg", "/anjangsini2.jpg"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Bakti Sosial",
      description: "Program pengabdian masyarakat untuk membantu sesama dan menerapkan nilai-nilai kemanusiaan PMR.",
      icon: Heart,
      images: ["/baktisosial1.jpg", "/baktisosial2.jpg"],
      color: "bg-green-100 text-green-600",
    },
    {
      title: "SAF-C GOES TO UTD",
      description:
        "Kunjungan ke Unit Transfusi Darah untuk mempelajari proses donor darah dan meningkatkan kesadaran donor darah.",
      icon: Droplets,
      images: ["/utd.jpg", "/utd1.jpg"],
      color: "bg-red-100 text-red-600",
    },
    {
      title: "SAF-C Green Action",
      description:
        "Program peduli lingkungan untuk menjaga kelestarian alam dan meningkatkan kesadaran lingkungan di sekolah.",
      icon: Leaf,
      images: ["/green.jpg", "/green1.jpg"],
      color: "bg-emerald-100 text-emerald-600",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Program Kerja PMR WIRA</h1>
              <p className="text-xl text-muted-foreground">
                Berbagai kegiatan dan program yang telah dilaksanakan untuk mengembangkan jiwa kemanusiaan
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-primary">Dokumentasi Kegiatan</h2>
                <p className="text-lg text-muted-foreground">
                  Galeri foto dan dokumentasi dari berbagai program kerja yang telah terlaksana
                </p>
              </div>

              <div className="space-y-12">
                {programs.map((program, index) => {
                  const IconComponent = program.icon
                  return (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${program.color}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          {program.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>

                        <div className="grid md:grid-cols-2 gap-4">
                          {program.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="relative aspect-video rounded-lg overflow-hidden group">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${program.title} ${imgIndex + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/90 rounded-full p-2">
                                  <Camera className="h-4 w-4 text-gray-700" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

{/*
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-primary">Pencapaian Program</h2>
                <p className="text-lg text-muted-foreground">Statistik kegiatan PMR WIRA dalam periode aktif</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-sm text-muted-foreground">Program Utama</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Peserta Terlibat</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <p className="text-sm text-muted-foreground">Kolaborasi Organisasi</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <p className="text-sm text-muted-foreground">Tahun Aktif</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      */}
      </main>
      <Footer />
    </div>
  )
}
