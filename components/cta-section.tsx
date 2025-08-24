import { Button } from "@/components/ui/button"
import { Youtube, Instagram, Users } from "lucide-react"
import Link from "next/link"

export function CallToActionSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-6">
            <Users className="h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ayo Bergabung</h2>
          <p className="text-xl mb-8 opacity-90">
            Ikuti kami di Instagram dan YouTube untuk info terbaru dan dokumentasi kegiatan PMR WIRA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="http://www.youtube.com/@pmrwirasmkn1purwokerto75" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                YouTube
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group bg-transparent"
            >
              <Link href="https://www.instagram.com/pmrwirasmecone_/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Instagram
              </Link>
            </Button>
          </div>

          <div className="text-sm opacity-75">
            <p>Bergabunglah dengan keluarga besar PMR WIRA dan wujudkan jiwa kemanusiaan bersama kami!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
