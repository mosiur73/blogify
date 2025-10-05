"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ArticlesList() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Recipes", "Cooking Tips", "Nutrition", "Restaurant Reviews", "Lifestyle"]

  const articles = [
    {
      id: 1,
      title: "How Larry Jackson signed Mariah Carey to his $400 Million Startup",
      excerpt:
        "Discover the business strategies behind one of the biggest deals in the food industry and what it means for culinary entrepreneurs.",
      date: "JUN 6 2025",
      category: "Lifestyle",
      author: "Emma Heyes",
      image: "/teriyaki-beef-with-sesame-seeds-on-black-plate.jpg",
      source: "Forbes",
      featured: true,
    },
    {
      id: 2,
      title: "Under Armour enlists gamma. for new Stephen Curry spot",
      excerpt: "A deep dive into the intersection of sports, nutrition, and brand partnerships in the culinary world.",
      date: "APR 13 2025",
      category: "Lifestyle",
      author: "John Smith",
      image: "/teriyaki-chicken-on-rice-with-lettuce.jpg",
      source: "Forbes",
      featured: false,
    },
    {
      id: 3,
      title: "Why the women of gamma. are the key to its multi-million dollar success",
      excerpt: "Exploring how female chefs and entrepreneurs are reshaping the food industry landscape.",
      date: "MAR 26 2025",
      category: "Restaurant Reviews",
      author: "Sarah Johnson",
      image: "/grilled-chicken-breast-with-herbs-and-lemon.jpg",
      source: "Entrepreneur",
      featured: false,
    },
    {
      id: 4,
      title: "Snoop Dogg, Sexyy Red products bring $420 million in revenue",
      excerpt: "Celebrity-backed food products are changing the game. Here's what you need to know about this trend.",
      date: "JAN 31 2025",
      category: "Lifestyle",
      author: "Mike Davis",
      image: "/pasta-dish-with-herbs-in-bowl.jpg",
      source: "Hollywood Reporter",
      featured: false,
    },
    {
      id: 5,
      title: "The Art of Perfect Pasta: Techniques from Italian Masters",
      excerpt:
        "Learn the secrets behind creating restaurant-quality pasta dishes at home with these expert techniques.",
      date: "MAY 20 2025",
      category: "Recipes",
      author: "Emma Heyes",
      image: "/pasta-noodles-with-sesame-seeds-falling.jpg",
      source: "Culinary Arts",
      featured: false,
    },
    {
      id: 6,
      title: "Farm to Table: Meeting Local Producers",
      excerpt: "Meet the farmers and producers who are revolutionizing the way we think about sustainable food.",
      date: "MAY 15 2025",
      category: "Lifestyle",
      author: "John Smith",
      image: "/steak-on-mashed-potatoes-with-sauce-drizzle.jpg",
      source: "Food & Wine",
      featured: false,
    },
    {
      id: 7,
      title: "Mastering the Grill: Summer BBQ Essentials",
      excerpt: "Everything you need to know to become a grilling expert this summer, from techniques to recipes.",
      date: "MAY 10 2025",
      category: "Cooking Tips",
      author: "Sarah Johnson",
      image: "/rice-with-meat-and-herbs.jpg",
      source: "Bon Appétit",
      featured: false,
    },
    {
      id: 8,
      title: "Healthy Bowl Recipes for Busy Weeknights",
      excerpt: "Quick, nutritious, and delicious bowl recipes that will transform your weeknight dinner routine.",
      date: "MAY 5 2025",
      category: "Nutrition",
      author: "Mike Davis",
      image: "/bowl-with-yogurt-and-toppings.jpg",
      source: "Health Magazine",
      featured: false,
    },
  ]

  const filteredArticles =
    activeCategory === "All" ? articles : articles.filter((article) => article.category === activeCategory)

  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)

  return (
    <div className="bg-[#F5F1E8] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#2C4A52] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">The Press</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore our latest articles, recipes, and culinary insights. From farm to table, we bring you stories that
            inspire and inform.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-[#D4C5B0] bg-[#F5F1E8] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#D97642] text-white"
                    : "bg-white text-[#2C2C2C] hover:bg-[#D97642]/10 border border-[#D4C5B0]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && activeCategory === "All" && (
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C]">Featured Article</h2>
            </div>
            <Link href={`/articles/${featuredArticle.id}`}>
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                <div className="relative h-[400px] lg:h-[500px]">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-[#D97642] text-white hover:bg-[#C85A3C]">{featuredArticle.category}</Badge>
                    <span className="text-sm text-[#D97642] font-medium">{featuredArticle.source}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-4 leading-tight group-hover:text-[#D97642] transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">By {featuredArticle.author}</span>
                    </div>
                    <span className="flex items-center gap-2 text-[#D97642] hover:text-[#C85A3C] font-medium transition-colors">
                      Read Article
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C]">
              {activeCategory === "All" ? "All Articles" : activeCategory}
            </h2>
            <p className="text-gray-600">{regularArticles.length} articles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#D97642] text-white hover:bg-[#C85A3C]">{article.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                      <span className="text-[#D97642]">• {article.source}</span>
                    </div>
                    <h3 className="font-serif text-xl text-[#2C2C2C] mb-3 leading-tight group-hover:text-[#D97642] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{article.author}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#D97642] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border-2 border-[#D97642] text-[#D97642] rounded-full hover:bg-[#D97642] hover:text-white transition-colors duration-300 font-medium">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
