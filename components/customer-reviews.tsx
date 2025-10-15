"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    name: "Anna Peterson",
    rating: 5,
    text: "Incredible mirror! The lighting is perfect for makeup, and the weather display feature is very convenient. Top quality.",
    product: "LumiSmart 360",
    date: "2 weeks ago",
  },
  {
    name: "Dmitry Sokolov",
    rating: 5,
    text: "Installed in the bathroom. Voice control works great, music via Bluetooth sounds crystal clear. Highly recommend!",
    product: "HiMirror Pro",
    date: "1 month ago",
  },
  {
    name: "Elena Volkova",
    rating: 4,
    text: "Very satisfied with the purchase. The only thing - I wish there were more brightness settings. Otherwise, everything is super!",
    product: "SmartReflect Plus",
    date: "3 weeks ago",
  },
  {
    name: "Michael Kuznetsov",
    rating: 5,
    text: "Best purchase for a smart home. Alexa integration works flawlessly. Minimalist and stylish design.",
    product: "LumiSmart 360",
    date: "1 week ago",
  },
]

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-muted text-lg">Over 5,000 satisfied customers</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 mirror-reflection group hover:border-primary transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-accent fill-accent" : "text-muted-foreground"}`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>

              {/* Author Info */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold mb-1">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.product}</p>
                <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
              </div>

              {/* Mirror reflection effect on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 glass-effect rounded-2xl px-8 py-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">4.8 out of 5</div>
              <div className="text-sm text-muted-foreground">Based on 5,247 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
