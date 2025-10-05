import AboutSection from "@/components/About";
import FAQSection from "@/components/faq-section";
import FeaturedRecipes from "@/components/featured-recipes";
import HeroSection from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedRecipes></FeaturedRecipes>
      <AboutSection></AboutSection>
      <NewsletterSection></NewsletterSection>
      <FAQSection></FAQSection>
    </div>
  );
}
