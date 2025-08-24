"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-20SezBQ4DMQz1D3ODHvvep0GNXS5YQ.jpeg"
              alt="PMR WIRA Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">PMR WIRA</h1>
              <p className="text-xs text-muted-foreground">SMKN 1 Purwokerto</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Beranda
            </Link>

            {/* Sekbid Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                Sekbid
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {sekbidItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Bidang Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                Bidang
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {bidangItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/kepengurusan" className="text-sm font-medium hover:text-primary transition-colors">
              Kepengurusan
            </Link>

            <Link href="/program-kerja" className="text-sm font-medium hover:text-primary transition-colors">
              Program Kerja
            </Link>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="ml-2 hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Sekbid</p>
                <div className="pl-4 space-y-2">
                  {sekbidItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Bidang</p>
                <div className="pl-4 space-y-2">
                  {bidangItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/kepengurusan"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kepengurusan
              </Link>

              <Link
                href="/program-kerja"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Program Kerja
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
