import React, { useState, useEffect } from "react"
import { Gamepad2, Crown, Sparkles, Trophy, Zap, RefreshCw, Award } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import confetti from "canvas-confetti"

export function InteractiveMiniGame({ t }) {
  const [robux, setRobux] = useState(0)
  const [multiplier, setMultiplier] = useState(10)
  const [clicks, setClicks] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem("eldor_clicker_robux")
    if (saved) {
      setRobux(parseInt(saved, 10))
    }
  }, [])

  const getRank = (score) => {
    if (score < 100) return { rank: t.miniGame.ranks[0], next: 100, level: 1 }
    if (score < 300) return { rank: t.miniGame.ranks[1], next: 300, level: 2 }
    if (score < 600) return { rank: t.miniGame.ranks[2], next: 600, level: 3 }
    if (score < 1000) return { rank: t.miniGame.ranks[3], next: 1000, level: 4 }
    if (score < 2000) return { rank: t.miniGame.ranks[4], next: 2000, level: 5 }
    if (score < 3500) return { rank: t.miniGame.ranks[5], next: 3500, level: 6 }
    if (score < 5000) return { rank: t.miniGame.ranks[6], next: 5000, level: 7 }
    return { rank: t.miniGame.ranks[7], next: 10000, level: 8 }
  }

  const currentRank = getRank(robux)
  const progressPercent = Math.min(100, (robux / currentRank.next) * 100)

  const handleClick = (e) => {
    const newRobux = robux + multiplier
    const newClicks = clicks + 1
    setRobux(newRobux)
    setClicks(newClicks)
    localStorage.setItem("eldor_clicker_robux", newRobux.toString())

    // Level-up or milestone confetti
    if (newRobux % 300 === 0 || newRobux >= currentRank.next) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ef4444', '#f59e0b', '#3b82f6']
      })
    }
  }

  const resetGame = () => {
    setRobux(0)
    setClicks(0)
    localStorage.removeItem("eldor_clicker_robux")
  }

  return (
    <section id="minigame" className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-background to-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="space-y-4 mb-12">
          <Badge variant="roblox" className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            {t.miniGame.tag}
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.miniGame.title}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {t.miniGame.desc}
          </p>
        </div>

        {/* Clicker Card Box */}
        <Card className="border-2 border-primary/20 bg-card/90 shadow-2xl backdrop-blur-2xl p-6 sm:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center mb-8">
            <div className="p-4 rounded-2xl bg-secondary/60 border border-border">
              <p className="text-xs text-muted-foreground font-medium mb-1">
                {t.miniGame.robuxCollected}
              </p>
              <p className="text-3xl font-black text-amber-400 font-mono flex items-center justify-center gap-1">
                <span>R$</span>
                <span>{robux}</span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-secondary/60 border border-border">
              <p className="text-xs text-muted-foreground font-medium mb-1">
                {t.miniGame.rankTitle}
              </p>
              <Badge variant="presidential" className="text-xs font-bold py-1 px-3">
                <Crown className="w-3 h-3 mr-1" />
                {currentRank.rank}
              </Badge>
            </div>

            <div className="p-4 rounded-2xl bg-secondary/60 border border-border">
              <p className="text-xs text-muted-foreground font-medium mb-1">
                Tugma bosishlar soni
              </p>
              <p className="text-2xl font-black text-primary font-mono">
                {clicks} ta
              </p>
            </div>
          </div>

          {/* Progress bar to next rank */}
          <div className="space-y-2 mb-8 max-w-md mx-auto">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Keyingi unvongacha:</span>
              <span className="font-mono font-bold text-foreground">{robux} / {currentRank.next} R$</span>
            </div>
            <Progress value={progressPercent} className="h-3" indicatorClassName="bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500" />
          </div>

          {/* Big Interactive Clicker Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleClick}
              className="group relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-red-600 via-amber-500 to-blue-600 p-2 shadow-2xl shadow-primary/30 hover:scale-105 active:scale-90 transition-all duration-150 cursor-pointer focus:outline-none"
            >
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-white border-2 border-white/20 group-hover:bg-slate-900 transition-colors">
                <div className="flex items-center gap-1 mb-1">
                  <Gamepad2 className="w-7 h-7 text-red-500 group-hover:rotate-12 transition-transform" />
                  <Crown className="w-7 h-7 text-amber-400 group-hover:-rotate-12 transition-transform" />
                </div>
                <span className="text-sm sm:text-base font-black tracking-wide">BOSING!</span>
                <span className="text-[11px] text-amber-300 font-mono">+10 Robux</span>
              </div>
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
            <Button
              variant="ghost"
              size="sm"
              onClick={resetGame}
              className="text-xs text-muted-foreground hover:text-destructive gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Qayta boshlash
            </Button>
          </div>
        </Card>

      </div>
    </section>
  )
}
