import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"
import Link from "next/link"

export function BulletinSection() {
  return (
    <section id="bulletin" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">PMR WIRA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Informasi terbaru dan program unggulan dari PMR WIRA SMKN 1 Purwokerto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-lg transition-all duration-300 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <ExternalLink className="h-5 w-5" />
                Form Pendaftaran Anggota
              </CardTitle>
              <CardDescription>
                pendaftaran anggota kelas 10 & 11 — isi formulir Google Form untuk bergabung.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full group-hover:scale-105 transition-transform">
                <Link href="https://forms.gle/H5FGhYbxy6s1x5hW9" target="_blank" rel="noopener noreferrer">
                  Isi Form
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Play className="h-5 w-5" />
                SAF-C Podcast
              </CardTitle>
              <CardDescription>
                Program baru untuk mengenalkan PMR dan dunia kesehatan melalui rekaman audio/video.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                variant="outline"
                className="w-full group-hover:scale-105 transition-transform bg-transparent"
              >
                <Link href="https://youtu.be/10W9vLCecDA?si=d7K6ImjbvkGcRsBg" target="_blank" rel="noopener noreferrer">
                  Tonton
                  <Play className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
