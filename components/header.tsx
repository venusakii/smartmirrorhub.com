"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">SmartMirror</span>
              <span className="text-primary glow-effect">X</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            
            
            
            
            
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary-hover text-background font-semibold glow-effect">
              Discover Light ✨
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <a href="#features" className="text-muted hover:text-primary transition-colors">
              Features
            </a>
            <a href="#products" className="text-muted hover:text-primary transition-colors">
              Products
            </a>
            <a href="#reviews" className="text-muted hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#blog" className="text-muted hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-muted hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary-hover text-background font-semibold w-full">
              Discover Light ✨
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
