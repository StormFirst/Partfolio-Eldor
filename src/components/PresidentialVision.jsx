import React, { useState, useEffect } from "react"
import { Crown, CheckCircle2, Award, Sparkles, TrendingUp, Vote, Flag, Shield, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import confetti from "canvas-confetti"

export function PresidentialVision({ t }) {
  const [votes, setVotes] = useState(1284)
  const [hasVoted, setHasVoted] = useState(false)

  useEffect(() => {
    const savedVotes = localStorage.getItem("eldor_presidential_votes")
    if (savedVotes) {
      setVotes(parseInt(savedVotes, 10))
    }
    const votedState = localStorage.getItem("eldor_has_voted")
    if (votedState === "true") {
      setHasVoted(true)
    }
  }, [])

  const handleVote = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#3b82f6', '#10b981', '#ffffff']
    })

    const newVotes = votes + 1
    setVotes(newVotes)
    setHasVoted(true)
    localStorage.setItem("eldor_presidential_votes", newVotes.toString())
    localStorage.setItem("eldor_has_voted", "true")
  }

  const roadmapSteps = [
    { year: "2026", title: "17-Maktab 6-A", desc: "A'lo baholar, sinf sardorligi va ingliz tilini chuqur o'rganish" },
    { year: "2030", title: "Iqtidorli Yoshlar Lideri", desc: "Respublika fan olimpiadalari va yetakchilik tanlovlari g'olibi" },
    { year: "2035", title: "Davlat Boshqaruvi & IT", desc: "Dunyoning nufuzli universitetida Xalqaro munosabatlar va Boshqaruv ta'limi" },
    { year: "2045", title: "Prezidentlik Saylovi", desc: "Buyuk O'zbekistonni jahonning eng ilg'or va baxtli mamlakatiga aylantirish!" },
  ]

  return (
    <section id="presidential" className="py-20 relative overflow-hidden bg-slate-900/40 border-y border-border/40">
      {/* Decorative Golden Starburst Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="presidential" className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            <Crown className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            {t.presidential.tag}
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.presidential.title}
          </h2>
          <p className="text-base sm:text-lg text-amber-400 font-semibold italic">
            {t.presidential.subtitle}
          </p>
        </div>

        {/* Presidential Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {t.presidential.points.map((point, index) => (
            <Card
              key={index}
              className="bg-card/70 border-amber-500/20 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                  {index === 0 && <Landmark className="w-6 h-6" />}
                  {index === 1 && <Flag className="w-6 h-6" />}
                  {index === 2 && <TrendingUp className="w-6 h-6" />}
                  {index === 3 && <Shield className="w-6 h-6" />}
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                    {point.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-2 text-muted-foreground text-sm leading-relaxed pl-20">
                {point.desc}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Voting Station Box */}
        <div className="rounded-3xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-blue-900/30 border border-amber-500/30 p-8 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Crown className="w-48 h-48 text-amber-400" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mb-2">
              <Vote className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-foreground">
              {t.presidential.manifestoTitle}
            </h3>

            <div className="text-3xl sm:text-4xl font-black text-amber-400 flex items-center justify-center gap-2">
              <span>{votes.toLocaleString()}</span>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {t.presidential.totalVotes}
              </span>
            </div>

            <div className="pt-2">
              <Button
                variant="presidential"
                size="lg"
                onClick={handleVote}
                className="text-base px-8 py-6 rounded-2xl shadow-xl shadow-amber-500/25 gap-2 cursor-pointer"
              >
                <Vote className="w-5 h-5" />
                {hasVoted ? t.presidential.voteSuccess : t.presidential.voteBtn}
              </Button>
            </div>

            {hasVoted && (
              <p className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                {t.presidential.voteSuccess}
              </p>
            )}
          </div>
        </div>

        {/* Presidential Roadmap 2026-2045 */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Prezidentlik sari 20 yillik Yo'l Xaritasi (Roadmap)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-card/60 border border-border p-5 text-center flex flex-col items-center hover:border-amber-500/40 transition-colors"
              >
                <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 mb-3">
                  {step.year}
                </span>
                <h4 className="font-bold text-sm text-foreground mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
