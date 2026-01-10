import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, HeartPulse, ClipboardCheck, Sparkles, Activity } from "lucide-react"

export default function UKSPage() {
  const tasks = [
    {
      text: "Membuat daftar piket UKS",
      icon: <ClipboardCheck className="w-5 h-5 text-red-500" />,
      category: "Scheduling"
    },
    {
      text: "Menjaga kebersihan UKS",
      icon: <Sparkles className="w-5 h-5 text-blue-500" />,
      category: "Sanitation"
    },
    {
      text: "Membuat daftar petugas penjaga upacara",
      icon: <Activity className="w-5 h-5 text-emerald-500" />,
      category: "Field Duty"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Decorative Background - Health & Care Aesthetic */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-50/50 to-transparent dark:from-red-950/10 -z-10" />
        
        {/* Subtle Pulse Line Decor */}
        <svg className="absolute top-40 right-0 opacity-[0.03] dark:opacity-[0.05] -z-10" width="400" height="200" viewBox="0 0 400 200">
          <path d="M0 100 L150 100 L170 40 L190 160 L210 100 L400 100" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" />
        </svg>

        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="relative inline-block mb-8">
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
              
              <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-3xl overflow-hidden shadow-2xl border-b-4 border-red-100 dark:border-red-900 bg-white">
                <Image 
                  src="/images/uks.jpeg" 
                  alt="Logo UKS" 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700">
                <HeartPulse className="w-6 h-6 text-red-600 animate-pulse" />
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                Sekbid <span className="text-red-600">UKS</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light italic tracking-wide">
                Unit Kesehatan Sekolah
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* About Card - Elemen Glassmorphism */}
              <div className="lg:col-span-5">
                <Card className="border-none shadow-2xl shadow-red-500/5 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/30">
                        <HeartPulse className="w-6 h-6 text-red-600" />
                      </div>
                      Tentang Sekbid UKS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                      UKS (Usaha Kesehatan Sekolah) adalah salah satu Seksi Bidang dalam organisasi PMR yang bertugas
                      untuk menjaga dan meningkatkan kesehatan anggota, serta mengedukasi warga sekolah tentang pentingnya
                      pola hidup bersih dan sehat.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Tasks List - Structured & Clean */}
              <div className="lg:col-span-7">
                <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] p-8 border border-zinc-100 dark:border-zinc-800">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <CheckCircle2 className="text-red-600 w-7 h-7" />
                    Manajemen & Layanan UKS
                  </h3>
                  
                  <div className="grid gap-4">
                    {tasks.map((task, index) => (
                      <div 
                        key={index} 
                        className="group flex items-center gap-5 p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-transparent hover:border-red-200 dark:hover:border-red-900 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-red-50 dark:group-hover:bg-red-950/30 transition-colors">
                          {task.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1">
                            {task.category}
                          </span>
                          <p className="text-zinc-700 dark:text-zinc-300 font-medium text-lg">
                            {task.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer Note */}
                  <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm font-medium py-3 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Mewujudkan Lingkungan Sekolah yang Sehat</span>
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