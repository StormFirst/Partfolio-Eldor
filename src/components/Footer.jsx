import React from "react"
import { Crown, Heart, Sparkles, Gamepad2, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer({ t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border/60 bg-card/60 backdrop-blur-xl py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-blue-600 flex items-center justify-center text-white">
                <Crown className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-black text-lg">Eldor Ulug'muradov</span>
            </div>
            <p className="text-xs text-muted-foreground">
              17-maktab 6-"A" sinf o'quvchisi • Kelajak Prezidenti • Roblox Chempioni
            </p>
            <p className="text-[11px] text-muted-foreground/80 italic">
              {t.footer.quote}
            </p>
          </div>

          {/* Tech badge & back to top */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-center sm:text-right">
              <span className="text-[11px] font-mono text-muted-foreground block">
                {t.footer.builtWith}
              </span>
              <span className="text-[11px] text-muted-foreground/70">
                © {new Date().getFullYear()} Eldor Ulug'muradov. {t.footer.rights}
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full h-9 w-9"
              title="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </div>
    </footer>
  )
}
