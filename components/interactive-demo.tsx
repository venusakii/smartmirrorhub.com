"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Volume2, Wifi } from "lucide-react"

export default function InteractiveDemo() {
  const [brightness, setBrightness] = useState(50)
  const [mode, setMode] = useState<"day" | "night">("day")
  const [isVoiceActive, setIsVoiceActive] = useState(false)

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="text-primary">Demo</span>
          </h2>
          <p className="text-muted text-lg">Try controlling the mirror right now</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Mirror Display */}
            <div className="relative">
              <div
                className="glass-effect rounded-3xl p-8 mirror-reflection transition-all duration-500"
                style={{
                  boxShadow: `0 0 ${brightness}px rgba(0, 224, 255, ${brightness / 100})`,
                }}
              >
                <div className="aspect-[3/4] bg-surface-elevated rounded-2xl relative overflow-hidden">
                  {/* Mirror Interface */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top Info */}
                    <div className="space-y-4">
                      <div className="text-6xl font-bold">14:32</div>
                      <div className="text-xl text-muted">Wednesday, October 15</div>
                      <div className="flex items-center gap-3 text-lg">
                        <Sun className="w-6 h-6 text-accent" />
                        <span>72°F Sunny</span>
                      </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="space-y-3">
                      <div className="glass-effect rounded-xl p-3 flex items-center justify-between">
                        <span className="text-sm">Brightness</span>
                        <span className="text-sm text-primary">{brightness}%</span>
                      </div>
                      <div className="glass-effect rounded-xl p-3 flex items-center gap-3">
                        <Wifi className="w-4 h-4 text-primary" />
                        <span className="text-sm">Smart Home Sync</span>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        mode === "day"
                          ? "radial-gradient(circle at 50% 0%, rgba(0, 224, 255, 0.1), transparent 60%)"
                          : "radial-gradient(circle at 50% 0%, rgba(255, 209, 102, 0.1), transparent 60%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Controls</h3>

                {/* Brightness Control */}
                <div className="glass-effect rounded-2xl p-6 mb-4">
                  <label className="block text-sm font-medium mb-3">Lighting Brightness</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full h-2 bg-surface-elevated rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Mode Toggle */}
                <div className="glass-effect rounded-2xl p-6 mb-4">
                  <label className="block text-sm font-medium mb-3">Lighting Mode</label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={mode === "day" ? "default" : "outline"}
                      className={mode === "day" ? "bg-primary hover:bg-primary-hover" : "border-primary/30"}
                      onClick={() => setMode("day")}
                    >
                      <Sun className="w-4 h-4 mr-2" />
                      Day
                    </Button>
                    <Button
                      variant={mode === "night" ? "default" : "outline"}
                      className={
                        mode === "night" ? "bg-accent hover:bg-accent-hover text-background" : "border-accent/30"
                      }
                      onClick={() => setMode("night")}
                    >
                      <Moon className="w-4 h-4 mr-2" />
                      Night
                    </Button>
                  </div>
                </div>

                {/* Voice Control */}
                <div className="glass-effect rounded-2xl p-6">
                  <label className="block text-sm font-medium mb-3">Voice Control</label>
                  <Button
                    variant={isVoiceActive ? "default" : "outline"}
                    className={`w-full ${isVoiceActive ? "bg-primary hover:bg-primary-hover glow-effect" : "border-primary/30"}`}
                    onClick={() => setIsVoiceActive(!isVoiceActive)}
                  >
                    <Volume2 className="w-4 h-4 mr-2" />
                    {isVoiceActive ? "Listening..." : "Activate Voice"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
