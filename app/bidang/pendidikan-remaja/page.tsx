import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, HandHeart, MessageCircleHeart, HeartHandshake, Sparkles, Smile } from "lucide-react"

export default function PendidikanRemajaPage() {
  const values = [
    {
      title: "Kesetiakawanan",
      desc: "Saling membantu, peduli, dan hadir untuk teman sebaya dalam berbagai situasi sulit maupun senang.",
      icon: <HandHeart className="h-8 w-8 text-red-600" />,
      color: "bg-red-50 dark:bg-red-950/30",
      border: "border-red-100 dark:border-red-900/50"
    },
    {
      title: "Senasib Sepenanggungan",
      desc: "Remaja merasa dekat karena mengalami tantangan, emosi, dan perjalanan pertumbuhan yang serupa.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-100 dark:border-blue-900/50"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfc] dark:bg-zinc-950 text-foreground">
      <Navigation />

      <main className="flex-grow">
        {/* ================= HERO SECTION (SOFT & FRIENDLY) ================= */}
        <section className="relative py-32 md:py-44 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/background.jpg"
            alt="Pendidikan Remaja Sebaya"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          
          {/* Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-950/90" />
          <div className="absolute inset-0 backdrop-blur-[3px]" />

          <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-4xl space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 animate-pulse">
                <Smile className="w-8 h-8 text-yellow-400" />
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter drop-shadow-2xl">
              PRS <span className="text-red-500 font-light italic">Wira</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-200 font-light max-w-2xl mx-auto leading-relaxed">
              "Membangun Perubahan Melalui Pendekatan <span className="text-white font-semibold">Sebaya</span>"
            </p>
          </div>
        </section>

        {/* ================= CONTENT SECTION ================= */}
        <section className="py-24 relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

          <div className="container mx-auto px-4 max-w-6xl">
            
            {/* ABOUT SECTION (MODERN SPLIT) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
                <Card className="border-none bg-white dark:bg-zinc-900 shadow-2xl rounded-[2.5rem] overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 text-red-600 font-bold mb-2 uppercase tracking-widest text-xs">
                      <Sparkles className="w-4 h-4" />
                      Our Philosophy
                    </div>
                    <CardTitle className="text-3xl font-black text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
                      Apa itu PRS?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      PRS (Pendidikan Remaja Sebaya) adalah pendekatan yang memanfaatkan kekuatan hubungan sesama remaja 
                      untuk membangun perubahan perilaku yang positif.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-4">
                      {['Kesetiakawanan', 'Empati', 'Komunikasi'].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image
                  src="/images/background.jpg"
                  alt="PMR dalam kegiatan PRS"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent" />
              </div>
            </div>

            {/* VALUES SECTION (BENTO STYLE) */}
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 uppercase">
                  Nilai Utama <span className="text-red-600">PRS</span>
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto italic">Modal utama dalam menciptakan lingkungan remaja yang saling mendukung.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((val, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 rounded-[2.5rem] ${val.color} blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <Card className={`relative h-full border-2 ${val.border} bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-[2.5rem] transition-all duration-500 group-hover:shadow-2xl`}>
                      <CardContent className="p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className={`w-20 h-20 shrink-0 ${val.color} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                          {val.icon}
                        </div>
                        <div className="space-y-3 text-center md:text-left">
                          <h3 className="font-black text-2xl text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                            {val.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg font-light">
                            {val.desc}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER QUOTE */}
            <div className="mt-24 text-center p-12 bg-white dark:bg-zinc-900 rounded-[3rem] border border-dashed border-zinc-200 dark:border-zinc-800">
               <HeartHandshake className="w-12 h-12 text-red-500 mx-auto mb-6" />
               <p className="text-2xl font-light italic text-zinc-600 dark:text-zinc-400">
                "Teman bicara terbaik bagi remaja, adalah mereka yang memahami langkah kaki yang sama."
               </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}