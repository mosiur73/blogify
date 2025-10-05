import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock article data - in a real app, this would come from a database or API
const getArticleById = (id) => {
  const articles = {
    1: {
      id: 1,
      title: "How Larry Jackson signed Mariah Carey to his $400 Million Startup",
      excerpt:
        "Discover the business strategies behind one of the biggest deals in the food industry and what it means for culinary entrepreneurs.",
      date: "JUN 6 2025",
      category: "Lifestyle",
      author: "Emma Heyes",
      authorBio:
        "Emma is a food journalist and culinary entrepreneur with over 10 years of experience covering the intersection of food, business, and culture.",
      image: "/Food-Posts-Image-1.jpg",
      source: "Forbes",
      readTime: "8 min read",
      content: `
        <p>In the ever-evolving landscape of the food industry, few deals have captured attention quite like Larry Jackson's recent signing of celebrity chef Mariah Carey to his groundbreaking $400 million startup. This partnership represents more than just a business transaction—it's a paradigm shift in how we think about food, celebrity, and entrepreneurship.</p>

        <h2>The Vision Behind the Deal</h2>
        <p>Jackson's startup, which focuses on revolutionizing the farm-to-table experience through technology and celebrity partnerships, has been making waves in the industry. The decision to bring Carey on board wasn't just about her star power—it was about her genuine passion for sustainable food practices and her commitment to making quality ingredients accessible to everyone.</p>

        <p>"We're not just building a business," Jackson explained in a recent interview. "We're creating a movement that connects consumers directly with the sources of their food, and having someone like Mariah who truly believes in this mission is invaluable."</p>

        <h2>What This Means for the Industry</h2>
        <p>The partnership signals a broader trend in the food industry: the convergence of celebrity influence, sustainable practices, and technological innovation. As consumers become increasingly conscious about where their food comes from and how it's produced, partnerships like this one are likely to become more common.</p>

        <p>Industry experts predict that this deal will inspire other celebrities to take more active roles in food-related ventures, moving beyond simple endorsements to genuine partnerships that leverage their platforms for positive change.</p>

        <h2>The Technology Factor</h2>
        <p>At the heart of Jackson's startup is a proprietary technology platform that connects local farmers directly with consumers, eliminating middlemen and ensuring fair prices for producers while maintaining quality for buyers. Carey's involvement will help bring this technology to a wider audience, particularly among her millions of social media followers.</p>

        <p>The platform uses blockchain technology to track food from farm to table, providing complete transparency about sourcing, production methods, and environmental impact. This level of transparency is unprecedented in the industry and represents a significant step forward in building consumer trust.</p>

        <h2>Looking Ahead</h2>
        <p>As this partnership unfolds, all eyes will be on how it performs in the market. Early indicators are promising, with pre-launch interest exceeding expectations by over 300%. The success of this venture could reshape how we think about celebrity involvement in the food industry and set new standards for sustainable, technology-driven food businesses.</p>

        <p>For aspiring food entrepreneurs, the key takeaway is clear: success in today's market requires more than just a good product. It demands innovation, authenticity, and a genuine commitment to making a positive impact on the food system as a whole.</p>
      `,
    },
    2: {
      id: 2,
      title: "Under Armour enlists gamma. for new Stephen Curry spot",
      excerpt: "A deep dive into the intersection of sports, nutrition, and brand partnerships in the culinary world.",
      date: "APR 13 2025",
      category: "Lifestyle",
      author: "John Smith",
      authorBio:
        "John is a sports nutrition expert and food writer who specializes in the relationship between athletic performance and diet.",
      image: "/Food-Posts-Image-2.jpg",
      source: "Forbes",
      readTime: "6 min read",
      content: `
        <p>The intersection of sports, nutrition, and culinary excellence has never been more apparent than in Under Armour's latest collaboration with gamma. for their new Stephen Curry campaign. This partnership highlights the growing importance of nutrition in athletic performance and the role that innovative food companies play in supporting elite athletes.</p>

        <h2>The Power of Nutrition in Sports</h2>
        <p>Stephen Curry's success on the basketball court is well-documented, but what many don't realize is the crucial role that nutrition plays in his performance. The partnership with gamma. brings this aspect of athletic excellence to the forefront, showcasing how proper nutrition can be a game-changer for athletes at all levels.</p>

        <p>Gamma.'s approach to food is revolutionary—they focus on creating meals that are not only nutritionally optimized for athletic performance but also delicious and sustainable. Their work with Curry demonstrates that high-performance nutrition doesn't have to mean sacrificing taste or environmental responsibility.</p>

        <h2>Behind the Campaign</h2>
        <p>The campaign features Curry in various settings, from the basketball court to the kitchen, emphasizing the connection between what he eats and how he performs. The visuals are stunning, showcasing gamma.'s beautifully crafted meals alongside Curry's athletic prowess.</p>

        <p>What makes this campaign particularly effective is its authenticity. Curry has been a long-time advocate for healthy eating and has worked with nutritionists throughout his career. His partnership with gamma. is a natural extension of his commitment to optimal nutrition.</p>

        <h2>Impact on the Food Industry</h2>
        <p>This collaboration is part of a larger trend of athletes taking active roles in the food industry. From restaurant investments to meal delivery services, professional athletes are increasingly recognizing the importance of nutrition and using their platforms to promote healthier eating habits.</p>

        <p>For food entrepreneurs, this trend presents significant opportunities. As consumers become more health-conscious and look to athletes as role models, there's growing demand for products and services that combine nutritional excellence with convenience and taste.</p>
      `,
    },
    // Add more articles as needed
  }

  return articles[id] || articles[1]
}

