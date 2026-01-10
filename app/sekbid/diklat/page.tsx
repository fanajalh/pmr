import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, CheckCircle2, Award } from "lucide-react"

export default function DiklatPage() {
  const tasks = [
    "Membuat materi PMR dan menyampaikannya kepada anggota PMR",
    "Mengkoordinasikan kegiatan/forum",
    "Mengadakan simulasi dan latihan anggota PMR dalam menangani korban",
  ]

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-zinc-950">
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Dekoratif Background Aksent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="absolute top-[10%] right-[-5%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[20%] left-[-5%] w-[250px] h-[250px] bg-accent/10 rounded-full blur-[80px] -z-10" />

        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                <GraduationCap className="w-3 h-3" />
                <span>Internal Department</span>
              </div>
              
              <div className="relative group mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl">
                  <Image 
                    src="/images/diklat.jpeg" 
                    alt="Logo DIKLAT" 
                    fill 
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500" 
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
                Sekbid DIKLAT
              </h1>
              <p className="text-xl md:text-2xl font-light text-muted-foreground tracking-wide italic">
                Pendidikan dan Latihan
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Card Tentang - 5 Kolom */}
              <div className="md:col-span-5">
                <Card className="h-full border-none bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <Award className="text-primary w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        Tentang Sekbid DIKLAT
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      SEKBID DIKLAT (Seksi Bidang Pendidikan dan Latihan) adalah sebagai wadah untuk mengembangkan
                      keterampilan dan pengetahuan anggota PMR dalam bidang kemanusiaan dan kesehatan.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Card Tugas - 7 Kolom */}
              <div className="md:col-span-7">
                <Card className="h-full border-none bg-primary/[0.02] dark:bg-primary/[0.02] border border-primary/10 backdrop-blur-xl shadow-xl shadow-primary/5">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      Tugas Sekbid DIKLAT
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {tasks.map((task, index) => (
                        <div 
                          key={index} 
                          className="group flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-primary/30 transition-all"
                        >
                          <div className="mt-1">
                            <CheckCircle2 className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-snug">
                            {task}
                          </p>
                        </div>
                      ))}
                    </div>
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