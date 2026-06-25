import { Button } from "@/components/ui/button"
import { Youtube, Instagram, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CallToActionSection() {
  return (
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden border-b border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* Kolom Kiri: Teks dan Tombol CTA (7/12 Width) */}
          <div className="md:col-span-7 space-y-8 max-w-xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-10 bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Connect With Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-tight font-heading">
              Ayo Berkontribusi & Bersinar Bersama <span className="font-semibold text-primary">PMR WIRA</span>
            </h2>
            
            <p className="text-base text-slate-400 font-light leading-relaxed">
              Ikuti dokumentasi aksi kemanusiaan, sosialisasi pertolongan pertama, dan info terupdate PMR Wira SMKN 1 Purwokerto melalui media sosial kami.
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-[#ff0000] hover:bg-[#cc0000] text-white px-6 h-12 shadow-lg active:scale-95 text-xs font-bold uppercase tracking-widest transition-all">
                <Link href="http://www.youtube.com/@pmrwirasmkn1purwokerto75" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Youtube className="w-4 h-4 shrink-0" />
                  YouTube Channel
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white/10 text-white hover:bg-white hover:text-black bg-transparent px-6 h-12 transition-all text-xs font-bold uppercase tracking-widest"
              >
                <Link href="https://www.instagram.com/pmrwirasmecone_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 shrink-0" />
                  Instagram Feed
                </Link>
              </Button>
            </div>
          </div>

          {/* Kolom Kanan: Instagram Glassmorphic Card (5/12 Width) --- */}
          <div className="md:col-span-5 flex justify-center items-center h-full">
            <div className="relative w-80 h-[360px] bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl flex flex-col justify-between p-8 hover:bg-white/[0.04] transition-colors duration-500 shadow-2xl">
              
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-white font-heading">@pmrwirasmecone_</h4>
                  <p className="text-xs text-slate-400 font-light mt-1">Official Instagram account of PMR Wira SMKN 1 Purwokerto.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-full h-[1px] bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-light">Join the community</span>
                  <Link 
                    href="https://www.instagram.com/pmrwirasmecone_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    Kunjungi Profil <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}