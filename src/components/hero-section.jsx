"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const allImages = [
    "/Food-Posts-Image-1.jpg",
    "/Food-Posts-Image-2.jpg",
    "/Food-Posts-Image-3.jpg",
    "/Food-Posts-Image-4.jpg",
    "/Food-Posts-Image-5.jpg",
    "/Food-Posts-Image-6.jpg",
  ]

  const slides = [
    {
      id: 1,
      category: "Non-Veg",
      title: "Tender Beef Teriyaki Glaze, Rice, And Veggies.",
      author: "Emma Heyes",
      authorAvatar: "/diverse-woman-avatar.png",
    },
    
  ]

  const totalSlides = 6

  const nextSlide = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length)
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index + 1) // +1 because first image is the main one
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={allImages[activeImageIndex] || "/placeholder.svg"}
          alt="Background"
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            {/* Category badge */}
            <div className="inline-block">
              <span className="bg-[#C85A3C] text-white px-4 py-2 rounded text-sm font-medium">
                {slides[0].category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">{slides[0].title}</h1>

            {/* CTA and Author */}
            <div className="flex items-center gap-4 pt-2">
              <Button size="lg" className="bg-[#C85A3C] hover:bg-[#B54F33] text-white px-6 h-12 rounded gap-2">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="flex items-center gap-2">
                <img
                  src={slides[0].authorAvatar || "/placeholder.svg"}
                  alt={slides[0].author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white text-sm">By {slides[0].author}</span>
              </div>
            </div>
          </div>

          {/* Right side - Thumbnail images */}
          <div className="hidden lg:flex gap-4 justify-end">
            {allImages.slice(1).map((thumbnail, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative w-48 h-64 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                  activeImageIndex === index + 1
                    ? "border-[#C85A3C] scale-105"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <img
                  src={thumbnail || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4">
        {/* Slide counter */}
        <div className="flex items-center gap-2">
          <span className="text-white text-lg font-medium">
            {currentSlide + 1} / {totalSlides}
          </span>
          <div className="w-32 h-px bg-white/30" />
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </button>
        </div>
      </div>
    </section>
  )
}
