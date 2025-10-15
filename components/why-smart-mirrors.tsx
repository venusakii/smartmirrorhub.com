"use client"

import { Cloud, Calendar, Lightbulb, Music, Mic } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Cloud,
    title: "Weather Display",
    description: "Real-time forecast on your mirror",
  },
  {
    icon: Calendar,
    title: "Calendar Sync",
    description: "All your daily events at a glance",
  },
  {
    icon: Lightbulb,
    title: "Adjustable Lighting",
    description: "Perfect light for makeup",
  },
  {
    icon: Music,
    title: "Bluetooth + Music",
    description: "Your favorite tracks while getting ready",
  },
  {
    icon: Mic,
    title: "Voice Control",
    description: "Alexa and Google Assistant",
  },
]

export default function WhySmartMirrors() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-primary">Smart Mirrors?</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">Future technology in your home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                className={`glass-effect p-6 rounded-2xl mirror-reflection group hover:border-primary transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
