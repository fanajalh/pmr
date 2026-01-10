import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Heart, Activity, Users, CheckCircle } from "lucide-react"

export default function DonorDarahPage() {
  const benefits = [
    {
      title: "Peran DORAS",
      desc: "Mengelola kegiatan donor darah, mempelajari ketentuan donor, dan berkoordinasi dengan PMI.",
      icon: <Users className="h-8 w-8 text-red-600" />,
      bg: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      title: "Menyelamatkan Nyawa",
      desc: "Satu kantong darah dapat menyelamatkan hingga 3 nyawa manusia.",
      icon: <Heart className="h-8 w-8 text-red-600" />,
      bg: "bg-red-50 dark:bg-red-950/30"
    },
    {
      title: "Manfaat Kesehatan",
      desc: "Donor darah rutin dapat membantu menjaga kesehatan tubuh dan memperbarui sel darah pendonor.",
      icon: <Activity className="h-8 w-8 text-red-600" />,
      bg: "bg-emerald-50 dark:bg-emerald-950/30"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd] dark:bg-zinc-950 text-foreground">
      <Navigation />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/donor-bg.jpg"
            alt="Aksi donor darah"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          
          {/* Layered Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/50 to-black/20" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />

          <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium animate-fade-in">
              <Droplets className="w-4 h-4 text-red-500 fill-red-500" />
              Volunteer Blood Donation
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter drop-shadow-2xl italic">
              DORAS <br />
              <span className="text-red-500 font-extralight not-italic text-4xl md:text-6xl">Sukarela & Ikhlas</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto italic">
              "Berbagi Kehidupan Melalui Kerelaan Hati"
            </p>
            
            {/* Pulsing Heartbeat Line Decor */}
            <div className="flex justify-center pt-4 opacity-50">
              <Activity className="w-12 h-12 text-red-500 animate-pulse" />
            </div>
          </div>
        </section>

        {/* ================= CONTENT SECTION ================= */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              {/* Image Collage Style */}
              <div className="lg:col-span-6 relative">
                <div className="absolute -inset-4 bg-red-600/5 rounded-full blur-3xl" />
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-900 rotate-2 group hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/donor.jpg"
                    alt="Proses donor darah"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 p-6 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-700 flex items-center gap-4 animate-bounce-slow">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Target Tercapai</p>
                    <p className="font-black text-xl text-zinc-900 dark:text-zinc-100">100+ Kantong</p>
                  </div>
                </div>
              </div>

              {/* About Text */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-sm">
                  <div className="w-8 h-[2px] bg-red-600" />
                  Mission Statement
                </div>
                <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                  Menghubungkan <span className="text-red-600 underline decoration-red-200 underline-offset-8">Kebaikan</span> Antar Manusia
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Donor Darah Sukarela (DORAS) bukan sekadar program kerja, melainkan jembatan kemanusiaan. Kami mengedukasi siswa mengenai pentingnya donor darah sebagai gaya hidup sehat dan bentuk kepedulian nyata.
                </p>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border-l-4 border-red-600">
                   <p className="italic text-zinc-600 dark:text-zinc-400">
                    "Setetes darah Anda, adalah harapan baru bagi mereka yang membutuhkan."
                   </p>
                </div>
              </div>
            </div>

            {/* FEATURE GRID */}
            <div className="space-y-12">
              <h3 className="text-3xl font-black text-center text-zinc-900 dark:text-zinc-50 uppercase tracking-tighter">
                Peran & <span className="text-red-600">Manfaat</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((item, index) => (
                  <Card key={index} className="group border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white dark:bg-zinc-900 overflow-hidden">
                    <CardContent className="p-10 flex flex-col items-center text-center space-y-6">
                      <div className={`w-20 h-20 ${item.bg} rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        {item.icon}
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-bold text-2xl text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}