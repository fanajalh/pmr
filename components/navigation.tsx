"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CDN_IMAGES } from "@/lib/cdn-images"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const initialTheme = savedTheme || "dark"

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const sekbidItems = [
    { name: "UKS", href: "/sekbid/uks" },
    { name: "DIKLAT", href: "/sekbid/diklat" },
    { name: "HUMAS", href: "/sekbid/humas" },
    { name: "KREATIVITAS", href: "/sekbid/kreativitas" },
    { name: "PERKAP", href: "/sekbid/perkap" },
    { name: "SEDAN", href: "/sekbid/sedan" },
  ]

  const bidangItems = [
    { name: "Pertolongan Pertama", href: "/bidang/pertolongan-pertama" },
    { name: "Pendidikan Remaja Sebaya", href: "/bidang/pendidikan-remaja" },
    { name: "Perawatan Keluarga", href: "/bidang/perawatan-keluarga" },
    { name: "Game Kepalangmerahan", href: "/bidang/kepalangmerahan" },
    { name: "Donor Darah Sukarela", href: "/bidang/donor-darah" },
    { name: "Ayo Siaga Bencana", href: "/bidang/asb" },
  ]

  // Komponen pembantu untuk link dengan efek animasi hover & active state
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href
    return (
      <Link
        href={href}
        className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-colors group py-2
          ${isActive ? "text-sky-500 dark:text-sky-400" : "text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"}`}
      >
        {children}
        <span className={`absolute -bottom-1 left-1/2 w-0 h-[2px] bg-sky-500 dark:bg-sky-400 transition-all duration-300 ease-out transform -translate-x-1/2 group-hover:w-full ${isActive ? "w-full" : "w-0"}`}></span>
      </Link>
    )
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 select-none">
      <header 
        className={`mx-auto max-w-7xl w-full border backdrop-blur-md transition-all duration-500 ease-in-out
          ${isScrolled 
            ? "bg-background/95 dark:bg-[#0c1a30]/95 border-slate-200/80 dark:border-white/20 shadow-lg shadow-slate-200/50 dark:shadow-black/40 py-1" 
            : "bg-background/60 dark:bg-[#0c1a30]/60 border-slate-200/40 dark:border-white/10 shadow-md py-2"
          } 
          ${isOpen ? "rounded-2xl md:rounded-full" : "rounded-full"}
        `}
      >
        <div className="px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-9 h-9 overflow-hidden rounded-full border border-slate-200 dark:border-white/20 group-hover:border-sky-500 transition-all duration-500 group-hover:scale-105 shadow-sm">
                <Image
                  src={CDN_IMAGES.logo}
                  alt="PMR WIRA Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xs font-black tracking-[0.2em] text-slate-800 dark:text-white uppercase group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  PMR WIRA
                </h1>
                <p className="text-[9px] font-medium tracking-[0.15em] text-slate-500 dark:text-white/60 uppercase mt-0.5">
                  SMKN 1 Purwokerto
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="/">Beranda</NavLink>

              {/* Sekbid Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center text-[11px] font-bold uppercase tracking-[0.2em] transition-colors outline-none focus:outline-none group py-2
                  ${pathname.includes('/sekbid') ? "text-sky-500 dark:text-sky-400" : "text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"}`}>
                  Sekbid
                  <ChevronDown className="ml-1.5 h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48 p-2 bg-card/95 dark:bg-[#0c1a30]/95 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl mt-4 animate-in fade-in zoom-in-95 duration-200">
                  {sekbidItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wider text-slate-600 focus:bg-sky-50 focus:text-sky-600 dark:text-white/70 dark:focus:bg-white/10 dark:focus:text-white cursor-pointer transition-colors">
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Bidang Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center text-[11px] font-bold uppercase tracking-[0.2em] transition-colors outline-none focus:outline-none group py-2
                  ${pathname.includes('/bidang') ? "text-sky-500 dark:text-sky-400" : "text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"}`}>
                  Bidang
                  <ChevronDown className="ml-1.5 h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-60 p-2 bg-card/95 dark:bg-[#0c1a30]/95 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl mt-4 animate-in fade-in zoom-in-95 duration-200">
                  {bidangItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wider text-slate-600 focus:bg-sky-50 focus:text-sky-600 dark:text-white/70 dark:focus:bg-white/10 dark:focus:text-white cursor-pointer transition-colors">
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <NavLink href="/kepengurusan">Kepengurusan</NavLink>
              <NavLink href="/program-kerja">Program Kerja</NavLink>

              {/* Theme Toggle Desktop */}
              <div className="pl-4 border-l border-slate-300 dark:border-white/20">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-full p-0 flex items-center justify-center bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-white/80 dark:hover:bg-white/15 dark:hover:text-white transition-all hover:scale-105"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
              </div>
            </nav>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-3 md:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleTheme} 
                className="w-9 h-9 rounded-full p-0 flex items-center justify-center bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 hover:bg-slate-200 dark:text-white/80 transition-all"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsOpen(true)}
                className="w-9 h-9 rounded-full p-0 flex items-center justify-center bg-slate-800 text-white dark:bg-white dark:text-slate-900 hover:opacity-80 transition-all shadow-md"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden bg-background/95 dark:bg-[#0c1a30]/95 backdrop-blur-md flex flex-col justify-between animate-in fade-in slide-in-from-top-10 duration-300">
          <div className="p-6">
            {/* Top Bar Mobile */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10">
              <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                <div className="relative w-9 h-9 overflow-hidden rounded-full border border-slate-200 dark:border-white/20">
                  <Image src={CDN_IMAGES.logo} alt="PMR WIRA Logo" fill className="object-cover" />
                </div>
                <div>
                  <h1 className="text-xs font-black tracking-[0.2em] text-slate-800 dark:text-white uppercase">PMR WIRA</h1>
                  <p className="text-[9px] font-medium tracking-[0.15em] text-slate-500 dark:text-white/60 uppercase mt-0.5">SMKN 1 Purwokerto</p>
                </div>
              </Link>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full p-0 flex items-center justify-center bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white/80 hover:rotate-90 transition-transform duration-300"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Menu List Mobile */}
            <div className="py-6 overflow-y-auto max-h-[75vh] space-y-8 pr-2 no-scrollbar">
              <nav className="flex flex-col space-y-5">
                {[
                  { name: "Beranda", href: "/" },
                  { name: "Kepengurusan", href: "/kepengurusan" },
                  { name: "Program Kerja", href: "/program-kerja" }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-2xl font-semibold tracking-tight hover:text-sky-500 dark:hover:text-sky-400 transition-colors flex items-center justify-between group
                      ${pathname === item.href ? "text-sky-500 dark:text-sky-400" : "text-slate-800 dark:text-white"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.name}</span>
                    <span className="text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                  </Link>
                ))}
              </nav>

              <hr className="border-slate-200 dark:border-white/10" />

              {/* Sekbid Mobile */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500 dark:text-sky-400">Seksi Bidang</h3>
                <div className="grid grid-cols-2 gap-3">
                  {sekbidItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="p-3 bg-card dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 rounded-xl text-xs font-semibold text-slate-700 dark:text-white/80 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 dark:hover:border-sky-400 transition-all active:scale-95"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bidang Mobile */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500 dark:text-sky-400">Pilar Kegiatan</h3>
                <div className="grid grid-cols-2 gap-3">
                  {bidangItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="p-3 bg-card dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 rounded-xl text-xs font-semibold text-slate-700 dark:text-white/80 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 dark:hover:border-sky-400 transition-all active:scale-95"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social / Info Footer */}
          <div className="p-6 border-t border-slate-200 dark:border-white/10 text-center bg-background/50 dark:bg-[#0c1a30]">
            <p className="text-[10px] text-slate-500 dark:text-white/40 uppercase tracking-widest font-semibold leading-none">
              PMR WIRA SMKN 1 Purwokerto © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}