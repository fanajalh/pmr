import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Wallet, TrendingUp, FileSpreadsheet, Coins, PieChart } from "lucide-react"

export default function SedanPage() {
  const tasks = [
    {
      text: "Mengadakan Usaha Dana setiap 2 minggu sekali",
      sub: "Fundraising Program",
      icon: <Coins className="w-6 h-6 text-emerald-500" />
    },
    {
      text: "Merekap hasil penjualan dalam bentuk pembukuan dan keuangan",
      sub: "Financial Reporting",
      icon: <FileSpreadsheet className="w-6 h-6 text-blue-500" />
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-zinc-950">
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Decorative Background - Financial Growth Motif */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(30%_20%_at_50%_0%,rgba(16,185,129,0.08)_0%,transparent_100%)] -z-10" />
        <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />

        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-8">
                {/* Decorative Finance Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/30 animate-[spin_20s_linear_infinite] -m-4" />
                
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 bg-white">
                  <Image 
                    src="/saf-c-usaha-dana-logo.png" 
                    alt="Logo SEDAN" 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
                
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-lg shadow-lg">
                  <TrendingUp size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                  Sekbid <span className="text-emerald-600 dark:text-emerald-500">SEDAN</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-muted-foreground tracking-[0.2em] uppercase">
                  SAF-C Usaha Dana
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Kolom Tentang - Stats Style */}
                <Card className="md:col-span-5 border-none bg-emerald-600 text-white shadow-xl shadow-emerald-500/20 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <PieChart size={200} />
                  </div>
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                      <Wallet className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold">Tentang Sekbid SEDAN</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-emerald-50/90 leading-relaxed text-lg font-medium">
                      Sekbid Sedan atau (Seksi Bidang SAF-C Usaha Dana) adalah sekbid yang bertugas untuk menggalang dana
                      secara mandiri dengan tujuan membantu dan melancarkan program kerja PMR.
                    </p>
                  </CardContent>
                </Card>

                {/* Kolom Tugas - Dashboard List Style */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3 mb-6 px-2">
                    <div className="h-6 w-1 bg-emerald-500 rounded-full" />
                    <h3 className="text-xl font-bold tracking-tight">Financial Taskboard</h3>
                  </div>

                  {tasks.map((task, index) => (
                    <div 
                      key={index} 
                      className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl flex items-center gap-6 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors">
                        {task.icon}
                      </div>
                      <div className="flex-grow">
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{task.sub}</span>
                        <p className="text-zinc-700 dark:text-zinc-300 font-semibold text-lg leading-snug mt-1">
                          {task.text}
                        </p>
                      </div>
                      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-emerald-500" />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Info Tip - Tambahan Visual */}
                  <div className="mt-8 p-4 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center gap-4 text-muted-foreground italic text-sm">
                    <DollarSign className="w-4 h-4" />
                    Dana yang dikelola digunakan sepenuhnya untuk keberlangsungan aksi kemanusiaan PMR.
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