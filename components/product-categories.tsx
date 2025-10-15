"use client"

import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "Wall-Mounted LED Mirrors",
    image: "/wall-mounted-smart-mirror-with-led-lighting.jpg",
    description: "Elegant solutions for any interior",
  },
  {
    title: "Vanity Mirrors with Display",
    image: "/vanity-smart-mirror-with-touch-display.jpg",
    description: "Perfect light for makeup",
  },
  {
    title: "Bathroom Smart Mirrors",
    image: "/bathroom-smart-mirror-with-anti-fog.jpg",
    description: "Water-resistant with anti-fog",
  },
  {
    title: "Touch Control Smart Mirrors",
    image: "/touch-control-smart-mirror-interface.jpg",
    description: "Intuitive one-touch control",
  },
  {
    title: "Wi-Fi & Alexa Models",
    image: "/smart-mirror-with-alexa-voice-control.jpg",
    description: "Full smart home integration",
  },
]

export default function ProductCategories() {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Product <span className="text-primary">Categories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl glass-effect hover:border-primary transition-all duration-500"
            >
              {/* Image with reflection effect */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Mirror reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="ghost" className="text-primary hover:text-accent hover:bg-primary/10 p-0">
                  View Models →
                </Button>
              </div>

              {/* Bottom reflection */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
