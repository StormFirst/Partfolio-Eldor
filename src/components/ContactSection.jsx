import React, { useState } from "react"
import { Send, MessageSquare, CheckCircle2, Gamepad2, MapPin, Mail, Sparkles, Heart } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import confetti from "canvas-confetti"

export function ContactSection({ t }) {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    })
    setSubmitted(true)
    setName("")
    setMessage("")
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-primary" />
            {t.nav.contact}
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Eldorga Xabar Yuborish
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Kelajak Prezidentiga o'z tilaklaringizni bildiring yoki Robloxda birga o'ynashga chaqiring!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Quick contact info */}
          <div className="md:col-span-5 space-y-4">
            <Card className="bg-secondary/40 border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Roblox Tag</p>
                    <p className="text-sm font-bold text-foreground font-mono">Elnurskie (Eldorskiy)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Yashash manzili</p>
                    <p className="text-sm font-bold text-foreground">Jizzax shahri, 3/1 dahasi, 9/27</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Maktab & Sinf</p>
                    <p className="text-sm font-bold text-foreground">17-maktab, 6-"A" sinf</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-500 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <Heart className="w-4 h-4 fill-amber-500" />
                Har bir xabar va tilak muhim!
              </p>
              <p className="text-muted-foreground">
                Do'stlik, yangi bilimlar va yaxshi niyatlar bilan yo'llangan barcha xabarlar Eldorga katta kuch bag'ishlaydi.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <Card className="border-primary/20 bg-card/90 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Xabar / Tilak qoldiring</CardTitle>
                <CardDescription>
                  Ismingiz va samimiy so'zlaringizni yozib qoldiring
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-in fade-in">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold text-foreground">Xabaringiz qabul qilindi! 🎉</h4>
                    <p className="text-xs text-muted-foreground">
                      Katta rahmat! Kelajak Prezidenti Eldor Ulug'muradov sizga minnatdorchilik bildiradi!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                        Ismingiz (yoki Roblox nickingiz):
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masalan: Sardor yoki Roblox_Hero"
                        required
                        className="w-full h-10 px-3.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                        Xabaringiz yoki tilagingiz:
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Eldor, o'qishlaringda va prezidentlik maqsadingda omad! Robloxda birga o'ynaylik..."
                        required
                        className="w-full p-3.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="default"
                      className="w-full h-11 rounded-xl font-bold text-sm gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Xabarni Yo'llash
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}
