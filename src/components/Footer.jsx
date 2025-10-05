"use client"

import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-[#2596be] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-white/80 mb-6">
              Get the latest recipes, cooking tips, and culinary inspiration delivered straight to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#D97642] h-12"
              />
              <Button type="submit" className="bg-[#D97642] hover:bg-[#C85A3C] text-white px-8 h-12 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl mb-4">Flavory</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your guide to delicious local eats. Discover recipes, cooking tips, and culinary inspiration for every
              occasion.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D97642] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D97642] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D97642] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D97642] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/recipes" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Lunch & Dinner
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Desserts
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Beverages
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Healthy Options
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@flavory.com"
                  className="text-white/70 hover:text-[#D97642] transition-colors text-sm"
                >
                  hello@flavory.com
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Advertise
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#D97642] transition-colors text-sm">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 Flavory. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D97642] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D97642] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#D97642] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
