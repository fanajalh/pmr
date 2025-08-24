import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function BidangSection() {
  const bidangItems = [
    {
      name: "Pertolongan Pertama",
      image: "/images/pertolongan-pertama.png",
      href: "/bidang/pertolongan-pertama",
    },
    {
      name: "Pendidikan Remaja Sebaya",
      image: "/images/prs.png",
      href: "/bidang/pendidikan-remaja",
    },
    {
      name: "Perawatan Keluarga",
      image: "/images/perawatan-keluarga.jpg",
      href: "/bidang/perawatan-keluarga",
    },
    {
      name: "Game Kepalangmerahan",
      image: "/images/palangmerah.jpg",
      href: "/bidang/kepalangmerahan",
    },
    {
      name: "Donor Darah Sukarela",
      image: "/images/donor.jpg",
      href: "/bidang/donor-darah",
    },
    {
      name: "Ayo Siaga Bencana",
      image: "/images/pertolongan-pertama.png",
      href: "/bidang/asb",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Bidang</h2>
          <p className="text-lg text-muted-foreground">Bidang kegiatan utama yang menjadi fokus PMR WIRA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bidangItems.map((item, index) => (
            <Link key={item.name} href={item.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 animate-scale-in cursor-pointer h-full">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`Logo ${item.name}`}
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-primary group-hover:text-primary/80 transition-colors text-center">
                    {item.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
