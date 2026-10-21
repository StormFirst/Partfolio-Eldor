import React from "react"
import { Users, Heart, Shield, Sparkles, Smile, Gamepad2, Crown } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FamilySection({ t }) {
  const memberIcons = [
    <Shield className="w-6 h-6 text-blue-500" />,
    <Heart className="w-6 h-6 text-rose-500" />,
    <Gamepad2 className="w-6 h-6 text-red-500" />,
    <Crown className="w-6 h-6 text-amber-500" />,
  ]

  const memberGradients = [
    "from-blue-500/10 to-indigo-500/10 border-blue-500/30",
    "from-rose-500/10 to-pink-500/10 border-rose-500/30",
    "from-red-500/10 to-orange-500/10 border-red-500/30",
    "from-amber-500/10 to-yellow-500/10 border-amber-500/30",
  ]

  return (
    <section id="family" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase border border-rose-500/30 text-rose-400">
            <Heart className="w-3.5 h-3.5 mr-1.5 fill-rose-500 text-rose-500" />
            {t.family.tag}
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.family.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground italic">
            {t.family.subtitle}
          </p>
        </div>

        {/* 4 Family Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.family.members.map((member, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${memberGradients[index]} hover:scale-[1.02] transition-all duration-300 shadow-lg`}
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-card border border-border shadow-md flex items-center justify-center text-3xl mb-2">
                  <span>{member.icon}</span>
                </div>
                <div className="inline-flex justify-center mb-1">
                  {memberIcons[index]}
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {member.role}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground leading-relaxed pt-2">
                {member.desc}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Family Unity Message */}
        <div className="mt-12 p-6 rounded-3xl bg-secondary/40 border border-border/80 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-base mb-1">
            <Smile className="w-5 h-5 text-amber-500" />
            <span>"Oila — mening eng katta tayanchim va kuchim!"</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Otam va onamning duolari, ukamning samimiy do'stligi va birgalikdagi orzularimiz bizni doim oldinga chorlaydi.
          </p>
        </div>

      </div>
    </section>
  )
}
