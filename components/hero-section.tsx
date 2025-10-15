"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background glow */}
      <div className="absolute inset-0 breathing-light">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      {/* Mirror image placeholder */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/futuristic-smart-mirror-with-led-lighting-in-moder.jpg"
          alt="Smart Mirror"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          Reflection of
          <br />
          <span className="text-primary glow-effect">Intelligence.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 font-light">
          Mirrors with LED lighting, touch displays, and voice control.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-background font-semibold text-lg px-8 py-6 glow-effect group"
          >
            <Sparkles className="mr-2 group-hover:rotate-12 transition-transform" />
            Discover the Future
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full breathing-light" />
          </div>
        </div>
      </div>
    </section>
  )
}
