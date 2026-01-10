import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Palette, Camera, Sparkles, PenTool } from "lucide-react"

export default function KreativitasPage() {
  const tasks = [
    {
      title: "Desain Grafis",
      desc: "Merancang dan membuat poster hari besar",
      icon: <Palette className="w-6 h-6 text-pink-500" />,
    },
    {
      title: "Content Creation",
      desc: "Mengelola konten yang menarik dan informatif mengenai PMR",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Dokumentasi",
      desc: "Mendokumentasikan semua kegiatan di PMR",
      icon: <Camera className="w-6 h-6 text-violet-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />
      
      <main>
        {/* Hero Section dengan Nuansa Artistik */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Dekorasi Background - Abstrak/Artistik */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-pink-100/50 dark:bg-pink-900/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-violet-100/50 dark:bg-violet-900/10 rounded-full blur-[100px] -z-10" />

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative w-40 h-40 mx-auto mb-8 group">
                {/* Efek Bingkai Kreatif */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-primary to-violet-500 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-primary to-violet-500 rounded-[2rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-20" />
                
                <div className="relative w-full h-full bg-white dark:bg-zinc-900 rounded-[2rem] p-1 overflow-hidden shadow-xl">
                  <Image
                    src="/images/kreativitas.jpeg"
                    alt="Logo KREATIVITAS"
                    fill
                    className="object-cover rounded-[1.8rem]"
                  />
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-6">
                <PenTool className="w-4 h-4" />
                Creative & Media Department
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight italic">
                Sekbid <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-primary to-violet-600">KREATIVITAS</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-light tracking-widest uppercase">
                Bidang Kreativitas
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Kolom Kiri: Tentang */}
                <div className="lg:col-span-5">
                  <div className="sticky top-24">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-1 bg-primary rounded-full" />
                      <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Philosophy</h2>
                    </div>
                    <h3 className="text-4xl font-bold mb-6 leading-tight text-zinc-900 dark:text-zinc-50">
                      Wadah Ekspresi & Inovasi Visual
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      SEKBID KREATIVITAS adalah sebagai wadah untuk mengembangkan dan mengelola berbagai kegiatan kreatif
                      yang ada di PMR.
                    </p>
                  </div>
                </div>

                {/* Kolom Kanan: Tugas (Grid Cards) */}
                <div className="lg:col-span-7">
                  <div className="grid gap-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-lg uppercase tracking-wider">Tugas Utama</h4>
                    </div>
                    
                    {tasks.map((task, index) => (
                      <Card key={index} className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-zinc-900">
                        <CardContent className="p-0">
                          <div className="flex items-stretch">
                            <div className="w-2 bg-gradient-to-b from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="p-6 flex items-start gap-6">
                              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {task.icon}
                              </div>
                              <div className="space-y-1">
                                <h5 className="font-bold text-xl text-zinc-900 dark:text-zinc-100">
                                  {task.title}
                                </h5>
                                <p className="text-muted-foreground text-lg leading-snug">
                                  {task.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}