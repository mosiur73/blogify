"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && agreed) {
      console.log("Newsletter signup:", email)
      // Handle newsletter signup
      setEmail("")
      setAgreed(false)
    }
  }

  return (
    <section className="relative min-h-[500px] flex items-center justify-center py-20 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/newslatter.jpg"
          alt="Person working on laptop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Newsletter Form */}
          <div className="text-white">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-balance">
              Adventures, Contemplations, And Memories Of Journeys
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#D97642] hover:bg-[#C66532] text-white px-8 py-4 font-medium transition-colors flex items-center gap-2"
                >
                  Submit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/30 bg-transparent"
                  required
                />
                <label htmlFor="terms" className="text-sm text-white/90">
                  By subscribing, you agree to our Terms & Privacy Policy.
                </label>
              </div>
            </form>
          </div>

          {/* Right Side - Stats Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#2C4A52]/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-3 gap-8 text-center text-white">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                  <div className="text-sm md:text-base text-white/80">Flawless Feature</div>
                </div>
                <div className="border-l border-r border-white/20">
                  <div className="text-4xl md:text-5xl font-bold mb-2">15K</div>
                  <div className="text-sm md:text-base text-white/80">Social Spotlights</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                  <div className="text-sm md:text-base text-white/80">Story Tellers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
