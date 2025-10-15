"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted")
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="glass-effect rounded-2xl p-6 shadow-2xl border border-primary/20">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2 flex items-center gap-2">🍪 Cookies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to
              the use of cookies.
            </p>
          </div>
          <button onClick={handleClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleAccept}
            className="flex-1 bg-primary hover:bg-primary-hover text-background font-semibold glow-effect"
          >
            Accept 💡
          </Button>
          <Button
            onClick={handleClose}
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}
