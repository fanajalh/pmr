"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play, Zap, Youtube } from "lucide-react" 
import Link from "next/link"
import { motion, Variants } from "framer-motion"

export function BulletinSection() {
    const podcastTitle = "Lebih dari Sekedar P3K!";
    const podcastChannel = "PMR WIRA SMK N 1 PURWOKERTO";
    const podcastUrl = "https://youtu.be/10W9vLCecDA?si=d7K6ImjbvkGcRsBg";
    const formUrl = "https://forms.gle/H5FGhYbxy6s1x5hW9";

    // Definisi Variants untuk mengatasi error TypeScript
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1] as const // Gunakan 'as const' untuk validasi cubic-bezier
            } 
        }
    };

    return (
        <section id="bulletin" className="py-32 bg-white dark:bg-[#020617] font-poppins overflow-hidden">
            <motion.div 
                className="container mx-auto px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                
                {/* Header Section: Editorial Style */}
                <motion.div 
                    variants={itemVariants} 
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
                >
                    <div className="max-w-2xl space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-10 bg-primary" />
                            <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Latest Updates</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter text-gray-900 dark:text-white leading-none uppercase italic">
                            Warta <span className="font-black not-italic text-primary">PMR Wira</span>
                        </h2>
                    </div>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-sm font-light leading-relaxed italic border-r-2 border-primary/20 pr-8 text-right">
                        Informasi terbaru, podcast edukatif, dan pendaftaran anggota baru.
                    </p>
                </motion.div>

                {/* Grid Konten: Asymmetric & Modern */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto">
                    
                    {/* 1. Podcast Block (7/12 Width) */}
                    <motion.div variants={itemVariants} className="lg:col-span-8 group">
                        <div className="relative overflow-hidden rounded-[3rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 p-1">
                            <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-[2.8rem]">
                                {/* Visual Side */}
                                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                                    <div className="absolute inset-0 bg-indigo-600/10 z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                                            <Youtube className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                    {/* Background Decor */}
                                    <div className="absolute inset-0 bg-[#0f172a] flex items-center justify-center">
                                        <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                        <span className="absolute text-[12rem] font-black text-white/[0.03] italic tracking-tighter select-none">PODCAST</span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="p-10 flex flex-col justify-center space-y-6">
                                    <div>
                                        <p className="text-[10px] font-black tracking-[0.3em] text-indigo-500 uppercase mb-2">{podcastChannel}</p>
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight uppercase tracking-tight">
                                            {podcastTitle}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                                        Mengenal PMR lebih dalam dari sekadar P3K. Simak obrolan santai bersama pengurus inti kami.
                                    </p>
                                    <Button asChild className="w-fit rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 transition-all hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95">
                                        <Link href={podcastUrl} target="_blank" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                                            Watch Now <Play className="w-3 h-3 fill-current" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Registration Block (4/12 Width) */}
                    <motion.div variants={itemVariants} className="lg:col-span-4">
                        <div className="relative h-full p-10 bg-primary rounded-[3rem] text-white overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                            {/* Decor Animasi Putar saat hover */}
                            <Zap className="absolute -top-10 -right-10 w-40 h-40 text-white/10 rotate-12 group-hover:rotate-[35deg] transition-transform duration-1000 ease-in-out" />
                            
                            <div className="relative z-10 space-y-6">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-primary transition-colors duration-500">
                                    <Zap className="w-6 h-6 transition-transform group-hover:scale-110" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black leading-none uppercase tracking-tighter">Join The <br /> Movement</h3>
                                    <p className="text-sm text-white/70 font-light italic">Pendaftaran anggota baru angkatan 2026 telah dibuka.</p>
                                </div>
                            </div>

                            <Button asChild variant="secondary" className="relative z-10 w-full rounded-2xl h-14 bg-white text-primary hover:bg-gray-100 transition-all active:scale-95 shadow-xl shadow-black/10">
                                <Link href={formUrl} target="_blank" className="flex items-center justify-center gap-2 text-xs font-black tracking-widest uppercase">
                                    Isi Formulir <ExternalLink className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}