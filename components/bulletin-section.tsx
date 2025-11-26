import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play, Zap } from "lucide-react" 
import Link from "next/link"

export function BulletinSection() {
    const podcastTitle = "The Thing We Recorded - PMR : Lebih dari Sekedar P3K! 🧐🧐🧐";
    const podcastChannel = "PMR WIRA SMK N 1 PURWOKERTO";
    const podcastUrl = "https://youtu.be/10W9vLCecDA?si=d7K6ImjbvkGcRsBg";
    const formUrl = "https://forms.gle/H5FGhYbxy6s1x5hW9";

    return (
        <section id="bulletin" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950">
            <div className="container mx-auto px-4">
                
                {/* Judul Utama */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-5xl md:text-6xl font-extrabold font-playfair mb-3 text-gray-900 dark:text-white leading-none">
                        Warta PMR WIRA
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-source-sans">
                        Informasi terbaru dan program unggulan dari PMR WIRA SMKN 1 Purwokerto
                    </p>
                </div>

                {/* Asymmetric Grid: Podcast (2/3) | Form (1/3) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    
                    {/* 1. SAF-C Podcast Card (Featured - 2/3 Width) */}
                    <div className="lg:col-span-2">
                        <Card className="h-full group relative overflow-hidden bg-white dark:bg-gray-800 shadow-xl dark:shadow-black/30 border-t-4 border-t-indigo-600 dark:border-t-indigo-500 transition-all duration-300 hover:shadow-2xl">
                            
                            {/* Area Visual: Simulasi Thumbnail Video */}
                            <div className="relative h-48 md:h-64 bg-gray-200 dark:bg-gray-900 flex items-center justify-center p-6">
                                {/* Ikon Play di tengah */}
                                <Play className="h-16 w-16 text-indigo-600/70 group-hover:text-indigo-600 transition-colors duration-300 fill-indigo-600/80 dark:fill-indigo-500/80" />
                                
                                {/* Overlay Gradien untuk Judul */}
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-sm font-medium text-gray-300">{podcastChannel}</p>
                                    <CardTitle className="text-2xl font-bold text-white leading-tight mt-1">
                                        {podcastTitle}
                                    </CardTitle>
                                </div>
                            </div>
                            
                            <CardHeader className="pt-6 pb-2">
                                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                                    Program baru untuk mengenalkan PMR dan dunia kesehatan melalui rekaman audio/video, dibahas tuntas oleh pengurus inti.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-4 pb-6">
                                <Button
                                    asChild
                                    // Menggunakan warna Indigo eksplisit (Fix!)
                                    className="w-full text-lg h-12 font-semibold group-hover:scale-[1.01] transition-transform bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600"
                                >
                                    <Link href={podcastUrl} target="_blank" rel="noopener noreferrer">
                                        Tonton Episode Perdana
                                        <Play className="ml-3 h-5 w-5 fill-white" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* 2. Form Pendaftaran Card (Action Block - 1/3 Width) */}
                    <div className="lg:col-span-1">
                        <Card className="h-full group relative overflow-hidden bg-indigo-600 dark:bg-indigo-500 text-white shadow-xl dark:shadow-black/30 transition-all duration-300 hover:bg-indigo-700 dark:hover:bg-indigo-600">
                            
                            <CardHeader className="pt-8">
                                {/* Ikon Zap/Petir */}
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-4">
                                    <Zap className="h-8 w-8 text-white" />
                                </div>
                                
                                <CardTitle className="text-3xl font-bold leading-snug">
                                    Form Pendaftaran Anggota Baru
                                </CardTitle>
                                <CardDescription className="text-gray-200 dark:text-indigo-200 mt-2">
                                    Pendaftaran anggota kelas 10 & 11 — cepat dan mudah!
                                </CardDescription>
                            </CardHeader>
                            
                            <CardContent className="pt-6 pb-8">
                                <Button asChild 
                                    // Menggunakan warna Indigo eksplisit pada teks (Fix!)
                                    className="w-full h-12 text-lg font-semibold bg-white text-indigo-600 hover:bg-gray-100 group-hover:scale-[1.05] transition-transform shadow-lg">
                                    <Link href={formUrl} target="_blank" rel="noopener noreferrer">
                                        Isi Formulir Sekarang
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}