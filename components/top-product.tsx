"use client"

import { Button } from "@/components/ui/button"
import { Star, Zap, Wifi, Mic } from "lucide-react"

export default function TopProduct() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 breathing-light">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-semibold text-accent">Top Product of the Week</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
            <div className="relative glass-effect rounded-3xl p-8 mirror-reflection">
              <img
                src="/lumismart-360-premium-smart-mirror-with-led-ring-l.jpg"
                alt="LumiSmart 360 Mirror"
                className="w-full h-auto rounded-2xl"
              />
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 glow-effect" />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              LumiSmart <span className="text-primary">360 Mirror</span>
            </h2>

            <p className="text-lg text-muted leading-relaxed">
              Revolutionary mirror with circular LED lighting, touch display, and smart home integration. The perfect
              solution for modern bathrooms.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">360° Lighting</h4>
                  <p className="text-sm text-muted-foreground">Even illumination</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wifi className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Wi-Fi 6</h4>
                  <p className="text-sm text-muted-foreground">Fast connection</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Alexa & Google</h4>
                  <p className="text-sm text-muted-foreground">Voice control</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">4.9/5 stars</h4>
                  <p className="text-sm text-muted-foreground">2,847 reviews</p>
                </div>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center gap-6 pt-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Starting at</p>
                
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-background font-semibold glow-effect flex-1"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
