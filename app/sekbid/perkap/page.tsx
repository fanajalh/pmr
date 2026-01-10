import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, ClipboardList, ShoppingBag, ShieldCheck, Box } from "lucide-react"

export default function PerkapPage() {
  const tasks = [
    {
      text: "Membuat ataupun membeli barang yang diperlukan dalam acara di PMR",
      icon: <ShoppingBag className="w-5 h-5" />,
      tag: "Procurement"
    },
    {
      text: "Mendata semua perlengkapan yang dibutuhkan dan mengupayakan pengadaannya",
      icon: <ClipboardList className="w-5 h-5" />,
      tag: "Inventory"
    },
    {
      text: "Bertanggung jawab atas pemeliharaan dan pengembalian perlengkapan acara",
      icon: <ShieldCheck className="w-5 h-5" />,
      tag: "Maintenance"
    },
  ]

  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-zinc-950">
      <Navigation />
      
      <main className="relative">
        {/* Background Pattern - Blueprint/Grid Style */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="relative inline-block group">
              {/* Bingkai Hexagon/Industrial Look */}
              <div className="absolute -inset-4 bg-zinc-200 dark:bg-zinc-800 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900">
                <Image 
                  src="/images/perkap.jpeg" 
                  alt="Logo PERKAP" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 uppercase">
                Sekbid <span className="text-primary italic">PERKAP</span>
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
              <p className="text-xl md:text-2xl font-medium text-zinc-500 tracking-widest uppercase">
                Perlengkapan
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              
              {/* About Section - Structured Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-[2rem] blur-sm opacity-50" />
                <Card className="relative border-none bg-white dark:bg-zinc-900 rounded-[1.5rem] overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Box size={160} />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      Tentang Sekbid PERKAP
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                      SEKBID PERKAP (Seksi Bidang Perlengkapan) adalah sekbid yang bertugas menyiapkan segala perlengkapan
                      dan kebutuhan yang diperlukan dalam acara di PMR.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Tasks Section - Industrial Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3 px-2">
                  <ClipboardList className="text-primary" />
                  Manajemen Operasional
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={index} 
                      className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow-xl"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 text-primary border border-zinc-100 dark:border-zinc-700 mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        {task.icon}
                      </div>
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                          {task.tag}
                        </span>
                        <p className="text-zinc-700 dark:text-zinc-300 font-semibold leading-relaxed">
                          {task.text}
                        </p>
                      </div>
                    </div>
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