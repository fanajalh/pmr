"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { User, Sparkles, Code2 } from "lucide-react"

interface Programmer {
  name: string
  role: string
  desc: string
  img: string
}

export default function PembuatPage() {
  const programmers: Programmer[] = [
    {
      name: "Arfan Developer",
      role: "Frontend UI/UX Designer",
      desc:
        "Fokus pada desain modern berbasis glassmorphism, layout clean, dan pengalaman pengguna yang smooth.",
      img: "/creators/aetheria.jpg",
    },
    {
      name: "Nara Codesmith",
      role: "Backend & System Logic Engineer",
      desc:
        "Spesialis backend dan API, memastikan performa sistem cepat, aman, dan stabil.",
      img: "/creators/synapse.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      {/* HEADER */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 
            rounded-full bg-blue-600/10 backdrop-blur-xl shadow-sm mb-8">
            <User className="h-12 w-12 text-blue-300" />
          </div>

          <h1 className="text-5xl font-extrabold text-white">
            Pembuat Website
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-4">
            Berisi profil tim pengembang yang membangun website ini dengan fokus pada desain dan performa.
          </p>
        </div>
      </section>

      {/* PROGRAMMER CARDS */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-14">

          {programmers.map((dev, i) => (
            <Card
              key={i}
              className="
                bg-white/10 backdrop-blur-xl
                border border-white/10 
                rounded-3xl overflow-hidden
                shadow-[0_0_8px_rgba(255,255,255,0.06)]
              "
            >
              <CardContent className="p-0">
                <div className="flex flex-col">

                  {/* IMAGE */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={dev.img}
                      alt={dev.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-white">
                      {dev.name}
                    </h2>
                    <p className="text-blue-300 font-semibold text-sm mt-1">
                      {dev.role}
                    </p>

                    <p className="text-slate-300 mt-4 leading-relaxed">
                      {dev.desc}
                    </p>

                    <div className="mt-6">
                      <span
                        className="
                          px-3 py-1 text-xs font-bold rounded-full 
                          bg-blue-900/30 text-blue-200 border border-blue-400/20
                        "
                      >
                        Glassmorphism UI
                      </span>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          ))}

        </div>
      </section>

      {/* TECH STACK */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-blue-300 mb-12">
            🔧 Teknologi Utama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg 
                border border-white/10 shadow-sm">
              <Code2 className="h-12 w-12 text-blue-300 mb-3" />
              <h3 className="text-xl font-bold text-white">Next.js</h3>
              <p className="text-slate-300 text-sm mt-2">
                Framework modern untuk performa maksimal.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg 
                border border-white/10 shadow-sm">
              <Sparkles className="h-12 w-12 text-blue-300 mb-3" />
              <h3 className="text-xl font-bold text-white">TailwindCSS</h3>
              <p className="text-slate-300 text-sm mt-2">
                Utility styling yang cepat, rapi, dan fleksibel.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg 
                border border-white/10 shadow-sm">
              <User className="h-12 w-12 text-blue-300 mb-3" />
              <h3 className="text-xl font-bold text-white">Custom UI Blur</h3>
              <p className="text-slate-300 text-sm mt-2">
                Efek kaca modern dengan shadow minimalistik.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
