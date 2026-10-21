import React from "react"
import { GraduationCap, BookOpen, Award, Languages, Volume2, Sparkles, CheckCircle2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export function SchoolLife({ t }) {
  const speakEnglish = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = 0.9
      window.speechSynthesis.speak(utterance)
    } else {
      alert(text)
    }
  }

  return (
    <section id="school" className="py-20 relative bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="info" className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
            {t.school.tag}
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.school.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.school.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Subjects and Grades */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="border-sky-500/20 bg-card/80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-500 flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{t.school.subjectsTitle}</CardTitle>
                      <CardDescription>O'quv ko'rsatkichlari va qiziqish darajasi</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs font-mono">6-"A" Sinf</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {t.school.subjects.map((sub, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-foreground flex items-center gap-2">
                        {sub.name}
                      </span>
                      <span className="font-mono text-xs text-primary font-bold">{sub.level}%</span>
                    </div>
                    <Progress
                      value={sub.level}
                      className="h-2.5 bg-secondary"
                      indicatorClassName={
                        idx === 0
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                          : idx === 1
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                          : idx === 2
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500"
                          : "bg-gradient-to-r from-purple-500 to-pink-500"
                      }
                    />
                    <p className="text-[11px] text-muted-foreground">{sub.note}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center gap-3">
              <Award className="w-6 h-6 text-sky-500 shrink-0" />
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                {t.school.classMotto}
              </p>
            </div>
          </div>

          {/* Right: English Skills & Audio Phrases */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-primary/30 bg-gradient-to-br from-card via-card to-primary/5">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{t.languages.title}</CardTitle>
                    <CardDescription>{t.languages.subtitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground">
                  Ingliz tilini eshitish uchun quyidagi iqtiboslarni bosing (Interactive Text-to-Speech):
                </p>

                {t.languages.quotes.map((phrase, i) => (
                  <div
                    key={i}
                    onClick={() => speakEnglish(phrase)}
                    className="group p-3.5 rounded-xl bg-secondary/60 hover:bg-primary/10 border border-border/80 hover:border-primary/40 cursor-pointer transition-all duration-200 flex items-start justify-between gap-3"
                  >
                    <p className="text-xs sm:text-sm font-medium text-foreground italic">
                      {phrase}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-lg group-hover:text-primary shrink-0"
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}

                <div className="pt-2 flex items-center gap-2">
                  <Badge variant="success" className="text-xs gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> O'zbek tili: Ona tili
                  </Badge>
                  <Badge variant="info" className="text-xs gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> English: Fluently Learning
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}
