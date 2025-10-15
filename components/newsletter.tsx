"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribed:", email)
    setEmail("")
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 breathing-light">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Exclusive Offers</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be the first to know about <span className="text-primary">new products and discounts</span> 💡
          </h2>

          <p className="text-lg text-muted mb-8">Subscribe to our newsletter and get 10% off your first order</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative group">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-14 px-6 bg-surface border-2 border-primary/20 rounded-xl focus:border-primary transition-all text-foreground placeholder:text-muted-foreground group-hover:border-primary/40"
              />
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-focus-within:border-primary/50 transition-all pointer-events-none glow-effect" />
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 bg-primary hover:bg-primary-hover text-background font-semibold glow-effect whitespace-nowrap"
            >
              Subscribe to Reflections
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
