"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Can I Substitute Butter With Oil In This Recipe?",
      answer:
        "Yes, you can! While butter gives a rich, creamy flavor, you can use olive oil or any neutral cooking oil like canola or sunflower oil. For added taste, try using ghee or coconut oil for a unique twist.",
    },
    {
      question: "How Do I Make The Dish Less Spicy?",
      answer:
        "To reduce spiciness, use less chili powder or hot sauce. You can also add dairy products like yogurt or cream to mellow the heat, or include sweet ingredients like honey or sugar to balance the flavors.",
    },
    {
      question: "Can I Prepare The Chicken Ahead Of Time?",
      answer:
        "You can marinate the chicken up to 24 hours in advance and store it in the refrigerator. You can also cook it ahead and reheat it when ready to serve, though freshly cooked chicken will have the best texture.",
    },
    {
      question: "What Side Dishes Go Well With This Recipe?",
      answer:
        "This pairs wonderfully with steamed rice, roasted vegetables, a fresh garden salad, or garlic bread. For a complete meal, consider adding mashed potatoes or quinoa as healthy alternatives.",
    },
    {
      question: "Is This Recipe Gluten-Free?",
      answer:
        "The base recipe can be made gluten-free by using gluten-free soy sauce or tamari, and ensuring all other ingredients like stocks and seasonings are certified gluten-free. Always check labels to be certain.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="bg-[#2C4A52] py-16 px-6 md:py-24 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
      
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="border-t border-white/20 pt-8 mb-8">
              <h2 className="text-2xl md:text-2xl lg:text-4xl font-serif text-white mb-2">
                Frequently Asked Question?
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-0 border-t border-white/20">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/20">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex items-start justify-between text-left hover:opacity-80 transition-opacity"
                  >
                    <span className="text-lg md:text-xl font-serif text-white pr-4">
                      {index + 1}. {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="pb-6 pr-10">
                      <p className="text-white/90 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8">
            <p className="text-white/90 leading-relaxed mb-8 text-right">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words.
            </p>

            <div className="rounded-3xl overflow-hidden">
              <img
                src="/Faq-Image-Original.jpg"
                alt="Woman thinking in kitchen with decorative food icons on wall"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
