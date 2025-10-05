"use client"

import { ArrowRight } from "lucide-react"

export default function FeaturedRecipes() {
  const recipes = [
    {
      id: 1,
      image: "/Food-Posts-Image-1.jpg",
      date: "MAY 03, 2021",
      title: "This Week's Must-Try Dishes",
      size: "tall",
    },
    {
      id: 2,
      image: "/Food-Posts-Image-2.jpg",
      date: "MAY 20, 2021",
      title: "Flavors Everyone's Talking About",
      size: "wide",
    },
    {
      id: 3,
      image: "/Food-Posts-Image-3.jpg",
      date: "JUNE 05, 2021",
      title: "Tasty Highlights Kitchen",
      size: "tall",
    },
    {
      id: 4,
      image: "/Food-Posts-Image-1.jpg",
      date: "NOVEMBER 10, 2021",
      title: "This Week's Must-Try Dishes",
      size: "large",
    },
  ]

  return (
    <section className="bg-[#F5F1E8] py-36 px-6 md:px-12 lg:px-24 ">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="border-t border-[#D4C5B0] pt-12 pb-8">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C]">Featured Recipes</h2>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#D97642] text-[#D97642] rounded-full hover:bg-[#D97642] hover:text-white transition-colors duration-300">
              <span className="font-medium">Show More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border-t border-[#D4C5B0] pt-12">
          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Card 1 - Tall Left */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="group cursor-pointer h-full">
                <div className="relative h-[500px] lg:h-full overflow-hidden rounded-2xl">
                  <img
                    src={recipes[0].image || "/placeholder.svg"}
                    alt={recipes[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[#D97642] text-sm font-medium mb-2">{recipes[0].date}</p>
                  <h3 className="font-serif text-2xl text-[#2C2C2C]">{recipes[0].title}</h3>
                </div>
              </div>
            </div>

            {/* Card 2 - Wide Top Center */}
            <div className="lg:col-span-4 lg:row-span-1">
              <div className="group cursor-pointer h-full">
                <div className="relative h-[350px] overflow-hidden rounded-2xl">
                  <img
                    src={recipes[1].image || "/placeholder.svg"}
                    alt={recipes[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[#D97642] text-sm font-medium mb-2">{recipes[1].date}</p>
                  <h3 className="font-serif text-2xl text-[#2C2C2C]">{recipes[1].title}</h3>
                </div>
              </div>
            </div>

            {/* Card 4 - Large Right */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="group cursor-pointer h-full">
                <div className="relative h-[500px] lg:h-full overflow-hidden rounded-2xl">
                  <img
                    src={recipes[3].image || "/placeholder.svg"}
                    alt={recipes[3].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[#D97642] text-sm font-medium mb-2">{recipes[3].date}</p>
                  <h3 className="font-serif text-2xl text-[#2C2C2C]">{recipes[3].title}</h3>
                </div>
              </div>
            </div>

            {/* Card 3 - Tall Bottom Center */}
            <div className="lg:col-span-4 lg:row-span-1">
              <div className="group cursor-pointer h-full">
                <div className="relative h-[350px] overflow-hidden rounded-2xl">
                  <img
                    src={recipes[2].image || "/placeholder.svg"}
                    alt={recipes[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[#D97642] text-sm font-medium mb-2">{recipes[2].date}</p>
                  <h3 className="font-serif text-2xl text-[#2C2C2C]">{recipes[2].title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
