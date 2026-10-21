import React, { useState } from "react"
import { Gamepad2, Trophy, Flame, Copy, Check, Users, ShieldAlert, Sparkles, Swords, Zap, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import confetti from "canvas-confetti"

export function RobloxCorner({ t }) {
  const [copiedAccount, setCopiedAccount] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedAccount(text)
    setTimeout(() => setCopiedAccount(""), 2000)
  }

  const triggerGamingConfetti = () => {
    setDialogOpen(true)
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ef4444', '#f97316', '#eab308']
    })
  }

  return (
    <section id="roblox" className="py-20 relative overflow-hidden">
      {/* Background Red & Crimson Glow */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="roblox" className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            <Gamepad2 className="w-3.5 h-3.5 mr-1.5 text-red-400" />
            {t.roblox.tag}
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.roblox.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.roblox.subtitle}
          </p>
        </div>

        {/* Dual Roblox Accounts Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Eldorskiy (The Original Legend) */}
          <Card className="relative overflow-hidden border-zinc-700/60 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 hover:border-zinc-500 transition-all">
            <div className="absolute top-0 right-0 p-4">
              <Badge variant="secondary" className="bg-zinc-800 text-zinc-400 border-zinc-700">
                {t.roblox.mainAccount.status}
              </Badge>
            </div>
            
            <CardHeader className="space-y-3 pb-3">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <div>
                <CardTitle className="text-2xl font-black text-white flex items-center gap-2">
                  <span>Eldorskiy</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-normal">Original</span>
                </CardTitle>
                <CardDescription className="text-zinc-400 text-sm mt-1">
                  {t.roblox.mainAccount.badge}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-zinc-300 leading-relaxed">
                {t.roblox.mainAccount.desc}
              </p>

              <div className="p-3.5 rounded-xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Username: Eldorskiy</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy("Eldorskiy")}
                  className="h-8 text-xs text-zinc-300 hover:bg-zinc-700"
                >
                  {copiedAccount === "Eldorskiy" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 mr-1" /> Nusxalandi
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1" /> Nusxa olish
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Elnurskie (Current Active Co-op with Brother!) */}
          <Card className="relative overflow-hidden border-red-500/40 bg-gradient-to-br from-red-950/40 via-zinc-900 to-zinc-950 shadow-xl shadow-red-950/20 hover:border-red-500 transition-all">
            <div className="absolute top-0 right-0 p-4">
              <Badge variant="roblox" className="animate-pulse">
                {t.roblox.currentAccount.status}
              </Badge>
            </div>
            
            <CardHeader className="space-y-3 pb-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 border border-red-400/40 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                <Gamepad2 className="w-7 h-7" />
              </div>
              <div>
                <CardTitle className="text-2xl font-black text-white flex items-center gap-2">
                  <span>Elnurskie</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30 font-semibold">
                    ACTIVE NOW
                  </span>
                </CardTitle>
                <CardDescription className="text-red-300/80 text-sm mt-1">
                  {t.roblox.currentAccount.badge}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-zinc-300 leading-relaxed">
                {t.roblox.currentAccount.desc}
              </p>

              <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-500/20 flex items-center justify-between">
                <span className="text-xs font-mono text-red-200">Username: Elnurskie</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy("Elnurskie")}
                    className="h-8 text-xs text-red-200 hover:bg-red-900/50"
                  >
                    {copiedAccount === "Elnurskie" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400 mr-1" /> Nusxalandi
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 mr-1" /> Nusxa olish
                      </>
                    )}
                  </Button>

                  <Button
                    variant="roblox"
                    size="sm"
                    onClick={triggerGamingConfetti}
                    className="h-8 text-xs"
                  >
                    <Users className="w-3.5 h-3.5 mr-1" />
                    Do'st bo'lish
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Favorite Roblox Games Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Flame className="w-6 h-6 text-red-500" />
              {t.roblox.favoriteGamesTitle}
            </h3>
            <span className="text-xs text-muted-foreground font-mono">
              Roblox Studio & Experiences
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.roblox.games.map((game, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-card border border-border/70 p-5 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-3">
                  {idx === 0 && <Swords className="w-5 h-5 text-red-500" />}
                  {idx === 1 && <Trophy className="w-5 h-5 text-amber-500" />}
                  {idx === 2 && <Sparkles className="w-5 h-5 text-blue-500" />}
                  {idx === 3 && <Zap className="w-5 h-5 text-emerald-500" />}
                </div>
                <h4 className="font-bold text-base text-foreground mb-1 group-hover:text-red-400 transition-colors">
                  {game.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">{game.genre}</p>
                <div className="pt-2 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-primary">Skill:</span>
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {game.level}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Friend Request Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogHeader>
          <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-500 flex items-center justify-center mb-2">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <DialogTitle>{t.roblox.dialogTitle}</DialogTitle>
          <DialogDescription>{t.roblox.dialogDesc}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div className="p-4 rounded-xl bg-secondary/80 border border-border flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Roblox Username</p>
              <p className="text-base font-black font-mono text-red-400">Elnurskie</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy("Elnurskie")}
              className="gap-1 text-xs"
            >
              {copiedAccount === "Elnurskie" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              Nusxa olish
            </Button>
          </div>

          <div className="text-xs text-muted-foreground text-center">
            🎮 Roblox platformasiga kiring va qidiruvga <strong>Elnurskie</strong> deb yozib do'stlik yuboring!
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setDialogOpen(false)}>
              Yopish
            </Button>
            <a href="https://www.roblox.com" target="_blank" rel="noreferrer">
              <Button variant="roblox" className="gap-1.5">
                Roblox.com ga o'tish
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </Dialog>
    </section>
  )
}
