import React, { useState } from "react"
import { MapPin, Navigation, Building2, Home, Copy, Check, Compass, SunMedium, Sparkles } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function LocationCard({ t }) {
  const [copied, setCopied] = useState(false)
  const fullAddress = "O'zbekiston, Jizzax shahri, 3/1 dahasi, 9-dom, 27-kvartira"

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="location" className="py-20 relative bg-muted/20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="success" className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
            {t.location.tag}
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.location.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.location.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Address Details Card */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="border-emerald-500/30 bg-card/80 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{t.location.addressTitle}</CardTitle>
                    <CardDescription>Mening doimiy yashash manzilim</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Navigation className="w-4 h-4" />
                    <span>Jizzax Shahri (Jizzakh City)</span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-foreground">
                    {t.location.address}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    3/1 microdistrict • Building 9 • Apt 27
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-muted-foreground font-medium">
                    Manzilni nusxalab olish:
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    className="gap-1.5 text-xs font-semibold"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Nusxalandi!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Manzilni nusxalash</span>
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-border">
                  {t.location.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stylized Visual Map Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-slate-950 p-6 shadow-2xl relative overflow-hidden text-white">
              {/* Decorative Map Grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-mono tracking-wider text-emerald-400 font-bold">
                      LIVE LOCATION: JIZZAKH, UZ
                    </span>
                  </div>
                  <Badge variant="outline" className="border-white/20 text-white/80 text-[10px] font-mono">
                    39.9° N, 67.8° E
                  </Badge>
                </div>

                {/* Simulated Street View Card */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/80 border border-white/10 p-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 text-primary mb-1">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-white">9-Dom, 27-Kvartira</h4>
                  <p className="text-xs text-blue-200">
                    Jizzax shahri, 3/1 daxasi markazida joylashgan fayzli xonadonimiz
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <span className="text-[11px] bg-white/10 px-3 py-1 rounded-full text-slate-200">
                      🏢 9-bino
                    </span>
                    <span className="text-[11px] bg-white/10 px-3 py-1 rounded-full text-slate-200">
                      🚪 27-xonadon
                    </span>
                    <span className="text-[11px] bg-white/10 px-3 py-1 rounded-full text-slate-200">
                      📍 3/1 massiv
                    </span>
                  </div>
                </div>

                {/* Jizzakh Pride quote */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-slate-300">
                  <SunMedium className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>
                    "Jizzax — O'zbekistonning eng go'zal va tez rivojlanayotgan viloyat markazlaridan biri!"
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
