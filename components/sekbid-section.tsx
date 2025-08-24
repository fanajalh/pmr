import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function SekbidSection() {
  const sekbidItems = [
    {
      name: "UKS",
      image: "/images/uks.jpeg",
      href: "/sekbid/uks",
      description: "Unit Kesehatan Sekolah",
    },
    {
      name: "DIKLAT",
      image: "/images/diklat.jpeg",
      href: "/sekbid/diklat",
      description: "Pendidikan dan Latihan",
    },
    {
      name: "HUMAS",
      image: "/images/humas.jpeg",
      href: "/sekbid/humas",
      description: "Hubungan Masyarakat",
    },
    {
      name: "KREATIVITAS",
      image: "/images/kreativitas.jpeg",
      href: "/sekbid/kreativitas",
      description: "Bidang Kreativitas",
    },
    {
      name: "PERKAP",
      image: "/images/perkap.jpeg",
      href: "/sekbid/perkap",
      description: "Perlengkapan",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Sekbid</h2>
          <p className="text-lg text-muted-foreground">Seksi Bidang yang menjalankan fungsi operasional PMR WIRA</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {sekbidItems.map((item, index) => (
            <Link key={item.name} href={item.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 animate-scale-in cursor-pointer">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`Logo ${item.name}`}
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base text-primary group-hover:text-primary/80 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
