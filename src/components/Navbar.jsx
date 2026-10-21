import React, { useState, useEffect } from "react"
import { Crown, Gamepad2, Moon, Sun, Globe, Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Navbar({ lang, setLang, isDark, setIsDark, t }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#presidential", label: t.nav.presidential },
    { href: "#roblox", label: t.nav.roblox },
    { href: "#school", label: t.nav.school },
    { href: "#family", label: t.nav.family },
    { href: "#location", label: t.nav.location },
    { href: "#minigame", label: t.nav.game },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Crown className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-black text-lg tracking-tight">
                <span>Eldor</span>
                <span className="text-primary">Ulug'muradov</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
                <span>17-maktab</span>
                <span>•</span>
                <span className="text-amber-500 font-semibold">Future President</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-secondary/50 p-1.5 rounded-full border border-border/40 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-full text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Roblox Tag Badge */}
            <a href="#roblox" className="hidden md:inline-flex">
              <Badge variant="roblox" className="gap-1 py-1 px-3 cursor-pointer hover:scale-105 transition-transform">
                <Gamepad2 className="w-3.5 h-3.5 text-red-400" />
                <span>Elnurskie</span>
              </Badge>
            </a>

            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLang(lang === "uz" ? "en" : "uz")}
              className="gap-1.5 font-semibold text-xs h-9 rounded-full px-3"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>{lang === "uz" ? "UZ 🇺🇿" : "EN 🇬🇧"}</span>
            </Button>

            {/* Theme Switcher */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="h-9 w-9 rounded-full"
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-amber-400 rotate-0 transition-all" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700 rotate-0 transition-all" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLang(lang === "uz" ? "en" : "uz")}
              className="font-semibold text-xs h-8 px-2 rounded-lg"
            >
              {lang === "uz" ? "UZ" : "EN"}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="h-8 w-8 rounded-lg"
            >
              {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 rounded-lg"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold rounded-lg hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="roblox" className="gap-1 py-1 px-3">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Roblox: Elnurskie</span>
              </Badge>
            </div>
            <a
              href="#presidential"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-amber-500 flex items-center gap-1"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Future President</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
