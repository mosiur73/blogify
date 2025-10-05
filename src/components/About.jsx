import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="relative min-h-screen bg-[#2C4A52] overflow-hidden ">
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center space-y-8">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-foreground text-balance max-w-4xl mx-auto leading-tight">
            "I'm Mosiur.Flavory Is Your Guide To Delicious Local Eats
          </h1>

          {/* Subheadline */}
          <p className="max-w-3xl mx-auto text-base md:text-lg text-foreground/90 leading-relaxed text-pretty">
            Our blog brings together certified instructors, wellness lovers Capture moments with high-quality blog
            dedicated to simple pleasures, sunlit moments, and soulful living.
          </p>

          {/* CTA button */}
          <div className="flex items-center justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12 rounded-full gap-2"
            >
              About Me
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Three images section */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Left image - Woman with coffee */}
            <div className="relative overflow-hidden rounded-t-full aspect-[3/4]">
              <img
                src="/about1.jpg"
                alt="Woman enjoying coffee"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center image - Food plating */}
            <div className="relative overflow-hidden rounded-t-full aspect-[3/4]">
              <img src="/about3.jpg" alt="Gourmet food plating" className="w-full h-full object-cover" />
            </div>

            {/* Right image - Woman cooking */}
            <div className="relative overflow-hidden rounded-t-full aspect-[3/4]">
              <img
                src="/about2.jpg"
                alt="Woman cooking and tasting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
