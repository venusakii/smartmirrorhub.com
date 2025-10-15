"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const models = [
  {
    name: "LumiSmart 360",
    price: "$599",
    features: {
      display: '15" Touch Display',
      lighting: "360° LED Ring",
      voice: "Alexa & Google",
      wifi: "Wi-Fi 6",
      bluetooth: true,
      antifogging: true,
      warranty: "5 years",
    },
  },
  {
    name: "HiMirror Pro",
    price: "$449",
    features: {
      display: '12" Touch Display',
      lighting: "Adjustable LED",
      voice: "Alexa Only",
      wifi: "Wi-Fi 5",
      bluetooth: true,
      antifogging: true,
      warranty: "3 years",
    },
  },
  {
    name: "Capstone Connected",
    price: "$349",
    features: {
      display: '10" Display',
      lighting: "Basic LED",
      voice: "No",
      wifi: "Wi-Fi 5",
      bluetooth: false,
      antifogging: false,
      warranty: "2 years",
    },
  },
]

const featureLabels = {
  display: "Display",
  lighting: "Lighting",
  voice: "Voice Control",
  wifi: "Wi-Fi",
  bluetooth: "Bluetooth",
  antifogging: "Anti-Fog",
  warranty: "Warranty",
}

export default function ModelComparison() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Model <span className="text-primary">Comparison</span>
          </h2>
          <p className="text-muted text-lg">Choose the perfect mirror for your needs</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block max-w-6xl mx-auto overflow-x-auto">
          <div className="glass-effect rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-semibold">Feature</th>
                  {models.map((model, index) => (
                    <th key={index} className="p-6 text-center">
                      <div className="font-bold text-xl mb-2">{model.name}</div>
                      <div className="text-2xl text-primary font-bold">{model.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(featureLabels).map((key, rowIndex) => (
                  <tr
                    key={key}
                    className="border-b border-border/50 hover:bg-primary/5 transition-colors duration-300 group"
                  >
                    <td className="p-6 font-medium group-hover:text-primary transition-colors">
                      {featureLabels[key as keyof typeof featureLabels]}
                    </td>
                    {models.map((model, colIndex) => {
                      const value = model.features[key as keyof typeof model.features]
                      return (
                        <td key={colIndex} className="p-6 text-center">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-muted-foreground">{value}</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="p-6"></td>
                  {models.map((model, index) => (
                    <td key={index} className="p-6 text-center">
                      <Button
                        className={`w-full ${
                          index === 0
                            ? "bg-primary hover:bg-primary-hover glow-effect"
                            : "bg-surface-elevated hover:bg-surface border border-primary/30"
                        }`}
                      >
                        Select
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {models.map((model, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                
              </div>

              <div className="space-y-3 mb-6">
                {Object.keys(featureLabels).map((key) => {
                  const value = model.features[key as keyof typeof model.features]
                  return (
                    <div key={key} className="flex items-center justify-between py-2 border-b border-border/50">
                      <span className="text-sm font-medium">{featureLabels[key as keyof typeof featureLabels]}</span>
                      <span className="text-sm text-muted-foreground">
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className="w-4 h-4 text-primary" />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground" />
                          )
                        ) : (
                          value
                        )}
                      </span>
                    </div>
                  )
                })}
              </div>

              <Button
                className={`w-full ${
                  index === 0
                    ? "bg-primary hover:bg-primary-hover glow-effect"
                    : "bg-surface-elevated hover:bg-surface border border-primary/30"
                }`}
              >
                Select
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
