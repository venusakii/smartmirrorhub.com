"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export default function VideoPresentation() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See It <span className="text-primary">In Action</span>
          </h2>
          <p className="text-muted text-lg">Smart mirror demonstration in real interiors</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
            {/* Video Thumbnail */}
            <div className="relative rounded-3xl overflow-hidden glass-effect">
              <img
                src="/modern-bathroom-interior-with-smart-mirror-display.jpg"
                alt="Video Preview"
                className="w-full h-auto"
              />

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm group-hover:bg-background/30 transition-all duration-500">
                  <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center glow-effect group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-background ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Light beam effect */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Glow effect around video */}
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Video Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4K</div>
              <p className="text-muted-foreground">Display Quality</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Non-stop Operation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5 Years</div>
              <p className="text-muted-foreground">Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