export default function ArticleDetailPage({ params }) {
  const article = getArticleById(params.id)

  // Related articles
  const relatedArticles = [
    {
      id: 3,
      title: "The Art of Perfect Pasta: Techniques from Italian Masters",
      image: "/Food-Posts-Image-3.jpg",
      category: "Recipes",
      date: "MAY 20 2025",
    },
    {
      id: 4,
      title: "Farm to Table: Meeting Local Producers",
      image: "/Food-Posts-Image-4.jpg",
      category: "Lifestyle",
      date: "MAY 15 2025",
    },
    {
      id: 5,
      title: "Mastering the Grill: Summer BBQ Essentials",
      image: "/Food-Posts-Image-5.jpg",
      category: "Cooking Tips",
      date: "MAY 10 2025",
    },
  ]

  return (
    <div className="bg-[#F5F1E8] min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back Button */}
        <Link
          href="/articles"
          className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-white hover:text-[#D97642] transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Articles</span>
        </Link>

        {/* Article Meta */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-[#D97642] text-white hover:bg-[#C85A3C] mb-4">{article.category}</Badge>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {article.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <span>•</span>
              <span className="text-[#D97642]">{article.source}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Share Buttons */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-[#D4C5B0]">
            <p className="text-gray-600 font-medium">Share this article</p>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white border border-[#D4C5B0] flex items-center justify-center hover:bg-[#D97642] hover:text-white hover:border-[#D97642] transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-[#D4C5B0] flex items-center justify-center hover:bg-[#D97642] hover:text-white hover:border-[#D97642] transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-[#D4C5B0] flex items-center justify-center hover:bg-[#D97642] hover:text-white hover:border-[#D97642] transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-[#D4C5B0] flex items-center justify-center hover:bg-[#D97642] hover:text-white hover:border-[#D97642] transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-[#2C2C2C] prose-headings:font-normal
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#D97642] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#2C2C2C] prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-white rounded-2xl border border-[#D4C5B0]">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-[#D97642] flex items-center justify-center text-white text-2xl font-serif flex-shrink-0">
                {article.author.charAt(0)}
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#2C2C2C] mb-2">About {article.author}</h3>
                <p className="text-gray-600 leading-relaxed">{article.authorBio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <Link
                key={related.id}
                href={`/articles/${related.id}`}
                className="group bg-[#F5F1E8] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={related.image || "/placeholder.svg"}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#D97642] text-white">{related.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {related.date}
                  </p>
                  <h3 className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#D97642] transition-colors">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
