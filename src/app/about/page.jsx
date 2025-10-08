"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, Heart } from "lucide-react"

export default function AboutContent() {
  return (
    <div className="bg-[#F5F1E8]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/laptop.jpg"
            alt="About Flavory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2C4A52]/80" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">About Flavory</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Your guide to delicious local eats, culinary adventures, and the stories behind every dish.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Flavory began as a simple passion project—a love letter to the incredible diversity of food that
                  surrounds us. What started as weekend explorations of local eateries has grown into a comprehensive
                  guide for food enthusiasts seeking authentic culinary experiences.
                </p>
                <p>
                  We believe that every dish tells a story, every recipe carries tradition, and every meal is an
                  opportunity to connect with culture, community, and creativity. Our mission is to celebrate these
                  stories and share them with fellow food lovers around the world.
                </p>
                <p>
                  From farm-to-table restaurants to hidden gem cafes, from traditional family recipes to innovative
                  fusion cuisine, we're here to guide you through the delicious landscape of local eats and inspire your
                  next culinary adventure.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/women-cooking.jpg"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to celebrating food culture, supporting local communities, and inspiring culinary
              exploration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center p-8 rounded-2xl bg-[#F5F1E8] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D97642] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C2C2C] mb-4">Authentic Stories</h3>
              <p className="text-gray-600 leading-relaxed">
                We share genuine experiences and honest reviews, celebrating the real stories behind every dish and
                restaurant.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-8 rounded-2xl bg-[#F5F1E8] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D97642] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C2C2C] mb-4">Local Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                We champion local businesses, farmers, and chefs who pour their hearts into creating memorable culinary
                experiences.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-8 rounded-2xl bg-[#F5F1E8] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D97642] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C2C2C] mb-4">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                We build connections between food lovers, creating a community that shares knowledge, recipes, and
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Author Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/about2.jpg"
                    alt="Emma Heyes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#D97642] text-white p-6 rounded-2xl shadow-xl">
                  <p className="font-serif text-2xl">Emma Heyes</p>
                  <p className="text-sm opacity-90">Founder & Food Writer</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-6">Meet the Author</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  Hi, I'm Emma! I'm a food writer, recipe developer, and culinary explorer based in the heart of the
                  city. My journey with food began in my grandmother's kitchen, where I learned that cooking is more
                  than just following recipes—it's about love, tradition, and bringing people together.
                </p>
                <p>
                  After years of working in restaurant kitchens and traveling to discover diverse food cultures, I
                  started Flavory to share my passion for authentic, delicious food with others. Whether I'm testing a
                  new recipe, interviewing a local chef, or exploring a hidden gem restaurant, my goal is always the
                  same: to celebrate the incredible world of food and inspire others to embark on their own culinary
                  adventures.
                </p>
                <p>
                  When I'm not writing or cooking, you'll find me at farmers markets, trying new restaurants, or
                  experimenting with fusion recipes in my kitchen. I believe that food is a universal language that
                  connects us all, and I'm honored to share these stories with you.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-[#D97642] hover:bg-[#C85A3C] text-white px-6 h-12 rounded gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#D97642] text-[#D97642] hover:bg-[#D97642] hover:text-white px-6 h-12 rounded bg-transparent"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#2C4A52] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-5xl md:text-6xl mb-2">500+</p>
              <p className="text-white/80">Recipes Shared</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl mb-2">15K</p>
              <p className="text-white/80">Monthly Readers</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl mb-2">100+</p>
              <p className="text-white/80">Restaurants Featured</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl mb-2">50+</p>
              <p className="text-white/80">Chef Interviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-6">Join Our Culinary Journey</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss a recipe, restaurant review, or culinary story. Let's explore the
            world of food together.
          </p>
          <Button className="bg-[#D97642] hover:bg-[#C85A3C] text-white px-8 h-14 text-lg rounded gap-2">
            Subscribe Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
