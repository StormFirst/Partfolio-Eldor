import React, { useState, useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { PresidentialVision } from "@/components/PresidentialVision"
import { RobloxCorner } from "@/components/RobloxCorner"
import { SchoolLife } from "@/components/SchoolLife"
import { FamilySection } from "@/components/FamilySection"
import { LocationCard } from "@/components/LocationCard"
import { InteractiveMiniGame } from "@/components/InteractiveMiniGame"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { translations } from "@/data/translations"

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("eldor_lang") || "uz"
  })

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("eldor_theme")
    return saved !== null ? saved === "dark" : true
  })

  useEffect(() => {
    localStorage.setItem("eldor_lang", lang)
  }, [lang])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("eldor_theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("eldor_theme", "light")
    }
  }, [isDark])

  const t = translations[lang] || translations.uz

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        t={t}
      />
      <main>
        <Hero t={t} />
        <PresidentialVision t={t} />
        <RobloxCorner t={t} />
        <SchoolLife t={t} />
        <FamilySection t={t} />
        <LocationCard t={t} />
        <InteractiveMiniGame t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
