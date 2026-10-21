import React from "react"
import { Crown, Gamepad2, GraduationCap, MapPin, Users, Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import confetti from "canvas-confetti"

export function Hero({ t }) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#f59e0b', '#ec4899', '#10b981']
    })
  }

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-purple-500/15 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="presidential" className="py-1 px-3.5 text-xs rounded-full shadow-sm animate-pulse">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" />
                {t.hero.badge}
              </Badge>
              <Badge variant="roblox" className="py-1 px-3 text-xs rounded-full">
                Roblox: Elnurskie
              </Badge>
            </div>

            <div className="space-y-2">
              <p className="text-lg md:text-xl font-medium text-muted-foreground">
                {t.hero.greeting} 👋
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                  Eldor
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Ulug'muradov
                </span>
              </h1>
              <p className="text-base sm:text-lg font-semibold text-primary/90 flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-lg">
                  <GraduationCap className="w-4 h-4" /> 17-maktab • 6-"A" sinf
                </span>
                <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 px-3 py-1 rounded-lg">
                  <Crown className="w-4 h-4" /> Future President
                </span>
                <span className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-500 px-3 py-1 rounded-lg">
                  <Gamepad2 className="w-4 h-4" /> Roblox Gamer
                </span>
              </p>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a href="#presidential">
                <Button
                  variant="presidential"
                  size="lg"
                  onClick={triggerConfetti}
                  className="rounded-xl gap-2 font-bold group"
                >
                  <Crown className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                  {t.hero.presidentialBtn}
                </Button>
              </a>

              <a href="#roblox">
                <Button variant="roblox" size="lg" className="rounded-xl gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  {t.hero.robloxBtn}
                </Button>
              </a>

              <a href="#contact">
                <Button variant="outline" size="lg" className="rounded-xl gap-2">
                  <span>{t.nav.contact}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Micro badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                100% Halol & Intiluvchan
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-500" />
                Jizzax shahri, 3/1 daxasi
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                Ingliz tili bilimdoni
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D/Card Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-amber-500 to-purple-600 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

              <div className="relative rounded-2xl bg-card border border-white/15 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Avatar Banner Header */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 p-6 text-center border border-white/10">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/20 rounded-full blur-xl" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative mb-3">
                      {/* Avatar container */}
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 p-1 shadow-xl flex items-center justify-center">
                        <div className="w-full h-full rounded-xl bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
                          <Crown className="w-10 h-10 text-amber-400 mb-1" />
                          <span className="text-[10px] font-black tracking-widest text-white/90">ELDOR</span>
                        </div>
                      </div>
                      <span className="absolute -bottom-2 -right-2 bg-red-600 text-white p-1 rounded-lg border-2 border-slate-950 shadow-md">
                        <Gamepad2 className="w-4 h-4" />
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">Eldor Ulug'muradov</h3>
                    <p className="text-xs text-blue-200 font-medium">17-Maktab 6-"A" • Future President of Uzbekistan</p>
                    
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs text-emerald-400 font-semibold">Active & Inspiring</span>
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid inside card */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-left">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                      <GraduationCap className="w-3.5 h-3.5 text-primary" />
                      <span>Sinf & Maktab</span>
                    </div>
                    <div className="text-sm font-bold text-foreground">17-maktab, 6-"A"</div>
                  </div>

                  <div className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-left">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                      <Users className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Oilaviy tarkib</span>
                    </div>
                    <div className="text-sm font-bold text-foreground">4 kishi (Baxtli oila)</div>
                  </div>

                  <div className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-left">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                      <Gamepad2 className="w-3.5 h-3.5 text-red-400" />
                      <span>Roblox Akkaunt</span>
                    </div>
                    <div className="text-sm font-bold text-foreground">Elnurskie <span className="text-xs text-muted-foreground font-normal">(Eldorskiy)</span></div>
                  </div>

                  <div className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-left">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Yashash joyi</span>
                    </div>
                    <div className="text-sm font-bold text-foreground">Jizzax shahar 3/1</div>
                  </div>
                </div>

                {/* Mini motivational bar */}
                <div className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-indigo-500/10 p-3.5 rounded-xl border border-amber-500/20 text-xs text-center font-medium">
                  🌟 "When I grow up, I want to become President!"
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Bottom Quick Banner Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Ta'lim</p>
                <p className="text-sm font-bold">17-maktab, 6-A</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-amber-500/50 transition-all">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Katta Maqsad</p>
                <p className="text-sm font-bold">Kelajak Prezidenti</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-red-500/50 transition-all">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Sevimli O'yin</p>
                <p className="text-sm font-bold">Roblox Pro Player</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-emerald-500/50 transition-all">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Vatan</p>
                <p className="text-sm font-bold">Jizzax, O'zbekiston</p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  )
}
