import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Share2, Users, Send, Globe } from "lucide-react"

export default function HumasPage() {
  const tasks = [
    {
      text: "Mengelola akun media sosial resmi PMR",
      icon: <Share2 className="w-5 h-5 text-blue-500" />
    },
    {
      text: "Menjalin kerja sama yang baik dengan organisasi lain",
      icon: <Users className="w-5 h-5 text-emerald-500" />
    },
    {
      text: "Menyampaikan informasi dalam bentuk surat kepada masyarakat dan pihak lain yang terkait",
      icon: <Send className="w-5 h-5 text-amber-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-zinc-950">
      <Navigation />
      
      <main className="relative">
        {/* Background Patterns - Soft Mesh Gradient */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent -z-10 dark:from-blue-900/10" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px] -z-10" />

        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative inline-block mb-8">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-primary/20 scale-125 animate-[ping_3s_linear_infinite]" />
                <div className="absolute inset-0 rounded-full border border-primary/10 scale-150" />
                
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full p-1 bg-white dark:bg-zinc-900 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden relative border border-zinc-100 dark:border-zinc-800">
                    <Image 
                      src="/images/humas.jpeg" 
                      alt="Logo HUMAS" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                  Sekbid <span className="text-primary">HUMAS</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide">
                  Hubungan Masyarakat
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              
              {/* Tentang Section - Modern Glass Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                   <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                     <Globe className="text-primary w-8 h-8" />
                     Tentang Sekbid HUMAS
                   </h2>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                    SEKBID HUMAS (SEKSI BIDANG HUBUNGAN MASYARAKAT) adalah sebagai media pembangun dan memelihara
                    hubungan baik antara PMR dengan masyarakat dan berbagai pihak yang terkait.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 hidden md:flex items-center justify-center">
                   <MessageCircle className="w-24 h-24 text-primary/20" />
                </div>
              </div>

              <hr className="border-zinc-200 dark:border-zinc-800" />

              {/* Tugas Section - Grid Layout */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-1.5 bg-primary rounded-full" />
                  <h3 className="text-2xl font-bold">Tugas & Tanggung Jawab</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tasks.map((task, index) => (
                    <Card key={index} className="border-none shadow-none bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-100 dark:border-zinc-800 group hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="mb-4 p-3 w-fit rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700 group-hover:scale-110 transition-transform">
                          {task.icon}
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                          {task.text}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
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