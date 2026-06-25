"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Play, Zap, Youtube } from "lucide-react" 
import Link from "next/link"
import { motion } from "framer-motion"

export function BulletinSection() {
    const podcastTitle = "Lebih dari Sekedar P3K!";
    const podcastChannel = "PMR WIRA SMK N 1 PURWOKERTO";
    const podcastUrl = "https://youtu.be/10W9vLCecDA?si=d7K6ImjbvkGcRsBg";
    const formUrl = "https://forms.gle/H5FGhYbxy6s1x5hW9";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8, 
                ease: [0.25, 1, 0.5, 1] as const
            } 
        }
    };

    return (
        <section id="bulletin" className="py-32 bg-background font-sans overflow-hidden border-b border-border/20">
            <motion.div 
                className="container mx-auto px-6 lg:px-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                
                {/* Header Section: Editorial Style */}
                <motion.div 
                    variants={itemVariants} 
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
                >
                    <div className="max-w-2xl space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-10 bg-primary" />
                            <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Latest Updates</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-none uppercase font-heading">
                            Warta <span className="font-semibold text-primary">PMR Wira</span>
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-sm font-light leading-relaxed border-l border-primary/20 pl-6 italic">
                        Informasi terbaru, podcast edukatif, dan pendaftaran anggota baru angkatan 2026.
                    </p>
                </motion.div>

                {/* Grid Konten: Asymmetric & Modern */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
                    
                    {/* 1. Podcast Block (8/12 Width) */}
                    <motion.div variants={itemVariants} className="lg:col-span-8 group">
                        <div className="h-full rounded-2xl bg-card dark:bg-white/[0.01] border border-border/40 dark:border-white/5 overflow-hidden flex flex-col md:flex-row shadow-sm">
                            
                            {/* Visual Side */}
                            <div className="relative h-64 md:h-auto md:w-1/2 min-h-[300px] overflow-hidden bg-slate-950 flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary/10 z-10" />
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl z-20">
                                    <Youtube className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <span className="text-5xl font-black italic tracking-tighter font-heading">PODCAST</span>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center space-y-6">
                                <div>
                                    <p className="text-[9px] font-bold tracking-[0.2em] text-primary uppercase mb-2">{podcastChannel}</p>
                                    <h3 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white leading-tight uppercase font-heading">
                                        {podcastTitle}
                                    </h3>
                                </div>
                                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                    Mengenal PMR lebih dalam dari sekadar P3K. Simak obrolan santai bersama pengurus inti kami tentang kegiatan kepalangmerahan.
                                </p>
                                <Button asChild className="w-fit rounded-xl bg-[#0ea5e9] hover:bg-primary/95 text-white px-6 py-5 transition-all shadow-md active:scale-95 text-xs font-bold uppercase tracking-widest">
                                    <Link href={podcastUrl} target="_blank" className="flex items-center gap-2">
                                        Watch Now <Play className="w-3 h-3 fill-current" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Registration Block (4/12 Width) */}
                    <motion.div variants={itemVariants} className="lg:col-span-4">
                        <div className="relative h-full p-8 md:p-10 bg-slate-950 dark:bg-white/[0.01] border border-border/40 dark:border-white/5 rounded-2xl text-white overflow-hidden flex flex-col justify-between group transition-all duration-500">
                            
                            <div className="space-y-6 relative z-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                    <Zap className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-light leading-none uppercase font-heading">Join The <br /> Movement</h3>
                                    <p className="text-xs md:text-sm text-slate-400 font-light italic">Pendaftaran relawan baru angkatan 2026 telah resmi dibuka.</p>
                                </div>
                            </div>

                            <Button asChild className="w-full rounded-xl h-12 bg-primary hover:bg-primary/95 text-white transition-all active:scale-95 shadow-md text-xs font-bold uppercase tracking-widest mt-8">
                                <Link href={formUrl} target="_blank" className="flex items-center justify-center gap-2">
                                    Isi Formulir <ExternalLink className="w-3 h-3" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}