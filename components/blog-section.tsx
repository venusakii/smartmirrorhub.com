"use client"

import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "How to Choose the Perfect Smart Mirror?",
    excerpt: "Complete guide to choosing a smart mirror for your home. Sizes, features, integrations.",
    image: "/smart-mirror-buying-guide.jpg",
    category: "Guide",
    readTime: "5 min",
  },
  {
    title: "Lighting and Makeup: The Impact of Light",
    excerpt: "Why proper lighting is critically important for perfect makeup. A scientific approach.",
    image: "/makeup-lighting-mirror.jpg",
    category: "Beauty",
    readTime: "7 min",
  },
  {
    title: "Voice Mirrors — The New Trend of 2025",
    excerpt: "How voice control is changing our morning routine. Review of the latest technologies.",
    image: "/voice-controlled-smart-mirror.jpg",
    category: "Technology",
    readTime: "6 min",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Blog & <span className="text-primary">Tips</span>
          </h2>
          <p className="text-muted text-lg">Useful articles about smart mirrors and technology</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={index}
              className="glass-effect rounded-2xl overflow-hidden group hover:border-primary transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full glass-effect text-xs font-semibold text-primary">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.readTime} read</span>
                  <button className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    Read
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Holographic effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
