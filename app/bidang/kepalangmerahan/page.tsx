import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Target, Users2, Sparkles, Trophy, BrainCircuit } from "lucide-react"

export default function KepalangmerahanPage() {
  const goals = [
    {
      title: "Pemahaman",
      desc: "Memahami nilai dan prinsip kepalangmerahan dengan metode belajar interaktif.",
      icon: <BrainCircuit className="h-10 w-10 text-blue-600" />,
      gradient: "from-blue-500/10 to-transparent",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Keterampilan",
      desc: "Melatih keterampilan sosial, analisis, dan kerja sama melalui permainan simulasi.",
      icon: <Gamepad2 className="h-10 w-10 text-emerald-600" />,
      gradient: "from-emerald-500/10 to-transparent",
      border: "hover:border-emerald-500/50"
    },
    {
      title: "Sikap",
      desc: "Membentuk karakter dan sikap kemanusiaan yang kuat sesuai 7 Prinsip Dasar.",
      icon: <Trophy className="h-10 w-10 text-red-600" />,
      gradient: "from-red-500/10 to-transparent",
      border: "hover:border-red-500/50"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-foreground">
      <Navigation />

      <main className="flex-grow">
        {/* ================= HERO SECTION (GAMIFIED STYLE) ================= */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/palangmerah.jpg" 
            alt="Game Kepalangmerahan"
            fill
            priority
            className="object-cover object-center scale-110"
          />

          {/* Overlay with subtle grid pattern */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl animate-bounce-slow">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold tracking-widest uppercase">Fun Learning Method</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter drop-shadow-2xl">
              GAME <span className="text-red-500">GP</span>
            </h1>

            <p className="text-xl md:text-3xl text-zinc-200 font-light max-w-2xl mx-auto leading-tight">
              "Belajar Nilai Kemanusiaan Melalui Permainan Seru"
            </p>
          </div>

          {/* Decorative Polygon Shape */}
          <div className="absolute -bottom-1 left-0 w-full rotate-180">
            <svg viewBox="0 0 1440 320" className="fill-zinc-50 dark:fill-zinc-950">
              <path d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* ================= CONTENT SECTION ================= */}
        <section className="py-24 relative overflow-hidden">
          {/* Floating Icons Decor */}
          <Users2 className="absolute top-20 left-[5%] w-32 h-32 text-zinc-200 dark:text-zinc-900 -rotate-12 -z-10" />
          <Target className="absolute bottom-20 right-[5%] w-32 h-32 text-zinc-200 dark:text-zinc-900 rotate-12 -z-10" />

          <div className="container mx-auto px-4 max-w-6xl">
            
            {/* ABOUT CARD - GLASSMORPHISM */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
              <div className="space-y-8">
                <div className="inline-block p-4 rounded-3xl bg-red-600 shadow-xl shadow-red-500/20 rotate-[-2deg]">
                  <Gamepad2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 leading-tight">
                  Metode Belajar <br />
                  <span className="text-red-600">Paling Aktif!</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Game Kepalangmerahan adalah bidang PMR yang menggunakan permainan edukatif
                  untuk mengajarkan prinsip, nilai, dan keterampilan kepalangmerahan. 
                  Melalui metode belajar aktif dan menyenangkan, anggota PMR dapat memahami 
                  nilai kemanusiaan dengan lebih mendalam.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-red-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-square md:aspect-video rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-zinc-900 shadow-2xl">
                  <Image
                    src="/images/palangmerah.jpg"
                    alt="Game GP Interaction"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* FEATURE GRID */}
            <div className="space-y-16">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                  Misi Utama Kami
                </h2>
                <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {goals.map((goal, index) => (
                  <div key={index} className="group perspective">
                    <Card className={`relative h-full border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white dark:bg-zinc-900 overflow-hidden border-b-4 ${goal.border}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                      <CardContent className="p-12 flex flex-col items-center text-center relative z-10">
                        <div className="mb-8 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-[2rem] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                          {goal.icon}
                        </div>
                        <h3 className="font-black text-2xl mb-4 text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                          {goal.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {goal.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-20 container mx-auto px-4">
          <div className="bg-red-600 rounded-[3rem] p-12 text-center text-white space-y-6 shadow-2xl shadow-red-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12">
               <Sparkles size={120} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Siap Bermain & Belajar?</h2>
            <p className="text-red-100 text-lg max-w-xl mx-auto">
              Bergabunglah dalam sesi Game Kepalangmerahan berikutnya dan rasakan pengalaman belajar yang belum pernah ada sebelumnya.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}